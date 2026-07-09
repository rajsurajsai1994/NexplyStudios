import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { DARK_BG_GRADIENT, gradientTextStyle } from '../lib/brand';
import { FAQS } from '../lib/faqs';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  // Optional per-page FAQ list. Falls back to the generic site-wide FAQS
  // (used on Home/About/Portfolio) when not provided, so existing callers
  // don't need to change.
  items?: FAQItem[];
}

export default function FAQSection({ items = FAQS }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            Frequently asked <span style={gradientTextStyle}>questions</span>
          </h2>
          <p className="max-w-2xl" style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Answers to the things people usually ask before reaching out.
          </p>
        </div>

        <div className="w-full max-w-[920px] flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl backdrop-blur-md overflow-hidden"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <span className="text-white font-medium" style={{ fontSize: 16 }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="rgba(255,255,255,0.6)"
                    className="shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="px-6 pb-5"
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6 }}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
