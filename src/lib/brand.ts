import type { CSSProperties } from 'react';

// Shared brand tokens for NexaCore

export const colors = {
  navy: 'rgb(26, 11, 84)',
  lavender1: 'rgb(169, 151, 206)',
  lavender2: 'rgb(189, 174, 231)',
  lavender3: 'rgb(131, 121, 158)',
  accentPurple: 'rgb(200, 111, 255)',
  primaryBlue: 'rgb(28, 78, 255)',
  chipBg: 'rgb(249, 249, 249)',
  cardBg: 'rgba(10, 5, 20, 0.88)',
};

// Gradient A - logos / buttons
export const gradientA = 'linear-gradient(90deg, rgb(28,78,255), rgb(172,36,255) 50%, rgb(254,136,27))';

// Gradient B - headline highlights
export const gradientB = 'linear-gradient(90deg, rgb(43,167,255), rgb(202,69,255) 50%, rgb(254,136,27))';

export const gradientTextStyle: CSSProperties = {
  backgroundImage: gradientB,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
};

// Unified dark-blue palette shared by every dark section (Logos, Showreel,
// Trusted/Services, Portfolio, Movement Banner, Testimonials) so the whole
// dark stretch of the page reads as one continuous journey instead of
// jumping between pure black and warm brown-black.
export const DARK_BG_FLAT = '#0d0e1f';
export const DARK_BG_GRADIENT =
  'linear-gradient(180deg, #05060f 0%, #0a0b1f 30%, #14122e 55%, #1a1638 75%, #0d0e1f 100%)';

// Solid version of the site's violet accent, for spots that need a flat
// color rather than a gradient string (icon fills, borders, box-shadows).
export const SERVICE_ACCENT_FALLBACK = '#7C6CFF';

// A very soft, minimal "glass" glow used to differentiate one dark section
// from its neighbors without a hard border - a faint radial wash rather
// than a visible panel edge.
export function glassDifferentiation(tint = 'rgba(124,108,255,0.06)'): CSSProperties {
  return {
    background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${tint}, transparent 70%)`,
  };
}
