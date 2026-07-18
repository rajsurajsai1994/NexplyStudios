export interface ChatEntry {
  keywords: string[];
  answer: string;
}

const PHONE_LINE = 'You can also just call us on +91 78422 03319 or +91 87909 41280 - happy to talk it through.';

// Matching order matters: getBotReply returns the FIRST entry whose
// keywords match. Rules of thumb followed below:
// 1. Negative sentiment / complaints are checked first, so an unhappy
//    message never gets swallowed by an unrelated keyword elsewhere.
// 2. Specific, narrow questions (a particular service, a particular edge
//    case) come before broader ones that could also match the same words.
// 3. No entry uses a bare word so generic it would match almost any
//    sentence on the topic (e.g. plain "service"/"services") - those
//    single words are too greedy and shadow every more specific entry
//    listed after them, so only precise phrases are used instead.
export const CHAT_KNOWLEDGE: ChatEntry[] = [
  // ---- Complaints / negative sentiment (checked first, on purpose) ----
  {
    keywords: ['complaint', 'not happy', 'unhappy', 'disappointed', 'this is bad', 'poor service', 'scam', 'unresponsive', 'bad experience', 'frustrated'],
    answer:
      "Sorry to hear that - I'd rather not guess at a fix here. Please reach out directly so a real person can sort this out with you properly. " +
      PHONE_LINE,
  },

  // ---- Chatbot meta / small talk ----
  {
    keywords: ['are you real', 'are you human', 'are you a bot', 'are you ai', 'talk to a human', 'real person', 'is this a bot', 'is this a real person'],
    answer:
      "I'm an automated assistant, not a human - I can answer common questions about Nexply, but for anything specific to your project, it's best to talk to the actual team. " +
      PHONE_LINE,
  },
  {
    keywords: ['who made you', 'who built you', 'who created this chatbot'],
    answer: "The Nexply team built me to answer quick questions about the studio - though I'll always point you to a real human for anything project-specific.",
  },
  {
    keywords: ['how are you', "what's up", 'whats up', 'how is it going'],
    answer: "Doing well, thanks for asking! What can I help you with - services, pricing, or getting started?",
  },
  {
    keywords: ['joke', 'tell me a joke', 'funny'],
    answer: "Design jokes don't always land well in text form, so I'll spare you - but I'm happy to help with something about Nexply instead!",
  },

  // ---- Pricing / budget / discounts / payment ----
  {
    keywords: ['minimum budget', 'minimum project', 'do you have a minimum', 'smallest project'],
    answer:
      "We don't have a strict minimum - it really depends on the service. A single logo is a smaller scope than a full website, for instance. Tell us what you need and we'll let you know honestly if it's a fit. " +
      PHONE_LINE,
  },
  {
    keywords: ['discount', 'offer a deal', 'cheaper', 'lower price', 'negotiate', 'best price'],
    answer:
      "We don't run fixed discounts since every quote is already scoped to what you actually need rather than a padded package price. That said, tell us your budget when we talk and we'll be upfront about what's realistic within it. " +
      PHONE_LINE,
  },
  {
    keywords: ['payment method', 'payment methods', 'how do i pay', 'upi', 'bank transfer', 'accept card', 'pay by card', 'installments', 'advance payment', 'pay in advance'],
    answer:
      "We usually work with an upfront advance and the balance on agreed milestones, over bank transfer or UPI. We'll lay out the exact payment schedule in your quote before anything starts, so there are no surprises. " +
      PHONE_LINE,
  },
  {
    keywords: ['refund', 'refund policy', 'money back', 'cancel', 'cancel project', 'cancel the project', 'want to cancel'],
    answer:
      "Refund terms depend on how far a project's progressed when you need to step back, and we'd rather just talk it through directly than guess here. Reach out and we'll sort out something fair. " +
      PHONE_LINE,
  },
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'charges', 'fees', 'quote', 'rate'],
    answer:
      "Every project is scoped individually based on what you actually need, so there's no fixed price list - we don't do generic packages. Tell us what you're looking for and we'll give you a clear quote before any work starts. " +
      PHONE_LINE,
  },

  // ---- Timeline ----
  {
    keywords: ['how long', 'timeline', 'turnaround', 'duration', 'when will it be done', 'how much time', 'how fast', 'urgent', 'rush', 'asap'],
    answer:
      "Depends on scope, but most branding projects take about 3-6 weeks, and full websites usually 4-8 weeks. If you're on a tighter deadline, tell us upfront - we'll be honest about whether it's doable. " +
      PHONE_LINE,
  },

  // ---- Client fit ----
  {
    keywords: ['international', 'outside india', 'overseas client', 'us client', 'usa client', 'uae client', 'different time zone', 'different country'],
    answer:
      "Yes - we already work with clients across India, the UAE, and the US, and coordinate calls across time zones without any issue. Distance hasn't been a problem so far. " +
      PHONE_LINE,
  },
  {
    keywords: ['small business', 'startup', 'just starting out', 'too small', 'solo founder', 'one person business', 'do you work with small'],
    answer:
      "Yes, absolutely. We've worked with everything from local clinics and restaurants to bigger enterprise teams - what matters is the project, not the size of the company. " +
      PHONE_LINE,
  },

  // ---- Support / retainer / single-service ----
  {
    keywords: ['support', 'after launch', 'maintenance', 'retainer', 'ongoing', 'keep working with'],
    answer:
      "Yes - a lot of our clients stay on for ongoing marketing, maintenance, or design retainers after the initial project wraps up. Happy to talk through what that could look like for you. " +
      PHONE_LINE,
  },
  {
    keywords: ['single service', 'one service', 'just a logo', 'just need', 'only need', 'one thing'],
    answer:
      "That's completely fine - you can hire us for a single service like just a logo, or just Google My Business, or bundle a few services together. Whatever fits what you need. " +
      PHONE_LINE,
  },

  // ---- Revisions / process / ownership / NDA ----
  {
    keywords: ['revision', 'revisions', 'how many changes', 'request changes', 'change request', 'edits after'],
    answer:
      "We usually build in 1-2 rounds of revisions per project stage, depending on the service - enough to get it right without endless back-and-forth. We'll confirm the exact number when we scope your project. " +
      PHONE_LINE,
  },
  {
    keywords: ['how do you work', 'workflow', 'how does it work', 'steps involved', 'your process'],
    answer:
      "Broadly: we start by understanding your brand and goals, move into design concepts, refine based on your feedback, then build and deliver. You can see the full step-by-step on our About page under \"How we work.\" " +
      PHONE_LINE,
  },
  {
    keywords: ['own the files', 'ownership', 'copyright', 'source files', 'will i get the logo files', 'do i own', 'usage rights', 'ip rights'],
    answer:
      "Yes - once a project's complete and paid for, full ownership and usage rights of the final files transfer to you. You're not locked into us to use your own logo or website. " +
      PHONE_LINE,
  },
  {
    keywords: ['nda', 'ndas', 'confidential', 'confidentiality', 'sign an nda', 'non disclosure'],
    answer:
      "Sure, we're happy to sign an NDA if your project needs one - just mention it when we get in touch and we'll sort the paperwork before any details are shared. " +
      PHONE_LINE,
  },

  // ---- How to start / contact / meeting logistics ----
  {
    keywords: ['get started', 'how do i start', 'next step', 'sign up', 'hire you', 'work with you'],
    answer:
      "Easiest way - head to our Contact page and tell us a bit about your brand and what you need, and we'll set up a call to figure out the right next step. " +
      PHONE_LINE,
  },
  {
    keywords: ['meet in person', 'video call', 'zoom call', 'google meet', 'in person meeting', 'office visit'],
    answer:
      "Both work - we do video calls (Zoom/Google Meet) with clients everywhere, and if you're in Hyderabad, you're welcome to swing by our office too. " +
      PHONE_LINE,
  },
  {
    keywords: ['whatsapp', 'message you', 'text you', 'dm you'],
    answer:
      "Yep, WhatsApp works - message us on +91 78422 03319 or +91 87909 41280 and we'll get back to you as soon as we can.",
  },
  {
    keywords: ['contact', 'phone number', 'reach you', 'talk to someone', 'speak to someone'],
    answer:
      "Of course - " + PHONE_LINE + " Or drop us an email at next@nexplystudio.com.",
  },
  {
    keywords: ['email', 'mail id', 'e-mail'],
    answer: "Our email is next@nexplystudio.com. " + PHONE_LINE,
  },
  {
    keywords: ['working hours', 'office hours', 'when are you open', 'available today', 'business hours'],
    answer:
      "We're generally around during standard business hours, IST, Monday to Saturday - but honestly, just reach out anytime and we'll respond as soon as we can. " +
      PHONE_LINE,
  },
  {
    keywords: ['where are you', 'location', 'address', 'your office', 'based in', 'hyderabad'],
    answer:
      "We're based in Hyderabad - 8th Floor, Suite 30, Jayabheri Silicon Towers, Hitech City Rd, Kothaguda, Hyderabad, Telangana 500084. There's a map on our Contact page if that helps. " +
      PHONE_LINE,
  },

  // ---- Company / trust / comparison ----
  {
    keywords: ['why choose you', 'why nexply', 'what makes you different', 'better than other agencies', 'why should i pick you'],
    answer:
      "Honestly - we work like a full in-house department (design, dev, and marketing together) rather than a scattered set of freelancers, and we actually stay involved after launch. Check our Portfolio and client testimonials on the homepage to judge for yourself. " +
      PHONE_LINE,
  },
  {
    keywords: ['vs freelancer', 'versus freelancer', 'freelancer instead', 'hire a freelancer'],
    answer:
      "A freelancer can work well for a single small task, but for anything needing design, dev, and marketing to stay consistent together, having one team handle all of it end-to-end tends to save you the coordination headache. Happy to walk you through the difference on a call. " +
      PHONE_LINE,
  },
  {
    keywords: ['wix', 'squarespace', 'diy website builder', 'build it myself', 'do it myself'],
    answer:
      "DIY builders are fine for a very simple site you're willing to maintain yourself. Where we tend to add real value is performance, custom design, and SEO that a template builder can't quite match. Happy to give an honest opinion on your specific case. " +
      PHONE_LINE,
  },
  {
    keywords: ['hawk studios', 'nexply vs hawk', 'used to be called', 'name change', 'formerly known'],
    answer:
      "Nexply Studios was formerly Hawk Studios - same team, same standards, new name and identity. " +
      PHONE_LINE,
  },
  {
    keywords: ['how many years', 'when founded', 'company history', 'how old is', 'since when', 'established'],
    answer:
      "You can find our story and how the studio came together on the About page - happy to share more directly too if you'd like specifics. " +
      PHONE_LINE,
  },
  {
    keywords: ['who works there', 'meet the team', 'founder', 'staff'],
    answer:
      "We're a small, focused studio - you can meet the team on our About page, including a slightly more playful version if you scroll down. " +
      PHONE_LINE,
  },

  // ---- Portfolio / proof / blog ----
  {
    keywords: ['portfolio', 'past work', 'previous work', 'see your work', 'clients you worked with', 'case study', 'case studies'],
    answer:
      "Yep, check out the Portfolio page in the menu - you can filter by service to see relevant client work. " +
      PHONE_LINE,
  },
  {
    keywords: ['testimonial', 'client feedback', 'happy clients'],
    answer:
      "There's a section of real client testimonials on our homepage - worth a scroll if you want to hear it from the people we've worked with. " +
      PHONE_LINE,
  },
  {
    keywords: ['blog', 'read your blog', 'insights'],
    answer:
      "We've got a blog with write-ups on branding, web, and marketing topics - you'll find it in the main menu. " +
      PHONE_LINE,
  },

  // ---- Individual services (specific edge cases before the generic form) ----
  {
    keywords: ['already have a website', 'redesign', 'improve my site', 'migrate my site', 'existing website', 'site redesign'],
    answer:
      "Redesigns and migrations are common for us - we can audit what you have, keep what's working, and rebuild the rest. Share your current site when we talk and we'll take a look. " +
      PHONE_LINE,
  },
  {
    keywords: ['website', 'web design', 'web development', 'landing page', 'build a site', 'wordpress', 'shopify'],
    answer:
      "We build fast, responsive websites on WordPress, Next.js, React, or Shopify, depending on what fits best - made to actually convert visitors, not just look nice. " +
      PHONE_LINE,
  },
  {
    keywords: ['app', 'mobile app', 'ios app', 'android app', 'application development'],
    answer:
      "We design and build native and cross-platform apps end-to-end, from the first wireframe to app store launch. " +
      PHONE_LINE,
  },
  {
    keywords: ['ui', 'ux', 'product design', 'wireframe', 'prototype', 'user experience'],
    answer:
      "Product design / UI-UX is one of our core services - wireframes, prototypes, and design systems that make a product feel intuitive from the first tap. " +
      PHONE_LINE,
  },
  {
    keywords: ['brand guidelines', 'brand book', 'style guide', 'brand manual'],
    answer:
      "Yes - we build full brand guideline documents too: logo usage rules, color and type systems, and a tone-of-voice guide, so anyone creating materials for your brand stays consistent. " +
      PHONE_LINE,
  },
  {
    keywords: ['logo', 'branding', 'brand identity', 'rebranding my business', 'rebrand'],
    answer:
      "We do full logo design and brand identity work - not just a mark, but the whole visual system around it so it actually stays consistent everywhere. " +
      PHONE_LINE,
  },
  {
    keywords: ['ad design', 'banner design', 'hoarding', 'creative ads', 'graphic design ads'],
    answer:
      "We design ad creative for both digital (Meta, Google Display) and print (hoardings, newspaper ads) - sized and built for wherever it's actually going to run. " +
      PHONE_LINE,
  },
  {
    keywords: ['video ad', 'video ads', 'motion graphics', 'reel', 'reels', 'animation', 'explainer video'],
    answer:
      "We produce short-form video content - reels, ad cuts, and animated explainer videos - built for how people actually watch now, from scripting through to final edit. " +
      PHONE_LINE,
  },
  {
    keywords: ['social media', 'instagram', 'facebook ads', 'meta ads', 'social media marketing'],
    answer:
      "Our social media marketing covers strategy, Meta ads, and analytics - basically turning followers into an actual, steady stream of leads. " +
      PHONE_LINE,
  },
  {
    keywords: ['seo', 'google my business', 'gmb', 'local search', 'google maps', 'found on google'],
    answer:
      "We handle Google My Business and local SEO so you show up first when nearby customers search for what you do. " +
      PHONE_LINE,
  },
  {
    keywords: ['packaging', 'box design', 'label design'],
    answer: "We do packaging design too - labels, box design, and 3D mockups that make a product stand out on the shelf. " + PHONE_LINE,
  },
  {
    keywords: ['print', 'brochure', 'flyer', 'business card', 'catalog'],
    answer:
      "Yes, we do print and publication design - brochures, cards, catalogs - with the same care as our digital work. " +
      PHONE_LINE,
  },

  // ---- Industry-specific ----
  {
    keywords: ['restaurant', 'cafe', 'food brand', 'cloud kitchen', 'qsr'],
    answer:
      "We've worked with several restaurant and F&B brands - logo, packaging, menus, social media, the lot. Tell us more about your concept and we can point you to relevant work in our portfolio. " +
      PHONE_LINE,
  },
  {
    keywords: ['wedding planner', 'wedding brand', 'event planning business'],
    answer:
      "We've done branding for wedding planning businesses too - happy to show you that work if it's relevant to what you're building. " +
      PHONE_LINE,
  },
  {
    keywords: ['clinic', 'physiotherapy', 'healthcare brand', 'hospital branding', 'medical practice'],
    answer:
      "We've built websites, CRMs, and marketing for healthcare and physiotherapy clients before - it's a space we're genuinely comfortable working in. " +
      PHONE_LINE,
  },
  {
    keywords: ['university', 'college marketing', 'education brand', 'higher education', 'edtech'],
    answer:
      "We've done extensive work in higher education and ed-tech marketing, including for US-based institutions - it's one of our stronger areas. " +
      PHONE_LINE,
  },
  {
    keywords: ['real estate', 'property brand', 'realtor'],
    answer:
      "We haven't listed real estate specifically in our case studies yet, but the same website/branding/social process applies well to that space - happy to discuss your specific needs. " +
      PHONE_LINE,
  },
  {
    keywords: ['ecommerce', 'e-commerce', 'online store', 'shopify store', 'd2c brand'],
    answer:
      "Yes, we build e-commerce sites and handle the branding/packaging/social side for D2C brands too - it's a natural fit for our full-service setup. " +
      PHONE_LINE,
  },

  // ---- Careers / partnerships / press ----
  {
    keywords: ['career', 'careers', 'hiring', 'internship', 'job opening', 'vacancy', 'work for you', 'job openings'],
    answer:
      "We don't have a public careers page right now, but feel free to email your portfolio/resume to next@nexplystudio.com and we'll keep it on file for when something opens up.",
  },
  {
    keywords: ['partnership', 'partner with you', 'collaborate with you', 'vendor partnership', 'agency partnership', 'referral partner'],
    answer:
      "We're open to partnerships and referral arrangements - drop us an email at next@nexplystudio.com with what you have in mind and we'll take it from there.",
  },
  {
    keywords: ['press inquiry', 'media inquiry', 'journalist', 'interview request'],
    answer: "For press or media inquiries, email us at next@nexplystudio.com and we'll get back to you.",
  },

  // ---- Broad "what do you offer" catch-all - kept last among topic
  // entries so any question naming a specific service above already
  // matched before we fall back to this general list. ----
  {
    keywords: ['what do you do', 'what do you offer', 'what can you help', 'offerings', 'what all do you do', 'what services do you offer', 'list of services'],
    answer:
      "We do website design & development, app design & development, product design (UI/UX), logo & brand identity, ad graphics, video/motion design, social media marketing, Google My Business, brand guidelines, packaging design, and print design. " +
      PHONE_LINE,
  },

  // ---- Greetings / closing ----
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'yo', 'namaste', 'namaskaram'],
    answer:
      "Hey! I'm the Nexply assistant. Ask me about our services, pricing, timelines, or how to get started - or " +
      PHONE_LINE,
  },
  {
    keywords: ['thank', 'thanks', 'thank you', 'appreciate'],
    answer: "Anytime! If anything else comes to mind, I'm right here - or " + PHONE_LINE,
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    answer: "Take care! " + PHONE_LINE,
  },
];

