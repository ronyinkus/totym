import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TOTYM Finance",
    short_name: "TOTYM Finance",
    description:
      "Bookkeeping and tax-ready financials for small business owners.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#378ADD",
    icons: [
      {
        src: "/totym-finance-logo.jpg",
        sizes: "255x214",
        type: "image/jpeg",
      },
    ],
  };
}
