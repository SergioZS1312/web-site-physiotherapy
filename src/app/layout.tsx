import type { Metadata } from "next";
import { JetBrains_Mono, Oswald, Sora } from "next/font/google";
import { ScrollProvider } from "../components/layout/ScrollProvider";
import Analytics from "@/components/sections/Analytics";
import SchemaOrg from "@/components/sections/SchemaOrg";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.tudominio.com"; // ← tu URL
const BUSINESS = "Fisioterapia Tu Negocio"; // ← nombre del negocio
const CITY = "Bogotá"; // ← tu ciudad
const DESCRIPTION = `Centro de fisioterapia en ${CITY}. Atendemos fisioterapia deportiva, terapia manual, rehabilitación física, electroterapia, masoterapia y rehabilitación postoperatoria. Agenda tu cita hoy.`;

export const metadata: Metadata = {
  // ── Básicos ────────────────────────────────────────────────────────────────
  title: {
    default: `${BUSINESS} | Fisioterapia en ${CITY}`,
    template: `%s | ${BUSINESS}`,
  },
  description: DESCRIPTION,
  keywords: [
    `fisioterapia ${CITY}`,
    `fisioterapeuta ${CITY}`,
    "terapia manual",
    "rehabilitación física",
    "fisioterapia deportiva",
    "masoterapia",
    "electroterapia",
    "rehabilitación postoperatoria",
    BUSINESS,
  ],
  authors: [{ name: BUSINESS }],
  creator: BUSINESS,
  robots: { index: true, follow: true },

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: { canonical: SITE_URL },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: BUSINESS,
    title: `${BUSINESS} | Fisioterapia en ${CITY}`,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`, // ← sube una imagen 1200x630px a /public
        width: 1200,
        height: 630,
        alt: `${BUSINESS} — Fisioterapia en ${CITY}`,
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS} | Fisioterapia en ${CITY}`,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },

  // ── Verificación (opcional) ────────────────────────────────────────────────
  // verification: {
  //   google: "TU_CODIGO_DE_VERIFICACION_GOOGLE_SEARCH_CONSOLE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${oswald.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ScrollProvider>
          {/* <Analytics /> */}
          {/* <SchemaOrg /> */}
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
