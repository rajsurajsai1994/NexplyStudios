import { ArrowRight, TrendingUp, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../jack/FadeIn';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useInView } from '../../hooks/useInView';
import { DARK_BG_GRADIENT } from '../../lib/brand';
import { EVENT_GRADIENT, eventGradientText, RAHUL } from '../../lib/eventManagement';

const HERO_VIDEO = '/videos/event-wedding-hero.mp4';
const HERO_VIDEO_POSTER = '/videos/event-wedding-hero-poster.jpg';

export default function EventHero() {
  const reduceMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: DARK_BG_GRADIENT }}>
      {/* Background wedding footage - sits behind a dark wash so the headline
          stays fully legible. */}
      <video
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="none"
        poster={HERO_VIDEO_POSTER}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.52 }}
        src={inView && !reduceMotion ? HERO_VIDEO : undefined}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,11,31,0.48) 0%, rgba(13,14,31,0.64) 55%, rgba(13,14,31,0.9) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 62% 58% at 50% 46%, rgba(13,14,31,0.42), transparent 78%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,184,65,0.14), transparent 70%)' }}
      />

      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 900, padding: 'clamp(150px, 18vw, 220px) clamp(16px, 4vw, 40px) clamp(80px, 10vw, 130px)' }}
      >
        <FadeIn y={14} duration={0.5}>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'rgba(245,184,65,0.9)' }}
          >
            Event Industry Growth · {RAHUL.name} · at Nexply Studios
          </span>
        </FadeIn>

        <FadeIn y={18} delay={0.1}>
          <h1
            className="text-white font-medium mt-5"
            style={{ fontSize: 'clamp(34px, 5vw, 62px)', lineHeight: 1.1, letterSpacing: '-0.01em' }}
          >
            From inconsistent enquiries to a{' '}
            <span style={eventGradientText}>predictable flow of high-quality event leads.</span>
          </h1>
        </FadeIn>

        <FadeIn y={16} delay={0.2}>
          <p
            className="mt-6 mx-auto"
            style={{ color: 'rgb(206, 197, 224)', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.7, maxWidth: 620 }}
          >
            A growth partner built only for the event industry - wedding and corporate planners,
            venues, photographers, decorators, caterers and vendors. Led by Rahul Munigala,
            powered by Nexply Studios&apos; full marketing team.
          </p>
        </FadeIn>

        <FadeIn y={16} delay={0.3}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: EVENT_GRADIENT, color: '#1a0b10', boxShadow: '0 10px 30px rgba(244,63,126,0.25)' }}
            >
              Book a Call
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#event-audience"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:bg-white/[0.06]"
              style={{ border: '1px solid rgba(255,255,255,0.24)', color: 'rgba(255,255,255,0.88)' }}
            >
              See who this is for
            </a>
          </div>
        </FadeIn>

        <FadeIn y={14} delay={0.4}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <span className="flex items-center gap-2">
              <TrendingUp size={14} style={{ color: '#F5B841' }} />
              A steady pipeline, season after season
            </span>
            <span className="flex items-center gap-2">
              <CalendarCheck size={14} style={{ color: '#F43F7E' }} />
              Calendar-blocked calls, not just clicks
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
