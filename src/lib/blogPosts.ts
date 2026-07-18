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
  readTime: string;
  paragraphs: string[];
  linkParagraphIndex: number;
  linkText: string;
  linkHref: string;
  relatedSlugs: string[];
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
  },
  {
    slug: 'nobody-cares-about-google-business-until-they-do',
    title: "Nobody cares about your Google Business listing (until they do)",
    seoTitle: 'Why Your Google Business Listing Matters',
    excerpt:
      "Almost no business owner thinks about their Google listing until the day someone can't find them on maps. By then it's already cost you a customer.",
    category: 'brands',
    readTime: '4 min read',
    paragraphs: [
      "Here's a strange thing about local search. Almost no business owner thinks about their Google Business listing until the day someone mentions, offhand, \"hey I couldn't find your clinic on maps, is it even open?\" And suddenly it becomes the most urgent thing in the world.",
      "The truth is your Google listing is doing more work than your website for a huge chunk of your customers - the ones searching \"physiotherapy near me\" or \"best bakery nearby\" at 9pm on their phone, half paying attention, ready to call whichever result looks legit first. If your hours are wrong, if there are three photos and one of them is blurry, if you have two reviews and a competitor down the road has forty, you've already lost that person before they even opened your website.",
      "The annoying part is that fixing this isn't really about doing one big thing. It's a bunch of small, slightly boring things done consistently - keeping hours accurate, actually responding to reviews instead of leaving them hanging, posting updates every so often so Google, and people, know you're active, making sure the category and description actually say what you do. None of it is exciting. All of it adds up.",
      "We've had clients genuinely surprised at how much foot traffic and call volume shifted just from tidying up and staying active on their listing, no ad spend involved. It's one of those areas where the ceiling is low-effort and the payoff is disproportionately high, which almost never happens in marketing.",
      "If your listing hasn't been touched in a while, that's usually the first thing worth fixing before spending a rupee on ads. It's also just about the entire idea behind our {LINK} - not glamorous, just genuinely useful.",
    ],
    linkParagraphIndex: 4,
    linkText: 'Google My Business work',
    linkHref: '/services/google-my-business',
    relatedSlugs: ['why-most-rebrands-fail-before-launch'],
  },
  {
    slug: 'why-most-rebrands-fail-before-launch',
    title: 'Why most rebrands fail before they even launch',
    seoTitle: 'Why Most Rebrands Fail Before Launch',
    excerpt:
      "Rebrands usually die in the same place, and it's not the design - it's the week after launch when half your materials still use the old logo.",
    category: 'brands',
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
    relatedSlugs: ['app-nobody-asked-for-vs-one-people-need', 'website-that-looks-good-vs-one-that-works'],
  },
  {
    slug: 'app-nobody-asked-for-vs-one-people-need',
    title: 'Building an app nobody asked for vs one people actually need',
    seoTitle: 'An App Nobody Asked For vs One People Need',
    excerpt:
      "A lot of app ideas start the same way - \"wouldn't it be cool if we had an app.\" The apps that actually get used start from a much less exciting place.",
    category: 'developers',
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
    relatedSlugs: ['what-fast-website-actually-means'],
  },
];

export function getBlogPostBySlug(slug: string | undefined) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
