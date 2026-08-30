import { ArrowRight, CalendarCheck } from 'lucide-react';
import FadeIn from '../jack/FadeIn';
import { DARK_BG_FLAT } from '../../lib/brand';
import { CARENEXT_GRADIENT, carenextGradientText } from '../../lib/carenext';

export default function CareNextCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: DARK_BG_FLAT }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(45,212,191,0.16), transparent 70%)' }}
      />

      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 900, padding: 'clamp(80px, 11vw, 150px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn y={18}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium mb-7"
            style={{ border: '1px solid rgba(45,212,191,0.35)', background: 'rgba(45,212,191,0.1)', color: '#5EEAD4' }}
          >
            <CalendarCheck size={12} />
            Book a demo
          </span>
          <h2
            className="text-white font-medium"
            style={{ fontSize: 'clamp(30px, 4.4vw, 54px)', lineHeight: 1.15 }}
          >
            Run your whole clinic <br className="hidden sm:block" />
            <span style={carenextGradientText}>from one place.</span>
          </h2>
        </FadeIn>

        <FadeIn y={16} delay={0.1}>
          <p
            className="mt-6 max-w-xl mx-auto"
            style={{ color: 'rgb(178, 196, 205)', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.7 }}
          >
            Book a demo and we&apos;ll walk through your clinic&apos;s workflow, set up your
            branches and roles, and tailor CareNext to how your practice actually works.
          </p>
        </FadeIn>

        <FadeIn y={16} delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-white font-medium transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: CARENEXT_GRADIENT, boxShadow: '0 12px 34px rgba(45,212,191,0.3)' }}
            >
              Book a Demo
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+917842203319"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium transition-colors duration-300 hover:bg-white/[0.06]"
              style={{ border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)' }}
            >
              +91 78422 03319
            </a>
          </div>
        </FadeIn>

        <FadeIn y={14} delay={0.3}>
          <p className="mt-8 text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            CareNext is designed, built, and maintained by{' '}
            <a href="/" className="underline decoration-1 underline-offset-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Nexply Studios
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
