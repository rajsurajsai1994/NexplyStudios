import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope } from 'lucide-react';
import {
  CARENEXT_GRADIENT,
  CARENEXT_LIGHT_BG,
  CARENEXT_INK,
  CARENEXT_INK_SOFT,
  CARENEXT_HAIRLINE,
  carenextInkGradientText,
} from '../../lib/carenext';

// ---------------------------------------------------------------------------
// CareNext hero - a light "operations overview" triptych. Three peer feature
// cards on the clinical surface; the centre card (CareNext AI) leads the
// entrance. All internal sizing is in container-query units against the
// .cnx3-scene size container, so the whole composition scales as one.
// The two panel visuals (sparkle on the Automate pill, converging decision
// flow) are drawn on <canvas>, not shipped as images.
// ---------------------------------------------------------------------------

const BAR_HEIGHTS = [
  20, 33, 48, 56, 51, 47, 39, 31, 53, 55, 60, 56, 100, 92, 76, 67, 62, 65, 59, 70, 74, 87, 83, 77,
];
const ACTIVE_BAR = 12;

const CSS = `
.cnx3 {
  --page: ${CARENEXT_LIGHT_BG};
  --surface: #ffffff;
  --ink: ${CARENEXT_INK};
  --muted: ${CARENEXT_INK_SOFT};
  --accent: #0D9488;
  --accent-2: #0EA5E9;
  --accent-soft: #D6F1ED;
  --green: #4d8c35;
  --card-title-size: 1.86cqw;
  --card-title-tracking: -.125cqw;
  --feature-title-size: 2.17cqw;
  --feature-title-tracking: -.09cqw;
  --cards-height: 33.81cqw;
  --cards-scale: min(1, calc(60cqh / var(--cards-height)));
  position: relative;
  background: var(--page);
  color: var(--ink);
  font-family: "Segoe UI Variable", "Segoe UI", system-ui, -apple-system, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}
.cnx3-head {
  position: relative;
  z-index: 3;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  padding: clamp(130px, 16vw, 200px) clamp(16px, 4vw, 40px) clamp(20px, 3vw, 36px);
}
.cnx3-scene {
  position: relative;
  width: 100%;
  height: min(60vh, 47vw);
  min-height: 320px;
  container-type: size;
}
.cnx3-cards {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 81.71cqw;
  height: var(--cards-height);
  display: grid;
  grid-template-columns: 32.33% 32.33% 31.70%;
  justify-content: space-between;
  align-items: start;
  scale: var(--cards-scale);
}
.cnx3-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 72.2% 27.8%;
  border: .075cqw solid rgb(214 240 236 / 96%);
  border-radius: 1.59cqw;
  background: var(--surface);
  box-shadow: .32cqw 1.18cqh 1.42cqw rgb(15 46 54 / 12%), 0 .18cqh .42cqw rgb(15 46 54 / 4%);
}
.cnx3-card:last-child { height: 98.5%; margin-top: .76%; }
.cnx3-panel {
  position: relative;
  margin-inline: 2.55%;
  overflow: hidden;
  border-radius: 1.28cqw 1.28cqw 1.08cqw 1.08cqw;
  background:
    radial-gradient(circle at 50% 78%, rgb(45 212 191 / 15%), transparent 47%),
    linear-gradient(180deg, #ffffff, #f1fbf9);
}
.cnx3-card:last-child .cnx3-panel {
  margin-inline: 2%;
  background:
    radial-gradient(circle at 74% 46%, rgb(45 212 191 / 30%), transparent 48%),
    linear-gradient(180deg, #ffffff, #ecf8f6);
}
.cnx3-copy { position: relative; padding: 7.1% 8.4% 6.5%; }
.cnx3-copy h2 {
  margin: 0 0 1.6%;
  color: var(--ink);
  font-family: "Segoe UI Semibold", "Segoe UI Variable Display", "Segoe UI", Arial, sans-serif;
  font-weight: 600;
  font-size: var(--card-title-size);
  line-height: 1.04;
  letter-spacing: var(--card-title-tracking);
  white-space: nowrap;
  transform: translateY(-.36cqh);
  transform-origin: left top;
}
.cnx3-card:last-child .cnx3-copy h2 {
  font-size: var(--feature-title-size);
  letter-spacing: var(--feature-title-tracking);
}
.cnx3-copy p {
  margin: 0;
  color: var(--muted);
  font-size: 1.39cqw;
  font-weight: 500;
  line-height: 1.04;
  letter-spacing: -.06cqw;
  transform: scaleX(.94);
  transform-origin: left top;
  font-family: "Segoe UI Variable", "Segoe UI", Arial, sans-serif;
}
.cnx3-corner {
  position: absolute;
  right: 8.4%;
  bottom: 22.5%;
  width: 8.2%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
}

/* ---- card 1: visibility chart ---- */
.cnx3-tl {
  position: absolute;
  top: 5.7%;
  left: 20.8%;
  width: 58.4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--accent);
  font-size: .62cqw;
  font-weight: 500;
  letter-spacing: -.015cqw;
}
.cnx3-tl i { width: 20%; border-top: .05cqw dashed rgb(13 148 136 / 55%); }
.cnx3-bars {
  position: absolute;
  left: 5.9%;
  right: 5.9%;
  bottom: 12%;
  height: 62%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.cnx3-bar { width: 2.4%; height: var(--h); border-radius: 999px; background: rgb(45 212 191 / 42%); }
.cnx3-bar.is-active { width: 2.6%; background: var(--accent); box-shadow: 0 0 .28cqw rgb(13 148 136 / 28%); }
.cnx3-chip {
  position: absolute;
  top: 15.5%;
  left: 46.2%;
  width: 14%;
  height: 7.6%;
  display: grid;
  place-items: center;
  border: .12cqw solid #fff;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 0 .055cqw var(--accent), 0 .28cqh .4cqw rgb(15 46 54 / 22%);
  color: #fff;
  font-size: .67cqw;
  font-weight: 600;
}
.cnx3-axis {
  position: absolute;
  left: 7.7%;
  right: 7.2%;
  bottom: 5.2%;
  display: flex;
  justify-content: space-between;
  color: #7d979d;
  font-size: .57cqw;
}
.cnx3-spark { position: relative; width: 52%; aspect-ratio: 1; }
.cnx3-spark::before { content: ""; position: absolute; top: 41%; left: 0; width: 100%; height: 18%; border-radius: 999px; background: currentColor; }
.cnx3-spark::after { content: ""; position: absolute; top: 0; left: 41%; width: 18%; height: 100%; border-radius: 999px; background: currentColor; }

/* ---- card 2: assistant / workflow ---- */
.cnx3-ahead {
  position: absolute;
  top: 8.2%;
  left: 6.2%;
  display: flex;
  align-items: center;
  gap: 1.02cqw;
  color: var(--accent);
  font-size: 1.28cqw;
  font-weight: 700;
  letter-spacing: -.04cqw;
}
.cnx3-badge { width: 2.16cqw; height: 2.16cqw; border-radius: 50%; background: var(--accent-soft); display: grid; place-items: center; }
.cnx3-badge i {
  width: 48%;
  aspect-ratio: 1;
  background: currentColor;
  color: var(--accent);
  filter: blur(.035cqw);
  clip-path: polygon(47% 0, 53% 0, 58% 28%, 65% 35%, 72% 42%, 100% 47%, 100% 53%, 72% 58%, 65% 65%, 58% 72%, 53% 100%, 47% 100%, 42% 72%, 35% 65%, 28% 58%, 0 53%, 0 47%, 28% 42%, 35% 35%, 42% 28%);
}
.cnx3-q {
  position: absolute;
  top: 21.5%;
  left: 6.2%;
  margin: 0;
  color: #0e2a30;
  font-size: 1.34cqw;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -.07cqw;
}
.cnx3-prompt {
  position: absolute;
  top: 32%;
  left: 6.2%;
  width: 87.2%;
  height: 35.8%;
  padding: 4.7% 4.2%;
  border: .06cqw solid #bcd6d2;
  border-radius: .86cqw;
  background: rgb(255 255 255 / 42%);
  color: var(--muted);
  font-size: 1.03cqw;
  font-weight: 475;
  line-height: 1.31;
  letter-spacing: -.035cqw;
}
.cnx3-pill {
  position: absolute;
  top: 78.1%;
  left: 6.2%;
  width: 37%;
  height: 11.6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1cqw;
  border-radius: 999px;
  background: linear-gradient(100deg, #38BDF8 0%, #14B8A6 42%, #0D9488 100%);
  box-shadow: 0 .6cqh 1.35cqw rgb(13 148 136 / 45%), 0 .2cqh .46cqw rgb(13 148 136 / 30%), 0 0 .82cqw .08cqw rgb(20 184 166 / 22%);
  color: #fff;
  font-size: .98cqw;
  font-weight: 475;
  line-height: 1;
}
.cnx3-pill span { letter-spacing: -.025cqw; transform: scaleX(1.03); transform-origin: left center; }
.cnx3-magic { flex: 0 0 auto; width: 1.5cqw; height: 1.46cqw; transform: translateX(-.15cqw); }
.cnx3-cursor {
  position: absolute;
  top: 85.7%;
  left: 54%;
  width: 4.3%;
  aspect-ratio: .72;
  z-index: 3;
  isolation: isolate;
  filter: drop-shadow(0 0 .075cqw #fff) drop-shadow(0 0 .075cqw #fff) drop-shadow(.08cqw .16cqw .08cqw rgb(0 0 0 / 46%));
}
.cnx3-cursor::before { content: ""; position: absolute; inset: 0; background: #050505; clip-path: polygon(0 0, 94% 62%, 57% 67%, 38% 100%); }
.cnx3-cursor::after { content: ""; position: absolute; inset: -11%; z-index: -1; background: #fff; clip-path: polygon(0 0, 94% 62%, 57% 67%, 38% 100%); }
.cnx3-flowicon { position: relative; width: 54%; height: 58%; background: linear-gradient(var(--accent), var(--accent)) center / 48% 18% no-repeat; }
.cnx3-flowicon::before, .cnx3-flowicon::after { content: ""; position: absolute; width: 34%; height: 70%; border-radius: 999px; background: var(--accent); }
.cnx3-flowicon::before { left: 4%; top: 24%; }
.cnx3-flowicon::after { right: 4%; top: 6%; }

/* ---- card 3: decision / metrics ---- */
.cnx3-metric { position: absolute; top: 7.8%; left: 5.2%; }
.cnx3-metric small { display: block; margin-bottom: .38cqh; color: #5b7379; font-size: .88cqw; font-weight: 475; }
.cnx3-metric .row { display: flex; align-items: center; gap: 1.02cqw; }
.cnx3-metric strong { color: var(--accent); font-size: 2.1cqw; font-weight: 700; line-height: .95; letter-spacing: -.04cqw; }
.cnx3-metric .row span { margin-top: .52cqh; color: var(--green); font-size: .93cqw; font-weight: 700; letter-spacing: -.045cqw; }
.cnx3-flow { position: absolute; top: 39%; left: 0; width: 100%; height: 53%; display: block; pointer-events: none; }
.cnx3-tag {
  position: absolute;
  z-index: 2;
  height: 8.3%;
  display: grid;
  place-items: center;
  padding-inline: 2.4%;
  border-radius: 999px;
  background: rgb(255 255 255 / 95%);
  color: var(--ink);
  font-size: .62cqw;
  font-weight: 600;
  letter-spacing: -.012cqw;
  white-space: nowrap;
  box-shadow: 0 .1cqh .4cqw rgb(15 46 54 / 12%);
}
.cnx3-tag.t-action { top: 34.8%; right: 8%; }
.cnx3-tag.t-conf { top: 67%; left: 6%; }
.cnx3-tag.t-path { top: 82.2%; right: 8%; }
.cnx3-speed {
  position: relative;
  width: 58%;
  aspect-ratio: 1;
  background:
    linear-gradient(var(--accent), var(--accent)) 0 31% / 27% 8% no-repeat,
    linear-gradient(var(--accent), var(--accent)) 0 49% / 38% 8% no-repeat,
    linear-gradient(var(--accent), var(--accent)) 0 67% / 22% 8% no-repeat;
}
.cnx3-speed::before {
  content: "";
  position: absolute;
  inset: 4% 1% 2% 28%;
  background: var(--accent);
  clip-path: polygon(58% 0, 100% 0, 69% 40%, 94% 40%, 28% 100%, 44% 58%, 7% 58%);
}

/* ---- entrance ---- */
.cnx3.is-anim .cnx3-card { opacity: 0; }
@media (prefers-reduced-motion: reduce) { .cnx3.is-anim .cnx3-card { opacity: 1; } }

/* ---- responsive: stack ---- */
@media (max-width: 60rem) {
  .cnx3-scene { height: auto; min-height: 0; container-type: inline-size; padding-bottom: clamp(40px, 8vw, 72px); }
  .cnx3-cards {
    position: static;
    translate: none;
    scale: none;
    width: min(94cqw, 30rem);
    height: auto;
    margin: 0 auto;
    grid-template-columns: 1fr;
    gap: clamp(1rem, 4cqw, 1.5rem);
  }
  .cnx3-card, .cnx3-card:last-child { height: auto; margin-top: 0; aspect-ratio: 1.12; border-radius: clamp(.9rem, 3.5cqw, 1.2rem); border-width: 1px; }
  .cnx3-panel, .cnx3-card:last-child .cnx3-panel { border-radius: clamp(.7rem, 3cqw, 1rem); margin-inline: 3%; }
  .cnx3-copy { padding: 6% 7% 7%; }
  .cnx3-copy h2, .cnx3-card:last-child .cnx3-copy h2 { font-size: clamp(1rem, 5.6cqw, 1.4rem); letter-spacing: -.01em; transform: none; }
  .cnx3-copy p { font-size: clamp(.8rem, 3.9cqw, 1rem); transform: none; }
  .cnx3-corner { width: clamp(1.9rem, 9cqw, 2.4rem); right: 7%; bottom: 20%; }
  .cnx3-tl { font-size: clamp(.5rem, 2cqw, .68rem); }
  .cnx3-chip { font-size: clamp(.52rem, 2.2cqw, .72rem); width: 17%; height: 9%; }
  .cnx3-axis { font-size: clamp(.48rem, 1.9cqw, .62rem); }
  .cnx3-ahead { font-size: clamp(.92rem, 4.4cqw, 1.2rem); }
  .cnx3-badge { width: clamp(1.35rem, 7cqw, 1.9rem); height: clamp(1.35rem, 7cqw, 1.9rem); }
  .cnx3-q { font-size: clamp(.9rem, 4.3cqw, 1.18rem); top: 20%; }
  .cnx3-prompt { top: 31%; height: 40%; font-size: clamp(.72rem, 3.3cqw, .92rem); line-height: 1.3; border-radius: clamp(.5rem, 2.4cqw, .8rem); }
  .cnx3-pill { top: 79%; font-size: clamp(.75rem, 3.5cqw, .96rem); width: 46%; min-height: 2.4rem; }
  .cnx3-cursor { top: 87%; }
  .cnx3-magic { width: clamp(.9rem, 4.4cqw, 1.2rem); height: clamp(.9rem, 4.4cqw, 1.2rem); }
  .cnx3-metric small { font-size: clamp(.72rem, 3.4cqw, .92rem); }
  .cnx3-metric strong { font-size: clamp(1.5rem, 7.4cqw, 2rem); }
  .cnx3-metric .row span { font-size: clamp(.7rem, 3.4cqw, .92rem); }
  .cnx3-tag { font-size: clamp(.5rem, 2.3cqw, .66rem); height: 10%; }
}
`;

