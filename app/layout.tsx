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
      "TOTYM Finance | Bookkeeping & Tax Services for Small Businesses",
    template: "%s | TOTYM Finance",
  },
  description:
    "TOTYM Finance provides QuickBooks-certified bookkeeping, tax-ready financials, and catch-up bookkeeping for small business owners in Mason, Ohio and nationwide.",
  metadataBase: new URL("https://www.totymfinance.com"),
  openGraph: {
    title: "TOTYM Finance | Financial clarity for small business owners",
    description:
      "Bookkeeping and tax-ready financials for small businesses in Mason, Ohio and nationwide.",
    url: "https://www.totymfinance.com",
    siteName: "TOTYM Finance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/totym-finance-banner.jpg",
        width: 782,
        height: 135,
        alt: "TOTYM Finance — financial clarity and peace of mind for small business owners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOTYM Finance | Bookkeeping & Tax Services",
    description:
      "Financial clarity and peace of mind for small business owners.",
    images: ["/totym-finance-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "Organization"],
              name: "TOTYM Finance",
              legalName: "TOTYM Bookkeeping Services LLC",
              alternateName: "TOTYM Bookkeeping",
              url: "https://www.totymfinance.com",
              logo: "https://www.totymfinance.com/totym-finance-logo.jpg",
              image: "https://www.totymfinance.com/totym-finance-banner.jpg",
              description:
                "QuickBooks-certified bookkeeping, catch-up bookkeeping, and tax-ready financials for small business owners.",
              telephone: "+1-513-360-8842",
              email: "yinks@totymservices.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mason",
                addressRegion: "OH",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", name: "Mason" },
                { "@type": "State", name: "Ohio" },
                { "@type": "Country", name: "United States" },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-513-360-8842",
                contactType: "customer service",
                email: "yinks@totymservices.com",
                availableLanguage: "English",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Bookkeeping services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Monthly bookkeeping",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Catch-up bookkeeping",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tax-ready financials",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
