export const API_HOST =
  process.env.NEXT_PUBLIC_API_HOST ?? "http://127.0.0.1:8000";

export interface PublicOffer {
  id: number;
  nom: string;
  slug: string;
  description: string | null;
  plan: string;
  prix_fcfa: number;
  prix_fcfa_fr: string;
  duree_jours: number;
  jours_grace: number;
  valid_from_fr: string | null;
  valid_until_fr: string | null;
  mise_en_avant: boolean;
  features: string[];
  ordre: number;
}

export async function fetchPublicOffers(): Promise<PublicOffer[]> {
  const response = await fetch(`${API_HOST}/api/public/offers`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de charger les offres.");
  }

  const body = (await response.json()) as { offers: PublicOffer[] };
  return body.offers ?? [];
}
