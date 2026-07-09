import { useState, type ReactNode } from 'react';
import { gradientA } from '../lib/brand';

interface ServiceCardProps {
  label: string;
  icon: ReactNode;
  title: ReactNode;
  bullets: string[];
}

const HOVER_IMG =
  'https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/682c7cb62b8800a7594c5abd_hover_card_img.png';
const BULLET_SVG =
  'https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/683ef70a24657b10be91ef49_bullet-list.svg';

export default function ServiceCard({ label, icon, title, bullets }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-[36px] cursor-pointer"
      style={{
        background: 'rgba(10,5,20,0.88)',
        backdropFilter: 'blur(36px)',
        WebkitBackdropFilter: 'blur(36px)',
        height: 'clamp(320px, 32vw, 500px)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top image layer */}
      <div
        className="absolute top-0 left-0 right-0 transition-all duration-500"
        style={{
          height: '55%',
          zIndex: 1,
          transform: hovered ? 'translateY(0)' : 'translateY(-30%)',
          opacity: hovered ? 1 : 0.7,
        }}
      >
        <img
          src={HOVER_IMG}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      {/* Bottom overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 transition-all duration-500"
        style={{
          height: '55%',
          zIndex: 1,
          background: 'linear-gradient(to top, rgba(10,5,20,0.95) 60%, transparent)',
          transform: hovered ? 'translateY(0)' : 'translateY(100%)',
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col h-full"
        style={{
          zIndex: 2,
          padding: 'clamp(16px, 1.94vw, 32px) clamp(18px, 2.36vw, 36px)',
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full self-start"
          style={{
            background: 'rgb(41,31,57)',
            padding: 'clamp(6px,0.7vw,12px) clamp(10px,1.25vw,20px)',
            color: '#ffffff',
          }}
        >
          <span style={{ width: 'max(1.11vw, 14px)', height: 17, display: 'flex', alignItems: 'center' }}>
            {icon}
          </span>
          <span className="text-sm">{label}</span>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Title */}
        <h3
          className="text-white font-medium leading-snug transition-transform duration-500"
          style={{
            fontSize: 'clamp(16px, 1.7vw, 24px)',
            transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          }}
        >
          {title}
        </h3>

        {/* Bullets */}
        <ul className="flex flex-col mt-3" style={{ gap: 10 }}>
          {bullets.map((bullet) => (
            <li
              key={bullet}
              style={{
                color: 'rgb(189,174,231)',
                fontSize: 'clamp(12px,1vw,15px)',
                paddingLeft: 'clamp(22px,1.8vw,28px)',
                backgroundImage: `url(${BULLET_SVG})`,
                backgroundSize: '18px',
                backgroundPosition: '0% 50%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {bullet}
            </li>
          ))}
        </ul>

        {/* Learn more button */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: hovered ? 80 : 0,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(20px)',
            marginTop: hovered ? 12 : 0,
          }}
        >
          <button
            className="w-full text-white rounded-xl text-center"
            style={{
              background: gradientA,
              padding: 'clamp(10px,0.9vw,14px) 0',
              fontSize: 'clamp(13px,1.1vw,16px)',
            }}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
