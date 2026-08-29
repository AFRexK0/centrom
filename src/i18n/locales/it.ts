import type { Translations } from '../types'

export const it: Translations = {
  meta: {
    title: 'Centrom — studio di prodotti digitali',
    description:
      'Centrom — studio di prodotti digitali. Software, WordPress, Shopify, hosting e soluzioni chiavi in mano per PMI.',
  },
  nav: {
    aria: 'Principale',
    services: 'Servizi',
    pricing: 'Prezzi',
    contact: 'Contatto',
    status: 'desk online',
    langSelect: 'Lingua',
  },
  hero: {
    label: '// studio di prodotti digitali',
    h1: 'Software, negozi online e hosting — consegnati o intermediati.',
    p: 'Costruiamo e mettiamo online per aziende che hanno bisogno di qualcosa di concreto: software su misura, WordPress, Shopify e hosting affidabile — niente teatro, solo sistemi che funzionano.',
    ctaBrief: 'Avvia un brief',
    ctaPricing: 'Vedi prezzi',
    terminalUptime: 'carico studio: basso · coda: aperta',
    terminalWhoami: 'centrom · multi-desk · ue',
  },
  intro: {
    label: '01 / segnale',
    h2: 'Uno studio quieto con uno stack potente.',
    p: 'Centrom sta tra artigianato e commercio. Progettiamo, costruiamo e ospitiamo — e quando il pezzo giusto esiste già, lo procuriamo. I clienti sono per lo più aziende; budget mid-market; tono pratico.',
    statWp: 'Siti WordPress',
    statShop: 'Temi Shopify',
    statHost: 'uptime & assistenza',
  },
  services: {
    label: '02 / catalogo',
    h2: 'Cosa esce dal desk.',
    p: 'Cinque corsie. Stesso standard: scope chiaro, prezzi accessibili e qualcosa da mostrare ai clienti.',
    items: [
      {
        title: 'Software su misura',
        copy: 'Tool interni, portali clienti, API e gusci prodotto — dimensionati per team che vogliono chiarezza, non cerimonia.',
        tag: 'build',
      },
      {
        title: 'Siti WordPress',
        copy: 'Siti editoriali, vetrine e CMS che i redattori gestiscono senza chiamarci ogni martedì.',
        tag: 'wp',
      },
      {
        title: 'Negozi Shopify',
        copy: 'Temi, checkout e struttura catalogo per shop che devono vendere — non solo sembrare attivi.',
        tag: 'shopify',
      },
      {
        title: 'Prodotti pronti',
        copy: 'Pacchetti pronti quando serve velocità: siti, script e kit già testati su altri desk.',
        tag: 'ready',
      },
      {
        title: 'Hosting & intermediazione',
        copy: 'Ospitiamo ciò che consegniamo e facciamo da tramite per domini, server o fornitori.',
        tag: 'host',
      },
    ],
  },
  capabilities: {
    label: '04 / moduli',
    h2: 'Cosa teniamo a scaffale.',
    p: 'Non ogni progetto parte da zero. Questi sono i moduli che lo studio ripete spesso.',
    items: [
      {
        chip: 'SYS.01',
        title: 'Gusci prodotto',
        copy: 'Auth, dashboard, CRUD e la colla noiosa che fa sembrare moderna un’azienda.',
      },
      {
        chip: 'SYS.02',
        title: 'UX negozio',
        copy: 'Catalogo chiaro, checkout mobile e temi orientati alla conversione.',
      },
      {
        chip: 'SYS.03',
        title: 'Disciplina CMS',
        copy: 'WordPress strutturato così i team contenuti smettono il caos trimestrale.',
      },
      {
        chip: 'SYS.04',
        title: 'Cura hosting',
        copy: 'Backup, SSL, aggiornamenti e un umano quando qualcosa suona alle 2 di notte.',
      },
      {
        chip: 'SYS.05',
        title: 'Intermediario',
        copy: 'Intermediamo domini, licenze e infrastruttura: parli con un solo desk.',
      },
      {
        chip: 'SYS.06',
        title: 'Kit consegna',
        copy: 'Documenti, accessi admin e note di formazione — consegnati come se il prodotto contasse.',
      },
    ],
  },
  process: {
    label: '05 / protocollo',
    h2: 'Come si muovono i desk.',
    p: 'Quattro passi. Abbastanza struttura per fidarsi, non abbastanza cerimonia per rallentare un lancio.',
    steps: [
      {
        title: 'Brief',
        copy: 'Ci dici cosa deve esistere. Lo traduciamo in scope, corsia e fascia di budget.',
      },
      {
        title: 'Build',
        copy: 'Design e sviluppo condividono una timeline. Checkpoint, non settimane misteriose.',
      },
      {
        title: 'Ship',
        copy: 'Lancio, hosting e le ops noiose che tengono vivo il sito dopo gli applausi.',
      },
      {
        title: 'Steady',
        copy: 'Retainer, aggiornamenti o consegna pulita — ciò che fa avanzare il business.',
      },
    ],
  },
  pricing: {
    label: '06 / listino',
    h2: 'Fasce chiare, zero supposizioni.',
    p: 'Punti di partenza accessibili — non un menu di trucchi. Preventivo esatto dopo un breve brief. Pacchetti finiti e intermediazione nelle stesse fasce.',
    from: 'da',
    perMonth: '/ mese',
    requestQuote: 'Richiedi preventivo',
    note: '// sistemi più ampi e rollout multi-sito su preventivo · IVA UE ove applicabile',
    tiers: [
      {
        tier: 'Boot',
        title: 'Landing / brochure',
        amount: '€1.2k',
        points: [
          'Sito one-page o piccolo WP',
          'Layout mobile-first',
          'SEO base + analytics',
          '2 round di revisioni',
        ],
      },
      {
        tier: 'Runtime',
        title: 'Negozio o software',
        amount: '€3.2k',
        points: [
          'Tema Shopify o tool su misura',
          'Integrazioni & modello contenuti',
          'Staging + supporto al lancio',
          '30 giorni di assistenza post-consegna',
        ],
      },
      {
        tier: 'Uptime',
        title: 'Hosting & retainer',
        amount: '€59',
        points: [
          'Hosting gestito & SSL',
          'Backup + aggiornamenti',
          'Coda ticket prioritaria',
          'Add-on intermediati se serve',
        ],
      },
    ],
  },
  contact: {
    label: '07 / ping',
    h2: 'Invia il brief.',
    p: 'Raccontaci cosa vendi, cosa deve esistere online e la fascia di budget. Rispondiamo dallo stesso desk che consegna il lavoro.',
    name: 'Nome',
    email: 'Email',
    lane: 'Corsia',
    brief: 'Brief',
    placeholder: 'Cosa deve esistere, e entro quando?',
    transmit: 'Trasmetti',
    statusOpening: 'apertura client mail...',
    mailSubject: 'Brief Centrom —',
    mailGeneral: 'generale',
    channel: 'canale',
    sideP:
      'Preferisci un dominio che invecchia bene? Puntiamo a centrom.studio / centrom.com — non un relic .io del 2010.',
    responseWindow: 'Tempo di risposta',
    responseValue: 'di solito entro 1 giorno lavorativo',
    timezone: 'Fuso orario',
    timezoneValue: 'CET / CEST · desk remote-first',
    engagements: 'Engagement',
    engagementsValue: 'progetto · retainer · stack intermediato',
    lanes: {
      software: 'Software su misura',
      wordpress: 'WordPress',
      shopify: 'Shopify',
      hosting: 'Hosting / intermediazione',
      finished: 'Prodotto pronto',
    },
  },
  footer: {
    domains: 'centrom.studio · centrom.com',
    copyright: '© {year} Centrom · tutti i sistemi nominali',
  },
}
