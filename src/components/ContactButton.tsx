import { Link } from 'react-router-dom';
import { gradientA } from '../lib/brand';

interface ContactButtonProps {
  className?: string;
  label?: string;
  href?: string;
  onClick?: () => void;
}

export default function ContactButton({ className = '', label = 'Contact', href = '#contact', onClick }: ContactButtonProps) {
  const inner = (
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
  );

  const cls = `group relative inline-flex items-center justify-center rounded-xl p-px ${className}`;

  // Internal route -> client-side navigation; hash / external -> plain anchor.
  if (href.startsWith('/')) {
    return (
      <Link to={href} onClick={onClick} className={cls} style={{ background: gradientA }}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} onClick={onClick} className={cls} style={{ background: gradientA }}>
      {inner}
    </a>
  );
}
