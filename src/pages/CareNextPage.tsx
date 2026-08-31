import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import CareNextHero from '../components/carenext/CareNextHero';
import CareNextChallenges from '../components/carenext/CareNextChallenges';
import CareNextSolution from '../components/carenext/CareNextSolution';
import CareNextFeatureShowcase from '../components/carenext/CareNextFeatureShowcase';
import CareNextFeatures from '../components/carenext/CareNextFeatures';
import CareNextRoles from '../components/carenext/CareNextRoles';
import CareNextRecords from '../components/carenext/CareNextRecords';
import CareNextSecurity from '../components/carenext/CareNextSecurity';
import CareNextProof from '../components/carenext/CareNextProof';
import CareNextCTA from '../components/carenext/CareNextCTA';
import { CARENEXT_FAQS, CARENEXT_LIGHT_BG } from '../lib/carenext';
import { useSEO } from '../hooks/useSEO';
import {
  ORGANIZATION_SCHEMA,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from '../lib/seo';

const CARENEXT_DESCRIPTION =
  'CareNext is a clinic management system by Nexply Studios - patients, appointments, billing, staff, private doctor notes, a prescription generator, a specialty-trained AI assistant, and multi-branch reporting in one secure platform, built for medical and wellness practices.';

export default function CareNextPage() {
  useSEO({
    title: 'CareNext - Clinic Management System',
    description: CARENEXT_DESCRIPTION,
    path: '/products/carenext',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      softwareApplicationSchema({
        name: 'CareNext',
        description: CARENEXT_DESCRIPTION,
        path: '/products/carenext',
        category: 'HealthApplication',
      }),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'CareNext', path: '/products/carenext' },
      ]),
      faqSchema(CARENEXT_FAQS.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  });

  return (
    <main style={{ background: CARENEXT_LIGHT_BG }}>
      <Navbar />
      <CareNextHero />
      <CareNextChallenges />
      <CareNextSolution />
      <CareNextFeatureShowcase />
      <CareNextFeatures />
      <CareNextRoles />
      <CareNextRecords />
      <CareNextSecurity />
      <CareNextProof />
      <FAQSection items={CARENEXT_FAQS} theme="light" />
      <CareNextCTA />
      <Footer />
    </main>
  );
}
