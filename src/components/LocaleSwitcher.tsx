"use client";

import { useEffect, useState } from "react";

import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/messages";

export function LocaleSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, locales } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shellClass = compact
    ? "rounded-full border border-text/12 bg-white/72 px-3 py-1.5 text-xs font-semibold text-text/80 outline-none backdrop-blur transition hover:border-primary/28"
    : "rounded-full border border-text/12 bg-white/72 px-4 py-2 text-sm font-semibold text-text/80 outline-none backdrop-blur transition hover:border-primary/28";

  if (!mounted) {
    return (
      <div className={`${shellClass} min-w-[8rem]`} aria-hidden>
        🇫🇷 Français
      </div>
    );
  }

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      aria-label="Language"
      className={shellClass}
    >
      {locales.map((l) => (
        <option key={l.code} value={l.code}>
          {l.flag} {l.label}
        </option>
      ))}
    </select>
  );
}
