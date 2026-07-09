import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import Chatbot from './components/chatbot/Chatbot';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import ComingSoonPage from './pages/ComingSoonPage';
import NotFoundPage from './pages/NotFoundPage';
import { SSRHeadContext, type SSRHeadData } from './lib/ssrHead';
import { SERVICE_PAGES } from './lib/servicePages';
import { BLOG_POSTS } from './lib/blogPosts';

// Re-exported so the prerender script (plain Node, no TS/JSX loader) can
// enumerate every real route from the same SSR build instead of keeping a
// second hand-written list in sync.
export const PRERENDER_ROUTES: string[] = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/blog',
  '/coming-soon',
  '/404',
  ...SERVICE_PAGES.map((s) => `/services/${s.slug}`),
  ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
];

// Mirrors the route list in App.tsx, but with eager (non-lazy) imports -
// prerendering runs once at build time in Node, so client-side code
// splitting doesn't apply here, and renderToString can't suspend on
// React.lazy() the way the browser build does.
function AppRoutesEager() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export function render(url: string): { html: string; head: SSRHeadData | null } {
  let head: SSRHeadData | null = null;

  const html = renderToString(
    <SSRHeadContext.Provider value={(data) => { head = data; }}>
      <StaticRouter location={url}>
        <AppRoutesEager />
        <Chatbot />
      </StaticRouter>
    </SSRHeadContext.Provider>,
  );

  return { html, head };
}
