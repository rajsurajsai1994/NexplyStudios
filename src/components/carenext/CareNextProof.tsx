import { Quote } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import { DARK_BG_GRADIENT } from '../../lib/brand';
import { CARENEXT_PROOF_STATS, carenextGradientText, carenextGlow } from '../../lib/carenext';

export default function CareNextProof() {
  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div className="absolute inset-0 pointer-events-none" style={carenextGlow('rgba(56,189,248,0.08)')} />

      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{ maxWidth: 1080, padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-12" y={16}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'rgba(94,234,212,0.8)' }}
          >
            Proven in practice
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.2, maxWidth: 780 }}>
            Already running <span style={carenextGradientText}>real clinics</span>
          </h2>
        </FadeIn>

        <FadeIn y={20} delay={0.1}>
          <div
            className="relative rounded-[24px] overflow-hidden backdrop-blur-md w-full"
            style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.04)', boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}
          >
            <div
              className="pointer-events-none absolute -top-24 -left-16 rounded-full"
              style={{ width: 320, height: 320, background: 'rgba(45,212,191,0.16)', filter: 'blur(90px)' }}
            />
            <div className="relative p-7 sm:p-10">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden"
                  style={{ background: '#ffffff', border: '1px solid rgba(255,255,255,0.25)', padding: 8 }}
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
                  <p className="text-white font-medium">PAL Physiotherapy &amp; Sports Rehab</p>
                  <p className="text-sm" style={{ color: 'rgb(169, 151, 206)' }}>
                    Healthcare · Madhapur &amp; Kondapur, Hyderabad
                  </p>
                </div>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.75 }}>
                CareNext grew out of the clinic system Nexply Studios built for PAL - now running
                live across both branches, handling patients, scheduling, billing, expense
                tracking, and WhatsApp reminders every single day.
              </p>

              <div
                className="mt-7 rounded-2xl p-5 flex gap-4"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
              >
                <Quote size={22} className="shrink-0" style={{ color: '#5EEAD4' }} />
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.65 }}>
                    &ldquo;They built us a full CRM - patient engagement, scheduling, expense
                    tracking, reminders - it simplified everything.&rdquo;
                  </p>
                  <p className="mt-3 text-sm text-white font-medium">Dr. Bhuvana</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Founder, PAL Physiotherapy &amp; Sports Rehab
                  </p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CARENEXT_PROOF_STATS.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl p-4"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
                  >
                    <span style={{ color: '#5EEAD4' }}>{stat.icon}</span>
                    <p className="text-white font-medium mt-2" style={{ fontSize: 15 }}>
                      {stat.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
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
