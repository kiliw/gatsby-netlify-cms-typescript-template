export const LOCALES = ['en', 'de'] as const

export type Locale = typeof LOCALES[number]
