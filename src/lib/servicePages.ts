export interface ServicePageFAQ {
  q: string;
  a: string;
}

export interface ServicePageBodyPoint {
  title: string;
  text: string;
}

export interface ServicePageBody {
  heading: string;
  intro: string;
  points: ServicePageBodyPoint[];
}

export interface ServicePageClientWork {
  title: string;
  industry: string;
  img: string;
  note?: string;
  fit?: 'cover' | 'contain';
  bgColor?: string;
  size?: 'normal' | 'large';
}

export interface ServicePageFeaturedImage {
  src: string;
  label: string;
}

export interface ServicePageFeaturedStat {
  label: string;
  before: string;
  after: string;
}

export interface ServicePageFeaturedWork {
  title: string;
  industry: string;
  branchNote?: string;
  images: ServicePageFeaturedImage[];
  caption: string;
  stats?: ServicePageFeaturedStat[];
  disclaimer?: string;
  badge?: boolean;
}

export interface ServicePageStackingProject {
  num: string;
  name: string;
  industry: string;
  url?: string;
  note?: string;
  col1: [string, string];
  col2: string;
}

export interface ServicePageConfig {
  slug: string;
  title: string;
  heroLine1: string;
  heroLine2: string;
  heroSubtext: string;
  layout: 'stacking' | 'grid';
  body: ServicePageBody;
  faqs: ServicePageFAQ[];
  // Real client work photos for the "Our Client Works" grid. Omitted for
  // services that don't have real photos lined up yet - ClientWorksGridSection
  // falls back to its own placeholder set in that case.
  clientWorks?: ServicePageClientWork[];
  // 'masonry' swaps the uniform grid for MasonryWorksSection, for pages
  // where the real deliverables come in genuinely different sizes/aspect
  // ratios (social posts, product labels) that shouldn't be cropped to fit
  // a uniform card.
  clientWorksLayout?: 'grid' | 'masonry';
  clientWorksHeading?: string;
  clientWorksSubtext?: string;
  // Real images for the scrolling marquee row under the hero. Falls back to
  // clientWorks images, then to the generic placeholder GIFs, when omitted -
  // separate from clientWorks since a page may want a different image set
  // scrolling up top vs. shown in the grid below (e.g. label designs in the
  // marquee, product photography in the grid).
  marqueeImages?: string[];
  // Set true to skip the scrolling marquee entirely on this page (e.g. when
  // the "Our Client Works" section below already carries the real proof
  // and the marquee would otherwise fall back to generic placeholders).
  hideMarquee?: boolean;
  // Real project data for 'stacking' layout pages (JackProjectsSection).
  // Falls back to the component's own placeholder set when omitted.
  stackingProjects?: ServicePageStackingProject[];
  // One highlighted, larger case-study card shown above the regular grid -
  // for a result impressive enough to lead with (real before/after numbers,
  // not just a logo image).
  featuredWorks?: ServicePageFeaturedWork[];
}

