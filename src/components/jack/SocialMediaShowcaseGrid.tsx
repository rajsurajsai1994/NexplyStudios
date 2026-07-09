import { DARK_BG_FLAT } from '../../lib/brand';

interface FlyerItem {
  img: string;
  client: string;
  caption: string;
}

// Real client social posts, deliberately left at their native aspect ratio
// (square, portrait, landscape) rather than force-cropped into a uniform
// grid - each size was chosen for where the post was actually going to run.
const FLYERS: FlyerItem[] = [
  { img: '/social/pal-arthritis.jpg', client: 'PAL Physiotherapy', caption: 'Arthritis Care' },
  { img: '/social/beyondbajji-why-us.png', client: 'Beyond Bajji', caption: 'Why Beyond Bajji' },
  { img: '/social/campaign-may19-flyer.jpg', client: 'Seasonal Campaign', caption: 'May Flyer' },
  { img: '/social/pal-chiropractic.jpg', client: 'PAL Physiotherapy', caption: 'Chiropractic Sessions' },
  { img: '/social/ad-creative-1.jpg', client: 'Ad Creative', caption: 'Social Campaign' },
  { img: '/social/beyondbajji-mirchi-bajji.png', client: 'Beyond Bajji', caption: 'New Trend: Mirchi Bajji' },
  { img: '/social/pal-posture.jpg', client: 'PAL Physiotherapy', caption: 'Posture Correction' },
  { img: '/social/campaign-stayhome.jpg', client: 'Awareness Campaign', caption: 'Stay Home' },
  { img: '/social/pal-testimonial.jpg', client: 'PAL Physiotherapy', caption: 'Client Testimonial' },
  { img: '/social/ad-creative-2.jpg', client: 'Ad Creative', caption: 'Social Campaign' },
  { img: '/social/beyondbajji-just-fried.png', client: 'Beyond Bajji', caption: 'Food Is Just Fried' },
  { img: '/social/pal-cupping.jpg', client: 'PAL Physiotherapy', caption: 'Cupping Therapy' },
  { img: '/social/campaign-workfromhome.jpg', client: 'Awareness Campaign', caption: 'Work From Home' },
  { img: '/social/pal-pain-into-gains.jpg', client: 'PAL Physiotherapy', caption: 'Turn Pain Into Gains' },
  { img: '/social/ad-creative-3.jpg', client: 'Ad Creative', caption: 'Social Campaign' },
  { img: '/social/beyondbajji-fried-icecream.png', client: 'Beyond Bajji', caption: 'Fried Ice Cream' },
  { img: '/social/pal-true-cost.jpg', client: 'PAL Physiotherapy', caption: 'The True Cost' },
  { img: '/social/campaign-insurance.jpg', client: 'Awareness Campaign', caption: 'Insurance Awareness' },
  { img: '/social/ad-creative-4.jpg', client: 'Ad Creative', caption: 'Social Campaign' },
];

export default function SocialMediaShowcaseGrid() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div
        className="flex flex-col items-center"
        style={{ padding: '0 clamp(16px, 4vw, 40px) clamp(80px, 10vw, 120px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-12" style={{ maxWidth: 640 }}>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(26px, 3.2vw, 38px)' }}>
            Every post, sized for where it runs
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Square for the feed, portrait for stories, landscape for link previews - no
            one-size-fits-all template.
          </p>
        </div>

        {/* Masonry via CSS columns - each image keeps its real aspect ratio,
            no cropping, so the variety in sizing is actually visible. */}
        <div
          className="w-full"
          style={{
            maxWidth: 1200,
            columnCount: 1,
            columnGap: 20,
          }}
        >
          <style>{`
            @media (min-width: 640px) { .flyer-masonry { column-count: 2 !important; } }
            @media (min-width: 1024px) { .flyer-masonry { column-count: 3 !important; } }
          `}</style>
          <div className="flyer-masonry" style={{ columnCount: 1, columnGap: 20 }}>
            {FLYERS.map((flyer, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden group"
                style={{
                  breakInside: 'avoid',
                  marginBottom: 20,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <img
                  src={flyer.img}
                  alt={`${flyer.client} - ${flyer.caption}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                />
                <div
                  className="absolute inset-x-0 bottom-0 px-4 py-3"
                  style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
                >
                  <p className="text-white text-sm font-medium">{flyer.caption}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {flyer.client}
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
