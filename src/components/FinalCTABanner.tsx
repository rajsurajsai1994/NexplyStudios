import { ArrowRight } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useInView } from '../hooks/useInView';
import { gradientA, gradientTextStyle, DARK_BG_FLAT } from '../lib/brand';

const CTA_VIDEO = '/videos/cta-final.mp4';
const CTA_VIDEO_POSTER = '/videos/cta-final-poster.jpg';

export default function FinalCTABanner() {
  const reduceMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: DARK_BG_FLAT }}>
      <video
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="none"
        poster={CTA_VIDEO_POSTER}
        className="absolute inset-0 w-full h-full object-cover"
        src={inView && !reduceMotion ? CTA_VIDEO : undefined}
      />
      {/* Dark wash so text stays legible over the video */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(5,6,15,0.78) 0%, rgba(13,14,31,0.85) 100%)' }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center mx-auto"
        style={{
          maxWidth: 980,
          padding: 'clamp(72px, 10vw, 140px) clamp(16px, 4vw, 40px)',
        }}
      >
        <h2
          className="text-white font-medium"
          style={{ fontSize: 'clamp(30px, 4.4vw, 56px)', lineHeight: 1.15 }}
        >
          Ready to build the brand
          <br />
          <span style={gradientTextStyle}>people can't look away from?</span>
        </h2>

        <p
          className="mt-5 max-w-2xl"
          style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(15px, 1.2vw, 19px)' }}
        >
          Meet your brand's own personal Avengers. Our team's already suited up. A squad of
          designers, strategists, and builders who show up ready to fight for your next big
          idea.
        </p>

        <div className="mt-9">
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 overflow-hidden"
            style={{ background: 'rgb(28,78,255)' }}
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
              style={{ background: gradientA }}
            />
            <span className="relative z-10 text-white text-base font-medium">
              Assemble Your Team
            </span>
            <ArrowRight
              size={18}
              className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
