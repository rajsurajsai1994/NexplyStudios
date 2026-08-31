import { ArrowRight } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_CHALLENGES,
  CARENEXT_GRADIENT,
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
} from '../../lib/carenext';

export default function CareNextChallenges() {
  return (
    <section className="relative" style={{ background: CARENEXT_LIGHT_BG, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}>
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 110px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: '#0D9488' }}
          >
            The reality today
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, maxWidth: 800 }}>
            The everyday challenges <span style={carenextInkGradientText}>holding clinics back</span>
          </h2>
          <p className="max-w-xl" style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Every growing practice hits the same walls. None of them are about clinical skill -
            they&apos;re about operations.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1120px]">
          {CARENEXT_CHALLENGES.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06} y={20}>
              <div
                className="relative rounded-2xl p-6 h-full"
                style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', boxShadow: '0 10px 30px rgba(13,148,136,0.05)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(13,148,136,0.1)', color: '#0D9488' }}
                >
                  {c.icon}
                </div>
                <h3 className="font-medium text-[17px] mb-2" style={{ color: CARENEXT_INK }}>
                  {c.title}
                </h3>
                <p style={{ color: CARENEXT_INK_SOFT, fontSize: 14, lineHeight: 1.6 }}>{c.text}</p>
              </div>
            </FadeIn>
          ))}

          {/* Closing statement occupies the 6th grid cell */}
          <FadeIn delay={CARENEXT_CHALLENGES.length * 0.06} y={20}>
            <div
              className="relative rounded-2xl p-6 h-full flex flex-col justify-center"
              style={{ background: CARENEXT_GRADIENT, boxShadow: '0 18px 44px rgba(13,148,136,0.22)' }}
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
