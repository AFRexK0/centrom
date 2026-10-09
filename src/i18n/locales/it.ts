import type { Translations } from '../types'

export const it: Translations = {
  meta: {
    title: 'Centrom · studio di prodotti digitali',
    description:
      'Centrom · studio di prodotti digitali. Siti web, WordPress, Shopify, hosting e software su misura per piccole e medie imprese.',
  },
  nav: {
    aria: 'Principale',
    services: 'Servizi',
    pricing: 'Prezzi',
    contact: 'Contatto',
    status: 'online',
    langSelect: 'Lingua',
  },
  hero: {
    label: '// studio di prodotti digitali',
    h1: 'Siti web, negozi online e software. Realizzati e ospitati da un unico team.',
    p: 'Realizziamo siti web, negozi online e software su misura per le aziende, e ci occupiamo anche dell’hosting. Un team, un unico referente.',
    ctaBrief: 'Avvia un brief',
    ctaPricing: 'Vedi i prezzi',
    terminalUptime: 'carico dello studio: basso · coda: aperta',
    terminalWhoami: 'centrom · multi-desk · ue',
  },
  intro: {
    label: '01 / segnale',
    h2: 'Un piccolo studio che porta a termine il lavoro.',
    p: 'Centrom è un piccolo studio. Progettiamo, sviluppiamo e ospitiamo siti web e software. Se esiste già qualcosa che soddisfa le vostre esigenze, ve lo indichiamo invece di rifarlo da zero. La maggior parte dei nostri clienti sono piccole e medie imprese.',
    statWp: 'Siti WordPress',
    statShop: 'Temi Shopify',
    statHost: 'uptime & assistenza',
  },
  services: {
    label: '02 / catalogo',
    h2: 'Cosa facciamo.',
    p: 'Cinque servizi, sempre con lo stesso approccio: obiettivi chiari, prezzi giusti e qualcosa che potete davvero mostrare ai vostri clienti.',
    items: [
      {
        title: 'Software su misura',
        copy: 'Strumenti interni, portali clienti, API e prototipi di app. Per team che vogliono qualcosa che funzioni, senza lunghi giri.',
        tag: 'build',
      },
      {
        title: 'Siti WordPress',
        copy: 'Siti aziendali e blog configurati in modo che il vostro team possa gestirli da solo, senza chiamarci ogni settimana.',
        tag: 'wp',
      },
      {
        title: 'Negozi Shopify',
        copy: 'Personalizzazione del tema, checkout migliorato e catalogo ben organizzato per negozi che vogliono vendere di più.',
        tag: 'shopify',
      },
      {
        title: 'Prodotti pronti',
        copy: 'Siti, script e kit già pronti che abbiamo usato in altri progetti. Più veloci e più economici che ripartire da zero.',
        tag: 'ready',
      },
      {
        title: 'Hosting & intermediazione',
        copy: 'Ospitiamo ciò che realizziamo. Se vi servono domini, server o altri fornitori, ci pensiamo noi.',
        tag: 'host',
      },
    ],
  },
  capabilities: {
    label: '04 / moduli',
    h2: 'Cosa riutilizziamo.',
    p: 'Non ogni progetto parte da zero. Questi sono gli elementi che usiamo più spesso.',
    items: [
      {
        chip: 'SYS.01',
        title: 'Basi del prodotto',
        copy: 'Login, dashboard, moduli e le fondamenta di cui ha bisogno la maggior parte dei software aziendali.',
      },
      {
        chip: 'SYS.02',
        title: 'UX del negozio',
        copy: 'Cataloghi chiari, checkout mobile semplice e temi pensati per trasformare i visitatori in clienti.',
      },
      {
        chip: 'SYS.03',
        title: 'Configurazione CMS',
        copy: 'WordPress organizzato in modo pulito e semplice, così i vostri contenuti restano in ordine anche man mano che crescono.',
      },
      {
        chip: 'SYS.04',
        title: 'Assistenza hosting',
        copy: 'Backup, SSL, aggiornamenti e una persona vera da chiamare quando qualcosa si blocca alle 2 di notte.',
      },
      {
        chip: 'SYS.05',
        title: 'Gestione fornitori',
        copy: 'Ci occupiamo di domini, licenze e infrastruttura, così avete a che fare solo con noi.',
      },
      {
        chip: 'SYS.06',
        title: 'Kit di consegna',
        copy: 'Documentazione, accessi admin e brevi note di formazione al momento della consegna.',
      },
    ],
  },
  process: {
    label: '05 / fasi',
    h2: 'Come funziona.',
    p: 'Quattro passi. Abbastanza struttura per restare in carreggiata, senza rallentare il vostro lancio.',
    steps: [
      {
        title: 'Brief',
        copy: 'Ci dite di cosa avete bisogno. Noi prepariamo un piano dettagliato con obiettivi, tempi e budget.',
      },
      {
        title: 'Sviluppo',
        copy: 'Realizziamo il progetto e potete seguire l’avanzamento lungo il percorso.',
      },
      {
        title: 'Lancio',
        copy: 'Andiamo online e configuriamo tutto come desiderate.',
      },
      {
        title: 'Assistenza',
        copy: 'Dovete cambiare qualcosa più avanti? Contattateci e troveremo una soluzione.',
      },
    ],
  },
  pricing: {
    label: '06 / listino',
    h2: 'I nostri prodotti',
    p: 'Prezzi di partenza semplici. Il costo esatto viene definito dopo un breve incontro.',
    from: 'da',
    perMonth: '/ mese',
    requestQuote: 'Richiedi un preventivo',
    note: '// progetti più grandi quotati a parte · IVA UE ove applicabile',
    tiers: [
      {
        tier: 'Per tutti',
        title: 'Landing / vetrina',
        amount: '1000 CHF',
        points: [
          'Dominio incluso*',
          'Landing page',
          'Layout responsive',
          'SEO di base + analytics',
          'Servizio email incluso',
        ],
      },
      {
        tier: 'Per le aziende',
        title: 'Negozio o software',
        amount: '2400 CHF',
        points: [
          'Dominio incluso*',
          'Sito multipagina',
          'Fino a 500 prodotti* (negozio)',
          'Layout responsive',
          'SEO completa + analytics',
          'Servizio email incluso',
        ],
      },
      {
        tier: 'Consulenza',
        title: 'Consulenza tecnica',
        amount: '100 CHF / ora',
        points: [
          'Analisi del vostro sito o della configurazione attuale',
          'Consigli su stack tecnologico e strumenti',
          'Roadmap e stima dei costi',
          'Riepilogo scritto dopo ogni sessione',
          'Disponibile in inglese e tedesco',
        ],
      },
    ],
  },
  contact: {
    label: '07 / ping',
    h2: 'Parlateci del vostro progetto.',
    p: 'Raccontateci di cosa avete bisogno online e lo realizzeremo. Vi risponderanno le stesse persone che fanno il lavoro.',
    name: 'Nome',
    email: 'Email',
    lane: 'Prodotto',
    brief: 'Brief',
    placeholder: 'Di cosa avete bisogno, e per quando?',
    transmit: 'Invia',
    statusOpening: 'apertura del client di posta...',
    mailSubject: 'Brief Centrom',
    mailGeneral: 'generale',
    channel: 'canale',
    sideP:
      'Volete un sito che stia ancora bene tra cinque anni? Siete nel posto giusto.',
    responseWindow: 'Tempo di risposta',
    responseValue: 'di solito entro 1 giorno lavorativo',
    timezone: 'Fuso orario',
    timezoneValue: 'CET · UTC+1',
    engagements: 'Tipi di progetto',
    engagementsValue: 'software, WordPress, Shopify, hosting',
    lanes: {
      software: 'Software su misura',
      wordpress: 'WordPress',
      shopify: 'Shopify',
      hosting: 'Hosting / intermediazione',
      finished: 'Prodotto pronto',
    },
  },
  footer: {
    domains: 'centrom.ch',
    copyright: '© {year} Centrom · tutti i sistemi funzionano',
  },
}
