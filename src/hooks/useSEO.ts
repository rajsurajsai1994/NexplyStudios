import { useContext, useEffect } from 'react';
import { SSRHeadContext } from '../lib/ssrHead';

interface SEOConfig {
  title: string;
  description: string;
  path: string; // e.g. '/services/website-design-development'
  ogImage?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SITE_URL = 'https://www.nexplystudio.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Sets per-page title, description, canonical URL, Open Graph / Twitter tags,
// and JSON-LD structured data. Runs client-side (this is a CSR SPA, no SSR),
// so it's picked up by crawlers that execute JavaScript - which covers
// Googlebot and most modern search engines, but NOT every AI/answer-engine
// crawler. See the note left in App.tsx for the honest limitation here.
export function useSEO({ title, description, path, ogImage, jsonLd, noindex }: SEOConfig) {
  // Reports synchronously during render (SSR-safe) so the prerender script
  // can capture it; a no-op in the normal browser build (context is null).
  const reportToSSR = useContext(SSRHeadContext);
  reportToSSR?.({ title, description, path, ogImage, jsonLd, noindex });

  useEffect(() => {
    const fullTitle = title.includes('Nexply') ? title : `${title} | Nexply Studios`;
    const url = `${SITE_URL}${path}`;
    const image = ogImage ?? DEFAULT_OG_IMAGE;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:site_name', 'Nexply Studios');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    // JSON-LD structured data
    const existing = document.getElementById('page-jsonld');
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, ogImage, jsonLd, noindex]);
}

export { SITE_URL };
