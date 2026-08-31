import FadeIn from '../jack/FadeIn';
import { DARK_BG_FLAT, glassDifferentiation } from '../../lib/brand';
import { EVENT_CHALLENGES, EVENT_GRADIENT, eventGradientText } from '../../lib/eventManagement';

export default function EventChallenges() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(245,184,65,0.05)')} />

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(245,184,65,0.85)' }}>
            The reality for most event businesses
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, maxWidth: 820 }}>
            Great work, <span style={eventGradientText}>unpredictable pipeline</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1120px]">
          {EVENT_CHALLENGES.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06} y={20}>
              <div
                className="relative rounded-2xl backdrop-blur-md p-6 h-full"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ border: '1px solid rgba(245,184,65,0.3)', background: 'rgba(245,184,65,0.08)', color: '#F5B841' }}
                >
                  {c.icon}
                </div>
                <h3 className="text-white font-medium text-[17px] mb-2">{c.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{c.text}</p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={EVENT_CHALLENGES.length * 0.06} y={20}>
            <div
              className="relative rounded-2xl p-6 h-full flex flex-col justify-center backdrop-blur-md"
              style={{
                border: '1px solid transparent',
                background:
                  'linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.03)) padding-box, ' +
                  `${EVENT_GRADIENT} border-box`,
              }}
            >
              <p className="font-medium" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 1.55 }}>
                The fix isn&apos;t more hustle. It&apos;s a system that brings the right clients to
                you - <span style={eventGradientText}>on repeat.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
