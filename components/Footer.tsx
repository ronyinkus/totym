import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/50 mt-auto">
      <div className="container-wide py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/totym-finance-logo.jpg"
                alt="TOTYM Finance"
                width={40}
                height={34}
                className="h-8 w-auto object-contain"
              />
              <span className="font-medium text-brand-navy text-sm">
                TOTYM Finance
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              QuickBooks-certified bookkeeping for small businesses. Based in
              Mason, Ohio.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium text-brand-navy uppercase tracking-wider mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="/services/monthly-bookkeeping"
                  className="hover:text-brand-navy"
                >
                  Monthly Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/catch-up-bookkeeping"
                  className="hover:text-brand-navy"
                >
                  Catch-Up Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tax-ready-financials"
                  className="hover:text-brand-navy"
                >
                  Tax-Ready Financials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-brand-navy uppercase tracking-wider mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-brand-navy">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-navy">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-navy">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-navy">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-brand-navy uppercase tracking-wider mb-3">
              Get in touch
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Mason, Ohio</li>
              <li>
                <a
                  href="mailto:yinks@totymservices.com"
                  className="hover:text-brand-navy"
                >
                  yinks@totymservices.com
                </a>
              </li>
              <li>
                <a href="tel:+15133608842" className="hover:text-brand-navy">
                  513-360-8842
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/135325775/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-brand-navy"
                  aria-label="TOTYM Finance on LinkedIn"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61591698123902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-brand-navy"
                  aria-label="TOTYM Finance on Facebook"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/totymfinance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-brand-navy"
                  aria-label="TOTYM Finance on Instagram"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.26.15 4.78 1.69 4.93 4.93.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.78-4.93 4.93-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.27-.15-4.78-1.7-4.93-4.93-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.67-4.78 4.93-4.93C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.69.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} TOTYM Bookkeeping Services LLC</span>
          <div className="flex items-center gap-5">
            <span>QuickBooks Certified ProAdvisor</span>
            <Link href="/privacy" className="hover:text-brand-navy">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-navy">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
