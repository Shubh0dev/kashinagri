import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#11110F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "KashiNagri — Discover Kashi",
  description: "Discover the places, food, culture, experiences and hidden stories of Kashi. A city you don't just visit. You experience.",
  keywords: ["Kashi", "Varanasi", "Travel Kashi", "Ghats of Varanasi", "Banaras", "Ganga Aarti", "Kashi Food", "Kashi Walks"],
  openGraph: {
    title: "KashiNagri — Discover Kashi",
    description: "Discover the places, food, culture, experiences and hidden stories of Kashi.",
    type: "website",
    locale: "en_IN",
    siteName: "KashiNagri",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-ivory text-charcoal-surface font-sans selection:bg-saffron selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
