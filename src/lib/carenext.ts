import { createElement, type ReactNode } from 'react';
import {
  Users,
  CalendarCheck,
  ReceiptText,
  Stethoscope,
  Building2,
  MessageSquare,
  BarChart3,
  TrendingUp,
  FolderInput,
  ClipboardList,
  Activity,
  Wallet,
  ShieldCheck,
  CalendarClock,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// CareNext - product tokens
// ---------------------------------------------------------------------------
// Sits on top of the shared Nexply dark/glass system (DARK_BG_* from brand.ts)
// but layers in a clinical teal/sky accent so the product reads as
// "healthcare" without leaving the studio's visual language. The gradient
// matches the one on the deck's sign-in screen.
export const CARENEXT_TEAL = '#2DD4BF';
export const CARENEXT_SKY = '#0EA5E9';
export const CARENEXT_MINT = '#5EEAD4';
export const CARENEXT_GRADIENT = 'linear-gradient(135deg, #0EA5E9 0%, #2DD4BF 100%)';

export const carenextGradientText = {
  backgroundImage: 'linear-gradient(120deg, #38BDF8 0%, #2DD4BF 55%, #5EEAD4 100%)',
  backgroundClip: 'text' as const,
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  color: 'transparent',
};

// Soft clinical wash used behind CareNext sections - a teal glow instead of
// the site's usual violet one.
export const carenextGlow = (tint = 'rgba(45,212,191,0.10)') => ({
  background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${tint}, transparent 70%)`,
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

export interface CareNextFeature {
  title: string;
  text: string;
  icon: ReactNode;
}

// "Platform at a glance" - the eight modules that make up CareNext.
export const CARENEXT_FEATURES: CareNextFeature[] = [
  {
    title: 'Patient Management',
    text: 'Unified profiles with demographics, treatment history, payments, and session tracking.',
    icon: createElement(Users, { size: 22 }),
  },
  {
    title: 'Appointments & Scheduling',
    text: 'Day and week views, quick reschedules, and a built-in no-show / cancellation workflow.',
    icon: createElement(CalendarCheck, { size: 22 }),
  },
  {
    title: 'Billing & Invoicing',
    text: 'Auto-generated, branded invoices with clear paid / partial / unpaid status on every one.',
    icon: createElement(ReceiptText, { size: 22 }),
  },
  {
    title: 'Doctor & Staff Management',
    text: 'Per-branch schedules, leave balances, and approvals - no more registers or side chats.',
    icon: createElement(Stethoscope, { size: 22 }),
  },
  {
    title: 'Multi-Branch Operations',
    text: 'One login across every clinic location, with data filterable by branch at any time.',
    icon: createElement(Building2, { size: 22 }),
  },
  {
    title: 'WhatsApp Automation',
    text: 'Automatic appointment confirmations and reminders using branch-specific templates.',
    icon: createElement(MessageSquare, { size: 22 }),
  },
  {
    title: 'Reports & Analytics',
    text: 'Revenue trends, attendance rate, no-shows, and appointment patterns at a glance.',
    icon: createElement(BarChart3, { size: 22 }),
  },
  {
    title: 'Expense & Profit Tracking',
    text: 'Branch-wise income vs. expense, with a live profit margin you can actually trust.',
    icon: createElement(TrendingUp, { size: 22 }),
  },
];

export interface CareNextRole {
  name: string;
  summary: string;
  points: string[];
  icon: ReactNode;
  featured?: boolean;
}

// "Built for every role" - three dedicated logins, each scoped to what that
// person actually needs to see and do.
export const CARENEXT_ROLES: CareNextRole[] = [
  {
    name: 'Admin',
    summary: 'The owner or practice manager - the full picture.',
    points: [
      'Full visibility across every branch',
      'Revenue, expenses & live profit margin',
      "All doctors' schedules & leave approvals",
      'Automation, templates & system settings',
    ],
    icon: createElement(ShieldCheck, { size: 20 }),
    featured: true,
  },
  {
    name: 'Doctor',
    summary: 'Focused on their own patients and clinical work.',
    points: [
      'Their own schedule & assigned patients only',
      'Add clinical notes & treatment updates',
      'Apply for leave and track their own balance',
      "No access to other doctors' data or clinic finances",
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
      'No access to profit, expense, or system settings',
    ],
    icon: createElement(ClipboardList, { size: 20 }),
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
    title: 'One-click invoicing',
    text: '"Generate Invoice" straight from the patient profile, pre-filled and branded to the clinic.',
    icon: createElement(ReceiptText, { size: 20 }),
  },
  {
    title: 'Chronological clinical notes',
    text: 'Every note in order, attributed to the doctor who wrote it - a clean, auditable history.',
    icon: createElement(ClipboardList, { size: 20 }),
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
    q: 'Is our patient data secure?',
    a: "Access is strictly role-based. Doctors only see their own assigned patients, receptionists can't see financials, and every clinical note is permanently attributed to the doctor who wrote it. Admins control who can see and do what.",
  },
  {
    q: 'Can we migrate our existing patient records?',
    a: "Yes. During onboarding we help bring across your existing patient list and history so you're not starting from an empty system on day one.",
  },
  {
    q: 'How do we get started?',
    a: 'Book a demo through our contact form. We walk through your clinic’s actual workflow, set up your branches and roles, migrate your data, and get your team onboarded.',
  },
];
