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
              <li>
                <a
                  href="https://www.linkedin.com/in/yinks-oladapo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-navy"
                  aria-label="Visit Yinks Oladapo on LinkedIn"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
                  </svg>
                  <span>LinkedIn</span>
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
