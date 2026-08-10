import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a free 20-minute consultation with TOTYM Bookkeeping Services LLC. QuickBooks-certified bookkeeping for solopreneurs in Mason, Ohio and nationwide.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue-wash">
        <div className="container-narrow py-14 md:py-16">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] font-medium text-brand-navy mb-5 max-w-2xl">
            Let&apos;s talk about your books.
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-xl">
            Book a free 20-minute consultation. We&apos;ll look at where your
            books stand today and what it would take to get (and keep) them in
            shape — whether or not you end up working with me.
          </p>
        </div>
      </section>

      {/* Booking section */}
      <section className="py-14 md:py-16">
        <div className="container-narrow">
          <div className="grid md:grid-cols-[2fr_1fr] gap-10">
            <div>
              <h2 className="font-serif text-2xl font-medium text-brand-navy mb-4">
                Book your consultation
              </h2>
              <p className="text-[14px] leading-[1.65] text-slate-600 mb-6">
                Pick any open slot below. You&apos;ll get a calendar invite and
                a short pre-call questionnaire by email.
              </p>

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/yinks-totymservices"
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>

            <aside className="space-y-7">
              <div>
                <h3 className="text-xs font-medium text-brand-navy uppercase tracking-widest mb-3">
                  Prefer email?
                </h3>
                <a
                  href="mailto:yinks@totymservices.com"
                  className="text-sm text-brand-blue-mid hover:text-brand-blue font-medium"
                >
                  yinks@totymservices.com
                </a>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  I reply to every email within one business day — usually
                  faster.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium text-brand-navy uppercase tracking-widest mb-3">
                  Prefer to call?
                </h3>
                <a
                  href="tel:+15133608842"
                  className="text-sm text-brand-blue-mid hover:text-brand-blue font-medium"
                >
                  513-360-8842
                </a>
              </div>

              <div>
                <h3 className="text-xs font-medium text-brand-navy uppercase tracking-widest mb-3">
                  What to expect
                </h3>
                <ul className="space-y-2 text-[13px] leading-[1.65] text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-brand-blue mt-0.5">·</span>
                    20 minutes, no pressure
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-blue mt-0.5">·</span>
                    Quick review of where your books stand
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-blue mt-0.5">·</span>
                    Clear next steps, whether we work together or not
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-blue mt-0.5">·</span>
                    Written proposal within 48 hours if it&apos;s a fit
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-medium text-brand-navy uppercase tracking-widest mb-3">
                  Based in
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mason, Ohio
                  <br />
                  <span className="text-xs text-slate-500">
                    Serving solopreneurs nationwide
                  </span>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-brand-blue-wash py-14 md:py-16">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl font-medium text-brand-navy mb-3">
            Not sure if you&apos;re ready?
          </h2>
          <p className="text-[14px] leading-[1.7] text-slate-600 mb-5 max-w-2xl">
            Book the call anyway. There&apos;s no pressure, no obligation, and
            no cost — and sometimes the easiest way to figure out what you need
            is to talk it through with someone who does this every day. If
            we&apos;re not the right fit, I&apos;ll say so and point you toward
            someone who is.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-brand-blue-mid font-medium text-sm hover:text-brand-blue"
          >
            Learn more about how I price
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
