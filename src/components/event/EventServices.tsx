import FadeIn from '../jack/FadeIn';
import { DARK_BG_FLAT, glassDifferentiation } from '../../lib/brand';
import { EVENT_SERVICES, eventGradientText } from '../../lib/eventManagement';

export default function EventServices() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(244,63,126,0.05)')} />

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(245,184,65,0.85)' }}>
            The full growth stack
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, maxWidth: 820 }}>
            Every channel that brings <span style={eventGradientText}>event clients</span>
          </h2>
          <p className="max-w-2xl" style={{ color: 'rgb(196, 186, 214)', fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.7 }}>
            Rahul picks the mix; Nexply Studios&apos; design, dev, and marketing team runs it.
            You get one accountable partner, not five vendors.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1200px]">
          {EVENT_SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={(i % 3) * 0.06} y={22}>
              <div
                className="relative rounded-2xl backdrop-blur-md p-6 h-full overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ background: 'linear-gradient(135deg, #F5B841, #F43F7E)' }}
                >
                  {s.icon}
                </div>
                <h3 className="text-white font-medium text-[16px] mb-2 tracking-tight">{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>{s.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