const EASE_PLACE = 'cubic-bezier(.16,1,.3,1)';
const EASE_WIPE = 'cubic-bezier(.24,.86,.28,1)';

const SPARKLE_POINTS: [number, number][] = [
  [0.5, 0.06], [0.59, 0.41], [0.94, 0.5], [0.59, 0.59],
  [0.5, 0.94], [0.41, 0.59], [0.06, 0.5], [0.41, 0.41],
];
const SPARKLES = [
  { x: 0.01, y: 0.01, size: 0.5 },
  { x: 0.28, y: 0.26, size: 0.72 },
];

const FLOW_BANDS = [
  { source: [0.08, 0.26], target: [0.29, 0.32], color: 'rgba(94,234,212,.55)' },
  { source: [0.23, 0.42], target: [0.3, 0.335], color: 'rgba(20,184,166,.68)' },
  { source: [0.5, 0.75], target: [0.32, 0.355], color: 'rgba(13,148,136,.82)' },
  { source: [0.69, 0.98], target: [0.33, 0.365], color: 'rgba(56,189,248,.5)' },
  { source: [0.39, 0.51], target: [0.31, 0.345], color: 'rgba(13,148,136,.96)' },
];
const FLOW_THREADS = [
  { source: 0.05, target: 0.3, alpha: 0.68 },
  { source: 0.2, target: 0.315, alpha: 0.6 },
  { source: 0.62, target: 0.342, alpha: 0.84 },
  { source: 0.82, target: 0.352, alpha: 0.74 },
  { source: 0.97, target: 0.36, alpha: 0.64 },
];
const SOURCE_HOLD = 0.38;
const TARGET_APPROACH = 0.74;
const THREAD_WIDTH = 0.00135;

