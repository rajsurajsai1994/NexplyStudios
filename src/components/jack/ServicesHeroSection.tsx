import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useInView } from '../../hooks/useInView';
import { gradientA } from '../../lib/brand';

const HERO_VIDEO = '/videos/hero-services.mp4';
const HERO_VIDEO_POSTER = '/videos/hero-services-poster.jpg';

interface ServicesHeroSectionProps {
  pageLabel?: string;
  line1?: string;
  line2?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryScrollTarget?: string;
  secondaryHref?: string;
}

export default function ServicesHeroSection({
  pageLabel,
  line1 = 'Creative Work',
  line2 = 'That Performs',
  subtext = 'End-to-end design, development, and marketing for brands that want to actually stand out.',
  ctaLabel = 'Get a Quote',
  ctaHref = '/contact',
  secondaryLabel = 'Learn More',
  secondaryScrollTarget = 'client-works',
  secondaryHref,
}: ServicesHeroSectionProps) {
  const reduceMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ height: '85vh', background: '#141414', fontFamily: "'Sora', sans-serif" }}
    >
      <video
        autoPlay={!reduceMotion}
        loop
        muted
        playsInline
        preload="none"
        poster={HERO_VIDEO_POSTER}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'hue-rotate(155deg) saturate(1.1)' }}
        src={inView && !reduceMotion ? HERO_VIDEO : undefined}
      />
      {/* Blue color wash - reinforces the hue shift so it reads as an
          intentional blue-lit scene rather than a filtered green one. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(30,70,255,0.28)', mixBlendMode: 'color' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(10,11,20,0.25) 0%, rgba(10,11,20,0.75) 100%)' }}
      />

      <div className="relative z-10 px-6 lg:px-16 pb-16 lg:pb-20 pt-24">
        {pageLabel && (
          <FadeIn delay={0.05} y={12} duration={0.5}>
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur-md mb-6"
              style={{
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {pageLabel}
            </span>
          </FadeIn>
        )}

        <FadeIn delay={0.2} y={16} duration={0.6}>
          <h1
            className="font-light leading-[0.95] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
          >
            {line1}
            <br />
            {line2}
          </h1>
        </FadeIn>

        <FadeIn delay={0.45} y={16} duration={0.6}>
          <p className="mt-6 max-w-xl" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(15px, 1.2vw, 18px)' }}>
            {subtext}
          </p>
        </FadeIn>

        <FadeIn delay={0.65} y={16} duration={0.6}>
          <div className="flex flex-wrap items-center gap-8 mt-10">
            {/* Same CTA construction as the homepage hero, for consistency site-wide */}
            <div className="hero-cta-border-wrap">
              <a
                href={ctaHref}
                className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 overflow-hidden"
                style={{ background: '#0b0a1f' }}
              >
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                  style={{ background: gradientA }}
                />
                <span className="relative z-10 text-white text-[15px] font-medium">{ctaLabel}</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {secondaryHref ? (
              <a
                href={secondaryHref}
                className="uppercase text-xs tracking-widest text-white pb-1 transition-colors duration-200 active:scale-[0.97] cursor-pointer"
                style={{ borderBottom: '1px solid #7C6CFF' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                {secondaryLabel}
              </a>
            ) : (
              <a
                href={`#${secondaryScrollTarget}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(secondaryScrollTarget)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="uppercase text-xs tracking-widest text-white pb-1 transition-colors duration-200 active:scale-[0.97] cursor-pointer"
                style={{ borderBottom: '1px solid #7C6CFF' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                {secondaryLabel}
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
