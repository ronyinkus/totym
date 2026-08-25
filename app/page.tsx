import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TypewriterHeading from "@/components/TypewriterHeading";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue-wash">
        <div className="container-wide py-16 md:py-20">
          <div className="mb-8 overflow-hidden rounded-xl border border-brand-blue-light bg-white shadow-sm">
            <Image
              src="/totym-finance-banner.jpg"
              alt="TOTYM Finance — financial clarity and peace of mind for small business owners"
              width={782}
              height={135}
              priority
              sizes="(max-width: 768px) 100vw, 782px"
              className="h-auto w-full"
            />
          </div>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-blue-light text-brand-blue-mid text-xs font-medium mb-5">
                QuickBooks Certified ProAdvisor
              </div>
              <TypewriterHeading
                text={"Bookkeeping for small business owners who\u2019d rather be doing literally anything else."}
                className="font-serif text-4xl md:text-5xl leading-[1.1] font-medium text-brand-navy mb-5"
              />

              <p className="text-[15px] leading-[1.7] text-slate-600 mb-7 max-w-lg">
                QuickBooks-certified bookkeeping that keeps your books clean,
                your taxes ready, and your weekends yours. Based in Mason,
                Ohio. Serving small businesses nationwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book a free consultation
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/pricing" className="btn-secondary">
                  How I price
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-blue-pale">
              <Image
                src="/yinks-profile.jpg"
                alt="Yinks, founder of TOTYM Finance"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container-wide py-4 flex flex-wrap justify-around gap-4 text-xs text-slate-500">
          <TrustItem text="QuickBooks Certified" />
          <TrustItem text="Based in Mason, OH" />
          <TrustItem text="Clients nationwide" />
          <TrustItem text="Free consultation" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mb-4 max-w-xl">
            You didn&apos;t start your business to become an accountant.
          </h2>
          <p className="text-[15px] leading-[1.75] text-slate-600 max-w-2xl">
            You&apos;re running the whole operation — clients, deliverables,
            marketing, inbox, invoicing, taxes, and somewhere in there, you&apos;re
            supposed to keep clean books. Most small business owners come to us with
            some version of the same story: a shoebox of receipts, a
            QuickBooks account they opened but never really set up, or a
            spreadsheet that stopped making sense six months ago.
          </p>
          <p className="text-[15px] leading-[1.75] text-brand-navy font-medium mt-4">
            That&apos;s normal. That&apos;s what we&apos;re here for.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-blue-wash py-16 md:py-20">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-medium text-brand-navy mb-8">
            Three ways we help.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <ServiceCard
              number="01"
              title="Monthly Bookkeeping"
              description="We categorize transactions, reconcile accounts, and send clean monthly reports. A real person — not a support queue."
              href="/services/monthly-bookkeeping"
            />
            <ServiceCard
              number="02"
              title="Catch-Up Bookkeeping"
              description="Three months behind? Twelve? We'll clean it up, get you current, and hand you organized books you can actually use."
              href="/services/catch-up-bookkeeping"
            />
            <ServiceCard
              number="03"
              title="Tax-Ready Financials"
              description="Year-end financials prepared exactly how your tax preparer wants them. Fast, accurate, doesn't eat your January."
              href="/services/tax-ready-financials"
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-medium text-brand-navy mb-8">
            Why small businesses choose TOTYM Finance.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <WhyItem
              title="QuickBooks Certified"
              description="Certified ProAdvisor. I know the software inside-out and set it up right the first time."
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              }
            />
            <WhyItem
              title="Small-business-focused"
              description="I work with small business owners. No corporate jargon, no bloated tiers, advice that fits how you work."
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" />
                </svg>
              }
            />
            <WhyItem
              title="Actually responsive"
              description="Work directly with me, not a ticket system. Questions get answered the same day."
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-blue-wash py-16 md:py-20">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-medium text-brand-navy mb-8">
            How it works.
          </h2>
          <div className="flex flex-col gap-3">
            <StepCard
              number="1"
              title="Free consultation"
              description="30 minutes to understand your business and your books. No pressure, no sales pitch."
            />
            <StepCard
              number="2"
              title="Clear proposal"
              description="Written proposal, fixed monthly pricing. No surprise fees, no hourly billing."
            />
            <StepCard
              number="3"
              title="We take it from here"
              description="Secure document sharing, monthly reports, and a real human who responds."
            />
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mb-4">
            Pricing built around your business.
          </h2>
          <p className="text-[15px] leading-[1.75] text-slate-600 max-w-2xl mb-4">
            Every small business&apos;s books look a little different. Some need a
            few dozen transactions categorized each month; others have multiple
            income streams and want tighter reporting. After a free 30-minute
            consultation, I&apos;ll send you a written proposal with fixed
            monthly pricing — no hourly billing, no surprise fees, and nothing
            you didn&apos;t agree to upfront.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-brand-blue-mid font-medium text-sm hover:text-brand-blue mt-2"
          >
            See how I price
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-blue-mid text-white py-16 md:py-20">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Let&apos;s get your books off your plate.
          </h2>
          <p className="text-[15px] leading-[1.7] text-brand-blue-light max-w-lg mx-auto mb-7">
            A free 30-minute call. You&apos;ll walk away with clarity on where
            your books stand — whether or not you hire us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-navy font-medium rounded-lg hover:bg-brand-blue-light transition-colors text-sm"
          >
            Book your free consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-blue"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {text}
    </span>
  );
}

function ServiceCard({
  number,
  title,
  description,
  href,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-slate-200 p-6 hover:border-brand-blue hover:shadow-sm transition-all"
    >
      <div className="w-9 h-9 rounded-lg bg-brand-blue-pale text-brand-blue flex items-center justify-center font-medium text-sm mb-4">
        {number}
      </div>
      <h3 className="text-base font-medium text-brand-navy mb-2">{title}</h3>
      <p className="text-[13px] leading-[1.6] text-slate-600 mb-3">
        {description}
      </p>
      <span className="text-xs font-medium text-brand-blue-mid group-hover:text-brand-blue inline-flex items-center gap-1">
        Learn more
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}

function WhyItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-10 h-10 rounded-lg bg-brand-blue-pale text-brand-blue flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-base font-medium text-brand-navy mb-2">{title}</h3>
      <p className="text-[13px] leading-[1.6] text-slate-600">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start bg-white rounded-xl border border-slate-200 p-5">
      <div className="text-2xl font-medium text-brand-blue leading-none min-w-[28px]">
        {number}
      </div>
      <div>
        <h3 className="text-base font-medium text-brand-navy mb-1">{title}</h3>
        <p className="text-[13px] leading-[1.6] text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}
