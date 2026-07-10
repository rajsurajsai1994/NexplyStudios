import { gradientA } from '../lib/brand';

interface ContactButtonProps {
  className?: string;
  label?: string;
  href?: string;
  onClick?: () => void;
}

export default function ContactButton({ className = '', label = 'Contact', href = '#contact', onClick }: ContactButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center rounded-xl p-px ${className}`}
      style={{ background: gradientA }}
    >
      <span
        className="rounded-[11px] px-7 py-3 text-base text-white transition-colors duration-300 w-full text-center"
        style={{ background: 'rgb(28,78,255)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = gradientA;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgb(28,78,255)';
        }}
      >
        {label}
      </span>
    </a>
  );
}
