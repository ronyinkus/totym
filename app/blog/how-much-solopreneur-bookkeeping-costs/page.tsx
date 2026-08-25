import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("how-much-solopreneur-bookkeeping-costs")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
};

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Every small business owner eventually has the same uncomfortable conversation
        with themselves. It usually happens somewhere between a 2 AM receipt
        hunt and a confused email from a CPA. The question: how much should I
        actually be spending on bookkeeping, and is what I&apos;m doing now
        making sense?
      </p>
      <p>
        This post is the honest answer. No sales pitch, no fake ranges
        designed to funnel you somewhere — just the real economics of the
        options in front of you.
      </p>

      <h2>The three tiers of &ldquo;how you handle your books&rdquo;</h2>
      <p>
        Every small business owner falls into one of three buckets, whether
        they&apos;ve thought about it or not:
      </p>
      <p>
        <strong>Tier 1 — DIY with a spreadsheet or free tool.</strong>{" "}
        You&apos;re doing it yourself using Wave, a spreadsheet, or a shoebox
        you&apos;ll sort out at tax time. Your monthly cost in cash is near
        zero. Your cost in time is 2-8 hours per month, plus a panic at tax
        season.
      </p>
      <p>
        <strong>Tier 2 — DIY with paid software.</strong> You&apos;re using
        QuickBooks Online or similar, doing the work yourself but with better
        tools. Your cash cost is $25-75/month for the software. Your time
        cost is 1-4 hours per month once you&apos;re set up.
      </p>
      <p>
        <strong>Tier 3 — Hire a bookkeeper.</strong> Someone else handles the
        categorization, reconciliation, and monthly reports. Your cash cost
        is the bookkeeper&apos;s fee plus the software. Your time cost drops
        to roughly 30 minutes per month.
      </p>
      <p>
        Most small business owners start at Tier 1, move to Tier 2 when the mess
        becomes unmanageable, and move to Tier 3 when their time becomes too
        valuable to spend on books. The question isn&apos;t whether
        you&apos;ll eventually need bookkeeping help — it&apos;s how long
        you&apos;ll wait to get it.
      </p>

      <h2>The real cost of DIY</h2>
      <p>
        The sticker price of doing your own books is $0 to $75/month. That&apos;s
        the easy number. The harder number is the true cost when you include
        the things most small business owners don&apos;t count.
      </p>
      <p>
        <strong>Your time, at your billing rate.</strong> If you bill clients
        at $75/hour and you spend 4 hours a month on books, that&apos;s
        $300/month of opportunity cost. If you bill at $150/hour, it&apos;s
        $600/month. Suddenly &ldquo;free&rdquo; doesn&apos;t look so free.
      </p>
      <p>
        <strong>The January scramble.</strong> Most DIY bookkeepers spend
        10-20 hours in January trying to reconstruct what happened all year.
      </p>
      <p>
        <strong>Errors and missed deductions.</strong> Disorganized books
        miss legitimate deductions. The average small business owner loses
        $3,000-$8,000/year in unclaimed deductions from poor categorization
        and lost receipts.
      </p>
      <p>
        <strong>The CPA tax.</strong> A CPA who has to work from disorganized
        books typically charges $500-1,500 more at tax time than they would
        for clean books.
      </p>
      <p>
        Add the real components, and a lot of &ldquo;DIY&rdquo; small business owners
        are actually spending $500-1,500/month when you count it honestly.
      </p>

      <h2>What bookkeepers actually charge small businesses</h2>
      <p>
        The public ranges for professional bookkeeping for solo operators
        land roughly here, based on industry data and what you&apos;ll see
        quoted in the market:
      </p>
      <p>
        <strong>Budget/offshore services: $99-199/month.</strong> Usually a
        team model, high turnover, limited communication, scripted
        categorization.
      </p>
      <p>
        <strong>Mid-market online services (Bench, Xendoo, etc.): $200-400/month.</strong>{" "}
        Corporate service, decent quality, you work with whatever bookkeeper
        is assigned to you that month.
      </p>
      <p>
        <strong>Independent bookkeepers serving small businesses: $200-600/month</strong>{" "}
        depending on complexity. You work with one person directly. Quality
        varies widely. QuickBooks ProAdvisor certification is a reasonable
        filter.
      </p>
      <p>
        <strong>Boutique/specialized bookkeepers: $600-1,200/month.</strong>{" "}
        Higher touch, industry specialization, more strategic advisory.
      </p>
      <p>
        <strong>Catch-up bookkeeping (one-time projects): $500-3,000+</strong>{" "}
        depending on how far behind and how messy.
      </p>
      <p>
        These are industry ranges, not a TOTYM Bookkeeping rate card. Your
        actual quote from any bookkeeper (including me) depends on your
        specific situation.
      </p>

      <h2>What drives the price</h2>
      <p>Four things affect what any bookkeeper will quote you:</p>
      <p>
        <strong>Transaction volume.</strong> Thirty transactions a month is a
        different engagement than three hundred.
      </p>
      <p>
        <strong>Number of accounts to reconcile.</strong> One checking
        account is the simplest case. Add a credit card, a PayPal, and a
        Stripe account, and your reconciliation workload quadruples.
      </p>
      <p>
        <strong>Revenue complexity.</strong> A consultant with one income
        source is simpler than someone selling products on Shopify with
        Stripe and Amazon and wholesale invoicing.
      </p>
      <p>
        <strong>Current state of your books.</strong> Clean books = lower
        ongoing cost. Catch-up = separate project fee.
      </p>

      <h2>How to decide what&apos;s right for you</h2>
      <p>
        <strong>
          If your billing rate is under $50/hour and you have fewer than 30
          transactions/month,
        </strong>{" "}
        DIY with QuickBooks Online probably makes sense.
      </p>
      <p>
        <strong>
          If your billing rate is $50-100/hour and you have 30-100
          transactions/month,
        </strong>{" "}
        you&apos;re in the zone where outsourcing usually pays for itself in
        recovered time alone.
      </p>
      <p>
        <strong>
          If your billing rate is $100+/hour or you have 100+
          transactions/month,
        </strong>{" "}
        DIY bookkeeping is almost always costing you more than hiring help.
      </p>
      <p>
        <strong>If you&apos;ve been behind for more than three months,</strong>{" "}
        the math changes — you&apos;re paying the cost of being behind on top
        of whatever your current approach costs.
      </p>

      <h2>What I&apos;d actually tell a friend</h2>
      <p>
        If a friend asked me this question over coffee, here&apos;s what
        I&apos;d say:
      </p>
      <p>
        Don&apos;t hire a bookkeeper to save money. Hire a bookkeeper to get
        time back, to stop worrying about the books, and to actually know
        what your business is doing financially. Those are the real returns.
        The money side often works out, but it&apos;s not usually the main
        reason it&apos;s worth doing.
      </p>
      <p>
        And don&apos;t agonize over picking the &ldquo;perfect&rdquo;
        bookkeeper. A merely good bookkeeper you actually work with beats a
        perfect one you never hire because you were too busy researching.
      </p>
      <p>
        If you&apos;d like a real quote for your specific situation,{" "}
        <Link href="/contact">a free 30-minute consultation</Link> is the
        fastest way to get one — with no pressure and no obligation either
        way.
      </p>
    </BlogPostLayout>
  );
}
