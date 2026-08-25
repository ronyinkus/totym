import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug("quickbooks-self-employed-vs-quickbooks-online")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
};

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p>
        If you&apos;ve ever tried to figure out which QuickBooks product to
        use, you&apos;ve probably hit the same wall everyone hits: Intuit
        sells about eight different versions of QuickBooks, the marketing
        pages make them all sound perfect for you, and the pricing pages
        quietly obscure the fact that the cheaper version has fundamental
        limitations the expensive one doesn&apos;t.
      </p>
      <p>
        Here&apos;s the honest comparison, from someone who uses both and has
        watched dozens of small business owners pick the wrong one.
      </p>

      <h2>The short version</h2>
      <p>
        <strong>QuickBooks Self-Employed</strong> is designed for freelancers
        who file a Schedule C and want a simple tool that tracks income,
        expenses, and mileage. It does that well and doesn&apos;t do much
        else.
      </p>
      <p>
        <strong>QuickBooks Online</strong> is designed for businesses that
        need actual bookkeeping — reconciled accounts, financial reports,
        multi-account support, and the ability to work with a bookkeeper or
        CPA. It does more and costs more.
      </p>
      <p>
        <strong>The single most important difference:</strong> QuickBooks
        Self-Employed cannot be upgraded to QuickBooks Online. They are
        separate products that do not share data. If you start on
        Self-Employed and later need Online, you have to migrate manually,
        which is painful. Choose deliberately.
      </p>

      <h2>What QuickBooks Self-Employed actually does</h2>
      <p>Self-Employed is built around three core features:</p>
      <p>
        <strong>Transaction categorization</strong> — It connects to your
        bank and credit card accounts, pulls in transactions, and lets you
        swipe each one as Business or Personal. Business transactions get
        assigned a Schedule C category.
      </p>
      <p>
        <strong>Mileage tracking</strong> — A built-in mobile app tracks
        driving and lets you mark each trip business or personal. At year-end,
        it gives you a mileage summary for your taxes.
      </p>
      <p>
        <strong>Quarterly tax estimates</strong> — Based on your income and
        expenses, it estimates your quarterly estimated tax payments.
      </p>
      <p>
        That&apos;s essentially the product. It&apos;s clean, focused, and
        works well for what it&apos;s designed for.
      </p>

      <h2>What QuickBooks Self-Employed doesn&apos;t do</h2>
      <p>Things that seem like they should be there but aren&apos;t:</p>
      <ul>
        <li>
          <strong>No balance sheet.</strong> Self-Employed only tracks income
          and expenses (a cash-flow view). It doesn&apos;t track assets,
          liabilities, or equity.
        </li>
        <li>
          <strong>No reconciliation.</strong> You can&apos;t actually
          reconcile accounts to verify your books match your bank.
        </li>
        <li>
          <strong>No multi-user access.</strong> You can&apos;t give your
          bookkeeper or CPA access to work inside the file.
        </li>
        <li>
          <strong>Limited reporting.</strong> You get a Schedule C-style
          report and a basic P&amp;L. No customization, no comparative
          reports, no class tracking.
        </li>
        <li>
          <strong>No invoicing workflow.</strong> You can send invoices, but
          the feature is bare-bones.
        </li>
        <li>
          <strong>No 1099 support.</strong> If you pay contractors $600+ in a
          year, you can&apos;t generate 1099s from Self-Employed.
        </li>
      </ul>

      <h2>Who Self-Employed is actually right for</h2>
      <p>
        You&apos;re a genuinely simple solo freelancer: one income stream,
        one business bank account, no contractors, no inventory, no real
        assets. You file a Schedule C with your personal return. You want to
        spend as little time on bookkeeping as possible and don&apos;t need
        formal financial reporting.
      </p>
      <p>
        Examples: A freelance graphic designer who invoices through PayPal
        and has one business card. A rideshare driver who needs mileage
        tracking. A part-time consultant who bills a few clients a year.
      </p>

      <h2>Who needs QuickBooks Online instead</h2>
      <p>You need Online if any of the following are true:</p>
      <ul>
        <li>You have business debt, loans, or credit lines you want tracked properly</li>
        <li>You have equipment or assets worth depreciating</li>
        <li>You pay contractors and need to issue 1099s</li>
        <li>You want (or your CPA wants) actual reconciled books with a balance sheet</li>
        <li>You plan to work with a bookkeeper, accountant, or CPA who needs access</li>
        <li>Your business is an LLC filing as an S-Corp or a C-Corp</li>
        <li>You have inventory</li>
        <li>You invoice customers and track what&apos;s paid vs. outstanding</li>
        <li>You have multiple bank accounts or credit cards used for business</li>
      </ul>
      <p>
        The honest rule of thumb: if you&apos;re asking the question
        &ldquo;am I big enough for QuickBooks Online?&rdquo; — you probably
        are.
      </p>

      <h2>The pricing trap</h2>
      <p>
        Self-Employed costs around $20/month. QuickBooks Online Simple Start
        costs around $35/month. That&apos;s the pricing comparison that gets
        most people.
      </p>
      <p>
        But the relevant question isn&apos;t &ldquo;which is cheaper by $15
        a month.&rdquo; It&apos;s &ldquo;what does each one cost me in time,
        errors, and future migration?&rdquo;
      </p>
      <p>
        Self-Employed saves you $15/month today. If you outgrow it in a year
        and need to migrate to Online, you&apos;re looking at either
        manually recreating a year of books in the new tool (8-12 hours of
        your time) or paying a bookkeeper to do it ($500-1,500). The $15/month
        in savings becomes a several-hundred-dollar tax.
      </p>
      <p>
        For most small business owners who are serious about their business, QuickBooks
        Online Simple Start is the right starting point — even if you
        don&apos;t &ldquo;need&rdquo; all its features today.
      </p>

      <h2>The QuickBooks Online tiers, briefly</h2>
      <p>
        If you&apos;ve decided on Online, there are four tiers: Simple Start,
        Essentials, Plus, and Advanced.
      </p>
      <ul>
        <li>
          <strong>Simple Start</strong> works for most solo businesses: one
          user, core bookkeeping features
        </li>
        <li>
          <strong>Essentials</strong> adds bill pay and multi-user access (3
          users)
        </li>
        <li>
          <strong>Plus</strong> adds inventory and class/project tracking
        </li>
        <li>
          <strong>Advanced</strong> is for larger businesses with custom
          workflows — overkill for almost every small business
        </li>
      </ul>
      <p>Most of my small-business clients are on Simple Start or Essentials. Very few need Plus, and none need Advanced.</p>

      <h2>Getting the ProAdvisor discount</h2>
      <p>
        One thing Intuit doesn&apos;t advertise: if you subscribe to
        QuickBooks Online through a certified ProAdvisor, you can get
        meaningfully better pricing — often 30-50% off the standard monthly
        rate for the life of the subscription.
      </p>
      <p>
        If you&apos;re setting up QuickBooks Online for the first time or
        considering a switch, reach out before you click &ldquo;subscribe&rdquo;
        on the Intuit website.{" "}
        <Link href="/contact">A free 30-minute consultation</Link> is enough
        for me to set you up with the ProAdvisor discount, get your chart of
        accounts configured correctly, and save you both money on the
        subscription and hours of setup frustration.
      </p>
    </BlogPostLayout>
  );
}
