import { TrendingUp } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';

export interface WorkItem {
  seed?: string;
  title: string;
  industry: string;
  // Real client photo, when we have one. Falls back to a placeholder
  // picsum image (seeded by slug) when omitted, so pages without real
  // work yet still render something reasonable.
  img?: string;
  // Optional small caption above the title - for projects with a process
  // story worth a one-line callout (e.g. "From sketch to final logo").
  note?: string;
}

export interface FeaturedCaseImage {
  src: string;
  label: string;
}

export interface FeaturedCaseStat {
  label: string;
  before: string;
  after: string;
}

export interface FeaturedClientCase {
  title: string;
  industry: string;
  branchNote?: string;
  images: FeaturedCaseImage[];
  caption: string;
  stats: FeaturedCaseStat[];
  disclaimer?: string;
}

// Placeholder work items - swap in real project photos/names/industries
// whenever they're ready. Seeded so each card gets a distinct stock image.
const PLACEHOLDER_WORKS: WorkItem[] = [
  { seed: 'work-01', title: 'Project Name Here', industry: 'Industry' },
  { seed: 'work-02', title: 'Project Name Here', industry: 'Industry' },
  { seed: 'work-03', title: 'Project Name Here', industry: 'Industry' },
  { seed: 'work-04', title: 'Project Name Here', industry: 'Industry' },
  { seed: 'work-05', title: 'Project Name Here', industry: 'Industry' },
  { seed: 'work-06', title: 'Project Name Here', industry: 'Industry' },
  { seed: 'work-07', title: 'Project Name Here', industry: 'Industry' },
  { seed: 'work-08', title: 'Project Name Here', industry: 'Industry' },
  { seed: 'work-09', title: 'Project Name Here', industry: 'Industry' },
];

interface ClientWorksGridSectionProps {
  seedPrefix?: string;
  works?: WorkItem[];
  featured?: FeaturedClientCase[];
}

export default function ClientWorksGridSection({ seedPrefix = 'nexply', works, featured }: ClientWorksGridSectionProps) {
  const items = works ?? PLACEHOLDER_WORKS;

  return (
    <section
      id="client-works"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10"
      style={{ background: DARK_BG_GRADIENT }}
    >
      <div
        className="flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px) clamp(96px, 12vw, 160px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 48px)' }}>
            Our Client Works
          </h2>
          <p className="max-w-lg" style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            A few of the projects we've brought to life.
          </p>
        </div>

        {featured?.map((fw) => (
          <div
            key={fw.title}
            className="relative rounded-[28px] overflow-hidden backdrop-blur-md w-full max-w-[1200px] mb-8"
            style={{
              border: '1px solid rgba(255,255,255,0.16)',
              background: 'rgba(255,255,255,0.04)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 25%)' }}
            />
            {/* Soft brand-gradient glow behind the card - signals this one
                is a highlight, not just another grid item */}
            <div
              className="pointer-events-none absolute -top-24 -left-16 rounded-full"
              style={{ width: 320, height: 320, background: 'rgba(124,108,255,0.18)', filter: 'blur(90px)' }}
            />

            <div className="relative" style={{ padding: 'clamp(20px, 3vw, 36px)' }}>
              {/* Header row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-2"
                    style={{ background: gradientA, color: 'white' }}
                  >
                    Featured Result
                  </span>
                  <h3 className="text-white font-medium text-xl">{fw.title}</h3>
                  {fw.branchNote && (
                    <p className="text-sm mt-0.5" style={{ color: 'rgb(169, 151, 206)' }}>
                      {fw.branchNote}
                    </p>
                  )}
                </div>
                <span
                  className="shrink-0 text-[11px] font-medium rounded-full px-3 py-1.5"
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {fw.industry}
                </span>
              </div>

              {/* Screenshots, side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {fw.images.map((image) => (
                  <div key={image.src} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.14)' }}>
                    <img src={image.src} alt={image.label} loading="lazy" decoding="async" className="w-full h-auto block" />
                    <div className="px-3 py-2" style={{ background: 'rgba(0,0,0,0.25)' }}>
                      <p className="text-xs font-medium text-white/70">{image.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Caption */}
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} color="#A78BFA" className="shrink-0" />
                <p className="text-sm font-medium text-white">{fw.caption}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fw.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-4"
                    style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
                  >
                    <p className="text-xs uppercase tracking-wide mb-2" style={{ color: 'rgba(200,190,230,0.75)' }}>
                      {stat.label}
                    </p>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {stat.before}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.35)' }}>&rarr;</span>
                      <span className="text-lg font-medium" style={gradientTextStyle}>
                        {stat.after}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {fw.disclaimer && (
                <p className="text-xs italic mt-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {fw.disclaimer}
                </p>
              )}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
          {items.map((work, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden backdrop-blur-md flex flex-col"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.03)',
                height: 320,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl z-10"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 30%)' }}
              />

              <div className="relative" style={{ height: '68%' }}>
                <img
                  src={work.img ?? `https://picsum.photos/seed/${seedPrefix}-${work.seed ?? work.title}-${i}/560/460`}
                  alt={work.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(13,14,31,0.85) 100%)' }}
                />
              </div>

              <div className="relative flex-1 flex items-center justify-between gap-3 px-5">
                <div className="min-w-0">
                  {work.note && (
                    <p
                      className="text-[11px] italic truncate"
                      style={{ color: 'rgba(200,190,230,0.75)' }}
                    >
                      {work.note}
                    </p>
                  )}
                  <p className="text-white font-medium text-sm truncate">{work.title}</p>
                </div>
                <span
                  className="shrink-0 text-[11px] font-medium rounded-full px-3 py-1.5 backdrop-blur-md"
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {work.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
