import { DARK_BG_GRADIENT, gradientTextStyle } from '../../lib/brand';

export default function PublicationFlipbookSection() {
  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-14" style={{ maxWidth: 780 }}>
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'rgba(200,190,230,0.75)' }}
          >
            Real Print Project
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}>
            Signage <span style={gradientTextStyle}>built to be seen.</span>
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            A real board design we produced for a restaurant client.
          </p>
        </div>

        {/* Board Design - real signage piece */}
        <div className="w-full flex justify-center" style={{ maxWidth: 460 }}>
          <div
            className="rounded-2xl overflow-hidden backdrop-blur-md w-full"
            style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.03)', boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}
          >
            <img
              src="/clientwork-kanchukota-board.jpg"
              alt="Board Design - Kanchukota Restaurant Signage"
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
            <div className="px-5 py-4">
              <p className="text-white font-medium">Board Design</p>
              <p className="text-sm mt-0.5" style={{ color: 'rgba(200,190,230,0.75)' }}>
                Kanchukota - Restaurant Signage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
