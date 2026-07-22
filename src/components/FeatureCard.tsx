import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  delay: number;
  className?: string;
  href?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  gradient,
  delay,
  className = '',
  href,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className={`relative flex flex-col justify-start items-start w-full sm:max-w-[260px] md:max-w-[300px] group sm:mx-auto ${className}`}
    >
      {/* Minimal, near-flat glass panel - subtle border, no color bloom.
          min-height (not a fixed height) so the card grows to fit whatever
          content it's given - a long description or a two-line title can
          never push the CTA past the card's edge. */}
      <motion.div
        className="relative self-stretch min-h-[300px] md:min-h-[340px] rounded-2xl z-10 overflow-hidden backdrop-blur-md"
        style={{
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(255,255,255,0.03)',
        }}
        animate={{
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.35)',
          borderColor: 'rgba(255,255,255,0.12)',
        }}
        whileHover={{
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 24px rgba(255,255,255,0.08), 0 8px 24px rgba(0,0,0,0.35)',
          borderColor: 'rgba(255,255,255,0.32)',
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Faint top edge highlight, sells the glass pane */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 30%)',
          }}
        />

        <div className="relative w-full h-full p-7 flex flex-col">
          {/* Icon badge - fixed margin below it, so the gap to the title
              is identical on every card regardless of description length. */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mb-5"
            style={{ background: gradient }}
          >
            <span className="text-white [&>svg]:w-5 [&>svg]:h-5">{icon}</span>
          </div>

          <div>
            <h3 className="text-white font-medium text-xl mb-2 tracking-tight">{title}</h3>
            <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
              {description}
            </p>
          </div>

          {/* CTA - mt-auto pushes it to the bottom when the card has extra
              room (e.g. stretched to match a taller neighbor in the same
              grid row), but pt-5 guarantees a minimum gap above it always,
              so it never sits flush against the description or the edge. */}
          <div className="mt-auto pt-5">
            <Link
              to={href ?? '#'}
              className="group/cta inline-flex items-center gap-1.5 self-start rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06] hover:pl-5"
              style={{
                borderColor: 'rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <span className="transition-colors duration-300 group-hover/cta:text-white">
                Learn more
              </span>
              <ChevronRight
                size={14}
                className="transition-transform duration-300 group-hover/cta:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
