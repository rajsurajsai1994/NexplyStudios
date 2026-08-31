import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  CARENEXT_SHOWCASE,
  carenextInkGradientText,
  type CareNextShowcaseKey,
} from '../../lib/carenext';

const TEAL = '#0D9488';
const rail = { border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff' };

// Small, stylised visual for each feature card - built in markup, not images.
function ShowcaseMock({ kind }: { kind: CareNextShowcaseKey }) {
  const frame = (
    children: React.ReactNode,
  ) => (
    <div
      className="w-full overflow-hidden"
      style={{ borderRadius: 12, border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#F8FBFC', padding: 10, height: 132 }}
      aria-hidden="true"
    >
      {children}
    </div>
  );

  if (kind === 'scheduling') {
    const blocks = [
      { top: 0, h: 26, tone: TEAL },
      { top: 34, h: 34, tone: '#0EA5E9' },
      { top: 76, h: 22, tone: '#F59E0B' },
    ];
    return frame(
      <div className="flex gap-2 h-full">
        <div className="flex flex-col justify-between py-0.5 text-[7px]" style={{ color: CARENEXT_INK_SOFT }}>
          <span>09</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
        </div>
        {[0, 1, 2].map((c) => (
          <div key={c} className="flex-1 relative rounded-md" style={rail}>
            {blocks
              .filter((_, i) => (c + i) % 3 !== 2 || c === 1)
              .map((b, i) => (
                <div
                  key={i}
                  className="absolute rounded"
                  style={{
                    left: 3,
                    right: 3,
                    top: b.top + c * 6,
                    height: b.h,
                    background: `${b.tone}22`,
                    borderLeft: `2px solid ${b.tone}`,
                  }}
                />
              ))}
          </div>
        ))}
      </div>,
    );
  }

  if (kind === 'multibranch') {
    const branches = [
      { name: 'Madhapur', pct: 78, rev: '₹22,400' },
      { name: 'Kondapur', pct: 54, rev: '₹16,300' },
    ];
    return frame(
      <div className="flex flex-col gap-2 h-full justify-center">
        {branches.map((b) => (
          <div key={b.name} className="rounded-md p-2" style={rail}>
            <div className="flex items-center justify-between mb-1.5 text-[8.5px]">
              <span className="font-semibold" style={{ color: CARENEXT_INK }}>
                {b.name}
              </span>
              <span style={{ color: TEAL }}>{b.rev}</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: '#E2EEF0' }}>
              <div
                className="h-full rounded-full"
                style={{ width: `${b.pct}%`, background: 'linear-gradient(90deg, #0EA5E9, #2DD4BF)' }}
              />
            </div>
          </div>
        ))}
        <p className="text-[7.5px] text-center" style={{ color: CARENEXT_INK_SOFT }}>
          All branches · one login
        </p>
      </div>,
    );
  }

  if (kind === 'billing') {
    return frame(
      <div className="rounded-md p-2.5 h-full flex flex-col" style={rail}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[8.5px] font-semibold" style={{ color: CARENEXT_INK }}>
            Invoice #1042
          </span>
          <span
            className="text-[7px] rounded-full px-1.5 py-0.5 font-medium"
            style={{ background: 'rgba(13,148,136,0.12)', color: TEAL }}
          >
            Paid
          </span>
        </div>
        {[
          ['Consultation', '₹600'],
          ['Physio session ×3', '₹2,400'],
          ['Taping', '₹300'],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between text-[8px] py-0.5" style={{ color: CARENEXT_INK_SOFT }}>
            <span>{k}</span>
            <span>{v}</span>
          </div>
        ))}
        <div
          className="flex items-center justify-between text-[9px] font-semibold mt-auto pt-1.5"
          style={{ color: CARENEXT_INK, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}
        >
          <span>Total</span>
          <span>₹3,300</span>
        </div>
      </div>,
    );
  }

  // staff
  const staff = [
    { initials: 'BV', name: 'Dr. Bhuvana', meta: 'On duty · Madhapur', dot: TEAL },
    { initials: 'YG', name: 'Dr. Yagnesh', meta: 'On leave · approved', dot: '#F59E0B' },
    { initials: 'AK', name: 'Dr. Akshaya', meta: 'On duty · Kondapur', dot: TEAL },
  ];
  return frame(
    <div className="flex flex-col gap-1.5 h-full justify-center">
      {staff.map((s) => (
        <div key={s.name} className="flex items-center gap-2 rounded-md p-1.5" style={rail}>
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[7px] font-bold shrink-0"
            style={{ background: 'linear-gradient(135deg, #0EA5E9, #2DD4BF)' }}
          >
            {s.initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[8.5px] font-semibold truncate" style={{ color: CARENEXT_INK }}>
              {s.name}
            </p>
            <p className="text-[7px] truncate" style={{ color: CARENEXT_INK_SOFT }}>
              {s.meta}
            </p>
          </div>
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.dot }} />
        </div>
      ))}
    </div>,
  );
}

export default function CareNextFeatureShowcase() {
  return (
    <section
      id="carenext-showcase"
      className="relative"
      style={{ background: CARENEXT_LIGHT_BG, borderTop: `1px solid ${CARENEXT_HAIRLINE}`, scrollMarginTop: 90 }}
    >
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 110px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: TEAL }}
          >
            A look inside
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2 }}>
            The screens your team <span style={carenextInkGradientText}>works in every day</span>
          </h2>
          <p className="max-w-xl" style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Not a stack of separate tools - one clean interface for scheduling, branches, billing, and staff.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1160px]">
          {CARENEXT_SHOWCASE.map((card, i) => (
            <FadeIn key={card.key} delay={i * 0.06} y={20}>
              <div
                className="rounded-2xl p-4 h-full flex flex-col gap-4"
                style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', boxShadow: '0 12px 34px rgba(13,148,136,0.06)' }}
              >
                <ShowcaseMock kind={card.key} />
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(13,148,136,0.1)', color: TEAL }}
                    >
                      {card.icon}
                    </span>
                    <h3 className="font-medium text-[15px]" style={{ color: CARENEXT_INK }}>
                      {card.title}
                    </h3>
                  </div>
                  <p style={{ color: CARENEXT_INK_SOFT, fontSize: 13, lineHeight: 1.55 }}>{card.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
