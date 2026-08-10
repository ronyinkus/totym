"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/services/monthly-bookkeeping", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/totym-finance-logo.jpg"
            alt="TOTYM Finance"
            width={44}
            height={37}
            className="h-9 w-auto object-contain"
            priority
          />
          <span className="font-medium text-brand-navy">TOTYM Finance</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-brand-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Book a call
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <nav className="container-wide py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center mt-2"
            >
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
