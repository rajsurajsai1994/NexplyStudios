import { ArrowRight, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_GRADIENT,
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
  carenextGlow,
} from '../../lib/carenext';

const TEAL = '#0D9488';

export default function CareNextCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: CARENEXT_LIGHT_BG, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}>
      <div className="absolute inset-0 pointer-events-none" style={carenextGlow('rgba(13,148,136,0.1)')} />

      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 900, padding: 'clamp(72px, 10vw, 130px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn y={18}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium mb-7"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: TEAL }}
          >
            <CalendarCheck size={12} />
            Book a demo
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(30px, 4.4vw, 54px)', lineHeight: 1.15 }}>
            Run your whole clinic <br className="hidden sm:block" />
            <span style={carenextInkGradientText}>from one place.</span>
          </h2>
        </FadeIn>

        <FadeIn y={16} delay={0.1}>
          <p
            className="mt-6 max-w-xl mx-auto"
            style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.7 }}
          >
            Book a demo and we&apos;ll walk through your clinic&apos;s workflow, set up your
            branches and roles, and tailor CareNext to how your practice actually works.
          </p>
        </FadeIn>

        <FadeIn y={16} delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-white font-medium transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: CARENEXT_GRADIENT, boxShadow: '0 14px 34px rgba(13,148,136,0.3)' }}
            >
              Book a Demo
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+917842203319"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium transition-colors duration-300 hover:bg-white"
              style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, color: CARENEXT_INK }}
            >
              +91 78422 03319
            </a>
          </div>
        </FadeIn>

        <FadeIn y={14} delay={0.3}>
          <p className="mt-8 text-[13px]" style={{ color: CARENEXT_INK_SOFT }}>
            CareNext is designed, built, and maintained by{' '}
            <Link to="/" className="underline decoration-1 underline-offset-2" style={{ color: TEAL }}>
              Nexply Studios
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
