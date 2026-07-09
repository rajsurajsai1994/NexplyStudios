import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { DARK_BG_FLAT, glassDifferentiation } from '../lib/brand';

const PROJECTS = [
  {
    title: 'Vivaha Veduka',
    category: 'Logo Design & Brand Identity',
    industry: 'Wedding Planning',
    img: '/portfolio-vivaha-veduka-v2.jpg',
    preSized: true,
  },
  {
    title: 'Spudato',
    category: 'Logo Design & Brand Identity',
    industry: 'Restaurant & F&B',
    img: '/portfolio-spudato-v2.jpg',
    preSized: true,
  },
  {
    title: "Oh so Poppin'",
    category: 'Packaging Design',
    industry: 'FMCG & Food',
    img: '/portfolio-oh-so-poppin.jpg',
    preSized: true,
  },
  {
    title: 'AM Simpkins & Associates',
    category: 'Graphic Design - Ads',
    industry: 'Higher Ed Compliance',
    img: '/portfolio-amsa-v2.jpg',
    preSized: true,
  },
  {
    title: 'PAL Physiotherapy & Sports Rehab',
    category: 'Social Media Marketing',
    industry: 'Healthcare',
    img: '/portfolio-pal-physio-v2.jpg',
    preSized: true,
  },
  {
    title: 'EnlitEDU',
    category: 'Social Media Marketing',
    industry: 'Ed-Tech',
    img: '/portfolio-enlitedu-v2.jpg',
    preSized: true,
  },
  {
    title: 'Beyond Bajji',
    category: 'Print & Publication Design',
    industry: 'Food & Beverage',
    img: '/portfolio-beyond-bajji-v2.jpg',
    preSized: true,
  },
  {
    title: 'Plan Nest',
    category: 'Logo Design & Brand Identity',
    industry: 'Architecture & Interior',
    img: '/portfolio-plan-nest-v2.jpg',
    preSized: true,
  },
];

const CARD_WIDTH = 280;
const CARD_SPACING = 280;

export default function PortfolioSection() {
  const [active, setActive] = useState(Math.floor(PROJECTS.length / 2));

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
      <div
        className="relative flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) 0 clamp(64px, 8vw, 100px)', gap: 56 }}
      >
        {/* Header row - eyebrow + heading on the left, CTA up top on the right */}
        <div
          className="w-full max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          style={{ padding: '0 clamp(16px, 4vw, 40px)' }}
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-2">
              <span
                className="inline-block"
                style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.35)' }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: 'rgba(200,190,230,0.85)' }}
              >
                Selected Work
              </span>
            </div>
            <h2
              className="text-white font-medium"
              style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1.15 }}
            >
              A glimpse of our craft
            </h2>
            <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
              Every project tells a story. Here's a few of ours.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="group/portfolio inline-flex items-center gap-2 self-center md:self-end rounded-full border px-6 py-3 text-sm font-medium text-white transition-all duration-300 shrink-0 hover:border-white/45 hover:bg-white/[0.06] hover:pl-7"
            style={{ borderColor: 'rgba(255,255,255,0.25)' }}
          >
            View Full Portfolio
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/portfolio:translate-x-1"
            />
          </Link>
        </div>

        {/* Carousel - full viewport width, edges fading into the background */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{
            height: 420,
            maskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          {PROJECTS.map((project, i) => {
            // Wrap the offset so cycling past the last card continues smoothly
            // into the first one (shortest path around), instead of jumping
            // backwards across the whole row.
            let offset = i - active;
            const half = PROJECTS.length / 2;
            if (offset > half) offset -= PROJECTS.length;
            if (offset < -half) offset += PROJECTS.length;
            const abs = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={project.title}
                className="absolute rounded-2xl overflow-hidden backdrop-blur-md"
                style={{
                  width: CARD_WIDTH,
                  height: 360,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                  pointerEvents: abs > 2 ? 'none' : 'auto',
                }}
                animate={{
                  x: offset * CARD_SPACING,
                  scale: isActive ? 1 : 0.85,
                  opacity: abs > 2 ? 0 : isActive ? 1 : abs === 1 ? 0.55 : 0.22,
                  zIndex: 10 - abs,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 30%)',
                  }}
                />

                <div className="relative w-full h-full flex flex-col">
                  <div
                    className="relative overflow-hidden flex items-center justify-center"
                    style={{ height: '62%', background: 'rgba(5,6,15,0.6)' }}
                  >
                    {project.preSized ? (
                      // Designed to the exact card slot ratio (1120x892 at
                      // 4x) - shows edge-to-edge with nothing cropped and
                      // no letterboxing needed.
                      <img
                        src={project.img}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    ) : (
                      <>
                        {/* Fallback for images not yet resized to the card
                            slot ratio - blurred copy fills the frame behind
                            the uncropped image on top. */}
                        <img
                          src={project.img}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full"
                          style={{
                            objectFit: 'cover',
                            filter: 'blur(22px) brightness(0.55) saturate(1.15)',
                            transform: 'scale(1.2)',
                          }}
                        />
                        <img
                          src={project.img}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="relative w-full h-full"
                          style={{ objectFit: 'contain', objectPosition: 'center' }}
                        />
                      </>
                    )}
                  </div>

                  {/* Text - industry eyebrow, then category as the lead
                      line, client name as the smaller secondary line. */}
                  <div className="flex-1 flex flex-col justify-center px-6">
                    <span
                      className="font-semibold uppercase"
                      style={{ fontSize: 10.5, letterSpacing: '0.14em', color: 'rgba(200,190,230,0.75)' }}
                    >
                      {project.industry}
                    </span>
                    <h3 className="text-white font-medium text-lg tracking-tight leading-snug mt-1.5">
                      {project.category}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{project.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-4 -mt-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-colors duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
          >
            <ChevronLeft size={18} color="white" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next project"
            className="w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-colors duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
          >
            <ChevronRight size={18} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
