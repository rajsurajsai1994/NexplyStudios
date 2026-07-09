interface VisitWebsiteButtonProps {
  url?: string;
  className?: string;
}

export default function VisitWebsiteButton({ url, className = '' }: VisitWebsiteButtonProps) {
  const classes = `rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 inline-block text-center ${className}`;
  const style = { borderColor: '#D7E2EA', color: '#D7E2EA' };

  // No URL yet (placeholder project) - render a disabled-looking span
  // instead of a dead or misleading link.
  if (!url) {
    return (
      <span className={classes} style={{ ...style, opacity: 0.5, cursor: 'default' }}>
        Visit Website
      </span>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes} style={style}>
      Visit Website
    </a>
  );
}
