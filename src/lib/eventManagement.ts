import { createElement, type ReactNode } from 'react';
import {
  CalendarHeart,
  Building,
  Store,
  Camera,
  Sparkles,
  UtensilsCrossed,
  Music,
  Truck,
  PartyPopper,
  Users,
  Share2,
  Megaphone,
  Search,
  Globe,
  Target,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Event Management growth service - shared content for both landing pages
// (EM-01 cinematic scroll page, EM-02 Nexply-branded page). Run inside
// Nexply Studios by Rahul Munigala, working only with event-industry
// businesses on lead generation and digital growth.
// ---------------------------------------------------------------------------

// Warm "celebration" accent layered on the Nexply dark system for EM-02.
export const EVENT_GOLD = '#F5B841';
export const EVENT_ROSE = '#F43F7E';
export const EVENT_GRADIENT = 'linear-gradient(120deg, #F5B841 0%, #F43F7E 55%, #A855F7 100%)';
export const eventGradientText = {
  backgroundImage: EVENT_GRADIENT,
  backgroundClip: 'text' as const,
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  color: 'transparent',
};

// Extra entry shown at the bottom of the top-nav Services dropdown - the
// Event Industry Growth offer (Rahul Munigala).
export const EVENT_MANAGEMENT_NAV = [
  { label: 'Event Management', path: '/event-management', note: 'For event businesses' },
];

export const RAHUL = {
  name: 'Rahul Munigala',
  role: 'Event Industry Growth Expert',
  company: 'Nexply Studios',
  yearsExperience: '8+ years',
  // Replace with a real portrait: /event/rahul-munigala.jpg (portrait, ~800x1000).
  photoPlaceholder: '/event/rahul-munigala.jpg',
  shortBio:
    'Rahul Munigala is an event industry professional with 8+ years of hands-on experience organising and executing events across India - planning, execution, marketing, vendor management, client coordination, and business development.',
  longBio: [
    'Rahul Munigala is an experienced event industry professional with 8+ years of experience, having organised and executed events across India. Over the years he has gained extensive hands-on experience across event planning, execution, marketing, vendor management, client coordination, and business development.',
    'Today, Rahul is associated with Nexply Studios as an Event Industry Growth Expert, where he combines his deep understanding of the events ecosystem with modern digital marketing and lead-generation strategies.',
    'At Nexply Studios, Rahul works exclusively with event industry professionals and businesses - helping them generate high-quality leads, attract the right clients, build a stronger digital presence, and grow their overall business.',
  ],
  approach:
    'Helping event businesses move from inconsistent enquiries to a predictable flow of high-quality leads and real business opportunities.',
};

export interface EventAudience {
  label: string;
  icon: ReactNode;
  // Drop a real photo here to give the section an event-industry feel.
  // Until the file exists it renders as a marked placeholder.
  img: string;
}

// The businesses Rahul specifically works with. Images live under
// /public/event/audience/ - suggested ~4:3, landscape.
export const EVENT_AUDIENCES: EventAudience[] = [
  { label: 'Wedding Planners', icon: createElement(CalendarHeart, { size: 18 }), img: '/event/audience/wedding-planners.jpg' },
  { label: 'Corporate Event Planners', icon: createElement(Building, { size: 18 }), img: '/event/audience/corporate-events.jpg' },
  { label: 'Venue Owners', icon: createElement(Store, { size: 18 }), img: '/event/audience/venue-owners.jpg' },
  { label: 'Photographers & Videographers', icon: createElement(Camera, { size: 18 }), img: '/event/audience/photographers.jpg' },
  { label: 'Decorators & Event Designers', icon: createElement(Sparkles, { size: 18 }), img: '/event/audience/decorators.jpg' },
  { label: 'Caterers', icon: createElement(UtensilsCrossed, { size: 18 }), img: '/event/audience/caterers.jpg' },
  { label: 'Event Entertainment Companies', icon: createElement(Music, { size: 18 }), img: '/event/audience/entertainment.jpg' },
  { label: 'Event Vendors', icon: createElement(Truck, { size: 18 }), img: '/event/audience/vendors.jpg' },
  { label: 'Other Event Professionals', icon: createElement(PartyPopper, { size: 18 }), img: '/event/audience/other.jpg' },
];

export interface EventChallenge {
  title: string;
  text: string;
}

export const EVENT_CHALLENGES: EventChallenge[] = [
  {
    title: 'Feast-or-famine enquiries',
    text: 'A flood of leads in wedding season, then silence. Cash flow and planning swing wildly all year.',
  },
  {
    title: 'The wrong kind of leads',
    text: 'Price-shoppers and no-shows eat your time. The clients who actually value your work never find you.',
  },
  {
    title: 'Word-of-mouth has a ceiling',
    text: 'Referrals are great until they plateau. There is no system bringing in new clients on their own.',
  },
  {
    title: 'A weak digital presence',
    text: 'An outdated site, an inconsistent Instagram, no reviews strategy - so you lose the client before the first call.',
  },
  {
    title: 'No time to market',
    text: 'You are on-site running events. Marketing gets whatever is left over, which is usually nothing.',
  },
];

export interface EventService {
  title: string;
  text: string;
  icon: ReactNode;
}

// Everything Nexply brings to bear for an event business, coordinated by Rahul.
export const EVENT_SERVICES: EventService[] = [
  {
    title: 'Influencer Marketing',
    text: 'Local creators and couples-of-influence featuring your work in front of exactly the audience booking events.',
    icon: createElement(Users, { size: 22 }),
  },
  {
    title: 'Social Media Marketing',
    text: 'A consistent, on-brand Instagram and Facebook presence - reels, carousels, and stories that build trust.',
    icon: createElement(Share2, { size: 22 }),
  },
  {
    title: 'Performance Marketing',
    text: 'Meta and Google ad campaigns tuned to booked enquiries, not vanity clicks - with weekly reporting.',
    icon: createElement(Target, { size: 22 }),
  },
  {
    title: 'Digital Marketing & Funnels',
    text: 'Landing pages, enquiry forms, and follow-up flows that turn attention into calendar-blocked calls.',
    icon: createElement(Megaphone, { size: 22 }),
  },
  {
    title: 'Website, SEO, GEO & AEO',
    text: 'A fast portfolio site that ranks for "wedding planner near me" and gets cited by AI answer engines.',
    icon: createElement(Search, { size: 22 }),
  },
  {
    title: 'Google Business & Local',
    text: 'Maps optimisation and a review engine so you show up first when nearby clients search.',
    icon: createElement(Globe, { size: 22 }),
  },
];

export interface EventStep {
  num: string;
  title: string;
  text: string;
}

export const EVENT_STEPS: EventStep[] = [
  {
    num: '01',
    title: 'Understand your business',
    text: 'Rahul maps your services, ideal clients, pricing, and capacity - from an event operator’s point of view, not just a marketer’s.',
  },
  {
    num: '02',
    title: 'Build the presence',
    text: 'Website, portfolio, social profiles, and Google Business - cleaned up and made consistent so every lead lands somewhere convincing.',
  },
  {
    num: '03',
    title: 'Turn on the lead engine',
    text: 'Influencer, social, and performance campaigns go live, all pointed at a single enquiry funnel with proper follow-up.',
  },
  {
    num: '04',
    title: 'Optimise for predictability',
    text: 'Weekly review of enquiries, cost per lead, and bookings - tightening the system into a steady, year-round flow.',
  },
];

export interface EventFAQ {
  q: string;
  a: string;
}

export const EVENT_FAQS: EventFAQ[] = [
  {
    q: 'Who exactly is this for?',
    a: 'Event industry businesses only - wedding planners, corporate event planners, venue owners, photographers and videographers, decorators, caterers, entertainment companies, and event vendors. If you sell or service events, this is built for you.',
  },
  {
    q: 'What makes this different from a normal marketing agency?',
    a: 'Rahul has spent 8+ years actually running and executing events across India. He understands your season, your margins, your vendor chain, and what a "good lead" really means for an event business - so the marketing is built around how your business works, not a generic template.',
  },
  {
    q: 'What services are included?',
    a: 'Whatever the goal needs: influencer marketing, social media, performance marketing, digital marketing and funnels, website design, SEO / GEO / AEO, and Google Business optimisation - all delivered by Nexply Studios and coordinated by Rahul.',
  },
  {
    q: 'How soon will I see leads?',
    a: 'Presence and profile fixes land in the first few weeks. Paid campaigns can start producing enquiries within the first 2-4 weeks, with the system tightening into a predictable flow over the following couple of months.',
  },
  {
    q: 'Do you work with businesses outside my city?',
    a: 'Yes. Rahul has organised events across India and works with event businesses in most major cities. Everything is run remotely with regular calls.',
  },
  {
    q: 'How do we start?',
    a: 'Book a call through the contact form. Rahul will look at your current enquiries, presence, and goals, and lay out exactly what a predictable lead flow would take for your business.',
  },
];
