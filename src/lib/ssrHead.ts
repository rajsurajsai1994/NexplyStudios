import { createContext } from 'react';

export interface SSRHeadData {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

// During the prerender build, each page's useSEO() call reports its head
// data here (synchronously, during render) instead of only mutating
// document.head in a client-only effect - that's how the prerender script
// gets real per-route <title>/meta/JSON-LD without duplicating each page's
// SEO logic. Unused (stays null) in the normal browser build.
export const SSRHeadContext = createContext<((data: SSRHeadData) => void) | null>(null);
