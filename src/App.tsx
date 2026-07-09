import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/chatbot/Chatbot';
import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Reserved for pages we've intentionally announced but not built
              yet - wire a specific route here when that's the case. Also
              doubles as a stable URL to preview the Coming Soon design. */}
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          {/* Anything else is a genuinely broken/unknown URL. */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
