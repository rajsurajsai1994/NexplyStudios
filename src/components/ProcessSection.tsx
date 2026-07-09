import { Search, PenTool, Hammer, Rocket, TrendingUp } from 'lucide-react';
import { DARK_BG_FLAT, glassDifferentiation, gradientTextStyle } from '../lib/brand';

const STEPS = [
  {
    icon: Search,
    title: 'Discover',
    text: "We start by understanding your brand, your market, and what's actually stopping you from growing.",
  },
  {
    icon: PenTool,
    title: 'Design',
    text: 'Concepts, wireframes, and visual direction - refined with you until it feels unmistakably yours.',
  },
  {
    icon: Hammer,
    title: 'Build',
    text: 'Development, content, and campaigns come together - built for speed without cutting corners.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    text: 'We ship it, test it, and make sure everything works exactly like it should in the real world.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    text: 'Launch is day one. We stick around to optimize, iterate, and help you keep moving.',
  },
];

// Fixed so every column's icon sits at the exact same height, regardless of
// whether that column's title wraps to one line or two.
const TITLE_BLOCK_HEIGHT = 64;

export default function ProcessSection() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.06)')} />

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            How <span style={gradientTextStyle}>we work</span>
          </h2>
          <p className="max-w-lg" style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Five steps, one team, zero guesswork about what happens next.
          </p>
        </div>

        {/* One unified grid - title, icon, and description all share the
            same 5 columns, so they're always aligned. The beam line is a
            single overlay positioned to pass exactly through the icon row. */}
        <div className="relative w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12" style={{ maxWidth: 1100 }}>
          {/* Connecting line + beam - spans from the 1st icon's center to
              the 5th icon's center (10% / 90% across a 5-column grid),
              vertically aligned with the icon row via `top`. Hidden below
              lg since the grid wraps to fewer columns there anyway. */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{
              top: TITLE_BLOCK_HEIGHT + 16 + 23,
              left: '9.1%',
              right: '9.1%',
              height: 1,
              background: 'rgba(255,255,255,0.14)',
            }}
          >
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                top: '50%',
                width: 10,
                height: 10,
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(124,108,255,0.7) 55%, transparent 100%)',
                filter: 'blur(0.5px)',
                transform: 'translate(-50%, -50%)',
                animation: 'process-beam-travel 5s linear infinite',
              }}
            />
          </div>

          {STEPS.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {/* Title - fixed height, bottom-aligned, so icons line up */}
              <div
                className="flex flex-col items-center justify-end"
                style={{ height: TITLE_BLOCK_HEIGHT, marginBottom: 16 }}
              >
                <span className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Step {i + 1}
                </span>
                <h3 className="text-white font-medium text-lg">{step.title}</h3>
              </div>

              {/* Icon node */}
              <div
                className="process-node relative rounded-full flex items-center justify-center shrink-0"
                style={{
                  width: 46,
                  height: 46,
                  background: '#1a1a24',
                  animation: `process-node-glow-${i} 5s ease-in-out infinite`,
                }}
              >
                <step.icon size={20} color="rgba(255,255,255,0.75)" strokeWidth={1.5} />
              </div>

              {/* Description */}
              <p className="mt-5 text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