export const SERVICE_PAGES: ServicePageConfig[] = [
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    heroLine1: 'Websites Built',
    heroLine2: 'To Convert',
    heroSubtext: "Fast, responsive sites that turn visitors into customers - not just something nice to look at.",
    layout: 'stacking',
    body: {
      heading: 'What our website design & development covers',
      intro:
        "We design and build sites from scratch - no drag-and-drop templates. Every project starts with your business goal (bookings, leads, sales) and works backward into a structure, then a design, then the actual code. You get a site that loads fast, reads clearly on a phone, and is built to be found on Google, not just to look good in a screenshot.",
      points: [
        {
          title: 'Custom design, not a theme',
          text: 'Every layout is designed around your brand and content - not adapted from a stock WordPress or Wix theme.',
        },
        {
          title: 'Built for speed, SEO, GEO and AEO',
          text: 'Clean code, optimized images, and proper page structure so your site loads quickly and ranks on search - plus the structured data and clear content AI answer engines need to cite you directly.',
        },
        {
          title: 'You can actually update it',
          text: "We hand off a site you (or your team) can edit - text, images, blog posts - without needing a developer for every small change.",
        },
      ],
    },
    faqs: [
      {
        q: 'Do you build on WordPress, or custom code?',
        a: "Depends on your needs. For content-heavy sites needing frequent updates, we often use WordPress. For performance-critical or highly custom sites, we build with modern frameworks like React. We'll recommend the right fit after understanding your goals.",
      },
      {
        q: 'Will my website work properly on mobile?',
        a: "Yes - every site is designed mobile-first and tested across phone, tablet, and desktop screens before launch, since most of your traffic will likely come from mobile.",
      },
      {
        q: 'How long does a website project usually take?',
        a: 'A standard business website typically takes 3-5 weeks from kickoff to launch. Larger sites with custom features or e-commerce can take 6-10 weeks depending on scope.',
      },
      {
        q: 'Do you also handle hosting and domain setup?',
        a: "We can guide you through hosting and domain setup, or handle it end-to-end if you'd rather not deal with it. Either way, you retain full ownership of your domain and hosting account.",
      },
    ],
    hideMarquee: true,
    stackingProjects: [
      {
        num: '01',
        name: 'PAL Physiotherapy & Sports Rehab',
        industry: 'Healthcare - Physiotherapy Clinic',
        url: 'https://palphysiotherapy.co.in/',
        note: 'Fully SEO, GEO & AEO optimized',
        col1: ['/stacking/pal-locations.png', '/stacking/pal-about.png'],
        col2: '/stacking/pal-hero.png',
      },
      {
        num: '02',
        name: 'Pixla AI',
        industry: 'AI Content Studio',
        url: 'https://pixla.ai/',
        col1: ['/stacking/pixla-steps.png', '/stacking/pixla-gallery.png'],
        col2: '/stacking/pixla-hero.png',
      },
      {
        num: '03',
        name: 'Zesti Fusion',
        industry: 'Food & Beverage - Frozen Fusion Snacks',
        url: 'https://zestifusion.com/products/',
        col1: ['/stacking/zesti-whoweserve.png', '/stacking/zesti-distributor.png'],
        col2: '/stacking/zesti-hero.png',
      },
      {
        num: '04',
        name: 'PrintX Design & Printing',
        industry: 'Printing & Design Studio',
        url: 'https://printxdesign.com/',
        col1: ['/stacking/printx-finish.png', '/stacking/printx-process.png'],
        col2: '/stacking/printx-hero.png',
      },
      {
        num: '05',
        name: 'Ardent Clinical Research Services',
        industry: 'Clinical Research (CRO)',
        url: 'https://www.ardent-cro.com/',
        col1: ['/stacking/ardent-collab.png', '/stacking/ardent-family.png'],
        col2: '/stacking/ardent-extra.png',
      },
    ],
  },
  {
    slug: 'app-design-development',
    title: 'App Design & Development',
    heroLine1: 'Apps People',
    heroLine2: 'Actually Use',
    heroSubtext: 'Native and cross-platform apps designed end-to-end, from first wireframe to launch.',
    layout: 'stacking',
    body: {
      heading: 'What our app design & development covers',
      intro:
        "We take apps from a rough idea to something live on the App Store or Play Store. That means wireframes and user flows first, a design system next, then real development - not a prototype that never ships. We build cross-platform where it makes sense to save cost, and native when performance genuinely demands it.",
      points: [
        {
          title: 'UX before UI',
          text: 'We map out user flows and screen logic before any visual design starts, so the app actually makes sense to use, not just to look at.',
        },
        {
          title: 'Cross-platform or native',
          text: 'We build with React Native or Flutter for most projects to cover iOS and Android from one codebase, and go fully native when a project needs it.',
        },
        {
          title: 'Store-ready launch support',
          text: 'We handle App Store and Play Store submission requirements, so your app actually gets approved and published, not stuck in review.',
        },
      ],
    },
    faqs: [
      {
        q: 'Should my app be native or cross-platform?',
        a: "For most business apps - bookings, e-commerce, service apps - cross-platform (React Native/Flutter) gets you to both iOS and Android faster and cheaper with no real difference in user experience. Native makes sense mainly for apps with heavy device-level features like AR or complex background processing.",
      },
      {
        q: 'Do you also design the app, or only build it?',
        a: 'Both - we handle UX flows, UI design, and development as one connected process, so the final build matches the design exactly instead of being a rough translation of it.',
      },
      {
        q: 'How long does it take to build an app?',
        a: 'A focused MVP with core features typically takes 8-12 weeks. Apps with more complex functionality (payments, real-time features, admin dashboards) can take 3-5 months.',
      },
      {
        q: 'Do you help with App Store and Play Store approval?',
        a: "Yes - we prepare the listing assets, handle compliance requirements, and manage the submission process on both stores so you're not troubleshooting rejections on your own.",
      },
    ],
  },
  {
    slug: 'product-design-ui-ux',
    title: 'Product Design - UI/UX',
    heroLine1: 'Design That',
    heroLine2: 'Feels Obvious',
    heroSubtext: 'Wireframes, prototypes, and systems that make every product intuitive from the first tap.',
    layout: 'stacking',
    body: {
      heading: 'What our product design (UI/UX) covers',
      intro:
        "This is design work for digital products - SaaS dashboards, internal tools, platforms, portals - where usability matters as much as visuals. We start with how users actually move through the product, then design interfaces that make the right action the obvious one. This is the work behind the product, not a one-off screen mockup.",
      points: [
        {
          title: 'Wireframes & user flows',
          text: "We map every screen and decision point before visual design begins, so the product's logic is solid before it's ever styled.",
        },
        {
          title: 'Interactive prototypes',
          text: 'Clickable Figma prototypes let you and your team test the experience and gather feedback before a single line of code is written.',
        },
        {
          title: 'Reusable design systems',
          text: 'We build component libraries (buttons, forms, cards) so your product stays visually consistent as new features and screens get added.',
        },
      ],
    },
    faqs: [
      {
        q: "What's the difference between this and website design?",
        a: 'Website design is typically about marketing pages meant to inform and convert visitors. Product design (UI/UX) is about the actual application or platform - dashboards, workflows, logged-in experiences - where usability and repeated use matter more than first impressions.',
      },
      {
        q: 'Do you design in Figma?',
        a: "Yes, Figma is our standard tool - it lets us share live design files, build clickable prototypes, and hand off developer-ready specs (spacing, colors, components) directly to your dev team.",
      },
      {
        q: 'Can you work with our existing product and just improve the UX?',
        a: "Absolutely - a lot of our product design work is auditing an existing app or dashboard, identifying where users get stuck or confused, and redesigning specific flows rather than starting from zero.",
      },
      {
        q: 'Do you also build the front-end, or just design it?',
        a: 'We can do either. Some clients take our design system and hand it to their in-house developers; others want us to build the front-end too, which we can do through our App/Website Development service.',
      },
    ],
    stackingProjects: [
      {
        num: '01',
        name: 'Appify',
        industry: 'SaaS - No-Code Mobile App Builder',
        col1: ['/stacking/appify-enterprise.jpg', '/stacking/appify-features.jpg'],
        col2: '/stacking/appify-homepage.jpg',
      },
      {
        num: '02',
        name: 'Prem Talks',
        industry: 'Grocery & Organic Foods - E-commerce',
        col1: ['/stacking/premtalks-product-details.jpg', '/stacking/premtalks-checkout.jpg'],
        col2: '/stacking/premtalks-home.jpg',
      },
      {
        num: '03',
        name: 'Telangana Spicy Pickles',
        industry: 'Food & Beverage - D2C E-commerce',
        col1: ['/stacking/telangana-hero-crop.jpg', '/stacking/telangana-featured-crop.jpg'],
        col2: '/stacking/telangana-product-details.jpg',
      },
    ],
  },
  {
    slug: 'logo-design-brand-identity',
    title: 'Logo Designs',
    heroLine1: 'A Mark Worth',
    heroLine2: 'Remembering',
    heroSubtext: 'A distinct visual identity that makes your business instantly recognizable, everywhere it shows up.',
    layout: 'grid',
    body: {
      heading: 'What our logo designs work covers',
      intro:
        "A logo alone isn't a brand identity - it's one piece of it. We design the mark itself alongside the colors, typography, and visual language that surround it, so your business looks like the same brand whether someone sees it on a signboard, an Instagram post, or a business card.",
      points: [
        {
          title: 'Concept-driven logo design',
          text: 'We start from your business story and positioning, not a random mood board, so the mark actually means something for your brand.',
        },
        {
          title: 'Color & typography system',
          text: 'A defined palette and font pairing that gets applied consistently, so your brand looks intentional across every touchpoint.',
        },
        {
          title: 'Multiple usable file formats',
          text: 'You get logo files ready for web, print, signage, and social - no scrambling to resize or recreate the logo later for a new use case.',
        },
      ],
    },
    faqs: [
      {
        q: 'How many logo concepts will I see?',
        a: "We typically present 2-3 distinct logo directions based on your brief, then refine your chosen direction through 1-2 rounds of revisions until it's final.",
      },
      {
        q: 'Will I own the final logo files outright?',
        a: 'Yes - once the project is complete and paid for, full ownership and usage rights of the final logo and brand assets transfer to you.',
      },
      {
        q: 'Do you also design a brand guideline document?',
        a: "Logo design projects include a basic usage guide (colors, fonts, spacing rules). A full detailed brand book with tone of voice and extended applications is covered under our separate Brand Guidelines & Identity service.",
      },
      {
        q: 'How long does a logo project take?',
        a: 'Most logo and basic identity projects take 2-3 weeks from initial brief to final files, depending on how many revision rounds are needed.',
      },
    ],
    clientWorks: [
      { title: 'ReBreath', industry: 'Wellness & Meditation', img: '/clientwork-rebreath.jpg', note: 'From hand sketches to final digital logo' },
      { title: 'Evania', industry: 'Makeup & Beauty Academy', img: '/clientwork-evania.jpg' },
      { title: 'PrintX', industry: 'Design & Printing', img: '/clientwork-printx.jpg' },
      { title: 'Spudato', industry: 'Restaurant & F&B', img: '/clientwork-spudato-v2.jpg' },
      { title: 'Vivaha Veduka', industry: 'Wedding Planning', img: '/clientwork-vivahaveduka-v2.jpg' },
      { title: 'Art Lab', industry: 'Resin Art Studio', img: '/clientwork-artlab.png', fit: 'contain', bgColor: '#ffffff', size: 'large' },
      { title: 'Life Lush Health Care LLP', industry: 'Healthcare', img: '/clientwork-llhc.png' },
      { title: 'Plan Nest', industry: 'Architecture & Interior', img: '/clientwork-plannest.png' },
      { title: "Happy'ness Reloaded", industry: 'Restaurant & F&B', img: '/clientwork-happyness.png' },
      { title: 'The Osin Studio', industry: 'Resin Art Studio', img: '/clientwork-osinstudio.png', fit: 'contain', bgColor: '#f6f2cf', size: 'large' },
      { title: 'Beyond Bajji', industry: 'Food & Beverage', img: '/clientwork-beyondbajji.png' },
      { title: 'Tasty Bar', industry: 'Restaurant', img: '/clientwork-tastybar-v2.jpg' },
      { title: 'Seven At Sagar', industry: 'Cafe & Coffee', img: '/clientwork-sevenatsagar-v2.jpg' },
      { title: 'KKR Developers', industry: 'Real Estate & Construction', img: '/clientwork-kkrdevelopers.png' },
      { title: 'Tinted - The Nail Studio', industry: 'Beauty & Nail Salon', img: '/clientwork-tinted.png', fit: 'contain', bgColor: '#ffffff', size: 'large' },
      { title: 'Healthigo', industry: 'Health & Wellness', img: '/clientwork-healthigo.png' },
    ],
  },
  {
    slug: 'graphic-design-ads',
    title: 'Graphic Design - Ads',
    heroLine1: 'Ads People',
    heroLine2: 'Stop Scrolling For',
    heroSubtext: 'Scroll-stopping social ads, banners, and hoardings designed to grab attention and drive clicks.',
    layout: 'grid',
    body: {
      heading: 'What our ad graphic design covers',
      intro:
        "This is design built specifically for paid and organic ad placements - Meta ads, Google display banners, hoardings, and print ads - where you have a fraction of a second to earn attention. We design with the platform's specs and the viewer's scroll speed in mind, not just as a smaller version of your website.",
      points: [
        {
          title: 'Platform-specific sizing',
          text: 'Every ad is designed to the exact spec of where it runs - Instagram Story, Facebook feed, Google Display, or outdoor hoarding - so nothing gets cropped or distorted.',
        },
        {
          title: 'Built to A/B test',
          text: "We design ad sets in variations (different headlines, visuals, layouts) so you can test what's actually converting instead of guessing.",
        },
        {
          title: 'On-brand, not generic',
          text: "Ads use your existing colors, fonts, and tone so they're recognizable as your brand even in a crowded feed, not a stock template.",
        },
      ],
    },
    faqs: [
      {
        q: 'Do you also run the ad campaigns, or just design the creative?',
        a: 'This service covers the design of the ad creative itself. Running and managing the campaigns (targeting, budget, optimization) falls under our Social Media Marketing service - many clients bundle both together.',
      },
      {
        q: 'Can you design for both digital and print ads (hoardings, newspapers)?',
        a: 'Yes - we design for digital placements like Meta and Google Ads as well as print formats like hoardings, newspaper ads, and pamphlets, each sized correctly for its specific use.',
      },
      {
        q: 'How many ad variations do you typically deliver?',
        a: "For a standard campaign, we usually deliver 4-6 creative variations across 2-3 concepts, so you have real options to test rather than a single design.",
      },
      {
        q: 'Do you need our past ad performance data to design new creative?',
        a: "It helps but isn't required. If you have data on what's performed well before (which headlines, colors, or formats), we'll use it to inform the new designs. Otherwise, we design based on your brand, offer, and platform best practices.",
      },
    ],
  },
  {
    slug: 'video-ads-motion-graphics',
    title: 'Video Ads & Motion Graphics',
    heroLine1: 'Stories Told',
    heroLine2: 'In Motion',
    heroSubtext: 'Explainer videos, reels, and animations that bring your brand story to life.',
    layout: 'grid',
    body: {
      heading: 'What our video ads & motion graphics work covers',
      intro:
        "We produce short-form video content built for how people actually watch now - reels, ad breaks, and explainer clips under a minute, designed to hold attention from the first second. This covers everything from scripting and storyboarding to animation and final edit, whether it's a product explainer or a social media ad.",
      points: [
        {
          title: 'Scripted & storyboarded',
          text: "Every video starts with a script and storyboard, so the message is clear before any animation work begins - not improvised in the edit.",
        },
        {
          title: 'Reels & ad-format cuts',
          text: 'We deliver videos cut for the platforms you actually use - vertical for Instagram/YouTube Shorts, square or horizontal for feed and web.',
        },
        {
          title: 'Motion graphics & explainers',
          text: 'For products or services that are hard to explain in a static image, we build animated explainer videos that break the idea down visually.',
        },
      ],
    },
    faqs: [
      {
        q: "Do I need to provide footage, or can you create the video from scratch?",
        a: "Both work. If you have raw footage, we can edit and animate around it. If not, we can build fully animated explainer videos or source appropriate stock/motion assets from scratch, based on your budget and needs.",
      },
      {
        q: 'How long should a social media ad video be?',
        a: "For Instagram Reels and YouTube Shorts, 15-30 seconds tends to perform best for ads. Explainer videos for a website or landing page can run 60-90 seconds since the viewer is more invested.",
      },
      {
        q: 'Do you write the script too, or do I provide it?',
        a: "We handle scripting as part of the process - we'll work from your key messaging and product details to write a script built for video pacing, not just repurpose website copy.",
      },
      {
        q: 'How long does a typical video project take?',
        a: 'A single short-form ad or explainer video typically takes 1-2 weeks from script approval to final delivery, depending on animation complexity.',
      },
    ],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    heroLine1: 'Followers Into',
    heroLine2: 'Real Customers',
    heroSubtext: 'Strategy, Meta ads, and analytics that turn attention into a steady stream of qualified leads.',
    layout: 'grid',
    body: {
      heading: 'What our social media marketing covers',
      intro:
        "This is the ongoing management side - not just posting content, but running social media as a channel that's supposed to generate business. We build the content calendar, manage Meta/Instagram ad campaigns, and track what's actually driving leads versus what's just getting likes.",
      points: [
        {
          title: 'Content calendar & posting',
          text: 'A planned monthly calendar mixing organic content (posts, reels, stories) so your brand shows up consistently, not sporadically.',
        },
        {
          title: 'Meta & Instagram ad management',
          text: 'We set up, run, and optimize paid campaigns - targeting, budget allocation, and creative rotation - based on what the data shows is converting.',
        },
        {
          title: 'Monthly performance reporting',
          text: 'You get a clear monthly report on reach, engagement, and lead numbers, so you know what your spend is actually producing.',
        },
      ],
    },
    faqs: [
      {
        q: 'Do you also design the content, or just schedule/post it?',
        a: 'We handle both - our design team creates the actual graphics, reels, and ad creative, and manages the posting, scheduling, and campaign optimization, so you get a complete done-for-you service.',
      },
      {
        q: 'What platforms do you manage?',
        a: 'Primarily Instagram and Facebook (Meta), since that covers most of our clients\' audiences. We also support LinkedIn for B2B-focused brands and Google My Business posting as part of local visibility.',
      },
      {
        q: 'How is this different from just running Meta ads?',
        a: 'Meta ads are one part of it. Social media marketing here also includes organic content strategy, community management (responding to comments/DMs), and consistent brand presence - ads alone without organic content usually convert worse.',
      },
      {
        q: 'How soon will I see results?',
        a: "Organic growth (followers, engagement) builds over 2-3 months of consistent posting. Paid ad leads can start coming in within the first 1-2 weeks of a campaign, though optimization improves results over the following month.",
      },
    ],
    clientWorksLayout: 'masonry',
    clientWorksHeading: 'Every post, sized for where it runs',
    clientWorksSubtext:
      'Square for the feed, portrait for stories, landscape for link previews - no one-size-fits-all template.',
    clientWorks: [
      { img: '/social/pal-arthritis.jpg', title: 'Arthritis Care', industry: 'PAL Physiotherapy' },
      { img: '/social/beyondbajji-why-us.png', title: 'Why Beyond Bajji', industry: 'Beyond Bajji' },
      { img: '/social/campaign-may19-flyer.jpg', title: 'May Flyer', industry: 'Seasonal Campaign' },
      { img: '/social/pal-chiropractic.jpg', title: 'Chiropractic Sessions', industry: 'PAL Physiotherapy' },
      { img: '/social/ad-creative-1.jpg', title: 'Social Campaign', industry: 'Ad Creative' },
      { img: '/social/beyondbajji-mirchi-bajji.png', title: 'New Trend: Mirchi Bajji', industry: 'Beyond Bajji' },
      { img: '/social/pal-posture.jpg', title: 'Posture Correction', industry: 'PAL Physiotherapy' },
      { img: '/social/campaign-stayhome.jpg', title: 'Stay Home', industry: 'Awareness Campaign' },
      { img: '/social/pal-testimonial.jpg', title: 'Client Testimonial', industry: 'PAL Physiotherapy' },
      { img: '/social/ad-creative-2.jpg', title: 'Social Campaign', industry: 'Ad Creative' },
      { img: '/social/beyondbajji-just-fried.png', title: 'Food Is Just Fried', industry: 'Beyond Bajji' },
      { img: '/social/pal-cupping.jpg', title: 'Cupping Therapy', industry: 'PAL Physiotherapy' },
      { img: '/social/campaign-workfromhome.jpg', title: 'Work From Home', industry: 'Awareness Campaign' },
      { img: '/social/pal-pain-into-gains.jpg', title: 'Turn Pain Into Gains', industry: 'PAL Physiotherapy' },
      { img: '/social/ad-creative-3.jpg', title: 'Social Campaign', industry: 'Ad Creative' },
      { img: '/social/beyondbajji-fried-icecream.png', title: 'Fried Ice Cream', industry: 'Beyond Bajji' },
      { img: '/social/pal-true-cost.jpg', title: 'The True Cost', industry: 'PAL Physiotherapy' },
      { img: '/social/campaign-insurance.jpg', title: 'Insurance Awareness', industry: 'Awareness Campaign' },
      { img: '/social/ad-creative-4.jpg', title: 'Social Campaign', industry: 'Ad Creative' },
    ],
  },
  {
    slug: 'google-my-business',
    title: 'Google My Business',
    heroLine1: 'Found First,',
    heroLine2: 'Every Search',
    heroSubtext: 'Local SEO and maps optimization that gets your business found before your competitors.',
    layout: 'grid',
    body: {
      heading: 'What our Google My Business (GMB) service covers',
      intro:
        "This is entirely about local search - making sure that when someone nearby searches for what you offer, your business shows up in the Google Maps pack and local results, not a competitor two streets away. We set up, optimize, and actively manage your GMB profile on an ongoing basis, since an untouched listing quietly loses ranking over time.",
      points: [
        {
          title: 'Full profile optimization',
          text: 'Categories, service areas, business description, and photos set up correctly so Google understands exactly what you offer and where.',
        },
        {
          title: 'Regular posts & updates',
          text: 'We post updates, offers, and photos on a regular schedule, since active listings consistently rank higher than dormant ones.',
        },
        {
          title: 'Review management',
          text: 'We help set up a system to request reviews and respond to existing ones, since review volume and recency directly affect local ranking.',
        },
      ],
    },
    faqs: [
      {
        q: 'Is Google My Business the same as SEO for my website?',
        a: "They're related but different. GMB specifically controls how you show up in Google Maps and local map-pack results. Website SEO affects your ranking in general search results. Most local businesses need both, but GMB usually has faster, more visible impact for foot traffic.",
      },
      {
        q: 'I already have a GMB listing - can you just optimize the existing one?',
        a: "Yes, most of our GMB clients already have a listing that's underperforming. We audit what's there, fix categories/info/photos, and take over ongoing management rather than starting from scratch.",
      },
      {
        q: 'How long before I see better local search rankings?',
        a: 'Initial optimization changes (categories, photos, description) can show visibility improvements within 2-4 weeks. Consistent ranking gains from posting and reviews typically build over 2-3 months.',
      },
      {
        q: 'Do you help respond to negative reviews too?',
        a: "Yes - as part of review management, we help draft professional responses to negative reviews as well, since how a business responds publicly matters to potential customers reading them.",
      },
    ],
    featuredWorks: [
      {
        title: 'PAL Physiotherapy & Sports Rehab',
        industry: 'Healthcare',
        branchNote: 'Madhapur & Kondapur - 2 branches',
        images: [
          { src: '/casestudy-pal-madhapur.png', label: 'Madhapur - "best physiotherapist in Madhapur"' },
          { src: '/casestudy-pal-kondapur.png', label: 'Kondapur - "best sports rehab in Kondapur"' },
        ],
        caption: 'Always ranks in the top 3 for many local search keywords.',
        stats: [
          { label: 'Business profile interactions / month', before: 'Before: 50-70', after: 'Now: 350-400' },
          { label: 'Calls / month', before: 'Before: 20-30', after: 'Now: 130-150' },
        ],
        disclaimer: 'No paid ads - organic growth from GMB optimization alone.',
      },
      {
        title: 'Square Designs',
        industry: 'Printing Industry',
        branchNote: 'Madhapur, Hyderabad',
        images: [
          { src: '/casestudy-squaredesigns-search.png', label: 'Search Ranking - "printing shop in madhapur"' },
          { src: '/casestudy-squaredesigns-performance.png', label: 'Business Profile Performance - Last 30 Days' },
        ],
        caption: 'Ranks in the top 3 for local printing searches in Madhapur.',
        stats: [
          { label: 'Business profile views (30 days)', before: '4,193 views', after: '+17.7% vs last month' },
          { label: 'Search impressions (30 days)', before: '563 searches', after: '+33.7% vs last month' },
        ],
        disclaimer: 'Organic growth from GMB optimization - no paid ads.',
        badge: false,
      },
      {
        title: 'PrintX Design & Printing',
        industry: 'Printing & Design',
        branchNote: 'Gachibowli, Hyderabad',
        images: [
          { src: '/casestudy-printx-search.png', label: 'Search Ranking - "flex design & print gachibowli"' },
          { src: '/casestudy-printx-performance.png', label: 'Business Profile Performance - Direction Requests' },
        ],
        caption: 'Shows up in the top 3 for many local print & design search keywords in Gachibowli.',
        stats: [
          { label: 'Direction requests (Apr - Jul 2026)', before: 'Apr 2026: ~25/month', after: '214 total, still climbing' },
        ],
        disclaimer: 'Organic growth from GMB optimization - no paid ads.',
        badge: false,
      },
      {
        title: 'Evania',
        industry: 'Beauty & Wellness',
        branchNote: 'Multiple Hyderabad locations',
        images: [{ src: '/casestudy-evania-search.png', label: 'Search Ranking - "evania"' }],
        caption: 'Ranks #1 for the branded search "evania," across multiple Hyderabad locations under the brand.',
        badge: false,
      },
    ],
    clientWorks: [],
  },
  {
    slug: 'brand-guidelines-identity',
    title: 'Brand Guidelines & Identity',
    heroLine1: 'One Brand,',
    heroLine2: 'Every Touchpoint',
    heroSubtext: 'Color systems, typography, and a brand book that keep every touchpoint consistent.',
    layout: 'grid',
    body: {
      heading: 'What our brand guidelines & identity work covers',
      intro:
        "This is the detailed rulebook that sits behind your logo - a full brand book documenting exactly how your visual identity should be used, so your brand looks the same whether your team, a freelancer, or a print vendor is the one applying it. It's built for businesses that already have a logo but need consistency as they scale.",
      points: [
        {
          title: 'Complete visual rulebook',
          text: "Logo usage (spacing, minimum size, dos and don'ts), color codes, and typography rules documented in one reference file.",
        },
        {
          title: 'Tone of voice guide',
          text: 'How your brand should sound in writing - formal or casual, what words to use or avoid - so your messaging stays consistent across channels.',
        },
        {
          title: 'Real application examples',
          text: "Mockups showing the identity applied to business cards, social templates, signage, or packaging, so it's clear how the rules translate in practice.",
        },
      ],
    },
    faqs: [
      {
        q: 'Do I need this if I already have a logo?',
        a: "If you already have a logo but no documented rules around how it's used, this fills that gap. It's especially useful once multiple people (team members, agencies, print vendors) are creating materials for your brand, so everything stays consistent.",
      },
      {
        q: "What's the difference between this and the Logo Design service?",
        a: 'Logo Design creates the mark itself along with a basic usage guide. Brand Guidelines & Identity goes much deeper - a full brand book covering tone of voice, extended color/type systems, and real-world application mockups across multiple materials.',
      },
      {
        q: 'What format do we receive the brand guidelines in?',
        a: "You get a designed PDF brand book that's easy to share with your team or any vendor, plus the source files (fonts, color codes, logo variations) referenced inside it.",
      },
      {
        q: 'How long does a brand guidelines project take?',
        a: 'Typically 3-4 weeks, since it involves documenting rules across multiple use cases and building out application mockups, not just a single deliverable.',
      },
    ],
  },
  {
    slug: 'packaging-design',
    title: 'Packaging Design',
    heroLine1: 'Packaging That',
    heroLine2: "Sells Off The Shelf",
    heroSubtext: 'Labels, box design, and 3D mockups that make your product impossible to ignore.',
    layout: 'grid',
    body: {
      heading: 'What our packaging design covers',
      intro:
        "Packaging design here means the actual print-ready artwork your product ships in - labels, boxes, pouches - designed to work both on a physical shelf and in a small product photo online. We design with real manufacturing constraints (dielines, print bleed, material type) in mind, not just a flat visual.",
      points: [
        {
          title: 'Print-ready dieline artwork',
          text: "Designs are built to your exact box or label dieline with correct bleed and safe zones, so what you approve is what actually prints correctly.",
        },
        {
          title: '3D mockups before you print',
          text: 'We render realistic 3D mockups so you can see how the design looks as an actual product before committing to a print run.',
        },
        {
          title: 'Shelf & e-commerce ready',
          text: 'Designed to stand out both physically on a retail shelf and as a small thumbnail image on Amazon, Flipkart, or your own store.',
        },
      ],
    },
    faqs: [
      {
        q: 'Do you design for specific marketplace requirements (Amazon, Flipkart)?',
        a: "Yes - if your product will be listed on Amazon, Flipkart, or similar marketplaces, we account for their specific image and labeling requirements alongside standard packaging design.",
      },
      {
        q: "Can you work with our existing packaging supplier's dieline?",
        a: "Yes, if you already have a manufacturer or supplier with a specific dieline template, we design directly onto that template so the artwork is print-ready without back-and-forth corrections.",
      },
      {
        q: 'Do you handle the actual printing too?',
        a: "We deliver print-ready files and can recommend printers we've worked with, but we don't handle the print production itself - that stays with your chosen manufacturer.",
      },
      {
        q: 'How long does a packaging design project take?',
        a: 'A single product label or box design typically takes 2-3 weeks including 3D mockup revisions. Multi-SKU packaging systems can take 4-6 weeks.',
      },
    ],
    clientWorksLayout: 'masonry',
    clientWorksHeading: 'Every label, its own shelf story',
    clientWorksSubtext:
      'Bottle mockups for the product page, flat label art for print - each shown at the size it actually ships at.',
    clientWorks: [
      { title: 'Apple Cider Vinegar Gummies', industry: 'Ayur Gum - Supplements', img: '/clientwork-ayurgum-acv-gummies.png' },
      { title: 'Caramel Fox Nuts', industry: "Oh So Poppin' - Snacks", img: '/clientwork-ohsopoppin-caramel.jpg' },
      { title: 'Honey Jars', industry: 'Nature Keen - Honey', img: '/clientwork-naturekeen-honey-jars.jpg' },
      { title: 'Omega 3 Fish Oil', industry: 'Ayur Gum - Supplements', img: '/clientwork-ayurgum-omega3.jpg' },
      { title: 'Chocolate Fox Nuts', industry: "Oh So Poppin' - Snacks", img: '/clientwork-ohsopoppin-chocolate.jpg' },
      { title: 'Peri Peri Fox Nuts', industry: "Oh So Poppin' - Snacks", img: '/clientwork-ohsopoppin-periperi.jpg' },
      { title: 'Vitamin K2 + D3', industry: 'Ayur Gum - Supplements', img: '/clientwork-ayurgum-vitamink2d3.png' },
      { title: 'Cream & Onion Fox Nuts', industry: "Oh So Poppin' - Snacks", img: '/clientwork-ohsopoppin-creamonion.jpg' },
      { title: 'Honey Splash', industry: 'Nature Keen - Honey', img: '/clientwork-naturekeen-honey-splash.jpg' },
      { title: 'African Mango Drops', industry: 'Ayur Gum - Supplements', img: '/clientwork-ayurgum-mangodrops.png' },
      { title: 'Himalayan Salt Fox Nuts', industry: "Oh So Poppin' - Snacks", img: '/clientwork-ohsopoppin-himalayansalt.jpg' },
      { title: 'Pre-Workout Watermelon', industry: 'Ayur Gum - Supplements', img: '/clientwork-ayurgum-preworkout.png' },
      { title: 'Salt & Pepper Fox Nuts', industry: "Oh So Poppin' - Snacks", img: '/clientwork-ohsopoppin-saltpepper.jpg' },
      { title: 'Whey Isolate Protein', industry: 'Ayur Gum - Supplements', img: '/clientwork-ayurgum-wheyprotein.png' },
      { title: 'Collagen Peptides - Label Detail', industry: 'Supplements', img: '/clientwork-collagen-peptides.png' },
    ],
    marqueeImages: [
      '/marquee/ayurgum-acv-gummies-label.jpg',
      '/marquee/ayurgum-whey-label.jpg',
      '/marquee/ayurgum-vitamink2d3-label.jpg',
      '/marquee/ayurgum-sleepwell-label.jpg',
      '/marquee/ayurgum-preworkout-watermelon-label.jpg',
      '/marquee/ayurgum-preworkout-fruitpunch-label.jpg',
      '/marquee/ayurgum-omega3-label.jpg',
      '/marquee/ayurgum-multivitamin-label.jpg',
      '/marquee/ayurgum-multivitamin-women-label.jpg',
      '/marquee/ayurgum-magnesium-label.jpg',
      '/marquee/ayurgum-hairvitamin-label.jpg',
      '/marquee/ayurgum-brainsupport-label.jpg',
    ],
  },
  {
    slug: 'print-publication-design',
    title: 'Print & Publication Design',
    heroLine1: 'Print Done',
    heroLine2: 'With Precision',
    heroSubtext: 'Cards, brochures, and catalogs crafted with the same care as your digital presence.',
    layout: 'grid',
    body: {
      heading: 'What our print & publication design covers',
      intro:
        "This covers the physical, printed side of your brand - business cards, brochures, catalogs, and multi-page publications - designed with actual print production in mind (CMYK color, resolution, bleed) so what you see on screen matches what comes off the press.",
      points: [
        {
          title: 'Business cards & stationery',
          text: 'Cards, letterheads, and envelopes designed to match your brand identity, set up correctly for standard or custom print sizes.',
        },
        {
          title: 'Brochures & catalogs',
          text: 'Multi-page layouts for product catalogs, service brochures, or company profiles, designed for both readability and print accuracy.',
        },
        {
          title: 'Print-accurate color & files',
          text: 'All files are prepared in CMYK with correct resolution and bleed settings, avoiding the washed-out or misaligned results of screen-only design.',
        },
      ],
    },
    faqs: [
      {
        q: 'Do you handle the actual printing, or just the design files?',
        a: "We deliver print-ready files (CMYK, correct bleed and resolution) and can recommend printers we trust, but the printing itself is typically handled by your chosen print vendor.",
      },
      {
        q: 'Can you design a multi-page catalog or annual report?',
        a: 'Yes - we regularly design multi-page publications like product catalogs, company profiles, and reports, with consistent layout and typography across every page.',
      },
      {
        q: "What's the difference between this and Graphic Design - Ads?",
        a: 'Graphic Design - Ads is built for paid/organic advertising placements (social, display, hoardings). Print & Publication Design covers physical business materials - cards, brochures, catalogs - meant for handing out or mailing, not for running as an ad.',
      },
      {
        q: 'How long does a print design project take?',
        a: 'Simple items like business cards typically take under a week. Multi-page brochures or catalogs take 2-3 weeks depending on page count and content readiness.',
      },
    ],
    clientWorks: [
      { title: 'Board Design', industry: 'Kanchukota - Restaurant Signage', img: '/clientwork-kanchukota-board.jpg' },
    ],
  },
  {
    slug: 'presentation-design',
    title: 'Presentation Design',
    heroLine1: 'Decks That',
    heroLine2: 'Hold The Room',
    heroSubtext: 'Pitch decks and company presentations designed to actually get read, not just clicked through.',
    layout: 'grid',
    body: {
      heading: 'What our presentation design covers',
      intro:
        "This is deck design for the moments that actually matter - investor pitches, sales decks, company overviews, board updates. We take your raw content (or build it with you from scratch) and turn it into a deck with a clear narrative arc, one consistent visual system, and slides that don't rely on you talking over them to make sense.",
      points: [
        {
          title: 'Story before slides',
          text: 'We map the narrative - what you\'re arguing and in what order - before opening PowerPoint, so the deck has a spine instead of just a stack of topics.',
        },
        {
          title: 'One visual system, no patchwork',
          text: 'A defined palette, type scale, and layout language applied consistently, so it never looks like slides were pasted together from different decks.',
        },
        {
          title: 'Delivered editable',
          text: 'You get real, editable PowerPoint or Google Slides files - not a locked PDF - so your team can update numbers and content long after we hand it off.',
        },
      ],
    },
    faqs: [
      {
        q: 'Do you write the content, or do I provide it?',
        a: "Either way works. If you have raw content (notes, an old deck, a Word doc), we'll restructure and design around it. If you're starting from nothing, we can help shape the narrative and messaging too, not just the visual design.",
      },
      {
        q: 'What software do you deliver the deck in?',
        a: "PowerPoint or Google Slides, editable, not a flattened PDF - so you can update numbers, swap slides, and present it however you need to afterward.",
      },
      {
        q: 'Can you redesign a deck we already have?',
        a: "Yes - a lot of our presentation work is exactly this: taking an existing deck that's grown messy over time and rebuilding it with a consistent system, without losing the content that already works.",
      },
      {
        q: 'How many slides does a typical deck run?',
        a: "Varies a lot by purpose - a lean investor pitch might be 10-12 slides, while a full company overview deck can run 15-20+. We'll scope the right length for what the deck needs to do.",
      },
      {
        q: 'How long does a deck project take?',
        a: 'A focused pitch deck (10-15 slides) typically takes 1-2 weeks. Larger company overview or sales decks with more content can take 2-3 weeks.',
      },
    ],
  },
];

export function getServicePageBySlug(slug: string | undefined) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
