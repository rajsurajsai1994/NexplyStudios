import { SITE_URL } from '../hooks/useSEO';

// Sitewide Organization + LocalBusiness schema - reused across pages so
// search engines and AI answer engines see one consistent entity.
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Nexply Studios',
  url: SITE_URL,
  logo: `${SITE_URL}/nexply-studio-logo-nav.svg`,
  image: `${SITE_URL}/og-default.png`,
  description:
    'Nexply Studios is a Hyderabad-based creative agency offering website design & development, app design & development, product design (UI/UX), branding, and marketing services.',
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
  areaServed: 'IN',
  priceRange: '$$',
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Nexply Studios',
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

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'IN',
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  path: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    articleSection: opts.category,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
  };
}
