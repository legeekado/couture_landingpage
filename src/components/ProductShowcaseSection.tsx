"use client";

import Link from "next/link";
import { useState } from "react";

import { useI18n } from "@/lib/i18n/context";

import { Reveal } from "./Reveal";
import { StoreDownloadButtons } from "./StoreDownloadButtons";

type Role = "owner" | "employee";

const mobileSharedKeys = [
  "showcase.mobile.1",
  "showcase.mobile.2",
  "showcase.mobile.3",
  "showcase.mobile.4",
  "showcase.mobile.5",
  "showcase.mobile.6",
  "showcase.mobile.7",
  "showcase.mobile.8",
] as const;

const mobileOwnerKeys = ["showcase.mobile.owner.1", "showcase.mobile.owner.2"] as const;

const webSharedKeys = [
  "showcase.web.1",
  "showcase.web.2",
  "showcase.web.3",
  "showcase.web.4",
  "showcase.web.5",
  "showcase.web.6",
] as const;

const webOwnerKeys = ["showcase.web.owner.1", "showcase.web.owner.2"] as const;

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-text/82">
      <span className="landing-showcase-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function MobileMockup({ role }: { role: Role }) {
  const { t } = useI18n();
  const isOwner = role === "owner";

  return (
    <div className="landing-phone-mockup">
      <div className="landing-phone-notch" aria-hidden />
      <div className="landing-phone-screen">
        <div className="landing-phone-status">
          <span>9:41</span>
          <span>Kayñiawlu</span>
        </div>
        <div className="landing-phone-bar">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wide opacity-60">
              Atelier Medina
            </p>
            <p className="text-xs font-bold">Tous les points</p>
          </div>
          <span className="landing-phone-bell">🔔</span>
        </div>
        <div className="landing-phone-body">
          <p className="text-[10px] font-bold uppercase tracking-wide text-gold">
            {t("showcase.mock.week")}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[
              { l: t("hero.demo.ordersWeek"), v: "37" },
              { l: t("hero.demo.fittings"), v: "5" },
              { l: t("hero.demo.clients"), v: "248" },
            ].map((s) => (
              <div key={s.l} className="landing-phone-stat">
                <p className="text-[8px] uppercase opacity-60">{s.l}</p>
                <p className="text-sm font-bold">{s.v}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] font-bold">{t("showcase.mock.activity")}</p>
          <div className="mt-1.5 rounded-lg border border-white/10 bg-white/5 p-2">
            <p className="text-[9px] font-bold">{t("showcase.mock.notifTitle")}</p>
            <p className="mt-0.5 text-[8px] opacity-70">{t("showcase.mock.notifBody")}</p>
          </div>
          {isOwner && (
            <div className="mt-2 rounded-lg border border-gold/30 bg-gold/10 p-2">
              <p className="text-[9px] font-bold text-gold">{t("showcase.mock.team")}</p>
              <p className="text-[8px] opacity-75">{t("showcase.mock.teamHint")}</p>
            </div>
          )}
          {!isOwner && (
            <div className="mt-2 rounded-lg border border-white/10 bg-white/5 p-2">
              <p className="text-[9px] font-bold">{t("showcase.mock.pdv")}</p>
              <p className="text-[8px] opacity-70">{t("showcase.mock.pdvHint")}</p>
            </div>
          )}
        </div>
        <div className="landing-phone-nav">
          <span className="is-active">⌂</span>
          <span>👥</span>
          <span className="landing-phone-fab">📐</span>
          <span>🧾</span>
          <span>👤</span>
        </div>
      </div>
    </div>
  );
}

