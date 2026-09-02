import type { AuthorKey } from './team';

export type BlogCategory = 'designers' | 'brands' | 'developers';

export interface BlogPost {
  slug: string;
  title: string;
  // Shorter title for the <title> tag / search results (<=60 chars incl.
  // the " | Nexply Studios" suffix) - the on-page H1 stays the punchier,
  // longer `title` above; falls back to it when a post doesn't need one.
  seoTitle?: string;
  excerpt: string;
  category: BlogCategory;
  author: AuthorKey;
  datePublished: string; // ISO date
  dateModified?: string;
  keywords?: string[];
  readTime: string;
  paragraphs: string[];
  linkParagraphIndex: number;
  linkText: string;
  linkHref: string;
  relatedSlugs: string[];
  // Optional link to a case study that proves the point of the post - shown
  // as a "see it in practice" callout and added to the article schema.
  caseStudySlug?: string;
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  designers: 'For Designers',
  brands: 'For Brands',
  developers: 'For Developers',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-your-logo-isnt-the-problem',
    title: "Why your logo isn't the problem",
    excerpt:
      "Every few months someone tells us their logo just isn't working. Usually, once we start asking questions, the logo turns out to be the least of it.",
    category: 'designers',
    author: 'suraj',
    datePublished: '2026-05-12',
    keywords: ['logo redesign', 'brand identity', 'when to rebrand', 'brand consistency'],
    readTime: '4 min read',
    paragraphs: [
      "Every few months we get a version of the same message. Something like, \"our logo just isn't working, can you redesign it?\" And sure, sometimes the logo really is dated, or it was made in a rush five years ago and never looked right. But more often than not, when we actually sit down and talk it through, the logo isn't really the problem. It's just the easiest thing to blame.",
      "Here's what I mean. A logo is small. It sits in a corner of your website, on your business card, maybe on a signboard. It cannot carry the entire weight of how people feel about your brand. If your website feels dated, if your social posts are inconsistent, if your packaging looks like three different companies made it - no amount of logo tweaking fixes that. You end up with a shiny new mark sitting on top of the same old mess.",
      "We've had clients come in wanting \"just a logo,\" and by the time we're done asking questions, what they actually needed was a proper identity system - colors, type, some rules for how things should look across the board. The logo is still part of it, obviously, but it stops being the hero of the story and becomes one piece of something bigger.",
      "So before you jump to \"let's redesign the logo,\" it's worth asking a slightly uncomfortable question: is the logo actually broken, or is it just the most visible symptom of something else? Sometimes the honest answer really is that the logo needs work. Great, that's a fun project. But sometimes the honest answer is that your brand needs a real identity, not a paint job.",
      "If you're at that point - genuinely unsure whether it's a logo problem or a bigger one - that's usually the right time to talk to someone who'll ask the annoying questions before reaching for a design file. That's basically our whole {LINK} in a sentence.",
    ],
    linkParagraphIndex: 4,
    linkText: 'logo design and brand identity process',
    linkHref: '/services/logo-design-brand-identity',
    relatedSlugs: ['website-that-looks-good-vs-one-that-works', 'why-most-rebrands-fail-before-launch'],
  },
  {
    slug: 'website-that-looks-good-vs-one-that-works',
    title: 'The difference between a website that looks good and one that works',
    seoTitle: 'A Good-Looking Website vs. One That Works',
    excerpt:
      "There's a particular kind of website that wins design awards and loses customers. Looking good and working well are not the same skill.",
    category: 'designers',
    author: 'suraj',
    datePublished: '2026-05-28',
    keywords: ['website UX', 'conversion design', 'website that converts', 'web design vs UX'],
    readTime: '5 min read',
    paragraphs: [
      "There's a particular kind of website that wins design awards and loses customers. You've probably seen one. Gorgeous typography, a hero video that makes you stop scrolling for a second, maybe a nice scroll-triggered animation. And then you try to actually find the pricing page, or figure out how to book a call, and you're clicking around for two minutes wondering where it went.",
      "Looking good and working well are not the same skill, and treating them like they are is where a lot of websites go wrong. A site can be visually restrained, even a little plain, and still convert better than something flashy, because the person landing on it knows exactly what to do next. That's not an accident. Someone thought about what the visitor is actually trying to do - book something, buy something, understand what you offer in ten seconds - and built the page around that instead of around what looks impressive in a portfolio.",
      "The honest answer is you need both, and that's harder than picking one. Aesthetics get someone to trust you in the first three seconds. Structure and flow get them to actually do something once they're there. We've rebuilt sites before where the client's biggest complaint wasn't \"it looks bad,\" it was \"people visit and then just... leave.\" Almost always, that's a UX problem wearing a design costume.",
      "If you're evaluating your own site, try this - hand it to someone who's never seen it and just watch what they click first, and where they get stuck. It'll tell you more in five minutes than any amount of staring at it yourself. This is basically the starting point for how we approach {LINK} and product design work generally - the look comes second, the flow comes first.",
    ],
    linkParagraphIndex: 3,
    linkText: 'website design and development',
    linkHref: '/services/website-design-development',
    relatedSlugs: ['why-your-logo-isnt-the-problem', 'what-fast-website-actually-means'],
    caseStudySlug: 'pal-physiotherapy',
  },
  {
    slug: 'nobody-cares-about-google-business-until-they-do',
    title: "Nobody cares about your Google Business listing (until they do)",
    seoTitle: 'Why Your Google Business Listing Matters',
    excerpt:
      "Almost no business owner thinks about their Google listing until the day someone can't find them on maps. By then it's already cost you a customer.",
    category: 'brands',
    author: 'suraj',
    datePublished: '2026-06-16',
    keywords: ['google business profile', 'local seo', 'google maps ranking', 'near me search'],
    readTime: '4 min read',
    paragraphs: [
      "Here's a strange thing about local search. Almost no business owner thinks about their Google Business listing until the day someone mentions, offhand, \"hey I couldn't find your clinic on maps, is it even open?\" And suddenly it becomes the most urgent thing in the world.",
      "The truth is your Google listing is doing more work than your website for a huge chunk of your customers - the ones searching \"physiotherapy near me\" or \"best bakery nearby\" at 9pm on their phone, half paying attention, ready to call whichever result looks legit first. If your hours are wrong, if there are three photos and one of them is blurry, if you have two reviews and a competitor down the road has forty, you've already lost that person before they even opened your website.",
      "The annoying part is that fixing this isn't really about doing one big thing. It's a bunch of small, slightly boring things done consistently - keeping hours accurate, actually responding to reviews instead of leaving them hanging, posting updates every so often so Google, and people, know you're active, making sure the category and description actually say what you do. None of it is exciting. All of it adds up.",
      "We've had clients genuinely surprised at how much foot traffic and call volume shifted just from tidying up and staying active on their listing, no ad spend involved. It's one of those areas where the ceiling is low-effort and the payoff is disproportionately high, which almost never happens in marketing.",
      "If your listing hasn't been touched in a while, that's usually the first thing worth fixing before spending a rupee on ads. It's also just about the entire idea behind our {LINK} - not glamorous, just genuinely useful.",
    ],
    linkParagraphIndex: 4,
    linkText: 'Google Business Profile work',
    linkHref: '/services/google-my-business',
    relatedSlugs: ['why-most-rebrands-fail-before-launch', 'hyderabad-one-shop-get-found-online'],
    caseStudySlug: 'pal-physiotherapy',
  },
  {
    slug: 'why-most-rebrands-fail-before-launch',
    title: 'Why most rebrands fail before they even launch',
    seoTitle: 'Why Most Rebrands Fail Before Launch',
    excerpt:
      "Rebrands usually die in the same place, and it's not the design - it's the week after launch when half your materials still use the old logo.",
    category: 'brands',
    author: 'suraj',
    datePublished: '2026-06-30',
    keywords: ['rebrand', 'brand rollout', 'brand guidelines', 'brand consistency'],
    readTime: '5 min read',
    paragraphs: [
      "Rebrands usually die in the same place, and it's not the design. It's the week after launch, when the new logo is up on the website but the invoices still use the old one, the Instagram bio has the new tagline but the packaging in the warehouse hasn't changed, and somebody's WhatsApp business profile is still running last year's version. Nobody planned for that gap. It just happens because a rebrand was treated as a design deliverable instead of a rollout.",
      "This is the part nobody enjoys talking about because it's not fun. Nobody gets excited about updating letterheads. But a rebrand without a clear system for how everything gets applied - what the actual colors are down to the hex code, which font goes where, how the logo should never be squished or recolored by whoever's making the next flyer - basically guarantees that six months later, your brand looks inconsistent again, just with a different logo than before.",
      "We always push clients toward building this out properly rather than skipping straight to \"give us the pretty version.\" A real brand guideline document feels like overkill when you're small, but it's the thing that lets you hand your brand off to a new hire, a new printer, a new social media person, and have it still look like you. Without it, every new person touching your brand quietly reinvents it a little, and a few years later nothing matches.",
      "If you're planning a rebrand, it's worth budgeting time for this unglamorous part alongside the actual design work. It's the difference between a rebrand that sticks and one that slowly drifts back into chaos. This is more or less the whole point of our {LINK} - not just making it look good once, but making sure it stays that way.",
    ],
    linkParagraphIndex: 3,
    linkText: 'brand guidelines and identity work',
    linkHref: '/services/brand-guidelines-identity',
    relatedSlugs: ['why-your-logo-isnt-the-problem', 'nobody-cares-about-google-business-until-they-do'],
  },
  {
    slug: 'what-fast-website-actually-means',
    title: "What \"fast website\" actually means (it's not just page speed)",
    seoTitle: "What 'Fast Website' Actually Means",
    excerpt:
      "Everyone says they want a fast website, and almost everyone means something slightly different by it. The version that matters isn't the one a speed test measures.",
    category: 'developers',
    author: 'hanish',
    datePublished: '2026-07-14',
    keywords: ['website speed', 'core web vitals', 'page load performance', 'fast website'],
    readTime: '5 min read',
    paragraphs: [
      "Everyone says they want a fast website, and almost everyone means something slightly different by it. Some people mean the Lighthouse score. Some mean \"it shouldn't take five seconds to load on my phone in the parking lot.\" Some genuinely just mean \"it feels snappy when I click around,\" which is a real thing but has almost nothing to do with the numbers a speed test gives you.",
      "The version that actually matters to a visitor is the felt experience - does the page respond right away when they tap something, does content pop into place without jumping around and making them lose their spot, does the site feel like it's keeping up with them or making them wait. You can hit a perfect performance score and still have a site that feels sluggish because of layout shifts or slow-loading interactive bits, and you can have a mediocre score with a site that feels instant because the important stuff loads first and the rest catches up quietly in the background.",
      "This is why \"just optimize the images\" is usually only a small part of the real fix. The bigger wins come from thinking about loading order - what needs to show up immediately versus what can wait a beat - and from not shipping more JavaScript than the page actually needs. A beautifully coded site that ships a huge bundle for a simple landing page will still feel heavy, no matter how clever the code underneath is.",
      "If your site feels slow, it's worth actually watching someone use it on an average phone with average signal, not your own machine on office wifi. That gap is usually where the real problem is hiding. This kind of performance thinking is baked into how we approach every {LINK} project - not chasing a score, chasing the feeling of speed.",
    ],
    linkParagraphIndex: 3,
    linkText: 'website design and development',
    linkHref: '/services/website-design-development',
    relatedSlugs: ['app-nobody-asked-for-vs-one-people-need', 'what-seo-geo-aeo-change-in-code'],
    caseStudySlug: 'pal-physiotherapy',
  },
  {
    slug: 'app-nobody-asked-for-vs-one-people-need',
    title: 'Building an app nobody asked for vs one people actually need',
    seoTitle: 'An App Nobody Asked For vs One People Need',
    excerpt:
      "A lot of app ideas start the same way - \"wouldn't it be cool if we had an app.\" The apps that actually get used start from a much less exciting place.",
    category: 'developers',
    author: 'hanish',
    datePublished: '2026-07-28',
    keywords: ['should I build an app', 'app MVP', 'app vs website', 'product validation'],
    readTime: '4 min read',
    paragraphs: [
      "A lot of app ideas start the same way - \"wouldn't it be cool if we had an app for this.\" And sometimes that's true. But just as often, the honest answer is that the business problem could be solved with a slightly better website, or a WhatsApp flow, or nothing more complicated than a form, and the app is really just something the founder wanted to point to and say \"we have an app.\"",
      "The apps that actually get used tend to start from a much less exciting place - a specific, repeated pain point that a phone genuinely solves better than anything else. Patients who need to book a slot and get a reminder without calling the clinic. A delivery rider who needs offline access because signal drops mid-route. Someone standing in a store trying to scan a code and check stock instantly. Those are real reasons for an app to exist, because the phone is doing something a browser tab or a phone call can't do as well.",
      "Before we start actually designing anything, this is usually the first conversation - not \"what should the app look like,\" but \"why does this need to be an app at all, and what's the one thing it has to do really well.\" It's a slightly deflating question to ask a client who's excited about their idea, but it saves months of building something nobody opens twice.",
      "If you're sitting on an app idea, it's worth being honest with yourself about which category it falls into before writing a single line of code. Most good apps do one thing well and stay out of the way otherwise. That's the standard we hold our own {LINK} to - not \"can we build this,\" but \"should this exist as an app in the first place.\"",
    ],
    linkParagraphIndex: 3,
    linkText: 'app design and development',
    linkHref: '/services/app-design-development',
    relatedSlugs: ['what-fast-website-actually-means', 'why-we-still-pick-wordpress-2026'],
  },

  // -------------------------------------------------------------------------
  // 2026-08 batch
  // -------------------------------------------------------------------------
  {
    slug: 'handing-design-to-developers-without-it-falling-apart',
    title: "Handing design over to developers without it falling apart",
    seoTitle: 'Design to Developer Handoff, Done Properly',
    excerpt:
      "The gap between \"the Figma looks great\" and \"the built version looks great\" is where most projects lose a week. Here's how we close it.",
    category: 'designers',
    author: 'suraj',
    datePublished: '2026-08-08',
    keywords: ['design handoff', 'figma to developers', 'design system', 'ui ux workflow'],
    readTime: '5 min read',
    paragraphs: [
      "There's a moment in almost every project where the design is signed off, everyone's happy, and then two weeks later you open the staging link and something is just... off. The spacing is a little tight. The blue is slightly the wrong blue. A button that was meant to be full width on mobile is floating in the middle. Nothing is broken exactly, but it doesn't feel like the thing you designed. That gap - between the Figma file and the built version - is where a lot of time and goodwill quietly leaks out.",
      "For a long time I thought the fix was more detailed specs. Annotate every margin, every hover state, every breakpoint. It helps a bit, but it also means you're now maintaining two sources of truth, and the moment something changes in one, the other is wrong. What actually moved the needle for us was designing with the build in mind from the start. Real type scales, not one-off font sizes. A fixed set of spacing values instead of nudging things by 3px until they look right. Components that map to how the developer is actually going to build them, not just visual groupings on a canvas.",
      "When we built the clinic system for PAL Physiotherapy, the thing that made the handoff smooth wasn't the documentation - it was that the design was already built out of a small kit of parts. A card looked the same whether it was showing a patient, an invoice, or an appointment. So the developer wasn't interpreting a hundred screens, he was assembling maybe fifteen pieces in different arrangements. Same story with the Zesti Fusion and PrintX sites - once the parts are consistent, the build stops being a translation exercise.",
      "The other half of it is just talking earlier. We try to get the developer into the file while it's still rough, not after it's polished. That's when it's cheap to hear \"that layout is going to be painful on a real screen\" or \"if we change this one thing, I can reuse a component we already have.\" By the time the design is pixel-perfect, everyone's emotionally attached to it and those conversations get harder.",
      "None of this is exciting. It's type scales and spacing tokens and a slightly awkward call halfway through. But it's the difference between a build that matches the design and a build that's a decent impression of it. This is most of what our {LINK} actually is day to day - less about beautiful screens, more about screens that survive the trip into code.",
    ],
    linkParagraphIndex: 4,
    linkText: 'product design and UI/UX work',
    linkHref: '/services/product-design-ui-ux',
    relatedSlugs: ['website-that-looks-good-vs-one-that-works', 'brand-colours-that-hold-up-in-the-real-world'],
  },
  {
    slug: 'brand-colours-that-hold-up-in-the-real-world',
    title: "Choosing brand colours that hold up in the real world",
    seoTitle: 'Brand Colours That Survive Real Use',
    excerpt:
      "The palette that looks stunning in the moodboard often falls apart on a signboard, a cheap printer, and a WhatsApp thumbnail. Here's how we pressure-test colour.",
    category: 'designers',
    author: 'suraj',
    datePublished: '2026-08-15',
    keywords: ['brand colours', 'colour palette', 'brand identity', 'print vs screen colour'],
    readTime: '5 min read',
    paragraphs: [
      "Picking brand colours is the fun part, so people spend a lot of time on the wrong version of the problem. They'll agonise over whether the teal should be slightly greener, staring at two swatches side by side on a nice monitor. Then the brand goes live and that teal is on a flex board in the afternoon sun, on a business card printed at a shop in Ameerpet, and shrunk to a 40-pixel circle on someone's phone - and in every one of those places it looks like a different colour.",
      "So the test I actually care about isn't \"is this the perfect shade,\" it's \"does this still read as our colour when everything goes wrong.\" A few things we check now, mostly because we've been burned before. Does the main colour have enough contrast to put white text on it - because someone will, on a button, on day one. Does it hold up in plain CMYK without a fluorescent ink, because most local printing isn't going to match a fancy Pantone. Is there a darker version for small text and a lighter version for backgrounds, so people aren't forced to use the one loud brand colour everywhere.",
      "For PAL Physiotherapy we ended up with a fairly deep navy and a calm teal, partly because it needed to feel clinical and trustworthy, but also because navy just behaves well - it prints dark, it holds white text, it doesn't turn muddy on a cheap screen. Compare that to a brand like Beyond Bajji or Ayur Gum where the whole point is that the packaging is loud and appetising on a shelf. Different job, so the palette is built differently - more saturation, more contrast between flavours, colours chosen to survive being one of thirty products someone is scanning past.",
      "The other thing that saves you is having rules, not just colours. Which colour is allowed to be a big background fill and which one is only ever an accent. What the one approved colour for body text is. What happens on a dark background versus a light one. When Sahadeva Reddy needed a range of sweet boxes that clearly belonged to the same family but weren't identical, it worked because the system decided that up front - same structure, shifting colourway - instead of someone freestyling each box.",
      "If you're choosing colours right now, do yourself a favour and mock the palette onto the ugliest, most real thing you can - a delivery invoice, a WhatsApp DP, a printout from a normal office printer. If it still feels like you there, you've got a palette. If it only works in the moodboard, you've got a mood. Getting this right is a big part of our {LINK}, and it's a lot less glamorous than people expect.",
    ],
    linkParagraphIndex: 4,
    linkText: 'brand guidelines and identity work',
    linkHref: '/services/brand-guidelines-identity',
    relatedSlugs: ['why-most-rebrands-fail-before-launch', 'why-your-logo-isnt-the-problem'],
  },
  {
    slug: 'instagram-looks-fine-not-bringing-customers',
    title: "Your Instagram looks fine. So why isn't it bringing customers?",
    seoTitle: "Why Your Instagram Isn't Bringing Customers",
    excerpt:
      "A tidy, good-looking feed and a feed that actually brings in enquiries are two different things. Most businesses are optimising the first one.",
    category: 'brands',
    author: 'suraj',
    datePublished: '2026-08-20',
    keywords: ['instagram for business', 'social media marketing', 'content that converts', 'reels for leads'],
    readTime: '5 min read',
    paragraphs: [
      "A lot of business owners I talk to are quietly frustrated about the same thing. They post regularly, the grid looks clean, the photos are nice, maybe they even hired someone to run it - and it just doesn't translate into people calling or messaging. The feed is doing its job as a feed. It's just not doing anything for the business.",
      "Usually when we dig in, almost everything on the account is what I'd call decoration. Nice product photo, generic caption, a few hashtags. It's pleasant, it fills the calendar, and it tells a potential customer nothing they can act on. Nobody sees a well-lit photo of a plate of food and thinks \"I now understand why this place is worth going to.\" They needed a reason, and the post didn't give them one.",
      "The stuff that actually pulls people in tends to be less pretty and more specific. With Beyond Bajji, the posts that landed weren't the polished ones - they were the ones that felt like the brand talking: this is why we fry it this way, here's the new thing we're trying, here's what people keep ordering. With PAL Physiotherapy it was posts that answered a real question someone was already worrying about - is this back pain something I should see someone about, what actually happens in a session, is it worth the money. That's content doing sales work, not content doing wallpaper work.",
      "There's also a plumbing problem that's easy to miss. Someone finally gets interested, taps through to the profile, and the bio is vague, there's no obvious way to book, the WhatsApp link is broken, or the website they land on doesn't match the vibe of the feed at all. You did the hard part - you got their attention - and then lost them in the last ten seconds. We check that path more than we check the grid now.",
      "If your feed looks fine but isn't producing enquiries, the fix usually isn't posting more or posting prettier. It's making each post earn its place by teaching, showing, or answering something, and making sure the road from \"interested\" to \"in touch\" is short and works. That shift is basically what our {LINK} is about - treating the account as a channel that's supposed to bring in business, not a portfolio.",
    ],
    linkParagraphIndex: 4,
    linkText: 'social media marketing',
    linkHref: '/services/social-media-marketing',
    relatedSlugs: ['nobody-cares-about-google-business-until-they-do', 'hyderabad-one-shop-get-found-online'],
    caseStudySlug: 'pal-physiotherapy',
  },
  {
    slug: 'hyderabad-one-shop-get-found-online',
    title: "How a Hyderabad business with one shop actually gets found online",
    seoTitle: 'How a One-Location Business Gets Found Online',
    excerpt:
      "You don't need to rank across India. You need to be the obvious answer when someone three kilometres away searches for what you do.",
    category: 'brands',
    author: 'suraj',
    datePublished: '2026-08-25',
    keywords: ['local seo hyderabad', 'get found on google', 'google business profile', 'near me ranking', 'answer engine optimization'],
    readTime: '6 min read',
    paragraphs: [
      "If you run one shop or one clinic, the version of \"being found online\" that matters is small and very local. You are not competing with the whole internet. You are competing to be the result someone picks when they're standing in Madhapur or Gachibowli or Kondapur, phone in hand, typing something like \"printing shop near me\" or \"physio for shoulder pain nearby.\" Win that moment consistently and you have a business. Everything else is a distraction.",
      "The single biggest lever is the Google Business Profile, and it's underused because it's boring. Right category, not a vague one. A description that actually says what you do and where. Real photos, plenty of them, updated now and then. Hours that are correct, including on festival days. And reviews - not a one-time push for reviews, but a quiet habit of asking every happy customer, and actually replying to the ones you get. Square Designs, a printing shop in Madhapur, mostly got to the top three for local print searches by doing these unglamorous things properly and not stopping. PrintX in Gachibowli went the same way for \"flex design and print\" type searches. No ad budget, just a listing that was looked after.",
      "Then there's the website, and here the job is narrower than people think. It doesn't need fifty pages. It needs pages that match how people search - a clear page for each service you want to be found for, a page for each location if you have more than one, and content that reads like a straight answer to a real question. When we built the PAL Physiotherapy site, a lot of the work was making dedicated, honest pages for each branch and each treatment, so that a search for \"sports rehab in Kondapur\" had an actual page to land on instead of a generic homepage.",
      "The newer piece is that people don't only search on Google anymore. They ask ChatGPT or Perplexity or Google's own AI answer \"who's a good physio in Madhapur\" and expect a name back. Those tools pull from the same place - clear pages, consistent business information across the web, structured data that tells a machine \"this is a business, here's the address, here's what it does, here are the common questions and answers.\" If your site is one big image with the details baked into the picture, you're invisible to that entire layer. If it's plain, well-structured text with the facts stated openly, you've got a real shot at being the name that comes back.",
      "The practical version of all this: fix and maintain the Google listing first, build a handful of specific pages that answer specific local searches, keep your name, address and phone number identical everywhere they appear, and write like you're answering a question rather than impressing a design jury. It's slow and it's not thrilling, but for a local business it's the highest-return work there is. It's exactly what our {LINK} focuses on.",
    ],
    linkParagraphIndex: 4,
    linkText: 'Google Business Profile and local SEO work',
    linkHref: '/services/google-my-business',
    relatedSlugs: ['nobody-cares-about-google-business-until-they-do', 'what-seo-geo-aeo-change-in-code'],
    caseStudySlug: 'printx-design',
  },
  {
    slug: 'why-we-still-pick-wordpress-2026',
    title: "Why we still pick WordPress for some projects in 2026",
    seoTitle: 'When WordPress Is Still the Right Call',
    excerpt:
      "React and Next.js are our default for a lot of work. But there's a category of project where reaching for WordPress is still the honest choice.",
    category: 'developers',
    author: 'hanish',
    datePublished: '2026-08-12',
    keywords: ['wordpress vs react', 'wordpress vs nextjs', 'cms choice', 'best website platform'],
    readTime: '5 min read',
    paragraphs: [
      "It's a little unfashionable to say, but we still put some clients on WordPress, and it's a deliberate choice, not a lazy one. The question we're actually answering isn't \"what's the best framework,\" it's \"who is going to be editing this site in a year, and what do they need it to do.\" That answer changes the whole decision.",
      "Here's the split, roughly. If a site is content-heavy and the client's team wants to add pages, write posts, swap images, and reorder things themselves without calling us for every change, WordPress earns its keep. The editing experience is familiar, there's a person in every office who has used it before, and you're not building a custom admin panel from scratch just so someone can update an address. Ardent's site is a good example - a lot of pages, a lot of ongoing updates from their side, not much need for anything fancy on the front end. WordPress was the right tool, and pretending otherwise to use something newer would have made their life harder.",
      "Where we go the other way - React, Next.js, something custom - is when performance and search visibility are doing real commercial work, or when the site is closer to an application than a brochure. PAL Physiotherapy needed to rank hard for local searches and load instantly on a mid-range phone, with a structure we controlled tightly, so that got a modern build. A product site like Zesti Fusion or something with an interactive flow, same thing. When the front end is the point, you want full control of it.",
      "The mistake in both directions is picking the platform for yourself instead of the client. Devs who insist everything must be a headless React build sometimes hand a small business a site they're scared to touch. And agencies that only know WordPress will bend a project that clearly needs a real front end into a pile of plugins that's slow and fragile. Neither is honest. The tool should match the team that inherits it and the job the site has to do.",
      "So when someone asks which platform they should be on, the real answer is a few questions back: who edits it, how often, does search traffic pay the bills, and is this a website or a tool. Once those are clear the choice is usually obvious. Working through that with clients is part of every {LINK} project we take on.",
    ],
    linkParagraphIndex: 4,
    linkText: 'website design and development',
    linkHref: '/services/website-design-development',
    relatedSlugs: ['what-fast-website-actually-means', 'what-seo-geo-aeo-change-in-code'],
    caseStudySlug: 'printx-design',
  },
  {
    slug: 'what-seo-geo-aeo-change-in-code',
    title: "What SEO, GEO and AEO actually change in the code we ship",
    seoTitle: 'SEO, GEO & AEO: What Changes in the Code',
    excerpt:
      "These acronyms get thrown around in sales decks. From a developer's chair, they come down to a fairly concrete list of things you build into the site.",
    category: 'developers',
    author: 'hanish',
    datePublished: '2026-08-28',
    keywords: ['GEO', 'AEO', 'generative engine optimization', 'answer engine optimization', 'structured data', 'SEO for developers'],
    readTime: '6 min read',
    paragraphs: [
      "SEO you've heard of. GEO - Generative Engine Optimization - is about getting your content surfaced and cited by tools like ChatGPT, Gemini and Perplexity. AEO - Answer Engine Optimization - is the closely related idea of being the source a direct-answer box pulls from. In a pitch these sound like three separate services. In the actual codebase they overlap almost completely, and they turn into a short list of things you either did or didn't do.",
      "First, the content has to exist as text in the HTML, not locked inside an image or only assembled by JavaScript after the fact. A crawler that doesn't run JS, and a lot of the AI ones are stingy about it, should still get the full page. On this site we prerender every route to static HTML at build time for exactly that reason - the words, the headings, the structured data are all in the file before any script runs. If your important content only appears after React hydrates, you're betting on the crawler being patient, and many aren't.",
      "Second, structure. One clear h1 per page, headings that actually describe the section under them, real paragraphs, lists where things are a list. Then structured data on top - Organization and LocalBusiness so a machine knows who you are and where, Service for what you offer, FAQPage for question-and-answer blocks, BlogPosting with a named author for articles, Breadcrumbs for hierarchy. This is the layer that lets an answer engine say \"this page is a physiotherapy clinic in Madhapur, here are its hours, here's what it treats\" with confidence instead of guessing.",
      "Third, write things as answers. AI answer tools love content that states a fact plainly and then supports it. A heading phrased as the question someone would actually ask, followed by a direct two-line answer, followed by the detail. FAQ sections are gold here, which is why we put a real one on almost every page and mark it up properly. It's the same instinct as good SEO copy, just more literal about it.",
      "Fourth, the boring reliability stuff still matters and arguably matters more. Fast loads, no layout shift, clean canonical URLs so the same page isn't indexed five ways, a correct sitemap, an honest robots file that doesn't accidentally block the crawlers you want. AI tools deprioritise slow and messy sites just like search does. When we built the PAL site, half the \"GEO work\" was really just doing SEO properly - the AI visibility mostly followed from the same clean structure.",
      "So if a vendor is selling you GEO and AEO as some separate dark art, be a little skeptical. Ask them what actually changes in the build. The honest answer is: content in the HTML, tight heading structure, thorough structured data, copy written as clear answers, and a fast, clean, well-declared site. That's the whole list, and it's baked into how we approach every {LINK}.",
    ],
    linkParagraphIndex: 5,
    linkText: 'website design and development',
    linkHref: '/services/website-design-development',
    relatedSlugs: ['what-fast-website-actually-means', 'hyderabad-one-shop-get-found-online'],
    caseStudySlug: 'pal-physiotherapy',
  },
];

export function getBlogPostBySlug(slug: string | undefined) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Newest first - for the blog index.
export const BLOG_POSTS_BY_DATE = [...BLOG_POSTS].sort(
  (a, b) => b.datePublished.localeCompare(a.datePublished),
);
