import type { Metadata } from "next";
import Link from "next/link";

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

              {/*
                =============================================================
                CALENDLY EMBED GOES HERE
                =============================================================
                Replace the placeholder div below with your Calendly embed.

                To get the embed code:
                1. Sign up at calendly.com
                2. Create an event type for "Free 20-minute consultation"
                3. Click Share → Embed → Inline embed
                4. Paste the provided script and div here

                Typical inline embed looks like:

                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/YOUR-HANDLE/consultation"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />

                (You'll need: import Script from "next/script")
                =============================================================
              */}

              <div className="bg-brand-blue-wash border border-dashed border-brand-blue-light rounded-xl p-10 text-center">
                <div className="w-12 h-12 rounded-lg bg-white mx-auto mb-4 flex items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-blue"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-brand-navy mb-1">
                  Calendly widget goes here
                </p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Replace this placeholder with your Calendly embed. See the
                  comment in the source file for instructions.
                </p>
              </div>
            </div>

            <aside className="space-y-7">
              <div>
                <h3 className="text-xs font-medium text-brand-navy uppercase tracking-widest mb-3">
                  Prefer email?
                </h3>
                <a
                  href="mailto:hello@totymservices.com"
                  className="text-sm text-brand-blue-mid hover:text-brand-blue font-medium"
                >
                  hello@totymservices.com
                </a>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  I reply to every email within one business day — usually
                  faster.
                </p>
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
