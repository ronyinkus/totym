import Link from "next/link";

type Included = { title: string; description: string };
type Step = { number: string; title: string; description: string };
type FAQ = { question: string; answer: string };

export interface ServicePageProps {
  path: string;
  serviceType: string;
  breadcrumb: string;
  headline: string;
  subhead: string;
  whoForTitle: string;
  whoForBody: string;
  includedTitle: string;
  included: Included[];
  howTitle: string;
  steps: Step[];
  faqs: FAQ[];
  finalTitle: string;
  finalBody: string;
}

export default function ServicePage({
  path,
  serviceType,
  breadcrumb,
  headline,
  subhead,
  whoForTitle,
  whoForBody,
  includedTitle,
  included,
  howTitle,
  steps,
  faqs,
  finalTitle,
  finalBody,
}: ServicePageProps) {
  const url = `https://www.totymfinance.com${path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: serviceType,
        description: subhead,
        url,
        provider: { "@id": "https://www.totymfinance.com/#organization" },
        areaServed: { "@type": "Country", name: "United States" },
        audience: { "@type": "BusinessAudience", audienceType: "Small business owners" },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.totymfinance.com" },
          { "@type": "ListItem", position: 2, name: serviceType, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero */}
      <section className="bg-brand-blue-wash">
        <div className="container-narrow py-16 md:py-20">
          <p className="eyebrow mb-3">{breadcrumb}</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] font-medium text-brand-navy mb-5 max-w-2xl">
            {headline}
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 mb-7 max-w-xl">
            {subhead}
          </p>
          <Link href="/contact" className="btn-primary">
            Book a free consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-14 md:py-16">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-4">
            {whoForTitle}
          </h2>
          <p className="text-[15px] leading-[1.75] text-slate-600 max-w-2xl">
            {whoForBody}
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand-blue-wash py-14 md:py-16">
        <div className="container-wide">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-7">
            {includedTitle}
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

      {/* How it works */}
      <section className="py-14 md:py-16">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-7">
            {howTitle}
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
                  <p className="text-[13px] leading-[1.6] text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-brand-blue-wash py-14 md:py-16">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-7">
            Common questions.
          </h2>
          <div className="flex flex-col gap-5">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-sm font-medium text-brand-navy mb-1.5">
                  {faq.question}
                </h3>
                <p className="text-[13px] leading-[1.65] text-slate-600">
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
            {finalTitle}
          </h2>
          <p className="text-[14px] leading-[1.7] text-brand-blue-light max-w-lg mx-auto mb-6">
            {finalBody}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-navy font-medium rounded-lg hover:bg-brand-blue-light transition-colors text-sm"
          >
            Book your consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
