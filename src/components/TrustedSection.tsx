import FeatureCard from './FeatureCard';
import { NEXPLY_SERVICES } from '../lib/services';
import { gradientTextStyle, DARK_BG_GRADIENT } from '../lib/brand';

export default function TrustedSection() {
  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="relative flex flex-col items-center"
        style={{
          padding: 'clamp(100px, 12vw, 180px) clamp(16px, 4vw, 40px) clamp(100px, 12vw, 160px)',
          gap: 110,
        }}
      >
        <div
          className="flex flex-col items-center text-center"
          style={{ maxWidth: 1200, gap: 20 }}
        >
          <h2
            className="text-white font-medium"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.2 }}
          >
            If they can't find you, you don't exist yet.
            <br />
            <span style={gradientTextStyle}>Visibility is built, not luck.</span>
          </h2>
          <p style={{ color: 'rgb(189, 174, 231)', fontSize: 'clamp(14px, 1.25vw, 18px)' }}>
            We make sure your brand shows up the moment people search - and stays with them
            long after.
            <br />
            The version of you the market can't look away from.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-5 lg:gap-6 w-full max-w-[1240px] mx-auto">
          {NEXPLY_SERVICES.map((service, i) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradient={service.gradient}
              delay={i * 0.06}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
