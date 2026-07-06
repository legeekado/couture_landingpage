"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Valeur cible, ex. "248", "37" ou "1,2 M F" (suffixe conservé). */
  value: string;
  duration?: number;
  /** Délai avant le démarrage, en millisecondes. */
  delay?: number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/** Compteur animé : monte de 0 vers la valeur cible dès l'affichage. */
export function CountUp({ value, duration = 1600, delay = 0 }: CountUpProps) {
  const match = value.match(/^([\d\s]+(?:,\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1].replace(/\s/g, "").replace(",", ".")) : NaN;
  const suffix = match ? match[2] : "";
  const decimals = match?.[1].includes(",") ? match[1].split(",")[1].length : 0;

  const [display, setDisplay] = useState(Number.isNaN(target) ? value : "0");
  const frame = useRef<number>(0);

  useEffect(() => {
    if (Number.isNaN(target)) return;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const current = target * easeOutCubic(progress);
      setDisplay(
        current.toFixed(decimals).replace(".", ",") + suffix,
      );
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };

    const timer = setTimeout(() => {
      frame.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{Number.isNaN(target) ? value : display}</>;
}
