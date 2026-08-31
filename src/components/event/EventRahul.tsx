import { useState } from 'react';
import { BadgeCheck, MapPin, Briefcase, ImagePlus } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import { DARK_BG_GRADIENT } from '../../lib/brand';
import { RAHUL, eventGradientText } from '../../lib/eventManagement';

function RahulPortrait() {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: '4/5', borderRadius: 24, border: '1px solid rgba(255,255,255,0.14)' }}
    >
      {!failed ? (
        <img
          src={RAHUL.photoPlaceholder}
          alt={`${RAHUL.name} — ${RAHUL.role}`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4"
          style={{
            color: 'rgba(255,255,255,0.55)',
            background:
              'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 10px, rgba(255,255,255,0.05) 10px 20px)',
          }}
        >
          <ImagePlus size={20} />
          <span className="text-[11px] leading-snug">Rahul Munigala portrait — {RAHUL.photoPlaceholder}</span>
        </div>
      )}
    </div>
  );
}

const CREDENTIALS = [
  'Event planning',
  'On-ground execution',
  'Event marketing',
  'Vendor management',
  'Client coordination',
  'Business development',
];

export default function EventRahul() {
  return (
    <section id="event-rahul" className="relative overflow-hidden" style={{ background: DARK_BG_GRADIENT, scrollMarginTop: 90 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 30%, rgba(244,63,126,0.12), transparent 70%)' }}
      />

      <div
        className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] items-center gap-14 lg:gap-16"
        style={{ maxWidth: 1200, padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        {/* portrait */}
        <FadeIn y={20} duration={0.6}>
          <div className="relative mx-auto" style={{ maxWidth: 400 }}>
            <RahulPortrait />
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 backdrop-blur-md flex items-center gap-2 whitespace-nowrap"
              style={{ border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(13,14,31,0.8)' }}
            >
              <BadgeCheck size={14} style={{ color: '#F5B841' }} />
              <span className="text-[12px] text-white/85 font-medium">
                {RAHUL.yearsExperience} in the event industry
              </span>
            </div>
          </div>
        </FadeIn>

        {/* bio */}
        <div>
          <FadeIn y={16}>
            <h2
              className="text-white font-medium"
              style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.2 }}
            >
              Meet <span style={eventGradientText}>{RAHUL.name}</span>
            </h2>
            <p className="mt-1 text-[14px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {RAHUL.role} · {RAHUL.company}
            </p>
          </FadeIn>

          <div className="mt-6 flex flex-col gap-4">
            {RAHUL.longBio.map((para, i) => (
              <FadeIn key={i} delay={0.05 + i * 0.06} y={14}>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(14px, 1.05vw, 16px)', lineHeight: 1.7 }}>
                  {para}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.25} y={14}>
            <div className="mt-6 flex flex-wrap gap-2">
              {CREDENTIALS.map((c) => (
                <span
                  key={c}
                  className="text-[12px] rounded-full px-3 py-1.5"
                  style={{ border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.75)' }}
                >
                  {c}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.32} y={14}>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span className="flex items-center gap-2">
                <MapPin size={14} style={{ color: '#F43F7E' }} />
                Events executed across India
              </span>
              <span className="flex items-center gap-2">
                <Briefcase size={14} style={{ color: '#F5B841' }} />
                Now focused only on event-business growth
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={14}>
            <div
              className="mt-7 rounded-2xl p-5"
              style={{ border: '1px solid rgba(245,184,65,0.25)', background: 'rgba(245,184,65,0.06)' }}
            >
              <p className="text-white/85 text-[14.5px]" style={{ lineHeight: 1.65 }}>
                &ldquo;{RAHUL.approach}&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
