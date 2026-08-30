// Runs after the client + SSR builds. Renders every real route to static
// HTML (visible content + correct <title>/meta/JSON-LD) so search engines
// and AI/answer-engine crawlers that don't execute JavaScript still see
// real per-page content, not just the homepage shell.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-server', 'entry-server.js');

const SITE_URL = 'https://www.nexplystudio.com';
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render, PRERENDER_ROUTES } = await import(`file://${ssrEntry.replace(/\\/g, '/')}`);

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildHead(head, url) {
  if (!head) return '';
  const canonicalUrl = `${SITE_URL}${url}`;
  const image = head.ogImage ?? `${SITE_URL}/og-default.png`;
  const fullTitle = head.title.includes('Nexply') ? head.title : `${head.title} | Nexply Studios`;
  const jsonLdArray = head.jsonLd ? (Array.isArray(head.jsonLd) ? head.jsonLd : [head.jsonLd]) : [];

  const a = head.article;
  const articleMeta = a
    ? `
    <meta property="article:published_time" content="${escapeHtml(a.publishedTime)}" />
    <meta property="article:modified_time" content="${escapeHtml(a.modifiedTime ?? a.publishedTime)}" />
    <meta property="article:author" content="${escapeHtml(a.author)}" />
    <meta property="article:section" content="${escapeHtml(a.section)}" />${(a.tags ?? [])
        .map((t) => `\n    <meta property="article:tag" content="${escapeHtml(t)}" />`)
        .join('')}`
    : '';

  return `
    <meta name="description" content="${escapeHtml(head.description)}" />
    <meta name="robots" content="${head.noindex ? 'noindex, nofollow' : 'index, follow'}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <meta property="og:type" content="${a ? 'article' : 'website'}" />
    <meta property="og:site_name" content="Nexply Studios" />
    <meta property="og:title" content="${escapeHtml(fullTitle)}" />
    <meta property="og:description" content="${escapeHtml(head.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_IN" />${articleMeta}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(head.description)}" />
    <meta name="twitter:image" content="${image}" />

    ${jsonLdArray.map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`).join('\n    ')}
    <title>${escapeHtml(fullTitle)}</title>`;
}

let ok = 0;
for (const url of PRERENDER_ROUTES) {
  const { html, head } = render(url);

  // Function replacers, not string replacers - a string second argument to
  // .replace() treats "$$" etc. as special patterns, which would corrupt
  // real content like "priceRange": "$$".
  const page = template
    .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, () => buildHead(head, url))
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);

  // Most static hosts (Netlify, Vercel, GitHub Pages, Cloudflare Pages)
  // auto-detect a file literally named 404.html at the publish root and
  // serve it - with a real 404 status - for any unmatched path. Every other
  // route gets its own folder with an index.html as usual.
  const outDir = url === '/' ? distDir : url === '/404' ? distDir : path.join(distDir, url.replace(/^\//, ''));
  const outFile = url === '/404' ? '404.html' : 'index.html';
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, outFile), page);
  ok++;
}

// --- sitemap.xml, generated from the same route list so it can never drift ---
const today = new Date().toISOString().slice(0, 10);
function sitemapMeta(url) {
  if (url === '/404') return null; // never list the 404
  if (url === '/') return { changefreq: 'weekly', priority: '1.0' };
  if (url === '/coming-soon') return { changefreq: 'monthly', priority: '0.3' };
  if (url === '/privacy' || url === '/terms') return { changefreq: 'yearly', priority: '0.2' };
  if (url.startsWith('/services/')) return { changefreq: 'monthly', priority: '0.9' };
  if (url.startsWith('/products/')) return { changefreq: 'monthly', priority: '0.9' };
  if (url === '/event-management') return { changefreq: 'monthly', priority: '0.8' };
  if (url.startsWith('/blog/')) return { changefreq: 'monthly', priority: '0.6' };
  if (url === '/blog') return { changefreq: 'weekly', priority: '0.7' };
  return { changefreq: 'monthly', priority: '0.7' };
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PRERENDER_ROUTES.map((url) => {
  const meta = sitemapMeta(url);
  if (!meta) return null;
  return `  <url>
    <loc>${SITE_URL}${url === '/' ? '/' : url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
})
  .filter(Boolean)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`Prerendered ${ok}/${PRERENDER_ROUTES.length} routes. Wrote sitemap.xml.`);
