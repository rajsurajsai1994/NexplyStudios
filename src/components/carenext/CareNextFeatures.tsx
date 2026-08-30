import {
  Users,
  CalendarCheck,
  ReceiptText,
  Stethoscope,
  MessageSquare,
  Building2,
  BarChart3,
  TrendingUp,
} from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
} from '../../lib/carenext';

const GROUPS = [
  {
    label: 'At the front desk',
    items: [
      { icon: <Users size={18} />, title: 'Patient Management', text: 'Unified profiles with demographics, treatment history, payments, and session tracking.' },
      { icon: <CalendarCheck size={18} />, title: 'Appointments & Scheduling', text: 'Day and week views, quick reschedules, and a built-in no-show / cancellation workflow.' },
      { icon: <ReceiptText size={18} />, title: 'Billing & Invoicing', text: 'Auto-generated, branded invoices with clear paid / partial / unpaid status on every one.' },
    ],
  },
  {
    label: 'Clinical & staff',
    items: [
      { icon: <Stethoscope size={18} />, title: 'Doctor & Staff Management', text: 'Per-branch schedules, leave balances, and approvals - no more registers or side chats.' },
      { icon: <MessageSquare size={18} />, title: 'WhatsApp Automation', text: 'Automatic appointment confirmations and reminders using branch-specific templates.' },
    ],
  },
  {
    label: 'For the owner',
    items: [
      { icon: <Building2 size={18} />, title: 'Multi-Branch Operations', text: 'One login across every clinic location, with data filterable by branch at any time.' },
      { icon: <BarChart3 size={18} />, title: 'Reports & Analytics', text: 'Revenue trends, attendance rate, no-shows, and appointment patterns at a glance.' },
      { icon: <TrendingUp size={18} />, title: 'Expense & Profit Tracking', text: 'Branch-wise income vs. expense, with a live profit margin you can actually trust.' },
    ],
  },
];

export default function CareNextFeatures() {
  return (
    <section
      id="carenext-platform"
      className="relative"
      style={{ background: CARENEXT_LIGHT_BG, scrollMarginTop: 90, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}
    >
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 110px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: '#0D9488' }}
          >
            The platform at a glance
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2 }}>
            Everything a clinic runs on, <span style={carenextInkGradientText}>in one system</span>
          </h2>
          <p className="max-w-xl" style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Eight connected modules - not eight separate tools you have to stitch together.
          </p>
        </FadeIn>

        <div className="w-full max-w-[1160px] flex flex-col gap-12">
          {GROUPS.map((group, gi) => (
            <div key={group.label}>
              <FadeIn y={12}>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[12px] font-semibold uppercase tracking-[0.15em]"
                    style={{ color: '#0D9488' }}
                  >
                    {group.label}
                  </span>
                  <span className="flex-1 h-px" style={{ background: CARENEXT_HAIRLINE }} />
                </div>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((f, i) => (
                  <FadeIn key={f.title} delay={i * 0.05 + gi * 0.02} y={18}>
                    <div
                      className="flex gap-4 rounded-2xl p-5 h-full"
                      style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff' }}
                    >
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(13,148,136,0.1)', color: '#0D9488' }}
                      >
                        {f.icon}
                      </span>
                      <div>
                        <h3 className="font-medium text-[15px] mb-1" style={{ color: CARENEXT_INK }}>
                          {f.title}
                        </h3>
                        <p style={{ color: CARENEXT_INK_SOFT, fontSize: 13.5, lineHeight: 1.55 }}>{f.text}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
