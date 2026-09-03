import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Yinks, founder of TOTYM Bookkeeping Services LLC — a QuickBooks Certified ProAdvisor and Tax Expert helping small businesses in Mason, Ohio and nationwide keep their books clean and their weekends free.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Yinks, QuickBooks Certified ProAdvisor",
    description:
      "Meet the founder of TOTYM Finance, serving small businesses in Mason, Ohio and nationwide.",
    url: "/about",
    images: ["/totym-finance-banner.jpg"],
  },
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
                My journey started at the University of Maryland, where I
                earned my degree in Accounting. From the beginning, I knew
                that accounting was more than just a career path for me. It
                was an area I genuinely enjoyed and one where I believed I
                could make a meaningful impact.
              </p>
              <p>
                After graduating, my career took me into the world of
                technology, where I became an Oracle Developer. What began as
                a different direction professionally turned into a career
                spanning more than two decades. Over the years, I&apos;ve
                built extensive experience working with technology, systems,
                data, problem-solving, and the complex processes that keep
                organizations running efficiently.
              </p>
              <p>
                But while I was building my career in IT, I never lost sight
                of my passion for accounting.
              </p>
              <p>
                I continued to develop my knowledge and skills in accounting,
                tax, financial processes, and compliance alongside my
                professional career. I kept learning, upgrading myself, and
                staying connected to the field because accounting was always
                the area where I felt I could truly thrive.
              </p>
              <p>
                Eventually, I realized that the combination of my accounting
                background, technology experience, and years of professional
                experience had given me something valuable: the ability to
                bring both financial understanding and technology-driven
                organization to the businesses I serve.
              </p>
              <p>
                That realization led me to start TOTYM Bookkeeping Services
                LLC.
              </p>
              <p>
                TOTYM is the result of bringing together everything I&apos;ve
                learned over the past two decades, including accounting,
                technology, organization, compliance, problem-solving, and
                real-world business experience, and turning it into a service
                focused on helping people and small businesses feel more
                confident about their finances.
              </p>
              <p>
                For me, this isn&apos;t simply about keeping books. It&apos;s
                about creating clarity, bringing order to the numbers, and
                giving business owners the confidence to make better
                decisions.
              </p>

              <h2>Why small businesses</h2>
              <p>
                I have a soft spot for small business owners because I understand
                what it feels like to build something from the ground up. When
                you&apos;re running a business, you&apos;re often the CEO,
                customer service representative, marketing team, operations
                manager, and accountant, all at once.
              </p>
              <p>And the financial side can quickly become overwhelming.</p>
              <p>
                Most small businesses don&apos;t need a large accounting firm
                with layers of people and complicated processes. They need
                someone who understands their world, listens to their
                concerns, respects their time, and provides practical
                financial support without making things more complicated than
                they need to be.
              </p>
              <p>That&apos;s where I want to make a difference.</p>
              <p>
                My goal is to give small business owners clarity, confidence,
                and clean, organized books so they can spend less time
                worrying about paperwork and more time building the business
                they&apos;re passionate about.
              </p>

              <h2>How I work</h2>
              <p>
                I believe good financial support should feel simple,
                transparent, and stress-free. When you work with me, you can
                expect:
              </p>
              <ul>
                <li>
                  <strong>Clear communication:</strong> No unnecessary jargon,
                  confusion, or guesswork.
                </li>
                <li>
                  <strong>Organized systems:</strong> So you always understand
                  where your finances stand.
                </li>
                <li>
                  <strong>Accuracy and compliance:</strong> Because reliable
                  financial records are the foundation of a healthy business.
                </li>
                <li>
                  <strong>A partnership mindset:</strong> I&apos;m here to
                  support you, answer your questions, and help you move
                  forward without judgment.
                </li>
                <li>
                  <strong>Technology-driven efficiency:</strong> Combining my
                  accounting knowledge with more than two decades of
                  experience working with technology and business systems.
                </li>
                <li>
                  <strong>A personal approach:</strong> Because your business
                  isn&apos;t just a set of numbers. It&apos;s something you&apos;ve
                  invested your time, energy, and vision into.
                </li>
              </ul>
              <p>
                Whether you need ongoing bookkeeping, financial cleanup, or
                support getting your books organized, I meet you where you are
                and help you move forward with confidence.
              </p>

              <h2>A little about me</h2>
              <p>
                I&apos;m a mother, a business owner, an accounting professional,
                and a lifelong learner. I believe strongly in doing work with
                integrity, creating clarity where there is confusion, and
                building relationships based on trust.
              </p>
              <p>
                My career has taught me that success isn&apos;t just about
                working harder. It&apos;s about continually growing, adapting,
                learning new skills, and finding work that aligns with who you
                are and the value you want to create.
              </p>
              <p>That&apos;s exactly what TOTYM represents for me.</p>
              <p>
                When I&apos;m not working, you&apos;ll find me celebrating
                family milestones, planning trips and events, supporting my
                children&apos;s journeys, or helping others stay organized and
                financially grounded. I&apos;m a growth-minded person who enjoys
                meaningful conversations, connecting with people, and helping
                others move forward.
              </p>
              <p>
                After more than two decades in IT and a lifelong passion for
                accounting, starting TOTYM is my opportunity to bring those
                two worlds together. I&apos;m using the experience I&apos;ve
                gained, the knowledge I&apos;ve continued to build, and the
                passion I&apos;ve always had for accounting to serve others.
              </p>
              <p>
                This is more than a business for me. It&apos;s the next chapter
                of a journey that started with accounting, grew through
                technology, and has ultimately brought me back to where I
                believe I can make the greatest impact.
              </p>
              <p>
                I&apos;m excited to be here, and I&apos;m honored to help small
                business owners create clarity, confidence, and room to grow.
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
            Free 30 minutes, no pressure either way.
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
