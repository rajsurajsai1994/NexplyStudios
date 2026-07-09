import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import MissionVisionSection from '../components/MissionVisionSection';
import ProcessSection from '../components/ProcessSection';
import ToonhubSection from '../components/ToonhubSection';
import FAQSection from '../components/FAQSection';
import { FAQS } from '../lib/faqs';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema, faqSchema } from '../lib/seo';

export default function AboutPage() {
  useSEO({
    title: 'About Us',
    description:
      "Meet the team behind Nexply Studios - a small, focused creative agency in Hyderabad building websites, apps, and brands that actually work.",
    path: '/about',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
      faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  });

  return (
    <main>
      <Navbar />
      <AboutHero />
      <MissionVisionSection />
      <ProcessSection />
      <ToonhubSection />
      <FAQSection />
      <FinalCTABanner />
      <Footer />
    </main>
  );
}
