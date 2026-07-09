import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';
import { DARK_BG_FLAT, glassDifferentiation, gradientTextStyle } from '../lib/brand';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  logo: string;
  industry: string;
  logoPadding?: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ranjith Ganta',
    role: 'Founder & CEO, Beyond Bajji',
    quote:
      'Nexply handled our franchise branding across Hyderabad and ran our social media - the difference in how the brand looks and feels today is night and day.',
    logo: '/logo-ticker-beyondbajji.png',
    industry: 'B2C - Food, Franchise',
  },
  {
    name: 'Chaitanya Saripalli',
    role: 'CEO & Founder, EnlitEDU',
    quote:
      "They built our website with SEO baked in from day one. Between the site traffic and our email campaigns, the leads have been consistent and real.",
    logo: '/logo-enlitedu.png',
    industry: 'USA Higher Education',
  },
  {
    name: 'Poosani Chowdary',
    role: 'Founder, Spudato',
    quote:
      'They built us a scan-and-order portal our customers actually love, plus a logo I\'m genuinely proud of. Our social posts finally look like a real brand.',
    logo: '/logo-spudato.png',
    industry: 'Food & Beverages',
    logoPadding: 4,
  },
  {
    name: 'Dr. Bhuvana',
    role: 'Founder, PAL Physiotherapy & Sports Rehab',
    quote:
      'They built us a full CRM - patient engagement, scheduling, expense tracking, reminders - it simplified everything. The SEO and AEO work on top of that has been fantastic.',
    logo: '/logo-pal.png',
    industry: 'Medical / Health Care',
  },
  {
    name: 'Hemalatha',
    role: 'Founder & CEO, Rebreath',
    quote:
      "I wanted five natural elements worked into our logo, done minimally - they sketched dozens of directions until we found the one. Genuinely one of the most creative processes I've been part of.",
    logo: '/logo-rebreath-testimonial.png',
    industry: 'Wellness Industry',
  },
  {
    name: 'Chandu Gangadhar Devanpally',
    role: 'Founder & CEO, Ardent CRO',
    quote:
      'Our website was huge and complicated - they simplified it without losing anything important. The print materials they designed afterward, especially the brochure, were some of the best we\'ve had.',
    logo: '/logo-ardent-icon.png',
    industry: 'Clinical Research',
    logoPadding: 12,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 90px)' }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <h2
            className="text-white font-medium flex items-center gap-3 flex-wrap justify-center"
            style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
          >
            Our trusted <span style={gradientTextStyle}>Clients</span>
          </h2>
          <p
            className="max-w-lg"
            style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}
          >
            Our mission is to help you build a brand people remember - with work that
            consistently exceeds expectations.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-[1200px]">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{
                rotate: -1.5,
                y: -8,
                scale: 1.03,
                borderColor: 'rgba(255,255,255,0.32)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative rounded-2xl backdrop-blur-md p-6 flex flex-col"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.03)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              }}
            >
              {/* Faint top sheen, matching the glass language used elsewhere */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 30%)',
                }}
              />

              <div className="relative flex items-center justify-between mb-6 gap-3">
                <div
                  className="relative rounded-full flex items-center justify-center shrink-0 backdrop-blur-md overflow-hidden"
                  style={{
                    width: 56,
                    height: 56,
                    border: '1px solid rgba(255,255,255,0.25)',
                    background: '#ffffff',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.4)',
                    padding: t.logoPadding ?? 10,
                  }}
                >
                  {/* Sheen, same glass language as the card itself */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 50%)',
                    }}
                  />
                  {t.logo ? (
                    <img
                      src={t.logo}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      className="relative w-full h-full object-contain"
                    />
                  ) : (
                    <Building2 size={22} color="rgba(13,14,31,0.6)" strokeWidth={1.75} className="relative" />
                  )}
                </div>

                <span
                  className="text-[11px] font-medium rounded-full px-3 py-1.5 text-right backdrop-blur-md"
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {t.industry}
                </span>
              </div>

              <p
                className="relative flex-1"
                style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6 }}
              >
                "{t.quote}"
              </p>

              <div className="relative mt-6">
                <p className="text-white font-medium text-base">{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
