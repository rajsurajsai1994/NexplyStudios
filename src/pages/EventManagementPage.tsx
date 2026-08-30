import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import EventHero from '../components/event/EventHero';
import EventChallenges from '../components/event/EventChallenges';
import EventAudience from '../components/event/EventAudience';
import EventServices from '../components/event/EventServices';
import EventRahul from '../components/event/EventRahul';
import EventProcess from '../components/event/EventProcess';
import EventCTA from '../components/event/EventCTA';
import { EVENT_FAQS, RAHUL } from '../lib/eventManagement';
import { useSEO, SITE_URL } from '../hooks/useSEO';
import { ORGANIZATION_SCHEMA, breadcrumbSchema, serviceSchema, faqSchema } from '../lib/seo';

const DESCRIPTION =
  'Event Industry Growth with Rahul Munigala at Nexply Studios - lead generation and digital marketing built only for wedding planners, corporate event planners, venues, photographers, decorators, caterers and event vendors.';

const RAHUL_PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: RAHUL.name,
  jobTitle: RAHUL.role,
  worksFor: { '@id': `${SITE_URL}/#organization` },
  description: RAHUL.shortBio,
};

export default function EventManagementPage() {
  useSEO({
    title: 'Event Industry Growth - Leads for Event Businesses',
    description: DESCRIPTION,
    path: '/event-management',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      RAHUL_PERSON_SCHEMA,
      serviceSchema({
        name: 'Event Industry Growth & Lead Generation',
        description: DESCRIPTION,
        path: '/event-management',
      }),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Event Management', path: '/event-management' },
      ]),
      faqSchema(EVENT_FAQS.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  });

  return (
    <main>
      <Navbar />
      <EventHero />
      <EventChallenges />
      <EventAudience />
      <EventServices />
      <EventRahul />
      <EventProcess />
      <FAQSection items={EVENT_FAQS} />
      <EventCTA />
      <Footer />
    </main>
  );
}
