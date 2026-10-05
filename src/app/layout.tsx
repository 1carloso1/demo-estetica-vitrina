import type { Metadata, Viewport } from "next";
import { Figtree, Young_Serif } from "next/font/google";
import tailwindConfig from "../../tailwind.config";
import { site } from "@/lib/data/site";
import "./globals.css";

const display = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  // DEMO: no debe indexarse
  robots: { index: false, follow: false },
};

// El themeColor sale de la paleta: un solo lugar donde cambiar el color de fondo.
const brandColors = (
  tailwindConfig.theme?.extend?.colors as { brand: { mist: string } }
).brand;

export const viewport: Viewport = {
  themeColor: brandColors.mist,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.lang} className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only rounded-md bg-brand-ink px-4 py-2 text-brand-mist focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          {site.ui.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
