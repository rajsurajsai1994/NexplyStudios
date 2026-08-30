import FadeIn from '../jack/FadeIn';
import { DARK_BG_FLAT, glassDifferentiation } from '../../lib/brand';
import { EVENT_STEPS, eventGradientText } from '../../lib/eventManagement';

export default function EventProcess() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(168,85,247,0.05)')} />

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(245,184,65,0.85)' }}>
            How it works
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2 }}>
            From audit to a <span style={eventGradientText}>predictable pipeline</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[1000px]">
          {EVENT_STEPS.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.07} y={20}>
              <div
                className="relative rounded-2xl backdrop-blur-md p-7 h-full"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                <span
                  className="font-black block mb-3"
                  style={{ ...eventGradientText, fontSize: 34, lineHeight: 1 }}
                >
                  {step.num}
                </span>
                <h3 className="text-white font-medium text-[17px] mb-2">{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 14, lineHeight: 1.6 }}>{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
