"use client";

import Link from "next/link";

import { KayniawluLogo } from "@/components/KayniawluLogo";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useI18n } from "@/lib/i18n/context";

const featureKeys = [
  { emoji: "📐", title: "features.1.title", desc: "features.1.desc" },
  { emoji: "✂️", title: "features.2.title", desc: "features.2.desc" },
  { emoji: "📍", title: "features.3.title", desc: "features.3.desc" },
  { emoji: "⭐", title: "features.4.title", desc: "features.4.desc" },
] as const;

const demoStats = [
  { l: "hero.demo.clients", v: "248" },
  { l: "hero.demo.ordersWeek", v: "37" },
  { l: "hero.demo.revenueWeek", v: "1,2 M F" },
  { l: "hero.demo.fittings", v: "5" },
] as const;

export function LandingContent() {
  const { t } = useI18n();
  const backofficeUrl =
    process.env.NEXT_PUBLIC_BACKOFFICE_URL ?? "http://localhost:3000";

  const plans = [
    {
      name: t("plans.free.name"),
      price: t("plans.free.price"),
      period: t("plans.free.period"),
      highlight: false,
      items: [t("plans.free.1"), t("plans.free.2"), t("plans.free.3")],
    },
    {
      name: t("plans.pro.name"),
      price: t("plans.pro.price"),
      period: t("plans.pro.period"),
      highlight: true,
      items: [
        t("plans.pro.1"),
        t("plans.pro.2"),
        t("plans.pro.3"),
        t("plans.pro.4"),
      ],
    },
    {
      name: t("plans.enterprise.name"),
      price: t("plans.enterprise.price"),
      period: t("plans.enterprise.period"),
      highlight: false,
      items: [
        t("plans.enterprise.1"),
        t("plans.enterprise.2"),
        t("plans.enterprise.3"),
        t("plans.enterprise.4"),
      ],
    },
  ];

  return (
    <div>
      <header className="landing-hero flex flex-col">
        <div className="landing-thread top-[16%] left-[-10%]" aria-hidden />
        <div className="landing-thread top-[44%] left-[-20%] opacity-65" aria-hidden />
        <div className="landing-thread top-[68%] left-[-12%] opacity-45" aria-hidden />
        <div className="landing-hero-glow" aria-hidden />
        <div
          className="landing-gold-ring top-[18%] right-[10%] h-36 w-36"
          aria-hidden
        />
        <div
          className="landing-gold-ring bottom-[18%] left-[8%] h-28 w-28"
          aria-hidden
        />

        <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <KayniawluLogo compact />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LocaleSwitcher compact />
            <Link
              href={`${backofficeUrl}/register`}
              className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-text/75 transition hover:text-text sm:inline"
            >
              {t("nav.createWorkshop")}
            </Link>
            <Link
              href={`${backofficeUrl}/`}
              className="landing-cta rounded-full px-6 py-3 text-sm font-bold text-white"
            >
              {t("nav.signIn")}
            </Link>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-6 pb-20 pt-8 text-center lg:pt-16">
          <p
            className="landing-pill landing-rise inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold !text-primary dark:!text-gold"
            style={{ animationDelay: "0.05s" }}
          >
            <span>🇸🇳</span> {t("hero.badge")}
          </p>
          <h1
            className="landing-rise mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
            style={{ animationDelay: "0.12s" }}
          >
            {t("hero.title1")}
            <span className="block bg-gradient-to-r from-primary via-gold to-gold-muted bg-clip-text text-transparent dark:from-[#f2d9a6] dark:via-gold dark:to-[#c9963f]">
              {t("hero.title2")}
            </span>
          </h1>
          <p
            className="landing-rise mt-6 max-w-2xl text-lg text-text/72 md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.subtitle")}
          </p>
          <div
            className="landing-rise mt-10 flex flex-wrap justify-center gap-4"
            style={{ animationDelay: "0.28s" }}
          >
            <Link
              href={`${backofficeUrl}/register`}
              className="landing-cta rounded-2xl px-8 py-4 text-base font-bold text-white"
            >
              {t("hero.cta.access")}
            </Link>
            <a
              href="#offres"
              className="landing-cta-ghost rounded-xl px-8 py-4 text-base font-semibold"
            >
              {t("hero.cta.plans")}
            </a>
          </div>

          <div
            className="landing-float landing-rise relative mt-16 w-full max-w-4xl"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="landing-card overflow-hidden p-2">
              <div className="landing-demo-panel p-6 text-left md:p-8">
                <div className="flex flex-wrap gap-4">
                  {demoStats.map((s) => (
                    <div
                      key={s.l}
                      className="min-w-[120px] flex-1 rounded-[10px] border border-white/10 bg-white/10 p-4 backdrop-blur"
                    >
                      <p className="font-ui text-xs font-medium uppercase tracking-wide text-[#f4efe7]/65">
                        {t(s.l)}
                      </p>
                      <p className="mt-1 font-display text-2xl font-bold text-[#f4efe7]">
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-ui text-sm text-[#f4efe7]/76">
                  {t("hero.demo.caption")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center font-display text-4xl font-bold md:text-5xl">
          {t("features.title1")}{" "}
          <span className="text-gold">{t("features.title2")}</span>
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {featureKeys.map((f, i) => (
            <article
              key={f.title}
              className="landing-card p-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl">{f.emoji}</span>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                {t(f.title)}
              </h3>
              <p className="mt-2 text-text/72">{t(f.desc)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="offres" className="landing-pricing-section py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl font-bold">
            {t("plans.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text/70">
            {t("plans.subtitle")}
          </p>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`landing-card p-8 ${plan.highlight ? "landing-pricing-featured" : ""}`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-gold/22 px-3 py-1 text-xs font-bold text-primary dark:text-gold">
                    {t("plans.popular")}
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 font-display text-4xl font-bold text-gold">
                  {plan.price}
                </p>
                <p className="font-ui text-sm text-text/56">{plan.period}</p>
                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm font-medium">
                      <span className="text-primary dark:text-gold">✓</span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          {t("cta.title")}
        </h2>
        <p className="mt-4 text-lg text-text/70">{t("cta.subtitle")}</p>
        <Link
          href={`${backofficeUrl}/register`}
          className="landing-cta mt-10 inline-flex rounded-xl px-10 py-4 text-lg font-bold text-white"
        >
          {t("cta.button")}
        </Link>
      </section>

      <footer className="border-t border-divider py-10 text-center text-sm text-text/56">
        <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
        <p className="mt-2">
          <Link
            href={`${backofficeUrl}/`}
            className="font-semibold text-primary hover:underline dark:text-gold"
          >
            {t("footer.portal")}
          </Link>
        </p>
      </footer>
    </div>
  );
}