function fitCanvas(canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: rect.width, h: rect.height };
}

function roundedPolygon(ctx: CanvasRenderingContext2D, pts: [number, number][], r: number) {
  const n = pts.length;
  const mid = (a: [number, number], b: [number, number], t: number): [number, number] => [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
  ];
  ctx.beginPath();
  const start = mid(pts[0], pts[1 % n], r);
  ctx.moveTo(start[0], start[1]);
  for (let i = 1; i <= n; i++) {
    const curr = pts[i % n];
    const prev = pts[(i - 1 + n) % n];
    const next = pts[(i + 1) % n];
    const before = mid(curr, prev, r);
    const after = mid(curr, next, r);
    ctx.lineTo(before[0], before[1]);
    ctx.quadraticCurveTo(curr[0], curr[1], after[0], after[1]);
  }
  ctx.closePath();
}

function drawSparkle(canvas: HTMLCanvasElement) {
  const fit = fitCanvas(canvas);
  if (!fit) return;
  const { ctx, w, h } = fit;
  ctx.clearRect(0, 0, w, h);
  for (const s of SPARKLES) {
    const size = Math.min(w, h) * s.size;
    const ox = s.x * w;
    const oy = s.y * h;
    const abs = SPARKLE_POINTS.map(
      ([px, py]) => [ox + px * size, oy + py * size] as [number, number],
    );
    roundedPolygon(ctx, abs, 0.34);
    ctx.fillStyle = 'rgba(45,212,191,.55)';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = Math.max(1.1, size * 0.15);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(255,255,255,.78)';
    ctx.shadowBlur = size * 0.06;
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
  }
}

