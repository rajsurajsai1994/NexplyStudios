import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/chatbot/Chatbot';
import HomePage from './pages/HomePage';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from './lib/legal';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const CareNextPage = lazy(() => import('./pages/CareNextPage'));
const EventManagementPage = lazy(() => import('./pages/EventManagementPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const CaseStudiesListPage = lazy(() => import('./pages/CaseStudiesListPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const LocalPage = lazy(() => import('./pages/LocalPage'));
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
          <Route path="/products/carenext" element={<CareNextPage />} />
          <Route path="/event-management" element={<EventManagementPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<CaseStudiesListPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/hyderabad/:slug" element={<LocalPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<LegalPage doc={PRIVACY_POLICY} />} />
          <Route path="/terms" element={<LegalPage doc={TERMS_OF_SERVICE} />} />
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
