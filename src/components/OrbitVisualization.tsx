import { motion } from 'motion/react';
import { User } from 'lucide-react';

const RING_SIZE: Record<number, number> = { 2: 340, 3: 460, 4: 560 };
const RING_DURATION: Record<number, number> = { 2: 40, 3: 50, 4: 60 };
const RING_DIRECTION: Record<number, 'cw' | 'ccw'> = { 2: 'ccw', 3: 'cw', 4: 'ccw' };

function opposite(d: 'cw' | 'ccw'): 'cw' | 'ccw' {
  return d === 'cw' ? 'ccw' : 'cw';
}

// All 7 now carry real icons - 3 platform/business icons plus 4 more
// covering app dev and social/creative tool brands.
const AVATARS = [
  { ring: 2, angle: 40, glow: '#7C6CFF', iconSrc: '/icon-meta.png' },
  { ring: 2, angle: 220, glow: '#4361EE', iconSrc: '/icon-appdev.jpg' },
  { ring: 3, angle: 110, glow: '#FF9D3C', iconSrc: '/icon-google-business.svg' },
  { ring: 3, angle: 300, glow: '#7C6CFF', iconSrc: '/icon-linkedin.webp' },
  { ring: 4, angle: 20, glow: '#4361EE', iconSrc: '/icon-whatsapp.png' },
  { ring: 4, angle: 150, glow: '#FF9D3C', iconSrc: '/icon-youtube.webp' },
  { ring: 4, angle: 260, glow: '#7C6CFF', iconSrc: '/icon-adobe.webp' },
];

export default function OrbitVisualization() {
  return (
    <div
      className="relative hidden lg:flex items-center justify-center shrink-0"
      style={{ width: 560, height: 560 }}
    >
      {/* Rotating ring outlines - conic-gradient masked to a thin ring so
          brightness varies around the circumference (a uniform-color ring
          looks frozen even while spinning, since a circle is rotationally
          symmetric). */}
      {[2, 3, 4].map((ring) => (
        <div
          key={ring}
          className="absolute rounded-full"
          style={{
            width: RING_SIZE[ring],
            height: RING_SIZE[ring],
            background:
              'conic-gradient(rgba(124,108,255,0) 0deg, rgba(124,108,255,0.85) 90deg, rgba(124,108,255,0) 180deg, rgba(255,157,60,0.75) 270deg, rgba(124,108,255,0) 360deg)',
            WebkitMask:
              'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
            animation: `orbit-spin-${RING_DIRECTION[ring]} ${RING_DURATION[ring]}s linear infinite`,
          }}
        />
      ))}

      {/* Center circle - Nexply icon mark, in place of a stat.
          Counter-rotation isn't needed since it doesn't sit on a rotating ring. */}
      <div
        className="absolute rounded-full flex items-center justify-center backdrop-blur-md"
        style={{
          width: 220,
          height: 220,
          border: '1px solid rgba(124,108,255,0.3)',
          background: 'rgba(255,255,255,0.03)',
        }}
      >
        <img
          src="/icon-nexply-mark.svg"
          alt="Nexply"
          style={{ width: 88, height: 'auto' }}
        />
      </div>

      {/* Avatars - each ring is its own rotating group so avatars actually
          revolve around the center over time (matching the reference), and
          each avatar has its own counter-rotation (opposite direction, same
          duration) so it stays upright instead of tumbling as it travels. */}
      {[2, 3, 4].map((ring) => {
        const radius = RING_SIZE[ring] / 2;
        const avatarsOnRing = AVATARS.map((a, i) => ({ ...a, i })).filter((a) => a.ring === ring);

        return (
          <div
            key={`orbit-group-${ring}`}
            className="absolute"
            style={{
              width: RING_SIZE[ring],
              height: RING_SIZE[ring],
              animation: `orbit-spin-${RING_DIRECTION[ring]} ${RING_DURATION[ring]}s linear infinite`,
            }}
          >
            {avatarsOnRing.map((a) => (
              <div
                key={a.i}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${a.angle}deg) translate(${radius}px) rotate(${-a.angle}deg)`,
                }}
              >
                {/* Continuous counter-rotation cancels the parent's spin */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    marginLeft: -28,
                    marginTop: -28,
                    animation: `orbit-spin-${opposite(RING_DIRECTION[ring])} ${RING_DURATION[ring]}s linear infinite`,
                  }}
                >
                  {/* One-time entrance only - no rotation here, to avoid
                      fighting with the CSS rotation above */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.3, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, delay: 0.6 + a.i * 0.18, ease: 'easeOut' }}
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={
                      a.iconSrc
                        ? {
                            background: 'rgba(255,255,255,0.95)',
                            border: `1px solid ${a.glow}55`,
                            boxShadow: `0 0 20px ${a.glow}40`,
                            padding: 12,
                          }
                        : {
                            background: 'rgba(20,18,32,0.8)',
                            border: `1px solid ${a.glow}55`,
                            boxShadow: `0 0 20px ${a.glow}40`,
                          }
                    }
                  >
                    {a.iconSrc ? (
                      <img src={a.iconSrc} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <User size={22} color={a.glow} />
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
