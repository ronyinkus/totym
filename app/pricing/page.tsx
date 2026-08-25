import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, custom pricing for small-business bookkeeping. Fixed monthly rates, no hourly billing, no surprise fees. Free consultation and written proposal within 48 hours.",
};

const included = [
  {
    title: "Fixed pricing",
    description:
      "Flat monthly or project rate, agreed before work starts. No hourly meter, no surprise invoices.",
  },
  {
    title: "Unlimited email support",
    description:
      "Ask questions throughout the month. Same-day responses on business days. No per-email charges.",
  },
  {
    title: "Secure document sharing",
    description:
      "Encrypted portal for statements, receipts, and reports. Nothing sensitive lives in email.",
  },
  {
    title: "Direct access to me",
    description:
      "No support tickets, no account manager you never meet. You work with me, start to finish.",
  },
  {
    title: "QuickBooks expertise",
    description:
      "Certified ProAdvisor rates included. No upcharge for software questions or optimization.",
  },
  {
    title: "Month-to-month",
    description:
      "No long-term contracts. If the fit isn't right, you can stop anytime.",
  },
];

const factors = [
  {
    number: "01",
    title: "Transaction volume",
    description:
      "A freelance writer with 30 transactions a month and a coach with 200 are different engagements. We count transactions during the consultation.",
  },
  {
    number: "02",
    title: "Number of accounts",
    description:
      "One business checking account is simpler than a checking, savings, two credit cards, and a PayPal. More accounts = more reconciliation time.",
  },
  {
    number: "03",
    title: "Revenue complexity",
    description:
      "Single income stream (one Stripe account, one service) is simpler than multiple platforms, product sales, and sales tax considerations.",
  },
  {
    number: "04",
    title: "Current state of your books",
    description:
      "If your QuickBooks is already clean, we can jump right in. If catch-up is needed first, that's a separate project fee before monthly work begins.",
  },
];

const steps = [
  {
    number: "1",
    title: "Free 30-minute consultation",
    description:
      "We talk about your business, what your books look like today, and what you actually need. No pressure, no pitch.",
  },
  {
    number: "2",
    title: "Written proposal within 48 hours",
    description:
      "You get a written proposal with a fixed monthly (or project) price, scope of work, and what's included. Review it on your own time.",
  },
  {
    number: "3",
    title: "Yes, no, or questions",
    description:
      "If it's a fit, we sign and start. If it's not, no hard feelings — I'd rather refer you to someone better suited than take work that won't serve you.",
  },
];

const faqs = [
  {
    question: "Why won't you just tell me what it costs?",
    answer:
      "I could publish a number, but it would either be too high for some clients or too low for others — and I'd rather give you an accurate quote than a misleading one. The 30-minute call is genuinely enough to scope most engagements.",
  },
  {
    question: "Does the price change month to month?",
    answer:
      "No. Your monthly price is fixed for the engagement. If your business grows substantially (more accounts, much higher volume), we revisit the scope together — but nothing changes without a conversation first.",
  },
  {
    question: "Are there any add-on fees?",
    answer:
      "Not hidden ones. Your proposal lists everything included. Work outside that scope (a big one-time project, for example) would be quoted separately before any work happens.",
  },
  {
    question: "Do I pay for the software separately?",
    answer:
      "QuickBooks Online is billed directly by Intuit — I can get you a ProAdvisor discount on the subscription, but the software fee is yours. My service fee is separate.",
  },
  {
    question: "How do I pay?",
    answer:
      "Monthly invoices paid by ACH or credit card. Project fees (like catch-up) are typically paid 50% upfront, 50% on delivery.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue-wash">
        <div className="container-narrow py-16 md:py-20">
          <p className="eyebrow mb-3">Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] font-medium text-brand-navy mb-5 max-w-2xl">
            Pricing built around your business — not a rate card.
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 mb-7 max-w-xl">
            Every small business&apos;s books look a little different. That&apos;s
            why every engagement gets a custom proposal after a free 30-minute
            consultation — with fixed monthly pricing and no surprises.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a free consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Why no price */}
      <section className="py-14 md:py-16">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-4 max-w-xl">
            Why there&apos;s no price on this page.
          </h2>
          <p className="text-[15px] leading-[1.75] text-slate-600 max-w-2xl mb-4">
            Most bookkeepers either publish rigid tiers or quote you hourly.
            Neither works well for small businesses. Rigid tiers force you into a
            box that may not fit — you end up paying for things you don&apos;t
            need or scrambling for things that aren&apos;t included. Hourly
            billing turns every question into a meter running, which means you
            stop asking questions, which is the opposite of what a good
            bookkeeping relationship should be.
          </p>
          <p className="text-[15px] leading-[1.75] text-slate-600 max-w-2xl">
            Instead, every TOTYM Bookkeeping engagement is priced as a flat
            monthly or project fee, quoted to your actual situation after we
            talk. You know exactly what you&apos;re paying. I know exactly what
            I&apos;m doing. No surprises either direction.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand-blue-wash py-14 md:py-16">
        <div className="container-wide">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-7">
            What every engagement includes.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {included.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-slate-200 p-5"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-blue flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <h3 className="text-sm font-medium text-brand-navy">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-[1.6] text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What affects quote */}
      <section className="py-14 md:py-16">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-4">
            What affects your quote.
          </h2>
          <p className="text-[15px] leading-[1.75] text-slate-600 max-w-2xl mb-7">
            A few factors shape what your monthly or project price looks like.
            None of these are gotchas — they&apos;re just the honest variables
            that make each small business&apos;s books different.
          </p>
          <div className="flex flex-col gap-3">
            {factors.map((factor) => (
              <div
                key={factor.number}
                className="flex gap-4 items-start bg-brand-blue-wash rounded-lg p-5"
              >
                <div className="w-8 h-8 rounded-md bg-white text-brand-blue flex items-center justify-center font-medium text-sm flex-shrink-0">
                  {factor.number}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-brand-navy mb-1">
                    {factor.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-slate-600">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quoting process */}
      <section className="bg-brand-blue-wash py-14 md:py-16">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-7">
            The quoting process.
          </h2>
          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 items-start">
                <div className="text-2xl font-medium text-brand-blue leading-none min-w-[28px]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-brand-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-16">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-7">
            Common questions about pricing.
          </h2>
          <div className="flex flex-col gap-5">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-sm font-medium text-brand-navy mb-1.5">
                  {faq.question}
                </h3>
                <p className="text-[13px] leading-[1.7] text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-blue-mid text-white py-14 md:py-16">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl font-medium text-white mb-3">
            Get a real price for your real situation.
          </h2>
          <p className="text-[14px] leading-[1.7] text-brand-blue-light max-w-lg mx-auto mb-6">
            A free 30-minute call and a written proposal within 48 hours. No
            pressure, no cost, and no obligation either way.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-navy font-medium rounded-lg hover:bg-brand-blue-light transition-colors text-sm"
          >
            Book your free consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
