import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';

export interface LargeDeck {
  id: string;
  name: string;
  industry: string;
  description: string;
  slides: string[];
}

interface LargeDeckShowcaseProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  subtext?: string;
  deck: LargeDeck;
}

// Same "click through it slide by slide" interaction as PitchDeckShowcase,
// but built for a single deck shown at a much larger size - for pages
// where one real deliverable (like a full brand book) deserves to be the
// hero of the section rather than sharing a 2-column grid.
export default function LargeDeckShowcase({
  eyebrow = 'Real Client Deck',
  heading,
  subtext,
  deck,
}: LargeDeckShowcaseProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    if (slideIndex >= deck.slides.length - 1) return;
    setDirection(1);
    setSlideIndex((i) => i + 1);
  };
  const prevSlide = () => {
    if (slideIndex <= 0) return;
    setDirection(-1);
    setSlideIndex((i) => i - 1);
  };

  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 80px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-14" style={{ maxWidth: 900 }}>
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'rgba(200,190,230,0.75)' }}
          >
            {eyebrow}
          </span>
          <h2
            className="text-white font-medium whitespace-normal lg:whitespace-nowrap"
            style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}
          >
            {heading ?? (
              <>
                Click through it <span style={gradientTextStyle}>slide by slide.</span>
              </>
            )}
          </h2>
          {subtext && (
            <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)', maxWidth: 780 }}>
              {subtext}
            </p>
          )}
        </div>

        {/* Single deck, shown larger than the grid version */}
        <div className="w-full" style={{ maxWidth: 1280 }}>
          {/* Client name + description, above the deck */}
          <div className="mb-7 text-center">
            <p className="text-white font-medium" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}>
              {deck.name}
            </p>
            <p className="text-sm mt-1" style={{ color: 'rgba(200,190,230,0.75)' }}>
              {deck.industry}
            </p>
            <p
              className="mt-3 mx-auto"
              style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: 1.7, maxWidth: 720 }}
            >
              {deck.description}
            </p>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              padding: 'clamp(10px, 1.4vw, 18px)',
              background: '#111116',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 40px 90px rgba(0,0,0,0.55)',
            }}
          >
            {/* Browser-style dots */}
            <div className="flex items-center gap-2 px-2 pb-3">
              <span className="rounded-full" style={{ width: 11, height: 11, background: '#FF5F57' }} />
              <span className="rounded-full" style={{ width: 11, height: 11, background: '#FEBC2E' }} />
              <span className="rounded-full" style={{ width: 11, height: 11, background: '#28C840' }} />
            </div>

            <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16 / 9', background: '#000' }}>
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={`${deck.id}-${slideIndex}`}
                  src={deck.slides[slideIndex]}
                  alt={`${deck.name} - slide ${slideIndex + 1}`}
                  custom={direction}
                  initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>

              {slideIndex > 0 && (
                <button
                  onClick={prevSlide}
                  aria-label={`Previous slide - ${deck.name}`}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10"
                  style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.92)' }}
                >
                  <ChevronLeft size={24} color="#111" />
                </button>
              )}
              {slideIndex < deck.slides.length - 1 && (
                <button
                  onClick={nextSlide}
                  aria-label={`Next slide - ${deck.name}`}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10"
                  style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.92)' }}
                >
                  <ChevronRight size={24} color="#111" />
                </button>
              )}

              <span
                className="absolute top-4 right-4 rounded-full px-3.5 py-1.5 text-white z-10"
                style={{ background: 'rgba(0,0,0,0.55)', fontSize: 13, fontWeight: 600 }}
              >
                {slideIndex + 1} / {deck.slides.length}
              </span>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-1.5 mt-6 flex-wrap px-2">
            {deck.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > slideIndex ? 1 : -1);
                  setSlideIndex(i);
                }}
                aria-label={`Go to slide ${i + 1} - ${deck.name}`}
                className="rounded-full transition-all"
                style={{
                  width: i === slideIndex ? 20 : 7,
                  height: 7,
                  background: i === slideIndex ? gradientA : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
