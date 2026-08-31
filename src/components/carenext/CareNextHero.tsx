import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import CareNextDashboardMock from './CareNextDashboardMock';
import {
  CARENEXT_GRADIENT,
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
  carenextGlow,
} from '../../lib/carenext';

export default function CareNextHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: CARENEXT_LIGHT_BG }}>
      <div className="absolute inset-0 pointer-events-none" style={carenextGlow('rgba(13,148,136,0.10)')} />

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
                style={{ color: '#0D9488' }}
              >
                A Nexply Studios Product
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: '#0D9488' }}
              >
                <Stethoscope size={12} />
                Clinic Management System
              </span>
            </div>
          </FadeIn>

          <FadeIn y={18} delay={0.1}>
            <h1
              className="font-medium"
              style={{ color: CARENEXT_INK, fontSize: 'clamp(32px, 4.6vw, 58px)', lineHeight: 1.12, letterSpacing: '-0.01em' }}
            >
              One platform for every branch,
              <br className="hidden sm:block" /> every doctor,{' '}
              <span style={carenextInkGradientText}>every patient.</span>
            </h1>
          </FadeIn>

          <FadeIn y={16} delay={0.2}>
            <p
              className="mt-6 mx-auto lg:mx-0"
              style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.7, maxWidth: 560 }}
            >
              CareNext is a secure clinic operations platform built for how Indian medical and
              wellness practices actually run - patients, appointments, billing, staff, and
              multi-branch reporting, all connected.
            </p>
          </FadeIn>

          <FadeIn y={16} delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white text-[15px] font-medium transition-transform duration-300 hover:scale-[1.03]"
                style={{ background: CARENEXT_GRADIENT, boxShadow: '0 12px 30px rgba(13,148,136,0.28)' }}
              >
                Book a Demo
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#carenext-platform"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:bg-white"
                style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, color: CARENEXT_INK }}
              >
                See how it works
              </a>
            </div>
          </FadeIn>

          <FadeIn y={14} delay={0.4}>
            <p className="mt-7 text-[13px]" style={{ color: CARENEXT_INK_SOFT }}>
              Already running clinics across Hyderabad - including{' '}
              <span style={{ color: CARENEXT_INK, fontWeight: 500 }}>PAL Physiotherapy &amp; Sports Rehab</span>.
            </p>
          </FadeIn>
        </div>

        {/* Right - product mock (admin dashboard) */}
        <FadeIn x={24} y={0} delay={0.25} duration={0.7}>
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[28px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(45,212,191,0.22), transparent 70%)' }}
            />
            <div className="relative">
              <CareNextDashboardMock />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
