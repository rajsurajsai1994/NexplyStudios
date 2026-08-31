import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Stethoscope,
  ReceiptText,
  BarChart3,
} from 'lucide-react';
import { CARENEXT_INK, CARENEXT_INK_SOFT, CARENEXT_HAIRLINE } from '../../lib/carenext';

// A stylised CareNext admin dashboard, built entirely in markup - no
// screenshot. Light "clinical" UI: sidebar nav, a branch selector, three
// range cards, a revenue trend, and today's appointments - so the hero
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
  { label: 'Appointments', value: '128', sub: 'this month', tone: '#0EA5E9' },
  { label: 'Revenue', value: '₹38,700', sub: '+17% vs last', tone: '#0D9488' },
  { label: 'No-shows', value: '4', sub: '3.1% rate', tone: '#F59E0B' },
];

const BARS = [40, 62, 48, 78, 56, 88, 70];

const ROWS = [
  { time: '09:30', patient: 'Swathi M.', doctor: 'Dr. Bhuvana', status: 'Confirmed', ok: true },
  { time: '10:15', patient: 'Ravi Teja', doctor: 'Dr. Yagnesh', status: 'In session', ok: true },
  { time: '11:00', patient: 'Arti Joshi', doctor: 'Dr. Akshaya', status: 'Pending', ok: false },
];

export default function CareNextDashboardMock() {
  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{
        borderRadius: 18,
        border: `1px solid ${CARENEXT_HAIRLINE}`,
        background: '#fff',
        boxShadow: '0 40px 90px rgba(15,46,54,0.16), 0 2px 8px rgba(15,46,54,0.06)',
      }}
      aria-hidden="true"
    >
      {/* window chrome */}
      <div
        className="flex items-center gap-2 px-4"
        style={{ height: 34, borderBottom: `1px solid ${CARENEXT_HAIRLINE}`, background: '#F8FBFC' }}
      >
        <span className="rounded-full" style={{ width: 9, height: 9, background: '#FF5F57' }} />
        <span className="rounded-full" style={{ width: 9, height: 9, background: '#FEBC2E' }} />
        <span className="rounded-full" style={{ width: 9, height: 9, background: '#28C840' }} />
        <span
          className="ml-3 text-[10px] rounded-md px-2 py-0.5 truncate"
          style={{ color: CARENEXT_INK_SOFT, background: '#fff', border: `1px solid ${CARENEXT_HAIRLINE}` }}
        >
          app.carenext.clinic / admin
        </span>
      </div>

      <div className="flex" style={{ minHeight: 320 }}>
        {/* sidebar */}
        <div
          className="hidden sm:flex flex-col gap-1 py-4 px-3 shrink-0"
          style={{ width: 150, borderRight: `1px solid ${CARENEXT_HAIRLINE}`, background: '#F8FBFC' }}
        >
          <div className="flex items-center gap-2 px-2 pb-3">
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[11px] font-bold"
              style={{ background: 'linear-gradient(135deg, #0EA5E9, #2DD4BF)' }}
            >
              C
            </span>
            <span className="text-[12px] font-semibold" style={{ color: CARENEXT_INK }}>
              CareNext
            </span>
          </div>
          {NAV.map((n) => (
            <span
              key={n.label}
              className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium"
              style={
                n.active
                  ? { background: 'rgba(13,148,136,0.1)', color: '#0D9488' }
                  : { color: CARENEXT_INK_SOFT }
              }
            >
              <n.icon size={13} />
              {n.label}
            </span>
          ))}
        </div>

        {/* main */}
        <div className="flex-1 p-4 sm:p-5" style={{ background: '#fff' }}>
          {/* header row */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <p className="text-[13px] font-semibold" style={{ color: CARENEXT_INK }}>
                Good morning, Dr. Bhuvana
              </p>
              <p className="text-[10px]" style={{ color: CARENEXT_INK_SOFT }}>
                Friday, 28 Aug
              </p>
            </div>
            <span
              className="text-[10px] rounded-md px-2.5 py-1.5 font-medium"
              style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, color: CARENEXT_INK_SOFT }}
            >
              All branches ▾
            </span>
          </div>

          {/* stat cards */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-2.5"
                style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#F8FBFC' }}
              >
                <p className="text-[8.5px] uppercase tracking-wide" style={{ color: CARENEXT_INK_SOFT }}>
                  {s.label}
                </p>
                <p className="text-[15px] font-semibold mt-0.5" style={{ color: CARENEXT_INK }}>
                  {s.value}
                </p>
                <p className="text-[8.5px] mt-0.5" style={{ color: s.tone }}>
                  {s.sub}
                </p>
              </div>
            ))}
          </div>

          {/* revenue trend */}
          <div
            className="rounded-xl p-3 mb-4"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff' }}
          >
            <p className="text-[9.5px] font-medium mb-2" style={{ color: CARENEXT_INK_SOFT }}>
              Revenue · last 7 days
            </p>
            <div className="flex items-end gap-1.5" style={{ height: 48 }}>
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    background: 'linear-gradient(180deg, #2DD4BF, #0EA5E9)',
                    opacity: i === BARS.length - 1 ? 1 : 0.55,
                  }}
                />
              ))}
            </div>
          </div>

          {/* appointments table */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}` }}
          >
            <div
              className="px-3 py-2 text-[9.5px] font-semibold"
              style={{ color: CARENEXT_INK_SOFT, borderBottom: `1px solid ${CARENEXT_HAIRLINE}`, background: '#F8FBFC' }}
            >
              Today&apos;s appointments
            </div>
            {ROWS.map((r) => (
              <div
                key={r.time}
                className="flex items-center gap-2 px-3 py-2 text-[10px]"
                style={{ borderTop: `1px solid ${CARENEXT_HAIRLINE}`, color: CARENEXT_INK }}
              >
                <span style={{ color: CARENEXT_INK_SOFT, width: 34 }}>{r.time}</span>
                <span className="font-medium flex-1 truncate">{r.patient}</span>
                <span className="hidden sm:inline truncate" style={{ color: CARENEXT_INK_SOFT, width: 74 }}>
                  {r.doctor}
                </span>
                <span
                  className="rounded-full px-1.5 py-0.5 text-[8.5px] font-medium shrink-0"
                  style={
                    r.ok
                      ? { background: 'rgba(13,148,136,0.12)', color: '#0D9488' }
                      : { background: 'rgba(245,158,11,0.14)', color: '#B45309' }
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
