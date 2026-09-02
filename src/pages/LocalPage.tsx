import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import FAQSection from '../components/FAQSection';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import ComingSoonPage from './ComingSoonPage';
import { getLocalPageBySlug } from '../lib/localPages';
import { getServicePageBySlug } from '../lib/servicePages';
import { getCaseStudyBySlug } from '../lib/caseStudies';
import { DARK_BG_FLAT, DARK_BG_GRADIENT, glassDifferentiation, gradientTextStyle } from '../lib/brand';
import { useSEO, SITE_URL } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema, faqSchema } from '../lib/seo';

export default function LocalPage() {
  const { slug } = useParams();
  const page = getLocalPageBySlug(slug);
  const service = page ? getServicePageBySlug(page.serviceSlug) : undefined;

  useSEO({
    title: page ? page.metaTitle : 'Hyderabad',
    description: page ? page.metaDescription : '',
    path: `/hyderabad/${slug ?? ''}`,
    noindex: !page,
    jsonLd: page
      ? [
          ORGANIZATION_SCHEMA,
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: page.h1,
            serviceType: service?.title ?? page.h1,
            description: page.metaDescription,
            url: `${SITE_URL}/hyderabad/${page.slug}`,
            provider: { '@id': `${SITE_URL}/#organization` },
            areaServed: { '@type': 'City', name: 'Hyderabad' },
            availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/contact` },
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Hyderabad', path: '/hyderabad/' + page.slug },
            { name: page.h1, path: `/hyderabad/${page.slug}` },
          ]),
          faqSchema(page.faqs.map((f) => ({ question: f.q, answer: f.a }))),
        ]
      : undefined,
  });

  if (!page) return <ComingSoonPage />;

  const caseStudies = page.relatedCaseStudySlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: DARK_BG_GRADIENT }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,108,255,0.12), transparent 70%)' }} />
        <div
          className="relative z-10 mx-auto flex flex-col items-center text-center"
          style={{ maxWidth: 820, padding: 'clamp(140px, 17vw, 210px) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 72px)' }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <MapPin size={12} />
            Hyderabad
          </span>
          <h1 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 4.2vw, 50px)', lineHeight: 1.15 }}>
            {page.h1}
          </h1>
          <p className="mt-5 max-w-xl" style={{ color: 'rgb(189, 174, 231)', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.6 }}>
            {page.heroSubtext}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white text-[15px] font-medium transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: page.accent, boxShadow: '0 12px 30px rgba(124,108,255,0.28)' }}
            >
              Book a call
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            {service && (
              <Link
                to={`/services/${page.serviceSlug}`}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:bg-white/[0.06]"
                style={{ border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)' }}
              >
                Full service details
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 mx-auto flex flex-col gap-5"
          style={{ maxWidth: 720, padding: 'clamp(56px, 7vw, 90px) clamp(16px, 4vw, 40px)' }}
        >
          {page.intro.map((para, i) => (
            <p key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(15px, 1.15vw, 18px)', lineHeight: 1.8 }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
        <div
          className="relative z-10 mx-auto"
          style={{ maxWidth: 1080, padding: 'clamp(56px, 7vw, 100px) clamp(16px, 4vw, 40px)' }}
        >
          <h2 className="text-white font-medium mb-12 text-center" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
            {page.processHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {page.process.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl backdrop-blur-md p-6 h-full"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                <span className="text-[13px] font-semibold" style={gradientTextStyle}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white font-medium text-[17px] mt-2 mb-2">{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 mx-auto"
          style={{ maxWidth: 900, padding: 'clamp(56px, 7vw, 100px) clamp(16px, 4vw, 40px)' }}
        >
          <h2 className="text-white font-medium mb-10 text-center" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}>
            {page.evidenceHeading}
          </h2>
          <div className="flex flex-col gap-4">
            {page.evidence.map((ev) => {
              const inner = (
                <>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="text-white font-medium">{ev.client}</span>
                    <span className="text-[12px] flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      <MapPin size={11} />
                      {ev.area}
                    </span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.65 }}>{ev.work}</p>
                  {ev.caseStudySlug && (
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium" style={{ color: '#A78BFA' }}>
                      Read the full case study
                      <ArrowRight size={13} />
                    </span>
                  )}
                </>
              );
              return ev.caseStudySlug ? (
                <Link
                  key={ev.client}
                  to={`/case-studies/${ev.caseStudySlug}`}
                  className="rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.05]"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={ev.client}
                  className="rounded-2xl p-6"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {caseStudies.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {caseStudies.map((c) => (
                <Link
                  key={c.slug}
                  to={`/case-studies/${c.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06]"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
                >
                  {c.client} case study
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <FAQSection items={page.faqs} />
      <FinalCTABanner />
      <Footer />
    </main>
  );
}
