import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send, Bookmark, Signal, Wifi, BatteryFull } from 'lucide-react';
import { DARK_BG_GRADIENT, gradientA, gradientTextStyle } from '../../lib/brand';

interface CarouselCampaign {
  id: string;
  handle: string;
  caption: string;
  slides: string[];
}

// Real client carousel posts - each one is an actual multi-slide Instagram
// campaign we built and shipped, not a mockup template.
const CAMPAIGNS: CarouselCampaign[] = [
  {
    id: 'appify-ecom',
    handle: 'appify.app',
    caption: 'Appify - E-commerce App Developer',
    slides: ['/social/carousel-appify-ecom-1.jpg', '/social/carousel-appify-ecom-2.jpg', '/social/carousel-appify-ecom-3.jpg'],
  },
  {
    id: 'appify-creative',
    handle: 'appify.app',
    caption: 'Appify - Creative Campaign',
    slides: ['/social/carousel-appify-creative-1.jpg', '/social/carousel-appify-creative-2.jpg'],
  },
  {
    id: 'handwash',
    handle: 'health.awareness',
    caption: 'Hand Hygiene Awareness Campaign',
    slides: ['/social/carousel-handwash-1.jpg', '/social/carousel-handwash-2.jpg'],
  },
  {
    id: 'enlitedu',
    handle: 'enlitedu',
    caption: 'EnlitEDU - Enrollment Campaign',
    slides: [
      '/social/carousel-enlitedu-1.jpg',
      '/social/carousel-enlitedu-2.jpg',
      '/social/carousel-enlitedu-3.jpg',
      '/social/carousel-enlitedu-4.jpg',
      '/social/carousel-enlitedu-5.jpg',
    ],
  },
];

export default function InstagramCarouselShowcase() {
  const [campaignIndex, setCampaignIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const campaign = CAMPAIGNS[campaignIndex];

  const selectCampaign = (i: number) => {
    setCampaignIndex(i);
    setSlideIndex(0);
  };

  const nextSlide = () => setSlideIndex((i) => (i + 1) % campaign.slides.length);
  const prevSlide = () => setSlideIndex((i) => (i - 1 + campaign.slides.length) % campaign.slides.length);

  return (
    <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
      <div
        className="flex flex-col items-center"
        style={{ padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 80px)' }}
      >
        <div className="flex flex-col items-center text-center gap-3 mb-4" style={{ maxWidth: 640 }}>
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'rgba(200,190,230,0.75)' }}
          >
            Real Carousel Campaigns
          </span>
          <h2 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            Swipe through it <span style={gradientTextStyle}>like they did.</span>
          </h2>
          <p style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            These are real Instagram carousel posts we designed - browse them the same way a
            follower would, slide by slide.
          </p>
        </div>

        {/* Phone mockup */}
        <div
          className="relative mt-8"
          style={{ width: 300, borderRadius: 44, padding: 12, background: '#0a0a0a', boxShadow: '0 30px 70px rgba(0,0,0,0.55)' }}
        >
          {/* Notch */}
          <div
            className="absolute z-20 rounded-full"
            style={{ top: 12, left: '50%', transform: 'translateX(-50%)', width: 110, height: 24, background: '#0a0a0a' }}
          />

          <div className="relative rounded-[32px] overflow-hidden" style={{ background: '#fff' }}>
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1">
              <span style={{ fontSize: 12, fontWeight: 600, color: '#111' }}>11:11 a.m.</span>
              <div className="flex items-center gap-1">
                <Signal size={13} color="#111" />
                <Wifi size={13} color="#111" />
                <BatteryFull size={15} color="#111" />
              </div>
            </div>

            {/* IG header */}
            <div className="flex items-center justify-between px-4 py-2">
              <span style={{ fontFamily: 'cursive', fontSize: 20, color: '#111' }}>nexply</span>
              <div className="flex items-center gap-3">
                <Heart size={18} color="#111" />
                <Send size={16} color="#111" style={{ transform: 'rotate(20deg)' }} />
              </div>
            </div>

            {/* Post header */}
            <div className="flex items-center gap-2.5 px-4 py-2">
              <div
                className="w-8 h-8 rounded-full shrink-0"
                style={{ background: gradientA, padding: 2 }}
              >
                <div className="w-full h-full rounded-full" style={{ background: '#fff', border: '2px solid #fff' }} />
              </div>
              <div className="min-w-0">
                <p style={{ fontSize: 13, fontWeight: 600, color: '#111' }} className="truncate">
                  {campaign.handle}
                </p>
                <p style={{ fontSize: 10.5, color: '#8e8e8e' }}>Sponsored</p>
              </div>
            </div>

            {/* Image / carousel */}
            <div className="relative" style={{ width: '100%', aspectRatio: '1 / 1', background: '#111' }}>
              <img
                key={campaign.slides[slideIndex]}
                src={campaign.slides[slideIndex]}
                alt={`${campaign.caption} - slide ${slideIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {campaign.slides.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.85)' }}
                  >
                    <ChevronLeft size={16} color="#111" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.85)' }}
                  >
                    <ChevronRight size={16} color="#111" />
                  </button>
                  <span
                    className="absolute top-3 right-3 rounded-full px-2 py-0.5 text-white"
                    style={{ background: 'rgba(0,0,0,0.5)', fontSize: 10.5, fontWeight: 600 }}
                  >
                    {slideIndex + 1}/{campaign.slides.length}
                  </span>
                </>
              )}
            </div>

            {/* Action row */}
            <div className="flex items-center justify-between px-4 pt-2.5 pb-1">
              <div className="flex items-center gap-3.5">
                <Heart size={21} color="#111" />
                <MessageCircle size={20} color="#111" style={{ transform: 'scaleX(-1)' }} />
                <Send size={19} color="#111" style={{ transform: 'rotate(20deg)' }} />
              </div>
              <Bookmark size={19} color="#111" />
            </div>

            {/* Slide dots */}
            {campaign.slides.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 pb-2">
                {campaign.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="rounded-full transition-all"
                    style={{
                      width: i === slideIndex ? 6 : 5,
                      height: i === slideIndex ? 6 : 5,
                      background: i === slideIndex ? '#3897f0' : '#c7c7c7',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Caption */}
            <div className="px-4 pb-4">
              <p style={{ fontSize: 12.5, color: '#111' }}>
                <span style={{ fontWeight: 600 }}>{campaign.handle}</span>{' '}
                <span style={{ color: '#555' }}>{campaign.caption}</span>
              </p>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center pb-2">
              <div className="rounded-full" style={{ width: 110, height: 4, background: '#111' }} />
            </div>
          </div>
        </div>

        {/* Campaign selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8" style={{ maxWidth: 720 }}>
          {CAMPAIGNS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => selectCampaign(i)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
              style={
                i === campaignIndex
                  ? { background: gradientA, color: 'white' }
                  : {
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'rgba(255,255,255,0.75)',
                    }
              }
            >
              {c.caption}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
