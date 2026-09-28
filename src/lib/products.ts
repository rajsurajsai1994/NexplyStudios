import { createElement } from 'react';
import { HeartPulse } from 'lucide-react';

// In-house SaaS products built by Nexply Studios. Powers the "Our Products"
// nav dropdown; each entry links to its own product landing page at
// /products/<slug>. Only CareSync for now - the list is here so adding a
// second product later is a one-line change, same pattern as services.ts.
// NOTE: the product's public name is "CareSync" (renamed from the working
// name "CareNext" in Sep 2026). Source files, component names, and the
// CARENEXT_* token prefix in lib/carenext.ts were kept as-is internally to
// avoid a large low-value rename - only user-facing copy, the slug, and
// schema changed.
export const NEXPLY_PRODUCTS = [
  {
    name: 'CareSync',
    slug: 'caresync',
    tagline: 'Clinic Management System',
    icon: createElement(HeartPulse, { size: 18, strokeWidth: 2.4 }),
    // Product accent - a clinical teal/sky gradient, distinct from the
    // main Nexply brand gradient, reused across the CareSync landing page.
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #2DD4BF 100%)',
  },
];
