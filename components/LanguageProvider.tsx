'use client';

import {
  DEFAULT_LOCALE,
  detectBrowserLocale,
  isLocale,
  LOCALE_STORAGE_KEY,
  messages,
  type Locale,
  type Messages,
} from '@/lib/i18n';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type LanguageContextValue = {
  locale: Locale;
  t: Messages;
  setLocale: (locale: Locale) => void;
  mounted: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    setLocaleState(isLocale(stored) ? stored : detectBrowserLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.lang = locale;
    document.title = messages[locale].meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', messages[locale].meta.description);
    }
  }, [locale, mounted]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      t: messages[locale],
      setLocale,
      mounted,
    }),
    [locale, mounted]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
