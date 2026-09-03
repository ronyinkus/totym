import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("how-to-catch-up-on-bookkeeping")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    publishedTime: post.publishedAt,
    authors: ["Yinks"],
    images: ["/totym-finance-banner.jpg"],
  },
};

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p>
        If you&apos;ve landed here, there&apos;s a decent chance you already
        know the feeling. Maybe you opened QuickBooks six months ago, added a
        few transactions, and then life happened. Maybe you&apos;ve been
        running your business out of a single checking account and telling
        yourself you&apos;ll sort it out at tax time. Maybe your CPA just asked
        for financials and you had to admit you don&apos;t really have any.
      </p>

      <p>
        Wherever you are on the &ldquo;how behind am I&rdquo; spectrum,
        here&apos;s the first thing worth knowing: this is the single most
        common situation small business owners find themselves in. You are not alone,
        you are not uniquely disorganized, and you are not beyond help. What
        you need is a plan.
      </p>

      <p>
        This guide walks through how to actually catch up — whether you decide
        to do it yourself or hand it off.
      </p>

      <h2>Step 1: Stop the bleeding</h2>
      <p>
        Before you try to reconstruct the past, make sure you&apos;re not
        adding to the mess. This means three things:
      </p>
      <p>
        First, pick one business bank account and one business credit card
        going forward. If you&apos;ve been running business expenses through
        personal accounts (or vice versa), that stops now. It doesn&apos;t
        need to be a business-titled account on day one — a dedicated personal
        account used only for business is a huge upgrade from mixed spending.
      </p>
      <p>
        Second, stop paying for business things with cash whenever possible.
        Cash transactions are the hardest to reconstruct later because
        there&apos;s no bank record. If you must use cash, take a photo of the
        receipt and email it to yourself with a short note on what it was for.
      </p>
      <p>
        Third, start saving receipts. Not physically, necessarily — most banks
        and credit cards now show enough detail that the receipt itself is
        only critical for items over $75 (the IRS threshold for requiring
        documentation). But for anything that looks like a deduction, save the
        receipt digitally. A free app like Google Drive or Dropbox with a
        folder called &ldquo;Business Receipts 2026&rdquo; is enough.
      </p>
      <p>
        Doing these three things gets your <em>current</em> books in shape
        while you figure out what to do about the past.
      </p>

      <h2>Step 2: Define the scope</h2>
      <p>
        &ldquo;Behind on the books&rdquo; means different things to different
        people. Before you can catch up, you need to define exactly how far
        back you&apos;re reconstructing and why.
      </p>
      <p>
        Ask yourself: What&apos;s the earliest period you actually need? For
        most small business owners, the answer is &ldquo;the start of the current tax
        year&rdquo; — meaning if it&apos;s currently April 2026, you need
        clean books going back to January 1, 2026. If you&apos;re filing last
        year&apos;s taxes late, you also need 2025. If you&apos;re filing
        multiple years late, you need all of those years.
      </p>
      <p>
        Here&apos;s the honest truth: you probably don&apos;t need to go back
        further than your open tax years. If you have clean records for the
        period your CPA needs to file, you can start monthly bookkeeping from
        today forward and leave the distant past alone. Most small business owners
        scope too big and then feel overwhelmed. Scope only what you actually
        need.
      </p>

      <h2>Step 3: Gather your source documents</h2>
      <p>For the catch-up period, you need four things:</p>
      <p>
        <strong>Bank statements</strong> for every business account, month by
        month, from the start of the catch-up period through today. Download
        them as PDFs from your bank&apos;s website. If you also have personal
        accounts where business transactions happened, you need those too.
      </p>
      <p>
        <strong>Credit card statements</strong> for every card used for
        business, same timeframe.
      </p>
      <p>
        <strong>Payment processor records</strong> — if you use Stripe,
        PayPal, Square, Venmo for business, or any similar platform, you need
        the transaction exports from each one.
      </p>
      <p>
        <strong>Receipts or records for significant expenses</strong> —
        anything over $75, anything unusual, anything you want to claim as a
        deduction that isn&apos;t obvious from the bank statement line item.
      </p>
      <p>
        Don&apos;t try to gather everything perfectly before starting. Get the
        bank and credit card statements first — that&apos;s 80% of what you
        need — and fill in the rest as you go.
      </p>

      <h2>Step 4: Pick your tool</h2>
      <p>You have three realistic options:</p>
      <p>
        <strong>QuickBooks Online</strong> is what I recommend and am
        certified in. It&apos;s the industry standard, integrates with
        basically everything, and is what most CPAs prefer to work with.
        There&apos;s a learning curve but it&apos;s worth it.
      </p>
      <p>
        <strong>Wave</strong> is free and works for very simple businesses
        (one account, low transaction volume, no inventory). It&apos;s a fine
        starting point if your business is genuinely small.
      </p>
      <p>
        <strong>A spreadsheet</strong> works surprisingly well for small business owners
        with fewer than about 20 transactions a month. It&apos;s not going to
        impress a CPA, but if you&apos;re honest about being simple, a
        well-structured spreadsheet beats an incomplete QuickBooks.
      </p>
      <p>Whatever you pick, commit to it. Switching tools mid-catch-up adds work you don&apos;t need.</p>

      <h2>Step 5: Reconcile month by month</h2>
      <p>
        This is the actual catch-up work. For each month in the catch-up
        period, you enter every transaction from the bank statement into your
        tool (categorizing as you go), do the same for credit card
        transactions, make sure the ending balance in your tool matches the
        ending balance on the statement, and then move to the next month.
      </p>
      <p>
        This is tedious, not hard. The hardest part is categorization —
        deciding whether that $47 charge was &ldquo;Office Supplies&rdquo; or
        &ldquo;Meals &amp; Entertainment&rdquo; or something else. My general
        rule: when in doubt, use a simple category, be consistent, and
        don&apos;t agonize. A consistent &ldquo;maybe wrong&rdquo;
        categorization is much easier to fix later than a random mix of
        attempts.
      </p>
      <p>
        A realistic pace for DIY catch-up is about two months of books per
        hour of work, assuming a typical small-business volume. Three months
        behind is an afternoon. Twelve months behind is a full weekend.
      </p>

      <h2>Step 6: Run reports and sanity-check</h2>
      <p>
        Once every month is reconciled, pull two reports: a Profit &amp; Loss
        for the catch-up period and a Balance Sheet as of today. Look at them
        critically. Does the revenue match roughly what you remember earning?
        Do the expense categories look reasonable? Is there anything in the
        balance sheet that doesn&apos;t make sense?
      </p>
      <p>
        This sanity check catches the big errors. If your P&amp;L shows you
        earned $20,000 when you know you earned $80,000, something&apos;s
        wrong — probably a bank account you forgot to include.
      </p>

      <h2>When to hand it off</h2>
      <p>
        Here&apos;s the case for hiring a bookkeeper to do your catch-up
        instead of doing it yourself:
      </p>
      <p>
        <strong>Your time is worth more than the cost.</strong> If you&apos;re
        a small business owner billing $100+/hour to clients, spending 20 hours
        catching up books you&apos;ll still have to maintain is expensive in
        opportunity cost.
      </p>
      <p>
        <strong>You&apos;re not sure you&apos;re doing it right.</strong>{" "}
        Missing a reconciliation or miscategorizing half your expenses creates
        work at tax time or, worse, an audit risk.
      </p>
      <p>
        <strong>You know you won&apos;t actually do it.</strong> This is the
        honest one. If &ldquo;I&apos;ll catch up on the books this
        weekend&rdquo; has been on your to-do list for six months, it&apos;s
        probably going to stay there.
      </p>

      <h2>The bottom line</h2>
      <p>
        Being behind on bookkeeping is annoying, but it&apos;s fixable —
        always. The small business owners who stay behind forever are the ones who
        never make a plan. The ones who catch up are the ones who define the
        scope, gather the documents, and either do the work or hire it out.
      </p>
      <p>
        If you&apos;d like help scoping what catch-up would look like for your
        specific situation,{" "}
        <Link href="/contact">book a free 30-minute consultation</Link>.
        I&apos;ll tell you what&apos;s involved, how long it&apos;ll take, and
        what it costs — no pressure either way.
      </p>
    </BlogPostLayout>
  );
}
