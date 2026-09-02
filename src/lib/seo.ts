import { SITE_URL } from '../hooks/useSEO';

// The services Nexply offers - listed once here so the Organization schema
// can expose them as `knowsAbout` (entity/topic signals that help search
// and answer engines understand what the studio actually does).
const NEXPLY_TOPICS = [
  'Website design and development',
  'App design and development',
  'Product design (UI/UX)',
  'Logo design and brand identity',
  'Brand guidelines',
  'Graphic design and ad creative',
  'Video ads and motion graphics',
  'Social media marketing',
  'Google Business Profile and local SEO',
  'Packaging design',
  'Print and publication design',
  'Presentation design',
  'Generative Engine Optimization (GEO)',
  'Answer Engine Optimization (AEO)',
];

// Sitewide Organization + LocalBusiness schema - reused across pages so
// search engines and AI answer engines see one consistent entity.
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Nexply Studios',
  alternateName: ['Nexply Studio', 'Hawk Studios'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/nexply-studio-logo-nav.svg`,
  },
  image: `${SITE_URL}/og-default.png`,
  description:
    'Nexply Studios is a Hyderabad-based creative agency offering website design & development, app design & development, product design (UI/UX), branding, and marketing services - built to convert.',
  slogan: "What's next for your brand?",
  telephone: '+91-78422-03319',
  email: 'next@nexplystudio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8th Floor, Suite 30, Jayabheri Silicon Towers, Hitech City Rd, Kothaguda',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500084',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.4534,
    longitude: 78.3782,
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'City', name: 'Hyderabad' },
  ],
  knowsAbout: NEXPLY_TOPICS,
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '19:00',
  },
  sameAs: [
    'https://www.linkedin.com/company/nexplystudio/',
    'https://www.instagram.com/nexplystudio/',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Nexply Studios',
  description:
    'Hyderabad-based creative agency - website & app design and development, branding, UI/UX, and marketing.',
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    category: opts.category ?? 'Creative agency service',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'City', name: 'Hyderabad' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/contact`,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'en-IN',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function softwareApplicationSchema(opts: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    applicationCategory: opts.category ?? 'BusinessApplication',
    operatingSystem: 'Web',
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    publisher: { '@id': `${SITE_URL}/#organization` },
    provider: { '@id': `${SITE_URL}/#organization` },
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  path: string;
  category: string;
  authorId: string;
  authorName: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
  /** Absolute or root-relative path to the post's own share image. */
  image?: string;
  /** Root-relative path to a case study the post links to. */
  caseStudyPath?: string;
}) {
  const image = opts.image
    ? opts.image.startsWith('http')
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : `${SITE_URL}/og-default.png`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
    image,
    author: { '@id': `${SITE_URL}/#person-${opts.authorId}`, name: opts.authorName },
    publisher: { '@id': `${SITE_URL}/#organization` },
    articleSection: opts.category,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    ...(opts.keywords && opts.keywords.length ? { keywords: opts.keywords.join(', ') } : {}),
    ...(opts.caseStudyPath
      ? { citation: { '@type': 'CreativeWork', url: `${SITE_URL}${opts.caseStudyPath}` } }
      : {}),
  };
}

// A Blog collection page listing its posts - used on /blog so answer
// engines can enumerate the articles.
export function blogListSchema(posts: { title: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: 'The Nexply Blog',
    description:
      'Straightforward notes on design, branding, and building things that work - for designers, brands, and developers.',
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}${p.path}`,
    })),
  };
}

// Generic ItemList - used for the portfolio / work collection.
export function itemListSchema(name: string, items: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.path ? { url: `${SITE_URL}${it.path}` } : {}),
    })),
  };
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#contactpage`,
    name: 'Contact Nexply Studios',
    inLanguage: 'en-IN',
    about: { '@id': `${SITE_URL}/#organization` },
  };
}
