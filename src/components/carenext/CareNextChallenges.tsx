import { ArrowRight } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import { DARK_BG_FLAT, glassDifferentiation } from '../../lib/brand';
import { CARENEXT_CHALLENGES, CARENEXT_GRADIENT, carenextGradientText } from '../../lib/carenext';

export default function CareNextChallenges() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(45,212,191,0.05)')} />

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'rgba(94,234,212,0.8)' }}
          >
            The reality today
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, maxWidth: 800 }}>
            The everyday challenges <span style={carenextGradientText}>holding clinics back</span>
          </h2>
          <p className="max-w-xl" style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Every growing practice hits the same walls. None of them are about clinical skill -
            they're about operations.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1120px]">
          {CARENEXT_CHALLENGES.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06} y={20}>
              <div
                className="relative rounded-2xl backdrop-blur-md p-6 h-full"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 30%)' }}
                />
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ border: '1px solid rgba(45,212,191,0.3)', background: 'rgba(45,212,191,0.08)', color: '#5EEAD4' }}
                >
                  {c.icon}
                </div>
                <h3 className="relative text-white font-medium text-[17px] mb-2">{c.title}</h3>
                <p className="relative" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>
                  {c.text}
                </p>
              </div>
            </FadeIn>
          ))}

          {/* Closing statement occupies the 6th grid cell */}
          <FadeIn delay={CARENEXT_CHALLENGES.length * 0.06} y={20}>
            <div
              className="relative rounded-2xl p-6 h-full flex flex-col justify-center"
              style={{ background: CARENEXT_GRADIENT }}
            >
              <p className="text-white font-medium" style={{ fontSize: 16, lineHeight: 1.5 }}>
                CareNext brings your patients, staff, and operations into one place.
              </p>
              <a
                href="#carenext-platform"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/95"
              >
                See the platform
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
