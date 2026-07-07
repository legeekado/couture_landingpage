"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-stone-50 px-6 text-stone-900">
        <h1 className="text-2xl font-semibold">Une erreur est survenue</h1>
        <p className="max-w-md text-center text-stone-600">
          L&apos;incident a été signalé. Vous pouvez réessayer.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-xl bg-emerald-950 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Réessayer
        </button>
      </body>
    </html>
  );
}
