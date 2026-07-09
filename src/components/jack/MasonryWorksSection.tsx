import { useEffect, useState } from 'react';
import { DARK_BG_FLAT } from '../../lib/brand';

export interface MasonryWorkItem {
  img: string;
  title: string;
  industry: string;
}

interface MasonryWorksSectionProps {
  heading: string;
  subtext: string;
  items: MasonryWorkItem[];
}

// Fisher-Yates shuffle - randomizes display order so the grouping doesn't
// always show the same client/topic in the same spot.
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Reusable masonry-style "Our Client Works" alternative - for pages where
// the real deliverables come in genuinely different sizes/aspect ratios
// (social posts, product labels) and forcing them into a uniform grid
// would mean cropping. Each item keeps its native aspect ratio.
export default function MasonryWorksSection({ heading, subtext, items: initialItems }: MasonryWorksSectionProps) {
  // Starts as the static order (matches what the server rendered, so
  // hydration doesn't mismatch), then shuffles once on the client right
  // after mount.
  const [items, setItems] = useState(initialItems);
  useEffect(() => {
    setItems(shuffle(initialItems));
    // Only re-shuffle if the underlying item set actually changes (e.g.
    // navigating between service pages that both use this component).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialItems]);

  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div
        className="flex flex-col items-center"
        style={{ padding: '0 clamp(16px, 4vw, 40px) clamp(80px, 10vw, 120px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-14" style={{ maxWidth: 900 }}>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(26px, 3.2vw, 38px)' }}>
            {heading}
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)', maxWidth: 780 }}>
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
                className="relative rounded-2xl overflow-hidden group"
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
                <div
                  className="absolute inset-x-0 bottom-0 px-4 py-3"
                  style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
                >
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {item.industry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
