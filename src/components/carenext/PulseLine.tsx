// A single-stroke ECG / heartbeat line - the recurring "this is healthcare"
// motif used as a section divider and behind the hero. Purely decorative.
export default function PulseLine({
  color = '#0D9488',
  height = 40,
  strokeWidth = 2,
  className = '',
}: {
  color?: string;
  height?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 40"
      className={`w-full ${className}`}
      style={{ height, display: 'block' }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 H360 l14 -12 12 24 16 -30 18 34 14 -16 H620 l12 -9 10 18 14 -24 16 28 12 -13 H1200"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
