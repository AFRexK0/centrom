import type { Translations } from '../types'

export const fr: Translations = {
  meta: {
    title: 'Centrom · studio de produits numériques',
    description:
      'Centrom · studio de produits numériques. Sites web, WordPress, Shopify, hébergement et logiciels sur mesure pour les petites et moyennes entreprises.',
  },
  nav: {
    aria: 'Principal',
    services: 'Services',
    pricing: 'Tarifs',
    contact: 'Contact',
    status: 'en ligne',
    langSelect: 'Langue',
  },
  hero: {
    label: '// studio de produits numériques',
    h1: 'Sites web, boutiques en ligne et logiciels. Conçus et hébergés par une seule équipe.',
    p: 'Nous créons des sites web, des boutiques en ligne et des logiciels sur mesure pour les entreprises, et nous hébergeons aussi le tout. Une équipe, un seul interlocuteur.',
    ctaBrief: 'Démarrer un brief',
    ctaPricing: 'Voir les tarifs',
    terminalUptime: 'charge du studio : faible · file d’attente : ouverte',
    terminalWhoami: 'centrom · multi-desk · ue',
  },
  intro: {
    label: '01 / signal',
    h2: 'Un petit studio qui fait le travail.',
    p: 'Centrom est un petit studio. Nous concevons, développons et hébergeons des sites web et des logiciels. Si une solution existe déjà et correspond à vos besoins, nous vous l’indiquons plutôt que de la refaire. La plupart de nos clients sont des petites et moyennes entreprises.',
    statWp: 'Sites WordPress',
    statShop: 'Thèmes Shopify',
    statHost: 'disponibilité & suivi',
  },
  services: {
    label: '02 / catalogue',
    h2: 'Ce que nous faisons.',
    p: 'Cinq services, une même approche : un périmètre clair, des prix justes et quelque chose que vous pouvez vraiment montrer à vos clients.',
    items: [
      {
        title: 'Logiciels sur mesure',
        copy: 'Outils internes, portails clients, API et prototypes d’applications. Pour les équipes qui veulent quelque chose qui fonctionne, sans processus interminable.',
        tag: 'build',
      },
      {
        title: 'Sites WordPress',
        copy: 'Sites d’entreprise et blogs configurés pour que votre équipe puisse les modifier seule, sans nous appeler toutes les semaines.',
        tag: 'wp',
      },
      {
        title: 'Boutiques Shopify',
        copy: 'Personnalisation de thème, paiement amélioré et catalogue bien organisé pour les boutiques qui veulent vendre davantage.',
        tag: 'shopify',
      },
      {
        title: 'Produits prêts à l’emploi',
        copy: 'Sites, scripts et kits prêts à l’emploi que nous avons déjà utilisés sur d’autres projets. Plus rapide et moins cher que de repartir de zéro.',
        tag: 'ready',
      },
      {
        title: 'Hébergement & courtage',
        copy: 'Nous hébergeons ce que nous créons. Si vous avez besoin de domaines, de serveurs ou d’autres prestataires, nous nous en occupons aussi.',
        tag: 'host',
      },
    ],
  },
  capabilities: {
    label: '04 / modules',
    h2: 'Ce que nous réutilisons.',
    p: 'Tous les projets ne partent pas de zéro. Voici les éléments que nous réutilisons régulièrement.',
    items: [
      {
        chip: 'SYS.01',
        title: 'Bases produit',
        copy: 'Connexion, tableaux de bord, formulaires et les fondations dont la plupart des logiciels métier ont besoin.',
      },
      {
        chip: 'SYS.02',
        title: 'UX boutique',
        copy: 'Catalogues clairs, paiement mobile simple et thèmes conçus pour transformer les visiteurs en clients.',
      },
      {
        chip: 'SYS.03',
        title: 'Configuration CMS',
        copy: 'WordPress organisé de façon claire et simple, pour que vos contenus restent bien rangés en grandissant.',
      },
      {
        chip: 'SYS.04',
        title: 'Suivi hébergement',
        copy: 'Sauvegardes, SSL, mises à jour et une vraie personne à appeler quand quelque chose tombe en panne à 2 h du matin.',
      },
      {
        chip: 'SYS.05',
        title: 'Gestion des prestataires',
        copy: 'Nous gérons domaines, licences et infrastructure, pour que vous n’ayez affaire qu’à nous.',
      },
      {
        chip: 'SYS.06',
        title: 'Kits de passation',
        copy: 'Documentation, accès administrateur et courtes notes de formation lors de la livraison.',
      },
    ],
  },
  process: {
    label: '05 / étapes',
    h2: 'Comment ça se passe.',
    p: 'Quatre étapes. Assez de structure pour rester sur la bonne voie, sans ralentir votre lancement.',
    steps: [
      {
        title: 'Brief',
        copy: 'Vous nous dites ce dont vous avez besoin. Nous établissons un plan détaillé avec périmètre, calendrier et budget.',
      },
      {
        title: 'Création',
        copy: 'Nous construisons le projet, et vous pouvez suivre l’avancement tout au long du chemin.',
      },
      {
        title: 'Lancement',
        copy: 'Nous mettons en ligne et configurons tout comme vous le souhaitez.',
      },
      {
        title: 'Suivi',
        copy: 'Une modification à faire plus tard ? Contactez-nous, nous trouverons une solution.',
      },
    ],
  },
  pricing: {
    label: '06 / tarifs',
    h2: 'Nos produits',
    p: 'Des prix de départ simples. Le coût exact est fixé après un court rendez-vous.',
    from: 'à partir de',
    perMonth: '/ mois',
    requestQuote: 'Demander un devis',
    note: '// projets plus importants sur devis séparé · TVA UE le cas échéant',
    tiers: [
      {
        tier: 'Pour tous',
        title: 'Landing / vitrine',
        amount: '1000 CHF',
        points: [
          'Domaine inclus*',
          'Page d’atterrissage',
          'Mise en page responsive',
          'SEO de base + analytics',
          'Service e-mail inclus',
        ],
      },
      {
        tier: 'Pour les entreprises',
        title: 'Boutique ou logiciel',
        amount: '2400 CHF',
        points: [
          'Domaine inclus*',
          'Site multi-pages',
          'Jusqu’à 500 produits* (boutique)',
          'Mise en page responsive',
          'SEO complet + analytics',
          'Service e-mail inclus',
        ],
      },
      {
        tier: 'Conseil',
        title: 'Conseil technique',
        amount: '100 CHF / heure',
        points: [
          'Analyse de votre site ou configuration actuelle',
          'Recommandations de stack et d’outils',
          'Feuille de route et estimation des coûts',
          'Résumé écrit après chaque séance',
          'Disponible en anglais et en allemand',
        ],
      },
    ],
  },
  contact: {
    label: '07 / ping',
    h2: 'Parlez-nous de votre projet.',
    p: 'Dites-nous ce dont vous avez besoin en ligne et nous le réaliserons. Vous aurez des nouvelles des personnes mêmes qui font le travail.',
    name: 'Nom',
    email: 'E-mail',
    lane: 'Produit',
    brief: 'Brief',
    placeholder: 'De quoi avez-vous besoin, et pour quand ?',
    transmit: 'Envoyer',
    statusOpening: 'ouverture du client mail...',
    mailSubject: 'Brief Centrom',
    mailGeneral: 'général',
    channel: 'canal',
    sideP:
      'Un site web qui aura encore fière allure dans cinq ans ? Vous êtes au bon endroit.',
    responseWindow: 'Délai de réponse',
    responseValue: 'en général sous 1 jour ouvré',
    lanes: {
      software: 'Logiciel sur mesure',
      wordpress: 'WordPress',
      shopify: 'Shopify',
      hosting: 'Hébergement / courtage',
      finished: 'Produit prêt à l’emploi',
    },
  },
  footer: {
    domains: 'centrom.ch',
    copyright: '© {year} Centrom · tous les systèmes fonctionnent',
  },
}
