import { useRef, useEffect } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useInView } from '../hooks/useInView';

const VIDEO_HUMAN = '/videos/movement-human.mp4';
const VIDEO_AI = '/videos/movement-ai.mp4';
const VIDEO_SHOWCASE = '/videos/movement-showcase.mp4';
const VIDEO_SHOWCASE_POSTER = '/videos/movement-showcase-poster.jpg';

const gradientHeadingStyle = {
  display: 'block',
  lineHeight: 1.1,
  marginBottom: '0.05em',
  background: 'linear-gradient(90deg, #333333 0%, #878787 50%, #333333 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
};

function VideoIcon({ src, size = 72, active }: { src: string; size?: number; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion || !active) return;
    videoRef.current?.play().catch(() => {});
  }, [reduceMotion, active]);

  return (
    <span
      className="inline-block align-middle rounded-full overflow-hidden"
      style={{
        width: `clamp(40px, 7vw, ${size}px)`,
        height: `clamp(40px, 7vw, ${size}px)`,
        flexShrink: 0,
      }}
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        src={active ? src : undefined}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </span>
  );
}

export default function MovementBanner() {
  const reduceMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden flex items-center"
      style={{ background: '#000000', minHeight: 'clamp(400px, 46vw, 580px)' }}
    >
      {/* Video fills the full section height on the right - no card, no
          border. A left-edge fade blends it straight into the section's
          own dark background instead of reading as a separate box. */}
      <video
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="none"
        poster={VIDEO_SHOWCASE_POSTER}
        className="absolute inset-y-0 right-0 h-full object-cover"
        style={{
          width: '72%',
          maskImage: 'linear-gradient(90deg, transparent 0%, black 34%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 34%)',
        }}
        src={inView && !reduceMotion ? VIDEO_SHOWCASE : undefined}
      />

      <div
        className="relative z-10 w-full mx-auto"
        style={{
          maxWidth: 1400,
          padding: 'clamp(56px, 8vw, 100px) clamp(16px, 4vw, 40px)',
        }}
      >
        <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
          <p
            className="mb-2"
            style={{
              color: '#fff',
              fontSize: 'clamp(1rem, 1.6vw, 1.4rem)',
              fontWeight: 400,
            }}
          >
            Stop swimming in the dark.
          </p>
          <h2
            style={{
              fontFamily: "'YDYoonche L', 'YDYoonche M', sans-serif",
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              color: '#fff',
              fontSize: 'clamp(1.8rem, 4.4vw, 3.8rem)',
            }}
          >
            <span style={gradientHeadingStyle}>The future of branding</span>
            <span
              className="flex items-center justify-center lg:justify-start gap-2 flex-wrap"
              style={{ color: '#fff' }}
            >
              <span style={{ color: '#555' }}>is</span>
              <VideoIcon src={VIDEO_HUMAN} size={72} active={inView} />
              <span>human</span>
              <span style={{ color: '#555', position: 'relative', top: '0.15em', marginLeft: '0.2em' }}>
                +
              </span>
              <VideoIcon src={VIDEO_AI} size={72} active={inView} />
              <span>AI</span>
            </span>
          </h2>

          <p
            className="mt-5 mx-auto lg:mx-0"
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)',
              color: '#888',
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Nexply blends creative craft with AI-driven speed, so your brand steps into the
            light faster.
          </p>

          <button
            className="mt-7 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_6px_32px_8px_rgba(39,243,169,0.22)] active:scale-[0.98]"
            style={{
              padding: '12px 28px',
              background: '#000',
              boxShadow: '0px 6px 24px 6px rgba(39, 243, 169, 0.15)',
              borderRadius: 9999,
              outline: '1px solid #30463C',
              outlineOffset: -1,
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <span style={{ color: '#fff', fontSize: 14, fontWeight: 400 }}>Find Your Spotlight</span>
          </button>
        </div>
      </div>
    </section>
  );
}
