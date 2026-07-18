import Navbar from '../components/Navbar';
import ServicesHeroSection from '../components/jack/ServicesHeroSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema } from '../lib/seo';

export default function ContactPage() {
  useSEO({
    title: 'Contact Us',
    description:
      'Get in touch with Nexply Studios - Hyderabad-based creative agency. Call +91 78422 03319 or email next@nexplystudio.com to start your project.',
    path: '/contact',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  });

  return (
    <main>
      <Navbar />
      <ServicesHeroSection
        pageLabel="Contact"
        line1="You've Got The Vision."
        line2="We've Got The Minds."
        subtext="Bring the idea half-formed. We'll finish the thought. Just tell us when you're ready."
        ctaLabel="Get in Touch"
        ctaHref="#contact-form"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
