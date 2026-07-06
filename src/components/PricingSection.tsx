"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { fetchPublicOffers, type PublicOffer } from "@/lib/api";
import { useI18n } from "@/lib/i18n/context";

import { Reveal } from "./Reveal";

interface PricingSectionProps {
  backofficeUrl: string;
}

const planLabelKey: Record<string, string> = {
  pro: "plans.plan.pro",
  entreprise: "plans.plan.enterprise",
  gratuit: "plans.plan.free",
};

export function PricingSection({ backofficeUrl }: PricingSectionProps) {
  const { t } = useI18n();
  const [offers, setOffers] = useState<PublicOffer[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPublicOffers()
      .then(setOffers)
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <section id="offres" className="landing-pricing-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-bold">
            {t("plans.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text/70">
            {t("plans.subtitle")}
          </p>
        </Reveal>

        {offers === null && !error && (
          <div className="mt-14 flex justify-center py-16">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gold border-t-transparent" />
          </div>
        )}

        {error && (
          <p className="mt-10 text-center text-sm font-semibold text-danger">
            {error}
          </p>
        )}

        {offers && offers.length === 0 && (
          <p className="mt-10 text-center text-sm text-text/60">
            {t("plans.empty")}
          </p>
        )}

        {offers && offers.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer, i) => (
              <Reveal key={offer.id} delay={i * 130}>
                <article
                  className={`landing-card flex h-full flex-col p-8 ${
                    offer.mise_en_avant ? "landing-pricing-featured" : ""
                  }`}
                >
                  {offer.mise_en_avant && (
                    <span className="mb-4 inline-block rounded-full bg-gold/22 px-3 py-1 text-xs font-bold text-primary dark:text-gold">
                      {t("plans.popular")}
                    </span>
                  )}
                  <span className="text-xs font-bold uppercase tracking-wide text-primary/70 dark:text-gold/80">
                    {t(planLabelKey[offer.plan] ?? "plans.plan.pro")}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold">{offer.nom}</h3>
                  {offer.description && (
                    <p className="mt-2 text-sm text-text/65 line-clamp-2">
                      {offer.description}
                    </p>
                  )}
                  <p className="mt-4 font-display text-4xl font-bold text-gold">
                    {offer.prix_fcfa_fr}
                  </p>
                  <p className="font-ui text-sm text-text/56">
                    {t("plans.periodDays", { days: offer.duree_jours })}
                    {offer.jours_grace > 0
                      ? ` · ${t("plans.graceDays", { days: offer.jours_grace })}`
                      : ""}
                  </p>
                  {(offer.valid_from_fr || offer.valid_until_fr) && (
                    <p className="mt-2 text-xs font-semibold text-text/50">
                      {offer.valid_from_fr ?? "…"} → {offer.valid_until_fr ?? "∞"}
                    </p>
                  )}
                  <ul className="mt-6 flex-1 space-y-3">
                    {(offer.features ?? []).map((item) => (
                      <li key={item} className="flex gap-2 text-sm font-medium">
                        <span className="landing-check text-primary dark:text-gold">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`${backofficeUrl}/register`}
                    className="landing-cta mt-8 inline-flex justify-center rounded-xl px-6 py-3 text-sm font-bold text-white"
                  >
                    {t("plans.cta")}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
