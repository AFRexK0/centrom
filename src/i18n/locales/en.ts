import type { Translations } from '../types'

export const en: Translations = {
  meta: {
    title: 'Centrom — digital products studio',
    description:
      'Centrom — digital products studio. Software, WordPress, Shopify, hosting, and finished builds for mid-market businesses.',
  },
  nav: {
    aria: 'Primary',
    services: 'Services',
    pricing: 'Pricing',
    contact: 'Contact',
    status: 'desk online',
    langSelect: 'Language',
  },
  hero: {
    label: '// digital products studio',
    h1: 'Software, storefronts, and hosting — finished or brokered.',
    p: 'We build and ship for businesses that need something real online: custom software, WordPress, Shopify, and dependable hosting in the mid range — no theater, just working systems.',
    ctaBrief: 'Start a brief',
    ctaPricing: 'See pricing',
    terminalUptime: 'studio load: low · queue: open',
    terminalWhoami: 'centrom · multi-desk · eu',
  },
  intro: {
    label: '01 / signal',
    h2: 'A quiet studio with a loud stack.',
    p: 'Centrom sits between craft and commerce. We design, build, and host — and when the right piece already exists, we source it. Buyers are usually businesses; the budget is mid-market; the tone is practical.',
    statWp: 'WordPress builds',
    statShop: 'Shopify themes',
    statHost: 'uptime & care',
  },
  services: {
    label: '02 / catalog',
    h2: 'What leaves the desk.',
    p: 'Five lanes. Same standard: clear scope, mid-range pricing, and something you can put in front of customers.',
    items: [
      {
        title: 'Custom software',
        copy: 'Internal tools, customer portals, APIs, and product shells — scoped for mid-market teams that need clarity over ceremony.',
        tag: 'build',
      },
      {
        title: 'WordPress sites',
        copy: 'Editorial sites, brochure systems, and CMS setups that editors can actually run without calling us every Tuesday.',
        tag: 'wp',
      },
      {
        title: 'Shopify storefronts',
        copy: 'Theme work, checkout flow polish, and catalog structure for shops that need to sell — not just look busy.',
        tag: 'shopify',
      },
      {
        title: 'Finished products',
        copy: 'Ready-to-run packages when you want speed: sites, scripts, and kits we have already proven on other desks.',
        tag: 'ready',
      },
      {
        title: 'Hosting & brokerage',
        copy: 'We host what we ship, and we sit in the middle when you need domains, servers, or vendors lined up cleanly.',
        tag: 'host',
      },
    ],
  },
  capabilities: {
    label: '04 / modules',
    h2: 'Things we keep on the rack.',
    p: 'Not every engagement is a blank page. These are the modules the studio runs again and again.',
    items: [
      {
        chip: 'SYS.01',
        title: 'Product shells',
        copy: 'Auth, dashboards, CRUD, and the boring glue that makes a business feel modern.',
      },
      {
        chip: 'SYS.02',
        title: 'Storefront UX',
        copy: 'Catalog clarity, mobile checkout paths, and theme work that respects conversion.',
      },
      {
        chip: 'SYS.03',
        title: 'CMS discipline',
        copy: 'WordPress structured so content teams stop inventing new chaos every quarter.',
      },
      {
        chip: 'SYS.04',
        title: 'Hosting care',
        copy: 'Backups, SSL, updates, and a human when something beeps at 2am.',
      },
      {
        chip: 'SYS.05',
        title: 'Vendor middle',
        copy: 'We broker domains, licenses, and infrastructure so you talk to one desk.',
      },
      {
        chip: 'SYS.06',
        title: 'Handoff kits',
        copy: 'Docs, admin access, and training notes — shipped like the product matters.',
      },
    ],
  },
  process: {
    label: '05 / protocol',
    h2: 'How the desks move.',
    p: 'Four beats. Enough structure to trust, not enough ceremony to slow a mid-market launch.',
    steps: [
      {
        title: 'Brief',
        copy: 'You tell us what has to exist. We translate it into scope, lane, and budget band.',
      },
      {
        title: 'Build',
        copy: 'Design and engineering share one timeline. You get checkpoints, not mystery weeks.',
      },
      {
        title: 'Ship',
        copy: 'Launch, hosting, and the boring ops that keep the thing alive after the applause.',
      },
      {
        title: 'Steady',
        copy: 'Retainers, updates, or a clean handoff — whichever keeps your business moving.',
      },
    ],
  },
  pricing: {
    label: '06 / ledger',
    h2: 'Clear bands, no guesswork.',
    p: 'Accessible starting points — not a menu of tricks. Exact quotes follow a short brief. Finished packages and brokerage sit in the same bands.',
    from: 'from',
    perMonth: '/ month',
    requestQuote: 'Request quote',
    note: '// larger systems and multi-property rollouts quoted separately · EU VAT where applicable',
    tiers: [
      {
        tier: 'Boot',
        title: 'Landing / brochure',
        amount: '€1.2k',
        points: [
          'Single-page or small WP site',
          'Mobile-first layout',
          'Basic SEO + analytics',
          '2 revision rounds',
        ],
      },
      {
        tier: 'Runtime',
        title: 'Store or software',
        amount: '€3.2k',
        points: [
          'Shopify theme or custom tool',
          'Integrations & content model',
          'Staging + launch support',
          '30 days post-ship care',
        ],
      },
      {
        tier: 'Uptime',
        title: 'Host & retain',
        amount: '€59',
        points: [
          'Managed hosting & SSL',
          'Backups + updates',
          'Priority ticket lane',
          'Brokered add-ons as needed',
        ],
      },
    ],
  },
  contact: {
    label: '07 / ping',
    h2: 'Send the brief.',
    p: 'Tell us what you sell, what needs to exist online, and the budget band. We reply from the same desk that ships the work.',
    name: 'Name',
    email: 'Email',
    lane: 'Lane',
    brief: 'Brief',
    placeholder: 'What needs to exist, and by when?',
    transmit: 'Transmit',
    statusOpening: 'opening mail client...',
    mailSubject: 'Centrom brief —',
    mailGeneral: 'general',
    channel: 'channel',
    sideP:
      'Prefer a domain that ages well? We aim for centrom.studio / centrom.com — not another mid-2010s .io relic.',
    responseWindow: 'Response window',
    responseValue: 'usually within 1 business day',
    timezone: 'Timezone',
    timezoneValue: 'CET / CEST · remote-first desks',
    engagements: 'Engagements',
    engagementsValue: 'project · retainer · brokered stack',
    lanes: {
      software: 'Custom software',
      wordpress: 'WordPress',
      shopify: 'Shopify',
      hosting: 'Hosting / brokerage',
      finished: 'Finished product',
    },
  },
  footer: {
    domains: 'centrom.studio · centrom.com',
    copyright: '© {year} Centrom · all systems nominal',
  },
}
