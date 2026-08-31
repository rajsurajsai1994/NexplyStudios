import { createElement, type ReactNode } from 'react';
import {
  Users,
  ReceiptText,
  Stethoscope,
  Building2,
  FolderInput,
  ClipboardList,
  Activity,
  Wallet,
  ShieldCheck,
  CalendarClock,
  CalendarCheck,
  NotebookPen,
  FileText,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Calculator,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// CareNext - product tokens
// ---------------------------------------------------------------------------
// CareNext runs entirely on a light "clinical" surface - the same palette as
// the "Introducing CareNext" section - so the whole page reads like a real
// medical SaaS product tour. No dark bookends, no ECG motif.
export const CARENEXT_TEAL = '#0D9488';
export const CARENEXT_SKY = '#0EA5E9';
export const CARENEXT_MINT = '#5EEAD4';
export const CARENEXT_GRADIENT = 'linear-gradient(135deg, #0EA5E9 0%, #2DD4BF 100%)';

// Light clinical surface tokens.
export const CARENEXT_LIGHT_BG = '#F4F9FA';
export const CARENEXT_SURFACE = '#FFFFFF';
export const CARENEXT_INK = '#0F2E36';
export const CARENEXT_INK_SOFT = '#4A6B73';
export const CARENEXT_HAIRLINE = '#DCEAEC';
export const CARENEXT_ACCENT = '#0D9488';
export const CARENEXT_ACCENT_SOFT = 'rgba(13,148,136,0.10)';

// Teal gradient text tuned for a light background.
export const carenextInkGradientText = {
  backgroundImage: 'linear-gradient(120deg, #0EA5E9 0%, #0D9488 60%, #14B8A6 100%)',
  backgroundClip: 'text' as const,
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  color: 'transparent',
};

// Soft clinical wash - a teal glow used behind hero / CTA sections on the
// light surface.
export const carenextGlow = (tint = 'rgba(13,148,136,0.08)') => ({
  background: `radial-gradient(ellipse 70% 55% at 50% 0%, ${tint}, transparent 72%)`,
});

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export interface CareNextChallenge {
  title: string;
  text: string;
  icon: ReactNode;
}

// "The reality today" - the manual, fragmented status quo CareNext replaces.
export const CARENEXT_CHALLENGES: CareNextChallenge[] = [
  {
    title: 'Scattered patient records',
    text: 'Histories split across paper files, spreadsheets, and WhatsApp chats - nothing in one place.',
    icon: createElement(FolderInput, { size: 20 }),
  },
  {
    title: 'No cross-branch visibility',
    text: "Owners can't see revenue, attendance, or staff status across locations without asking around.",
    icon: createElement(Building2, { size: 20 }),
  },
  {
    title: 'Missed follow-ups & no-shows',
    text: 'No automated reminders, so recovery plans stall and revenue quietly leaks every week.',
    icon: createElement(CalendarClock, { size: 20 }),
  },
  {
    title: 'Doctor scheduling chaos',
    text: 'Leave requests, session overlaps, and availability all tracked in registers and group chats.',
    icon: createElement(Stethoscope, { size: 20 }),
  },
  {
    title: 'Manual, error-prone billing',
    text: "Invoices built by hand, with no clear view of what's paid, partly paid, or still pending.",
    icon: createElement(ReceiptText, { size: 20 }),
  },
];

// ---------------------------------------------------------------------------
// Feature showcase - visual cards (each rendered with a small mock on top)
// ---------------------------------------------------------------------------
export type CareNextShowcaseKey =
  | 'scheduling'
  | 'multibranch'
  | 'billing'
  | 'staff';

export interface CareNextShowcaseCard {
  key: CareNextShowcaseKey;
  title: string;
  text: string;
  icon: ReactNode;
}

export const CARENEXT_SHOWCASE: CareNextShowcaseCard[] = [
  {
    key: 'scheduling',
    title: 'Appointment scheduling',
    text: 'A day and week calendar per doctor, quick reschedules, and a built-in no-show workflow.',
    icon: createElement(CalendarCheck, { size: 18 }),
  },
  {
    key: 'multibranch',
    title: 'Multi-branch operations',
    text: 'One login across every location, with a consolidated view you can filter to any single clinic.',
    icon: createElement(Building2, { size: 18 }),
  },
  {
    key: 'billing',
    title: 'Billing & invoicing',
    text: 'Branded invoices generated from the patient profile, with clear paid / partial / pending status.',
    icon: createElement(ReceiptText, { size: 18 }),
  },
  {
    key: 'staff',
    title: 'Doctor & staff management',
    text: 'Per-branch schedules, leave balances, and approvals - no more registers or side chats.',
    icon: createElement(Stethoscope, { size: 18 }),
  },
];

// ---------------------------------------------------------------------------
// Standout feature - the specialty-trained AI assistant (given top billing)
// ---------------------------------------------------------------------------
export const CARENEXT_AI_FEATURE = {
  eyebrow: 'New',
  title: 'An AI assistant trained on your specialization',
  text:
    "CareNext includes an AI assistant tuned to your field - physiotherapy, dermatology, dental, or whatever you practise. Doctors can ask it for clinical references, standard protocols, drug and exercise information, and plain-language explanations to share with patients. It is there to help your team keep learning, not to replace clinical judgement.",
  points: [
    'Answers grounded in your specialty, not generic medical search',
    'Draft patient-education notes and home-care instructions in seconds',
    'Available to every doctor on the plan, on every branch',
  ],
};

export interface CareNextRole {
  name: string;
  summary: string;
  points: string[];
  icon: ReactNode;
  featured?: boolean;
}

// "Built for every role" - four dedicated logins, each scoped to what that
// person actually needs to see and do.
export const CARENEXT_ROLES: CareNextRole[] = [
  {
    name: 'Admin',
    summary: 'The owner or practice manager - the full picture.',
    points: [
      'Full visibility across every branch',
      'Revenue, expenses & live profit margin',
      "All doctors' schedules & leave approvals",
      'Sees every note, including private ones',
    ],
    icon: createElement(ShieldCheck, { size: 20 }),
    featured: true,
  },
  {
    name: 'Doctor',
    summary: 'Focused on their own patients and clinical work.',
    points: [
      'Their own schedule & assigned patients only',
      'Add clinical notes, private notes & prescriptions',
      'Apply for leave and track their own balance',
      "No access to other doctors' finances",
    ],
    icon: createElement(Activity, { size: 20 }),
  },
  {
    name: 'Receptionist',
    summary: 'Runs the front desk across every doctor.',
    points: [
      'Register patients & book appointments',
      'Generate invoices & record payments',
      'Manage the front-desk calendar across doctors',
      'No access to clinical notes or profit data',
    ],
    icon: createElement(ClipboardList, { size: 20 }),
  },
  {
    name: 'Accounts / CA',
    summary: 'Your accountant or CA - the numbers, not the patients.',
    points: [
      'Branch-wise revenue, expense & profit reports',
      'Invoices, payments & tax-ready exports',
      'Read-only - no patient records or clinical notes',
      'Statements for any date range or branch',
    ],
    icon: createElement(Calculator, { size: 20 }),
  },
];

export interface CareNextRecordPoint {
  title: string;
  text: string;
  icon: ReactNode;
}

// Deep-dive: what a single patient record holds in CareNext.
export const CARENEXT_RECORD_POINTS: CareNextRecordPoint[] = [
  {
    title: 'One centralized profile',
    text: 'Demographics, condition or injury type, assigned doctor, and home clinic - all on one record.',
    icon: createElement(Users, { size: 20 }),
  },
  {
    title: 'Chronological clinical notes',
    text: 'Every note in order, attributed to the doctor who wrote it - a clean, auditable history.',
    icon: createElement(ClipboardList, { size: 20 }),
  },
  {
    title: 'Private doctor-only notes',
    text: 'Doctors can flag a note as private - visible only to other doctors and admins, never the front desk or the patient.',
    icon: createElement(NotebookPen, { size: 20 }),
  },
  {
    title: 'Prescriptions in a click',
    text: 'Prescribe exercises or medication from the profile. It saves to the record and goes straight to the patient on WhatsApp.',
    icon: createElement(FileText, { size: 20 }),
  },
  {
    title: 'Visual progress tracker',
    text: 'See exactly where a patient is in their treatment plan - e.g. session 4 of 15 - at a glance.',
    icon: createElement(Activity, { size: 20 }),
  },
  {
    title: 'Automatic payment summary',
    text: 'Total billed, paid, and pending for the patient, updated the moment anything changes.',
    icon: createElement(Wallet, { size: 20 }),
  },
];

export interface CareNextStat {
  value: string;
  label: string;
  icon: ReactNode;
}

// Proof points from the flagship deployment (PAL Physiotherapy & Sports Rehab).
export const CARENEXT_PROOF_STATS: CareNextStat[] = [
  { value: '2 branches', label: 'Live across Madhapur & Kondapur', icon: createElement(Building2, { size: 18 }) },
  { value: 'One system', label: 'Patients, billing, staff & reminders', icon: createElement(ClipboardList, { size: 18 }) },
  { value: 'Every day', label: 'Run by clinic staff, not developers', icon: createElement(Activity, { size: 18 }) },
];

// ---------------------------------------------------------------------------
// Full feature list (grouped) - used by CareNextFeatures
// ---------------------------------------------------------------------------
export interface CareNextFeatureGroup {
  label: string;
  items: { icon: ReactNode; title: string; text: string }[];
}

export const CARENEXT_FEATURE_GROUPS: CareNextFeatureGroup[] = [
  {
    label: 'At the front desk',
    items: [
      { icon: createElement(Users, { size: 18 }), title: 'Patient Management', text: 'Unified profiles with demographics, treatment history, payments, and session tracking.' },
      { icon: createElement(CalendarCheck, { size: 18 }), title: 'Appointments & Scheduling', text: 'Day and week views, quick reschedules, and a built-in no-show / cancellation workflow.' },
      { icon: createElement(ReceiptText, { size: 18 }), title: 'Billing & Invoicing', text: 'Auto-generated, branded invoices with clear paid / partial / unpaid status on every one.' },
    ],
  },
  {
    label: 'Clinical & staff',
    items: [
      { icon: createElement(Stethoscope, { size: 18 }), title: 'Doctor & Staff Management', text: 'Per-branch schedules, leave balances, and approvals - no more registers or side chats.' },
      { icon: createElement(NotebookPen, { size: 18 }), title: 'Private Doctor Notes', text: 'Doctors can leave notes on a patient that only other doctors and admins can see - never the front desk, never the patient.' },
      { icon: createElement(FileText, { size: 18 }), title: 'Prescription Generator', text: 'Prescribe exercises or medication inside CareNext. It saves to the patient record and is sent straight to their WhatsApp.' },
      { icon: createElement(MessageSquare, { size: 18 }), title: 'WhatsApp Automation', text: 'Automatic appointment confirmations and reminders using branch-specific templates.' },
    ],
  },
  {
    label: 'For the owner',
    items: [
      { icon: createElement(Building2, { size: 18 }), title: 'Multi-Branch Operations', text: 'One login across every clinic location, with data filterable by branch at any time.' },
      { icon: createElement(BarChart3, { size: 18 }), title: 'Reports & Analytics', text: 'Revenue trends, attendance rate, no-shows, and appointment patterns at a glance.' },
      { icon: createElement(TrendingUp, { size: 18 }), title: 'Expense & Profit Tracking', text: 'Branch-wise income vs. expense, with a live profit margin you can actually trust.' },
      { icon: createElement(Calculator, { size: 18 }), title: 'Accountant / CA Access', text: 'A finance-only login for your CA - reports and exports, with no access to patient data.' },
    ],
  },
];

export interface CareNextFAQ {
  q: string;
  a: string;
}

export const CARENEXT_FAQS: CareNextFAQ[] = [
  {
    q: 'Is CareNext only for physiotherapy clinics?',
    a: "No. It's built for medical and wellness practices in general - physiotherapy, dental, dermatology, multi-specialty clinics, and wellness centres. Roles, templates, and workflows are configured to how your practice runs.",
  },
  {
    q: 'Can it handle multiple branches?',
    a: 'Yes - multi-branch is core, not an add-on. One login covers every location, staff and doctors are tied to their branch, and owners get a single consolidated view with the option to filter down to any one clinic.',
  },
  {
    q: 'How does the WhatsApp automation work?',
    a: 'CareNext sends automatic appointment confirmations and reminders using branch-specific message templates, so patients get a nudge before every session without anyone on your team following up manually. This is what brings no-show rates down.',
  },
  {
    q: 'Can doctors keep private notes about a patient?',
    a: 'Yes. Alongside the normal clinical notes, a doctor can add a private note on a patient. Private notes are visible only to other doctors who open that patient profile and to admins - the front desk and the patient never see them.',
  },
  {
    q: 'How does the prescription generator work?',
    a: 'From the patient profile, a doctor can prescribe exercises or medication directly in CareNext. The prescription is saved to the patient record and can be sent straight to the patient on WhatsApp, so they leave with clear instructions and you keep a copy.',
  },
  {
    q: 'What is the specialty-trained AI assistant?',
    a: "CareNext includes an AI assistant tuned to your specialization. Doctors can ask it for clinical references, standard protocols, drug and exercise information, and plain-language explanations to share with patients. It's there to help your team keep learning and save time - it doesn't replace clinical judgement.",
  },
  {
    q: 'Is there a login for our accountant or CA?',
    a: 'Yes. The Accounts / CA role is a read-only, finance-only login - branch-wise revenue, expenses, profit, invoices, payments, and tax-ready exports. It has no access to patient records or clinical notes.',
  },
  {
    q: 'Can we add our own custom roles?',
    a: "Yes. Admin, Doctor, Receptionist, and Accounts / CA cover most clinics, but any role can be added and scoped to match your hospital or clinic's structure - a branch manager, a head of department, a billing-only desk, whatever you need.",
  },
  {
    q: 'Is our patient data secure?',
    a: "Access is strictly role-based. Doctors only see their own assigned patients, receptionists can't see financials, the CA can't see patient records, and every clinical note is permanently attributed to the doctor who wrote it. Admins control who can see and do what.",
  },
  {
    q: 'Can we migrate our existing patient records?',
    a: "Yes. During onboarding we help bring across your existing patient list and history so you're not starting from an empty system on day one.",
  },
  {
    q: 'How is CareNext priced?',
    a: 'Pricing depends on your number of branches and the size of your team. Book a demo and we’ll walk through your workflow and share a plan that fits your practice.',
  },
  {
    q: 'How do we get started?',
    a: "Book a demo through our contact form. We walk through your clinic's actual workflow, set up your branches and roles, migrate your data, and get your team onboarded.",
  },
];
