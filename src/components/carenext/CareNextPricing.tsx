import { Check, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../jack/FadeIn';
import {
  CARENEXT_GRADIENT,
  CARENEXT_PRICE,
  CARENEXT_PLAN_INCLUDES,
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
} from '../../lib/carenext';

export default function CareNextPricing() {
  return (
    <section
      id="carenext-pricing"
      className="relative"
      style={{ background: CARENEXT_LIGHT_BG, scrollMarginTop: 90, borderTop: `1px solid ${CARENEXT_HAIRLINE}` }}
    >
      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{ maxWidth: 1000, padding: 'clamp(64px, 8vw, 110px) clamp(16px, 4vw, 40px)' }}
      >
        <FadeIn className="flex flex-col items-center text-center gap-3 mb-12" y={16}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: '#0D9488' }}
          >
            Simple pricing
          </span>
          <h2 className="font-medium" style={{ color: CARENEXT_INK, fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.2 }}>
            One plan. <span style={carenextInkGradientText}>Everything included.</span>
          </h2>
          <p className="max-w-lg" style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            No per-seat fees, no locked modules. Your whole team on one price.
          </p>
        </FadeIn>

        <FadeIn y={22} delay={0.1}>
          <div
            className="relative rounded-[28px] overflow-hidden w-full"
            style={{ maxWidth: 720, border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', boxShadow: '0 30px 70px rgba(13,148,136,0.12)' }}
          >
            <div className="h-1.5 w-full" style={{ background: CARENEXT_GRADIENT }} />
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: '#0D9488' }}>
                    CareNext · per clinic
                  </p>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-[18px] font-medium" style={{ color: 'rgba(15,46,54,0.4)', textDecoration: 'line-through' }}>
                      {CARENEXT_PRICE.was}
                    </span>
                    <span className="font-semibold" style={{ color: CARENEXT_INK, fontSize: 'clamp(34px, 5vw, 46px)', lineHeight: 1 }}>
                      {CARENEXT_PRICE.now}
                    </span>
                    <span className="text-[15px] mb-1" style={{ color: CARENEXT_INK_SOFT }}>
                      {CARENEXT_PRICE.unit}
                    </span>
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider"
                  style={{ background: CARENEXT_GRADIENT, color: '#04121a' }}
                >
                  <Sparkles size={12} />
                  {CARENEXT_PRICE.note}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {CARENEXT_PLAN_INCLUDES.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0" style={{ color: '#0D9488' }} />
                    <span className="text-[13.5px]" style={{ color: CARENEXT_INK }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-white text-[15px] font-medium w-full sm:w-auto transition-transform duration-300 hover:scale-[1.02]"
                style={{ background: CARENEXT_GRADIENT, boxShadow: '0 12px 30px rgba(13,148,136,0.25)' }}
              >
                Book a Demo
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <p className="mt-3 text-[12px]" style={{ color: CARENEXT_INK_SOFT }}>
                14-day pilot available · cancel anytime during the pilot
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn y={16} delay={0.2}>
          <div
            className="mt-6 flex items-center gap-3 rounded-2xl px-5 py-4 w-full"
            style={{ maxWidth: 720, border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff' }}
          >
            <Building2 size={18} className="shrink-0" style={{ color: '#0D9488' }} />
            <p className="text-[13.5px]" style={{ color: CARENEXT_INK_SOFT }}>
              <span className="font-medium" style={{ color: CARENEXT_INK }}>
                Multiple branches or a hospital group?
              </span>{' '}
              We&apos;ll put together custom pricing for your network -{' '}
              <Link to="/contact" className="underline underline-offset-2" style={{ color: '#0D9488' }}>
                talk to us
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
