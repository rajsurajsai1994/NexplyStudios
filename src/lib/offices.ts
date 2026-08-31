// Nexply Studios office locations. Listed Canada-first, then India.
// TODO: add the Canada city / province (and street address when available) -
// currently shows country only.
export interface Office {
  label: string;
  lines: string[];
  /** Optional Google Maps embed query for this office. */
  mapQuery?: string;
}

export const OFFICES: Office[] = [
  {
    label: 'Canada Office',
    lines: ['Canada'],
  },
  {
    label: 'India Office',
    lines: [
      '8th Floor, Suite 30, Jayabheri Silicon Towers,',
      'Hitech City Rd, Kothaguda,',
      'Hyderabad, Telangana 500084.',
    ],
    mapQuery:
      'Jayabheri Silicon Towers, Hitech City Rd, Kothaguda, Hyderabad, Telangana 500084',
  },
];
