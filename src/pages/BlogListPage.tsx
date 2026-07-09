import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import { BLOG_POSTS, CATEGORY_LABELS, type BlogCategory } from '../lib/blogPosts';
import { DARK_BG_FLAT, DARK_BG_GRADIENT, glassDifferentiation, gradientTextStyle } from '../lib/brand';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema } from '../lib/seo';

type FilterValue = 'all' | BlogCategory;

export default function BlogListPage() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const filtered = filter === 'all' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === filter);

  useSEO({
    title: 'Blog',
    description:
      'Straightforward notes on design, branding, and building things that work - for designers, brands, and developers.',
    path: '/blog',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
  });

  return (
    <main>
      <Navbar />

      <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
        <div
          className="relative z-10 flex flex-col items-center text-center"
          style={{ padding: 'clamp(140px, 16vw, 200px) clamp(16px, 4vw, 40px) clamp(64px, 8vw, 90px)' }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'rgba(200,190,230,0.7)' }}
          >
            The Nexply Blog
          </span>
          <h1 className="text-white font-medium mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Notes for <span style={gradientTextStyle}>designers, brands, and developers</span>
          </h1>
          <p className="max-w-xl" style={{ color: 'rgb(169, 151, 206)', fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
            Straightforward thoughts on design, branding, and building things that actually work -
            no jargon, no fluff.
          </p>
        </div>
      </section>

      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 flex flex-col items-center"
          style={{ padding: 'clamp(48px, 6vw, 72px) clamp(16px, 4vw, 40px) clamp(80px, 10vw, 120px)' }}
        >
          {/* Filter chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {(['all', 'designers', 'brands', 'developers'] as FilterValue[]).map((f) => {
              const isActive = filter === f;
              const label = f === 'all' ? 'All Posts' : CATEGORY_LABELS[f];
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300"
                  style={
                    isActive
                      ? { background: 'linear-gradient(137deg, #7C6CFF 0%, #A78BFA 45%, #6D5DFC 100%)', color: 'white' }
                      : {
                          border: '1px solid rgba(255,255,255,0.2)',
                          background: 'rgba(255,255,255,0.03)',
                          color: 'rgba(255,255,255,0.75)',
                        }
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group relative rounded-2xl overflow-hidden backdrop-blur-md flex flex-col p-6"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 30%)' }}
                />
                <span
                  className="relative self-start text-[11px] font-medium rounded-full px-3 py-1.5 mb-5"
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {CATEGORY_LABELS[post.category]}
                </span>
                <h2 className="relative text-white font-medium text-lg mb-3 leading-snug">{post.title}</h2>
                <p className="relative text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>
                <div className="relative mt-auto flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {post.readTime}
                  </span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTABanner />
      <Footer />
    </main>
  );
}
