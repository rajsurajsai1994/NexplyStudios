import { DARK_BG_GRADIENT } from '../../lib/brand';
import AppCaseStudyCard, { type AppCaseStudy } from './AppCaseStudyCard';

interface AppShowcaseSectionProps {
  heading?: string;
  subtext?: string;
  studies: AppCaseStudy[];
}

// Wraps one or more AppCaseStudyCard entries under the standard "Our
// Client Works" heading - built to take more than one card, so additional
// apps can be added to the `studies` array later without touching layout.
export default function AppShowcaseSection({ heading = 'Our Client Works', subtext, studies }: AppShowcaseSectionProps) {
  return (
    <section
      id="client-works"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14"
      style={{ background: DARK_BG_GRADIENT }}
    >
      <div
        className="flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px) clamp(96px, 12vw, 160px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-14" style={{ maxWidth: 900 }}>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 48px)' }}>
            {heading}
          </h2>
          {subtext && (
            <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)', maxWidth: 640 }}>
              {subtext}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-10 w-full items-center">
          {studies.map((study) => (
            <AppCaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
