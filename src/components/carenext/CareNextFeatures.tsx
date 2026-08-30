import FadeIn from '../jack/FadeIn';
import { DARK_BG_FLAT, glassDifferentiation } from '../../lib/brand';
import { CARENEXT_FEATURES, carenextGradientText } from '../../lib/carenext';

export default function CareNextFeatures() {
  return (
    <section id="carenext-platform" className="relative" style={{ background: DARK_BG_FLAT, scrollMarginTop: 90 }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(56,189,248,0.05)')} />

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'rgba(94,234,212,0.8)' }}
          >
            The platform at a glance
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2 }}>
            Everything a clinic runs on, <span style={carenextGradientText}>in one system</span>
          </h2>
          <p className="max-w-xl" style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Eight connected modules - not eight separate tools you have to stitch together.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1240px]">
          {CARENEXT_FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={(i % 4) * 0.06} y={24}>
              <div
                className="group relative rounded-2xl backdrop-blur-md p-6 h-full overflow-hidden transition-colors duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'radial-gradient(120% 80% at 50% 0%, rgba(45,212,191,0.1), transparent 60%)' }}
                />
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #2DD4BF 100%)' }}
                >
                  {f.icon}
                </div>
                <h3 className="relative text-white font-medium text-[16px] mb-2 tracking-tight">{f.title}</h3>
                <p className="relative" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5, lineHeight: 1.6 }}>
                  {f.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
