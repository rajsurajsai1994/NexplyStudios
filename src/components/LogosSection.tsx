import { DARK_BG_FLAT, glassDifferentiation } from '../lib/brand';

const CLIENT_LOGOS = [
  { src: '/logo-ticker-printx.png', name: 'PrintX', padding: '12px 20px' },
  { src: '/logo-ticker-beyondbajji.png', name: 'Beyond Bajji', padding: '12px 20px' },
  { src: '/logo-ticker-pal.png', name: 'PAL Physiotherapy & Sports Rehab', padding: '12px 20px' },
  { src: '/logo-ticker-zestifusion.png', name: 'Zesti Fusion', padding: '12px 20px' },
  { src: '/logo-ticker-anatta.png', name: 'Anatta IT Solutions', padding: '12px 20px' },
  { src: '/logo-ticker-rebreath.png', name: 'ReBreath', padding: '12px 20px' },
  { src: '/logo-ticker-sadhshishya.png', name: 'Sadh Shishya Solutions', padding: '4px 10px' },
  { src: '/logo-ticker-telanganapickles.png', name: 'Telangana Spicy Pickles', padding: '12px 20px' },
  { src: '/logo-ticker-peoplesfusion.png', name: 'PeoplesFusion Technology', padding: '12px 20px' },
  { src: '/logo-ticker-ardent.png', name: 'Ardent Clinical Research Services', padding: '12px 20px' },
  { src: '/logo-ticker-ayurgum.jpeg', name: 'Ayur Gum', padding: '2px 6px' },
];
// Duplicated so the loop can wrap seamlessly.
const TRACK = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function LogosSection() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(56px, 7vw, 96px) clamp(16px, 4vw, 40px)', gap: 40 }}
      >
        <span
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'rgba(200,190,230,0.7)' }}
        >
          Trusted by brands we're proud of
        </span>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          }}
        >
          {/* Pure CSS marquee — a JS-driven animate() on a percentage keyframe
              was causing a visible stutter at the loop point once the track
              got longer. CSS keyframes loop natively without recalculating
              anything on each cycle, so this is fully seamless. */}
          <div
            className="flex items-center logos-marquee-track"
            style={{ gap: 24, width: 'max-content' }}
          >
            {TRACK.map((logo, i) => (
              <div
                key={i}
                className="relative shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
                style={{
                  width: 180,
                  height: 72,
                  padding: logo.padding,
                  border: '1px solid rgba(255,255,255,0.9)',
                  background: '#ffffff',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  decoding="async"
                  className="relative max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
