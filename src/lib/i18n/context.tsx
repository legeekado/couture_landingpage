"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { type Locale, locales, t } from "./messages";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  locales: typeof locales;
  ready: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "kalmy_locale";
const DEFAULT_LOCALE: Locale = "fr";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && locales.some((l) => l.code === saved)) return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = readStoredLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial;
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const translate = useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      t(locale, key, vars),
    [locale],
  );

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: translate, locales, ready }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
