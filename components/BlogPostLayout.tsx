import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

interface BlogPostLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  post,
  children,
}: BlogPostLayoutProps) {
  const url = `https://www.totymfinance.com/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        mainEntityOfPage: url,
        image: "https://www.totymfinance.com/totym-finance-banner.jpg",
        author: {
          "@type": "Person",
          name: "Yinks",
          url: "https://www.totymfinance.com/about",
          worksFor: { "@id": "https://www.totymfinance.com/#organization" },
        },
        publisher: { "@id": "https://www.totymfinance.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.totymfinance.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.totymfinance.com/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
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
      {/* Post header */}
      <section className="bg-brand-blue-wash">
        <div className="container-narrow py-12 md:py-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-blue-mid hover:text-brand-blue mb-5"
          >
            <span aria-hidden>←</span>
            All posts
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-slate-500">
            <span className="px-2 py-0.5 rounded-full bg-white text-brand-blue-mid font-medium">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>By Yinks</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>
              {new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                }
              )}
            </time>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl leading-[1.15] font-medium text-brand-navy mb-4 max-w-3xl">
            {post.title}
          </h1>
          <p className="text-[15px] leading-[1.65] text-slate-600 max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* Post body */}
      <article className="py-12 md:py-16">
        <div className="container-narrow">
          <div className="prose-custom max-w-2xl">{children}</div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-brand-blue-mid text-white py-12">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-xl md:text-2xl font-medium text-white mb-2">
            Want help applying this to your business?
          </h2>
          <p className="text-[13px] leading-[1.7] text-brand-blue-light max-w-md mx-auto mb-5">
            Free 30-minute consultation, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-brand-navy font-medium rounded-lg hover:bg-brand-blue-light transition-colors text-sm"
          >
            Book a consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
