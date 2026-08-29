import type { Translations } from '../types'

export const fr: Translations = {
  meta: {
    title: 'Centrom — studio de produits numériques',
    description:
      'Centrom — studio de produits numériques. Logiciels, WordPress, Shopify, hébergement et livrables clés en main pour les PME.',
  },
  nav: {
    aria: 'Principal',
    services: 'Services',
    pricing: 'Tarifs',
    contact: 'Contact',
    status: 'bureau en ligne',
    langSelect: 'Langue',
  },
  hero: {
    label: '// studio de produits numériques',
    h1: 'Logiciels, boutiques en ligne et hébergement — livrés ou sourcés.',
    p: 'Nous construisons et déployons pour les entreprises qui ont besoin de quelque chose de concret en ligne : logiciels sur mesure, WordPress, Shopify et un hébergement fiable — sans effets de manche, des systèmes qui fonctionnent.',
    ctaBrief: 'Démarrer un brief',
    ctaPricing: 'Voir les tarifs',
    terminalUptime: 'charge studio : faible · file : ouverte',
    terminalWhoami: 'centrom · multi-bureau · ue',
  },
  intro: {
    label: '01 / signal',
    h2: 'Un studio discret avec une stack solide.',
    p: 'Centrom se situe entre l’artisanat et le commerce. Nous concevons, développons et hébergeons — et quand la bonne pièce existe déjà, nous la sourçons. Nos clients sont surtout des entreprises ; le budget est mid-market ; le ton est pragmatique.',
    statWp: 'Sites WordPress',
    statShop: 'Thèmes Shopify',
    statHost: 'disponibilité & suivi',
  },
  services: {
    label: '02 / catalogue',
    h2: 'Ce qui quitte le bureau.',
    p: 'Cinq voies. Même standard : périmètre clair, tarifs accessibles, et un résultat présentable devant vos clients.',
    items: [
      {
        title: 'Logiciels sur mesure',
        copy: 'Outils internes, portails clients, API et coques produit — dimensionnés pour les équipes qui privilégient la clarté à la cérémonie.',
        tag: 'build',
      },
      {
        title: 'Sites WordPress',
        copy: 'Sites éditoriaux, vitrines et CMS que les rédacteurs peuvent gérer sans nous appeler chaque mardi.',
        tag: 'wp',
      },
      {
        title: 'Boutiques Shopify',
        copy: 'Thèmes, parcours de paiement et structure catalogue pour les shops qui doivent vendre — pas seulement paraître actifs.',
        tag: 'shopify',
      },
      {
        title: 'Produits clés en main',
        copy: 'Packages prêts à l’emploi quand vous voulez aller vite : sites, scripts et kits déjà éprouvés sur d’autres projets.',
        tag: 'ready',
      },
      {
        title: 'Hébergement & courtage',
        copy: 'Nous hébergeons ce que nous livrons, et nous faisons l’intermédiaire pour domaines, serveurs ou prestataires.',
        tag: 'host',
      },
    ],
  },
  capabilities: {
    label: '04 / modules',
    h2: 'Ce qu’on garde en stock.',
    p: 'Chaque mission n’est pas une page blanche. Voici les modules que le studio réutilise régulièrement.',
    items: [
      {
        chip: 'SYS.01',
        title: 'Coques produit',
        copy: 'Auth, tableaux de bord, CRUD et la glue invisible qui modernise une entreprise.',
      },
      {
        chip: 'SYS.02',
        title: 'UX boutique',
        copy: 'Catalogue clair, checkout mobile et thèmes orientés conversion.',
      },
      {
        chip: 'SYS.03',
        title: 'Discipline CMS',
        copy: 'WordPress structuré pour que les équipes contenu arrêtent le chaos trimestriel.',
      },
      {
        chip: 'SYS.04',
        title: 'Suivi hébergement',
        copy: 'Sauvegardes, SSL, mises à jour et un humain quand quelque chose bippe à 2h.',
      },
      {
        chip: 'SYS.05',
        title: 'Intermédiaire',
        copy: 'Nous gérons domaines, licences et infra pour que vous parliez à un seul interlocuteur.',
      },
      {
        chip: 'SYS.06',
        title: 'Kits de passation',
        copy: 'Docs, accès admin et notes de formation — livrés comme si le produit comptait.',
      },
    ],
  },
  process: {
    label: '05 / protocole',
    h2: 'Comment les bureaux avancent.',
    p: 'Quatre étapes. Assez de structure pour faire confiance, pas assez de cérémonie pour ralentir un lancement.',
    steps: [
      {
        title: 'Brief',
        copy: 'Vous dites ce qui doit exister. Nous traduisons en périmètre, voie et fourchette budgétaire.',
      },
      {
        title: 'Build',
        copy: 'Design et dev partagent une timeline. Vous avez des points de contrôle, pas des semaines mystère.',
      },
      {
        title: 'Ship',
        copy: 'Lancement, hébergement et l’ops ingrat qui maintient le site après les applaudissements.',
      },
      {
        title: 'Steady',
        copy: 'Retainer, mises à jour ou passation propre — ce qui fait avancer votre activité.',
      },
    ],
  },
  pricing: {
    label: '06 / tarifs',
    h2: 'Fourchettes claires, sans devinettes.',
    p: 'Points de départ accessibles — pas un menu de tours. Devis exact après un court brief. Packages finis et courtage dans les mêmes fourchettes.',
    from: 'à partir de',
    perMonth: '/ mois',
    requestQuote: 'Demander un devis',
    note: '// systèmes plus larges et déploiements multi-sites sur devis · TVA UE le cas échéant',
    tiers: [
      {
        tier: 'Boot',
        title: 'Landing / vitrine',
        amount: '€1.2k',
        points: [
          'Site une page ou petit WP',
          'Mise en page mobile-first',
          'SEO de base + analytics',
          '2 rounds de révisions',
        ],
      },
      {
        tier: 'Runtime',
        title: 'Boutique ou logiciel',
        amount: '€3.2k',
        points: [
          'Thème Shopify ou outil sur mesure',
          'Intégrations & modèle de contenu',
          'Staging + support au lancement',
          '30 jours de suivi post-livraison',
        ],
      },
      {
        tier: 'Uptime',
        title: 'Hébergement & suivi',
        amount: '€59',
        points: [
          'Hébergement managé & SSL',
          'Sauvegardes + mises à jour',
          'File tickets prioritaire',
          'Add-ons courtés si besoin',
        ],
      },
    ],
  },
  contact: {
    label: '07 / ping',
    h2: 'Envoyer le brief.',
    p: 'Dites-nous ce que vous vendez, ce qui doit exister en ligne et votre fourchette budgétaire. Nous répondons depuis le même bureau qui livre le travail.',
    name: 'Nom',
    email: 'E-mail',
    lane: 'Voie',
    brief: 'Brief',
    placeholder: 'Que doit-on construire, et pour quand ?',
    transmit: 'Transmettre',
    statusOpening: 'ouverture du client mail...',
    mailSubject: 'Brief Centrom —',
    mailGeneral: 'général',
    channel: 'canal',
    sideP:
      'Un domaine qui vieillit bien ? Nous visons centrom.studio / centrom.com — pas un relic .io des années 2010.',
    responseWindow: 'Délai de réponse',
    responseValue: 'souvent sous 1 jour ouvré',
    timezone: 'Fuseau',
    timezoneValue: 'CET / CEST · bureaux remote-first',
    engagements: 'Engagements',
    engagementsValue: 'projet · retainer · stack courtée',
    lanes: {
      software: 'Logiciel sur mesure',
      wordpress: 'WordPress',
      shopify: 'Shopify',
      hosting: 'Hébergement / courtage',
      finished: 'Produit clé en main',
    },
  },
  footer: {
    domains: 'centrom.studio · centrom.com',
    copyright: '© {year} Centrom · tous systèmes nominaux',
  },
}
