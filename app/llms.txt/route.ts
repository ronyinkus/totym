const content = `# TOTYM Finance

> TOTYM Finance is TOTYM Bookkeeping Services LLC, a QuickBooks-certified bookkeeping firm based in Mason, Ohio and serving small businesses across the United States.

## Services

- [Monthly Bookkeeping](https://www.totymfinance.com/services/monthly-bookkeeping): Transaction categorization, account reconciliation, monthly financial reports, QuickBooks Online maintenance, and year-end tax-ready records.
- [Catch-Up Bookkeeping](https://www.totymfinance.com/services/catch-up-bookkeeping): Historical cleanup, reconciliation, chart-of-accounts repair, and organized financial reports for overdue books.
- [Tax-Ready Financials](https://www.totymfinance.com/services/tax-ready-financials): Reconciled year-end financial statements and an organized handoff package for a CPA or tax preparer.

## Business facts

- Legal name: TOTYM Bookkeeping Services LLC
- Brand name: TOTYM Finance
- Founder and primary bookkeeper: Yinks
- Credentials: Intuit QuickBooks Online Level 2 Certified ProAdvisor; Intuit QuickBooks Payroll Certified ProAdvisor
- Location: Mason, Ohio, United States
- Service area: United States
- Phone: +1-513-360-8842
- Email: yinks@totymservices.com
- Pricing: Fixed monthly or project pricing is provided in writing after a free 30-minute consultation.

## Key pages

- [About](https://www.totymfinance.com/about)
- [Pricing](https://www.totymfinance.com/pricing)
- [Book a consultation](https://www.totymfinance.com/contact)
- [Bookkeeping resources](https://www.totymfinance.com/blog)
- [Sitemap](https://www.totymfinance.com/sitemap.xml)
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