function drawFlow(canvas: HTMLCanvasElement) {
  const fit = fitCanvas(canvas);
  if (!fit) return;
  const { ctx, w, h } = fit;
  ctx.clearRect(0, 0, w, h);
  for (const b of FLOW_BANDS) {
    const [st, sb] = b.source;
    const [tt, tb] = b.target;
    ctx.beginPath();
    ctx.moveTo(0, h * st);
    ctx.bezierCurveTo(w * SOURCE_HOLD, h * st, w * TARGET_APPROACH, h * tt, w, h * tt);
    ctx.lineTo(w, h * tb);
    ctx.bezierCurveTo(w * TARGET_APPROACH, h * tb, w * SOURCE_HOLD, h * sb, 0, h * sb);
    ctx.closePath();
    ctx.fillStyle = b.color;
    ctx.fill();
  }
  ctx.lineCap = 'round';
  for (const t of FLOW_THREADS) {
    ctx.beginPath();
    ctx.moveTo(0, h * t.source);
    ctx.bezierCurveTo(w * SOURCE_HOLD, h * t.source, w * TARGET_APPROACH, h * t.target, w, h * t.target);
    ctx.lineWidth = Math.max(0.72, w * THREAD_WIDTH);
    ctx.strokeStyle = `rgba(255,255,255,${t.alpha})`;
    ctx.stroke();
  }
}

