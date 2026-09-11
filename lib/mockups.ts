/**
 * LIVE MOCKUPS
 * ---------------------------------------------------------------------------
 * Full front-end builds deployed as working previews. Where a client build
 * sits under NDA, the mockup is the part that can be shown — so these link
 * straight to the live deployment rather than to a write-up.
 *
 * RULE: same as case-studies.ts. Every line below describes what is on the
 * deployed site. No result is claimed for a mockup, because a mockup has not
 * produced one.
 */

export type MockupKind = 'Storefront' | 'Business website' | 'Platform';

export type MockupPage = { label: string; url: string };

export type Mockup = {
  slug: string;
  name: string;
  url: string;
  kind: MockupKind;
  sector: string;
  market: string;
  /** Country only, used for the aggregate count. */
  country: string;
  blurb: string;
  /** Extra routes worth opening directly, beyond the homepage. */
  pages?: MockupPage[];
  /** Shown on the homepage. The full set lives at /mockups. */
  featured?: boolean;
};

export const mockupKinds: { kind: MockupKind; title: string; text: string }[] = [
  {
    kind: 'Storefront',
    title: 'E-commerce storefronts',
    text: 'Catalogue, product, cart and checkout routes — built around how the range is actually shopped rather than around a template.',
  },
  {
    kind: 'Business website',
    title: 'Business & service websites',
    text: 'Service brands, restaurants, consultancies and advisors — structured to be found, and to turn a visit into a call, a booking or a quote.',
  },
  {
    kind: 'Platform',
    title: 'Platforms & marketplaces',
    text: 'Two-sided and community products where the front end has to carry search, listings and live state, not just pages.',
  },
];

