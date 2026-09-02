import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Download, MapPin, Calendar, Briefcase, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import FAQSection from '../components/FAQSection';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import ComingSoonPage from './ComingSoonPage';
import { getCaseStudyBySlug, caseStudySchema } from '../lib/caseStudies';
import { NEXPLY_SERVICES } from '../lib/services';
import { DARK_BG_FLAT, DARK_BG_GRADIENT, glassDifferentiation, gradientTextStyle } from '../lib/brand';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema, faqSchema } from '../lib/seo';

const PRINT_CSS = `
@media print {
  body { background: #fff !important; }
  .cs-noprint { display: none !important; }
  .cs-print-area { color: #111 !important; background: #fff !important; }
  .cs-print-area * { color: #111 !important; background: transparent !important; box-shadow: none !important; border-color: #ccc !important; }
  .cs-print-area section { padding: 12px 0 !important; }
}
`;

export default function CaseStudyPage() {
  const { slug } = useParams();
  const cs = getCaseStudyBySlug(slug);

  useSEO({
    title: cs ? `${cs.client} - Case Study` : 'Case Study',
    description: cs ? cs.summary : 'Nexply Studios case study.',
    path: `/case-studies/${slug ?? ''}`,
    noindex: !cs,
    jsonLd: cs
      ? [
          ORGANIZATION_SCHEMA,
          caseStudySchema(cs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: cs.client, path: `/case-studies/${cs.slug}` },
          ]),
          ...(cs.faqs && cs.faqs.length
            ? [faqSchema(cs.faqs.map((f) => ({ question: f.q, answer: f.a })))]
            : []),
        ]
      : undefined,
  });

  if (!cs) return <ComingSoonPage />;

  const relatedServices = NEXPLY_SERVICES.filter((s) => cs.relatedServiceSlugs.includes(s.slug));

  return (
    <main className="cs-print-area">
      <style>{PRINT_CSS}</style>
      <div className="cs-noprint">
        <Navbar />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: DARK_BG_GRADIENT }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,108,255,0.12), transparent 70%)` }}
        />
        <div
          className="relative z-10 mx-auto flex flex-col"
          style={{ maxWidth: 900, padding: 'clamp(130px, 16vw, 190px) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 72px)' }}
        >
          <Link
            to="/case-studies"
            className="cs-noprint inline-flex items-center gap-1.5 text-[13px] mb-6 self-start transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <ArrowLeft size={14} />
            All case studies
          </Link>

          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Case Study
          </span>
          <h1 className="text-white font-medium" style={{ fontSize: 'clamp(30px, 4.4vw, 52px)', lineHeight: 1.15 }}>
            {cs.client}
          </h1>
          <p className="mt-5 max-w-2xl" style={{ color: 'rgb(189, 174, 231)', fontSize: 'clamp(15px, 1.2vw, 19px)', lineHeight: 1.6 }}>
            {cs.tagline}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <span className="flex items-center gap-2">
              <Briefcase size={14} />
              {cs.industry}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              {cs.location}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              Live since {cs.launchLabel}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white text-[15px] font-medium transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: cs.accent, boxShadow: '0 12px 30px rgba(124,108,255,0.28)' }}
            >
              Start a project like this
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={() => window.print()}
              className="cs-noprint inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:bg-white/[0.06]"
              style={{ border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)' }}
            >
              <Download size={15} />
              Download case study (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Deliverables + summary */}
      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16"
          style={{ maxWidth: 1080, padding: 'clamp(56px, 7vw, 90px) clamp(16px, 4vw, 40px)' }}
        >
          <div>
            <h2 className="text-white font-medium mb-4" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)' }}>
              What we delivered
            </h2>
            <ul className="flex flex-col gap-2.5">
              {cs.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#A78BFA' }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(15px, 1.15vw, 18px)', lineHeight: 1.8 }}>
            {cs.summary}
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
        <div
          className="relative z-10 mx-auto"
          style={{ maxWidth: 1120, padding: 'clamp(56px, 7vw, 100px) clamp(16px, 4vw, 40px)' }}
        >
          <h2 className="text-white font-medium mb-12 text-center" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
            Measurable <span style={gradientTextStyle}>outcomes</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cs.outcomes.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl backdrop-blur-md p-6 h-full"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                <p className="text-[11px] uppercase tracking-wide mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {m.label}
                </p>
                <p className="font-semibold" style={{ ...gradientTextStyle, fontSize: 'clamp(22px, 2.4vw, 30px)' }}>
                  {m.value}
                </p>
                {m.detail && (
                  <p className="mt-2 text-[13px]" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>
                    {m.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative sections */}
      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 mx-auto flex flex-col gap-12"
          style={{ maxWidth: 760, padding: 'clamp(56px, 7vw, 100px) clamp(16px, 4vw, 40px)' }}
        >
          {cs.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="text-white font-medium mb-4" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>
                {sec.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {sec.body.map((para, i) => (
                  <p key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(15px, 1.15vw, 17px)', lineHeight: 1.8 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {cs.quote && (
            <div
              className="rounded-2xl p-6 sm:p-8 flex gap-4"
              style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
            >
              <Quote size={24} className="shrink-0" style={{ color: '#A78BFA' }} />
              <div>
                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.7 }}>
                  &ldquo;{cs.quote.text}&rdquo;
                </p>
                <p className="mt-4 text-sm text-white font-medium">{cs.quote.name}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{cs.quote.role}</p>
              </div>
            </div>
          )}

          {/* Related services */}
          {relatedServices.length > 0 && (
            <div className="cs-noprint">
              <h2 className="text-white font-medium mb-4" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)' }}>
                Services behind this work
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06]"
                    style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
                  >
                    {s.title}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {cs.faqs && cs.faqs.length > 0 && (
        <div className="cs-noprint">
          <FAQSection items={cs.faqs} />
        </div>
      )}

      <div className="cs-noprint">
        <FinalCTABanner />
        <Footer />
      </div>
    </main>
  );
}
