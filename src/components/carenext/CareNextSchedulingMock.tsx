import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { CARENEXT_TEAL } from '../../lib/carenext';

// A stylised CareNext appointment-scheduling screen, built in markup. Day
// view: a time rail down the left, one column per doctor, colour-coded
// appointment blocks (teal = confirmed, amber = pending, slate = done).
const HOURS = ['09:00', '10:00', '11:00', '12:00', '13:00'];
const DOCTORS = ['Dr. Bhuvana', 'Dr. Yagnesh', 'Dr. Akshaya'];

type Appt = { col: number; start: number; span: number; name: string; kind: 'ok' | 'pending' | 'done' };
const APPTS: Appt[] = [
  { col: 0, start: 0, span: 1, name: 'Swathi M.', kind: 'done' },
  { col: 0, start: 1.5, span: 1, name: 'Ravi Teja', kind: 'ok' },
  { col: 0, start: 3, span: 1.5, name: 'Meghana R.', kind: 'ok' },
  { col: 1, start: 0.5, span: 1, name: 'Arjun K.', kind: 'done' },
  { col: 1, start: 2, span: 1, name: 'Priya S.', kind: 'pending' },
  { col: 1, start: 3.5, span: 1, name: 'Imran V.', kind: 'ok' },
  { col: 2, start: 1, span: 1.5, name: 'Lakshmi N.', kind: 'ok' },
  { col: 2, start: 3, span: 1, name: 'Farhan A.', kind: 'pending' },
];

const ROW_H = 48;
const kindStyle: Record<Appt['kind'], React.CSSProperties> = {
  ok: { background: 'rgba(45,212,191,0.16)', border: '1px solid rgba(45,212,191,0.5)', color: '#5EEAD4' },
  pending: { background: 'rgba(251,191,36,0.14)', border: '1px solid rgba(251,191,36,0.45)', color: '#FBBF24' },
  done: { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' },
};

export default function CareNextSchedulingMock() {
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
          app.carenext.clinic / appointments
        </span>
      </div>

      <div className="p-4 sm:p-5">
        {/* toolbar */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-[13px]">Appointments</span>
            <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <ChevronLeft size={12} />
              Fri, 28 Aug
              <ChevronRight size={12} />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] rounded-md overflow-hidden flex"
              style={{ border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <span className="px-2 py-1" style={{ background: 'rgba(45,212,191,0.16)', color: '#5EEAD4' }}>
                Day
              </span>
              <span className="px-2 py-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Week
              </span>
            </span>
            <span
              className="flex items-center gap-1 text-[10px] rounded-md px-2 py-1.5 text-white"
              style={{ background: 'linear-gradient(135deg, #0EA5E9, #2DD4BF)' }}
            >
              <Plus size={11} />
              New
            </span>
          </div>
        </div>

        {/* calendar grid */}
        <div className="grid" style={{ gridTemplateColumns: '46px repeat(3, 1fr)' }}>
          {/* header row */}
          <div />
          {DOCTORS.map((d) => (
            <div
              key={d}
              className="text-[10px] font-medium pb-2 px-1 truncate"
              style={{ color: 'rgba(255,255,255,0.6)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              {d}
            </div>
          ))}

          {/* time rail */}
          <div style={{ position: 'relative' }}>
            {HOURS.map((h) => (
              <div
                key={h}
                className="text-[9px] pr-2 text-right"
                style={{ height: ROW_H, color: 'rgba(255,255,255,0.35)', transform: 'translateY(-5px)' }}
              >
                {h}
              </div>
            ))}
          </div>

          {/* doctor columns */}
          {DOCTORS.map((d, colIdx) => (
            <div
              key={d}
              style={{
                position: 'relative',
                height: ROW_H * HOURS.length,
                borderLeft: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* hour lines */}
              {HOURS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: i * ROW_H,
                    left: 0,
                    right: 0,
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                  }}
                />
              ))}
              {/* appointment blocks */}
              {APPTS.filter((a) => a.col === colIdx).map((a, i) => (
                <div
                  key={i}
                  className="absolute rounded-md px-1.5 py-1 text-[9.5px] font-medium overflow-hidden"
                  style={{
                    top: a.start * ROW_H + 2,
                    height: a.span * ROW_H - 4,
                    left: 3,
                    right: 3,
                    ...kindStyle[a.kind],
                  }}
                >
                  {a.name}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* legend */}
        <div className="flex items-center gap-4 mt-3 text-[9px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <span className="flex items-center gap-1.5">
            <span className="rounded-sm" style={{ width: 8, height: 8, background: CARENEXT_TEAL }} />
            Confirmed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="rounded-sm" style={{ width: 8, height: 8, background: '#FBBF24' }} />
            Pending
          </span>
          <span className="flex items-center gap-1.5">
            <span className="rounded-sm" style={{ width: 8, height: 8, background: 'rgba(255,255,255,0.3)' }} />
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}
