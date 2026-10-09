import type { Translations } from '../types'

export const en: Translations = {
  meta: {
    title: 'Centrom · digital products studio',
    description:
      'Centrom · digital products studio. Websites, WordPress, Shopify, hosting, and custom software for small and mid-sized businesses.',
  },
  nav: {
    aria: 'Primary',
    services: 'Services',
    pricing: 'Pricing',
    contact: 'Contact',
    status: 'online',
    langSelect: 'Language',
  },
  hero: {
    label: '// digital products studio',
    h1: 'Websites, online shops, and software. Built and hosted by one team.',
    p: 'We build websites, online shops, and custom software for businesses, and we host everything too. One team, one point of contact.',
    ctaBrief: 'Start a brief',
    ctaPricing: 'See pricing',
    terminalUptime: 'studio load: low · queue: open',
    terminalWhoami: 'centrom · multi-desk · eu',
  },
  intro: {
    label: '01 / signal',
    h2: 'A small studio that gets the work done.',
    p: "Centrom is a small studio. We design, build, and host websites and software. If something already exists that fits your needs, we'll point you to it instead of building it again. Most of our clients are small and mid-sized businesses.",
    statWp: 'WordPress builds',
    statShop: 'Shopify themes',
    statHost: 'uptime & care',
  },
  services: {
    label: '02 / catalog',
    h2: 'What we do.',
    p: 'Five things we do, all with the same approach: clear scope, fair prices, and something you can actually show your customers.',
    items: [
      {
        title: 'Custom software',
        copy: 'Internal tools, customer portals, APIs, and app prototypes. Built for teams that want something that works, without a long, drawn-out process.',
        tag: 'build',
      },
      {
        title: 'WordPress sites',
        copy: 'Company sites and blogs set up so your team can edit them on their own, without calling us every week.',
        tag: 'wp',
      },
      {
        title: 'Shopify storefronts',
        copy: 'Theme work, checkout improvements, and catalog setup for shops that want to sell more.',
        tag: 'shopify',
      },
      {
        title: 'Finished products',
        copy: "Ready-made sites, scripts, and kits we've already used on other projects. Faster and cheaper than starting from scratch.",
        tag: 'ready',
      },
      {
        title: 'Hosting & brokerage',
        copy: 'We host what we build. If you need domains, servers, or other vendors sorted out, we can handle that too.',
        tag: 'host',
      },
    ],
  },
  capabilities: {
    label: '04 / modules',
    h2: 'What we reuse.',
    p: 'Not every project starts from zero. These are the parts we use again and again.',
    items: [
      {
        chip: 'SYS.01',
        title: 'Product shells',
        copy: 'Login, dashboards, forms, and the basic plumbing most business software needs.',
      },
      {
        chip: 'SYS.02',
        title: 'Storefront UX',
        copy: 'Clear catalogs, easy mobile checkout, and themes built to turn visitors into customers.',
      },
      {
        chip: 'SYS.03',
        title: 'CMS setup',
        copy: 'WordPress organized in a clean, simple structure so your content stays tidy as it grows.',
      },
      {
        chip: 'SYS.04',
        title: 'Hosting care',
        copy: 'Backups, SSL, updates, and a real person to call when something breaks at 2am.',
      },
      {
        chip: 'SYS.05',
        title: 'Vendor management',
        copy: 'We handle domains, licenses, and infrastructure, so you only deal with us.',
      },
      {
        chip: 'SYS.06',
        title: 'Handoff kits',
        copy: 'Docs, admin access, and short training notes when we hand everything over.',
      },
    ],
  },
  process: {
    label: '05 / protocol',
    h2: 'How it works.',
    p: 'Four steps. Enough structure to keep things on track, without slowing your launch down.',
    steps: [
      {
        title: 'Brief',
        copy: 'You tell us what you need. We put together a detailed plan with scope, timeline, and budget.',
      },
      {
        title: 'Build',
        copy: 'We build it, and you can check in on the progress along the way.',
      },
      {
        title: 'Ship',
        copy: 'We launch it and set everything up the way you want.',
      },
      {
        title: 'Maintain',
        copy: "Need to change something later? Just get in touch and we'll sort it out.",
      },
    ],
  },
  pricing: {
    label: '06 / ledger',
    h2: 'Our products',
    p: 'Simple starting prices. The exact cost is settled after a short meeting.',
    from: 'from',
    perMonth: '/ month',
    requestQuote: 'Request quote',
    note: '// larger projects quoted separately · EU VAT where applicable',
    tiers: [
      {
        tier: 'For Everyone',
        title: 'Landing / brochure',
        amount: '1000 CHF',
        points: [
          'Domain included*',
          'Landing page',
          'Responsive layout',
          'Basic SEO + analytics',
          'Email service included',
        ],
      },
      {
        tier: 'For Businesses',
        title: 'Store or software',
        amount: '2400 CHF',
        points: [
          'Domain included*',
          'Multi-page setup',
          'Up to 500 products* (store)',
          'Responsive layout',
          'Full SEO + analytics',
          'Email service included',
        ],
      },
      {
        tier: 'Advice & Consulting',
        title: 'Technical advice',
        amount: '100 CHF / hour',
        points: [
          'Review of your current site or setup',
          'Tech stack and tool recommendations',
          'Roadmap and cost estimate',
          'Written summary after each session',
          'Available in English and German',
        ],
      },
    ],
  },
  contact: {
    label: '07 / ping',
    h2: 'Tell us about your project.',
    p: "Tell us what you need online and we'll make it happen. You'll hear back from the same people who do the work.",
    name: 'Name',
    email: 'Email',
    lane: 'Product',
    brief: 'Brief',
    placeholder: 'What do you need, and by when?',
    transmit: 'Send',
    statusOpening: 'opening mail client...',
    mailSubject: 'Centrom brief',
    mailGeneral: 'general',
    channel: 'channel',
    sideP:
      "Want a website that still looks good in five years? You're in the right place.",
    responseWindow: 'Response window',
    responseValue: 'usually within 1 business day',
    lanes: {
      software: 'Custom software',
      wordpress: 'WordPress',
      shopify: 'Shopify',
      hosting: 'Hosting / brokerage',
      finished: 'Finished product',
    },
  },
  footer: {
    domains: 'centrom.ch',
    copyright: '© {year} Centrom · all systems nominal',
  },
}
