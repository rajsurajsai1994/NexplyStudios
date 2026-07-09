import { ArrowUpRight, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/jack/FadeIn';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../lib/brand';
import { useSEO } from '../hooks/useSEO';

// Reserved for pages we've deliberately announced or linked to but haven't
// built yet - e.g. a new service page in progress. Not used as the catch-all
// for unmatched URLs; that's NotFoundPage. Wire a specific <Route> to this
// component only when there's a real, intentional "not yet" to communicate.
//
// Flat background by design - matches NotFoundPage's treatment so the two
// error/empty states feel like one consistent system.
export default function ComingSoonPage() {
  useSEO({
    title: 'Coming Soon',
    description: "We're building this page - check back soon.",
    path: typeof window !== 'undefined' ? window.location.pathname : '/',
    noindex: true,
  });

  return (
    <main>
      <Navbar />
      <section
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: '85vh', background: DARK_BG_GRADIENT }}
      >
        <div className="relative z-10 flex flex-col items-center text-center mx-auto px-6 py-24" style={{ maxWidth: 640 }}>
          <FadeIn y={16} className="flex items-center gap-2 mb-6 lg:mb-8">
            <Sparkles size={16} color="rgba(255,255,255,0.7)" />
            <span
              className="text-white/70 font-medium uppercase"
              style={{ fontSize: 13, letterSpacing: '0.3em' }}
            >
              In Progress
            </span>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <h1
              className="text-white font-medium uppercase"
              style={{ fontSize: 'clamp(2.6rem, 7.5vw, 6rem)', lineHeight: 0.98, letterSpacing: '-0.01em' }}
            >
              Something New
              <br />
              Is <span style={gradientTextStyle}>Coming.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} y={16}>
            <p
              className="mt-6 lg:mt-8"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.7, maxWidth: 420 }}
            >
              We're still building this page out. Check back soon, or head to the homepage in
              the meantime.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} y={16}>
            <div className="mt-8 lg:mt-10">
              <a
                href="/"
                className="group inline-flex items-center gap-2 rounded-full px-6 sm:px-8 py-3.5 sm:py-4"
                style={{ background: gradientA }}
              >
                <span className="text-white font-medium uppercase" style={{ fontSize: 12, letterSpacing: '0.15em' }}>
                  Back to Home
                </span>
                <ArrowUpRight
                  size={16}
                  color="white"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
