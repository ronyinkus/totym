import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the founder of TOTYM Bookkeeping Services LLC — a QuickBooks Certified ProAdvisor and Tax Expert helping solopreneurs in Mason, Ohio and nationwide keep their books clean and their weekends free.",
};

/**
 * ============================================================================
 * ABOUT PAGE
 * ============================================================================
 * Personal story for the founder of TOTYM Bookkeeping Services LLC.
 *
 * NOTE: Replace [Your Name] in the hero headline with the founder's actual
 * name before launch. Everything else on this page is final copy.
 * ============================================================================
 */

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-blue-wash">
        <div className="container-narrow py-14 md:py-16">
          <p className="eyebrow mb-3">About</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] font-medium text-brand-navy mb-5 max-w-2xl">
            Hi, I&apos;m Yinks.
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-xl">
            QuickBooks Certified ProAdvisor, Tax Expert, and founder of TOTYM
            Bookkeeping Services LLC — the person who&apos;ll actually handle
            your books. Based in Mason, Ohio.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-narrow">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-blue-pale">
              <Image
                src="/yinks-profile.jpg"
                alt="Yinks, founder of TOTYM Finance"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              />
            </div>

            <div className="prose-custom">
              <h2>How I got here</h2>
              <p>
                After more than two decades in traditional 9–5 roles, I
                reached a point where I knew I needed something different —
                something that let me use my skills without sacrificing my
                time, my peace, or my purpose.
              </p>
              <p>
                Over the years, I&apos;ve supported individuals and small
                businesses through complex tax situations, financial cleanups,
                and the kind of behind-the-scenes work that keeps everything
                running smoothly. The part I loved most wasn&apos;t the
                corporate structure — it was the people.
              </p>
              <p>
                Starting TOTYM Bookkeeping Services LLC is my way of taking
                everything I&apos;ve learned — tax law, compliance,
                organization, clarity, and real-world experience — and
                building a business that gives me the flexibility I&apos;ve
                earned and the impact I&apos;ve always wanted.
              </p>

              <h2>Why solopreneurs</h2>
              <p>
                I have a soft spot for solopreneurs because I understand what
                it feels like to build something from the ground up. When
                you&apos;re running a business on your own, you&apos;re the
                CEO, the customer service rep, the marketing team, and the
                accountant — all at once.
              </p>
              <p>
                Most solopreneurs don&apos;t need a big accounting firm. They
                need someone who speaks their language, understands their
                challenges, respects their time, and helps them stay compliant
                without the overwhelm.
              </p>
              <p>
                My goal is to give solopreneurs clarity, confidence, and clean
                books so they can focus on the work they&apos;re passionate
                about — not the paperwork they dread.
              </p>

              <h2>How I work</h2>
              <p>
                I believe in keeping things simple, transparent, and
                stress-free. Here&apos;s what you can expect when you work
                with me:
              </p>
              <ul>
                <li>
                  <strong>Clear communication</strong> — no jargon, no
                  confusion, no guessing.
                </li>
                <li>
                  <strong>Organized systems</strong> — so you always know
                  where things stand.
                </li>
                <li>
                  <strong>Accuracy and compliance</strong> — because clean
                  books protect your business.
                </li>
                <li>
                  <strong>A partnership mindset</strong> — I&apos;m here to
                  support you, not judge you.
                </li>
                <li>
                  <strong>Flexible scheduling</strong> — because life
                  doesn&apos;t always fit into business hours.
                </li>
              </ul>
              <p>
                Whether you need monthly bookkeeping, a cleanup, or tax
                support, I meet you where you are and help you move forward
                with confidence.
              </p>

              <h2>A little about me</h2>
              <p>
                I&apos;m a mother, a business owner, and someone who believes
                deeply in doing work that matters. I&apos;m also a Tax Expert
                with years of experience helping families and small businesses
                navigate everything from self-employment taxes to IRS letters
                to financial organization.
              </p>
              <p>
                I value integrity, clarity, and peace — and I bring those same
                values into the way I serve my clients.
              </p>
              <p>
                When I&apos;m not working, you&apos;ll find me celebrating
                family milestones, planning events, supporting my kids
                journey, or helping others stay organized and financially
                grounded.
              </p>
              <p>
                <em>
                  TOTYM stands for &ldquo;Time of the Year Moments&rdquo; —
                  and this business is one of mine. I&apos;m honored to help
                  others create theirs.
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-blue-wash py-14">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl font-medium text-brand-navy mb-4">
            Credentials &amp; certifications
          </h2>
          <ul className="space-y-3 text-[14px] leading-[1.65] text-slate-600">
            <li className="flex gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-blue flex-shrink-0 mt-1"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>
                <strong className="text-brand-navy font-medium">
                  QuickBooks Certified ProAdvisor
                </strong>{" "}
                — official Intuit certification for QuickBooks Online
                expertise
              </span>
            </li>
            <li className="flex gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-blue flex-shrink-0 mt-1"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>
                <strong className="text-brand-navy font-medium">
                  Tax Expert
                </strong>{" "}
                — years of experience with self-employment taxes, IRS
                correspondence, and financial organization for individuals
                and small businesses
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-brand-blue-mid text-white py-14">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-white mb-3">
            Let&apos;s talk.
          </h2>
          <p className="text-[14px] leading-[1.7] text-brand-blue-light max-w-lg mx-auto mb-6">
            The best way to know if we&apos;re a fit is a short conversation.
            Free 20 minutes, no pressure either way.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-navy font-medium rounded-lg hover:bg-brand-blue-light transition-colors text-sm"
          >
            Book a free consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
