import { DARK_BG_FLAT } from '../../lib/brand';

export interface MasonryWorkItem {
  img: string;
  title: string;
  industry: string;
  // Short context line for a piece that needs a sentence of explanation
  // (e.g. why part of a card was left blank on purpose) - optional, most
  // items don't need one.
  note?: string;
}

interface MasonryWorksSectionProps {
  heading: string;
  subtext: string;
  items: MasonryWorkItem[];
}

// Reusable masonry-style "Our Client Works" alternative - for pages where
// the real deliverables come in genuinely different sizes/aspect ratios
// (social posts, product labels) and forcing them into a uniform grid
// would mean cropping. Each item keeps its native aspect ratio.
//
// Items render in the exact order given, not shuffled - related pieces
// (e.g. a card's front and back) are defined next to each other in the
// data on purpose, and with CSS-columns masonry that keeps them visually
// close together (same column or the next one over) rather than scattered
// across the grid.
export default function MasonryWorksSection({ heading, subtext, items }: MasonryWorksSectionProps) {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div
        className="flex flex-col items-center"
        style={{ padding: '0 clamp(16px, 4vw, 40px) clamp(80px, 10vw, 120px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-14" style={{ maxWidth: 1100 }}>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(26px, 3.2vw, 38px)' }}>
            {heading}
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            {subtext}
          </p>
        </div>

        {/* Masonry via CSS columns - each image keeps its real aspect ratio,
            no cropping, so the variety in sizing is actually visible. */}
        <div className="w-full" style={{ maxWidth: 1200 }}>
          <style>{`
            @media (min-width: 640px) { .masonry-works-grid { column-count: 2 !important; } }
            @media (min-width: 1024px) { .masonry-works-grid { column-count: 3 !important; } }
          `}</style>
          <div className="masonry-works-grid" style={{ columnCount: 1, columnGap: 20 }}>
            {items.map((item) => (
              <div
                key={item.img}
                className="rounded-2xl overflow-hidden"
                style={{
                  breakInside: 'avoid',
                  marginBottom: 20,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <img
                  src={item.img}
                  alt={`${item.industry} - ${item.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                />
                <div className="px-4 py-3">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {item.industry}
                  </p>
                  {item.note && (
                    <p className="text-xs italic mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
