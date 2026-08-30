import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_TEAL,
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  CARENEXT_RECORD_POINTS,
  carenextInkGradientText,
} from '../../lib/carenext';

function PatientRecordMock() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        borderRadius: 18,
        border: '1px solid rgba(255,255,255,0.14)',
        background: '#0b1220',
        boxShadow: '0 30px 70px rgba(15,46,54,0.25)',
      }}
      aria-hidden="true"
    >
      <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #0EA5E9, #2DD4BF)' }} />
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
              style={{ background: 'linear-gradient(135deg, #0EA5E9, #2DD4BF)' }}
            >
              RT
            </span>
            <div>
              <p className="text-white text-[13px] font-medium">Ravi Teja</p>
              <p className="text-[10.5px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Rotator cuff rehab · Dr. Yagnesh · Madhapur
              </p>
            </div>
          </div>
          <span
            className="text-[9.5px] rounded-full px-2.5 py-1"
            style={{ background: 'rgba(45,212,191,0.16)', color: '#5EEAD4' }}
          >
            Active
          </span>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10.5px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Treatment progress
            </span>
            <span className="text-[10.5px]" style={{ color: CARENEXT_TEAL }}>
              Session 4 of 15
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="h-full rounded-full" style={{ width: '27%', background: 'linear-gradient(90deg, #0EA5E9, #2DD4BF)' }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { k: 'Billed', v: '₹9,000' },
            { k: 'Paid', v: '₹5,500' },
            { k: 'Pending', v: '₹3,500' },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-lg p-2.5"
              style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}
            >
              <p className="text-[9px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {row.k}
              </p>
              <p className="text-white text-[12.5px] font-medium mt-0.5">{row.v}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg p-3"
          style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Clinical note · Dr. Yagnesh
            </span>
            <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
              28 Aug 2026
            </span>
          </div>
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>
            ROM improving, pain down to 3/10. Progressed to resistance band work. Continue home
            exercises 2x daily.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CareNextRecords() {
  return (
    <section className="relative" style={{ background: CARENEXT_LIGHT_BG, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}>
      <div
        className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] items-center gap-14 lg:gap-16"
        style={{ maxWidth: 1200, padding: 'clamp(64px, 8vw, 110px) clamp(16px, 4vw, 40px)' }}
      >
        <div>
          <FadeIn y={16}>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: '#0D9488' }}
            >
              Patient records
            </span>
            <h2
              className="font-medium mt-4 mb-8"
              style={{ color: CARENEXT_INK, fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.2 }}
            >
              Records that tell the <span style={carenextInkGradientText}>whole story</span>
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {CARENEXT_RECORD_POINTS.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.06} y={16}>
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(13,148,136,0.1)', color: '#0D9488' }}
                  >
                    {point.icon}
                  </span>
                  <div>
                    <h3 className="font-medium text-[16px] mb-1" style={{ color: CARENEXT_INK }}>
                      {point.title}
                    </h3>
                    <p style={{ color: CARENEXT_INK_SOFT, fontSize: 14, lineHeight: 1.6 }}>{point.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn x={24} y={0} delay={0.15} duration={0.7}>
          <PatientRecordMock />
        </FadeIn>
      </div>
    </section>
  );
}