export default function CareNextHero() {
  const rootRef = useRef<HTMLElement>(null);
  const sparkleRef = useRef<HTMLCanvasElement>(null);
  const flowRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const sparkle = sparkleRef.current;
    const flow = flowRef.current;
    const observers: ResizeObserver[] = [];

    if (sparkle) {
      const draw = () => drawSparkle(sparkle);
      const ro = new ResizeObserver(draw);
      ro.observe(sparkle);
      observers.push(ro);
      draw();
    }
    if (flow) {
      const draw = () => drawFlow(flow);
      const ro = new ResizeObserver(draw);
      ro.observe(flow);
      observers.push(ro);
      draw();
    }

    // Entrance - centre card out, desktop row only.
    const root = rootRef.current;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isRow = window.matchMedia('(min-width: 60rem)').matches;
    const anims: Animation[] = [];
    let fallback: ReturnType<typeof setTimeout> | undefined;

    if (root && isRow && !prefersReduced && typeof root.animate === 'function') {
      root.classList.add('is-anim');
      const cards = Array.from(root.querySelectorAll<HTMLElement>('.cnx3-card'));
      const order = [1, 0, 2].filter((i) => cards[i]);
      const rise = 16;

      const reveal = () => {
        if (fallback) {
          clearTimeout(fallback);
          fallback = undefined;
        }
        anims.forEach((a) => {
          try {
            a.cancel();
          } catch {
            /* noop */
          }
        });
        root.classList.remove('is-anim');
      };

      // Unconditional safety - if rAF is throttled (background tab) or an
      // animation never settles, the cards must still become visible.
      fallback = setTimeout(reveal, 2400);

      const run = () => {
        if (!root.classList.contains('is-anim')) return; // safety already fired
        order.forEach((cardIndex, pos) => {
          const card = cards[cardIndex];
          if (!card) return;
          const panel = card.querySelector<HTMLElement>('.cnx3-panel');
          const copy = card.querySelector<HTMLElement>('.cnx3-copy');
          const h2 = card.querySelector<HTMLElement>('h2');
          const p = card.querySelector<HTMLElement>('p');
          const corner = card.querySelector<HTMLElement>('.cnx3-corner');
          const delay = pos === 0 ? 60 : 245 + (pos - 1) * 85;
          const drift = cardIndex === 1 ? 0 : cardIndex < 1 ? 6 : -6;

          anims.push(
            card.animate(
              [
                { opacity: 0, transform: `translate3d(${drift}px, ${rise}px, 0) scale(.985)` },
                { opacity: 1, transform: 'none' },
              ],
              { duration: cardIndex === 1 ? 960 : 900, delay, easing: EASE_PLACE, fill: 'both' },
            ),
          );
          if (panel) {
            anims.push(
              panel.animate(
                [
                  { opacity: 0, transform: 'scale(.994)', clipPath: 'inset(0 0 34% 0)' },
                  { opacity: 1, transform: 'none', clipPath: 'inset(0 0 0 0)' },
                ],
                { duration: 720, delay: delay + 200, easing: EASE_WIPE, fill: 'both' },
              ),
            );
          }
          if (copy) {
            anims.push(
              copy.animate(
                [
                  { opacity: 0, transform: 'translate3d(0, 11px, 0)' },
                  { opacity: 1, transform: 'none' },
                ],
                { duration: 620, delay: delay + 330, easing: EASE_PLACE, fill: 'both' },
              ),
            );
          }
          if (h2) {
            anims.push(
              h2.animate(
                [
                  { opacity: 0, clipPath: 'inset(-30% 0 100% 0)' },
                  { opacity: 1, clipPath: 'inset(-30% 0 -30% 0)' },
                ],
                { duration: 540, delay: delay + 350, easing: EASE_WIPE, fill: 'both' },
              ),
            );
          }
          if (p) {
            anims.push(
              p.animate(
                [
                  { opacity: 0, clipPath: 'inset(-30% 0 100% 0)' },
                  { opacity: 1, clipPath: 'inset(-30% 0 -30% 0)' },
                ],
                { duration: 490, delay: delay + 450, easing: EASE_WIPE, fill: 'both' },
              ),
            );
          }
          if (corner) {
            anims.push(
              corner.animate(
                [
                  { opacity: 0, transform: 'scale(.88)' },
                  { opacity: 1, transform: 'none' },
                ],
                { duration: 400, delay: delay + 540, easing: EASE_PLACE, fill: 'both' },
              ),
            );
          }
        });

        Promise.allSettled(anims.map((a) => a.finished)).then(reveal);
      };

      requestAnimationFrame(() => requestAnimationFrame(run));
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      if (fallback) clearTimeout(fallback);
      anims.forEach((a) => {
        try {
          a.cancel();
        } catch {
          /* noop */
        }
      });
      root?.classList.remove('is-anim');
    };
  }, []);

  return (
    <section ref={rootRef} className="cnx3" aria-label="CareNext operations overview">
      <style>{CSS}</style>

      <div className="cnx3-head">
        <div className="flex items-center justify-center gap-2.5 mb-6 flex-wrap">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: '#0D9488' }}>
            A Nexply Studios Product
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, background: '#fff', color: '#0D9488' }}
          >
            <Stethoscope size={12} />
            Clinic Management System
          </span>
        </div>
        <h1
          className="font-medium"
          style={{ color: CARENEXT_INK, fontSize: 'clamp(30px, 4.4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.01em' }}
        >
          One platform for every branch, every doctor,{' '}
          <span style={carenextInkGradientText}>every patient.</span>
        </h1>
        <p
          className="mt-5 mx-auto"
          style={{ color: CARENEXT_INK_SOFT, fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.7, maxWidth: 620 }}
        >
          CareNext is a secure clinic operations platform - patients, appointments, billing, staff,
          and multi-branch reporting, all connected.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white text-[15px] font-medium transition-transform duration-300 hover:scale-[1.03]"
            style={{ background: CARENEXT_GRADIENT, boxShadow: '0 12px 30px rgba(13,148,136,0.28)' }}
          >
            Book a Demo
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="#carenext-platform"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:bg-white"
            style={{ border: `1px solid ${CARENEXT_HAIRLINE}`, color: CARENEXT_INK }}
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="cnx3-scene">
        <div className="cnx3-cards" aria-label="Product benefits">
          {/* Card 1 - Live clinic visibility */}
          <article className="cnx3-card">
            <div className="cnx3-panel" aria-label="Visibility timeline chart">
              <div className="cnx3-tl">
                <span>8 AM</span>
                <i />
                <span>1 PM</span>
                <i />
                <span>6 PM</span>
              </div>
              <div className="cnx3-bars" aria-hidden="true">
                {BAR_HEIGHTS.map((h, i) => (
                  <i
                    key={i}
                    className={`cnx3-bar${i === ACTIVE_BAR ? ' is-active' : ''}`}
                    style={{ '--h': `${h}%` } as React.CSSProperties}
                  />
                ))}
              </div>
              <div className="cnx3-chip">₹38,700</div>
              <div className="cnx3-axis">
                <span>OPEN</span>
                <span>BUSY</span>
                <span>PEAK</span>
                <span>CLOSE</span>
              </div>
            </div>
            <div className="cnx3-copy">
              <h2>Live clinic visibility</h2>
              <p>
                Real-time data across
                <br />
                every branch.
              </p>
              <span className="cnx3-corner">
                <i className="cnx3-spark" />
              </span>
            </div>
          </article>

          {/* Card 2 - CareNext AI workflows (anchor) */}
          <article className="cnx3-card">
            <div className="cnx3-panel">
              <div className="cnx3-ahead">
                <span className="cnx3-badge">
                  <i />
                </span>
                <span>CareNext AI</span>
              </div>
              <p className="cnx3-q">How can I help you automate?</p>
              <div className="cnx3-prompt">
                When a new patient books online, send a
                <br />
                WhatsApp confirmation and add them to
                <br />
                the right doctor&apos;s list.
              </div>
              <div className="cnx3-pill">
                <span>Automate</span>
                <canvas ref={sparkleRef} className="cnx3-magic" aria-hidden="true" />
              </div>
              <i className="cnx3-cursor" aria-hidden="true" />
            </div>
            <div className="cnx3-copy">
              <h2>AI-assisted workflows</h2>
              <p>
                Automate the busywork
                <br />
                with CareNext AI.
              </p>
              <span className="cnx3-corner">
                <i className="cnx3-flowicon" />
              </span>
            </div>
          </article>

          {/* Card 3 - Faster decisions */}
          <article className="cnx3-card">
            <div className="cnx3-panel">
              <div className="cnx3-metric">
                <small>Time saved this month</small>
                <div className="row">
                  <strong>128 Hrs</strong>
                  <span>&uarr; 18% efficiency</span>
                </div>
              </div>
              <canvas
                ref={flowRef}
                className="cnx3-flow"
                aria-label="Decision paths converging into an optimized result"
              />
              <div className="cnx3-tag t-action">Action: Send reminders</div>
              <div className="cnx3-tag t-conf">No-show risk: Low</div>
              <div className="cnx3-tag t-path">Slots filled: +14%</div>
            </div>
            <div className="cnx3-copy">
              <h2>Faster decisions</h2>
              <p>
                Turn clinic data into
                <br />
                action instantly.
              </p>
              <span className="cnx3-corner">
                <i className="cnx3-speed" />
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
