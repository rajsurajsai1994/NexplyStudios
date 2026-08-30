import { ShieldCheck, Lock, ServerCog, FileClock } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import PulseLine from './PulseLine';
import {
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
} from '../../lib/carenext';

const ITEMS = [
  { icon: <ShieldCheck size={18} />, title: 'Role-based access', text: 'Doctors see their patients, receptionists never see financials.' },
  { icon: <Lock size={18} />, title: 'Your data stays yours', text: 'Full export any time. You own every record in the system.' },
  { icon: <ServerCog size={18} />, title: 'Hosted in India', text: 'Patient data stored on Indian infrastructure with encrypted backups.' },
  { icon: <FileClock size={18} />, title: 'Audit-ready notes', text: 'Every clinical note is timestamped and attributed to its doctor.' },
];

export default function CareNextSecurity() {
  return (
    <section className="relative" style={{ background: CARENEXT_LIGHT_BG, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}>
      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: 1160, padding: 'clamp(56px, 7vw, 90px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn y={14}>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em]" style={{ color: '#0D9488' }}>
              Built to be trusted with patient data
            </span>
            <span className="flex-1"><PulseLine color="#B7D9DB" height={20} strokeWidth={1.5} /></span>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.06} y={16}>
              <div className="rounded-2xl p-5 h-full" style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff' }}>
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'rgba(13,148,136,0.1)', color: '#0D9488' }}
                >
                  {it.icon}
                </span>
                <h3 className="font-medium text-[14px] mb-1" style={{ color: CARENEXT_INK }}>
                  {it.title}
                </h3>
                <p style={{ color: CARENEXT_INK_SOFT, fontSize: 12.5, lineHeight: 1.55 }}>{it.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
