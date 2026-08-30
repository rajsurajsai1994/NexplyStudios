import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import ComingSoonPage from './ComingSoonPage';
import { getBlogPostBySlug, BLOG_POSTS, CATEGORY_LABELS } from '../lib/blogPosts';
import { TEAM, personSchema } from '../lib/team';
import { DARK_BG_FLAT, DARK_BG_GRADIENT, glassDifferentiation, gradientTextStyle } from '../lib/brand';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema, blogPostingSchema } from '../lib/seo';

const DATE_FMT = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return DATE_FMT.format(new Date(y, m - 1, d));
}

function renderParagraph(text: string, linkText: string, linkHref: string) {
  if (!text.includes('{LINK}')) return text;
  const [before, after] = text.split('{LINK}');
  return (
    <>
      {before}
      <Link to={linkHref} className="underline decoration-1 underline-offset-2 transition-colors" style={{ color: '#A78BFA' }}>
        {linkText}
      </Link>
      {after}
    </>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  // Hooks must run unconditionally, so this is called before the early
  // return below - falls back to generic (noindex) values for a bad slug.
  const author = post ? TEAM[post.author] : undefined;

  useSEO({
    title: post ? (post.seoTitle ?? post.title) : 'Nexply Studios Blog',
    description: post ? post.excerpt : 'Nexply Studios blog.',
    path: `/blog/${slug ?? ''}`,
    noindex: !post,
    article:
      post && author
        ? {
            publishedTime: post.datePublished,
            modifiedTime: post.dateModified,
            author: author.name,
            section: CATEGORY_LABELS[post.category],
            tags: post.keywords,
          }
        : undefined,
    jsonLd:
      post && author
        ? [
            ORGANIZATION_SCHEMA,
            personSchema(author),
            blogPostingSchema({
              title: post.title,
              description: post.excerpt,
              path: `/blog/${post.slug}`,
              category: CATEGORY_LABELS[post.category],
              authorId: author.key,
              authorName: author.name,
              datePublished: post.datePublished,
              dateModified: post.dateModified,
              keywords: post.keywords,
            }),
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ]
        : undefined,
  });

  if (!post || !author) return <ComingSoonPage />;

  const related = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug));

  return (
    <main>
      <Navbar />

      <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
        <div
          className="relative z-10 flex flex-col items-center text-center mx-auto"
          style={{ maxWidth: 760, padding: 'clamp(140px, 16vw, 200px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 80px)' }}
        >
          <span
            className="text-[11px] font-medium rounded-full px-3 py-1.5 mb-6"
            style={{ border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.75)' }}
          >
            {CATEGORY_LABELS[post.category]}
          </span>
          <h1 className="text-white font-medium mb-4" style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', lineHeight: 1.2 }}>
            {post.title}
          </h1>
          <p className="text-sm flex flex-wrap items-center justify-center gap-x-2 gap-y-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span>
              By{' '}
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer author"
                className="underline decoration-1 underline-offset-2 hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {author.name}
              </a>
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </p>
        </div>
      </section>

      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 mx-auto flex flex-col gap-6"
          style={{ maxWidth: 700, padding: 'clamp(56px, 7vw, 80px) clamp(16px, 4vw, 40px) clamp(80px, 10vw, 120px)' }}
        >
          {post.paragraphs.map((para, i) => (
            <p key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(15px, 1.15vw, 18px)', lineHeight: 1.8 }}>
              {i === post.linkParagraphIndex ? renderParagraph(para, post.linkText, post.linkHref) : para}
            </p>
          ))}

          <Link
            to={post.linkHref}
            className="group inline-flex items-center gap-2 self-start rounded-full px-6 py-3 text-sm font-medium mt-4 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06]"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
          >
            Explore this service
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Author byline */}
          <div
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl px-5 py-4"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
          >
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Written by{' '}
              <span className="text-white font-medium">{author.name}</span> — {author.role}.
            </span>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer author"
              className="inline-flex items-center gap-1 text-sm underline decoration-1 underline-offset-2"
              style={{ color: '#A78BFA' }}
            >
              Connect on LinkedIn
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
          <div
            className="relative z-10 flex flex-col items-center"
            style={{ padding: 'clamp(56px, 7vw, 90px) clamp(16px, 4vw, 40px)' }}
          >
            <h2 className="text-white font-medium mb-12 text-center" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
              You might also <span style={gradientTextStyle}>like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[860px]">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group relative rounded-2xl overflow-hidden backdrop-blur-md p-6"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <span
                    className="relative inline-block text-[11px] font-medium rounded-full px-3 py-1.5 mb-4"
                    style={{ border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}
                  >
                    {CATEGORY_LABELS[r.category]}
                  </span>
                  <p className="relative text-white font-medium leading-snug mb-2">{r.title}</p>
                  <span
                    className="relative inline-flex items-center gap-1.5 text-xs"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    Read more
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTABanner />
      <Footer />
    </main>
  );
}
