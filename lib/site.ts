export const site = {
  name: 'Hari Prasad Yarragolla',
  short: 'Hari Prasad',
  first: 'Hari',
  tagline: 'Full-Stack & AI Development',
  url: 'https://hariprasadyarragolla.com',
  studio: 'Growthmak',
  description:
    'Hari Prasad Yarragolla is a full-stack and AI developer — websites, custom Shopify storefronts, the systems, APIs and AWS infrastructure underneath them, and the AI, chat and voice agents that run on top. Built end to end, shipped on a documented process.',
  people: [
    {
      name: 'Hari Prasad Yarragolla',
      role: 'Websites · Custom Shopify · Systems · AI agents',
      at: 'Full-stack AI developer',
      photo: '/hari.jpg',
      bio: 'Builds the thing the traffic lands on, and the machinery behind it — custom storefronts and hand-coded Shopify themes, internal software, the APIs and AWS infrastructure that hold them together, and the AI, chat and voice agents that answer when nobody is at the desk. Starts with the data model rather than the design, because storefronts that are designed first and structured afterwards spend the rest of their lives being maintained by hand.',
      email: 'yarragollahari@gmail.com',
      phone: '+91 83418 86288',
      phoneHref: '+918341886288',
    },
  ],
};

/** Aggregate figures. Every one is sourced from the case studies in this repo. */
export const stats = [
  {
    value: 1467,
    prefix: '',
    suffix: '',
    decimals: 0,
    label: 'Products in a single custom build',
    note: 'Lighting Souq storefront, Doha',
  },
  {
    value: 24,
    prefix: '',
    suffix: 'h',
    decimals: 0,
    label: 'Concept to a live landing page',
    note: 'Zoophire, start to finish in a day',
  },
  {
    value: 15,
    prefix: '',
    suffix: '',
    decimals: 0,
    label: 'Business days to a working system',
    note: 'Document management build, UAE',
  },
  {
    value: 8,
    prefix: '',
    suffix: '×',
    decimals: 0,
    label: 'Faster document retrieval',
    note: 'Measured after that system went live',
  },
];

export type Service = {
  index: string;
  title: string;
  blurb: string;
  categories: string[];
};

export const services: Service[] = [
  {
    index: '001',
    title: 'Website development',
    blurb:
      'Hand-built front ends rather than configured templates — custom Shopify themes in Liquid, and Next.js sites where the business needs full control of structure and speed. Built mobile-first, because a slow site is a silent sales killer when four in five visitors are on a phone.',
    categories: [
      'Next.js websites',
      'E-commerce development',
      'Information architecture',
      'UI/UX design',
      'Landing page development',
      'Core Web Vitals & speed',
      'CMS structuring',
      'Technical & local SEO',
    ],
  },
  {
    index: '002',
    title: 'Custom Shopify development',
    blurb:
      'Custom Liquid themes rather than a configured template. The catalogue gets structured first — vendors, product types, collection rules — so filtering, navigation and merchandising all run off one source of truth, and a new SKU appears everywhere it belongs the moment it is created.',
    categories: [
      'Custom Shopify themes',
      'Liquid development',
      'Catalogue & taxonomy engineering',
      'Platform migration & data extraction',
      'B2B and trade quote tooling',
      'Online Store 2.0 sections',
      'Faceted filtering & search',
      'Merchant Center & feed setup',
    ],
  },
  {
    index: '003',
    title: 'Systems, APIs & infrastructure',
    blurb:
      'End-to-end tool building and the plumbing under it: internal software and micro-SaaS built for the workflow that already exists, APIs designed and exposed as endpoints, third-party tools integrated so data stops being re-keyed by hand, and AWS infrastructure set up and managed so the whole thing stays up.',
    categories: [
      'Custom web applications',
      'Micro-SaaS platforms',
      'Internal dashboards & admin tools',
      'API design & development',
      'Endpoint & webhook integration',
      'Third-party tool integration',
      'Data migration & scripting',
      'AWS infrastructure & management',
    ],
  },
  {
    index: '004',
    title: 'AI automation',
    blurb:
      'The cheapest fix is almost always a process nobody should be doing by hand. Automations that move data between the tools a business already pays for, qualify what arrives, and let a small team absorb volume it could not otherwise carry.',
    categories: [
      'Workflow automation',
      'CRM automation',
      'Booking & scheduling automation',
      'Lead qualification flows',
      'Document & data processing',
      'Internal reporting automation',
    ],
  },
  {
    index: '005',
    title: 'AI & voice agents',
    blurb:
      'Agents that hold an actual conversation and then do something with it — answering after hours, qualifying before a human spends a minute, booking into a real calendar, and handing over cleanly when a person is genuinely needed.',
    categories: [
      'Voice AI agents',
      'Conversational chat agents',
      'WhatsApp & messaging agents',
      'Retrieval over your own content',
      'Agent tooling & function calling',
      'Handover & escalation design',
    ],
  },
];