export const CHAT_FALLBACK =
  "I might not have the exact answer for that, but our team definitely does. " + PHONE_LINE + " Or use the contact form and we'll get back to you.";

export function getBotReply(userInput: string): string {
  const normalized = userInput.toLowerCase();
  // Tokenize into whole words so short keywords (like "hi" or "app") only
  // match as standalone words, not as substrings inside unrelated words
  // (e.g. "hi" inside "this", "app" inside "happy"). Multi-word phrases
  // still use substring matching since false positives there are unlikely.
  const words = normalized.split(/[^a-z0-9']+/).filter(Boolean);

  // Simple plural tolerance - "restaurant" in the data should still match
  // "restaurants" in a message (and vice versa) without needing every
  // entry to manually list both forms.
  const wordMatches = (word: string, kw: string) => {
    if (word === kw) return true;
    if (word === `${kw}s` || word === `${kw}es`) return true;
    if (kw === `${word}s` || kw === `${word}es`) return true;
    // "university" <-> "universities" style plurals
    if (kw.endsWith('y') && word === `${kw.slice(0, -1)}ies`) return true;
    if (word.endsWith('y') && kw === `${word.slice(0, -1)}ies`) return true;
    return false;
  };

  for (const entry of CHAT_KNOWLEDGE) {
    const matched = entry.keywords.some((kw) => {
      if (kw.includes(' ')) return normalized.includes(kw);
      return words.some((w) => wordMatches(w, kw));
    });
    if (matched) return entry.answer;
  }
  return CHAT_FALLBACK;
}
