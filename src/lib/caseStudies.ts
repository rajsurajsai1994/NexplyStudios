import { SITE_URL } from '../hooks/useSEO';

// ---------------------------------------------------------------------------
// Case studies - individual, evidence-rich write-ups of real client
// engagements. Rendered by CaseStudyPage; listed on /case-studies.
// Figures here match what is already shown on the service pages so the two
// never drift.
// ---------------------------------------------------------------------------

export interface CaseStudyMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface CaseStudyFAQ {
  q: string;
  a: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  /** One-line positioning shown in the hero and the index card. */
  tagline: string;
  industry: string;
  /** Human-readable location, e.g. "Madhapur & Kondapur, Hyderabad". */
  location: string;
  /** ISO date the main deliverable (usually the website) went live. */
  launchDate: string;
  /** Short label for the launch date, e.g. "February 2024". */
  launchLabel: string;
  deliverables: string[];
  /** 2-3 sentences - also used as the meta description. */
  summary: string;
  outcomes: CaseStudyMetric[];
  sections: CaseStudySection[];
  faqs?: CaseStudyFAQ[];
  quote?: { text: string; name: string; role: string };
  /** Service slugs this engagement maps to - drives "related services" links. */
  relatedServiceSlugs: string[];
  /** Accent gradient for the page hero. */
  accent: string;
  keywords: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'pal-physiotherapy',
    client: 'PAL Physiotherapy & Sports Rehab',
    tagline:
      'One clinic system across two branches, and a Google Business Profile that keeps the appointment book full.',
    industry: 'Physiotherapy & Sports Rehab Clinic',
    location: 'Madhapur & Kondapur, Hyderabad',
    launchDate: '2024-02-05',
    launchLabel: 'February 2024',
    deliverables: [
      'Website design & development',
      'SEO, GEO, AEO & AIO',
      'Google Business Profile creation & optimization',
      'Social media management',
      'CareNext clinic management system',
    ],
    summary:
      'Nexply Studios built PAL Physiotherapy & Sports Rehab a new website, set up and optimised their Google Business Profile for both branches, ran their SEO and social media, and rolled out the CareNext clinic management system. Monthly calls from Google grew from roughly 20-30 to 130-150, entirely without paid ads, and the clinic now runs scheduling, billing, reminders and patient records in one system.',
    outcomes: [
      {
        label: 'Calls per month from Google',
        value: '20-30 → 130-150',
        detail: 'Roughly a 5x increase in phone calls straight from the Google Business Profile.',
      },
      {
        label: 'Business Profile interactions / month',
        value: '50-70 → 350-400',
        detail: 'Calls, direction requests, website clicks and messages combined.',
      },
      {
        label: 'Local pack ranking',
        value: 'Top 3',
        detail: 'Consistently in the top 3 for physiotherapy and sports-rehab searches in Madhapur and Kondapur.',
      },
      {
        label: 'Ad spend',
        value: '₹0',
        detail: 'Every bit of the growth is organic - profile optimisation, content and reviews.',
      },
      {
        label: 'Clinic operations',
        value: 'Registers → CareNext',
        detail: 'Scheduling, billing, WhatsApp reminders and patient records now run in one system across both branches.',
      },
    ],
    sections: [
      {
        heading: 'Where they started',
        body: [
          'PAL Physiotherapy & Sports Rehab is a clinic with branches in Madhapur and Kondapur. The clinical work was strong and referrals were steady, but almost everything else ran on manual effort. New patients mostly arrived by word of mouth, the Google listing was thin and rarely touched, appointments and payments lived in registers and spreadsheets, and there was no real picture of how the two branches were performing together.',
          'The brief was not "make us a website." It was closer to "help us grow without adding admin staff, and give us a way to actually see what is happening."',
        ],
      },
      {
        heading: 'What we built',
        body: [
          'We started with the website - a fast, plain-spoken site with a dedicated page for each treatment and each branch, so a search like "sports rehab in Kondapur" has a real page to land on instead of a generic homepage. The content is written as straight answers to the questions patients actually ask, with structured data behind it, so it holds up in Google, in AI Overviews, and when someone asks ChatGPT or Perplexity for a physio in Madhapur.',
          'Then the Google Business Profile for both branches: correct primary category, a description that says exactly what they do and where, real photos added regularly, accurate hours including festival days, and a steady habit of requesting reviews and replying to every one. No one-time push - a routine.',
          'Alongside that we run their SEO and social media, and we implemented CareNext, our clinic management system. CareNext replaced the registers: day-and-week scheduling per therapist, one-click branded invoices, automatic WhatsApp appointment reminders, patient records with private clinical notes, and a single owner view across both branches.',
        ],
      },
      {
        heading: 'What changed',
        body: [
          'The clearest signal is the call graph on the Google Business Profile. Monthly calls went from roughly 20-30 to 130-150, and total profile interactions from around 50-70 to 350-400. Both branches now sit in the local top 3 for their main searches. None of this came from ads.',
          'Operationally, the front desk stopped chasing paper. Reminders go out on their own, invoices are generated from the patient profile, and the owners can see revenue, attendance and no-shows across both branches without asking around. The practice moved to a healthier, more predictable position - more of the right patients, less time lost to admin.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Was any of this paid advertising?',
        a: 'No. The growth in calls and profile interactions is entirely organic - Google Business Profile optimisation, a properly structured website, content, and an ongoing reviews habit. No Google Ads, no Meta ads.',
      },
      {
        q: 'How long did it take to see results?',
        a: 'Profile and website fixes showed visibility improvements within the first few weeks. The steady climb in calls and rankings built over the following two to three months and has held since.',
      },
      {
        q: 'Is CareNext part of every engagement like this?',
        a: 'Only for clinics and practices where it fits. CareNext is our own clinic management system - for PAL it replaced their registers and spreadsheets. For a business that is not a clinic, that part of the work would be different.',
      },
    ],
    quote: {
      text:
        'When we started with Nexply, most new patients found us by word of mouth. Now the Google Business Profile brings a steady stream of calls every week, and CareNext runs the clinic end to end - scheduling, billing, reminders, records - across both branches. Whatever we ask them for, they build it and show it to us within a day or two. It has been very comfortable working with them.',
      name: 'Dr. Bhuvana',
      role: 'Founder, PAL Physiotherapy & Sports Rehab',
    },
    relatedServiceSlugs: ['website-design-development', 'google-my-business', 'social-media-marketing'],
    accent: 'linear-gradient(135deg, #0EA5E9 0%, #2DD4BF 100%)',
    keywords: [
      'physiotherapy marketing Hyderabad',
      'Google Business Profile case study',
      'local SEO physiotherapy',
      'clinic management system',
      'PAL Physiotherapy',
    ],
  },
  {
    slug: 'printx-design',
    client: 'PrintX Design & Printing',
    tagline:
      'A new website and a looked-after Google Business Profile that put a Gachibowli print shop in the local top 3.',
    industry: 'Printing & Design',
    location: 'Gachibowli, Hyderabad',
    launchDate: '2025-09-08',
    launchLabel: 'September 2025',
    deliverables: [
      'Website design & development',
      'Google Business Profile creation & optimization',
    ],
    summary:
      'PrintX Design & Printing is a print shop in Gachibowli. Nexply Studios built their website and created and optimised their Google Business Profile. Direction requests grew from around 25 a month to 214 and climbing between April and July 2026, and the shop now ranks in the local top 3 for its main print and design searches - with no ad spend.',
    outcomes: [
      {
        label: 'Direction requests',
        value: '~25/mo → 214+',
        detail: 'April to July 2026, and still climbing - people navigating straight to the shop from Google Maps.',
      },
      {
        label: 'Local pack ranking',
        value: 'Top 3',
        detail: 'For "flex design and print", "printing shop in Gachibowli" and similar local searches.',
      },
      {
        label: 'Ad spend',
        value: '₹0',
        detail: 'Purely organic - a proper website plus an actively managed Google Business Profile.',
      },
    ],
    sections: [
      {
        heading: 'Where they started',
        body: [
          'PrintX is a design and printing shop in Gachibowli - flex, business stationery, signage, the usual mix. Plenty of walk-in and repeat business, but almost no presence online. There was no real website, and the Google listing was barely set up, so anyone searching "printing near me" in the area was landing on competitors.',
        ],
      },
      {
        heading: 'What we built',
        body: [
          'A straightforward website first - what they print, sample work, location, and contact, structured so Google understands it is a local print business in Gachibowli. Nothing bloated; pages that match how people actually search.',
          'Then the Google Business Profile from scratch: right category, a clear description, real photos of the shop and finished work, correct hours, and an ongoing routine of posts and review requests. The same unglamorous local-search fundamentals we run for every local business - done properly and not left to go stale.',
        ],
      },
      {
        heading: 'What changed',
        body: [
          'The Maps numbers moved first. Direction requests went from roughly 25 a month to over 214 across April to July 2026, and kept rising. The profile now ranks in the local top 3 for the searches that matter - "flex design and print gachibowli" and similar - so people looking for a printer nearby find PrintX before they find anyone else. No ad budget was involved.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Did PrintX run any ads?',
        a: 'No. The results are organic - a properly built website plus an actively managed Google Business Profile. No Google or Meta ad spend.',
      },
      {
        q: 'How is this different from the PAL Physiotherapy engagement?',
        a: 'Scope. PrintX was a focused website plus Google Business Profile build. PAL was a broader engagement - website, SEO, social media and our CareNext clinic system across two branches.',
      },
    ],
    quote: {
      text:
        'We barely existed online before. Nexply built our website and set up and maintained our Google Business Profile - between the two, we are getting real leads and calls now, not just people wandering past the shop. They are easy to deal with and they actually keep the listing active instead of setting it up once and forgetting it.',
      name: 'Nani',
      role: 'Founder, PrintX Design & Printing',
    },
    relatedServiceSlugs: ['website-design-development', 'google-my-business'],
    accent: 'linear-gradient(135deg, #7C6CFF 0%, #A78BFA 100%)',
    keywords: [
      'printing shop marketing Hyderabad',
      'Google Business Profile case study',
      'local SEO printing',
      'PrintX Design',
      'Gachibowli printing',
    ],
  },
];

export function getCaseStudyBySlug(slug: string | undefined) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

// CreativeWork schema for a case study - `about` points at the client, the
// studio is the creator, and the launch date is datePublished.
export function caseStudySchema(cs: CaseStudy) {
  const url = `${SITE_URL}/case-studies/${cs.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#casestudy`,
    name: `${cs.client} - Case Study`,
    headline: `${cs.client}: ${cs.tagline}`,
    url,
    genre: 'Case study',
    abstract: cs.summary,
    inLanguage: 'en-IN',
    datePublished: cs.launchDate,
    keywords: cs.keywords.join(', '),
    creator: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: {
      '@type': 'Organization',
      name: cs.client,
      description: cs.industry,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
    },
    mentions: cs.deliverables.map((d) => ({ '@type': 'Thing', name: d })),
  };
}
