import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';

interface FlipPage {
  src: string;
  label: string;
}

// Real tri-fold brochure we designed for EnlitEDU/LioraAI - front cover
// spread and inside spread, flippable like the physical piece.
const PAGES: FlipPage[] = [
  { src: '/flipbook-enlitedu-front.jpg', label: 'Front Cover' },
  { src: '/flipbook-enlitedu-back.jpg', label: 'Inside Spread' },
];

export default function PublicationFlipbookSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const isFront = pageIndex === 0;

  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-14" style={{ maxWidth: 780 }}>
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'rgba(200,190,230,0.75)' }}
          >
            Real Print Project
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}>
            Flip through it <span style={gradientTextStyle}>like they did.</span>
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            A real tri-fold brochure we designed for EnlitEDU / LioraAI - browse it the same way
            it reads in hand.
          </p>
        </div>

        {/* The book, sitting on a soft "table" shadow */}
        <div className="relative w-full flex flex-col items-center" style={{ maxWidth: 880 }}>
          <div
            className="relative w-full"
            style={{ perspective: 2400 }}
          >
            {/* Ambient shadow under the book, like it's resting on a surface */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                bottom: -28,
                width: '82%',
                height: 40,
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)',
                filter: 'blur(6px)',
              }}
            />

            <motion.div
              className="relative w-full rounded-2xl"
              style={{
                aspectRatio: '1600 / 1140',
                transformStyle: 'preserve-3d',
                boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
              }}
              animate={{ rotateY: isFront ? 0 : 180 }}
              transition={{ duration: 0.85, ease: [0.45, 0.05, 0.15, 1] }}
            >
              {/* Front face - cover spread */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img
                  src={PAGES[0].src}
                  alt={PAGES[0].label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {/* Spine shadow, center fold */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2"
                  style={{ width: 40, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.12), transparent)' }}
                />
              </div>

              {/* Back face - inside spread */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <img
                  src={PAGES[1].src}
                  alt={PAGES[1].label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2"
                  style={{ width: 40, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.12), transparent)' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-5 mt-14">
            <button
              onClick={() => setPageIndex(0)}
              disabled={isFront}
              aria-label="Previous page"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30"
              style={{ border: '1px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.04)' }}
            >
              <ChevronLeft size={18} color="white" />
            </button>

            <div className="flex flex-col items-center gap-1.5" style={{ minWidth: 140 }}>
              <span className="text-white text-sm font-medium">{PAGES[pageIndex].label}</span>
              <div className="flex items-center gap-1.5">
                {PAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPageIndex(i)}
                    aria-label={`Go to ${PAGES[i].label}`}
                    className="rounded-full transition-all"
                    style={{
                      width: i === pageIndex ? 18 : 6,
                      height: 6,
                      background: i === pageIndex ? gradientA : 'rgba(255,255,255,0.25)',
                    }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => setPageIndex(1)}
              disabled={!isFront}
              aria-label="Next page"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30"
              style={{ border: '1px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.04)' }}
            >
              <ChevronRight size={18} color="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
