import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ImagePlus, Clock, Users } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { DARK_BG_FLAT, glassDifferentiation, gradientTextStyle, gradientA } from '../lib/brand';

const IMAGES = [
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    bg: '#F4845F',
    panel: '#F79B7F',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    bg: '#6BBF7A',
    panel: '#85CC92',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
    bg: '#E882B4',
    panel: '#ED9DC4',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
  },
];

const EASE = 'cubic-bezier(0.4,0,0.2,1)';
const DURATION = 650;

type Role = 'center' | 'left' | 'right' | 'back';

// Mapped to IMAGES by index/color: 0=orange, 1=green, 2=pink, 3=blue.
const TEAM_BY_COLOR = [
  { name: 'Sri Sai Paluri', role: 'Business Development Head', experience: '30+ years experience', photo: '/photo-srisai.png' },
  { name: 'Sai Priya Bandi', role: 'Marketing, Lead Designer', experience: '', photo: '/photo-saipriya.png' },
  { name: 'Hanish Sara', role: 'Development Lead', experience: '5+ years experience', photo: '/photo-hanish.png' },
  { name: 'Suraj Sai Paluri', role: 'Product Design/Strategist & Creative Head', experience: '12+ years experience', photo: '/photo-suraj.png' },
];

const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")";

export default function ToonhubSection() {
  const [view, setView] = useState<'carousel' | 'grid'>('grid');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lockRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);

  useEffect(() => () => clearTimeout(lockRef.current), []);

  const navigate = (dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (dir === 'next' ? (prev + 1) % 4 : (prev + 3) % 4));
    lockRef.current = setTimeout(() => setIsAnimating(false), DURATION);
  };

  const center = activeIndex;
  const left = (activeIndex + 3) % 4;
  const right = (activeIndex + 1) % 4;
  const back = (activeIndex + 2) % 4;

  const roleFor = (i: number): Role =>
    i === center ? 'center' : i === left ? 'left' : i === right ? 'right' : i === back ? 'back' : 'back';

  const styleForRole = (role: Role) => {
    switch (role) {
      case 'center':
        return {
          left: '50%',
          height: isMobile ? '60%' : '92%',
          bottom: isMobile ? '22%' : '0%',
          scale: isMobile ? 1.25 : 1.68,
          opacity: 1,
          blur: 0,
          zIndex: 20,
        };
      case 'left':
        return {
          left: isMobile ? '20%' : '30%',
          height: isMobile ? '16%' : '28%',
          bottom: isMobile ? '32%' : '12%',
          scale: 1,
          opacity: 0.85,
          blur: 2,
          zIndex: 10,
        };
      case 'right':
        return {
          left: isMobile ? '80%' : '70%',
          height: isMobile ? '16%' : '28%',
          bottom: isMobile ? '32%' : '12%',
          scale: 1,
          opacity: 0.85,
          blur: 2,
          zIndex: 10,
        };
      case 'back':
        return {
          left: '50%',
          height: isMobile ? '13%' : '22%',
          bottom: isMobile ? '32%' : '12%',
          scale: 1,
          opacity: 1,
          blur: 4,
          zIndex: 5,
        };
    }
  };

  const bgColor = view === 'carousel' ? IMAGES[activeIndex].bg : DARK_BG_FLAT;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: bgColor,
        transition: `background-color ${DURATION}ms ${EASE}`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        className="relative w-full"
        style={{
          height: isMobile ? (view === 'grid' ? 'auto' : 780) : '85vh',
          overflow: isMobile && view === 'grid' ? 'visible' : 'hidden',
        }}
      >
        <AnimatePresence mode="wait">
          {view === 'carousel' ? (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              {/* Grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: 50, opacity: 0.4, backgroundImage: GRAIN_BG, backgroundSize: '200px 200px' }}
              />

              {/* Giant ghost text */}
              <div
                className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
                style={{
                  zIndex: 2,
                  top: '8%',
                  fontFamily: "'Anton', sans-serif",
                  fontSize: isMobile ? 'clamp(26px, 11vw, 52px)' : 'clamp(52px, 15vw, 220px)',
                  fontWeight: 900,
                  color: '#fff',
                  opacity: 1,
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                MEET OUR TEAM
              </div>

              {/* Carousel */}
              <div className="absolute inset-0" style={{ zIndex: 3 }}>
                {IMAGES.map((item, i) => {
                  const s = styleForRole(roleFor(i));
                  return (
                    <div
                      key={item.src}
                      style={{
                        position: 'absolute',
                        left: s.left,
                        bottom: s.bottom,
                        height: s.height,
                        aspectRatio: '0.6 / 1',
                        transform: `translateX(-50%) scale(${s.scale})`,
                        filter: `blur(${s.blur}px)`,
                        opacity: s.opacity,
                        zIndex: s.zIndex,
                        transition: `transform ${DURATION}ms ${EASE}, filter ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}, left ${DURATION}ms ${EASE}`,
                        willChange: 'transform, filter, opacity',
                      }}
                    >
                      <img
                        src={item.src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Bottom-left profile card + nav buttons */}
              <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-24" style={{ zIndex: 60 }}>
                <div
                  className="relative rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col"
                  style={{
                    width: isMobile ? 190 : 290,
                    height: isMobile ? 235 : 340,
                    border: '1px solid rgba(255,255,255,0.4)',
                    background: 'rgba(255,255,255,0.1)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), 0 12px 32px rgba(0,0,0,0.22)',
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%)' }}
                  />

                  <div
                    className="relative flex items-center justify-center shrink-0 overflow-hidden"
                    style={{ height: '60%', background: 'rgba(255,255,255,0.06)' }}
                  >
                    {TEAM_BY_COLOR[activeIndex].photo ? (
                      <img
                        src={TEAM_BY_COLOR[activeIndex].photo}
                        alt={TEAM_BY_COLOR[activeIndex].name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      />
                    ) : (
                      <ImagePlus size={isMobile ? 22 : 30} color="rgba(255,255,255,0.7)" strokeWidth={1.5} />
                    )}
                  </div>

                  <div
                    className="relative flex-1 flex flex-col justify-center px-5"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.22)' }}
                  >
                    <p
                      className={isMobile ? 'text-sm font-bold uppercase tracking-wide truncate' : 'text-lg font-bold uppercase tracking-wide truncate'}
                      style={{ color: '#fff', opacity: 0.95, letterSpacing: '0.02em' }}
                    >
                      {TEAM_BY_COLOR[activeIndex].name}
                    </p>
                    <p className={isMobile ? 'text-xs mt-1' : 'text-base mt-1.5'} style={{ color: '#fff', opacity: 0.8, lineHeight: 1.4 }}>
                      {TEAM_BY_COLOR[activeIndex].role}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2.5">
                      <Clock size={isMobile ? 13 : 16} color="rgba(255,255,255,0.6)" />
                      <span className={isMobile ? 'text-xs' : 'text-base'} style={{ color: 'rgba(255,255,255,0.65)' }}>
                        {TEAM_BY_COLOR[activeIndex].experience || 'Nexply Studios'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-8">
                  <button
                    onClick={() => navigate('prev')}
                    aria-label="Previous"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-105"
                    style={{ background: 'transparent', border: '2px solid #fff' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <ArrowLeft size={15} color="#fff" strokeWidth={2.25} />
                  </button>
                  <button
                    onClick={() => navigate('next')}
                    aria-label="Next"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-105"
                    style={{ background: 'transparent', border: '2px solid #fff' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <ArrowRight size={15} color="#fff" strokeWidth={2.25} />
                  </button>
                </div>
              </div>

              {/* Bottom-right toggle - switches to the professional grid view */}
              <button
                onClick={() => setView('grid')}
                className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 flex items-center uppercase transition-opacity duration-200"
                style={{
                  zIndex: 60,
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 'clamp(18px, 3.4vw, 44px)',
                  fontWeight: 400,
                  color: '#fff',
                  opacity: 0.95,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.95')}
              >
                BACK TO BUSINESS
                <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 ml-2" strokeWidth={2.25} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={isMobile ? 'relative w-full' : 'absolute inset-0 overflow-y-auto'}
            >
              <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.06)')} />

              <div
                className={`relative z-10 flex flex-col items-center justify-center ${isMobile ? '' : 'h-full'}`}
                style={{ padding: 'clamp(32px, 5vw, 56px) clamp(16px, 4vw, 40px)' }}
              >
                <div className="flex flex-col items-center text-center gap-3 mb-10">
                  <h2 className="text-white font-medium" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)' }}>
                    The people <span style={gradientTextStyle}>behind the work</span>
                  </h2>
                  <p className="max-w-lg" style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
                    A small team that moves fast, cares about the details, and treats every brand
                    like it's our own.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1160px]">
                  {TEAM_BY_COLOR.map((member) => (
                    <div
                      key={member.name}
                      className="relative rounded-2xl overflow-hidden backdrop-blur-xl mx-auto"
                      style={{
                        width: '100%',
                        maxWidth: 260,
                        height: isMobile ? 250 : 300,
                        border: '1px solid rgba(255,255,255,0.16)',
                        background: 'rgba(255,255,255,0.05)',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 12px 28px rgba(0,0,0,0.25)',
                      }}
                    >
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)' }}
                      />
                      <div
                        className="relative flex items-center justify-center shrink-0 overflow-hidden"
                        style={{ height: '58%', background: 'rgba(255,255,255,0.04)' }}
                      >
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={member.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full"
                            style={{ objectFit: 'cover', objectPosition: 'center top' }}
                          />
                        ) : (
                          <Users size={26} color="rgba(255,255,255,0.5)" strokeWidth={1.5} />
                        )}
                      </div>
                      <div
                        className="relative flex flex-col justify-center px-4"
                        style={{ height: '42%', borderTop: '1px solid rgba(255,255,255,0.14)' }}
                      >
                        <p className="text-white font-medium text-sm truncate">{member.name}</p>
                        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {member.role}
                        </p>
                        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          {member.experience || 'Nexply Studios'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hero-cta-border-wrap mt-10 inline-block">
                  <button
                    onClick={() => setView('carousel')}
                    className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 overflow-hidden"
                    style={{ background: '#0b0a1f' }}
                  >
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                      style={{ background: gradientA }}
                    />
                    <span className="relative z-10 text-white text-[15px] font-medium">
                      Look at the playful side of our team
                    </span>
                    <ArrowRight
                      size={18}
                      className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
