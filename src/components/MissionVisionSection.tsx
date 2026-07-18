import { Target, Eye } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientTextStyle } from '../lib/brand';

export default function MissionVisionSection() {
  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px)' }}
      >
        <div className="flex flex-col items-center text-center gap-4 mb-16" style={{ maxWidth: 1100 }}>
          <h2
            className="text-white font-medium"
            style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.2 }}
          >
            We started Nexply to close one gap:
            <br />
            <span style={gradientTextStyle}>great work shouldn't need a big-brand budget.</span>
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            We're a small studio that works like a full department - design, development, and
            marketing, all pulling in the same direction for every brand we take on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full max-w-[1000px]">
          {[
            {
              icon: <Target size={22} color="white" />,
              title: 'Our Mission',
              text: "To give every business - big or small - access to the kind of creative and marketing firepower that used to be reserved for brands with massive budgets.",
            },
            {
              icon: <Eye size={22} color="white" />,
              title: 'Our Vision',
              text: "A world where great design and smart marketing aren't a luxury - they're just how every ambitious brand gets built.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl backdrop-blur-md p-8"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 30%)' }}
              />
              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(137deg, #7C6CFF 0%, #A78BFA 45%, #6D5DFC 100%)' }}
              >
                {card.icon}
              </div>
              <h3 className="relative text-white font-medium text-xl mb-3">{card.title}</h3>
              <p className="relative" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6 }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
