export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-catch-up-on-bookkeeping",
    title: "How to Catch Up on Bookkeeping When You're Months (or Years) Behind",
    description:
      "Behind on your bookkeeping? A step-by-step guide for small business owners to get their books current — whether you're three months or three years behind.",
    category: "Catch-Up",
    readTime: "7 min read",
    publishedAt: "2026-04-20",
  },
  {
    slug: "solopreneur-guide-categorizing-business-expenses",
    title:
      "The Small Business Owner's Guide to Categorizing Business Expenses",
    description:
      "A plain-English guide to how small business owners should categorize business expenses for cleaner books, bigger deductions, and a smoother tax season.",
    category: "Tax & Deductions",
    readTime: "8 min read",
    publishedAt: "2026-04-20",
  },
  {
    slug: "quickbooks-self-employed-vs-quickbooks-online",
    title: "QuickBooks Self-Employed vs. QuickBooks Online",
    description:
      "A QuickBooks ProAdvisor breaks down the real differences between QuickBooks Self-Employed and QuickBooks Online — and which one actually fits your business.",
    category: "Software",
    readTime: "7 min read",
    publishedAt: "2026-04-20",
  },
  {
    slug: "how-much-solopreneur-bookkeeping-costs",
    title: "How Much Should a Small Business Spend on Bookkeeping?",
    description:
      "A transparent breakdown of what bookkeeping actually costs small businesses — DIY, software-only, and hiring a bookkeeper — plus how to decide what's right for you.",
    category: "Pricing",
    readTime: "8 min read",
    publishedAt: "2026-04-20",
  },
  {
    slug: "small-business-bookkeeping-mason-ohio",
    title: "Small Business Bookkeeping in Mason, Ohio",
    description:
      "A local guide for Mason, Ohio small business owners: what you need to know about bookkeeping, Ohio taxes, and keeping your business finances clean.",
    category: "Local",
    readTime: "7 min read",
    publishedAt: "2026-04-20",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
