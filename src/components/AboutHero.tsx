import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useInView } from '../hooks/useInView';
import { gradientA, DARK_BG_GRADIENT } from '../lib/brand';

const HERO_VIDEO = '/videos/hero-about.mp4';
const HERO_VIDEO_POSTER = '/videos/hero-about-poster.jpg';

export default function AboutHero() {
  const reduceMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{ background: DARK_BG_GRADIENT }}
    >
      <video
        autoPlay={!reduceMotion}
        loop
        muted
        playsInline
        preload="none"
        poster={HERO_VIDEO_POSTER}
        className="absolute inset-0 w-full h-full object-cover"
        src={inView && !reduceMotion ? HERO_VIDEO : undefined}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(10,11,31,0.45) 0%, rgba(13,14,31,0.7) 100%)' }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 md:pt-48">
        <h1
          className="text-white uppercase font-bold"
          style={{
            fontFamily: "'Rubik', sans-serif",
            lineHeight: 0.98,
            letterSpacing: '-2px',
          }}
        >
          <span
            className="block"
            style={{ fontSize: 'clamp(3.75rem, 9vw, 6.25rem)', letterSpacing: '-3px' }}
          >
            NEW ERA
          </span>
          <span
            className="block"
            style={{ fontSize: 'clamp(3.75rem, 9vw, 6.25rem)', letterSpacing: '-3px' }}
          >
            OF DESIGN
          </span>
          <span
            className="block"
            style={{ fontSize: 'clamp(3.75rem, 9vw, 6.25rem)', letterSpacing: '-4px' }}
          >
            STARTS NOW
          </span>
        </h1>

        <div className="hero-cta-border-wrap mt-10 inline-block">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 overflow-hidden"
            style={{ background: '#0b0a1f' }}
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
              style={{ background: gradientA }}
            />
            <span className="relative z-10 text-white text-[15px] font-medium">Get Started</span>
            <ArrowRight
              size={18}
              className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
