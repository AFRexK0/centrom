import type { Translations } from '../types'

export const de: Translations = {
  meta: {
    title: 'Centrom · Studio für digitale Produkte',
    description:
      'Centrom · Studio für digitale Produkte. Websites, WordPress, Shopify, Hosting und individuelle Software für kleine und mittlere Unternehmen.',
  },
  nav: {
    aria: 'Hauptnavigation',
    services: 'Leistungen',
    pricing: 'Preise',
    contact: 'Kontakt',
    status: 'online',
    langSelect: 'Sprache',
  },
  hero: {
    label: '// Studio für digitale Produkte',
    h1: 'Websites, Onlineshops und Software. Gebaut und gehostet von einem Team.',
    p: 'Wir bauen Websites, Onlineshops und individuelle Software für Unternehmen und hosten alles auch gleich selbst. Ein Team, ein Ansprechpartner.',
    ctaBrief: 'Briefing starten',
    ctaPricing: 'Preise ansehen',
    terminalUptime: 'Auslastung: niedrig · Warteschlange: offen',
    terminalWhoami: 'centrom · multi-desk · eu',
  },
  intro: {
    label: '01 / signal',
    h2: 'Ein kleines Studio, das die Arbeit erledigt.',
    p: 'Centrom ist ein kleines Studio. Wir gestalten, bauen und hosten Websites und Software. Wenn es bereits etwas gibt, das zu Ihren Anforderungen passt, verweisen wir Sie darauf, statt es neu zu bauen. Die meisten unserer Kunden sind kleine und mittlere Unternehmen.',
    statWp: 'WordPress-Projekte',
    statShop: 'Shopify-Themes',
    statHost: 'Verfügbarkeit & Betreuung',
  },
  services: {
    label: '02 / katalog',
    h2: 'Was wir machen.',
    p: 'Fünf Angebote, immer nach demselben Prinzip: klarer Umfang, faire Preise und etwas, das Sie Ihren Kunden wirklich zeigen können.',
    items: [
      {
        title: 'Individuelle Software',
        copy: 'Interne Tools, Kundenportale, APIs und App-Prototypen. Für Teams, die etwas wollen, das funktioniert, ohne langen Umweg.',
        tag: 'build',
      },
      {
        title: 'WordPress-Websites',
        copy: 'Firmenwebsites und Blogs, die Ihr Team selbst pflegen kann, ohne uns jede Woche anzurufen.',
        tag: 'wp',
      },
      {
        title: 'Shopify-Shops',
        copy: 'Theme-Anpassungen, ein besserer Checkout und ein sauberer Katalog für Shops, die mehr verkaufen wollen.',
        tag: 'shopify',
      },
      {
        title: 'Fertige Produkte',
        copy: 'Fertige Websites, Skripte und Kits, die wir schon in anderen Projekten eingesetzt haben. Schneller und günstiger als bei null anzufangen.',
        tag: 'ready',
      },
      {
        title: 'Hosting & Vermittlung',
        copy: 'Wir hosten, was wir bauen. Wenn Sie Domains, Server oder andere Anbieter brauchen, kümmern wir uns auch darum.',
        tag: 'host',
      },
    ],
  },
  capabilities: {
    label: '04 / module',
    h2: 'Was wir wiederverwenden.',
    p: 'Nicht jedes Projekt beginnt bei null. Diese Bausteine setzen wir immer wieder ein.',
    items: [
      {
        chip: 'SYS.01',
        title: 'Produktgerüste',
        copy: 'Login, Dashboards, Formulare und die Grundlagen, die die meiste Business-Software braucht.',
      },
      {
        chip: 'SYS.02',
        title: 'Shop-UX',
        copy: 'Übersichtliche Kataloge, einfacher Checkout auf dem Handy und Themes, die Besucher zu Kunden machen.',
      },
      {
        chip: 'SYS.03',
        title: 'CMS-Setup',
        copy: 'WordPress in einer sauberen, einfachen Struktur, damit Ihre Inhalte auch beim Wachsen ordentlich bleiben.',
      },
      {
        chip: 'SYS.04',
        title: 'Hosting-Betreuung',
        copy: 'Backups, SSL, Updates und eine echte Person, die Sie anrufen können, wenn nachts um 2 etwas ausfällt.',
      },
      {
        chip: 'SYS.05',
        title: 'Anbieter-Management',
        copy: 'Wir kümmern uns um Domains, Lizenzen und Infrastruktur, damit Sie nur mit uns zu tun haben.',
      },
      {
        chip: 'SYS.06',
        title: 'Übergabe-Kits',
        copy: 'Dokumentation, Admin-Zugang und kurze Schulungsnotizen bei der Übergabe.',
      },
    ],
  },
  process: {
    label: '05 / ablauf',
    h2: 'So läuft es ab.',
    p: 'Vier Schritte. Genug Struktur, um den Überblick zu behalten, ohne Ihren Launch auszubremsen.',
    steps: [
      {
        title: 'Briefing',
        copy: 'Sie sagen uns, was Sie brauchen. Wir erstellen einen detaillierten Plan mit Umfang, Zeitplan und Budget.',
      },
      {
        title: 'Umsetzung',
        copy: 'Wir bauen es, und Sie können jederzeit den aktuellen Stand ansehen.',
      },
      {
        title: 'Launch',
        copy: 'Wir gehen live und richten alles so ein, wie Sie es möchten.',
      },
      {
        title: 'Betreuung',
        copy: 'Später etwas ändern? Melden Sie sich einfach bei uns, wir finden eine Lösung.',
      },
    ],
  },
  pricing: {
    label: '06 / preise',
    h2: 'Unsere Produkte',
    p: 'Einfache Startpreise. Die genauen Kosten legen wir nach einem kurzen Gespräch fest.',
    from: 'ab',
    perMonth: '/ Monat',
    requestQuote: 'Offerte anfragen',
    note: '// grössere Projekte separat offeriert · EU-MwSt. falls zutreffend',
    tiers: [
      {
        tier: 'Für alle',
        title: 'Landingpage / Visitenkarte',
        amount: '1000 CHF',
        points: [
          'Domain inklusive*',
          'Landingpage',
          'Responsives Layout',
          'Grundlegendes SEO + Analytics',
          'E-Mail-Dienst inklusive',
        ],
      },
      {
        tier: 'Für Unternehmen',
        title: 'Shop oder Software',
        amount: '2400 CHF',
        points: [
          'Domain inklusive*',
          'Mehrseitiger Aufbau',
          'Bis zu 500 Produkte* (Shop)',
          'Responsives Layout',
          'Umfassendes SEO + Analytics',
          'E-Mail-Dienst inklusive',
        ],
      },
      {
        tier: 'Beratung',
        title: 'Technische Beratung',
        amount: '100 CHF / Stunde',
        points: [
          'Prüfung Ihrer aktuellen Website oder Ihres Setups',
          'Empfehlungen zu Tech-Stack und Tools',
          'Roadmap und Kostenschätzung',
          'Schriftliche Zusammenfassung nach jeder Sitzung',
          'Auf Deutsch und Englisch',
        ],
      },
    ],
  },
  contact: {
    label: '07 / ping',
    h2: 'Erzählen Sie uns von Ihrem Projekt.',
    p: 'Sagen Sie uns, was Sie online brauchen, und wir setzen es um. Sie hören von denselben Leuten, die auch die Arbeit machen.',
    name: 'Name',
    email: 'E-Mail',
    lane: 'Produkt',
    brief: 'Briefing',
    placeholder: 'Was brauchen Sie, und bis wann?',
    transmit: 'Senden',
    statusOpening: 'E-Mail-Programm wird geöffnet...',
    mailSubject: 'Centrom Briefing',
    mailGeneral: 'allgemein',
    channel: 'Kanal',
    sideP:
      'Eine Website, die auch in fünf Jahren noch gut aussieht? Dann sind Sie hier richtig.',
    responseWindow: 'Antwortzeit',
    responseValue: 'in der Regel innerhalb von 1 Werktag',
    lanes: {
      software: 'Individuelle Software',
      wordpress: 'WordPress',
      shopify: 'Shopify',
      hosting: 'Hosting / Vermittlung',
      finished: 'Fertiges Produkt',
    },
  },
  footer: {
    domains: 'centrom.ch',
    copyright: '© {year} Centrom · alle Systeme laufen',
  },
}
