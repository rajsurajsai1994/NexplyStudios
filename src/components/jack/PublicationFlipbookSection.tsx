import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';

interface Spread {
  label: string;
  panels: [string, string, string];
}

// Real tri-fold brochure we designed for EnlitEDU/LioraAI - each spread is
// the 3 physical panels of one side (outside cover / inside spread), split
// into separate images so they can hinge independently, accordion-style,
// instead of the whole sheet flipping as one flat card.
const SPREADS: Spread[] = [
  {
    label: 'Front Cover',
    panels: [
      '/flipbook-enlitedu-front-panel1.jpg',
      '/flipbook-enlitedu-front-panel2.jpg',
      '/flipbook-enlitedu-front-panel3.jpg',
    ],
  },
  {
    label: 'Inside Spread',
    panels: [
      '/flipbook-enlitedu-back-panel1.jpg',
      '/flipbook-enlitedu-back-panel2.jpg',
      '/flipbook-enlitedu-back-panel3.jpg',
    ],
  },
];

const FOLD_MS = 420;

export default function PublicationFlipbookSection() {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [displayedPanels, setDisplayedPanels] = useState(SPREADS[0].panels);
  const [open, setOpen] = useState(true);
  const [busy, setBusy] = useState(false);

  const goTo = (nextIndex: number) => {
    if (busy || nextIndex === spreadIndex || nextIndex < 0 || nextIndex >= SPREADS.length) return;
    setBusy(true);
    setOpen(false); // fold closed
    window.setTimeout(() => {
      setDisplayedPanels(SPREADS[nextIndex].panels);
      setSpreadIndex(nextIndex);
      setOpen(true); // unfold open onto the new spread
      window.setTimeout(() => setBusy(false), FOLD_MS + 80);
    }, FOLD_MS);
  };

  const isFront = spreadIndex === 0;

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
            Unfold it <span style={gradientTextStyle}>like they did.</span>
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            A real tri-fold brochure we designed for EnlitEDU / LioraAI - each panel hinges open
            just like the physical piece.
          </p>
        </div>

        {/* Two columns: brochure on the left, Board Design piece on the right */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16" style={{ maxWidth: 1100 }}>
        {/* The brochure, sitting on a soft "table" shadow */}
        <div className="relative flex flex-col items-center shrink-0" style={{ maxWidth: 780 }}>
          <div
            className="relative w-full flex items-center justify-center"
            style={{ perspective: 2600, minHeight: 'clamp(210px, 26vw, 310px)' }}
          >
            {/* Ambient shadow under the brochure */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                bottom: -10,
                width: '70%',
                height: 36,
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            {/* Fixed-width wrapper so the 3-panel assembly (panels 2 & 3 are
                absolutely positioned relative to their hinge parent) centers
                correctly as a whole, rather than only panel 1 being counted. */}
            <div
              className="relative"
              style={{ width: 'calc(clamp(100px, 13vw, 155px) * 3)', aspectRatio: '3579 / 2551' }}
            >
              {/* Panel 1 - anchor, doesn't hinge */}
              <motion.div
                className="absolute left-0 top-0"
                style={{
                  width: 'clamp(100px, 13vw, 155px)',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'right center',
                  boxShadow: '-6px 0 20px rgba(0,0,0,0.35)',
                  zIndex: 3,
                }}
              >
              <div className="absolute inset-0 rounded-l-lg overflow-hidden">
              <img
                src={displayedPanels[0]}
                alt={`${SPREADS[spreadIndex].label} - panel 1`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0"
                style={{ width: 14, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.18))' }}
              />
              </div>

              {/* Panel 2 - hinges off panel 1's right edge */}
              <motion.div
                className="absolute top-0"
                style={{
                  left: '100%',
                  width: 'clamp(100px, 13vw, 155px)',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'left center',
                  zIndex: 2,
                }}
                animate={{ rotateY: open ? 0 : -158 }}
                transition={{ duration: FOLD_MS / 1000, ease: [0.45, 0.05, 0.15, 1], delay: open ? 0.09 : 0 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                <img
                  src={displayedPanels[1]}
                  alt={`${SPREADS[spreadIndex].label} - panel 2`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0"
                  style={{ width: 12, background: 'linear-gradient(90deg, rgba(0,0,0,0.16), transparent)' }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0"
                  style={{ width: 12, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.16))' }}
                />
                </div>

                {/* Panel 3 - hinges off panel 2's right edge */}
                <motion.div
                  className="absolute top-0"
                  style={{
                    left: '100%',
                    width: 'clamp(100px, 13vw, 155px)',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'left center',
                  }}
                  animate={{ rotateY: open ? 0 : 158 }}
                  transition={{ duration: FOLD_MS / 1000, ease: [0.45, 0.05, 0.15, 1], delay: open ? 0.18 : 0.09 }}
                >
                  <div className="absolute inset-0 rounded-r-lg overflow-hidden">
                  <img
                    src={displayedPanels[2]}
                    alt={`${SPREADS[spreadIndex].label} - panel 3`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0"
                    style={{ width: 12, background: 'linear-gradient(90deg, rgba(0,0,0,0.16), transparent)' }}
                  />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-5 mt-16">
            <button
              onClick={() => goTo(0)}
              disabled={busy || isFront}
              aria-label="Previous page"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30"
              style={{ border: '1px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.04)' }}
            >
              <ChevronLeft size={18} color="white" />
            </button>

            <div className="flex flex-col items-center gap-1.5" style={{ minWidth: 140 }}>
              <span className="text-white text-sm font-medium">{SPREADS[spreadIndex].label}</span>
              <div className="flex items-center gap-1.5">
                {SPREADS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    disabled={busy}
                    aria-label={`Go to ${SPREADS[i].label}`}
                    className="rounded-full transition-all"
                    style={{
                      width: i === spreadIndex ? 18 : 6,
                      height: 6,
                      background: i === spreadIndex ? gradientA : 'rgba(255,255,255,0.25)',
                    }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => goTo(1)}
              disabled={busy || !isFront}
              aria-label="Next page"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30"
              style={{ border: '1px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.04)' }}
            >
              <ChevronRight size={18} color="white" />
            </button>
          </div>
        </div>

        {/* Board Design - real signage piece, sitting beside the brochure */}
        <div className="w-full flex justify-center lg:pt-2" style={{ maxWidth: 420 }}>
          <div
            className="rounded-2xl overflow-hidden backdrop-blur-md w-full"
            style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.03)', boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}
          >
            <img
              src="/clientwork-kanchukota-board.jpg"
              alt="Board Design - Kanchukota Restaurant Signage"
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
            <div className="px-5 py-4">
              <p className="text-white font-medium">Board Design</p>
              <p className="text-sm mt-0.5" style={{ color: 'rgba(200,190,230,0.75)' }}>
                Kanchukota - Restaurant Signage
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
