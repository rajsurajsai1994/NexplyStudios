// Plain-language Privacy Policy and Terms of Service for the Nexply Studios
// marketing site. Structured as sections so the page renders with a clean
// heading hierarchy. Update `lastUpdated` whenever the text changes.

export interface LegalSection {
  heading: string;
  body: string[]; // each string is a paragraph; "- " prefix renders as a bullet
}

export interface LegalDoc {
  slug: 'privacy' | 'terms';
  title: string;
  intro: string;
  lastUpdated: string; // e.g. "31 August 2026"
  sections: LegalSection[];
}

const CONTACT_LINE =
  'Nexply Studios, 8th Floor, Suite 30, Jayabheri Silicon Towers, Hitech City Road, Kothaguda, Hyderabad, Telangana 500084, India. Email next@nexplystudio.com or call +91 78422 03319.';

export const PRIVACY_POLICY: LegalDoc = {
  slug: 'privacy',
  title: 'Privacy Policy',
  lastUpdated: '31 August 2026',
  intro:
    'This policy explains what information Nexply Studios collects when you use this website, why we collect it, and the choices you have. We have tried to keep it in plain language.',
  sections: [
    {
      heading: 'Who we are',
      body: [
        'Nexply Studios ("Nexply", "we", "us") is a creative agency based in Hyderabad, India. This website is nexplystudio.com. For anything relating to your privacy, you can reach us at:',
        CONTACT_LINE,
      ],
    },
    {
      heading: 'Information we collect',
      body: [
        'Information you give us. When you use the contact form or email us, we receive your name, email address, phone number (if you provide it), and whatever you write in your message. The contact form is delivered to our inbox by a third-party form service, Web3Forms (Softwidentity DOO); your submission passes through their servers on the way to us. We use this information only to respond to your enquiry and, if you become a client, to deliver the work.',
        'Information collected automatically. Like most websites, our hosting provider records basic technical data such as your IP address, browser type, device type, referring page, and the pages you visit. This is used to keep the site running, secure, and to understand roughly how it is used.',
        'Cookies and embedded content. The site itself does not set advertising or tracking cookies. Some pages embed third-party content - for example a Google Maps frame on the contact page - and that provider may set its own cookies when the content loads. If we add website analytics in future, we will update this policy and, where required, ask for your consent.',
        'We do not knowingly collect information from children, and we do not ask for sensitive personal data through this website.',
      ],
    },
    {
      heading: 'How we use your information',
      body: [
        '- To reply to your enquiry and discuss a possible project.',
        '- To provide services you have engaged us for, and to send project-related updates and invoices.',
        '- To operate, secure, and improve this website.',
        '- To meet legal, accounting, and tax obligations.',
        'We do not sell your personal information, and we do not share it for anyone else’s advertising.',
      ],
    },
    {
      heading: 'Who we share it with',
      body: [
        'We share information only with service providers who help us run our business - for example our website host, our contact-form provider (Web3Forms), our email provider, and, for clients, tools used to deliver and invoice the work. These providers are only permitted to use the information to provide their service to us.',
        'We may also disclose information if required by law, or to protect our rights, safety, or property.',
      ],
    },
    {
      heading: 'How long we keep it',
      body: [
        'Enquiry messages are kept for as long as needed to follow up, and then for a reasonable period for our records. Client records are kept for the duration of the engagement and for as long afterwards as required for legal and accounting purposes. Server logs are kept for a short period.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'Subject to applicable law, including India’s Digital Personal Data Protection Act, 2023, you can ask us to access, correct, or delete the personal information we hold about you, or to stop using it for a particular purpose. To make a request, email next@nexplystudio.com and we will respond within a reasonable time.',
      ],
    },
    {
      heading: 'Security',
      body: [
        'We take reasonable technical and organisational measures to protect information against loss, misuse, and unauthorised access. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy from time to time. When we do, we will change the "last updated" date at the top. Significant changes will be highlighted on this page.',
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDoc = {
  slug: 'terms',
  title: 'Terms of Service',
  lastUpdated: '31 August 2026',
  intro:
    'These terms govern your use of the Nexply Studios website. Paid engagements with Nexply are governed by a separate written agreement or proposal, which takes precedence over these terms for that work.',
  sections: [
    {
      heading: 'Using this website',
      body: [
        'By accessing nexplystudio.com you agree to these terms. If you do not agree, please do not use the site.',
        'You agree not to misuse the site - for example by attempting to break its security, scrape it at a scale that disrupts service, upload malicious code, or use it for anything unlawful.',
      ],
    },
    {
      heading: 'Information on the site',
      body: [
        'The content on this site - articles, service descriptions, case studies, and examples of past work - is provided for general information. We try to keep it accurate and current but make no warranty that it is complete, error-free, or up to date. Nothing on this site is a binding offer or professional advice.',
        'Client names and work shown are published with permission or are representative examples. Results described for past projects are specific to those clients and are not a promise of similar results for others.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'The Nexply Studios name, logo, site design, written content, and graphics are owned by Nexply Studios or its licensors and are protected by law. You may not copy, republish, or reuse them without our written permission, except for normal personal or internal reference use of the articles.',
        'Ownership of deliverables produced under a paid engagement is dealt with in that engagement’s agreement, not here.',
      ],
    },
    {
      heading: 'Links to other sites',
      body: [
        'This site links to and embeds content from third parties (for example Google Maps and LinkedIn). We are not responsible for the content, policies, or practices of those third parties.',
      ],
    },
    {
      heading: 'Limitation of liability',
      body: [
        'To the maximum extent permitted by law, Nexply Studios is not liable for any indirect, incidental, or consequential loss arising from your use of, or inability to use, this website. This does not limit any liability that cannot be excluded under applicable law.',
      ],
    },
    {
      heading: 'Governing law',
      body: [
        'These terms are governed by the laws of India. Any dispute relating to this website will be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.',
      ],
    },
    {
      heading: 'Changes and contact',
      body: [
        'We may update these terms from time to time; the "last updated" date will change when we do. Continued use of the site after an update means you accept the revised terms.',
        `Questions about these terms? Contact ${CONTACT_LINE}`,
      ],
    },
  ],
};

export const LEGAL_DOCS: LegalDoc[] = [PRIVACY_POLICY, TERMS_OF_SERVICE];
