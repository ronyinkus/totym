import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Tax-Ready Financials for Small Businesses",
  description:
    "Year-end financials prepared the way CPAs actually want them. QuickBooks-certified bookkeeping for small businesses — so your tax filing is fast, accurate, and doesn't eat your January.",
};

export default function TaxReadyFinancialsPage() {
  return (
    <ServicePage
      breadcrumb="Services / Tax-Ready Financials"
      headline="Your CPA's new favorite client."
      subhead="Year-end financials prepared exactly the way tax preparers want them — so your filing is fast, your CPA isn't chasing you for documents, and January doesn't eat your whole month."
      whoForTitle="Who tax-ready financials are for."
      whoForBody={`You already have a CPA or tax preparer — or you're about to hire one — and you want year-end financials handed over in a format they can actually use. No mystery entries, no "what is this transaction?" emails, no scramble for missing receipts. Just a complete, organized package that makes your tax filing a non-event.`}
      includedTitle="What's included in your year-end package."
      included={[
        {
          title: "Full-year P&L and balance sheet",
          description:
            "Clean, reconciled financials covering the full tax year, ready for your CPA to work from.",
        },
        {
          title: "Categorized expense summary",
          description:
            "Expenses organized by Schedule C or business return categories so nothing falls through.",
        },
        {
          title: "Mileage & home office documentation",
          description:
            "Supporting documentation organized for common small-business deductions.",
        },
        {
          title: "1099 prep support",
          description:
            "Contractor payment reports pulled and ready for 1099 filing by the deadline.",
        },
        {
          title: "CPA handoff",
          description:
            "Secure transfer of everything your preparer needs — and answers to their follow-up questions.",
        },
        {
          title: "CPA referrals if needed",
          description:
            "Don't have a tax preparer? I can connect you with CPAs I trust who work well with small businesses.",
        },
      ]}
      howTitle="How the year-end package works."
      steps={[
        {
          number: "1",
          title: "Review your year",
          description:
            "We assess the state of your books. If you've been a monthly client, we're nearly done already. If not, we scope what catch-up is needed first.",
        },
        {
          number: "2",
          title: "Prepare the package",
          description:
            "I reconcile, close out the year, pull supporting documentation, and compile everything into a format your CPA will thank you for.",
        },
        {
          number: "3",
          title: "Hand off and follow through",
          description:
            "Package goes to you and (if you want) directly to your CPA. I stay available to answer their questions so you don't have to play middleman.",
        },
      ]}
      faqs={[
        {
          question: "Do you file taxes?",
          answer:
            "No — I'm a certified bookkeeper, not a CPA. I prepare tax-ready financials that your CPA or tax preparer uses to file. If you don't have one, I'm happy to refer you.",
        },
        {
          question: "When should I start this process?",
          answer:
            "Ideally in January or early February. The earlier we start, the less pressure during filing season. Late filers (closer to April or on extension) are also welcome.",
        },
        {
          question: "What if my books are a mess?",
          answer:
            "We'll start with catch-up bookkeeping to clean up the year, then prepare the tax-ready package on top of that. Both get scoped and quoted together.",
        },
        {
          question: "Can you work directly with my CPA?",
          answer:
            "Yes. With your permission, I handle all communication with your CPA during tax prep — you stay out of the email chain unless decisions need your input.",
        },
      ]}
      finalTitle="Make this tax season easy."
      finalBody="Book a free 30-minute call. We'll look at where your books stand and plan a tax-ready timeline that actually works."
    />
  );
}
