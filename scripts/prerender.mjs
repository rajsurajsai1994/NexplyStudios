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

const SITE_URL = 'https://www.nexply.in';
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

  return `
    <meta name="description" content="${escapeHtml(head.description)}" />
    <meta name="robots" content="${head.noindex ? 'noindex, nofollow' : 'index, follow'}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Nexply Studios" />
    <meta property="og:title" content="${escapeHtml(fullTitle)}" />
    <meta property="og:description" content="${escapeHtml(head.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${image}" />

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

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`Prerendered ${ok}/${PRERENDER_ROUTES.length} routes.`);
