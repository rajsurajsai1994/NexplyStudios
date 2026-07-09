import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { DARK_BG_FLAT, glassDifferentiation, SERVICE_ACCENT_FALLBACK } from '../lib/brand';

export default function ShowreelSection() {
  return (
    <section className="relative" style={{ background: DARK_BG_FLAT }}>
      <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(255,157,60,0.05)')} />
      <div
        className="relative z-10 w-full max-w-[1240px] mx-auto"
        style={{ padding: 'clamp(48px, 6vw, 80px) clamp(16px, 4vw, 40px)' }}
      >
        <button
          className="group relative w-full rounded-3xl overflow-hidden backdrop-blur-md flex items-center justify-center"
          style={{
            height: 'clamp(280px, 32vw, 460px)',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          {/* Diagonal wash inside the glass card */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(115deg, rgba(255,157,60,0.10) 0%, transparent 32%, transparent 68%, rgba(124,108,255,0.10) 100%)',
            }}
          />
          {/* Faint top sheen, matching the rest of the glass cards */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 30%)' }}
          />

          <div className="relative flex flex-col items-center gap-5">
            <div className="relative flex items-center justify-center">
              {/* Pulsing ring */}
              <motion.span
                className="absolute rounded-full"
                style={{ width: 96, height: 96, border: `1px solid ${SERVICE_ACCENT_FALLBACK}` }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{ background: SERVICE_ACCENT_FALLBACK, boxShadow: '0 0 40px rgba(124,108,255,0.5)' }}
              >
                <Play size={26} color="#0d0e1f" fill="#0d0e1f" style={{ marginLeft: 3 }} />
              </div>
            </div>
            <span className="text-sm tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Upload your agency showreel here
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
