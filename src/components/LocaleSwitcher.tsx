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
    ? "landing-pill rounded-full px-3 py-1.5 text-xs font-semibold outline-none"
    : "landing-pill rounded-full px-4 py-2 text-sm font-semibold outline-none";

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
