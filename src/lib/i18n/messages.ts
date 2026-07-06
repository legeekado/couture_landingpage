export type Locale = "wo" | "fr" | "en";

export type LocaleOption = {
  code: Locale;
  label: string;
  flag: string;
};

/** Ordre : Wolof, Français, English. Défaut : français. */
export const locales: LocaleOption[] = [
  { code: "wo", label: "Wolof", flag: "🇸🇳" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

type Messages = Record<string, string>;

const fr: Messages = {
  "meta.title": "Kayñiawlu — La couture sénégalaise en version premium",
  "meta.description":
    "SaaS couture premium pour ateliers au Sénégal : clients, mesures, commandes, équipe multi-points de vente.",
  "nav.createWorkshop": "Créer un atelier",
  "nav.signIn": "Se connecter",
  "hero.badge": "Maison digitale pensée pour les couturiers du Sénégal",
  "hero.title1": "L'élégance de votre atelier,",
  "hero.title2": "signée Kayñiawlu",
  "hero.subtitle":
    "Kayñiawlu vient coudre tradition et technologie : clients, mesures, commandes, équipe et abonnements — sur mobile et web, en français, wolof et anglais.",
  "hero.cta.access": "Demander un accès gratuit",
  "hero.cta.plans": "Voir les offres",
  "hero.demo.clients": "Clients",
  "hero.demo.ordersWeek": "Commandes semaine",
  "hero.demo.revenueWeek": "CA semaine",
  "hero.demo.fittings": "Essayages",
  "hero.demo.caption": "Tableau de bord atelier — données de démo",
  "features.title1": "Tout votre métier,",
  "features.title2": "une seule plateforme",
  "features.1.title": "Fiches mesures vivantes",
  "features.1.desc":
    "Enregistrez taille, hanche, longueur… en un clin d'œil. Retrouvez-les sur chaque commande.",
  "features.2.title": "Commandes & livraisons",
  "features.2.desc":
    "Du devis à la livraison : statuts, acomptes, rappels automatiques avant l'essayage.",
  "features.3.title": "Multi-points de vente",
  "features.3.desc":
    "Médina, Almadies, Touba — une équipe, plusieurs boutiques, un seul tableau de bord.",
  "features.4.title": "Abonnements flexibles",
  "features.4.desc":
    "Offres limitées dans le temps, rappels par email, période de grâce configurable.",
  "plans.title": "Des offres qui respirent le terroir",
  "plans.subtitle":
    "Promotions limitées, rappels par email avant expiration, période de grâce paramétrable — votre atelier ne s'arrête jamais brutalement.",
  "plans.popular": "Le plus populaire",
  "plans.free.name": "Gratuit",
  "plans.free.price": "0 F",
  "plans.free.period": "pour démarrer",
  "plans.free.1": "1 point de vente",
  "plans.free.2": "2 comptes",
  "plans.free.3": "Clients & mesures",
  "plans.pro.name": "Pro",
  "plans.pro.price": "25 000 F",
  "plans.pro.period": "/ mois",
  "plans.pro.1": "5 points de vente",
  "plans.pro.2": "10 comptes",
  "plans.pro.3": "Rappels livraison",
  "plans.pro.4": "Support prioritaire",
  "plans.enterprise.name": "Entreprise",
  "plans.enterprise.price": "Sur mesure",
  "plans.enterprise.period": "multi-sites",
  "plans.enterprise.1": "Illimité",
  "plans.enterprise.2": "Formation incluse",
  "plans.enterprise.3": "Account manager",
  "plans.enterprise.4": "API & exports",
  "cta.title": "Prêt à digitaliser votre atelier ?",
  "cta.subtitle":
    "Rejoignez les couturiers qui ne perdent plus ni une mesure, ni une livraison, ni un client.",
  "cta.button": "Commencer avec Kayñiawlu",
  "footer.rights": "© {year} Kayñiawlu · Dakar, Sénégal",
  "footer.portal": "Espace atelier & admin →",
};

const en: Messages = {
  "meta.title": "Kayñiawlu — The premium tailoring cloud atelier",
  "meta.description":
    "Premium couture SaaS for tailors in Senegal: clients, measurements, orders, and multi-location teams.",
  "nav.createWorkshop": "Create a workshop",
  "nav.signIn": "Sign in",
  "hero.badge": "Designed for Senegalese couture ateliers",
  "hero.title1": "Where couture heritage",
  "hero.title2": "meets Kayñiawlu precision",
  "hero.subtitle":
    "Kayñiawlu blends craftsmanship with modern operations: clients, measurements, orders, teams, and subscriptions — across mobile and web.",
  "hero.cta.access": "Request free access",
  "hero.cta.plans": "View plans",
  "hero.demo.clients": "Clients",
  "hero.demo.ordersWeek": "Orders this week",
  "hero.demo.revenueWeek": "Weekly revenue",
  "hero.demo.fittings": "Fittings",
  "hero.demo.caption": "Workshop dashboard — demo data",
  "features.title1": "Your whole craft,",
  "features.title2": "one platform",
  "features.1.title": "Living measurement sheets",
  "features.1.desc":
    "Record waist, hips, length… in a snap. Find them on every order.",
  "features.2.title": "Orders & deliveries",
  "features.2.desc":
    "From quote to delivery: statuses, deposits, automatic reminders before fittings.",
  "features.3.title": "Multi-location",
  "features.3.desc":
    "Médina, Almadies, Touba — one team, several shops, one dashboard.",
  "features.4.title": "Flexible subscriptions",
  "features.4.desc":
    "Time-limited offers, email reminders, configurable grace period.",
  "plans.title": "Plans rooted in your reality",
  "plans.subtitle":
    "Limited promotions, email reminders before expiry, configurable grace period — your workshop never stops abruptly.",
  "plans.popular": "Most popular",
  "plans.free.name": "Free",
  "plans.free.price": "0 F",
  "plans.free.period": "to get started",
  "plans.free.1": "1 sales point",
  "plans.free.2": "2 accounts",
  "plans.free.3": "Clients & measurements",
  "plans.pro.name": "Pro",
  "plans.pro.price": "25,000 F",
  "plans.pro.period": "/ month",
  "plans.pro.1": "5 sales points",
  "plans.pro.2": "10 accounts",
  "plans.pro.3": "Delivery reminders",
  "plans.pro.4": "Priority support",
  "plans.enterprise.name": "Enterprise",
  "plans.enterprise.price": "Custom",
  "plans.enterprise.period": "multi-site",
  "plans.enterprise.1": "Unlimited",
  "plans.enterprise.2": "Training included",
  "plans.enterprise.3": "Account manager",
  "plans.enterprise.4": "API & exports",
  "cta.title": "Ready to digitize your workshop?",
  "cta.subtitle":
    "Join tailors who no longer lose a measurement, a delivery, or a client.",
  "cta.button": "Get started with Kayñiawlu",
  "footer.rights": "© {year} Kayñiawlu · Dakar, Senegal",
  "footer.portal": "Workshop & admin portal →",
};

const wo: Messages = {
  "meta.title": "Kayñiawlu — Atelier bu couture premium ci numérique",
  "meta.description":
    "SaaS premium ngir couturier yi ci Senegaal : client, mesure, commande ak équipe multi-point de vente.",
  "nav.createWorkshop": "Sos atelier",
  "nav.signIn": "Dugg",
  "hero.badge": "Defar nañu ko ngir atelier couture yi ci Senegaal",
  "hero.title1": "Xarnu couture ak sunu cosaan,",
  "hero.title2": "wóor ci Kayñiawlu",
  "hero.subtitle":
    "Kayñiawlu dafa boole cosaanu couture ak xam-xamu tey: client, mesure, commande, équipe ak abonnement — ci mobile ak web.",
  "hero.cta.access": "Laaj accès bu gratis",
  "hero.cta.plans": "Xool offer yi",
  "hero.demo.clients": "Client yi",
  "hero.demo.ordersWeek": "Commande weer wi",
  "hero.demo.revenueWeek": "CA weer wi",
  "hero.demo.fittings": "Essayage yi",
  "hero.demo.caption": "Tableau de bord atelier — donnée demo",
  "features.title1": "Sa liggéey yépp,",
  "features.title2": "ben platform",
  "features.1.title": "Fiche mesure yu dund",
  "features.1.desc":
    "Bind taille, hanche, longueur… ci ay tikk. Gis leen ci commande bu nekk.",
  "features.2.title": "Commande & livraison",
  "features.2.desc":
    "Ci devis ba livraison : statut, acompte, rappel bu automatique bala essayage.",
  "features.3.title": "Multi-point de vente",
  "features.3.desc":
    "Médina, Almadies, Touba — ben équipe, ay boutique yu bari, ben tableau de bord.",
  "features.4.title": "Abonnement yu yomb",
  "features.4.desc":
    "Offer yu am benn waxtu, rappel ci email, période de grâce bu mën a soppi.",
  "plans.title": "Offer yi jëmm ci sunu réew",
  "plans.subtitle":
    "Promotion yu am benn waxtu, rappel ci email bala expiration, période de grâce — sa atelier du tàmbaliwul ci lu gaaw.",
  "plans.popular": "Li gën a sopp",
  "plans.free.name": "Gratis",
  "plans.free.price": "0 F",
  "plans.free.period": "ngir tàmbali",
  "plans.free.1": "1 point de vente",
  "plans.free.2": "2 compte",
  "plans.free.3": "Client & mesure",
  "plans.pro.name": "Pro",
  "plans.pro.price": "25 000 F",
  "plans.pro.period": "/ weer",
  "plans.pro.1": "5 point de vente",
  "plans.pro.2": "10 compte",
  "plans.pro.3": "Rappel livraison",
  "plans.pro.4": "Support bu gaaw",
  "plans.enterprise.name": "Entreprise",
  "plans.enterprise.price": "Ci sa yoon",
  "plans.enterprise.period": "multi-site",
  "plans.enterprise.1": "Amul limit",
  "plans.enterprise.2": "Formation am na",
  "plans.enterprise.3": "Account manager",
  "plans.enterprise.4": "API & export",
  "cta.title": "Paré nga digitalise sa atelier ?",
  "cta.subtitle":
    "Dajalel ak couturier yi fi du fatte mesure, livraison walla client.",
  "cta.button": "Tàmbali ak Kayñiawlu",
  "footer.rights": "© {year} Kayñiawlu · Dakar, Senegaal",
  "footer.portal": "Espace atelier & admin →",
};

const catalogs: Record<Locale, Messages> = { fr, en, wo };

export function t(
  locale: Locale,
  key: string,
  vars?: Record<string, string | number>,
): string {
  let text = catalogs[locale]?.[key] ?? catalogs.fr[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replaceAll(`{${k}}`, String(v));
    }
  }
  return text;
}

export function metaForLocale(locale: Locale) {
  return {
    title: t(locale, "meta.title"),
    description: t(locale, "meta.description"),
  };
}
