import { ArrowRight, Stethoscope, Sparkles } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import CareNextSchedulingMock from './CareNextSchedulingMock';
import PulseLine from './PulseLine';
import { DARK_BG_GRADIENT } from '../../lib/brand';
import { CARENEXT_GRADIENT, CARENEXT_PRICE, carenextGradientText, carenextGlow } from '../../lib/carenext';

export default function CareNextHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: DARK_BG_GRADIENT }}>
      <div className="absolute inset-0 pointer-events-none" style={carenextGlow('rgba(45,212,191,0.12)')} />
      {/* faint EKG line running behind the hero */}
      <div className="absolute left-0 right-0 pointer-events-none opacity-[0.15]" style={{ top: '38%' }}>
        <PulseLine color="#2DD4BF" />
      </div>

      <div
        className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] items-center gap-14 lg:gap-16"
        style={{ maxWidth: 1280, padding: 'clamp(140px, 17vw, 210px) clamp(16px, 4vw, 40px) clamp(72px, 9vw, 120px)' }}
      >
        {/* Left - copy */}
        <div className="text-center lg:text-left">
          <FadeIn y={14} duration={0.5}>
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-6 flex-wrap">
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: 'rgba(94,234,212,0.85)' }}
              >
                A Nexply Studios Product
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ border: '1px solid rgba(45,212,191,0.35)', background: 'rgba(45,212,191,0.1)', color: '#5EEAD4' }}
              >
                <Stethoscope size={12} />
                Clinic Management System
              </span>
            </div>
          </FadeIn>

          <FadeIn y={18} delay={0.1}>
            <h1
              className="text-white font-medium"
              style={{ fontSize: 'clamp(32px, 4.6vw, 58px)', lineHeight: 1.12, letterSpacing: '-0.01em' }}
            >
              One platform for every branch,
              <br className="hidden sm:block" /> every doctor,{' '}
              <span style={carenextGradientText}>every patient.</span>
            </h1>
          </FadeIn>

          <FadeIn y={16} delay={0.2}>
            <p
              className="mt-6 mx-auto lg:mx-0"
              style={{ color: 'rgb(178, 196, 205)', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.7, maxWidth: 560 }}
            >
              CareNext is a secure clinic operations platform built for how Indian medical and
              wellness practices actually run - patients, appointments, billing, staff, and
              multi-branch reporting, all connected.
            </p>
          </FadeIn>

          {/* Pricing line */}
          <FadeIn y={14} delay={0.28}>
            <div className="mt-7 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                style={{ background: CARENEXT_GRADIENT, color: '#04121a' }}
              >
                <Sparkles size={11} />
                {CARENEXT_PRICE.note}
              </span>
              <span className="text-[15px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Starts at{' '}
                <span style={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.4)' }}>
                  {CARENEXT_PRICE.was}
                </span>{' '}
                <span className="font-semibold text-white" style={{ fontSize: 18 }}>
                  {CARENEXT_PRICE.now}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>{CARENEXT_PRICE.unit}</span>
              </span>
            </div>
          </FadeIn>

          <FadeIn y={16} delay={0.36}>
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white text-[15px] font-medium transition-transform duration-300 hover:scale-[1.03]"
                style={{ background: CARENEXT_GRADIENT, boxShadow: '0 10px 30px rgba(45,212,191,0.28)' }}
              >
                Book a Demo
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#carenext-platform"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:bg-white/[0.06]"
                style={{ border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)' }}
              >
                See how it works
              </a>
            </div>
          </FadeIn>

          <FadeIn y={14} delay={0.44}>
            <p className="mt-7 text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Already running clinics across Hyderabad - including{' '}
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>PAL Physiotherapy &amp; Sports Rehab</span>.
            </p>
          </FadeIn>
        </div>

        {/* Right - product mock (appointment scheduling) */}
        <FadeIn x={24} y={0} delay={0.25} duration={0.7}>
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[28px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(56,189,248,0.18), transparent 70%)' }}
            />
            <div className="relative">
              <CareNextSchedulingMock />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
