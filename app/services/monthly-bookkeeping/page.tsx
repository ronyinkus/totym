import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Monthly Bookkeeping for Small Businesses",
  description:
    "Monthly bookkeeping for small businesses: categorization, reconciliation, and clean financial reports delivered every month. QuickBooks-certified.",
  alternates: { canonical: "/services/monthly-bookkeeping" },
  openGraph: {
    title: "Monthly Bookkeeping for Small Businesses",
    description:
      "Clean monthly books, reconciled accounts, and clear financial reports from a QuickBooks-certified bookkeeper.",
    url: "/services/monthly-bookkeeping",
    images: ["/totym-finance-banner.jpg"],
  },
};

export default function MonthlyBookkeepingPage() {
  return (
    <ServicePage
      path="/services/monthly-bookkeeping"
      serviceType="Monthly Bookkeeping"
      breadcrumb="Services / Monthly Bookkeeping"
      headline="Clean books, every month, without thinking about it."
      subhead="For small business owners who want their books handled on a steady monthly cadence: categorized, reconciled, reported, and ready whenever you need them."
      whoForTitle="Who monthly bookkeeping is for."
      whoForBody="You're running a solo business and you need your books maintained consistently, not scrambled together once a year. Maybe you've tried doing it yourself and it fell off. Maybe your business is growing and the admin burden is getting real. Either way, you want a system that runs quietly in the background so you can focus on actual work."
      includedTitle="What's included every month."
      included={[
        {
          title: "Transaction categorization",
          description:
            "Every business transaction reviewed and assigned to the right account, every month.",
        },
        {
          title: "Bank & credit card reconciliation",
          description:
            "Accounts reconciled so your books match your statements, no mystery variances.",
        },
        {
          title: "Monthly financial reports",
          description:
            "Profit & loss and balance sheet delivered in plain English. No accounting degree needed.",
        },
        {
          title: "QuickBooks Online setup & maintenance",
          description:
            "Your chart of accounts kept clean, rules maintained, and software optimized as you grow.",
        },
        {
          title: "Unlimited email support",
          description:
            "Ask questions throughout the month and get same-day answers with no per-minute billing.",
        },
        {
          title: "Year-end tax-ready package",
          description:
            "Financials organized and ready for your CPA every January, no catch-up scramble.",
        },
      ]}
      howTitle="How we'll work together."
      steps={[
        {
          number: "1",
          title: "Onboarding (week 1)",
          description:
            "We connect your QuickBooks, review your chart of accounts, and make sure everything is set up cleanly before any monthly work begins.",
        },
        {
          number: "2",
          title: "Monthly close (by the 10th)",
          description:
            "By the 10th of each month, last month's books are closed, reconciled, and reports delivered to your inbox.",
        },
        {
          number: "3",
          title: "Ongoing support",
          description:
            "Email me anytime with questions. Quick quarterly check-ins to review trends and flag anything worth your attention.",
        },
      ]}
      faqs={[
        {
          question: "How many transactions does monthly service cover?",
          answer:
            "Transaction volume is one of the factors in your custom quote. Most small businesses fall in the standard range, which we'll confirm on our call.",
        },
        {
          question: "Do I need QuickBooks Online?",
          answer:
            "QBO is what I recommend and am certified in, but if you're on Xero, Wave, or something else, let's talk. I can usually make it work.",
        },
        {
          question: "What if my books are currently behind?",
          answer:
            "Very common. We'll start with catch-up bookkeeping to get current, then transition you to the monthly plan. Both get quoted together.",
        },
        {
          question: "Is there a long-term contract?",
          answer:
            "Month-to-month. If the fit isn't right, you can stop any time, though most clients stay long-term.",
        },
      ]}
      finalTitle="Ready to hand off the books?"
      finalBody="Book a free 30-minute call. We'll look at what you have today and what a monthly cadence would actually cost."
    />
  );
}
