import {
  Globe,
  PenTool,
  Sparkles,
  Image,
  Video,
  Share2,
  MapPin,
  BookOpen,
  Package,
  Printer,
  Smartphone,
  Presentation,
} from 'lucide-react';
import { createElement } from 'react';

const iconProps = { size: 32, strokeWidth: 2.5 };

// Single unified accent used across every card for a cohesive glass look.
export const SERVICE_ACCENT = 'linear-gradient(137deg, #7C6CFF 0%, #A78BFA 45%, #6D5DFC 100%)';

export const NEXPLY_SERVICES = [
  {
    title: 'Website Design & Development',
    slug: 'website-design-development',
    description:
      'Fast, responsive websites built on WordPress, Next.js, React, or Shopify - made to convert visitors into customers.',
    icon: createElement(Globe, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'App Design & Development',
    slug: 'app-design-development',
    description:
      'Native and cross-platform apps designed and built end-to-end, from first wireframe to app store launch.',
    icon: createElement(Smartphone, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Product Design - UI/UX',
    slug: 'product-design-ui-ux',
    description:
      'Wireframes, prototypes, and design systems that make every product feel intuitive from the first tap.',
    icon: createElement(PenTool, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Logo Designs',
    slug: 'logo-design-brand-identity',
    description:
      'A distinct mark and brand identity that makes your business instantly recognizable, everywhere it shows up.',
    icon: createElement(Sparkles, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Graphic Design - Ads',
    slug: 'graphic-design-ads',
    description:
      'Scroll-stopping social ads, banners, and hoardings designed to grab attention and drive clicks.',
    icon: createElement(Image, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Video Ads & Motion Graphics',
    slug: 'video-ads-motion-graphics',
    description:
      'Explainer videos, reels, and animations that bring your brand story to life in motion.',
    icon: createElement(Video, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description:
      'Strategy, Meta ads, and analytics that turn followers into a steady stream of qualified leads.',
    icon: createElement(Share2, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Google My Business',
    slug: 'google-my-business',
    description:
      'Local SEO and maps optimization that gets your business found first when nearby customers search.',
    icon: createElement(MapPin, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Brand Guidelines & Identity',
    slug: 'brand-guidelines-identity',
    description:
      'Color systems, typography, and a brand book that keep every touchpoint consistent and on-brand.',
    icon: createElement(BookOpen, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Packaging Design',
    slug: 'packaging-design',
    description:
      'Labels, box design, and 3D mockups that make your product impossible to ignore on the shelf.',
    icon: createElement(Package, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Print & Publication Design',
    slug: 'print-publication-design',
    description:
      'Cards, brochures, and catalogs crafted with the same precision as your digital presence.',
    icon: createElement(Printer, iconProps),
    gradient: SERVICE_ACCENT,
  },
  {
    title: 'Presentation Design',
    slug: 'presentation-design',
    description:
      'Pitch decks and company presentations designed to actually hold a room, not just fill slides.',
    icon: createElement(Presentation, iconProps),
    gradient: SERVICE_ACCENT,
  },
];
