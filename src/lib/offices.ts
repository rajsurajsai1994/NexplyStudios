// Nexply Studios office locations. Listed Canada-first, then India.
export interface Office {
  label: string;
  lines: string[];
  /** Display phone number(s) for this office. */
  phone?: string;
  /** `tel:` href for the office phone. */
  phoneHref?: string;
  /** Optional Google Maps embed query for this office. */
  mapQuery?: string;
}

export const OFFICES: Office[] = [
  {
    label: 'Canada Office',
    lines: ['3495 Rebecca St, Suite 205,', 'Oakville, ON L6L 6X9.'],
    phone: '+1 (416) 732-3567',
    phoneHref: 'tel:+14167323567',
    mapQuery: '3495 Rebecca St, Suite 205, Oakville, ON L6L 6X9',
  },
  {
    label: 'India Office',
    lines: [
      '8th Floor, Suite 30, Jayabheri Silicon Towers,',
      'Hitech City Rd, Kothaguda,',
      'Hyderabad, Telangana 500084.',
    ],
    phone: '+91 78422 03319 · +91 87909 41280',
    phoneHref: 'tel:+917842203319',
    mapQuery:
      'Jayabheri Silicon Towers, Hitech City Rd, Kothaguda, Hyderabad, Telangana 500084',
  },
];
