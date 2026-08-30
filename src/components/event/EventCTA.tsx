import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../jack/FadeIn';
import { DARK_BG_FLAT } from '../../lib/brand';
import { EVENT_GRADIENT, eventGradientText, RAHUL } from '../../lib/eventManagement';

export default function EventCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: DARK_BG_FLAT }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(244,63,126,0.16), transparent 70%)' }}
      />

      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 900, padding: 'clamp(80px, 11vw, 150px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn y={18}>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(30px, 4.4vw, 54px)', lineHeight: 1.15 }}>
            Stop chasing enquiries. <br className="hidden sm:block" />
            <span style={eventGradientText}>Start booking the right clients.</span>
          </h2>
        </FadeIn>

        <FadeIn y={16} delay={0.1}>
          <p
            className="mt-6 max-w-xl mx-auto"
            style={{ color: 'rgb(196, 186, 214)', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.7 }}
          >
            Book a call with {RAHUL.name}. He&apos;ll review your current enquiries, presence, and
            goals, and lay out exactly what a predictable lead flow would take for your event
            business.
          </p>
        </FadeIn>

        <FadeIn y={16} delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: EVENT_GRADIENT, color: '#1a0b10', boxShadow: '0 12px 34px rgba(244,63,126,0.3)' }}
            >
              Book a Call
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+917842203319"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium transition-colors duration-300 hover:bg-white/[0.06]"
              style={{ border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)' }}
            >
              <Phone size={16} />
              +91 78422 03319
            </a>
          </div>
        </FadeIn>

        <FadeIn y={14} delay={0.3}>
          <p className="mt-8 text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            An Event Industry Growth service by{' '}
            <Link to="/" className="underline decoration-1 underline-offset-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Nexply Studios
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
