import { Check, Plus } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import { DARK_BG_GRADIENT } from '../../lib/brand';
import { CARENEXT_ROLES, CARENEXT_GRADIENT, carenextGradientText } from '../../lib/carenext';

export default function CareNextRoles() {
  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'rgba(94,234,212,0.8)' }}
          >
            Access &amp; roles
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, maxWidth: 820 }}>
            Built for every role, <span style={carenextGradientText}>and every specialty</span>
          </h2>
          <p className="max-w-2xl" style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.7 }}>
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
                      ? { background: CARENEXT_GRADIENT, boxShadow: '0 20px 50px rgba(45,212,191,0.22)' }
                      : { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }
                  }
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={
                        featured
                          ? { background: 'rgba(255,255,255,0.18)', color: '#fff' }
                          : { border: '1px solid rgba(45,212,191,0.3)', background: 'rgba(45,212,191,0.08)', color: '#5EEAD4' }
                      }
                    >
                      {role.icon}
                    </span>
                    <h3 className="text-white font-medium text-lg">{role.name}</h3>
                  </div>
                  <p
                    className="text-[13px] mb-5"
                    style={{ color: featured ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)' }}
                  >
                    {role.summary}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {role.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0"
                          style={{ color: featured ? '#fff' : '#5EEAD4' }}
                        />
                        <span
                          className="text-[13.5px] leading-snug"
                          style={{ color: featured ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.72)' }}
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
            style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.03)' }}
          >
            <Plus size={14} style={{ color: '#5EEAD4' }} />
            <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Custom roles can be added to match any hospital or clinic&apos;s structure.
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
