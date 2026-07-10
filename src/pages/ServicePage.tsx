import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServicesHeroSection from '../components/jack/ServicesHeroSection';
import JackProjectsSection from '../components/jack/JackProjectsSection';
import AppShowcaseSection from '../components/jack/AppShowcaseSection';
import LargeDeckShowcase from '../components/jack/LargeDeckShowcase';
import ClientWorksGridSection from '../components/jack/ClientWorksGridSection';
import InstagramCarouselShowcase from '../components/jack/InstagramCarouselShowcase';
import PublicationFlipbookSection from '../components/jack/PublicationFlipbookSection';
import PitchDeckShowcase from '../components/jack/PitchDeckShowcase';
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

      {service.slug === 'social-media-marketing' ? (
        <>
          <InstagramCarouselShowcase />
          <MasonryWorksSection
            heading={service.clientWorksHeading ?? 'Our Client Works'}
            subtext={service.clientWorksSubtext ?? "A few of the projects we've brought to life."}
            items={service.clientWorks ?? []}
          />
        </>
      ) : service.slug === 'print-publication-design' ? (
        <PublicationFlipbookSection />
      ) : service.slug === 'presentation-design' ? (
        <PitchDeckShowcase />
      ) : service.slug === 'app-design-development' ? (
        <AppShowcaseSection
          subtext="Real apps we've designed and built end-to-end, browsed the same way a client would."
          studies={[
            {
              id: 'pal-crm',
              title: 'CRM Platform',
              client: 'PAL Physiotherapy & Sports Rehab',
              industry: 'Healthcare',
              description:
                'A full clinic management CRM covering patient and doctor appointment scheduling, reports and analytics, leave management, doctor management, and expense and income tracking, all from one dashboard.',
              screens: [
                { src: '/app-pal-reports.png', label: 'Reports & Analytics' },
                { src: '/app-pal-appointments.png', label: 'Appointments' },
                { src: '/app-pal-doctors.png', label: 'Doctor Management' },
                { src: '/app-pal-login.png', label: 'Sign In' },
              ],
            },
            {
              id: 'reddit-youtube-shorts',
              title: 'YouTube Reddit Shorts Generator',
              client: 'YouTube Reddit Shorts',
              industry: 'SaaS - Content Automation',
              description:
                'A Reddit-to-video tool that turns Reddit threads into scroll-stopping YouTube Shorts - customize the post preview, build the video in a built-in media editor, add background music or voiceover, then preview and download the final clip.',
              screens: [
                { src: '/app-redditshorts-login.jpg', label: 'Landing & Sign Up' },
                { src: '/app-redditshorts-customize.jpg', label: 'Customize Your Post' },
                { src: '/app-redditshorts-editor.jpg', label: 'Media Editor' },
                { src: '/app-redditshorts-preview.jpg', label: 'Preview & Download' },
              ],
            },
            {
              id: 'ai-universe',
              title: 'AI Universe',
              client: 'AI Universee',
              industry: 'SaaS - AI Content Generation',
              description:
                "A multi-model AI content generation platform - pick from GPT-4, Claude, Gemini, LLaMA, Mistral, and more, dial in creativity, length, tone, and language, then generate, compare, and regenerate content until it's right.",
              screens: [
                { src: '/app-aiuniverse-generate.jpg', label: 'Create Campaign' },
                { src: '/app-aiuniverse-tweak.jpg', label: 'Tweak & Regenerate' },
              ],
            },
          ]}
        />
      ) : service.slug === 'brand-guidelines-identity' ? (
        <LargeDeckShowcase
          subtext="A real brand book we designed - browse it the same way a client would in the room."
          deck={{
            id: 'beyond-bajji',
            name: 'Beyond Bajji',
            industry: 'Food & Beverage - Branding',
            description:
              "An 11-slide brand identity book for Beyond Bajji - logo construction, the mascot character, color and pattern systems, and real-world lockups, all documented in one reference file.",
            slides: Array.from({ length: 11 }, (_, i) => `/decks/beyondbajji-slide-${i + 1}.jpg`),
          }}
        />
      ) : service.slug === 'website-design-development' ? (
        <AppShowcaseSection
          subtext="Real websites we've designed and built end-to-end, browsed the same way a visitor would."
          studies={[
            {
              id: 'pal-website',
              title: 'Clinic Website',
              client: 'PAL Physiotherapy & Sports Rehab',
              industry: 'Healthcare - Physiotherapy Clinic',
              description:
                'A fully SEO, GEO, and AEO optimized clinic website built to turn local searches into booked appointments, with dedicated location and about pages for each branch.',
              url: 'https://palphysiotherapy.co.in/',
              screens: [
                { src: '/stacking/pal-hero.png', label: 'Homepage' },
                { src: '/stacking/pal-locations.png', label: 'Locations' },
                { src: '/stacking/pal-about.png', label: 'About' },
              ],
            },
            {
              id: 'pixla-website',
              title: 'Product Marketing Site',
              client: 'Pixla AI',
              industry: 'AI Content Studio',
              description:
                'A product site for an AI content generation studio, walking visitors through the creation process with a visual step-by-step flow and results gallery.',
              url: 'https://pixla.ai/',
              screens: [
                { src: '/stacking/pixla-hero.png', label: 'Homepage' },
                { src: '/stacking/pixla-steps.png', label: 'How It Works' },
                { src: '/stacking/pixla-gallery.png', label: 'Gallery' },
              ],
            },
            {
              id: 'zesti-website',
              title: 'Brand & Product Site',
              client: 'Zesti Fusion',
              industry: 'Food & Beverage - Frozen Fusion Snacks',
              description:
                'A product-led site for a frozen snacks brand, built to introduce the brand story and connect both distributors and end consumers.',
              url: 'https://zestifusion.com/products/',
              screens: [
                { src: '/stacking/zesti-hero.png', label: 'Homepage' },
                { src: '/stacking/zesti-whoweserve.png', label: 'Who We Serve' },
                { src: '/stacking/zesti-distributor.png', label: 'Distributors' },
              ],
            },
            {
              id: 'printx-website',
              title: 'Studio Website',
              client: 'PrintX Design & Printing',
              industry: 'Printing & Design Studio',
              description:
                "A studio website showcasing PrintX's process and finished work, built to turn local searches into walk-in and online print orders.",
              url: 'https://printxdesign.com/',
              screens: [
                { src: '/stacking/printx-hero.png', label: 'Homepage' },
                { src: '/stacking/printx-process.png', label: 'Process' },
                { src: '/stacking/printx-finish.png', label: 'Finished Work' },
              ],
            },
            {
              id: 'ardent-website',
              title: 'Company Website',
              client: 'Ardent Clinical Research Services',
              industry: 'Clinical Research (CRO)',
              description:
                'A credibility-first website for a clinical research organization, built around partner collaboration and the team behind the work.',
              url: 'https://www.ardent-cro.com/',
              screens: [
                { src: '/stacking/ardent-extra.png', label: 'Homepage' },
                { src: '/stacking/ardent-collab.png', label: 'Collaboration' },
                { src: '/stacking/ardent-family.png', label: 'Our Team' },
              ],
            },
          ]}
        />
      ) : service.slug === 'product-design-ui-ux' ? (
        <AppShowcaseSection
          subtext="Real product UI/UX design work, browsed the same way a client would in a Figma prototype."
          studies={[
            {
              id: 'telangana-uiux',
              title: 'D2C E-commerce Design',
              client: 'Telangana Spicy Pickles',
              industry: 'Food & Beverage - D2C E-commerce',
              description:
                "A D2C pickle brand's e-commerce UI/UX design, from the homepage hero through featured products to individual product detail pages.",
              screens: [
                { src: '/stacking/telangana-hero-crop.jpg', label: 'Homepage Hero' },
                { src: '/stacking/telangana-featured-crop.jpg', label: 'Featured Products' },
                { src: '/stacking/telangana-product-details-crop.jpg', label: 'Product Details' },
              ],
            },
            {
              id: 'appify-uiux',
              title: 'App Builder Product Design',
              client: 'Appify',
              industry: 'SaaS - No-Code Mobile App Builder',
              description:
                'A dark-mode SaaS product design for a no-code mobile app builder, covering the marketing homepage, enterprise offering, and feature deep-dives.',
              screens: [
                { src: '/stacking/appify-homepage-crop.jpg', label: 'Homepage' },
                { src: '/stacking/appify-enterprise-crop.jpg', label: 'Enterprise' },
                { src: '/stacking/appify-features-crop.jpg', label: 'Features' },
              ],
            },
            {
              id: 'premtalks-uiux',
              title: 'Grocery E-commerce Design',
              client: 'Prem Talks',
              industry: 'Grocery & Organic Foods - E-commerce',
              description:
                'A full grocery e-commerce UI/UX design - homepage, product details, and checkout flow, designed for a smooth, fast shop experience.',
              screens: [
                { src: '/stacking/premtalks-home-crop.jpg', label: 'Homepage' },
                { src: '/stacking/premtalks-product-details-crop.jpg', label: 'Product Details' },
                { src: '/stacking/premtalks-checkout.jpg', label: 'Checkout' },
              ],
            },
            {
              id: 'springml-uiux',
              title: 'Enterprise SaaS Design',
              client: 'SpringML',
              industry: 'Enterprise SaaS - Data & AI',
              description:
                'An enterprise-grade B2B site design for a data, cloud, and AI consultancy, built around credibility - case studies, partner logos, and a resource library.',
              screens: [
                { src: '/stacking/springml-hero-crop.png', label: 'Homepage' },
                { src: '/stacking/springml-approach-crop.png', label: 'Our Approach' },
              ],
            },
          ]}
        />
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
