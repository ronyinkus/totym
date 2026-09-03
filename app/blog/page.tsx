import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical bookkeeping, tax prep, and small business advice from a QuickBooks Certified ProAdvisor based in Mason, Ohio.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Small-Business Bookkeeping Resources",
    description:
      "Plain-English guidance about bookkeeping, tax preparation, and QuickBooks from a certified ProAdvisor.",
    url: "/blog",
    images: ["/totym-finance-banner.jpg"],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-brand-blue-wash">
        <div className="container-narrow py-14 md:py-16">
          <p className="eyebrow mb-3">Blog</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] font-medium text-brand-navy mb-4">
            Practical help for small businesses.
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-xl">
            Plain-English writing on bookkeeping, taxes, software, and running
            the money side of a solo business. No fluff, no jargon, no selling.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-narrow">
          <div className="flex flex-col divide-y divide-slate-200">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group py-7 first:pt-0 last:pb-0 hover:bg-slate-50/50 -mx-5 px-5 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                  <span className="px-2 py-0.5 rounded-full bg-brand-blue-pale text-brand-blue-mid font-medium">
                    {post.category}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-medium text-brand-navy mb-2 group-hover:text-brand-blue-mid transition-colors">
                  {post.title}
                </h2>
                <p className="text-[14px] leading-[1.65] text-slate-600 mb-3">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-blue-mid">
                  Read post
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue-mid text-white py-14">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-white mb-3">
            Need help with your books, not more reading?
          </h2>
          <p className="text-[14px] leading-[1.7] text-brand-blue-light max-w-lg mx-auto mb-6">
            Book a free 30-minute consultation. We&apos;ll look at your
            situation and figure out the right next step together.
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
