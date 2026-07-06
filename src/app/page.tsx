import Link from "next/link";

const features = [
  {
    title: "Fiches mesures vivantes",
    desc: "Enregistrez taille, hanche, longueur… en un clin d'œil. Retrouvez-les sur chaque commande.",
    emoji: "📐",
  },
  {
    title: "Commandes & livraisons",
    desc: "Du devis à la livraison : statuts, acomptes, rappels automatiques avant l'essayage.",
    emoji: "✂️",
  },
  {
    title: "Multi-points de vente",
    desc: "Médina, Almadies, Touba — une équipe, plusieurs boutiques, un seul tableau de bord.",
    emoji: "📍",
  },
  {
    title: "Abonnements flexibles",
    desc: "Offres limitées dans le temps, rappels par email, période de grâce configurable.",
    emoji: "⭐",
  },
];

const plans = [
  {
    name: "Gratuit",
    price: "0 F",
    period: "pour démarrer",
    highlight: false,
    items: ["1 point de vente", "2 comptes", "Clients & mesures"],
  },
  {
    name: "Pro",
    price: "25 000 F",
    period: "/ mois",
    highlight: true,
    items: ["5 points de vente", "10 comptes", "Rappels livraison", "Support prioritaire"],
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    period: "multi-sites",
    highlight: false,
    items: ["Illimité", "Formation incluse", "Account manager", "API & exports"],
  },
];

export default function LandingPage() {
  const backofficeUrl =
    process.env.NEXT_PUBLIC_BACKOFFICE_URL ?? "http://localhost:3000";

  return (
    <div>
      <header className="landing-hero flex flex-col">
        <div className="landing-thread top-[18%]" aria-hidden />
        <div className="landing-thread top-[42%] opacity-50" aria-hidden />

        <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e7bc5f] to-[#b8842a] font-display text-lg font-bold text-white shadow-lg">
              K
            </div>
            <span className="font-display text-2xl font-bold">Kalmy</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`${backofficeUrl}/register`}
              className="hidden rounded-full px-5 py-2.5 text-sm font-bold text-ink/80 transition hover:text-ink sm:inline"
            >
              Créer un atelier
            </Link>
            <Link
              href={`${backofficeUrl}/`}
              className="landing-cta rounded-full px-6 py-3 text-sm font-bold text-white"
            >
              Se connecter
            </Link>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex flex-1 w-full max-w-6xl flex-col items-center px-6 pb-20 pt-8 text-center lg:pt-16">
          <p
            className="landing-rise inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-sm font-bold text-emerald"
            style={{ animationDelay: "0.05s" }}
          >
            <span>🇸🇳</span> Conçu pour les couturiers du Sénégal
          </p>
          <h1
            className="landing-rise mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
            style={{ animationDelay: "0.12s" }}
          >
            Cousu avec fierté,
            <span className="block bg-gradient-to-r from-gold-deep via-gold to-emerald bg-clip-text text-transparent">
              piloté avec Kalmy
            </span>
          </h1>
          <p
            className="landing-rise mt-6 max-w-2xl text-lg text-ink/70 md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Le SaaS qui transforme votre atelier : clients, mesures, commandes,
            équipe et abonnements — sur mobile et web, en français et wolof.
          </p>
          <div
            className="landing-rise mt-10 flex flex-wrap justify-center gap-4"
            style={{ animationDelay: "0.28s" }}
          >
            <Link
              href={`${backofficeUrl}/register`}
              className="landing-cta rounded-2xl px-8 py-4 text-base font-bold text-white"
            >
              Demander un accès gratuit
            </Link>
            <a
              href="#offres"
              className="rounded-2xl border border-ink/15 bg-white/60 px-8 py-4 text-base font-bold backdrop-blur transition hover:border-ink/30"
            >
              Voir les offres
            </a>
          </div>

          <div
            className="landing-float landing-rise relative mt-16 w-full max-w-4xl"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="landing-card overflow-hidden p-2">
              <div className="rounded-[1.25rem] bg-gradient-to-br from-ink to-[#2a2545] p-6 text-left text-cream md:p-8">
                <div className="flex flex-wrap gap-4">
                  {[
                    { l: "Clients", v: "248" },
                    { l: "Commandes semaine", v: "37" },
                    { l: "CA semaine", v: "1,2 M F" },
                    { l: "Essayages", v: "5" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="min-w-[120px] flex-1 rounded-2xl bg-white/10 p-4 backdrop-blur"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">
                        {s.l}
                      </p>
                      <p className="mt-1 font-display text-2xl font-bold">{s.v}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-cream/70">
                  Tableau de bord atelier — données de démo
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center font-display text-4xl font-bold md:text-5xl">
          Tout votre métier,{" "}
          <span className="text-gold-deep">une seule plateforme</span>
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="landing-card p-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl">{f.emoji}</span>
              <h3 className="mt-4 font-display text-2xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-ink/65">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="offres" className="bg-gradient-to-b from-transparent to-[#f1ead9]/80 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl font-bold">
            Des offres qui respirent le terroir
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink/65">
            Promotions limitées, rappels par email avant expiration, période de
            grâce paramétrable — votre atelier ne s&apos;arrête jamais brutalement.
          </p>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`landing-card p-8 ${plan.highlight ? "landing-pricing-featured" : ""}`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold-deep">
                    Le plus populaire
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 font-display text-4xl font-bold text-gold-deep">
                  {plan.price}
                </p>
                <p className="text-sm text-ink/55">{plan.period}</p>
                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm font-semibold">
                      <span className="text-emerald">✓</span> {item}
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
          Prêt à digitaliser votre atelier ?
        </h2>
        <p className="mt-4 text-lg text-ink/65">
          Rejoignez les couturiers qui ne perdent plus ni une mesure, ni une
          livraison, ni un client.
        </p>
        <Link
          href={`${backofficeUrl}/register`}
          className="landing-cta mt-10 inline-flex rounded-2xl px-10 py-4 text-lg font-bold text-white"
        >
          Commencer avec Kalmy
        </Link>
      </section>

      <footer className="border-t border-ink/10 py-10 text-center text-sm text-ink/50">
        <p>© {new Date().getFullYear()} Kalmy · Dakar, Sénégal</p>
        <p className="mt-2">
          <Link href={`${backofficeUrl}/`} className="font-bold text-gold-deep hover:underline">
            Espace atelier & admin →
          </Link>
        </p>
      </footer>
    </div>
  );
}
