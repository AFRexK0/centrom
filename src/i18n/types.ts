export const LOCALES = ['en', 'fr', 'it', 'de'] as const

export type Locale = (typeof LOCALES)[number]

export type Translations = {
  meta: {
    title: string
    description: string
  }
  nav: {
    aria: string
    services: string
    pricing: string
    contact: string
    status: string
    langSelect: string
  }
  hero: {
    label: string
    h1: string
    p: string
    ctaBrief: string
    ctaPricing: string
    terminalUptime: string
    terminalWhoami: string
  }
  intro: {
    label: string
    h2: string
    p: string
    statWp: string
    statShop: string
    statHost: string
  }
  services: {
    label: string
    h2: string
    p: string
    items: Array<{ title: string; copy: string; tag: string }>
  }
  capabilities: {
    label: string
    h2: string
    p: string
    items: Array<{ chip: string; title: string; copy: string }>
  }
  process: {
    label: string
    h2: string
    p: string
    steps: Array<{ title: string; copy: string }>
  }
  pricing: {
    label: string
    h2: string
    p: string
    from: string
    perMonth: string
    requestQuote: string
    note: string
    tiers: Array<{
      tier: string
      title: string
      amount: string
      points: string[]
    }>
  }
  contact: {
    label: string
    h2: string
    p: string
    name: string
    email: string
    lane: string
    brief: string
    placeholder: string
    transmit: string
    statusOpening: string
    mailSubject: string
    mailGeneral: string
    channel: string
    sideP: string
    responseWindow: string
    responseValue: string
    timezone: string
    timezoneValue: string
    engagements: string
    engagementsValue: string
    lanes: {
      software: string
      wordpress: string
      shopify: string
      hosting: string
      finished: string
    }
  }
  footer: {
    domains: string
    copyright: string
  }
}
