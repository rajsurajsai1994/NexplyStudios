import Navbar from '../components/Navbar';
import FinalCTABanner from '../components/FinalCTABanner';
import Footer from '../components/Footer';
import { DARK_BG_FLAT, DARK_BG_GRADIENT, glassDifferentiation, gradientTextStyle } from '../lib/brand';
import { useSEO, SITE_URL } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema } from '../lib/seo';

interface Term {
  term: string;
  short: string;
  body: string[];
  example: string;
}

const TERMS: Term[] = [
  {
    term: 'SEO (Search Engine Optimization)',
    short: 'Getting your website to rank in normal Google search results.',
    body: [
      'The broad practice of making a website easy for search engines to understand and rank - fast pages, clear content that matches what people search for, a sensible structure, links from other sites, and technical basics like a sitemap and structured data.',
      'When people say "SEO" without qualifying it, they usually mean ranking in the standard list of blue links for searches that are not tied to a location.',
    ],
    example: 'A search for "clinic management software" - you want your page in the top results nationally.',
  },
  {
    term: 'Local SEO',
    short: 'Showing up when someone nearby searches for what you do.',
    body: [
      'A specific slice of SEO focused on location-based searches - "physio near me", "printing shop in Gachibowli". It is driven mostly by your Google Business Profile (categories, reviews, photos, correct hours), consistent name-address-phone details across the web, and location-specific pages on your site.',
      'For a business with a physical location or a service area, local SEO usually produces faster, more visible results than general SEO - calls and direction requests rather than distant traffic.',
    ],
    example: 'Someone in Kondapur searches "sports rehab near me" and your clinic is in the map pack of three results.',
  },
  {
    term: 'AEO (Answer Engine Optimization)',
    short: 'Being the source a direct answer is pulled from.',
    body: [
      'Optimising so that when a search engine answers a question directly - a featured snippet, a "People also ask" box, a voice-assistant reply - your page is the one it quotes.',
      'It rewards content written as clear, self-contained answers to real questions, with an obvious question-and-answer structure and supporting FAQ schema, rather than long marketing prose.',
    ],
    example: 'Someone asks Google "how long does physiotherapy for a rotator cuff take" and the answer box quotes your treatment page.',
  },
  {
    term: 'GEO (Generative Engine Optimization)',
    short: 'Getting named and cited by AI chat tools.',
    body: [
      'Optimising to be referenced by generative AI systems - ChatGPT, Perplexity, Claude, Gemini - when they compose an answer. These tools synthesise from many sources and often cite the ones they used.',
      'GEO overlaps heavily with AEO and good SEO: clear, factual, well-structured text; consistent information about your business across the web; and structured data that tells a machine plainly what you are, where you are, and what you do. If your key details are baked into an image, you are invisible to this layer.',
    ],
    example: 'Someone asks ChatGPT "who is a good physio in Madhapur" and your clinic is one of the names it returns.',
  },
  {
    term: 'AI Overviews',
    short: "Google's own AI-generated summary at the top of some results.",
    body: [
      'A specific Google feature: an AI-written summary that appears above the normal results for many searches, pulling from and linking to several web pages.',
      'Appearing in AI Overviews is a GEO and AEO outcome on Google specifically. The same fundamentals apply - answer the question clearly, structure the page well, and keep your business information consistent everywhere.',
    ],
    example: 'You search "best way to improve local ranking" and Google shows a summary paragraph with links before any blue link.',
  },
];

const AIO_NOTE =
  'You may also see "AIO" used loosely to mean "AI Optimization" - an umbrella term for GEO plus AEO plus appearing in AI Overviews. We treat it as the combined goal rather than a separate technique.';

export default function GlossaryPage() {
  useSEO({
    title: 'SEO, Local SEO, AEO, GEO & AI Overviews - Glossary',
    description:
      'A plain-language glossary of the search terms agencies throw around - SEO, local SEO, AEO, GEO, and Google AI Overviews - and how they differ, with examples.',
    path: '/glossary',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        '@id': `${SITE_URL}/glossary#termset`,
        name: 'Search & AI visibility glossary',
        description: 'Plain-language definitions of SEO, local SEO, AEO, GEO and AI Overviews.',
        inLanguage: 'en-IN',
        hasDefinedTerm: TERMS.map((t) => ({
          '@type': 'DefinedTerm',
          name: t.term,
          description: `${t.short} ${t.body.join(' ')}`,
          inDefinedTermSet: `${SITE_URL}/glossary#termset`,
        })),
      },
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Glossary', path: '/glossary' },
      ]),
    ],
  });

  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden" style={{ background: DARK_BG_GRADIENT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.1)')} />
        <div
          className="relative z-10 mx-auto flex flex-col items-center text-center"
          style={{ maxWidth: 720, padding: 'clamp(140px, 17vw, 210px) clamp(16px, 4vw, 40px) clamp(40px, 5vw, 64px)' }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Glossary
          </span>
          <h1 className="text-white font-medium" style={{ fontSize: 'clamp(28px, 4.2vw, 48px)', lineHeight: 1.15 }}>
            SEO, local SEO, AEO, GEO and <span style={gradientTextStyle}>AI Overviews</span>
          </h1>
          <p className="mt-5" style={{ color: 'rgb(189, 174, 231)', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.6 }}>
            Five terms agencies use interchangeably that actually mean different things. Here is the
            plain version, with an example for each.
          </p>
        </div>
      </section>

      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 mx-auto flex flex-col gap-5"
          style={{ maxWidth: 760, padding: 'clamp(56px, 7vw, 100px) clamp(16px, 4vw, 40px)' }}
        >
          {TERMS.map((t) => (
            <div
              key={t.term}
              className="rounded-2xl backdrop-blur-md p-6 sm:p-7"
              style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
            >
              <h2 className="text-white font-medium mb-1.5" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
                {t.term}
              </h2>
              <p className="mb-4 font-medium" style={{ color: '#C4B5FD', fontSize: 15 }}>
                {t.short}
              </p>
              <div className="flex flex-col gap-3">
                {t.body.map((para, i) => (
                  <p key={i} style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14.5, lineHeight: 1.7 }}>
                    {para}
                  </p>
                ))}
              </div>
              <p
                className="mt-4 rounded-xl px-4 py-3 text-[13.5px]"
                style={{ background: 'rgba(124,108,255,0.08)', border: '1px solid rgba(124,108,255,0.2)', color: 'rgba(255,255,255,0.8)' }}
              >
                <span className="font-semibold" style={{ color: '#C4B5FD' }}>Example: </span>
                {t.example}
              </p>
            </div>
          ))}

          <p className="text-[13.5px] mt-2" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
            {AIO_NOTE}
          </p>
        </div>
      </section>

      <FinalCTABanner />
      <Footer />
    </main>
  );
}
