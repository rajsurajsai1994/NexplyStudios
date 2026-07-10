import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';

interface Deck {
  id: string;
  name: string;
  industry: string;
  description: string;
  slides: string[];
}

// The one deck shown big, full-width, above the rest - the client's
// current, most complete presentation.
const FEATURED_DECK: Deck = {
  id: 'beyond-bajji-franchise',
  name: 'Beyond Bajji - Franchise Pitch',
  industry: 'Food & Beverage - Franchising',
  description:
    "A 13-slide franchise pitch deck for Beyond Bajji - vision, unit economics, set-up costs, ROI timelines, and launch support, all built to move a prospective franchisee toward signing.",
  slides: Array.from({ length: 13 }, (_, i) => `/decks/beyondbajji-franchise-slide-${i + 1}.jpg`),
};

// Real decks we designed - each `slides` array is every slide, in order,
// rendered straight from the actual .pptx file. Agile is kept last since
// the newer decks lead.
const DECKS: Deck[] = [
  {
    id: 'pal-physio',
    name: 'PAL Physiotherapy',
    industry: 'Healthcare - Networking Presentation',
    description: 'A 12-slide Ekam Alliance presentation deck for PAL Physiotherapy & Sports Rehab, built to introduce the brand and its offerings to a networking audience.',
    slides: Array.from({ length: 12 }, (_, i) => `/decks/pal-physio-slide-${i + 1}.jpg`),
  },
  {
    id: 'ardent',
    name: 'Ardent',
    industry: 'Clinical Research Services - Company Profile',
    description: 'A 43-slide company profile deck covering Ardent\u2019s capabilities, offerings, and credentials for client and partner conversations.',
    slides: Array.from({ length: 43 }, (_, i) => `/decks/ardent-slide-${i + 1}.jpg`),
  },
  {
    id: 'agile',
    name: 'Agile Global Solutions',
    industry: 'Workday Consulting - Company Overview',
    description: 'An 8-slide company overview deck for a boutique Workday consulting firm - built to open client and partner conversations.',
    slides: Array.from({ length: 8 }, (_, i) => `/decks/agile-slide-${i + 1}.jpg`),
  },
];

function DeckCard({ deck, size = 'normal' }: { deck: Deck; size?: 'normal' | 'large' }) {
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

  const isLarge = size === 'large';

  // Featured card: name is the big line, industry the small caption below
  // it (e.g. "Beyond Bajji - Franchise Pitch" / "Food & Beverage - Franchising").
  // Grid cards: inverted - the descriptive "<sector> - <deck type>" line
  // leads big, with the short brand name as a small caption underneath.
  const bigText = isLarge ? deck.name : deck.industry;
  const smallText = isLarge ? deck.industry : deck.name;

  const metaBlock = (
    <div className={isLarge ? 'text-center mb-7' : 'mt-5 px-1'}>
      {isLarge && (
        <span
          className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-3"
          style={{ background: gradientA, color: 'white' }}
        >
          Featured Deck
        </span>
      )}
      <p className={isLarge ? 'text-white font-medium block' : 'text-white text-base font-medium'} style={isLarge ? { fontSize: 'clamp(18px, 1.8vw, 22px)' } : undefined}>
        {bigText}
      </p>
      <p className={isLarge ? 'text-sm mt-1' : 'text-xs mt-0.5'} style={{ color: 'rgba(200,190,230,0.75)' }}>
        {smallText}
      </p>
      <p
        className={isLarge ? 'mt-3 mx-auto' : 'mt-2'}
        style={{
          color: 'rgb(169, 151, 206)',
          fontSize: isLarge ? 'clamp(14px, 1.1vw, 16px)' : 14,
          lineHeight: isLarge ? 1.7 : 1.6,
          maxWidth: isLarge ? 720 : undefined,
        }}
      >
        {deck.description}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      {isLarge && metaBlock}

      <div
        className="relative overflow-hidden"
        style={{
          padding: isLarge ? 'clamp(10px, 1.4vw, 18px)' : 10,
          borderRadius: isLarge ? 16 : 12,
          background: '#111116',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: isLarge ? '0 40px 90px rgba(0,0,0,0.55)' : '0 30px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Browser-style dots */}
        <div className="flex items-center gap-1.5 px-1.5 pb-2.5" style={isLarge ? { gap: 8, paddingBottom: 12 } : undefined}>
          <span className="rounded-full" style={{ width: isLarge ? 11 : 8, height: isLarge ? 11 : 8, background: '#FF5F57' }} />
          <span className="rounded-full" style={{ width: isLarge ? 11 : 8, height: isLarge ? 11 : 8, background: '#FEBC2E' }} />
          <span className="rounded-full" style={{ width: isLarge ? 11 : 8, height: isLarge ? 11 : 8, background: '#28C840' }} />
        </div>

        <div className="relative overflow-hidden" style={{ borderRadius: isLarge ? 10 : 6, aspectRatio: '16 / 9', background: '#000' }}>
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
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10"
              style={{ width: isLarge ? 44 : 32, height: isLarge ? 44 : 32, background: 'rgba(255,255,255,0.9)' }}
            >
              <ChevronLeft size={isLarge ? 24 : 18} color="#111" />
            </button>
          )}
          {slideIndex < deck.slides.length - 1 && (
            <button
              onClick={nextSlide}
              aria-label={`Next slide - ${deck.name}`}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10"
              style={{ width: isLarge ? 44 : 32, height: isLarge ? 44 : 32, background: 'rgba(255,255,255,0.9)' }}
            >
              <ChevronRight size={isLarge ? 24 : 18} color="#111" />
            </button>
          )}

          <span
            className="absolute top-2.5 right-2.5 rounded-full text-white z-10"
            style={{
              padding: isLarge ? '6px 14px' : '4px 10px',
              background: 'rgba(0,0,0,0.55)',
              fontSize: isLarge ? 13 : 11,
              fontWeight: 600,
            }}
          >
            {slideIndex + 1} / {deck.slides.length}
          </span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1 mt-4 flex-wrap px-2" style={isLarge ? { gap: 6, marginTop: 24 } : undefined}>
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
              width: i === slideIndex ? (isLarge ? 20 : 14) : (isLarge ? 7 : 5),
              height: isLarge ? 7 : 5,
              background: i === slideIndex ? gradientA : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>

      {!isLarge && metaBlock}
    </div>
  );
}


export default function PitchDeckShowcase() {
  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 80px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-14" style={{ maxWidth: 1100 }}>
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'rgba(200,190,230,0.75)' }}
          >
            Real Client Decks
          </span>
          <h2
            className="text-white font-medium whitespace-normal lg:whitespace-nowrap"
            style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}
          >
            Click through it <span style={gradientTextStyle}>slide by slide.</span>
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Real presentation decks we designed - browse them the same way a client would in the
            room.
          </p>
        </div>

        {/* Featured deck - single row, bigger than the grid below */}
        <div className="w-full mb-20" style={{ maxWidth: 1280 }}>
          <DeckCard deck={FEATURED_DECK} size="large" />
        </div>

        {/* Rest of the decks, in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full" style={{ maxWidth: 1100 }}>
          {DECKS.map((deck) => (
            <DeckCard key={deck.id} deck={deck} />
          ))}
        </div>
      </div>
    </section>
  );
}
