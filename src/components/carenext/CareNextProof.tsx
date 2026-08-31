import { Quote } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_PROOF_STATS,
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
} from '../../lib/carenext';

const TEAL = '#0D9488';

export default function CareNextProof() {
  return (
    <section className="relative" style={{ background: CARENEXT_LIGHT_BG, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}>
      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{ maxWidth: 1080, padding: 'clamp(64px, 8vw, 110px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-12" y={16}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: TEAL }}
          >
            Proven in practice
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.2, maxWidth: 780 }}>
            Already running <span style={carenextInkGradientText}>real clinics</span>
          </h2>
        </FadeIn>

        <FadeIn y={20} delay={0.1}>
          <div
            className="relative rounded-[24px] overflow-hidden w-full"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', boxShadow: '0 24px 64px rgba(13,148,136,0.12)' }}
          >
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #0EA5E9, #2DD4BF)' }} />
            <div className="relative p-7 sm:p-10">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden"
                  style={{ background: '#fff', border: `1px solid ${CARENEXT_HAIRLINE}`, padding: 8 }}
                >
                  <img
                    src="/logo-pal.png"
                    alt="PAL Physiotherapy & Sports Rehab"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </span>
                <div>
                  <p className="font-medium" style={{ color: CARENEXT_INK }}>
                    PAL Physiotherapy &amp; Sports Rehab
                  </p>
                  <p className="text-sm" style={{ color: CARENEXT_INK_SOFT }}>
                    Healthcare · Madhapur &amp; Kondapur, Hyderabad
                  </p>
                </div>
              </div>

              <p style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.75 }}>
                CareNext grew out of the clinic system Nexply Studios built for PAL - now running
                live across both branches, handling patients, scheduling, billing, expense
                tracking, and WhatsApp reminders every single day.
              </p>

              <div
                className="mt-7 rounded-2xl p-5 sm:p-6 flex gap-4"
                style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#F8FBFC' }}
              >
                <Quote size={22} className="shrink-0" style={{ color: TEAL }} />
                <div>
                  <p style={{ color: CARENEXT_INK, fontSize: 15, lineHeight: 1.7 }}>
                    &ldquo;Honestly, whatever I ask them, Nexply builds it and shows it to me in a
                    day or two. If I say I need expense tracking, or a different kind of reminder,
                    or a change in how the invoice looks - it&apos;s just done, and done properly.
                    It&apos;s very comfortable working with them. CareNext today is basically our
                    whole clinic in one place - patient engagement, scheduling, expenses,
                    reminders - and it keeps getting better because they actually listen.&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-medium" style={{ color: CARENEXT_INK }}>
                    Dr. Bhuvana
                  </p>
                  <p className="text-xs" style={{ color: CARENEXT_INK_SOFT }}>
                    Founder, PAL Physiotherapy &amp; Sports Rehab
                  </p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CARENEXT_PROOF_STATS.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl p-4"
                    style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#F8FBFC' }}
                  >
                    <span style={{ color: TEAL }}>{stat.icon}</span>
                    <p className="font-medium mt-2" style={{ color: CARENEXT_INK, fontSize: 15 }}>
                      {stat.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: CARENEXT_INK_SOFT }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
