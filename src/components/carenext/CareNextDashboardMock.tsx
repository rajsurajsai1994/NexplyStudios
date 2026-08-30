import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Stethoscope,
  ReceiptText,
  BarChart3,
  Bell,
} from 'lucide-react';
import { CARENEXT_TEAL, CARENEXT_GRADIENT } from '../../lib/carenext';

// A stylised CareNext admin dashboard, built entirely in markup - no
// screenshot. Mirrors the real product's layout (branch selector, the
// three range cards, a revenue trend, an appointments table) so the hero
// shows what CareNext actually looks like without shipping a heavy image.
const NAV = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Patients', icon: Users },
  { label: 'Appointments', icon: CalendarDays },
  { label: 'Doctors', icon: Stethoscope },
  { label: 'Billing', icon: ReceiptText },
  { label: 'Reports', icon: BarChart3 },
];

const STATS = [
  { label: 'Appointments', value: '128', sub: 'this month', tone: 'sky' },
  { label: 'Revenue', value: '₹38,700', sub: '+17% vs last', tone: 'teal' },
  { label: 'No-shows', value: '4', sub: '3.1% rate', tone: 'amber' },
];

const ROWS = [
  { time: '09:30', patient: 'Swathi M.', doctor: 'Dr. Bhuvana', status: 'Confirmed', ok: true },
  { time: '10:15', patient: 'Ravi Teja', doctor: 'Dr. Yagnesh', status: 'In session', ok: true },
  { time: '11:00', patient: 'Arti Joshi', doctor: 'Dr. Akshaya', status: 'Pending', ok: false },
];

const toneColor: Record<string, string> = {
  sky: '#38BDF8',
  teal: CARENEXT_TEAL,
  amber: '#FBBF24',
};

export default function CareNextDashboardMock() {
  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{
        borderRadius: 18,
        border: '1px solid rgba(255,255,255,0.14)',
        background: '#0b1220',
        boxShadow: '0 40px 90px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.08)',
      }}
      aria-hidden="true"
    >
      {/* window chrome */}
      <div
        className="flex items-center gap-2 px-4"
        style={{ height: 34, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
      >
        <span className="rounded-full" style={{ width: 9, height: 9, background: '#FF5F57' }} />
        <span className="rounded-full" style={{ width: 9, height: 9, background: '#FEBC2E' }} />
        <span className="rounded-full" style={{ width: 9, height: 9, background: '#28C840' }} />
        <span
          className="ml-3 text-[10px] rounded-md px-2 py-0.5 truncate"
          style={{ color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.05)' }}
        >
          app.carenext.clinic / admin
        </span>
      </div>

      <div className="flex" style={{ minHeight: 300 }}>
        {/* sidebar */}
        <div
          className="hidden sm:flex flex-col gap-1 py-4 px-3 shrink-0"
          style={{ width: 148, borderRight: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="flex items-center gap-2 px-2 pb-3">
            <span
              className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: CARENEXT_GRADIENT }}
            >
              <span style={{ color: '#04121a', fontWeight: 800, fontSize: 13 }}>C</span>
            </span>
            <span className="text-white font-semibold text-[13px]">CareNext</span>
          </div>
          {NAV.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11.5px]"
              style={
                active
                  ? { background: 'rgba(45,212,191,0.14)', color: '#5EEAD4' }
                  : { color: 'rgba(255,255,255,0.55)' }
              }
            >
              <Icon size={13} />
              {label}
            </div>
          ))}
        </div>

        {/* main */}
        <div className="flex-1 p-4 sm:p-5">
          {/* header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white font-semibold text-[13px]">Admin Dashboard</p>
              <p className="text-[10.5px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Overview of clinic operations
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-[10.5px] rounded-md px-2.5 py-1.5"
                style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
              >
                Madhapur ▾
              </span>
              <span
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Bell size={12} color="rgba(255,255,255,0.6)" />
              </span>
            </div>
          </div>

          {/* stat cards */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-3"
                style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="rounded-full" style={{ width: 6, height: 6, background: toneColor[s.tone] }} />
                  <span className="text-[9.5px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {s.label}
                  </span>
                </div>
                <p className="text-white font-semibold" style={{ fontSize: 'clamp(13px, 1.4vw, 17px)' }}>
                  {s.value}
                </p>
                <p className="text-[9.5px] mt-0.5" style={{ color: toneColor[s.tone] }}>
                  {s.sub}
                </p>
              </div>
            ))}
          </div>

          {/* revenue trend */}
          <div
            className="rounded-xl p-3 mb-4"
            style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Revenue trend
              </span>
              <span className="text-[9.5px]" style={{ color: CARENEXT_TEAL }}>
                Aug 2026
              </span>
            </div>
            <svg viewBox="0 0 320 60" className="w-full" style={{ height: 46 }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="cnAreaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CARENEXT_TEAL} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={CARENEXT_TEAL} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,46 L32,40 L64,44 L96,30 L128,34 L160,22 L192,26 L224,14 L256,18 L288,9 L320,6 L320,60 L0,60 Z"
                fill="url(#cnAreaFill)"
              />
              <path
                d="M0,46 L32,40 L64,44 L96,30 L128,34 L160,22 L192,26 L224,14 L256,18 L288,9 L320,6"
                fill="none"
                stroke={CARENEXT_TEAL}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* appointments table */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.09)' }}
          >
            <div
              className="grid grid-cols-[46px_1fr_1fr_auto] gap-2 px-3 py-2 text-[9px] uppercase tracking-wide"
              style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)' }}
            >
              <span>Time</span>
              <span>Patient</span>
              <span>Doctor</span>
              <span>Status</span>
            </div>
            {ROWS.map((r) => (
              <div
                key={r.time}
                className="grid grid-cols-[46px_1fr_1fr_auto] gap-2 px-3 py-2 text-[10.5px] items-center"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)' }}
              >
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{r.time}</span>
                <span className="truncate">{r.patient}</span>
                <span className="truncate" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {r.doctor}
                </span>
                <span
                  className="justify-self-end text-[9px] rounded-full px-2 py-0.5"
                  style={
                    r.ok
                      ? { background: 'rgba(45,212,191,0.16)', color: '#5EEAD4' }
                      : { background: 'rgba(251,191,36,0.16)', color: '#FBBF24' }
                  }
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
