import { Check, Sparkles } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  CARENEXT_GRADIENT,
  CARENEXT_FEATURE_GROUPS,
  CARENEXT_AI_FEATURE,
  carenextInkGradientText,
} from '../../lib/carenext';

const TEAL = '#0D9488';

export default function CareNextFeatures() {
  return (
    <section
      id="carenext-platform"
      className="relative"
      style={{ background: CARENEXT_LIGHT_BG, scrollMarginTop: 90, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}
    >
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 110px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-12" y={16}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: TEAL }}
          >
            The platform at a glance
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2 }}>
            Everything a clinic runs on, <span style={carenextInkGradientText}>in one system</span>
          </h2>
          <p className="max-w-xl" style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Connected modules - not separate tools you have to stitch together.
          </p>
        </FadeIn>

        {/* Standout: specialty-trained AI assistant */}
        <FadeIn y={20}>
          <div
            className="relative w-full max-w-[1160px] rounded-[24px] overflow-hidden mb-12"
            style={{ background: CARENEXT_GRADIENT, boxShadow: '0 26px 64px rgba(13,148,136,0.28)' }}
          >
            <div
              className="pointer-events-none absolute -top-20 -right-10 rounded-full"
              style={{ width: 280, height: 280, background: 'rgba(255,255,255,0.18)', filter: 'blur(70px)' }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 p-8 sm:p-10">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: 'rgba(255,255,255,0.22)', color: '#fff' }}
                >
                  <Sparkles size={11} />
                  {CARENEXT_AI_FEATURE.eyebrow}
                </span>
                <h3 className="text-white font-semibold mt-4" style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', lineHeight: 1.2 }}>
                  {CARENEXT_AI_FEATURE.title}
                </h3>
                <p className="mt-4" style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: 1.7 }}>
                  {CARENEXT_AI_FEATURE.text}
                </p>
              </div>
              <ul className="flex flex-col justify-center gap-3">
                {CARENEXT_AI_FEATURE.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl px-4 py-3"
                    style={{ background: 'rgba(255,255,255,0.14)' }}
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-white" />
                    <span className="text-[13.5px]" style={{ color: '#fff', lineHeight: 1.5 }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <div className="w-full max-w-[1160px] flex flex-col gap-12">
          {CARENEXT_FEATURE_GROUPS.map((group, gi) => (
            <div key={group.label}>
              <FadeIn y={12}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.15em]" style={{ color: TEAL }}>
                    {group.label}
                  </span>
                  <span className="flex-1 h-px" style={{ background: CARENEXT_HAIRLINE }} />
                </div>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((f, i) => (
                  <FadeIn key={f.title} delay={i * 0.05 + gi * 0.02} y={18}>
                    <div
                      className="flex gap-4 rounded-2xl p-5 h-full"
                      style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff' }}
                    >
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(13,148,136,0.1)', color: TEAL }}
                      >
                        {f.icon}
                      </span>
                      <div>
                        <h3 className="font-medium text-[15px] mb-1" style={{ color: CARENEXT_INK }}>
                          {f.title}
                        </h3>
                        <p style={{ color: CARENEXT_INK_SOFT, fontSize: 13.5, lineHeight: 1.55 }}>{f.text}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
