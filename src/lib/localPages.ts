// ---------------------------------------------------------------------------
// Hyderabad local landing pages - one per high-intent local search, each
// with its own process, proof, and FAQs (not thin city-page variants).
// Rendered by LocalPage at /hyderabad/:slug.
// ---------------------------------------------------------------------------

export interface LocalPageEvidence {
  client: string;
  area: string;
  work: string;
  caseStudySlug?: string;
}

export interface LocalPageStep {
  title: string;
  text: string;
}

export interface LocalPageFAQ {
  q: string;
  a: string;
}

export interface LocalPageConfig {
  slug: string;
  /** On-page H1 - the exact local phrase. */
  h1: string;
  /** <title> tag (kept under ~60 chars incl. suffix). */
  metaTitle: string;
  metaDescription: string;
  heroSubtext: string;
  /** 2-3 paragraphs - why this matters specifically in Hyderabad. */
  intro: string[];
  processHeading: string;
  process: LocalPageStep[];
  evidenceHeading: string;
  evidence: LocalPageEvidence[];
  faqs: LocalPageFAQ[];
  /** Primary service slug this page maps to. */
  serviceSlug: string;
  relatedCaseStudySlugs: string[];
  accent: string;
  keywords: string[];
}

export const LOCAL_PAGES: LocalPageConfig[] = [
  {
    slug: 'web-design-agency',
    h1: 'Web Design Agency in Hyderabad',
    metaTitle: 'Web Design Agency in Hyderabad',
    metaDescription:
      'Nexply Studios is a web design and development agency in Hyderabad. Fast, search-ready websites for local businesses - with real client work in Madhapur, Kondapur and Gachibowli.',
    heroSubtext:
      'Websites built for how people in Hyderabad actually search - fast, structured, and easy for a small team to run.',
    intro: [
      'Most businesses in Hyderabad do not need a fifty-page website. They need a handful of pages that load fast, say clearly what they do and where, and are structured so Google - and now AI Overviews and tools like ChatGPT - can understand them. A search for "physiotherapy in Kondapur" or "printing shop in Gachibowli" should land on a real page about that, not a generic homepage.',
      'We build in WordPress, Next.js, React or Shopify depending on who is going to maintain the site afterwards. For a clinic or a shop where the owner wants to edit things themselves, WordPress earns its keep. For a product or a marketing site that needs to be fast and precise, we go with a modern framework. The decision is about the year after launch, not the launch itself.',
      'Every site we build ships with proper structured data, a page per service and per location, correct name-address-phone details everywhere, and content written as straight answers rather than marketing filler. That is what makes a Hyderabad business findable in 2026.',
    ],
    processHeading: 'How we build a website in Hyderabad',
    process: [
      {
        title: 'Map the searches first',
        text: 'We list the exact phrases your customers type - by service, by area, by intent - and design the page structure around those instead of a generic template.',
      },
      {
        title: 'Design for the first three seconds and the next thirty',
        text: 'Aesthetics get someone to trust you immediately; structure and flow get them to call or book. We build for both, and test the flow with someone who has never seen the site.',
      },
      {
        title: 'Build on the right stack',
        text: 'WordPress, Next.js, React or Shopify - chosen for who maintains it, not for what is fashionable. You get something your team can actually run.',
      },
      {
        title: 'Ship it search-ready',
        text: 'Structured data, per-service and per-location pages, consistent NAP details, fast load, and a plan for keeping content current after go-live.',
      },
    ],
    evidenceHeading: 'Websites we have built in Hyderabad',
    evidence: [
      {
        client: 'PAL Physiotherapy & Sports Rehab',
        area: 'Madhapur & Kondapur',
        work: 'A new website with a dedicated page per treatment and per branch, structured so searches like "sports rehab in Kondapur" land on a real page. Live since February 2024.',
        caseStudySlug: 'pal-physiotherapy',
      },
      {
        client: 'PrintX Design & Printing',
        area: 'Gachibowli',
        work: 'A focused website - what they print, sample work, location, contact - structured as a local print business so Google places it correctly in Gachibowli.',
        caseStudySlug: 'printx-design',
      },
      {
        client: 'Ardent CRO',
        area: 'Hyderabad',
        work: 'Rebuilt a large, complicated site into something simpler without losing anything important, followed by print collateral.',
      },
    ],
    faqs: [
      {
        q: 'Do you only work with businesses in Hyderabad?',
        a: 'Most of our clients are in Hyderabad - Madhapur, Kondapur, Gachibowli, Hitech City - and we can meet in person. We also work with businesses elsewhere in India remotely. Local work just means we understand how search behaves here.',
      },
      {
        q: 'How much does a website cost?',
        a: 'It depends on the number of pages, whether it needs e-commerce or a booking flow, and how much content we write versus you provide. Book a call and we will scope it against what you actually need.',
      },
      {
        q: 'Will I be able to update the site myself?',
        a: 'Yes, if that matters to you - we will say so during scoping and build on WordPress or a similar CMS. If you would rather we maintain it, we offer that too.',
      },
      {
        q: 'Do you handle SEO and Google Business Profile as well?',
        a: 'Yes. For local businesses the website, the Google Business Profile, and ongoing content work together - we run all three, as we do for PAL Physiotherapy.',
      },
    ],
    serviceSlug: 'website-design-development',
    relatedCaseStudySlugs: ['pal-physiotherapy', 'printx-design'],
    accent: 'linear-gradient(135deg, #7C6CFF 0%, #A78BFA 100%)',
    keywords: [
      'web design agency Hyderabad',
      'website development Hyderabad',
      'web designers Madhapur',
      'website company Gachibowli',
    ],
  },
  {
    slug: 'branding-agency',
    h1: 'Branding Agency in Hyderabad',
    metaTitle: 'Branding Agency in Hyderabad',
    metaDescription:
      'Nexply Studios is a branding agency in Hyderabad - logo, identity systems, and brand guidelines that stay consistent across every touchpoint, for local and franchise businesses.',
    heroSubtext:
      'Identity work that survives contact with the real world - franchise outlets, printers, social, packaging - not just a pretty logo file.',
    intro: [
      'A logo is small. It cannot carry the whole weight of how people feel about your brand. In Hyderabad, where a food brand might open five outlets in a year or a clinic might add a second branch, the thing that actually matters is a system - defined colours down to the hex code, typography rules, and clear guidance on how the mark is used - so the brand still looks like itself when a new outlet, a new printer, or a new social media person touches it.',
      'We have done franchise branding across Hyderabad for Beyond Bajji, minimal-but-meaningful logo work for Rebreath, and identity plus a scan-and-order portal for Spudato. The common thread is not a house style - it is building the identity so it holds up once it leaves our hands.',
      'If you came in asking for "just a logo," we will still ask the annoying questions first. Sometimes the honest answer is that the logo needs work. Often the honest answer is that the brand needs a real identity, not a paint job.',
    ],
    processHeading: 'How we approach branding in Hyderabad',
    process: [
      {
        title: 'Understand the business, not just the taste',
        text: 'Your market, your customers, how you plan to grow - a brand for one shop is a different brief from a brand that will run across ten franchise outlets.',
      },
      {
        title: 'Explore directions properly',
        text: 'We sketch a range of directions and refine with you until the mark feels unmistakably yours, rather than presenting one option and defending it.',
      },
      {
        title: 'Build the system',
        text: 'Colour, type, logo usage, spacing, do and do-not - a brand book a new hire, a new printer, or a new agency can pick up and get right.',
      },
      {
        title: 'Roll it out',
        text: 'Signage, packaging, social templates, stationery - the unglamorous application work that is where most rebrands quietly fall apart.',
      },
    ],
    evidenceHeading: 'Branding work in Hyderabad',
    evidence: [
      {
        client: 'Beyond Bajji',
        area: 'Hyderabad (franchise)',
        work: 'Franchise branding across Hyderabad plus ongoing social media - a consistent look and feel across outlets.',
      },
      {
        client: 'Rebreath',
        area: 'Hyderabad',
        work: 'A minimal logo working five natural elements into one mark - dozens of directions sketched before landing on the final one.',
      },
      {
        client: 'Spudato',
        area: 'Hyderabad',
        work: 'Logo and identity alongside a scan-and-order portal, with social posts that finally look like one brand.',
      },
    ],
    faqs: [
      {
        q: 'We just need a logo - do we have to do the whole identity?',
        a: 'No. You can hire us for a single logo. We will still recommend at least a light set of usage rules so it stays consistent, but the scope is yours to set.',
      },
      {
        q: 'Do you do franchise / multi-outlet branding?',
        a: 'Yes - we did exactly that for Beyond Bajji across Hyderabad. Multi-outlet work needs a stricter system so every location looks like the same brand.',
      },
      {
        q: 'How long does a brand identity take?',
        a: 'A logo alone is usually two to four weeks. A full identity system with guidelines and rollout templates is longer - we will give you a timeline against your scope.',
      },
      {
        q: 'Can you also handle printing and packaging?',
        a: 'Yes. We design packaging and print collateral, and we work with printers regularly, so the brand is applied correctly rather than approximated.',
      },
    ],
    serviceSlug: 'logo-design-brand-identity',
    relatedCaseStudySlugs: [],
    accent: 'linear-gradient(135deg, #F5B841 0%, #F43F7E 60%, #A855F7 100%)',
    keywords: [
      'branding agency Hyderabad',
      'logo design Hyderabad',
      'brand identity Hyderabad',
      'brand guidelines Hyderabad',
    ],
  },
  {
    slug: 'ui-ux-design',
    h1: 'UI/UX Design in Hyderabad',
    metaTitle: 'UI/UX Design in Hyderabad',
    metaDescription:
      'Nexply Studios does UI/UX design in Hyderabad - wireframes, prototypes, and design systems for apps and web products, built around what the user is actually trying to do.',
    heroSubtext:
      'Product design that starts with the user flow and lets the visuals follow - wireframes, prototypes, and design systems.',
    intro: [
      'A lot of "UI/UX" work in Hyderabad is really just visual design - someone makes the screens look nice and calls it UX. The part that actually changes outcomes is earlier: understanding what the person is trying to do, mapping the flow around that, and cutting the steps that do not need to exist. The look comes second, the flow comes first.',
      'We build wireframes and clickable prototypes before anyone argues about colour, test the flow with people who have never seen it, and hand developers a design system rather than a pile of disconnected screens - so the product ships consistent and stays that way.',
      'This applies whether it is a customer-facing app, an internal tool, or a web product. For Spudato we designed a scan-and-order portal customers actually enjoy using; for Ardent CRO the job was taking a large, complicated site and making it simple without losing anything important.',
    ],
    processHeading: 'How we run UI/UX design in Hyderabad',
    process: [
      {
        title: 'Define the job to be done',
        text: 'What is the user actually trying to accomplish, in what context, on what device - the flow gets built around that, not around what looks good in a portfolio.',
      },
      {
        title: 'Wireframe and prototype first',
        text: 'Low-fidelity screens and a clickable prototype so we can find the awkward steps before they are expensive to fix.',
      },
      {
        title: 'Test with real people',
        text: 'Hand it to someone who has never seen it and watch where they get stuck. Five minutes of that beats hours of internal debate.',
      },
      {
        title: 'Deliver a design system',
        text: 'Components, states, spacing and rules - so developers build it consistently and the product does not drift as it grows.',
      },
    ],
    evidenceHeading: 'Product design work in Hyderabad',
    evidence: [
      {
        client: 'Spudato',
        area: 'Hyderabad',
        work: 'A scan-and-order portal designed around the diner\'s flow - customers genuinely like using it.',
      },
      {
        client: 'Ardent CRO',
        area: 'Hyderabad',
        work: 'Simplified a large, complex website into something users can navigate without losing any important content.',
      },
      {
        client: 'CareNext (Nexply product)',
        area: 'Hyderabad',
        work: 'Our own clinic management system - role-based interfaces designed so each person sees only what their job needs.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between UI and UX in how you work?',
        a: 'UX is the flow - what steps exist, in what order, and why. UI is how those steps look and feel. We do both, but we settle the flow in wireframes and prototypes before we design the interface.',
      },
      {
        q: 'Do you design and build, or just design?',
        a: 'Both. We can hand a design system to your developers, or design and build the product end to end - website, web app, or native app.',
      },
      {
        q: 'Can you redesign an existing product?',
        a: 'Yes. A lot of our UX work is fixing products that grew organically and became hard to use - we did that for Ardent CRO.',
      },
      {
        q: 'Do you do user testing?',
        a: 'Yes, as part of the process - prototype testing with real users before build, so problems surface while they are cheap to fix.',
      },
    ],
    serviceSlug: 'product-design-ui-ux',
    relatedCaseStudySlugs: [],
    accent: 'linear-gradient(137deg, #7C6CFF 0%, #A78BFA 45%, #6D5DFC 100%)',
    keywords: [
      'UI UX design Hyderabad',
      'product design Hyderabad',
      'app design Hyderabad',
      'UX agency Hyderabad',
    ],
  },
  {
    slug: 'google-business-profile-management',
    h1: 'Google Business Profile Management in Hyderabad',
    metaTitle: 'Google Business Profile Management Hyderabad',
    metaDescription:
      'Nexply Studios manages Google Business Profiles for Hyderabad businesses - setup, optimisation, posts, and reviews. Real results in Madhapur, Kondapur and Gachibowli, no ad spend.',
    heroSubtext:
      'The unglamorous local-search fundamentals, done properly and not left to go stale - so nearby customers call you first.',
    intro: [
      'For a local business in Hyderabad, the Google Business Profile does more work than the website. The person searching "physio near me" or "printing shop nearby" at 9pm is half paying attention and ready to call whichever result looks legit first. If your hours are wrong, your photos are thin, or a competitor two streets away has forty reviews to your two, you have already lost that person.',
      'Google Business Profile (still widely called Google My Business, or GMB) management is not one big task - it is a set of small, slightly boring things done consistently. Right primary category. A description that says what you do and where. Real photos, added regularly. Correct hours, including on festival days. And a quiet habit of requesting reviews and replying to every one.',
      'We do this on an ongoing basis, because an untouched profile loses ranking over time. For PAL Physiotherapy, monthly calls from Google went from roughly 20-30 to 130-150 this way. For PrintX in Gachibowli, direction requests grew from around 25 a month to over 214. No ad spend in either case.',
    ],
    processHeading: 'How we manage a Google Business Profile in Hyderabad',
    process: [
      {
        title: 'Audit and fix the foundation',
        text: 'Primary and secondary categories, service areas, description, attributes, and the name-address-phone details - corrected so Google understands exactly what you are and where.',
      },
      {
        title: 'Photos and posts on a schedule',
        text: 'Real photos of the place, the team and the work, added regularly; offers and updates posted on a routine, because active profiles rank above dormant ones.',
      },
      {
        title: 'A reviews habit, not a reviews push',
        text: 'A simple system to ask every happy customer, and professional replies to every review - positive or negative. Review volume and recency directly affect local ranking.',
      },
      {
        title: 'Track the numbers monthly',
        text: 'Calls, direction requests, website clicks, search terms - reviewed every month so the work is pointed at what is actually moving.',
      },
    ],
    evidenceHeading: 'Google Business Profiles we manage in Hyderabad',
    evidence: [
      {
        client: 'PAL Physiotherapy & Sports Rehab',
        area: 'Madhapur & Kondapur',
        work: 'Calls per month grew from ~20-30 to ~130-150; profile interactions from ~50-70 to ~350-400. Both branches in the local top 3. No ads.',
        caseStudySlug: 'pal-physiotherapy',
      },
      {
        client: 'PrintX Design & Printing',
        area: 'Gachibowli',
        work: 'Direction requests grew from ~25/month to 214+ (Apr-Jul 2026). Top 3 for "flex design and print" and similar local searches.',
        caseStudySlug: 'printx-design',
      },
      {
        client: 'Square Designs',
        area: 'Madhapur',
        work: 'Ranks in the top 3 for local printing searches; profile views around 4,193 in 30 days, up 17.7% month on month.',
      },
      {
        client: 'Evania',
        area: 'Multiple Hyderabad locations',
        work: 'Ranks #1 for the branded search across every location under the brand.',
      },
    ],
    faqs: [
      {
        q: 'I already have a listing - can you just take it over?',
        a: 'Yes. Most businesses we work with already have a profile that is underperforming. We audit what is there, fix it, and take over ongoing management rather than starting from scratch.',
      },
      {
        q: 'How fast will I see more calls?',
        a: 'Foundation fixes - categories, photos, description - usually show a visibility improvement within 2-4 weeks. The steady climb in calls and rankings builds over the following 2-3 months.',
      },
      {
        q: 'Do you run ads to get these results?',
        a: 'No. The results for PAL, PrintX and Square Designs are entirely organic - profile optimisation, posts and reviews. No Google Ads.',
      },
      {
        q: 'Do you manage profiles for businesses with multiple branches?',
        a: 'Yes - PAL Physiotherapy has two branches (Madhapur and Kondapur) and Evania has several. Each location gets its own optimised profile.',
      },
      {
        q: 'What about negative reviews?',
        a: 'We help draft professional public responses to negative reviews too - how a business replies matters to everyone else reading them.',
      },
    ],
    serviceSlug: 'google-my-business',
    relatedCaseStudySlugs: ['pal-physiotherapy', 'printx-design'],
    accent: 'linear-gradient(135deg, #0EA5E9 0%, #2DD4BF 100%)',
    keywords: [
      'Google Business Profile management Hyderabad',
      'Google My Business Hyderabad',
      'local SEO Hyderabad',
      'GMB management Madhapur',
    ],
  },
];

export function getLocalPageBySlug(slug: string | undefined) {
  return LOCAL_PAGES.find((p) => p.slug === slug);
}
