import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Catch-Up Bookkeeping for Solopreneurs",
  description:
    "Behind on your books? Catch-up bookkeeping for solopreneurs from a QuickBooks-certified bookkeeper. Flat-fee pricing, no judgment, most projects complete in 2-4 weeks.",
};

export default function CatchUpBookkeepingPage() {
  return (
    <ServicePage
      breadcrumb="Services / Catch-Up Bookkeeping"
      headline="However far behind you are, we can fix it."
      subhead="Three months behind. Twelve months behind. Never started. The books have gotten away from you — and you need them cleaned up without judgment, without a lecture, and without dragging it out."
      whoForTitle="Who catch-up bookkeeping is for."
      whoForBody="You're behind. Maybe tax season is coming and you're panicking. Maybe a lender asked for financials and you don't have them. Maybe you've been meaning to deal with it for months and it's finally time. Whatever got you here, you need someone to take the pile of receipts, bank statements, and half-started QuickBooks files and turn them into clean, usable books — fast."
      includedTitle="What catch-up bookkeeping includes."
      included={[
        {
          title: "Full historical review",
          description:
            "Every transaction for the catch-up period reviewed, categorized, and recorded properly.",
        },
        {
          title: "Account reconciliation",
          description:
            "Bank and credit card statements reconciled month by month until your books match reality.",
        },
        {
          title: "Chart of accounts cleanup",
          description:
            "QuickBooks categories reorganized so everything makes sense going forward.",
        },
        {
          title: "Historical financial reports",
          description:
            "P&L and balance sheet for the catch-up period — useful for taxes, loans, or your own clarity.",
        },
        {
          title: "Transition plan",
          description:
            "Optional handoff to monthly service so you don't fall behind again.",
        },
        {
          title: "Zero judgment",
          description:
            "No lectures, no \"you should have done this sooner.\" Just the work, done properly.",
        },
      ]}
      howTitle="How catch-up works."
      steps={[
        {
          number: "1",
          title: "Scope the mess",
          description:
            "On our consultation, we'll look at what period needs catching up and the state of your current records. I'll send a flat-fee quote based on scope.",
        },
        {
          number: "2",
          title: "Gather records",
          description:
            "You share bank statements, credit card statements, and any receipts or records through secure document upload. I'll tell you exactly what I need — no overwhelming checklists.",
        },
        {
          number: "3",
          title: "The work gets done",
          description:
            "Most catch-up projects complete in 2-4 weeks. You get status updates, not silence. At the end, you have clean books and organized financials ready to use.",
        },
      ]}
      faqs={[
        {
          question: "I'm multiple years behind. Can you still help?",
          answer:
            "Yes. Multi-year catch-up is common, especially around tax filings. We'll scope it year by year and quote accordingly.",
        },
        {
          question: "What does catch-up cost?",
          answer:
            "Catch-up is priced as a flat-fee project based on the period, transaction volume, and state of existing records. We'll scope and quote during the free consultation.",
        },
        {
          question: "What records do I need to have?",
          answer:
            "At minimum, bank and credit card statements for the catch-up period. If you have QuickBooks data, even half-finished, that helps. Don't worry if it's messy — that's normal.",
        },
        {
          question: "How fast can you turn it around?",
          answer:
            "Most projects close in 2-4 weeks once records are in hand. Larger multi-year projects take longer but can be prioritized if there's a tax deadline.",
        },
      ]}
      finalTitle="Let's get you current."
      finalBody="Book a free 20-minute call. Walk me through what you have, and I'll tell you exactly what it'll take to get cleaned up."
    />
  );
}
