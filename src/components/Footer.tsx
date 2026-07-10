import { Link } from 'react-router-dom';
import { Camera, Briefcase, Play, ThumbsUp, MapPin, Phone, Mail } from 'lucide-react';
import { NEXPLY_SERVICES } from '../lib/services';
import { DARK_BG_FLAT } from '../lib/brand';

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// This version of lucide-react ships no brand/social icons (Facebook,
// Instagram, LinkedIn, YouTube aren't exported) - using the closest
// generic equivalents as stand-ins, each clearly labeled.
const SOCIALS = [
  { icon: ThumbsUp, label: 'Facebook' },
  { icon: Camera, label: 'Instagram' },
  { icon: Briefcase, label: 'LinkedIn' },
  { icon: Play, label: 'YouTube' },
  { icon: MapPin, label: 'Google Business Profile' },
];

const SERVICES_COL_1 = NEXPLY_SERVICES.slice(0, 6);
const SERVICES_COL_2 = NEXPLY_SERVICES.slice(6);

export default function Footer() {
  return (
    <footer className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="footer-divider-line" />
      <div
        className="mx-auto"
        style={{ maxWidth: 1240, padding: 'clamp(56px, 7vw, 88px) clamp(16px, 4vw, 40px) 32px' }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr_0.9fr_1fr] gap-12 pb-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Brand column */}
          <div className="flex flex-col items-start gap-4">
            <img
              src="/nexply-logo-white.svg"
              alt="Nexply Studios"
              loading="lazy"
              decoding="async"
              className="block"
              style={{ height: 68, width: 'auto' }}
            />
            <p className="text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Design, development, and marketing - under one roof, moving at startup speed.
            </p>

            <div className="flex flex-col gap-2.5 mt-1">
              <a
                href="tel:+917842203319"
                className="flex items-center gap-2.5 text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <Phone size={14} />
                +91 78422 03319
              </a>
              <a
                href="mailto:next@nexply.in"
                className="flex items-center gap-2.5 text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <Mail size={14} />
                next@nexply.in
              </a>
              <span
                className="flex items-start gap-2.5 text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <MapPin size={14} className="shrink-0 mt-0.5" />
                8th Floor, Suite 30, Jayabheri Silicon Towers, Hitech City Rd, Kothaguda,
                Hyderabad, Telangana 500084.
              </span>
            </div>

            <div className="flex items-center gap-3 mt-1">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.06]"
                  style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <Icon size={15} color="rgba(255,255,255,0.7)" />
                </a>
              ))}
            </div>
          </div>

          {/* Services - column 1 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Services
            </span>
            {SERVICES_COL_1.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {s.title}
              </Link>
            ))}
          </div>

          {/* Services - column 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] mb-1 md:invisible">
              Services
            </span>
            {SERVICES_COL_2.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {s.title}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Company
            </span>
            {COMPANY_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Nexply Studios. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Privacy Policy
            </a>
            <a href="#" className="text-xs transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
