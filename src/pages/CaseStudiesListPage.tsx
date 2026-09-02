import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import { CASE_STUDIES } from '../lib/caseStudies';
import { DARK_BG_FLAT, DARK_BG_GRADIENT, glassDifferentiation, gradientTextStyle } from '../lib/brand';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema, itemListSchema } from '../lib/seo';

export default function CaseStudiesListPage() {
  useSEO({
    title: 'Case Studies',
    description:
      'Real Nexply Studios client work in Hyderabad, with the deliverables and measurable outcomes - PAL Physiotherapy, PrintX Design & Printing, and more.',
    path: '/case-studies',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Nexply Studios Case Studies',
        url: 'https://www.nexplystudio.com/case-studies',
        inLanguage: 'en-IN',
        about: { '@id': 'https://www.nexplystudio.com/#organization' },
      },
      ORGANIZATION_SCHEMA,
      itemListSchema(
        'Nexply Studios case studies',
        CASE_STUDIES.map((c) => ({ name: c.client, path: `/case-studies/${c.slug}` })),
      ),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Case Studies', path: '/case-studies' },
      ]),
    ],
  });

  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden" style={{ background: DARK_BG_GRADIENT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.1)')} />
        <div
          className="relative z-10 mx-auto flex flex-col items-center text-center"
          style={{ maxWidth: 760, padding: 'clamp(140px, 17vw, 210px) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 72px)' }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Case Studies
          </span>
          <h1 className="text-white font-medium" style={{ fontSize: 'clamp(30px, 4.4vw, 52px)', lineHeight: 1.15 }}>
            The work, and what it <span style={gradientTextStyle}>actually did</span>
          </h1>
          <p className="mt-5" style={{ color: 'rgb(189, 174, 231)', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.6 }}>
            Named clients, real deliverables, and the numbers that moved - mostly local businesses
            in Hyderabad, grown without ad spend.
          </p>
        </div>
      </section>

      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          style={{ maxWidth: 1080, padding: 'clamp(56px, 7vw, 100px) clamp(16px, 4vw, 40px)' }}
        >
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              to={`/case-studies/${c.slug}`}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-md p-7 flex flex-col"
              style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="h-1 w-12 rounded-full mb-5" style={{ background: c.accent }} />
              <h2 className="text-white font-medium mb-2" style={{ fontSize: 'clamp(19px, 2vw, 24px)', lineHeight: 1.25 }}>
                {c.client}
              </h2>
              <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                {c.tagline}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={12} />
                  {c.industry}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  {c.location}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.outcomes.slice(0, 3).map((m) => (
                  <span
                    key={m.label}
                    className="text-[11px] rounded-full px-2.5 py-1"
                    style={{ border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.7)' }}
                  >
                    {m.label}: {m.value}
                  </span>
                ))}
              </div>
              <span
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                Read the case study
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FinalCTABanner />
      <Footer />
    </main>
  );
}
