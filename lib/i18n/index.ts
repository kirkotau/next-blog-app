import { en } from './locales/en';
import { pl } from './locales/pl';
import { ru } from './locales/ru';
import type { Locale, Messages } from './types';

export type { Locale, Messages };

export const LOCALE_STORAGE_KEY = 'locale';
export const DEFAULT_LOCALE: Locale = 'en';

export const locales: Locale[] = ['en', 'pl', 'ru'];

export const messages: Record<Locale, Messages> = {
  en,
  pl,
  ru,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'pl' || value === 'ru';
}

export function getLocaleTag(locale: Locale): string {
  const tags: Record<Locale, string> = {
    en: 'en-GB',
    pl: 'pl-PL',
    ru: 'ru-RU',
  };

  return tags[locale];
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const language = navigator.language.toLowerCase();

  if (language.startsWith('pl')) return 'pl';
  if (language.startsWith('ru')) return 'ru';

  return DEFAULT_LOCALE;
}

export function formatMessage(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, value),
    template
  );
}

export const localeInitScript = `(function(){try{var s=localStorage.getItem('${LOCALE_STORAGE_KEY}');var l=s==='en'||s==='pl'||s==='ru'?s:'en';document.documentElement.lang=l;}catch(e){}})();`;
