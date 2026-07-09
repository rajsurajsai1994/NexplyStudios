interface ServiceIconProps {
  level: 1 | 2 | 3 | 4;
}

// Base circle path shared by all cards, with progressively larger filled
// circles (radius 2, 3, 4) mirrored via matrix transform for cards 2-4.
export default function ServiceIcon({ level }: ServiceIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="rgb(200,111,255)" strokeWidth="1.2" fill="none" />
      {level >= 2 && <circle r="2" fill="rgb(200,111,255)" transform="matrix(-1 0 0 1 4 8)" />}
      {level >= 3 && <circle r="3" fill="rgb(200,111,255)" transform="matrix(-1 0 0 1 3 8)" />}
      {level >= 4 && <circle r="4" fill="rgb(200,111,255)" transform="matrix(-1 0 0 1 2 8)" />}
    </svg>
  );
}
