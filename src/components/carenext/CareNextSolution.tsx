import { ShieldCheck, Building2, LineChart } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import { DARK_BG_GRADIENT } from '../../lib/brand';
import { carenextGradientText, carenextGlow } from '../../lib/carenext';

const PILLARS = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Secure and role-based',
    text: 'Every person sees only what their job needs - patients, finances, and settings are all scoped by role.',
  },
  {
    icon: <Building2 size={20} />,
    title: 'Multi-branch from day one',
    text: 'Run two clinics or ten from a single login, with a consolidated view and per-branch drill-down.',
  },
  {
    icon: <LineChart size={20} />,
    title: 'A live financial picture',
    text: 'Revenue, expenses, and profit margin update as work happens - not at the end of the month.',
  },
];

export default function CareNextSolution() {
  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div className="absolute inset-0 pointer-events-none" style={carenextGlow()} />

      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 1000, padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 72px)' }}
      >
        <FadeIn y={16}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'rgba(94,234,212,0.8)' }}
          >
            The solution
          </span>
          <h2
            className="text-white font-medium mt-3"
            style={{ fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.15 }}
          >
            Introducing <span style={carenextGradientText}>CareNext</span>
          </h2>
        </FadeIn>

        <FadeIn y={16} delay={0.1}>
          <p
            className="mt-6"
            style={{ color: 'rgb(178, 196, 205)', fontSize: 'clamp(15px, 1.2vw, 19px)', lineHeight: 1.75, maxWidth: 760 }}
          >
            A single, secure operations platform built for how Indian clinics actually run:
            patients, appointments, billing, staff, and multi-branch reporting - all connected,
            all in one system your whole team logs into.
          </p>
        </FadeIn>

        <FadeIn y={16} delay={0.2}>
          <p
            className="mt-8 font-medium"
            style={{ ...carenextGradientText, fontSize: 'clamp(17px, 1.7vw, 24px)' }}
          >
            &ldquo;Built specifically for medical &amp; wellness practices.&rdquo;
          </p>
        </FadeIn>
      </div>

      <div
        className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
        style={{ maxWidth: 1060, padding: '0 clamp(16px, 4vw, 40px) clamp(72px, 9vw, 120px)' }}
      >
        {PILLARS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08} y={20}>
            <div
              className="relative rounded-2xl backdrop-blur-md p-6 h-full"
              style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ border: '1px solid rgba(45,212,191,0.3)', background: 'rgba(45,212,191,0.08)', color: '#5EEAD4' }}
              >
                {p.icon}
              </div>
              <h3 className="text-white font-medium text-[17px] mb-2">{p.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 14, lineHeight: 1.6 }}>{p.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
