"use client";

import { useEffect, useState } from "react";

import { useTheme } from "@/lib/theme/context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Mode clair" : "Mode sombre"}
      className="landing-pill inline-flex h-9 w-9 items-center justify-center rounded-full text-sm"
    >
      {mounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
    </button>
  );
}
