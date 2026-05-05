import type { Metadata } from "next";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug } from "@/lib/blog-posts";

const post = getPostBySlug(
  "solopreneur-guide-categorizing-business-expenses"
)!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
};

export default function Post() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Every bookkeeping task solopreneurs dread comes back to the same
        underlying question: what category does this go in? Categorization
        sounds simple, but it&apos;s where most DIY bookkeeping goes sideways.
        Good categorization means cleaner monthly reports, bigger (legitimate)
        deductions, and a CPA who doesn&apos;t send you panicky emails in
        March.
      </p>
      <p>Here&apos;s how to think about it.</p>

      <h2>Why categorization matters more than you think</h2>
      <p>
        When you categorize an expense in QuickBooks (or any bookkeeping
        system), you&apos;re doing two things at once. First, you&apos;re
        grouping similar expenses so your monthly P&amp;L actually tells you
        something useful — &ldquo;software&rdquo; is more useful than a pile
        of individual subscriptions. Second, you&apos;re setting up your tax
        return — most categories map directly to a line on Schedule C or your
        business return.
      </p>
      <p>
        Miscategorization is the single most common reason bookkeeping feels
        chaotic. If a $200 Zoom subscription gets split across &ldquo;Office
        Supplies,&rdquo; &ldquo;Software,&rdquo; and &ldquo;Professional
        Services&rdquo; over the course of a year, your reports become
        useless and your tax prep becomes guesswork.
      </p>
      <p>
        The fix is choosing a category for each type of expense once, and
        then applying it consistently. Boring but effective.
      </p>

      <h2>The categories that cover 90% of solopreneur expenses</h2>
      <p>
        Most solopreneurs can handle their bookkeeping with about 15-20
        expense categories. Here are the ones that cover nearly everything:
      </p>
      <p>
        <strong>Advertising &amp; Marketing</strong> — Facebook ads, Google
        ads, business cards, website hosting used for marketing pages,
        marketing consultants.
      </p>
      <p>
        <strong>Software &amp; Subscriptions</strong> — QuickBooks, Zoom,
        Adobe, Dropbox, Canva, any monthly or annual software for the
        business.
      </p>
      <p>
        <strong>Office Supplies</strong> — Printer paper, pens, notebooks,
        small physical supplies. If it&apos;s physical and under about $500,
        it probably goes here.
      </p>
      <p>
        <strong>Office Equipment</strong> — Laptops, monitors, printers,
        desks, chairs. Anything over about $500 that lasts more than a year
        goes here and may need to be depreciated rather than deducted all at
        once.
      </p>
      <p>
        <strong>Contractors &amp; Professional Services</strong> — Payments to
        other freelancers, your CPA, your attorney, your bookkeeper. Anyone
        you pay $600+ in a year needs a 1099 at year-end.
      </p>
      <p>
        <strong>Home Office</strong> — If you have a dedicated home office
        space, a percentage of rent/mortgage interest, utilities, and
        internet. See below for the rules.
      </p>
      <p>
        <strong>Travel</strong> — Flights, hotels, rental cars, Ubers for
        business trips. Not your daily commute.
      </p>
      <p>
        <strong>Meals</strong> — Business meals with clients or during travel.
        Currently 50% deductible. Keep notes on who you met with and why.
      </p>
      <p>
        <strong>Vehicle / Mileage</strong> — If you use your car for business,
        you can either track actual expenses or take the standard mileage
        rate (currently around 67 cents per mile). Pick one method and stick
        with it.
      </p>
      <p>
        <strong>Phone &amp; Internet</strong> — The business percentage of
        your phone and internet bills.
      </p>
      <p>
        <strong>Insurance</strong> — Business liability, professional
        liability, health insurance if you&apos;re self-employed.
      </p>
      <p>
        <strong>Bank &amp; Payment Processing Fees</strong> — Stripe, PayPal,
        bank account fees, wire transfer fees. These add up and are fully
        deductible.
      </p>
      <p>
        <strong>Education &amp; Training</strong> — Courses, conferences,
        books, professional development directly related to your current
        business.
      </p>
      <p>
        <strong>Licenses &amp; Permits</strong> — Annual business
        registration, professional licenses, local permits.
      </p>
      <p>
        <strong>Dues &amp; Memberships</strong> — Professional organizations,
        industry associations.
      </p>
      <p>
        That&apos;s 15 categories. For most solopreneurs, this is enough. If
        you find yourself creating a 30th category for one weird transaction,
        you&apos;re probably overcomplicating it.
      </p>

      <h2>The home office deduction: worth doing, with rules</h2>
      <p>
        The home office deduction is one of the biggest opportunities
        solopreneurs miss or mess up.
      </p>
      <p>
        <strong>The space must be used regularly and exclusively for business.</strong>{" "}
        A spare bedroom that&apos;s also the guest room and where your kid
        does homework doesn&apos;t qualify. A dedicated room or clearly
        separated area used only for work does qualify.
      </p>
      <p>
        <strong>You have two methods to calculate it.</strong> The simplified
        method is $5 per square foot, up to 300 square feet (so $1,500 max).
        The regular method calculates the actual percentage of your home used
        for business and applies that to your real expenses. The regular
        method is more work but usually results in a bigger deduction.
      </p>
      <p>
        <strong>Keep documentation.</strong> Measure the square footage. Save
        the paperwork. If you&apos;re ever audited, the IRS will want to see
        this.
      </p>

      <h2>Mileage: track it or lose it</h2>
      <p>
        If you use your car for business at all, you need to track mileage.
        Not tracking it means leaving money on the table — every business
        mile is worth about 67 cents as a deduction.
      </p>
      <p>
        The easiest way is a free app like MileIQ or Stride that runs in the
        background on your phone and lets you swipe business or personal on
        each trip. Less easy but also fine: a paper log or spreadsheet where
        you write down date, destination, purpose, and miles for every
        business trip.
      </p>
      <p>
        What you can&apos;t do is reconstruct mileage at the end of the year
        by guessing. The IRS has rejected claimed mileage in audits
        specifically because the taxpayer couldn&apos;t show contemporaneous
        records.
      </p>

      <h2>The &ldquo;personal use of business account&rdquo; problem</h2>
      <p>
        If you run personal expenses through a business account, every one of
        those transactions needs to be categorized as an Owner Draw (or
        Distribution, depending on your business structure) — not as a
        business expense. This is one of the most common errors in DIY
        bookkeeping.
      </p>
      <p>
        The fix going forward is simple: don&apos;t mix. Use business
        accounts for business, personal accounts for personal. Pay yourself a
        regular amount from the business to the personal account, and treat
        that transfer as an Owner Draw.
      </p>

      <h2>When in doubt, err toward simple</h2>
      <p>
        The IRS and your CPA both prefer consistent simplicity over creative
        categorization. The goal of categorization isn&apos;t perfection —
        it&apos;s creating books you can actually use and a return you can
        actually file. Consistent-and-close beats perfect-but-never-finished
        every single time.
      </p>

      <h2>When it&apos;s worth hiring this out</h2>
      <p>Most solopreneurs can categorize their own expenses with this framework. You should consider hiring it out if:</p>
      <ul>
        <li>Your transaction volume is getting high (100+ per month)</li>
        <li>You have inventory, contractors, or multiple revenue streams</li>
        <li>You&apos;ve been miscategorizing and want a clean slate</li>
        <li>You just don&apos;t want to, and can afford not to</li>
      </ul>
      <p>
        If any of that describes you,{" "}
        <Link href="/contact">a free 20-minute consultation</Link> is a good
        way to figure out whether monthly bookkeeping makes sense for your
        situation.
      </p>
    </BlogPostLayout>
  );
}
