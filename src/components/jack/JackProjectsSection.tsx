import { DARK_BG_GRADIENT } from '../../lib/brand';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import LiveProjectButton from './LiveProjectButton';

interface Project {
  num: string;
  name: string;
  category: string;
  col1: [string, string];
  col2: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  // Placeholder entries - swap in real project names/images when available.
  {
    num: '04',
    name: 'Project Name Here',
    category: 'Client',
    col1: [
      'https://picsum.photos/seed/nexply-svc-04a/600/400',
      'https://picsum.photos/seed/nexply-svc-04b/600/500',
    ],
    col2: 'https://picsum.photos/seed/nexply-svc-04c/700/900',
  },
  {
    num: '05',
    name: 'Project Name Here',
    category: 'Client',
    col1: [
      'https://picsum.photos/seed/nexply-svc-05a/600/400',
      'https://picsum.photos/seed/nexply-svc-05b/600/500',
    ],
    col2: 'https://picsum.photos/seed/nexply-svc-05c/700/900',
  },
];

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
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
                {project.category}
              </span>
              <span className="uppercase font-medium" style={{ color: '#D7E2EA', fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}>
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton className="shrink-0" />
        </div>

        <div className="relative flex gap-3 sm:gap-4 flex-1">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1[0]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[36px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[36px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
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

export default function JackProjectsSection() {
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
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
