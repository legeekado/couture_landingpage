"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n/context";

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || "";
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || "";

function StoreLink({
  href,
  label,
  children,
  soon,
}: {
  href: string;
  label: string;
  children: ReactNode;
  soon?: string;
}) {
  const disabled = !href || href === "#";

  if (disabled) {
    return (
      <span
        className="landing-store-badge landing-store-badge-soon"
        title={soon}
        aria-label={soon}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="landing-store-badge"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function StoreDownloadButtons({
  layout = "row",
  className = "",
}: {
  layout?: "row" | "column";
  className?: string;
}) {
  const { t } = useI18n();

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        layout === "column" ? "flex-col items-stretch" : "justify-center"
      } ${className}`}
    >
      <StoreLink
        href={APP_STORE_URL || "#"}
        label={t("stores.appStore")}
        soon={t("stores.soon")}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
          <path
            fill="currentColor"
            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
          />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-semibold uppercase tracking-wide opacity-75">
            {t("stores.downloadOn")}
          </span>
          <span className="block text-sm font-bold">{t("stores.appStore")}</span>
        </span>
      </StoreLink>

      <StoreLink
        href={PLAY_STORE_URL || "#"}
        label={t("stores.playStore")}
        soon={t("stores.soon")}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
          <path
            fill="currentColor"
            d="M3.6 1.8c-.3.2-.5.5-.5.9v18.6c0 .4.2.7.5.9l.1.1 10.4-10.4v-.2L3.7 1.7l-.1.1M16.1 13.9l-2.8-2.8-2.9 2.9 2.9 2.9 2.8-2.8 2.5 1.4-10.9 6.3c-.3.2-.7.2-1 0l-.1-.1 10.4-10.4 2.5 1.4zM16.1 10.1l2.5-1.4L20.4 3c.3-.5.1-1.1-.5-1.3-.6-.2-1.2 0-1.5.5l-2.8 7.9z"
          />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-semibold uppercase tracking-wide opacity-75">
            {t("stores.getOn")}
          </span>
          <span className="block text-sm font-bold">{t("stores.playStore")}</span>
        </span>
      </StoreLink>
    </div>
  );
}
