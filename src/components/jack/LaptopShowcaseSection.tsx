import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';

export interface LaptopScreen {
  src: string;
  label: string;
  // 'fill' for landscape desktop-app screenshots (object-cover, fills the
  // whole screen), 'contain' for portrait/card screenshots (letterboxed on
  // the app's own light background so nothing gets cropped or stretched).
  fit?: 'fill' | 'contain';
}

interface LaptopShowcaseSectionProps {
  heading?: string;
  subtext?: string;
  screens: LaptopScreen[];
}

// A simple two-piece (base + lid) laptop built from CSS, so the lid can
// genuinely hinge open/closed via a 3D rotateX tied to scroll progress -
// a single flat mockup photo can't do this since it has no separate lid
// layer to rotate independently of the base.
export default function LaptopShowcaseSection({
  heading = 'Our Client Works',
  subtext,
  screens,
}: LaptopShowcaseSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  // Lid rotates from closed (90deg - folded flat, hidden) to fully open
  // (0deg - upright, facing the viewer) over the first 55% of the pinned
  // scroll distance, then stays open while screens are browsable.
  const rotateX = useTransform(scrollYProgress, [0, 0.55], [92, 0]);
  const lidShadow = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.28, 0.55], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.28, 0.55], [24, 0]);

  const [active, setActive] = useState(0);
  const activeScreen = screens[active] ?? screens[0];

  return (
    <section
      id="client-works"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14"
      style={{ background: DARK_BG_GRADIENT }}
    >
      <div className="flex flex-col items-center text-center gap-3 pt-20 pb-2 px-5">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          {heading}
        </h2>
        {subtext && (
          <p style={{ color: 'rgb(169, 151, 206)', maxWidth: 560, fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            {subtext}
          </p>
        )}
      </div>

      {/* Pinned scroll region - tall enough to give the open animation and
          the browsing state each real scroll distance to breathe. */}
      <div ref={containerRef} style={{ height: '230vh' }} className="relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 w-full max-w-[1260px]">
            {/* ---- Laptop ---- */}
            <div className="shrink-0 mx-auto" style={{ width: 'min(90vw, 620px)' }}>
              <div style={{ perspective: 2200 }}>
                {/* Lid: bezel + screen, hinges open/closed via rotateX */}
                <motion.div
                  style={{
                    rotateX,
                    transformOrigin: 'bottom center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative"
                >
                  <div
                    className="relative rounded-t-[18px] overflow-hidden"
                    style={{
                      padding: 'clamp(8px, 1.4vw, 14px)',
                      background: 'linear-gradient(155deg, #3a3d46 0%, #1b1c22 55%, #0c0d10 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* Camera notch */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 rounded-full"
                      style={{ top: 'clamp(3px, 0.7vw, 6px)', width: 6, height: 6, background: '#050505' }}
                    />
                    <div
                      className="relative w-full rounded-[6px] overflow-hidden bg-white"
                      style={{ aspectRatio: '16 / 10' }}
                    >
                      <img
                        key={activeScreen.src}
                        src={activeScreen.src}
                        alt={activeScreen.label}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full ${activeScreen.fit === 'contain' ? 'object-contain bg-[#eef2fb]' : 'object-cover'}`}
                      />
                    </div>
                  </div>
                  {/* Soft shadow the lid casts as it swings open */}
                  <motion.div
                    className="pointer-events-none absolute -inset-x-4 -bottom-2 h-8 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.45)', filter: 'blur(18px)', opacity: lidShadow }}
                  />
                </motion.div>

                {/* Base: hinge strip + keyboard deck, stays put */}
                <div
                  style={{
                    height: 'clamp(9px, 1.6vw, 14px)',
                    background: 'linear-gradient(180deg, #4a4d56, #23242a)',
                    borderRadius: '2px 2px 0 0',
                  }}
                />
                <div
                  className="relative"
                  style={{
                    height: 'clamp(14px, 2.4vw, 20px)',
                    background: 'linear-gradient(180deg, #e4e7ec 0%, #c3c8d1 55%, #aab0bb 100%)',
                    borderRadius: '0 0 12px 12px',
                    boxShadow: '0 14px 34px rgba(0,0,0,0.45)',
                  }}
                >
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-0 rounded-b-md"
                    style={{ width: '14%', height: '55%', background: 'rgba(0,0,0,0.14)' }}
                  />
                </div>
              </div>
            </div>

            {/* ---- Thumbnail gallery ---- */}
            <motion.div
              style={{ opacity: contentOpacity, y: contentY }}
              className="flex lg:flex-col gap-3 w-full lg:w-auto overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
            >
              {screens.map((screen, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={screen.src}
                    onClick={() => setActive(i)}
                    className="relative shrink-0 text-left rounded-2xl overflow-hidden group"
                    style={{
                      width: 'clamp(140px, 16vw, 190px)',
                      border: isActive ? '2px solid transparent' : '1px solid rgba(255,255,255,0.14)',
                      backgroundImage: isActive ? gradientA : undefined,
                      backgroundOrigin: 'border-box',
                      padding: isActive ? 2 : 0,
                    }}
                  >
                    <div className="rounded-[14px] overflow-hidden bg-[#0d0e1f]">
                      <div className="relative w-full" style={{ aspectRatio: '16 / 10', background: '#eef2fb' }}>
                        <img
                          src={screen.src}
                          alt={screen.label}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full ${screen.fit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity ${
                            isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                          }`}
                        />
                      </div>
                      <div className="px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <p
                          className="text-xs font-medium truncate"
                          style={isActive ? gradientTextStyle : { color: 'rgba(255,255,255,0.75)' }}
                        >
                          {screen.label}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
