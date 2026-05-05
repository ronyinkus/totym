import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "TOTYM Bookkeeping Services LLC — Bookkeeping for solopreneurs in Mason, OH",
    template: "%s | TOTYM Bookkeeping Services LLC",
  },
  description:
    "QuickBooks-certified bookkeeping for solopreneurs. Based in Mason, Ohio. Serving clients nationwide. Free consultations, no contracts, no surprise fees.",
  openGraph: {
    title: "TOTYM Bookkeeping Services LLC — Bookkeeping for solopreneurs",
    description:
      "QuickBooks-certified bookkeeping for solopreneurs. Based in Mason, Ohio. Serving clients nationwide.",
    url: "https://totymservices.com",
    siteName: "TOTYM Bookkeeping Services LLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
