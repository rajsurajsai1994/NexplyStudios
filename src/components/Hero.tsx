import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useInView } from '../hooks/useInView';
import { gradientTextStyle, gradientA } from '../lib/brand';
import { ArrowRight } from 'lucide-react';
import OrbitVisualization from './OrbitVisualization';

const HEADLINE = "What's next for your brand? Growth that actually shows up.";
const HIGHLIGHT_PHRASE = 'Growth that actually shows up.';
const SPLIT_AT = HEADLINE.length - HIGHLIGHT_PHRASE.length;

export default function Hero() {
  const { output, done } = useTypewriter(HEADLINE, 35, 400);
  const reduceMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();
  const whitePart = output.slice(0, Math.min(output.length, SPLIT_AT));
  const gradientPart = output.slice(SPLIT_AT);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col px-4 md:px-16 overflow-hidden"
      style={{ paddingTop: 'clamp(120px, 20vh, 240px)', paddingBottom: 'clamp(48px, 6vh, 96px)' }}
    >
      <video
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="none"
        poster="/videos/hero-home-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: 'translateY(56px) scale(1.05)' }}
        src={inView && !reduceMotion ? '/videos/hero-home.mp4' : undefined}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000201)' }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 my-auto">
        {/* Left content */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1
            className="text-white font-medium leading-tight"
            style={{ fontSize: 'clamp(30px, 4vw, 54px)', minHeight: '3.6em' }}
          >
            {whitePart}
            <span style={gradientTextStyle}>{gradientPart}</span>
            {!done && <span className="hero-caret" />}
          </h1>

          <p
            className="mt-5"
            style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(15px, 1.2vw, 19px)' }}
          >
            Design, development, marketing, product strategy, competitor analysis - whatever
            your brand needs next, we've already got it covered.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <div className="hero-cta-border-wrap">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 overflow-hidden"
                style={{ background: '#0b0a1f' }}
              >
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                  style={{ background: gradientA }}
                />
                <span className="relative z-10 text-white text-[15px] font-medium">
                  Start Your Project
                </span>
                <ArrowRight
                  size={18}
                  className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right - orbit visualization */}
        <OrbitVisualization />
      </div>
    </section>
  );
}
