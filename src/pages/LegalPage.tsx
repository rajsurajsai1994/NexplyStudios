import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DARK_BG_FLAT, DARK_BG_GRADIENT, glassDifferentiation, gradientTextStyle } from '../lib/brand';
import type { LegalDoc } from '../lib/legal';
import { useSEO } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema } from '../lib/seo';

const DESCRIPTIONS: Record<LegalDoc['slug'], string> = {
  privacy:
    'How Nexply Studios collects, uses, and protects your information when you use nexplystudio.com - in plain language.',
  terms: 'The terms that govern your use of the Nexply Studios website.',
};

function renderLine(line: string, i: number) {
  if (line.startsWith('- ')) {
    return (
      <li key={i} style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(14px, 1.05vw, 16px)', lineHeight: 1.75 }}>
        {line.slice(2)}
      </li>
    );
  }
  return (
    <p key={i} style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(14px, 1.05vw, 16px)', lineHeight: 1.8 }}>
      {line}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  useSEO({
    title: doc.title,
    description: DESCRIPTIONS[doc.slug],
    path: `/${doc.slug}`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${doc.title} - Nexply Studios`,
        url: `https://www.nexplystudio.com/${doc.slug}`,
        inLanguage: 'en-IN',
        dateModified: doc.lastUpdated,
        isPartOf: { '@id': 'https://www.nexplystudio.com/#website' },
        about: { '@id': 'https://www.nexplystudio.com/#organization' },
      },
      ORGANIZATION_SCHEMA,
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: doc.title, path: `/${doc.slug}` },
      ]),
    ],
  });

  return (
    <main>
      <Navbar />

      <section className="relative" style={{ background: DARK_BG_GRADIENT }}>
        <div
          className="relative z-10 mx-auto text-center"
          style={{ maxWidth: 760, padding: 'clamp(140px, 16vw, 200px) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 72px)' }}
        >
          <h1 className="text-white font-medium" style={{ fontSize: 'clamp(30px, 4.5vw, 50px)', lineHeight: 1.15 }}>
            {doc.title.split(' ')[0]}{' '}
            <span style={gradientTextStyle}>{doc.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Last updated {doc.lastUpdated}
          </p>
        </div>
      </section>

      <section className="relative" style={{ background: DARK_BG_FLAT }}>
        <div className="absolute inset-0 pointer-events-none" style={glassDifferentiation('rgba(124,108,255,0.05)')} />
        <div
          className="relative z-10 mx-auto"
          style={{ maxWidth: 760, padding: 'clamp(48px, 7vw, 80px) clamp(16px, 4vw, 40px) clamp(80px, 10vw, 120px)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(15px, 1.15vw, 17px)', lineHeight: 1.8 }}>
            {doc.intro}
          </p>

          <div className="flex flex-col gap-10 mt-12">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-white font-medium mb-3" style={{ fontSize: 'clamp(19px, 2vw, 24px)' }}>
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-3">
                  {(() => {
                    const out: React.ReactNode[] = [];
                    let bullets: string[] = [];
                    section.body.forEach((line, i) => {
                      if (line.startsWith('- ')) {
                        bullets.push(line);
                      } else {
                        if (bullets.length) {
                          out.push(
                            <ul key={`ul-${i}`} className="list-disc pl-5 flex flex-col gap-2">
                              {bullets.map((b, bi) => renderLine(b, bi))}
                            </ul>,
                          );
                          bullets = [];
                        }
                        out.push(renderLine(line, i));
                      }
                    });
                    if (bullets.length) {
                      out.push(
                        <ul key="ul-last" className="list-disc pl-5 flex flex-col gap-2">
                          {bullets.map((b, bi) => renderLine(b, bi))}
                        </ul>,
                      );
                    }
                    return out;
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
