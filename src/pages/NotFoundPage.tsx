import { ArrowUpRight, Compass, TriangleAlert } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/jack/FadeIn';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../lib/brand';
import { useSEO } from '../hooks/useSEO';

// A genuine 404 - for URLs that don't map to any real page (typos, dead
// links, removed pages). Distinct from ComingSoonPage, which is reserved
// for pages we've intentionally teased but haven't built yet. Telling a
// visitor (or a crawler) that a broken link is "coming soon" implies
// content is on the way, when really the URL is just wrong.
//
// Flat background by design - no video, no illustration. This is an error
// state, not a marketing moment, so it should resolve fast and get out of
// the visitor's way.
export default function NotFoundPage() {
  useSEO({
    title: 'Page Not Found',
    description: "The page you're looking for doesn't exist or may have been moved.",
    path: typeof window !== 'undefined' ? window.location.pathname : '/404',
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
            <TriangleAlert size={16} color="rgba(255,255,255,0.7)" />
            <span
              className="text-white/70 font-medium uppercase"
              style={{ fontSize: 13, letterSpacing: '0.3em' }}
            >
              Error 404
            </span>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <h1
              className="text-white font-medium uppercase"
              style={{ fontSize: 'clamp(2.6rem, 7.5vw, 6rem)', lineHeight: 0.98, letterSpacing: '-0.01em' }}
            >
              Page Not
              <br />
              <span style={gradientTextStyle}>Found.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} y={16}>
            <p
              className="mt-6 lg:mt-8"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.7, maxWidth: 420 }}
            >
              The link might be broken, or the page may have been moved. Let's get you back on
              track.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} y={16}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 lg:mt-10">
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
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border px-6 sm:px-8 py-3.5 sm:py-4 transition-colors duration-300 hover:border-white/45 hover:bg-white/[0.06]"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <Compass size={16} color="white" />
                <span className="text-white font-medium uppercase" style={{ fontSize: 12, letterSpacing: '0.15em' }}>
                  Browse Our Work
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
