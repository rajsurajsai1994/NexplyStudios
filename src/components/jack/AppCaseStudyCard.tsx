import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gradientA, gradientTextStyle } from '../../lib/brand';

export interface AppScreen {
  src: string;
  label: string;
}

export interface AppCaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  // Live site link, when there is one - shows a small "Visit Website"
  // link next to the industry chip. Omitted for design-only work (Figma
  // concepts, apps not yet public) where there's nothing to link to.
  url?: string;
  // First screen is the default shown large in the middle; every screen
  // (including that first one) also appears as a clickable thumbnail, so
  // clicking any thumbnail swaps what's shown in the main frame.
  screens: AppScreen[];
}

// Same glassmorphism card language as the featured GMB case studies
// (ClientWorksGridSection) - blurred glass panel, soft purple glow, brand
// gradient accents - so an app case study reads as part of the same
// design system rather than a one-off laptop mockup.
export default function AppCaseStudyCard({ study }: { study: AppCaseStudy }) {
  const [active, setActive] = useState(0);
  const activeScreen = study.screens[active] ?? study.screens[0];

  return (
    <div
      className="relative rounded-[28px] overflow-hidden backdrop-blur-md w-full"
      style={{
        maxWidth: 1200,
        border: '1px solid rgba(255,255,255,0.16)',
        background: 'rgba(255,255,255,0.04)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 25%)' }}
      />
      <div
        className="pointer-events-none absolute -top-24 -left-16 rounded-full"
        style={{ width: 320, height: 320, background: 'rgba(124,108,255,0.18)', filter: 'blur(90px)' }}
      />

      <div className="relative" style={{ padding: 'clamp(20px, 3vw, 40px)' }}>
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-2.5"
              style={{ background: gradientA, color: 'white' }}
            >
              {study.client}
            </span>
            <h3 className="text-white font-medium" style={{ fontSize: 'clamp(22px, 2.4vw, 30px)' }}>
              {study.title}
            </h3>
          </div>
          <span
            className="shrink-0 flex items-center gap-3 flex-wrap"
          >
            <span
              className="text-[11px] font-medium rounded-full px-3 py-1.5"
              style={{
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {study.industry}
            </span>
            {study.url && (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] font-medium rounded-full px-3 py-1.5 transition-colors hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.85)' }}
              >
                Visit Website
                <ArrowUpRight size={12} />
              </a>
            )}
          </span>
        </div>

        <p
          className="mb-8"
          style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.05vw, 16px)', lineHeight: 1.7 }}
        >
          {study.description}
        </p>

        {/* Main screen, centered, sized to its own natural aspect ratio -
            no forced box, so nothing gets cropped or letterboxed */}
        <div className="flex justify-center">
          <div
            className="rounded-2xl overflow-hidden w-full"
            style={{ maxWidth: 880, border: '1px solid rgba(255,255,255,0.14)', background: '#eef2fb' }}
          >
            <img
              key={activeScreen.src}
              src={activeScreen.src}
              alt={activeScreen.label}
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Thumbnails, in a row below the main screen - fixed height, auto
            width per image's own aspect ratio, so nothing gets cropped or
            padded with empty space here either. */}
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          {study.screens.map((screen, i) => {
            const isActive = i === active;
            return (
              <button
                key={screen.src}
                onClick={() => setActive(i)}
                className="relative rounded-xl overflow-hidden text-left group shrink-0"
                style={{
                  height: 96,
                  border: isActive ? '2px solid transparent' : '1px solid rgba(255,255,255,0.14)',
                  backgroundImage: isActive ? gradientA : undefined,
                  backgroundOrigin: 'border-box',
                  padding: isActive ? 2 : 0,
                }}
              >
                <div className="rounded-[10px] overflow-hidden h-full" style={{ background: '#eef2fb' }}>
                  <img
                    src={screen.src}
                    alt={screen.label}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-auto object-contain transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                    }`}
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 px-2 py-1"
                  style={{ background: 'rgba(0,0,0,0.55)' }}
                >
                  <p
                    className="text-[10px] font-medium truncate"
                    style={isActive ? gradientTextStyle : { color: 'rgba(255,255,255,0.85)' }}
                  >
                    {screen.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
