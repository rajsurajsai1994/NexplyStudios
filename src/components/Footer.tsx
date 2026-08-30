import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { NEXPLY_SERVICES } from '../lib/services';
import { DARK_BG_FLAT } from '../lib/brand';

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'CareNext', href: '/products/carenext' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// This version of lucide-react ships no brand/social icons, so these are
// inline SVG brand glyphs. Only the profiles Nexply actively maintains.
const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nexplystudio/',
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nexplystudio/',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
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
              src="/nexply-studio-logo-footer.png"
              alt="Nexply Studios"
              loading="lazy"
              decoding="async"
              className="block max-w-full"
              style={{ height: 52, width: 'auto' }}
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
                href="tel:+918790941280"
                className="flex items-center gap-2.5 text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <Phone size={14} />
                +91 87909 41280
              </a>
              <a
                href="mailto:next@nexplystudio.com"
                className="flex items-center gap-2.5 text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <Mail size={14} />
                next@nexplystudio.com
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
              {SOCIALS.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.06]"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}
                >
                  {icon}
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
            © {new Date().getFullYear()} Nexply Studios. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="text-xs transition-colors duration-300 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs transition-colors duration-300 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
