import { CheckCircle2 } from 'lucide-react';
import { DARK_BG_GRADIENT } from '../../lib/brand';
import type { ServicePageBody } from '../../lib/servicePages';
import FadeIn from './FadeIn';

interface ServiceBodySectionProps {
  body: ServicePageBody;
}

// Unique, per-service body copy - the intro paragraph and "what's included"
// points come from servicePages.ts and differ for every service slug, so
// each page carries genuinely distinct content rather than shared boilerplate.
export default function ServiceBodySection({ body }: ServiceBodySectionProps) {
  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(56px, 7vw, 90px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-4 mb-14" y={16}>
          <div style={{ maxWidth: 760 }} className="flex flex-col items-center gap-4">
            <h2
              className="text-white font-medium"
              style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.25 }}
            >
              {body.heading}
            </h2>
            <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.7 }}>
              {body.intro}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1060px]">
          {body.points.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.08} y={20}>
              <div
                className="relative rounded-2xl backdrop-blur-md p-7 h-full"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 30%)' }}
                />
                <CheckCircle2 size={22} color="#A78BFA" className="relative mb-4" />
                <h3 className="relative text-white font-medium text-lg mb-2">{point.title}</h3>
                <p className="relative" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14.5, lineHeight: 1.65 }}>
                  {point.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