export const mockups: Mockup[] = [
  /* ---------------------------------------------------------------------
     E-COMMERCE STOREFRONTS
     --------------------------------------------------------------------- */
  {
    slug: 'dockmann',
    name: 'Dockmann',
    url: 'https://dockmann.vercel.app/',
    kind: 'Storefront',
    sector: 'Promotional merchandise',
    market: 'Austria · DACH',
    country: 'Austria',
    blurb:
      'A German-language catalogue store for branded merchandise — shop by use case, occasion, team, industry and season, with a consultation route for larger orders.',
    featured: true,
  },
  {
    slug: 'routersale',
    name: 'RouterSale',
    url: 'https://router-sale-u184.vercel.app/',
    kind: 'Storefront',
    sector: 'Refurbished networking hardware',
    market: 'Toronto, Canada',
    country: 'Canada',
    blurb:
      'A department-driven store for refurbished Cisco, HP, Juniper and Fortinet hardware — USD and CAD switching, deals, trade-in and a sell-your-gear route.',
    featured: true,
  },
  {
    slug: 'sipped',
    name: 'Sipped',
    url: 'https://sipped.vercel.app/',
    kind: 'Storefront',
    sector: 'Canned cocktails',
    market: 'United Kingdom',
    country: 'United Kingdom',
    blurb:
      'A pre-order launch for bar-quality canned cocktails — a countdown landing page, a full homepage and a product page per flavour, with a reserve-your-pack flow.',
    pages: [
      { label: 'Launch page', url: 'https://sipped.vercel.app/' },
      { label: 'Homepage', url: 'https://sipped.vercel.app/home' },
      { label: 'Product page', url: 'https://sipped.vercel.app/products/passionfruit' },
    ],
    featured: true,
  },
  {
    slug: 'alison-lou',
    name: 'Alison Lou',
    url: 'https://alison-lou-business-website.vercel.app/',
    kind: 'Storefront',
    sector: 'Fine jewellery',
    market: 'New York, United States',
    country: 'United States',
    blurb:
      'Handcrafted solid-gold collections — Paracord, Loucite, Heart and Mommy + Me — with Product and AggregateRating schema carried on the pieces.',
    featured: true,
  },
  {
    slug: 'ruby-and-millie',
    name: 'Ruby & Millie',
    url: 'https://rubyandmillie.vercel.app/',
    kind: 'Storefront',
    sector: 'Clean beauty',
    market: 'New York, United States',
    country: 'United States',
    blurb:
      'Lip Butter Balms from $9 — a flavour page for each, best sellers, a pick-three bundle and the brand story, built as a full storefront.',
    featured: true,
  },
  {
    slug: 'peakspan',
    name: 'Peakspan',
    url: 'https://peakspan.vercel.app/',
    kind: 'Storefront',
    sector: 'Wellness technology',
    market: 'United Arab Emirates',
    country: 'United Arab Emirates',
    blurb:
      'Three recovery technologies — hydrogen water, cold therapy and red light — as a premium product site with Organization and Product schema in place.',
    featured: true,
  },
  {
    slug: 'nutrae-store',
    name: 'Nutrae — DTC store',
    url: 'https://shopnutrae.vercel.app/',
    kind: 'Storefront',
    sector: 'Longevity supplements',
    market: 'United Arab Emirates',
    country: 'United Arab Emirates',
    blurb:
      'The direct-to-consumer store for Geroprotect — shop, science and journal, with UAE delivery thresholds and third-party testing stated at the top of every page.',
  },
  {
    slug: 'love-henri',
    name: 'Love Henri',
    url: 'https://lovehenri.vercel.app/',
    kind: 'Storefront',
    sector: 'Aromatherapy',
    market: 'United Kingdom',
    country: 'United Kingdom',
    blurb:
      'Bath and treatment oils blended by a practising aromatherapist — the collection, the ritual, gifting and shop, written in the founder’s own voice.',
  },
  {
    slug: 'nectar',
    name: 'Nectar',
    url: 'https://nectarsleep-seven.vercel.app/',
    kind: 'Storefront',
    sector: 'Mattresses',
    market: 'United States',
    country: 'United States',
    blurb:
      'A DTC mattress store — offer bar, working cart, how-it’s-built, reviews and the 365-night trial as the spine of the conversion path.',
  },
  {
    slug: 'ottoman-inspirations',
    name: 'Ottoman Inspirations',
    url: 'https://ottomaninspirations.vercel.app/',
    kind: 'Storefront',
    sector: 'Turkish coffee grinders',
    market: 'Istanbul · ships to US',
    country: 'Türkiye',
    blurb:
      'Hand-forged brass grinders from a five-generation Istanbul workshop — the grinders, the heritage, a grind guide and a journal.',
  },
  {
    slug: 'palm-beach-jewelers',
    name: 'Palm Beach Jewelers',
    url: 'https://palmbeachjewelers.vercel.app/',
    kind: 'Storefront',
    sector: 'Fine jewellery',
    market: 'Palm Beach, United States',
    country: 'United States',
    blurb:
      'A deep-catalogue jeweller — rings, earrings, necklaces, bracelets and religious pieces, each department carrying its own multi-level category menu.',
  },
  {
    slug: 'lumi-glow-pro',
    name: 'LumiGlowPro',
    url: 'https://lumi-glow-pro.vercel.app/',
    kind: 'Storefront',
    sector: 'LED & red light therapy',
    market: 'United States',
    country: 'United States',
    blurb:
      'At-home LED devices sold as a three-step system — the system, how light works, FAQ and cart, with shipping, returns and warranty stated up front.',
  },

  /* ---------------------------------------------------------------------
     BUSINESS & SERVICE WEBSITES
     --------------------------------------------------------------------- */
  {
    slug: 'khushis',
    name: 'Khushi’s',
    url: 'https://khushi-s-flame.vercel.app/',
    kind: 'Business website',
    sector: 'Restaurant',
    market: 'Edinburgh, Scotland',
    country: 'United Kingdom',
    blurb:
      'Scotland’s oldest Indian restaurant, family-run since 1947 — menu, reservations and the Old Town story, with Restaurant schema wired in.',
    featured: true,
  },
  {
    slug: 'london-heritage',
    name: 'London Heritage',
    url: 'https://london-heritage-tau.vercel.app/',
    kind: 'Business website',
    sector: 'Heritage painting & restoration',
    market: 'London, United Kingdom',
    country: 'United Kingdom',
    blurb:
      'Period-home restoration — sash windows, brick, lime plaster and paint — with a free-survey booking route and local-business schema behind it.',
    featured: true,
  },
  {
    slug: 'retire-care-usa',
    name: 'RetireCareUSA',
    url: 'https://retire-care-usa.vercel.app/',
    kind: 'Business website',
    sector: 'Retirement income & long-term care',
    market: 'Georgia, United States',
    country: 'United States',
    blurb:
      'Guaranteed-income and long-term-care funding from one licensed advisor — services, how it works and a free-review booking, with a page per service.',
    pages: [
      { label: 'Homepage', url: 'https://retire-care-usa.vercel.app/' },
      {
        label: 'Service page',
        url: 'https://retire-care-usa.vercel.app/services/guaranteed-lifetime-income',
      },
    ],
    featured: true,
  },
  {
    slug: 'ravac-development',
    name: 'RAVAC Development',
    url: 'https://ravacdevelopmentltd.vercel.app/',
    kind: 'Business website',
    sector: 'Construction & property consultancy',
    market: 'Birmingham, United Kingdom',
    country: 'United Kingdom',
    blurb:
      'A founder-led consultancy guiding UK and Nigerian clients through UK residential property — services, properties and a start-your-project route.',
  },
  {
    slug: 'yuri-buzzi',
    name: 'Yuri Buzzi',
    url: 'https://yuri-buzzi.vercel.app/',
    kind: 'Business website',
    sector: 'Executive-presence coaching',
    market: 'London, United Kingdom',
    country: 'United Kingdom',
    blurb:
      'A working actor and ICF-accredited communication coach — coaching offers, a journal and a free-call booking, built around three leader profiles.',
  },
  {
    slug: 'nutrae-corporate',
    name: 'Nutrae — corporate',
    url: 'https://nutrae.vercel.app/',
    kind: 'Business website',
    sector: 'B2B sourcing & market access',
    market: 'Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    blurb:
      'The B2B side of the same brand — factory-to-market sourcing and UAE launch partnership for health brands, with a partner-with-us route and WhatsApp contact.',
  },
  {
    slug: 'the-glassmobile',
    name: 'The Glassmobile',
    url: 'https://theglassmobile.vercel.app/',
    kind: 'Business website',
    sector: 'Mobile auto glass',
    market: 'Ottawa, Canada',
    country: 'Canada',
    blurb:
      'Mobile windshield replacement — live opening hours, insurance billed direct, ADAS calibration, warranty and a free-quote route from every section.',
  },

  /* ---------------------------------------------------------------------
     PLATFORMS & MARKETPLACES
     --------------------------------------------------------------------- */
  {
    slug: 'united-pets',
    name: 'UnitedPets',
    url: 'https://unitedpetsuk.vercel.app/',
    kind: 'Platform',
    sector: 'Pet marketplace',
    market: 'United Kingdom',
    country: 'United Kingdom',
    blurb:
      'A two-sided marketplace — search by pet type and location, verified-breeder listings, deposit protection and a post-an-ad flow.',
    featured: true,
  },
  {
    slug: 'all-india-chat',
    name: 'AllIndiaChat',
    url: 'https://allindiachat-website.vercel.app/',
    kind: 'Platform',
    sector: 'Community chat',
    market: 'India',
    country: 'India',
    blurb:
      'Free state-by-state chat rooms — live room counts, how it works, safety and topic pages, and an enter-chat flow with no sign-up.',
  },
];

export const featuredMockups = mockups.filter((m) => m.featured);

export const mockupCountries = Array.from(new Set(mockups.map((m) => m.country)));

export function mockupsByKind(kind: MockupKind) {
  return mockups.filter((m) => m.kind === kind);
}