export const capabilities = [
  'Website development',
  'Custom Shopify development',
  'Shopify Liquid',
  'Next.js builds',
  'E-commerce development',
  'APIs & endpoints',
  'Systems integration',
  'Internal tools & micro-SaaS',
  'AWS infrastructure',
  'AI automation',
  'AI agents',
  'Voice agents',
];

export const process = [
  {
    n: '01',
    title: 'I start with the data model, not the design',
    text: 'Structure the catalogue, the taxonomy and the content types before a template is written. Filtering, navigation and collection logic then run off one source of truth — instead of being maintained by hand forever.',
  },
  {
    n: '02',
    title: 'Sitemap and mockup before the contract, not after',
    text: 'The structure and design of the thing being commissioned are on the table before anyone signs. It removes the largest risk in any build — finding out after signature that both sides imagined a different product.',
  },
  {
    n: '03',
    title: 'I engineer around platform limits rather than wait on them',
    text: 'When a legacy platform offered no catalogue export at all, I scripted its admin and wrote every record out to CSV with meta fields intact. Migrations are where replatforms stall, and engineering around that is much of what I am hired for.',
  },
  {
    n: '04',
    title: 'I ship on a documented process',
    text: 'A build SOP, a content SOP and a pre-launch QA checklist. That is why a 1,467-product store with a bespoke B2B channel is a week of build time rather than a quarter of drift.',
  },
];

export const faqs = [
  {
    q: 'What do you actually build?',
    a: 'Websites and custom Shopify storefronts first, then the systems layer underneath them — internal tools, APIs, integrations and AWS infrastructure — plus the AI automations and chat and voice agents that run on top. It is one stack, and most engagements touch more than one part of it.',
  },
  {
    q: 'Custom Shopify, or a theme?',
    a: 'Custom. A configured template produces a store that works; a custom Liquid build produces one built around how the catalogue is actually shopped. The dual-axis mega-menu, the multi-line trade quote tool and the category tiles reading live product counts in the Lighting Souq build do not ship in any theme.',
  },
  {
    q: 'Shopify or Next.js — how do you choose?',
    a: 'Shopify when the business needs to sell reliably across borders without employing a platform team: checkout, payment compliance and uptime stop being your problem, and the Liquid layer means you are never capped by a theme editor. Next.js when the site is not primarily a checkout — a premium service brand, a media property, a content architecture that has to rank. Complex multi-storefront setups can outgrow both and are better served headless, and I will say so.',
  },
  {
    q: 'How fast is fast?',
    a: 'A landing page has gone from concept to live in 24 hours. A custom document management system took 15 business days. A 1,467-product Shopify storefront with a bespoke B2B quote channel took under a week of build time. The speed comes from the process being solved in advance, not from work being skipped.',
  },
  {
    q: 'Whose work is this?',
    a: 'These are engagements delivered at Growthmak, where I lead the build side. The clients are named because the work is published — the strategy, the structure and the decisions on each page are the ones I made and shipped.',
  },
  {
    q: 'What are the mockups?',
    a: 'Full front-end builds deployed as live previews — storefronts, business sites and platforms you can open and click through. Some client work sits under NDA, so the mockup is the part I can show. They demonstrate the build; they do not claim a result, because a mockup has not produced one.',
  },
  {
    q: 'Will I be able to run it after you hand it over?',
    a: 'That is a design constraint, not an afterthought. Homepages are built as reorderable sections, content models are built as CMS templates a single founder can operate, and internal tools are scoped so adoption does not need a training programme. If it can only be maintained by me, I have built it wrong.',
  },
  {
    q: 'How do we start?',
    a: 'A discovery call, then a sitemap and a mockup — before any money changes hands, so you can see the real structure and design of what you are commissioning. If the honest answer is that you do not need a rebuild, I will tell you that instead.',
  },
];
