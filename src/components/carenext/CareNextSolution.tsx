import { ShieldCheck, Building2, LineChart } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
} from '../../lib/carenext';

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
    <section className="relative" style={{ background: CARENEXT_LIGHT_BG, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}>
      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 1000, padding: 'clamp(64px, 8vw, 104px) clamp(16px, 4vw, 40px) clamp(40px, 5vw, 64px)' }}
      >
        <FadeIn y={16}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: '#0D9488' }}
          >
            The solution
          </span>
          <h2
            className="font-medium mt-4"
            style={{ color: CARENEXT_INK, fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.15 }}
          >
            Introducing <span style={carenextInkGradientText}>CareNext</span>
          </h2>
        </FadeIn>

        <FadeIn y={16} delay={0.1}>
          <p
            className="mt-6"
            style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(15px, 1.2vw, 19px)', lineHeight: 1.75, maxWidth: 760 }}
          >
            A single, secure operations platform built for how Indian clinics actually run:
            patients, appointments, billing, staff, and multi-branch reporting - all connected,
            all in one system your whole team logs into.
          </p>
        </FadeIn>

        <FadeIn y={16} delay={0.2}>
          <p
            className="mt-8 font-medium italic"
            style={{ ...carenextInkGradientText, fontSize: 'clamp(17px, 1.7vw, 24px)' }}
          >
            &ldquo;Built specifically for medical &amp; wellness practices.&rdquo;
          </p>
        </FadeIn>
      </div>

      <div
        className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
        style={{ maxWidth: 1060, padding: '0 clamp(16px, 4vw, 40px) clamp(64px, 8vw, 104px)' }}
      >
        {PILLARS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08} y={20}>
            <div
              className="relative rounded-2xl p-6 h-full"
              style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', boxShadow: '0 12px 34px rgba(13,148,136,0.06)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(13,148,136,0.1)', color: '#0D9488' }}
              >
                {p.icon}
              </div>
              <h3 className="font-medium text-[17px] mb-2" style={{ color: CARENEXT_INK }}>
                {p.title}
              </h3>
              <p style={{ color: CARENEXT_INK_SOFT, fontSize: 14, lineHeight: 1.6 }}>{p.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
