import { Check, Plus } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_ROLES,
  CARENEXT_GRADIENT,
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
} from '../../lib/carenext';

export default function CareNextRoles() {
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
            Access &amp; roles
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, maxWidth: 820 }}>
            Built for every role, <span style={carenextInkGradientText}>and every specialty</span>
          </h2>
          <p className="max-w-2xl" style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.7 }}>
            Three dedicated logins - Admin, Doctor, and Receptionist. Each one shows exactly what
            that person needs to see and do, and nothing more.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1120px]">
          {CARENEXT_ROLES.map((role, i) => {
            const featured = role.featured;
            return (
              <FadeIn key={role.name} delay={i * 0.08} y={22}>
                <div
                  className="relative rounded-2xl p-7 h-full overflow-hidden"
                  style={
                    featured
                      ? { background: CARENEXT_GRADIENT, boxShadow: '0 20px 50px rgba(13,148,136,0.28)' }
                      : { border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', boxShadow: '0 12px 34px rgba(13,148,136,0.06)' }
                  }
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={
                        featured
                          ? { background: 'rgba(255,255,255,0.22)', color: '#fff' }
                          : { background: 'rgba(13,148,136,0.1)', color: '#0D9488' }
                      }
                    >
                      {role.icon}
                    </span>
                    <h3 className="font-medium text-lg" style={{ color: featured ? '#fff' : CARENEXT_INK }}>
                      {role.name}
                    </h3>
                  </div>
                  <p
                    className="text-[13px] mb-5"
                    style={{ color: featured ? 'rgba(255,255,255,0.9)' : CARENEXT_INK_SOFT }}
                  >
                    {role.summary}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {role.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0"
                          style={{ color: featured ? '#fff' : '#0D9488' }}
                        />
                        <span
                          className="text-[13.5px] leading-snug"
                          style={{ color: featured ? 'rgba(255,255,255,0.97)' : CARENEXT_INK }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3} y={16}>
          <div
            className="mt-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff' }}
          >
            <Plus size={14} style={{ color: '#0D9488' }} />
            <span className="text-[13px]" style={{ color: CARENEXT_INK_SOFT }}>
              Custom roles can be added to match any hospital or clinic&apos;s structure.
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
