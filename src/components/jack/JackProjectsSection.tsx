import { DARK_BG_GRADIENT } from '../../lib/brand';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import VisitWebsiteButton from './VisitWebsiteButton';

export interface StackingProject {
  num: string;
  name: string;
  industry: string;
  url?: string;
  note?: string;
  col1: [string, string];
  col2: string;
}

// Placeholder projects - swap in real client names/industries/images when
// available. Used as the default for stacking-layout service pages that
// don't yet have their own real project set wired up via servicePages.ts.
const PLACEHOLDER_PROJECTS: StackingProject[] = [
  {
    num: '01',
    name: 'Project Name Here',
    industry: 'Industry',
    col1: ['https://picsum.photos/seed/nexply-svc-01a/600/400', 'https://picsum.photos/seed/nexply-svc-01b/600/500'],
    col2: 'https://picsum.photos/seed/nexply-svc-01c/700/900',
  },
  {
    num: '02',
    name: 'Project Name Here',
    industry: 'Industry',
    col1: ['https://picsum.photos/seed/nexply-svc-02a/600/400', 'https://picsum.photos/seed/nexply-svc-02b/600/500'],
    col2: 'https://picsum.photos/seed/nexply-svc-02c/700/900',
  },
  {
    num: '03',
    name: 'Project Name Here',
    industry: 'Industry',
    col1: ['https://picsum.photos/seed/nexply-svc-03a/600/400', 'https://picsum.photos/seed/nexply-svc-03b/600/500'],
    col2: 'https://picsum.photos/seed/nexply-svc-03c/700/900',
  },
  {
    num: '04',
    name: 'Project Name Here',
    industry: 'Industry',
    col1: ['https://picsum.photos/seed/nexply-svc-04a/600/400', 'https://picsum.photos/seed/nexply-svc-04b/600/500'],
    col2: 'https://picsum.photos/seed/nexply-svc-04c/700/900',
  },
  {
    num: '05',
    name: 'Project Name Here',
    industry: 'Industry',
    col1: ['https://picsum.photos/seed/nexply-svc-05a/600/400', 'https://picsum.photos/seed/nexply-svc-05b/600/500'],
    col2: 'https://picsum.photos/seed/nexply-svc-05c/700/900',
  },
];

function ProjectCard({ project, index, total }: { project: StackingProject; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh] sticky top-24 md:top-32">
      <motion.div
        style={{
          scale,
          top: index * 28,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.16)',
          backdropFilter: 'blur(24px)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 50px rgba(0,0,0,0.35)',
        }}
        className="relative rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-5 sm:p-7 md:p-9 h-full flex flex-col overflow-hidden"
      >
        {/* Sheen - sells the glass read */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[32px] sm:rounded-[40px] md:rounded-[48px]"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 45%)' }}
        />

        <div className="relative flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black" style={{ color: '#D7E2EA', fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}>
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="uppercase tracking-widest text-xs sm:text-sm" style={{ color: 'rgba(215,226,234,0.6)' }}>
                {project.industry}
              </span>
              <span className="uppercase font-medium" style={{ color: '#D7E2EA', fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}>
                {project.name}
              </span>
              {project.note && (
                <span
                  className="inline-flex items-center gap-1.5 mt-1 rounded-full px-3 py-1 text-[11px] sm:text-xs font-medium w-fit"
                  style={{ background: 'rgba(124,108,255,0.18)', color: '#D7E2EA', border: '1px solid rgba(124,108,255,0.35)' }}
                >
                  {project.note}
                </span>
              )}
            </div>
          </div>
          <VisitWebsiteButton url={project.url} className="shrink-0" />
        </div>

        <div className="relative flex gap-3 sm:gap-4 flex-1">
          <div className="flex flex-col gap-3 sm:gap-4 h-full" style={{ width: '40%' }}>
            <img
              src={project.col1[0]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[36px]"
              style={{ flex: '0 1 40%', minHeight: 0 }}
            />
            <img
              src={project.col1[1]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[36px]"
              style={{ flex: '1 1 58%', minHeight: 0 }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.col2}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[36px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface JackProjectsSectionProps {
  projects?: StackingProject[];
}

export default function JackProjectsSection({ projects }: JackProjectsSectionProps) {
  const items = projects ?? PLACEHOLDER_PROJECTS;

  return (
    <section
      id="client-works"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 pb-48 sm:pb-56 md:pb-64"
      style={{ background: DARK_BG_GRADIENT }}
    >
      <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16" style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}>
        Our Client Works
      </h2>
      <div className="max-w-[1400px] mx-auto">
        {items.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} total={items.length} />
        ))}
      </div>
    </section>
  );
}