function WebMockup({ role }: { role: Role }) {
  const { t } = useI18n();
  const isOwner = role === "owner";

  const navItems = isOwner
    ? [
        t("showcase.mock.nav.dashboard"),
        t("showcase.mock.nav.clients"),
        t("showcase.mock.nav.orders"),
        t("showcase.mock.nav.team"),
        t("showcase.mock.nav.subscription"),
      ]
    : [
        t("showcase.mock.nav.dashboard"),
        t("showcase.mock.nav.clients"),
        t("showcase.mock.nav.orders"),
        t("showcase.mock.nav.garments"),
      ];

  return (
    <div className="landing-browser-mockup">
      <div className="landing-browser-chrome">
        <div className="flex gap-1.5" aria-hidden>
          <span className="landing-browser-dot bg-danger/80" />
          <span className="landing-browser-dot bg-warning/80" />
          <span className="landing-browser-dot bg-success/80" />
        </div>
        <div className="landing-browser-url">app.kayniawlu.sn/dashboard</div>
      </div>
      <div className="landing-browser-layout">
        <aside className="landing-browser-sidebar">
          <p className="mb-3 text-[10px] font-bold tracking-wide text-gold">Kayñiawlu</p>
          {navItems.map((item, i) => (
            <div
              key={item}
              className={`landing-browser-nav-item ${i === 0 ? "is-active" : ""}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <main className="landing-browser-main">
          <p className="text-xs font-bold">{t("showcase.mock.webTitle")}</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="landing-browser-card">
              <p className="text-[9px] opacity-60">{t("hero.demo.ordersWeek")}</p>
              <p className="text-lg font-bold">37</p>
            </div>
            <div className="landing-browser-card">
              <p className="text-[9px] opacity-60">{t("hero.demo.revenueWeek")}</p>
              <p className="text-lg font-bold">1,2 M</p>
            </div>
          </div>
          <div className="mt-2 rounded-lg border border-white/10 bg-white/5 p-2">
            <p className="text-[10px] font-bold">{t("showcase.mock.webList")}</p>
            <div className="mt-1.5 space-y-1">
              <div className="h-1.5 w-full rounded bg-white/10" />
              <div className="h-1.5 w-4/5 rounded bg-white/10" />
              <div className="h-1.5 w-3/5 rounded bg-white/10" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

interface ProductShowcaseSectionProps {
  backofficeUrl: string;
}

export function ProductShowcaseSection({ backofficeUrl }: ProductShowcaseSectionProps) {
  const { t } = useI18n();
  const [role, setRole] = useState<Role>("owner");

  const mobileKeys = [
    ...mobileSharedKeys,
    ...(role === "owner" ? mobileOwnerKeys : []),
  ];
  const webKeys = [
    ...webSharedKeys,
    ...(role === "owner" ? webOwnerKeys : []),
  ];

  return (
    <section id="produit" className="landing-showcase relative overflow-hidden py-24 md:py-32">
      <div className="landing-showcase-glow" aria-hidden />
      <div className="landing-showcase-thread top-[12%]" aria-hidden />
      <div className="landing-showcase-thread top-[58%] opacity-50" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="landing-pill mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold">
              📱 + 💻 {t("showcase.badge")}
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t("showcase.title1")}
              <span className="mt-1 block bg-gradient-to-r from-primary via-gold to-gold-muted bg-clip-text text-transparent dark:from-[#f2d9a6] dark:via-gold dark:to-[#c9963f]">
                {t("showcase.title2")}
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-text/72">
              {t("showcase.subtitle")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <StoreDownloadButtons />
            <p className="text-center text-xs font-medium text-text/50">
              {t("stores.hint")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => setRole("owner")}
              className={`landing-role-tab ${role === "owner" ? "is-active" : ""}`}
            >
              <span className="text-lg">👑</span>
              <span>
                <span className="block font-display text-base font-bold">
                  {t("showcase.roleOwner")}
                </span>
                <span className="block text-xs opacity-75">{t("showcase.ownerHint")}</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setRole("employee")}
              className={`landing-role-tab ${role === "employee" ? "is-active" : ""}`}
            >
              <span className="text-lg">✂️</span>
              <span>
                <span className="block font-display text-base font-bold">
                  {t("showcase.roleEmployee")}
                </span>
                <span className="block text-xs opacity-75">{t("showcase.employeeHint")}</span>
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={160}>
            <div className="flex flex-col items-center">
              <p className="mb-5 text-sm font-bold uppercase tracking-widest text-gold">
                {t("showcase.mobileLabel")}
              </p>
              <MobileMockup role={role} />
              <ul className="mt-8 w-full max-w-md space-y-3">
                {mobileKeys.map((key) => (
                  <CheckItem key={key}>{t(key)}</CheckItem>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-col items-center">
              <p className="mb-5 text-sm font-bold uppercase tracking-widest text-gold">
                {t("showcase.webLabel")}
              </p>
              <WebMockup role={role} />
              <ul className="mt-8 w-full max-w-md space-y-3">
                {webKeys.map((key) => (
                  <CheckItem key={key}>{t(key)}</CheckItem>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={280}>
          <div className="landing-showcase-cta mt-16 rounded-[1.25rem] p-8 text-center md:p-12">
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              {t("showcase.ctaTitle")}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-text/72">{t("showcase.ctaSubtitle")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <StoreDownloadButtons layout="row" />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href={`${backofficeUrl}/register`}
                className="landing-cta rounded-xl px-8 py-3.5 text-sm font-bold text-white"
              >
                {t("showcase.ctaAccess")}
              </Link>
              <Link
                href={`${backofficeUrl}/`}
                className="landing-cta-ghost rounded-xl px-8 py-3.5 text-sm font-semibold"
              >
                {t("showcase.ctaWeb")}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
