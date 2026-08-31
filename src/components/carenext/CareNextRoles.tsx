import { Check, Sparkles } from 'lucide-react';
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

const TEAL = '#0D9488';

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
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: TEAL }}
          >
            Access &amp; roles
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, maxWidth: 820 }}>
            Built for every role, <span style={carenextInkGradientText}>and every specialty</span>
          </h2>
          <p className="max-w-2xl" style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.7 }}>
            Four dedicated logins - Admin, Doctor, Receptionist, and Accounts / CA. Each one shows
            exactly what that person needs to see and do, and nothing more.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1160px]">
          {CARENEXT_ROLES.map((role, i) => {
            const featured = role.featured;
            return (
              <FadeIn key={role.name} delay={i * 0.07} y={22}>
                <div
                  className="relative rounded-2xl p-6 h-full overflow-hidden"
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
                          : { background: 'rgba(13,148,136,0.1)', color: TEAL }
                      }
                    >
                      {role.icon}
                    </span>
                    <h3 className="font-medium text-[17px]" style={{ color: featured ? '#fff' : CARENEXT_INK }}>
                      {role.name}
                    </h3>
                  </div>
                  <p
                    className="text-[12.5px] mb-5"
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
                          style={{ color: featured ? '#fff' : TEAL }}
                        />
                        <span
                          className="text-[13px] leading-snug"
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

        {/* Prominent custom-roles callout */}
        <FadeIn delay={0.25} y={18}>
          <div
            className="mt-10 w-full max-w-[860px] rounded-[22px] p-[1.5px]"
            style={{ background: CARENEXT_GRADIENT, boxShadow: '0 18px 46px rgba(13,148,136,0.18)' }}
          >
            <div
              className="rounded-[21px] px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
              style={{ background: '#fff' }}
            >
              <span
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: CARENEXT_GRADIENT, color: '#fff' }}
              >
                <Sparkles size={22} />
              </span>
              <div>
                <p className="font-semibold text-[17px]" style={{ color: CARENEXT_INK }}>
                  Your clinic, your rules
                </p>
                <p className="mt-1 text-[14px]" style={{ color: CARENEXT_INK_SOFT, lineHeight: 1.6 }}>
                  <span className="font-medium" style={{ color: CARENEXT_INK }}>
                    Custom roles can be added to match any hospital or clinic&apos;s structure
                  </span>{' '}
                  - a branch manager, a head of department, a billing-only desk, whatever your
                  team looks like.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
