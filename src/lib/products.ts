import { createElement } from 'react';
import { HeartPulse } from 'lucide-react';

// In-house SaaS products built by Nexply Studios. Powers the "Our Products"
// nav dropdown; each entry links to its own product landing page at
// /products/<slug>. Only CareNext for now - the list is here so adding a
// second product later is a one-line change, same pattern as services.ts.
export const NEXPLY_PRODUCTS = [
  {
    name: 'CareNext',
    slug: 'carenext',
    tagline: 'Clinic Management System',
    icon: createElement(HeartPulse, { size: 18, strokeWidth: 2.4 }),
    // Product accent - a clinical teal/sky gradient, distinct from the
    // main Nexply brand gradient, reused across the CareNext landing page.
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #2DD4BF 100%)',
  },
];
