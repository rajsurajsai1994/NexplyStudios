import JackProjectsSection from './JackProjectsSection';
import AppShowcaseSection from './AppShowcaseSection';
import LargeDeckShowcase from './LargeDeckShowcase';
import ClientWorksGridSection from './ClientWorksGridSection';
import InstagramCarouselShowcase from './InstagramCarouselShowcase';
import PublicationFlipbookSection from './PublicationFlipbookSection';
import PitchDeckShowcase from './PitchDeckShowcase';
import MasonryWorksSection from './MasonryWorksSection';
import type { ServicePageConfig } from '../../lib/servicePages';

interface ServiceWorksSectionProps {
  service: ServicePageConfig;
}

// Picks and renders whichever "client works" UI fits a given service - the
// exact same logic for every page that shows it (the service's own page,
// the portfolio page's filtered view, anywhere else in future). Changing a
// service's work here changes it everywhere it's shown, since there's only
// one place this switch lives.
export default function ServiceWorksSection({ service }: ServiceWorksSectionProps) {
  if (service.slug === 'social-media-marketing') {
    return (
      <>
        <InstagramCarouselShowcase />
        <MasonryWorksSection
          heading={service.clientWorksHeading ?? 'Our Client Works'}
          subtext={service.clientWorksSubtext ?? "A few of the projects we've brought to life."}
          items={service.clientWorks ?? []}
        />
      </>
    );
  }

  if (service.slug === 'print-publication-design') {
    return <PublicationFlipbookSection />;
  }

  if (service.slug === 'presentation-design') {
    return <PitchDeckShowcase />;
  }

  if (service.slug === 'app-design-development') {
    return (
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
    );
  }

  if (service.slug === 'brand-guidelines-identity') {
    return (
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
    );
  }

  if (service.slug === 'website-design-development') {
    return (
      <AppShowcaseSection
        subtext="Real websites we've designed and built end-to-end, browsed the same way a visitor would."
        studies={[
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
              'A credibility-first website for a clinical research organization, built around core values and a growing footprint of international CRO partnerships.',
            url: 'https://www.ardent-cro.com/',
            screens: [
              { src: '/stacking/ardent-homepage-new.png', label: 'Homepage' },
              { src: '/stacking/ardent-values.png', label: 'Our Core Values' },
              { src: '/stacking/ardent-global-partners.png', label: 'Global Partnerships' },
            ],
          },
        ]}
      />
    );
  }

  if (service.slug === 'product-design-ui-ux') {
    return (
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
              { src: '/stacking/springml-solutions-crop.png', label: 'Industry Solutions' },
            ],
          },
        ]}
      />
    );
  }

  if (service.clientWorksLayout === 'masonry') {
    return (
      <MasonryWorksSection
        heading={service.clientWorksHeading ?? 'Our Client Works'}
        subtext={service.clientWorksSubtext ?? "A few of the projects we've brought to life."}
        items={service.clientWorks ?? []}
      />
    );
  }

  if (service.layout === 'stacking') {
    return <JackProjectsSection projects={service.stackingProjects} />;
  }

  return (
    <ClientWorksGridSection
      seedPrefix={service.slug}
      works={service.clientWorks}
      featured={service.featuredWorks}
    />
  );
}
