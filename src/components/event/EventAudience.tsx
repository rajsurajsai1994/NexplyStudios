import { useState } from 'react';
import { ImagePlus } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import { DARK_BG_GRADIENT } from '../../lib/brand';
import { EVENT_AUDIENCES, eventGradientText, type EventAudience } from '../../lib/eventManagement';

// One card = one event-business type. Shows the real photo once it's dropped
// in at the path below; until then it renders a clearly-marked placeholder so
// nothing looks broken.
function AudienceCard({ a }: { a: EventAudience }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden group"
      style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', aspectRatio: '4/3' }}
    >
      {!failed ? (
        <img
          src={a.img}
          alt={a.label}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-center px-3"
          style={{
            color: 'rgba(255,255,255,0.5)',
            background:
              'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 10px, rgba(255,255,255,0.05) 10px 20px)',
          }}
        >
          <ImagePlus size={18} />
          <span className="text-[10px] leading-tight opacity-80">{a.img}</span>
        </div>
      )}

      {/* label overlay */}
      <div
        className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-3.5 py-3"
        style={{ background: 'linear-gradient(0deg, rgba(8,6,14,0.9) 0%, rgba(8,6,14,0.5) 55%, transparent 100%)' }}
      >
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, #F5B841, #F43F7E)', color: '#1a0b10' }}
        >
          {a.icon}
        </span>
        <span className="text-white text-[13px] font-medium leading-tight">{a.label}</span>
      </div>
    </div>
  );
}

export default function EventAudience() {
  return (
    <section id="event-audience" className="relative" style={{ background: DARK_BG_GRADIENT, scrollMarginTop: 90 }}>
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-14" y={16}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(245,184,65,0.85)' }}>
            Who Rahul works with
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2, maxWidth: 820 }}>
            Built for <span style={eventGradientText}>event people</span>, by an event person
          </h2>
          <p className="max-w-xl" style={{ color: 'rgb(206, 197, 224)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            If your business lives and dies by bookings, you&apos;re in the right place.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1120px]">
          {EVENT_AUDIENCES.map((a, i) => (
            <FadeIn key={a.label} delay={(i % 3) * 0.06} y={18}>
              <AudienceCard a={a} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
