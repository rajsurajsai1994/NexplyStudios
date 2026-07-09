import { useState } from 'react';
import Navbar from '../components/Navbar';
import ServicesHeroSection from '../components/jack/ServicesHeroSection';
import JackMarqueeSection from '../components/jack/JackMarqueeSection';
import ClientWorksGridSection from '../components/jack/ClientWorksGridSection';
import FAQSection from '../components/FAQSection';
import { FAQS } from '../lib/faqs';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import { NEXPLY_SERVICES } from '../lib/services';
import { DARK_BG_FLAT } from '../lib/brand';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema, faqSchema } from '../lib/seo';

export default function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = NEXPLY_SERVICES[activeIndex];

  useSEO({
    title: 'Portfolio',
    description:
      "See Nexply Studios' client work across web design, app development, branding, and marketing - filterable by service.",
    path: '/portfolio',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
      ]),
      faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  });

  return (
    <main>
      <Navbar />

      <ServicesHeroSection
        pageLabel="Portfolio"
        line1="Selected Work"
        line2="Across Every Service"
        subtext="A closer look at what we've built - filter by whichever service you're curious about."
      />
      <JackMarqueeSection />

      {/* Service filter chips */}
      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{ padding: 'clamp(48px, 6vw, 72px) clamp(16px, 4vw, 40px) clamp(64px, 8vw, 96px)' }}
        >
          {NEXPLY_SERVICES.map((service, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={service.slug}
                onClick={() => setActiveIndex(i)}
                className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300"
                style={
                  isActive
                    ? { background: service.gradient, color: 'white' }
                    : {
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(255,255,255,0.03)',
                        color: 'rgba(255,255,255,0.75)',
                      }
                }
              >
                {service.title}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid re-mounts (via key) so the crossfade-free swap still feels
          intentional when switching between service filters. */}
      <ClientWorksGridSection key={active.slug} seedPrefix={active.slug} />

      <FAQSection />
      <FinalCTABanner />
      <Footer />
    </main>
  );
}
