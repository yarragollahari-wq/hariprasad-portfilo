/**
 * CASE STUDY CONTENT
 * ---------------------------------------------------------------------------
 * Every engagement below was delivered at Growthmak. Every client is under
 * NDA, so no case study names the company, its domain, its taglines or its
 * proprietary product names — only the industry, the niche, the market and
 * what was built. This file is the single place that content lives, so it
 * can be audited in one pass.
 *
 * RULE: no figure appears here that is not in the source material for that
 * engagement. Where an engagement is too early to have performance data, the
 * case study says so rather than reaching for a number.
 */

export type Metric = { value: string; label: string; note?: string };
export type TableBlock = { title: string; note?: string; head: string[]; rows: string[][] };
export type Chapter = {
  kicker: string;
  title: string;
  body: string[];
  points?: { label: string; text: string }[];
  table?: TableBlock;
  pull?: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  industry: string;
  niche: string;
  market: string;
  year: string;
  duration: string;
  services: string[];
  summary: string;
  cardMetric: Metric;
  metrics: Metric[];
  chapters: Chapter[];
  proves: { title: string; text: string }[];
  closing: string;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  /* ======================================================================
     01 — LIGHTING RETAILER · CUSTOM SHOPIFY · DOHA, QATAR
     ====================================================================== */
  {
    slug: 'custom-shopify-lighting-retailer',
    index: '001',
    title: 'The Shopify build',
    subtitle:
      'A custom-built storefront for a Doha lighting retailer — 1,467 products, 40 brands, a dual-axis navigation system and a bespoke trade-quote channel.',
    industry: 'Lighting & Smart Home',
    niche: 'Custom Shopify development',
    market: 'Doha, Qatar',
    year: '2026',
    duration: 'Under a week of build time',
    services: [
      'Custom Shopify development',
      'Liquid theme build',
      'Catalogue engineering',
      'Information architecture',
      'E-commerce SEO',
      'Data migration',
    ],
    summary:
      'The client sells lighting to Qatar and to more than forty countries beyond it — from a QAR 10 bulb to a full villa scheme, with its own delivery fleet and a trade business serving contractors and hospitality. I designed and built their storefront on Shopify as a fully custom theme: not a marketplace template with the colours changed, but a purpose-built front end for a technical catalogue with two very different audiences.',
    cardMetric: { value: '1,467', label: 'Products live at launch' },
    metrics: [
      { value: '1,467', label: 'Products live', note: '1,466 in stock at launch' },
      { value: '40', label: 'Brands', note: 'each with a dedicated page' },
      { value: '33', label: 'Collections', note: 'across five departments' },
      { value: '2–3 hrs', label: 'To extract 2,000+ products', note: 'from a platform with no export' },
    ],
    chapters: [
      {
        kicker: 'The problem',
        title: 'Three buyers, one catalogue, and no single grid that serves them',
        body: [
          'A lighting catalogue is not a fashion catalogue. The same shopper may arrive knowing exactly what they need — a GU10 spotlight, 6W, 2700K, dimmable — or knowing only that their garden is dark. One wants a specification; the other wants a recommendation.',
          'Meanwhile a contractor is not shopping at all. They have a list of forty line items and want a price against it.',
          'A single product grid cannot serve all three. Everything in this build — the dual-axis navigation, the shop-by-space routes, the brand pages, the trade quote tool — exists to give each of those three buyers their own path to the same catalogue.',
        ],
        pull:
          'The navigation is the most heavily engineered part of this storefront, because it is where the three-audience problem gets solved.',
      },
      {
        kicker: 'Foundation',
        title: 'Structure before interface: a five-department model over 1,467 products',
        body: [
          'Nothing else in the build works if the catalogue underneath it is not organised. Before a single template was written, the entire product set was restructured into a taxonomy that could drive navigation, filtering, merchandising and search from the same data.',
          'Every product carries a vendor and a product type. Those two fields do a great deal of work: 40 brands and 29 product types drive the storefront filters, populate the brand pages, and let collections be defined by rule rather than maintained by hand.',
          'Hand-curated collections rot. Every new product needs adding to every relevant list, and the day someone forgets, the catalogue quietly starts lying. Structuring the data properly means a new SKU appears everywhere it belongs the moment it is created.',
        ],
        table: {
          title: 'The five departments',
          note: 'Plus Deals and Shop All as standalone routes — 33 collections wired into the navigation in total.',
          head: ['Department', 'Subcategories', 'Example collections'],
          rows: [
            ['Smart Home', '5 + department page', 'Smart Bulbs, LED & RGB Strips, Smart Switches, Sensors'],
            ['Bulbs & Tubes', '5 + department page', 'LED Bulbs (E27/E14), Specialty, LED Tubes (T8), Grow Lights'],
            ['Indoor Fixtures', '5 + department page', 'Downlights & Spots, Ceiling Panels, Wall & Pendant'],
            ['Solar & Outdoor', '5 + department page', 'Solar Lights, Flood & Street, Outdoor Wall, Sensor'],
            ['Fans & Electrical', '5 + department page', 'Ceiling Fans, Exhaust, Ballasts & Drivers, Switches'],
          ],
        },
      },
      {
        kicker: 'Core build',
        title: 'A dual-axis mega-menu: shop by type, or shop by brand',
        body: [
          'Open any of the five departments and the menu presents two parallel routes side by side. Shop by Type lists the five subcategories. Shop by Brand lists the five brands that matter most in that department, plus a link to the full brand index. Both routes lead to the same catalogue by different logic.',
          'A homeowner replacing a bulb thinks in categories — they want LED bulbs. A trade buyer or a brand-loyal customer thinks in manufacturers — they want Osram, or they want KDK because that is what the specification says. Forcing either to browse the other’s way adds a step, and steps are where carts are lost.',
        ],
        points: [
          {
            label: 'Faceted filtering',
            text: 'Availability, price, brand and product type on every collection, with live result counts and a clear-all control — 1,467 products down to a working shortlist in two clicks.',
          },
          {
            label: 'Eight-way sorting',
            text: 'Featured, most relevant, best selling, alphabetical, price and date in both directions — with the default tuned per collection rather than applied globally.',
          },
          {
            label: 'A third, merchandising panel',
            text: 'Each department menu carries its own message and call to action — Life in Light, Daily Essentials, Fit-out Ready, Villa & Garden, Trade & Project. The navigation sells as well as directs.',
          },
        ],
      },
      {
        kicker: 'Bespoke build',
        title: 'A B2B channel inside a B2C storefront',
        body: [
          'The business supplies contractors, hotels, hospitality venues and facilities teams as well as households. Those buyers do not add forty line items to a cart one at a time — they send a list and expect a price. So I built them their own channel.',
          'A dedicated request drawer lets a trade buyer search the live catalogue, add multiple products with quantities against each, and keep adding lines until the list is complete — then submit it with their name, work email, phone, company website and any notes, or continue the same conversation on WhatsApp.',
          'No standard Shopify theme ships a multi-product quote builder that reads the live catalogue. It is a bespoke Liquid and JavaScript build, reachable from the main navigation, from a dedicated bulk orders page, and from a closing banner on the homepage.',
        ],
        pull:
          'Without it, every trade order arrives as an unstructured phone call that somebody has to transcribe before it can be quoted. With it, the enquiry arrives structured, itemised and ready to price.',
      },
      {
        kicker: 'The platform choice',
        title: 'Why Shopify here — and where it would have been the wrong answer',
        body: [
          'For a catalogue-heavy international retailer, the case is straightforward: Shopify carries the commerce infrastructure so that engineering time goes into the storefront rather than into rebuilding checkout, hosting and payment compliance from scratch.',
          'Where it does not win: complex multi-storefront architectures, or businesses with dedicated frontend engineering teams, can outgrow the standard theme model and are better served headless. That was not this business, and building it that way would have added cost and fragility for no return.',
        ],
        table: {
          title: 'Platform capability, and how it was used on this build',
          head: ['Capability', 'How it was used'],
          rows: [
            ['Liquid theme layer', 'Full pixel-level control. The mega-menu, category tiles and trade quote drawer are custom Liquid, not theme settings.'],
            ['Online Store 2.0 sections', 'A section-based homepage the client can reorder and re-merchandise without a developer.'],
            ['Native faceted filtering', 'Filtering across 1,467 products served by the platform rather than a paid filter app.'],
            ['Product taxonomy & vendors', '40 brands and 29 types powering filters, brand pages and collection logic from one source of truth.'],
            ['Hosted checkout & wallets', 'PCI-compliant checkout with cards, Apple Pay, Google Pay and cash on delivery — maintained by Shopify.'],
            ['Markets & multi-currency', 'Cross-border infrastructure for a retailer shipping to more than 40 countries.'],
          ],
        },
      },
      {
        kicker: 'Delivery',
        title: 'A documented SOP, not an improvised project',
        body: [
          'The speed below comes from the process being solved in advance, not from work being skipped. The sitemap and mockup were produced and presented on the onboarding call, before any money changed hands — so the client saw the real structure and design of the store they were commissioning.',
          'The previous platform offered no catalogue export of any kind. I wrote a page-script routine that walked its admin and wrote every record out to CSV, meta fields intact. Over 2,000 products were extracted in two to three hours; development began the next day.',
        ],
        table: {
          title: 'Stage by stage',
          head: ['Stage', 'What happened', 'Time'],
          rows: [
            ['Pre-sale', 'Discovery call, then a full sitemap and mockup presented before signature', '—'],
            ['Catalogue engineering', 'Complete product and customer dataset extracted by custom script, meta intact', '2–3 hours'],
            ['Development', 'Custom Shopify theme built to the approved mockup, full catalogue loaded', '2–3 days'],
            ['Content & SEO', 'Product content and every core site page written and optimised', '1 day'],
            ['Upload & QA', 'Content loaded, checked and published', '2 days'],
            ['Delivered', 'A live, fully custom storefront carrying a 1,467-product catalogue', 'Under a week'],
          ],
        },
      },
    ],
    proves: [
      {
        title: 'Custom, not configured',
        text: 'The dual-axis mega-menu, the multi-line trade quote tool, the category tiles that read live product counts, the shop-by-space routes — none of these ship in a theme. A configured template would have produced a store that works; this one is built around the business.',
      },
      {
        title: 'The data model comes before the design',
        text: 'Forty brands and twenty-nine product types were structured before a template was written, which is why filtering, brand pages, category counts and collection logic all run off one source of truth.',
      },
      {
        title: 'A documented process is what makes speed safe',
        text: 'Sitemap and mockup before signature. A build SOP that produces a custom storefront in under a week. That is why a 1,467-product store with a bespoke B2B channel is a week of build time rather than a quarter of drift.',
      },
    ],
    closing:
      '1,467 products. 40 brands. 33 collections. A dual-axis navigation system, a bespoke trade-quote channel, twelve custom homepage sections and a full content and SEO layer — on a platform the business can merchandise and scale itself.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     02 — WATERPROOF SOCK BRAND · SHOPIFY LAUNCH · UNITED KINGDOM
     ====================================================================== */
  {
    slug: 'single-sku-shopify-launch',
    index: '002',
    title: 'One product, five ways in',
    subtitle:
      'A single-SKU waterproof sock brand with no reviews, no orders and no recognition — given twenty-one pages and five reasons to be found. Live in seventeen days.',
    industry: 'Waterproof Socks',
    niche: 'Single-SKU D2C e-commerce',
    market: 'United Kingdom',
    year: '2026',
    duration: '17 days, referral call to live store',
    services: [
      'Shopify store build',
      'Positioning & content strategy',
      'Information architecture',
      'E-commerce SEO',
      'Conversion copywriting',
      'Tracking & ads setup',
    ],
    summary:
      'The client is a UK waterproof sock brand with one product, no reviews, no orders and no recognition. A WordPress site already existed but had never been launched and had never taken a sale. I built the store around the reasons people get wet feet rather than around the company — five use-case routes, each with its own page, so the brand can be found by people who have never heard of it.',
    cardMetric: { value: '17 days', label: 'Referral call to live store' },
    metrics: [
      { value: '17 days', label: 'Referral call to live store', note: 'one week of that was the build' },
      { value: '21', label: 'Pages built', note: 'behind a single SKU' },
      { value: '5', label: 'Use-case routes', note: 'one per reason to buy' },
      { value: '1', label: 'Product', note: 'and no order history to trade on' },
    ],
    chapters: [
      {
        kicker: 'The brief',
        title: 'The obvious positioning was also a ceiling',
        body: [
          'The obvious move with a product like this is to build the whole brand around its most distinctive buyer — Muslim customers looking for socks that hold up to wudu. That is a real market, and it is also a ceiling.',
          'Nobody searches for a brand they have not heard of, and a single-SKU store with no history behind it has to be found some other way. A site that exists but has never launched and has never taken a sale is not a starting point; it is a blank page with hosting attached.',
        ],
      },
      {
        kicker: 'The architecture',
        title: 'Twenty-one pages behind a single SKU',
        body: [
          'The store is built around the reasons people get wet feet rather than around the company. Five use-case routes — hiking and walking, all day in boots, cycling and commuting, running and trail, and wudu and masah — each get their own page.',
          'So wudu is one door into the brand instead of the whole building, and someone searching for waterproof socks for trekking can arrive without having heard the name. Twenty-one pages sit behind a single SKU for exactly that reason.',
          'Scholarly verification the client already held was given a standing page rather than a line of copy, because for one of those five audiences it is the entire purchase decision.',
        ],
        pull:
          'Wudu is one door into the brand instead of the whole building.',
      },
      {
        kicker: 'The commercial model',
        title: 'A pricing ladder that follows cost, not a discount pattern',
        body: [
          'Delivery scales with the weight of the parcel, so it is absorbed from two pairs upward and carried on single pairs as a launch position. The ladder is built from what the parcel actually costs to send rather than from a percentage-off convention.',
          'The candour was deliberate — what the socks will not do, why they are £20 and not £40, and why there are no reviews yet. A brand with no history is better served by saying so than by five stars nobody believes.',
        ],
      },
      {
        kicker: 'The launch',
        title: 'A week of build, and the days that were not design',
        body: [
          'The build itself took a week. The remaining days went to Merchant Center, payment and shipping setup — which is the part of a launch that is not design, and the part that quietly decides whether a store can actually take money on day one.',
        ],
      },
    ],
    proves: [
      {
        title: 'Positioning is an architecture decision, not a copy decision',
        text: 'The difference between a wudu sock brand and a waterproof sock brand with a wudu page is five URLs and an information architecture. One of those has a ceiling; the other has five doors.',
      },
      {
        title: 'A single SKU can still carry a content structure',
        text: 'Twenty-one pages behind one product is not padding. Each route answers a different search, a different objection and a different reason to buy.',
      },
      {
        title: 'Launch is not the same as build',
        text: 'A week of that seventeen days was design and development. The rest was Merchant Center, payments and shipping — the unglamorous half that determines whether launch day works.',
      },
    ],
    closing:
      'One product, five ways in, live in seventeen days — with a structure built to be found by people who had never heard the name.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     03 — MOTORCYCLE PARTS BRAND · E-COMMERCE BUILD · HOUSTON, USA
     ====================================================================== */
  {
    slug: 'motorcycle-parts-ecommerce',
    index: '003',
    title: 'From invisible to sales machine',
    subtitle:
      'A hand-coded Liquid store migrated onto Shopify and rebuilt around purchase intent — a business stuck at $50K a month produced $628K.',
    industry: 'Aftermarket Motorcycle Parts',
    niche: 'Direct-to-consumer e-commerce',
    market: 'Houston, United States',
    year: '2024—2026',
    duration: '20 months, ongoing',
    services: [
      'E-commerce website development',
      'Custom Shopify build',
      'Platform migration',
      'E-commerce SEO',
      'Tracking & attribution',
      'Retention sequences',
    ],
    summary:
      'A premium aftermarket parts brand built around a single Harley-Davidson platform had real engineering credentials and an established customer base, and had been stalled around $50,000 a month. Thousands of riders searched for these products daily and saw nothing. Rather than optimising one channel, the whole revenue system was rebuilt — including migrating a hand-coded Liquid store onto Shopify and restructuring product and category pages around the terms people actually search.',
    cardMetric: { value: '$628K', label: 'Revenue, Nov 2024 – Jul 2026' },
    metrics: [
      { value: '$628K', label: 'Revenue generated', note: 'November 2024 – July 2026' },
      { value: '12.15×', label: 'Peak return on ad spend', note: 'paid social' },
      { value: '7.56×', label: 'Return on Google', note: 'on comparable overall spend' },
      { value: '6 months', label: 'To match a full year', note: 'of prior revenue' },
    ],
    chapters: [
      {
        kicker: 'The situation',
        title: 'Strong product, established base, and a storefront nobody could find',
        body: [
          'The engineering was never the problem. The brand had a following and a catalogue riders genuinely wanted, and revenue had been flat around $50,000 a month for a long time.',
          'The store itself was hand-coded Liquid, and product and category pages carried none of the structure that competitive non-branded search rewards. Almost every sale had to be rented through advertising — the moment spend paused, sales would stop.',
        ],
      },
      {
        kicker: 'The build',
        title: 'Migrate the storefront, then restructure what search actually indexes',
        body: [
          'The hand-coded Liquid store was migrated onto Shopify for speed, stability and scale, and rebuilt so the catalogue could carry proper structure rather than being maintained page by page.',
          'Product and category pages were then optimised for the competitive non-branded terms riders type when they do not yet know the brand — the difference between renting every visit and owning a share of them.',
          'A full tracking and attribution layer was rebuilt underneath all of it, so budget decisions came from measured return rather than platform-reported opinion.',
        ],
        points: [
          {
            label: 'Platform migration',
            text: 'From a hand-coded Liquid store to Shopify, without losing catalogue structure or search equity.',
          },
          {
            label: 'Category and product architecture',
            text: 'Pages rebuilt around the non-branded terms with real purchase intent behind them.',
          },
          {
            label: 'Tracking and attribution',
            text: 'Measurement rebuilt first, so that when one channel returned 12.15× and another returned far less, there was nothing to debate.',
          },
        ],
        pull:
          'Budget moved to where return was measured, not where a platform claimed credit — Meta at 12.15× and Google at 7.56×, on comparable overall spend.',
      },
      {
        kicker: 'The outcome',
        title: 'A full year of revenue in half the time',
        body: [
          'The business generated $628,000 between November 2024 and July 2026, and matched a full prior year of revenue in six months — without raising overall ad spend.',
          'The storefront, the organic presence and the retention sequences are the part that keeps working when a campaign is paused, which is the whole reason the build came before the scale-up.',
        ],
      },
    ],
    proves: [
      {
        title: 'The storefront is part of the revenue system, not a container for it',
        text: 'Migrating the platform and restructuring the catalogue were not side projects around the advertising. They are why the advertising could scale at all.',
      },
      {
        title: 'Rented traffic and owned traffic are built differently',
        text: 'Ads bring the right people in now. Category and product structure keeps bringing them for years. Building only one of those leaves the business permanently renting.',
      },
      {
        title: 'Measurement first, decisions second',
        text: 'The tracking layer was rebuilt before budget was moved, which is why a 12.15× channel and a much weaker one could be told apart with confidence.',
      },
    ],
    closing:
      '$628K through a system that had been stuck at $50K a month — with a migrated, restructured storefront underneath it that keeps earning when spend pauses.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     04 — CONSTRUCTION CONTRACTOR · CUSTOM SOFTWARE · UAE
     ====================================================================== */
  {
    slug: 'construction-document-management',
    index: '004',
    title: 'A document management system in 15 business days',
    subtitle:
      'Scattered files and incompatible workflows replaced with a custom system built around the practices that already existed — not a platform migration nobody would adopt.',
    industry: 'Construction',
    niche: 'Custom software · Micro-SaaS',
    market: 'United Arab Emirates',
    year: '2026',
    duration: '15 business days, brief to working system',
    services: [
      'Custom software development',
      'No-code development',
      'Bubble.io',
      'Micro-SaaS platform',
      'Cloud storage integration',
    ],
    summary:
      'A UAE construction contractor was losing time to scattered documents and workflows that did not talk to each other. I built a custom document management system and deployed it in fifteen business days — designed to integrate with the practices the team already had rather than replace them, so that adoption did not require a training programme.',
    cardMetric: { value: '15 days', label: 'Brief to working system' },
    metrics: [
      { value: '15 days', label: 'Brief to working system', note: 'business days, deployed' },
      { value: '8×', label: 'Faster document retrieval', note: 'measured after go-live' },
      { value: '20%', label: 'Project management efficiency', note: 'improvement reported' },
      { value: '0', label: 'Training programmes required', note: 'built for intuitive adoption' },
    ],
    chapters: [
      {
        kicker: 'The problem',
        title: 'The files existed. Finding them was the job.',
        body: [
          'Documents were scattered across storage nobody had agreed on, and the processes around them had grown incompatible with each other. On a construction project that is not an inconvenience — it is hours a week, repeated by everyone, on work that produces nothing.',
          'The standard answer is a document management platform. The standard outcome is that a team keeps using the folders it already trusts, because the new system asks them to work differently on the day they are busiest.',
        ],
      },
      {
        kicker: 'The build',
        title: 'Built around the existing practice, not against it',
        body: [
          'The system was built to fit the way this team already filed and retrieved things, and to integrate with the cloud storage they already used, rather than demanding a wholesale migration before it delivered any value.',
          'It was built no-code, on Bubble, deliberately: for a scoped internal tool with a known workflow, that route puts a working system in front of the people who need it in weeks rather than quarters — and leaves it editable by someone other than its author.',
        ],
        points: [
          {
            label: 'Integrated, not replacing',
            text: 'Existing cloud storage and existing filing habits were carried into the system rather than deprecated by it.',
          },
          {
            label: 'Scoped for adoption',
            text: 'Designed so that minimal training was required — the measure of success was people actually using it, not feature count.',
          },
          {
            label: 'Delivered as a micro-SaaS',
            text: 'A contained platform with its own access model, rather than a script or a spreadsheet with ambitions.',
          },
        ],
        pull:
          'A tool nobody adopts has a feature list and no users. The constraint here was adoption, so adoption is what the design optimised for.',
      },
      {
        kicker: 'The outcome',
        title: 'Eight times faster retrieval, and a fifth off the management overhead',
        body: [
          'Document retrieval came out eight times faster, and project management efficiency improved by twenty per cent — on a system that was live fifteen business days after the brief.',
        ],
      },
    ],
    proves: [
      {
        title: 'The constraint is usually adoption, not capability',
        text: 'Building around the practices a team already trusts is what makes a system get used. The version that requires everyone to change on day one is the version that quietly gets bypassed.',
      },
      {
        title: 'No-code is a delivery decision, not a compromise',
        text: 'For a scoped internal tool with a known workflow, it puts a working system in front of users in weeks and leaves it maintainable by someone other than the person who built it.',
      },
      {
        title: 'Fifteen days is a process outcome',
        text: 'The speed came from scoping the workflow properly before building, not from cutting the parts that make a system usable.',
      },
    ],
    closing:
      'A working document management system in fifteen business days — eight times faster retrieval, twenty per cent better project management overhead, and no training programme required to get there.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     05 — JOINERY FIRM · NEXT.JS BUILD · SYDNEY, AUSTRALIA
     ====================================================================== */
  {
    slug: 'joinery-nextjs-website',
    index: '005',
    title: 'Craft quality, matched by the digital presence',
    subtitle:
      'A premium joinery firm on a template-bound Wix site, rebuilt in Next.js on ninety-six sections of information architecture mapped before a line of design.',
    industry: 'Custom Joinery & Renovation',
    niche: 'Next.js website development',
    market: 'Sydney, Australia',
    year: '2025',
    duration: 'Four research phases, then build',
    services: [
      'Next.js development',
      'Website design',
      'Information architecture',
      'Local SEO',
      'Integrations',
    ],
    summary:
      'The client builds bespoke cabinetry, custom kitchens and whole-room renovations at a premium tier — on a template-bound Wix site that undermined the positioning. Four documented research phases came before any design: business goal research, ICP and persona definition, a scored competitor analysis, and an information architecture of ninety-six sections across twenty-two pages, delivered as an execution-level CSV.',
    cardMetric: { value: '96 sections', label: 'Mapped across 22 pages before build' },
    metrics: [
      { value: '96', label: 'Sections mapped', note: 'across 22 pages, before design' },
      { value: '6', label: 'Competitors scored', note: 'into threat tiers' },
      { value: '9', label: 'Integrations at launch', note: 'analytics, maps, social, booking' },
      { value: '2', label: 'Buyer personas', note: 'with objection handling built in' },
    ],
    chapters: [
      {
        kicker: 'The problem',
        title: 'A premium business presenting itself on a template',
        body: [
          'The work was premium; the site was not. A template-bound Wix build left three things missing at once: insufficient social proof, no SEO architecture, and no owned platform on which a prospect could evaluate, trust or convert.',
          'For a boutique firm competing on craft, a site that looks like everyone else’s is not a neutral starting point — it actively argues against the price.',
        ],
      },
      {
        kicker: 'The research',
        title: 'Four documented phases before anything was designed',
        body: [
          'Business goal research audited the existing site and the competitive landscape. Two buyer personas were defined with their objections written down. Six competitors were scored into threat tiers, which is where the uncontested opening appeared: nobody in that market was addressing trade partners.',
          'The information architecture that came out of it — ninety-six sections across twenty-two pages — was handed over as a strategy document and an execution-level CSV, so it could be built against rather than interpreted.',
        ],
        points: [
          {
            label: 'Hub-and-spoke service architecture',
            text: 'Services structured so each one has its own depth without fragmenting the site into unrelated pages.',
          },
          {
            label: 'A first-mover trade partners route',
            text: 'A B2B pathway none of the six scored competitors had built, found by scoring them rather than guessing.',
          },
          {
            label: 'Structured local SEO',
            text: 'A /projects/[service]-[suburb]/ URL pattern, so local intent has a real page to land on instead of a filtered view.',
          },
        ],
      },
      {
        kicker: 'The build',
        title: 'Custom Next.js, because the template was the constraint',
        body: [
          'The site was rebuilt as a custom Next.js application, which is what gave back full SEO control, performance headroom and the design freedom to express a premium brand rather than approximate one.',
          'Nine integrations went live with it — analytics and search console, tag management, business profile and maps, social, pixel, booking and file upload — alongside a scalable CMS model for projects, blog and testimonials, and a single structured conversion path.',
        ],
        pull:
          'An execution-level information architecture compounds with use rather than ageing. That is the asset here, more than any individual page.',
      },
      {
        kicker: 'Where it stands',
        title: 'Live, generating qualified local enquiries — and too early for a traffic claim',
        body: [
          'The site launched, runs smoothly and is generating qualified local enquiries, and the engagement has moved into active growth and optimisation.',
          'No traffic, ranking or conversion-rate figures are asserted here. The build is early in its lifecycle, and numbers quoted this soon after launch are noise dressed up as evidence.',
        ],
      },
    ],
    proves: [
      {
        title: 'Research is what finds the uncontested position',
        text: 'The trade partners pathway was not a creative idea. It fell out of scoring six competitors and noticing that none of them had one.',
      },
      {
        title: 'The template was the ceiling',
        text: 'SEO control, performance and premium expression were all capped by the platform. Rebuilding in Next.js was the change that unlocked all three at once.',
      },
      {
        title: 'Say when it is too early to claim a result',
        text: 'The honest version of an early-lifecycle case study reports what was built and what is live, and leaves the performance claims until there is performance to report.',
      },
    ],
    closing:
      'Ninety-six sections across twenty-two pages, nine integrations, a first-mover B2B route and a custom Next.js build — a premium positioning now defended by structure rather than asserted by adjectives.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     06 — PODCAST · WEBSITE & IA · MULTI-MARKET
     ====================================================================== */
  {
    slug: 'podcast-website',
    index: '006',
    title: 'The owned home for a rented audience',
    subtitle:
      'Fifty-five episodes, world-class guests, and every one of them living on somebody else’s platform. Thirty-one pages at launch, built to scale past five hundred.',
    industry: 'Podcast & Media',
    niche: 'Website & information architecture',
    market: 'Canada · US · UK · Australia',
    year: '2025',
    duration: 'Strategy front-loaded, then build',
    services: [
      'Website development',
      'Digital strategy',
      'Information architecture',
      'UI/UX design',
      'CMS templates',
    ],
    summary:
      'A fifteen-month-old podcast with world-class guests and fifty-five-plus episodes was operating entirely on rented platforms — YouTube, Spotify, Apple, Amazon, Instagram, LinkedIn — with no website, no email capture and no search visibility. The gap was infrastructural, not creative. I built the owned home: thirty-one pages at launch on a content model one founder can operate, architected to scale past five hundred URLs.',
    cardMetric: { value: '31 pages', label: 'At launch, built to scale past 500' },
    metrics: [
      { value: '55+', label: 'Episodes given an owned home', note: 'previously only on rented platforms' },
      { value: '31', label: 'Pages at launch', note: 'scaling to 500+ URLs by year three' },
      { value: '4', label: 'English-language markets', note: 'Canada, US, UK, Australia' },
      { value: '121', label: 'Pre-launch QA items', note: 'checked before go-live' },
    ],
    chapters: [
      {
        kicker: 'The diagnosis',
        title: 'The show was not the problem — the absence of infrastructure was',
        body: [
          'Fifty-five episodes and a guest list most shows would envy, distributed across six platforms, none of them owned. No website, no email capture, no indexable surface, and no single URL that was the canonical answer to the brand’s own name.',
          'A rented audience is a real audience right up until the platform changes its mind. Everything in this build exists to convert that into something the show holds itself.',
        ],
      },
      {
        kicker: 'The strategy',
        title: 'Front-loaded before a single layout',
        body: [
          'Business-goal research and a brand audit came first, then a competitor analysis across six established shows, then ICP and persona development for the two audiences that actually pay — sponsors and guests.',
          'The information architecture was built around a three-layer offering hierarchy: the core podcast, bridge content, and the commercial surface. Eight user flows were mapped before layout, so the structure answered real journeys rather than a navigation convention.',
        ],
        points: [
          {
            label: 'Three-layer hierarchy',
            text: 'Core podcast, bridge content and commercial surface — so sponsorship and speaking do not have to interrupt the show to be findable.',
          },
          {
            label: 'Eight user flows, mapped first',
            text: 'Listener, sponsor, guest, event organiser and press each have a path that was designed rather than inherited.',
          },
          {
            label: 'A one-founder content model',
            text: 'Dynamic CMS templates for episodes, guests and show notes, so publishing does not require a developer.',
          },
        ],
      },
      {
        kicker: 'What went live',
        title: 'A canonical home, and the surfaces that make it earn',
        body: [
          'Thirty-one pages at launch: structured show notes and guest metadata so every episode and guest is indexable, a media kit and press kit for sponsors, a newsletter lead magnet for owned-audience capture, and an enquiry funnel that gives sponsorship somewhere to land.',
          'One hundred and twenty-one items were checked against a pre-launch QA list before it went live.',
        ],
        pull:
          'Email capture went from none to one. That sounds trivial written down, and it is the difference between an audience you reach and an audience you own.',
      },
    ],
    proves: [
      {
        title: 'Distribution is not infrastructure',
        text: 'Six platforms and fifty-five episodes still amounted to no owned surface, no capture and nothing indexable. Reach and ownership are different assets.',
      },
      {
        title: 'The architecture has to outlive the launch',
        text: 'Thirty-one pages that scale to five hundred URLs is a content model decision made at the start, not a migration problem inherited at year three.',
      },
      {
        title: 'Build for the person who has to run it',
        text: 'Dynamic templates and structured metadata exist so a single founder can publish without a developer. If it can only be maintained by its builder, it was built wrong.',
      },
    ],
    closing:
      'Fifty-five episodes given a canonical home, thirty-one pages built to scale past five hundred, and an owned audience that no longer depends on a platform’s goodwill.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     07 — PRECAST CONCRETE MANUFACTURER · WEBSITE & IA · UNITED STATES
     ====================================================================== */
  {
    slug: 'precast-manufacturer-website',
    index: '007',
    title: 'Precision manufacturing, given a precise structure',
    subtitle:
      'Two product systems, six stakeholder paths and five application sectors — a complex manufacturer catalogue structured so specifying audiences can actually specify.',
    industry: 'Precast Concrete Manufacturing',
    niche: 'Website & information architecture',
    market: 'United States',
    year: '2026',
    duration: 'Strategy, IA, design and build',
    services: [
      'Website strategy',
      'Information architecture',
      'UI/UX design',
      'Web development',
      'Technical content structuring',
    ],
    summary:
      'The client manufactures precast concrete wall and fence systems across five project types. The difficulty was a complex catalogue serving multiple stakeholder groups — architects, municipal engineers and HOA boards — buying identical products for different reasons and needing technical drawings before committing. That complexity is what usually turns a manufacturer site into a brochure nobody can navigate.',
    cardMetric: { value: '6 paths', label: 'One per stakeholder group' },
    metrics: [
      { value: '2', label: 'Product systems', note: 'each with distinct architecture' },
      { value: '6', label: 'Stakeholder paths', note: 'architects, engineers, HOAs and more' },
      { value: '5', label: 'Application sectors', note: 'for project-based buyers' },
      { value: '4', label: 'Finish taxonomy', note: 'consistent across both systems' },
    ],
    chapters: [
      {
        kicker: 'The problem',
        title: 'Identical products, bought for entirely different reasons',
        body: [
          'An architect, a municipal engineer and an HOA board can all specify the same wall system and arrive needing completely different things to justify it. All of them want technical drawings before they commit.',
          'Structured around the company rather than the purchase, a catalogue like this becomes a brochure: accurate, comprehensive and impossible to buy from.',
        ],
      },
      {
        kicker: 'The structure',
        title: 'Two product systems, two parallel entry routes',
        body: [
          'The site was restructured around the two product systems rather than the company narrative. The wall system and the fence system each received their own architecture, with a consistent four-finish taxonomy — stone, wood, brick and block textures — so options can be compared within a system rather than across a price list.',
          'Two parallel entry routes then run over the top: five application sectors for project-based buyers who think in terms of what they are building, and six stakeholder paths for architects, engineers, land developers, HOAs, public works and general contractors who think in terms of what they need to approve.',
        ],
        points: [
          {
            label: 'System-first architecture',
            text: 'The wall system and the fence system structured separately, so each reads as a product line rather than a catalogue section.',
          },
          {
            label: 'Consistent finish taxonomy',
            text: 'The same four finishes across both systems, which is what makes comparison possible at all.',
          },
          {
            label: 'Two ways in',
            text: 'By sector for project buyers, by role for specifying audiences — the same catalogue reached by whichever logic the visitor already uses.',
          },
        ],
      },
      {
        kicker: 'The decisive call',
        title: 'The CAD and specification library is a section, not a resource page',
        body: [
          'For a specifying audience, the drawing set is the decision point. Burying it under a resources menu treats the most important asset on the site as an afterthought.',
          'It was built as a primary section instead — because the moment an architect can pull the drawing they need, the manufacturer is on the shortlist.',
        ],
        pull:
          'The CAD library is not a resource. For half of these buyers it is the product page.',
      },
    ],
    proves: [
      {
        title: 'Structure around the purchase, not the org chart',
        text: 'Two product systems and two entry routes exist because that is how the catalogue is actually bought — not because it is how the business is organised internally.',
      },
      {
        title: 'Different buyers need different doors to the same product',
        text: 'Sector routes and stakeholder routes reach the same systems by different logic, so nobody has to browse the way somebody else thinks.',
      },
      {
        title: 'Promote the asset that closes the decision',
        text: 'Making the CAD and specification library a primary section rather than a buried resource is an information architecture decision with a direct commercial consequence.',
      },
    ],
    closing:
      'A complex manufacturer catalogue given a precise structure: two systems, one consistent finish taxonomy, five sector routes, six stakeholder paths, and the specification library treated as what it actually is.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     08 — B2B COMMUNICATIONS AGENCY · NEXT.JS & CMS · NEW YORK, USA
     ====================================================================== */
  {
    slug: 'communications-agency-nextjs-website',
    index: '008',
    title: 'A premium digital home for decades of work',
    subtitle:
      'Established client work, specialist expertise and real market history — none of it legible on the legacy site. Rebuilt in Next.js on a structured CMS.',
    industry: 'B2B Marketing & Communications',
    niche: 'Next.js & CMS development',
    market: 'New York, United States',
    year: '2025',
    duration: 'Strategy, IA, design and build',
    services: [
      'Next.js development',
      'Website design',
      'CMS development',
      'Information architecture',
      'UI/UX & CRO',
    ],
    summary:
      'The client is a B2B marketing and communications agency working in healthcare, nutrition and life sciences, and and had decades of client work behind it. The legacy site communicated none of that with clarity, hierarchy or visual confidence: an outdated structure obscured the capabilities, case study storytelling was weak, content and imagery were inconsistent, and the experience did not read as premium on any device.',
    cardMetric: { value: 'Next.js', label: 'Rebuilt on a structured CMS' },
    metrics: [
      { value: 'Next.js', label: 'Custom build', note: 'replacing a legacy site' },
      { value: 'CMS', label: 'Structured content model', note: 'built to keep growing' },
      { value: 'IA', label: 'Rebuilt around user needs', note: 'not the internal org chart' },
      { value: 'CRO', label: 'Hierarchy and journeys planned', note: 'before interface design' },
    ],
    chapters: [
      {
        kicker: 'The problem',
        title: 'The credentials existed. The site did not carry them.',
        body: [
          'Specialist expertise across healthcare, nutrition and life sciences, a long client list, and a site whose structure actively hid all of it. Capabilities were obscured, case studies were told weakly, and content and imagery had drifted out of consistency over years of incremental edits.',
          'For a firm whose entire proposition is clarity of communication, that gap is not cosmetic.',
        ],
      },
      {
        kicker: 'The approach',
        title: 'Strategy before interface',
        body: [
          'Business and content discovery came first, to establish positioning and the real service structure. Information architecture was then rebuilt around user needs and business priorities rather than the shape of the organisation.',
          'A full case study review identified where the storytelling was losing the work, and UX and CRO planning addressed hierarchy, calls to action and journeys before any visual design began. Competitive analysis set the direction for a contemporary premium look.',
        ],
        points: [
          {
            label: 'Service structure, redefined',
            text: 'Discovery established what is actually sold, which is what the navigation was then built to expose.',
          },
          {
            label: 'Case studies, retold',
            text: 'A review of the existing portfolio found the gaps in content and storytelling that were flattening decades of work.',
          },
          {
            label: 'CMS structuring',
            text: 'A content model built so team, client and asset presentation stays consistent as things are added.',
          },
        ],
      },
      {
        kicker: 'The outcome',
        title: 'A business development platform, not a brochure',
        body: [
          'The result is a modern, responsive presence that reflects the expertise positioning, with stronger portfolio presentation, clearer service discovery and a consistent way to present team, clients and assets.',
          'Because the content model is structured rather than hand-built, the foundation scales with future additions instead of degrading with them.',
        ],
        pull:
          'A site that hides decades of work is not a neutral asset. It argues, quietly, against the fee.',
      },
    ],
    proves: [
      {
        title: 'Hierarchy is the deliverable',
        text: 'The expertise was already there. What changed was structure, storytelling and hierarchy — which is what made it legible.',
      },
      {
        title: 'Rebuild the content model, not just the pages',
        text: 'CMS structuring is why consistency survives the next fifty additions rather than eroding with them.',
      },
      {
        title: 'CRO belongs in planning, not in a later optimisation phase',
        text: 'Hierarchy, calls to action and journeys were designed before the interface, not retrofitted onto it.',
      },
    ],
    closing:
      'Decades of specialist work given a structure that finally carries it — a premium, scalable platform built for business development rather than for archiving.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     09 — DISPLAY TECHNOLOGY SUPPLIER · B2B WEBSITE · DOHA, QATAR
     ====================================================================== */
  {
    slug: 'display-technology-b2b-website',
    index: '009',
    title: 'Professional display solutions, made credible',
    subtitle:
      'LED video walls, digital signage and kiosks sold to enterprise and government buyers — a site built to establish credibility first and route qualified enquiries second.',
    industry: 'Display Technology',
    niche: 'B2B website development',
    market: 'Doha, Qatar',
    year: '2025',
    duration: 'Design, build and launch',
    services: [
      'Website design & build',
      'SEO',
      'B2B lead generation',
      'WhatsApp routing',
    ],
    summary:
      'The client supplies, installs and supports LED video walls, digital signage and self-service kiosks across Qatar. The site had to establish credibility with enterprise and government purchasers — audiences that buy on proof and process — and then move qualified enquiries efficiently to a human.',
    cardMetric: { value: '4.9★', label: 'Google rating, surfaced as proof' },
    metrics: [
      { value: '4.9★', label: 'Google rating', note: 'surfaced as on-page proof' },
      { value: '4', label: 'Authorised partners', note: 'global display manufacturers' },
      { value: '2', label: 'Primary actions', note: 'WhatsApp or a detailed quote' },
      { value: 'B2B', label: 'Enterprise & government', note: 'the buyers the site is built for' },
    ],
    chapters: [
      {
        kicker: 'The problem',
        title: 'Enterprise and government buyers do not buy from a brochure',
        body: [
          'These are procurement audiences. Before anyone discusses a video wall, they need to believe the supplier can install it, support it, and still be there in three years.',
          'A site aimed at them has two jobs in order: prove the credibility, then make the enquiry effortless. Doing the second without the first produces enquiries nobody wanted.',
        ],
      },
      {
        kicker: 'The build',
        title: 'Evidence first, then two clear ways to start a conversation',
        body: [
          'The design is dark and engineering-focused, built around actual installations rather than stock imagery, with the logos of four authorised manufacturer partnerships carrying the credential the buyer is checking for.',
          'High-intent visitors are then routed to two primary actions and no more: WhatsApp for the fast answer, or a detailed quote request for the procurement path. Supporting evidence reinforces each stage rather than sitting on a separate credentials page.',
        ],
        points: [
          {
            label: 'Real installations as the imagery',
            text: 'Delivered projects do the work that stock photography cannot for a technical buyer.',
          },
          {
            label: 'Partner credentials in position',
            text: 'Authorised-partner status placed where the doubt is, not archived on an about page.',
          },
          {
            label: 'Two routes, deliberately',
            text: 'WhatsApp or a structured quote request — matched to how fast the buyer needs to move.',
          },
        ],
        pull:
          'Proof placed where the doubt is, rather than collected on a page nobody scrolls to.',
      },
    ],
    proves: [
      {
        title: 'For B2B, credibility is the conversion asset',
        text: 'Partner logos, real installations and a visible rating are not decoration on this site — they are the mechanism.',
      },
      {
        title: 'Fewer routes convert better than more',
        text: 'Two primary actions, matched to two real buying speeds, beats a page of equally weighted contact options.',
      },
      {
        title: 'Design to the buyer, not to the category',
        text: 'A dark, engineering-led treatment reads as competence to a technical procurement audience in a way a bright consumer aesthetic would not.',
      },
    ],
    closing:
      'A B2B storefront for enterprise and government procurement — evidence placed where the doubt is, and two clear routes from interest to a real conversation.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     10 — AI HIRING PLATFORM · LANDING PAGE · SAAS PRODUCT
     ====================================================================== */
  {
    slug: 'ai-hiring-landing-page',
    index: '010',
    title: 'A full platform landing page, live in 24 hours',
    subtitle:
      'An AI hiring platform taken from concept to a live, converting landing page in a single day — because there was nothing left to discover.',
    industry: 'SaaS · AI Hiring',
    niche: 'Landing page development',
    market: 'SaaS · global',
    year: '2026',
    duration: '24 hours, concept to live',
    services: [
      'Product strategy',
      'Landing page development',
      'Conversion copywriting',
      'UI/UX',
    ],
    summary:
      'The product is an AI-powered end-to-end hiring platform — job posting, ATS screening, candidate emails, interview scheduling and offer agreements. The brief was to design and launch its landing page from concept to live in a single day. It worked because we had built the product itself, which removed the discovery phase entirely.',
    cardMetric: { value: '24 hours', label: 'Concept to live' },
    metrics: [
      { value: '24 hrs', label: 'Concept to launch', note: 'design, copy and build' },
      { value: '5', label: 'Hiring stages made visible', note: 'the workflow as the centrepiece' },
      { value: '0', label: 'Discovery sessions', note: 'we had built the product' },
      { value: '1', label: 'Day, end to end', note: 'strategy through deployment' },
    ],
    chapters: [
      {
        kicker: 'Why it was possible',
        title: 'Twenty-four hours is a clarity outcome, not a speed trick',
        body: [
          'The rapid turnaround worked because the product was ours. There was no discovery phase, no stakeholder alignment cycle and no waiting on answers — complete strategic clarity existed before the first block was placed.',
          'AI tooling then accelerated layout scaffolding, component generation, copy refinement and development. That acceleration is only available to a project that already knows exactly what it is saying; applied to an unclear brief it produces the wrong thing faster.',
        ],
        pull:
          'AI made the build faster. Knowing precisely what to build is what made twenty-four hours possible at all.',
      },
      {
        kicker: 'The positioning',
        title: 'Not the AI — the outcome the recruiter is actually chasing',
        body: [
          'The obvious page for an AI hiring platform leads with the AI. This one does not. Positioning was built around the core recruiter goal instead: hiring faster without candidates dropping out along the way.',
          'The five-stage workflow became the visual centrepiece, reflecting the prospect’s own process back at them — so the product is understood as a better version of what they already do rather than as a category they have to learn.',
        ],
      },
      {
        kicker: 'The structure',
        title: 'Objection handling built into the architecture',
        body: [
          'The predictable blocker for a hiring platform is stack compatibility — every recruiter has an ATS and a calendar they are not planning to abandon. That objection was handled architecturally, addressed in the page structure before a prospect had to go looking for the answer.',
          'The result is a page that carries product strategy, conversion copy and UI in one pass, live the same day it was conceived.',
        ],
      },
    ],
    proves: [
      {
        title: 'Speed comes from clarity, not from cutting',
        text: 'Zero discovery sessions is not a shortcut here — it is what having built the product yourself buys you. The day was spent building, because nothing needed deciding.',
      },
      {
        title: 'Sell the outcome, not the technology',
        text: 'Leading with the recruiter goal rather than the AI is why the workflow diagram became the centrepiece instead of a feature grid.',
      },
      {
        title: 'Objections belong in the structure',
        text: 'Stack compatibility was answered by where it sits on the page, not by an FAQ entry hoping to be found.',
      },
    ],
    closing:
      'Concept to a live, positioned, objection-handled landing page in twenty-four hours — with the five-stage workflow doing the selling.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     11 — SPROCKET MANUFACTURER · E-COMMERCE BUILD · INDIA
     ====================================================================== */
  {
    slug: 'sprocket-manufacturer-ecommerce',
    index: '011',
    title: 'From Instagram-only to a working storefront',
    subtitle:
      'A custom sprocket manufacturer selling entirely through Instagram DMs, given a real, scalable store — built in four weeks.',
    industry: 'Custom Sprocket Manufacturing',
    niche: 'E-commerce development',
    market: 'India',
    year: '2022—2023',
    duration: '4 weeks to build',
    services: [
      'E-commerce website development',
      'SEO',
      'Meta Ads',
    ],
    summary:
      'The client manufactures custom sprockets and was running its entire business through Instagram. Every order was a conversation, nothing was searchable, and there was no surface for anyone who was not already following. A fully functional, scalable online store replaced that model in four weeks, with SEO and paid campaigns built around it.',
    cardMetric: { value: '4 weeks', label: 'To a live storefront' },
    metrics: [
      { value: '4 weeks', label: 'To develop the store', note: 'from Instagram-only to live' },
      { value: '₹4L', label: 'Revenue scaled', note: 'through the new storefront' },
      { value: 'SEO', label: 'Organic traffic grown', note: 'alongside paid campaigns' },
      { value: '2', label: 'Demand channels built', note: 'organic search and Meta' },
    ],
    chapters: [
      {
        kicker: 'The problem',
        title: 'A real manufacturing business running on direct messages',
        body: [
          'Selling custom sprockets through Instagram works until it does not. Every order needs a conversation, the catalogue lives in a grid nobody can filter, and none of it is searchable by a buyer who does not already follow the account.',
          'There was demand. There was simply nowhere for demand that had not already found the Instagram page to land.',
        ],
      },
      {
        kicker: 'The build',
        title: 'A scalable store, then the traffic to fill it',
        body: [
          'A fully functional e-commerce store replaced the Instagram-only model in four weeks — a real catalogue, a real checkout and a structure that could grow past the founder’s ability to answer messages.',
          'SEO followed, with content explaining the benefits of custom sprockets so that the organic surface answered the question buyers were actually typing. Targeted Meta campaigns then drove additional traffic and leads against the same catalogue.',
        ],
        points: [
          {
            label: 'A store that scales past DMs',
            text: 'Catalogue, checkout and structure, so order volume stops being capped by reply speed.',
          },
          {
            label: 'Content built for the real query',
            text: 'Explaining custom sprocket benefits, because that is what buyers search before they search a brand.',
          },
          {
            label: 'Paid layered on owned',
            text: 'Meta campaigns pointed at a storefront that could already convert, rather than at a profile.',
          },
        ],
        pull:
          'Every order used to require a conversation. The build removed the founder from the critical path.',
      },
    ],
    proves: [
      {
        title: 'Social reach is not a storefront',
        text: 'A following converts only the people who already found you. A structured, searchable store is what serves the ones who have not.',
      },
      {
        title: 'Build the surface before buying the traffic',
        text: 'SEO and Meta campaigns were pointed at a store that could take an order, which is why the spend had somewhere to convert.',
      },
      {
        title: 'Take the founder off the critical path',
        text: 'The measure of the build was not features. It was that revenue stopped being limited by how fast one person could answer a message.',
      },
    ],
    closing:
      'From an Instagram grid to a working, searchable storefront in four weeks — with organic and paid demand built on top of something that could finally take the order.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     12 — CONNECTORA · SYSTEMS & PRODUCT BUILD · IN-HOUSE
     ====================================================================== */
  {
    slug: 'connectora',
    index: '012',
    title: 'Two outreach tools, built as one',
    subtitle:
      'A complete LinkedIn outreach platform with sequencing — and the email sequencer built into the same product, so a campaign is one system rather than two subscriptions.',
    industry: 'SaaS · Outreach Automation',
    niche: 'Systems, APIs & product build',
    market: 'connectora.growthmak.com',
    year: '2026',
    duration: 'In-house product, in use',
    services: [
      'Custom software development',
      'API design & integration',
      'Sequencing engine',
      'AWS infrastructure',
      'Micro-SaaS platform',
    ],
    summary:
      'Connectora is a complete LinkedIn outreach tool with full sequencing, and it carries the email sequence inside the same product. Teams running multichannel outreach normally buy that as two separate subscriptions — a LinkedIn sequencer and an email sequencer — and then spend their time reconciling the two. This is the two-in-one: one prospect, one sequence, both channels.',
    cardMetric: { value: '2-in-1', label: 'LinkedIn and email in one sequence' },
    metrics: [
      { value: '2', label: 'Channels, one sequence', note: 'LinkedIn and email together' },
      { value: '1', label: 'Platform, not two subscriptions', note: 'built as a single product' },
      { value: 'API', label: 'Integration-first architecture', note: 'endpoints, not exports' },
      { value: 'AWS', label: 'Infrastructure', note: 'built and managed in-house' },
    ],
    chapters: [
      {
        kicker: 'The problem',
        title: 'Multichannel outreach that lives in two products is not multichannel',
        body: [
          'The standard stack for outreach is a LinkedIn sequencer in one tab and an email sequencer in another. Both work. Neither knows what the other did.',
          'That gap is where the actual cost sits: the same prospect gets sequenced twice, a reply on one channel does not stop the other, and reporting has to be reassembled by hand before anyone can tell what worked. Two subscriptions, two sets of limits, and a reconciliation job nobody was hired to do.',
        ],
        pull:
          'A reply on LinkedIn should stop the email. If those live in different products, it does not — and the prospect notices before you do.',
      },
      {
        kicker: 'The build',
        title: 'One prospect, one sequence, both channels',
        body: [
          'Connectora was built as a single outreach platform: full LinkedIn sequencing — connection, follow-up and the steps between them — with the email sequence running inside the same campaign rather than beside it.',
          'Because both channels sit in one product, a sequence is defined once and a prospect has one state across it. That is the whole point of the build, and it is the thing two separate tools structurally cannot do.',
        ],
        points: [
          {
            label: 'LinkedIn sequencing',
            text: 'Complete outreach sequences with the follow-up steps handled by the platform rather than by a person with a calendar reminder.',
          },
          {
            label: 'Email in the same sequence',
            text: 'The email sequencer is part of the campaign, not a second tool holding a second copy of the list.',
          },
          {
            label: 'One source of truth per prospect',
            text: 'A single state per contact across both channels, so activity, replies and stops are consistent by construction.',
          },
        ],
      },
      {
        kicker: 'The systems layer',
        title: 'Integration-first, and running on infrastructure I manage',
        body: [
          'Under the interface this is a systems build: the APIs and endpoints that move prospects and activity between channels, the integration surface that lets it sit alongside the tools a team already pays for, and the AWS infrastructure it runs and scales on.',
          'It is the same brief as any internal tool I build for a client — a workflow that exists, done properly in software — with the difference that this one is our own product, so the roadmap and the operational reality are both mine to own.',
        ],
      },
    ],
    proves: [
      {
        title: 'Consolidation is a product decision, not a feature list',
        text: 'Making LinkedIn and email one sequence is not two tools bolted together. It required a single prospect state at the data layer, which is a decision taken at the start or not at all.',
      },
      {
        title: 'End-to-end means the infrastructure too',
        text: 'APIs, integration surface and AWS are not adjacent to this build — they are the build. The interface is the part you can see.',
      },
      {
        title: 'I run what I ship',
        text: 'This is an in-house product in active use rather than a handover. The operational cost of every architectural shortcut lands on me, which is a useful discipline to carry into client work.',
      },
    ],
    closing:
      'A complete LinkedIn outreach platform with the email sequence built in — one prospect, one sequence, two channels, on infrastructure built and managed end to end.',
    accent: '#c7ff97',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
