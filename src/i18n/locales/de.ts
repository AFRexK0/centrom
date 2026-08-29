import type { Translations } from '../types'

export const de: Translations = {
  meta: {
    title: 'Centrom — Digitalprodukt-Studio',
    description:
      'Centrom — Digitalprodukt-Studio. Software, WordPress, Shopify, Hosting und fertige Lösungen für den Mittelstand.',
  },
  nav: {
    aria: 'Hauptnavigation',
    services: 'Leistungen',
    pricing: 'Preise',
    contact: 'Kontakt',
    status: 'desk online',
    langSelect: 'Sprache',
  },
  hero: {
    label: '// digitalprodukt-studio',
    h1: 'Software, Shops und Hosting — geliefert oder vermittelt.',
    p: 'Wir bauen und liefern für Unternehmen, die online etwas Echtes brauchen: individuelle Software, WordPress, Shopify und zuverlässiges Hosting — keine Show, sondern Systeme, die laufen.',
    ctaBrief: 'Brief starten',
    ctaPricing: 'Preise ansehen',
    terminalUptime: 'studio load: niedrig · queue: offen',
    terminalWhoami: 'centrom · multi-desk · eu',
  },
  intro: {
    label: '01 / signal',
    h2: 'Ein ruhiges Studio mit lauter Stack.',
    p: 'Centrom sitzt zwischen Handwerk und Handel. Wir designen, bauen und hosten — und wenn das richtige Stück schon existiert, beschaffen wir es. Käufer sind meist Unternehmen; Budget Mittelstand; Ton pragmatisch.',
    statWp: 'WordPress-Projekte',
    statShop: 'Shopify-Themes',
    statHost: 'Uptime & Betreuung',
  },
  services: {
    label: '02 / katalog',
    h2: 'Was den Desk verlässt.',
    p: 'Fünf Spuren. Gleicher Standard: klarer Scope, faire Preise und etwas, das Sie Kunden zeigen können.',
    items: [
      {
        title: 'Individuelle Software',
        copy: 'Interne Tools, Kundenportale, APIs und Produkt-Hüllen — für Teams, die Klarheit statt Zeremonie wollen.',
        tag: 'build',
      },
      {
        title: 'WordPress-Seiten',
        copy: 'Redaktionsseiten, Broschüren und CMS-Setups, die Redakteure ohne wöchentlichen Support-Anruf betreiben.',
        tag: 'wp',
      },
      {
        title: 'Shopify-Shops',
        copy: 'Theme-Arbeit, Checkout-Feinschliff und Katalogstruktur für Shops, die verkaufen müssen — nicht nur aktiv wirken.',
        tag: 'shopify',
      },
      {
        title: 'Fertige Produkte',
        copy: 'Sofort einsetzbare Pakete für Tempo: Sites, Skripte und Kits, die wir schon auf anderen Desks bewährt haben.',
        tag: 'ready',
      },
      {
        title: 'Hosting & Vermittlung',
        copy: 'Wir hosten, was wir liefern, und sitzen dazwischen bei Domains, Servern oder Anbietern.',
        tag: 'host',
      },
    ],
  },
  capabilities: {
    label: '04 / module',
    h2: 'Was wir griffbereit halten.',
    p: 'Nicht jedes Projekt ist eine leere Seite. Diese Module laufen im Studio immer wieder.',
    items: [
      {
        chip: 'SYS.01',
        title: 'Produkt-Hüllen',
        copy: 'Auth, Dashboards, CRUD und die unsichtbare Kleber-Logik, die modern wirkt.',
      },
      {
        chip: 'SYS.02',
        title: 'Shop-UX',
        copy: 'Katalog-Klarheit, mobiler Checkout und Themes mit Conversion-Fokus.',
      },
      {
        chip: 'SYS.03',
        title: 'CMS-Disziplin',
        copy: 'WordPress strukturiert, damit Content-Teams kein neues Chaos pro Quartal erfinden.',
      },
      {
        chip: 'SYS.04',
        title: 'Hosting-Betreuung',
        copy: 'Backups, SSL, Updates und ein Mensch, wenn um 2 Uhr etwas piept.',
      },
      {
        chip: 'SYS.05',
        title: 'Anbieter-Mitte',
        copy: 'Wir vermitteln Domains, Lizenzen und Infrastruktur — ein Ansprechpartner.',
      },
      {
        chip: 'SYS.06',
        title: 'Übergabe-Kits',
        copy: 'Docs, Admin-Zugang und Schulungsnotizen — geliefert, als ob das Produkt zählt.',
      },
    ],
  },
  process: {
    label: '05 / protokoll',
    h2: 'Wie die Desks arbeiten.',
    p: 'Vier Schritte. Genug Struktur zum Vertrauen, nicht genug Zeremonie für einen langsamen Launch.',
    steps: [
      {
        title: 'Brief',
        copy: 'Sie sagen, was existieren muss. Wir übersetzen in Scope, Spur und Budgetband.',
      },
      {
        title: 'Build',
        copy: 'Design und Entwicklung teilen eine Timeline. Checkpoints statt Mystery-Wochen.',
      },
      {
        title: 'Ship',
        copy: 'Launch, Hosting und die langweilige Ops, die danach am Leben hält.',
      },
      {
        title: 'Steady',
        copy: 'Retainer, Updates oder saubere Übergabe — was Ihr Business weiterbringt.',
      },
    ],
  },
  pricing: {
    label: '06 / preise',
    h2: 'Klare Bänder, kein Rätselraten.',
    p: 'Zugängliche Startpunkte — kein Trick-Menü. Exaktes Angebot nach kurzem Brief. Fertigpakete und Vermittlung in denselben Bändern.',
    from: 'ab',
    perMonth: '/ Monat',
    requestQuote: 'Angebot anfragen',
    note: '// größere Systeme und Multi-Property-Rollouts separat · EU-MwSt. wo anwendbar',
    tiers: [
      {
        tier: 'Boot',
        title: 'Landing / Broschüre',
        amount: '€1.2k',
        points: [
          'One-Pager oder kleine WP-Site',
          'Mobile-first Layout',
          'Basis-SEO + Analytics',
          '2 Revisionsrunden',
        ],
      },
      {
        tier: 'Runtime',
        title: 'Shop oder Software',
        amount: '€3.2k',
        points: [
          'Shopify-Theme oder Custom-Tool',
          'Integrationen & Content-Modell',
          'Staging + Launch-Support',
          '30 Tage Betreuung nach Go-live',
        ],
      },
      {
        tier: 'Uptime',
        title: 'Host & Retainer',
        amount: '€59',
        points: [
          'Managed Hosting & SSL',
          'Backups + Updates',
          'Prioritäts-Ticket-Spur',
          'Vermittelte Add-ons bei Bedarf',
        ],
      },
    ],
  },
  contact: {
    label: '07 / ping',
    h2: 'Brief senden.',
    p: 'Sagen Sie, was Sie verkaufen, was online existieren muss und Ihr Budgetband. Wir antworten vom selben Desk, der liefert.',
    name: 'Name',
    email: 'E-Mail',
    lane: 'Spur',
    brief: 'Brief',
    placeholder: 'Was soll existieren, und bis wann?',
    transmit: 'Senden',
    statusOpening: 'Mail-Client wird geöffnet...',
    mailSubject: 'Centrom Brief —',
    mailGeneral: 'allgemein',
    channel: 'kanal',
    sideP:
      'Eine Domain, die altert? Wir zielen auf centrom.studio / centrom.com — kein weiteres .io-Relikt aus den 2010ern.',
    responseWindow: 'Antwortzeit',
    responseValue: 'meist innerhalb eines Werktags',
    timezone: 'Zeitzone',
    timezoneValue: 'CET / CEST · remote-first Desks',
    engagements: 'Engagements',
    engagementsValue: 'Projekt · Retainer · vermittelter Stack',
    lanes: {
      software: 'Individuelle Software',
      wordpress: 'WordPress',
      shopify: 'Shopify',
      hosting: 'Hosting / Vermittlung',
      finished: 'Fertiges Produkt',
    },
  },
  footer: {
    domains: 'centrom.studio · centrom.com',
    copyright: '© {year} Centrom · alle Systeme nominal',
  },
}
