import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";

import { I18nProvider } from "@/lib/i18n/context";
import { metaForLocale } from "@/lib/i18n/messages";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  ...metaForLocale("fr"),
  applicationName: "Kayñiawlu",
  icons: {
    icon: "/favicon.svg",
    apple: "/kayniawlu-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
