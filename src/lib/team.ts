import { SITE_URL } from '../hooks/useSEO';

// Canonical people entities - used for blog author bylines and Person
// structured data. Real names + LinkedIn so search / answer engines can
// tie the content to an accountable author (a strong E-E-A-T / GEO signal).
export interface TeamMember {
  key: string;
  name: string;
  role: string;
  linkedin: string;
}

export const TEAM: Record<string, TeamMember> = {
  suraj: {
    key: 'suraj',
    name: 'Suraj Sai Paluri',
    role: 'Product Design & Strategy, Creative Head at Nexply Studios',
    linkedin: 'https://www.linkedin.com/in/suraj-sai/',
  },
  hanish: {
    key: 'hanish',
    name: 'Hanish Sara',
    role: 'Development Lead at Nexply Studios',
    linkedin: 'https://www.linkedin.com/in/hanishsara/',
  },
};

export type AuthorKey = keyof typeof TEAM;

// schema.org Person for an author - referenceable by @id so a page can
// include it once and point BlogPosting.author at it.
export function personSchema(member: TeamMember) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person-${member.key}`,
    name: member.name,
    jobTitle: member.role,
    url: member.linkedin,
    sameAs: [member.linkedin],
    worksFor: { '@id': `${SITE_URL}/#organization` },
  };
}
