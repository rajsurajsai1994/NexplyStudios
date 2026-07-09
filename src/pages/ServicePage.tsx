import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServicesHeroSection from '../components/jack/ServicesHeroSection';
import JackMarqueeSection from '../components/jack/JackMarqueeSection';
import JackProjectsSection from '../components/jack/JackProjectsSection';
import ClientWorksGridSection from '../components/jack/ClientWorksGridSection';
import InstagramCarouselShowcase from '../components/jack/InstagramCarouselShowcase';
import MasonryWorksSection from '../components/jack/MasonryWorksSection';
import ServiceBodySection from '../components/jack/ServiceBodySection';
import FAQSection from '../components/FAQSection';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import NotFoundPage from './NotFoundPage';
import { getServicePageBySlug } from '../lib/servicePages';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema, serviceSchema, faqSchema } from '../lib/seo';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServicePageBySlug(slug);

  // Hooks must run unconditionally on every render, so this is called
  // before the early-return below - falls back to generic values (and
  // noindex) when the slug doesn't match a real service.
  useSEO({
    title: service ? service.title : 'Nexply Studios',
    description: service
      ? service.heroSubtext
      : 'Nexply Studios services.',
    path: `/services/${slug ?? ''}`,
    noindex: !service,
    jsonLd: service
      ? [
          ORGANIZATION_SCHEMA,
          serviceSchema({ name: service.title, description: service.heroSubtext, path: `/services/${service.slug}` }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          faqSchema(service.faqs.map((f) => ({ question: f.q, answer: f.a }))),
        ]
      : undefined,
  });

  // Unknown service slug - a broken link, not a page we've deliberately
  // teased, so show a real 404 rather than "coming soon".
  if (!service) return <NotFoundPage />;

  return (
    <main>
      <Navbar />

      <ServicesHeroSection
        pageLabel={service.title}
        line1={service.heroLine1}
        line2={service.heroLine2}
        subtext={service.heroSubtext}
      />
      {!service.hideMarquee && (
        <JackMarqueeSection images={service.marqueeImages ?? service.clientWorks?.map((w) => w.img)} />
      )}

      {service.slug === 'social-media-marketing' ? (
        <>
          <InstagramCarouselShowcase />
          <MasonryWorksSection
            heading={service.clientWorksHeading ?? 'Our Client Works'}
            subtext={service.clientWorksSubtext ?? "A few of the projects we've brought to life."}
            items={service.clientWorks ?? []}
          />
        </>
      ) : service.clientWorksLayout === 'masonry' ? (
        <MasonryWorksSection
          heading={service.clientWorksHeading ?? 'Our Client Works'}
          subtext={service.clientWorksSubtext ?? "A few of the projects we've brought to life."}
          items={service.clientWorks ?? []}
        />
      ) : service.layout === 'stacking' ? (
        <JackProjectsSection projects={service.stackingProjects} />
      ) : (
        <ClientWorksGridSection seedPrefix={service.slug} works={service.clientWorks} featured={service.featuredWorks} />
      )}

      <ServiceBodySection body={service.body} />
      <FAQSection items={service.faqs} />
      <FinalCTABanner />
      <Footer />
    </main>
  );
}
