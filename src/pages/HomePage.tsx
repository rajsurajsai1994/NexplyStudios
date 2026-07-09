import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogosSection from '../components/LogosSection';
import TrustedSection from '../components/TrustedSection';
import PortfolioSection from '../components/PortfolioSection';
import MovementBanner from '../components/MovementBanner';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../lib/seo';

export default function HomePage() {
  useSEO({
    title: 'Nexply Studios - Website, App & Brand Design Agency in Hyderabad',
    description:
      'Nexply Studios is a Hyderabad-based creative agency offering website design & development, app design, branding, UI/UX, and marketing - built to actually convert.',
    path: '/',
    jsonLd: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
  });

  return (
    <main>
      <Navbar />
      <Hero />
      <LogosSection />
      <TrustedSection />
      <PortfolioSection />
      <MovementBanner />
      <TestimonialsSection />
      <FinalCTABanner />
      <Footer />
    </main>
  );
}
