# TOTYM Bookkeeping Services LLC — Website

A Next.js 14 marketing site for a solopreneur-focused bookkeeping business. Built with TypeScript, Tailwind CSS, and the App Router.

---

## Quick Start

**Prerequisites:** Node.js 18.17+ and npm (or pnpm/yarn).

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## What's in this project

### Pages

- **Homepage** (`app/page.tsx`) — Hero with founder photo, services, how it works, pricing teaser, final CTA
- **Services** (`app/services/*`) — Monthly Bookkeeping, Catch-Up Bookkeeping, Tax-Ready Financials
- **Pricing** (`app/pricing/page.tsx`) — Custom pricing philosophy, what's included, what affects the quote
- **Contact** (`app/contact/page.tsx`) — Calendly embed placeholder + email fallback
- **About** (`app/about/page.tsx`) — **Placeholder scaffold** — needs your personal story filled in
- **Blog** (`app/blog/*`) — Index page + 5 launch blog posts
- **Legal** (`app/privacy`, `app/terms`) — **Placeholder** — replace before launch

### Shared components

- `components/Header.tsx` — Responsive nav with mobile menu
- `components/Footer.tsx` — Full site footer
- `components/ServicePage.tsx` — Shared layout for all three services pages
- `components/BlogPostLayout.tsx` — Shared layout for all blog posts

### Data

- `lib/blog-posts.ts` — Blog post metadata (titles, slugs, categories, read times)

---

## Before You Launch — Required Updates

These items are marked throughout the code with comments. Search for "UPDATE" and "placeholder" to find them all.

1. **About page** (`app/about/page.tsx`) — Fill in your origin story, why solopreneurs, approach, and personal note. The page has placeholders marked with `[ORIGIN_STORY]`, `[WHY_SOLOPRENEURS]`, etc.

2. **Contact page Calendly embed** (`app/contact/page.tsx`) — Replace the placeholder div with your actual Calendly embed code. Detailed instructions are in the file comments.

3. **Domain URL** — Update in two places:
   - `app/sitemap.ts` (line ~4)
   - `app/robots.ts` (line ~8)

4. **Email address** — Currently set to `hello@totymservices.com`. If you change this, update across `Footer.tsx`, `contact/page.tsx`, `privacy/page.tsx`, and `terms/page.tsx`.

5. **Logo** — The current logo is a simple "T" monogram in `Header.tsx` and `Footer.tsx`. Replace with a real logo image when you have one.

6. **Privacy Policy & Terms of Service** — Replace the placeholders in `app/privacy/page.tsx` and `app/terms/page.tsx` with real legal copy. Options:
   - Termly ([termly.io](https://termly.io)) — free generator
   - iubenda ([iubenda.com](https://iubenda.com)) — paid but comprehensive
   - A lawyer (recommended once you have real client volume)

7. **Founder photo** — Already in `public/founder.jpg`. For best results, replace with a professional headshot when you have one (same filename, same 4:5 aspect ratio).

8. **Tax figures in blog posts** — Several posts reference IRS mileage rates, Ohio CAT thresholds, and Mason local tax rates. Verify these are current before launch, and review annually.

---

## Deployment

### Recommended: Vercel (free tier works)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repo.
3. Vercel auto-detects Next.js and deploys. No config needed.
4. Add your custom domain in Vercel's dashboard under Settings → Domains.

### Alternative: Netlify, Cloudflare Pages, Railway

Any host that supports Next.js 14 App Router will work. Vercel is the easiest because Next.js is their product.

### Domain

Once you've chosen a final business name, buy the .com domain through Namecheap, Porkbun, or Cloudflare. Point the DNS at Vercel per their instructions (usually just adding an A record or CNAME).

---

## Customization Guide

### Colors

Brand colors are defined in `tailwind.config.ts` under `theme.extend.colors.brand`:

- `navy: "#0C447C"` — primary dark navy for headings
- `navy-deep: "#042C53"` — deepest navy for strong contrast
- `blue: "#378ADD"` — primary accent blue for buttons and highlights
- `blue-mid: "#185FA5"` — medium blue for CTAs and hover states
- `blue-light: "#B5D4F4"` — light blue for borders
- `blue-pale: "#E6F1FB"` — pale blue for icon backgrounds
- `blue-wash: "#F0F7FE"` — wash blue for section backgrounds

To change the palette, update these values. Tailwind picks up the changes automatically on rebuild.

### Typography

The site uses two fonts loaded from Google Fonts (via Next.js font optimization):

- **Inter** (sans-serif) — body text, UI
- **Fraunces** (serif) — headings

Both are loaded in `app/layout.tsx`. To change, update the imports and the `fontFamily` block in `tailwind.config.ts`.

### Adding a new blog post

1. Add an entry to `lib/blog-posts.ts` with the new slug, title, description, category, and read time.
2. Create a new directory in `app/blog/[your-slug]/` with a `page.tsx` file.
3. Copy an existing blog post as a template and update the content.
4. The new post will automatically appear in the blog index and sitemap.

### Adding a new service page

1. Create a new directory in `app/services/[service-slug]/` with a `page.tsx` file.
2. Use the existing service pages as a template — import `ServicePage` from `@/components/ServicePage` and pass your data.
3. Add a link to the new service in `components/Footer.tsx` and `components/Header.tsx` (navigation).

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Typography:** Inter + Fraunces (Google Fonts, optimized via next/font)
- **Images:** next/image (automatic optimization)
- **Hosting:** Designed for Vercel, works anywhere Next.js runs

No database, no authentication, no API routes — this is a pure marketing site. All content is in the code (or in simple TypeScript data files), which means:

- Zero ongoing database costs
- Instant page loads (everything is pre-rendered)
- Simple to update (edit a file, push, deploy)
- Easy to migrate to a CMS later if needed

---

## Ongoing Costs (Estimated)

- **Domain:** ~$12-15/year
- **Vercel hosting:** Free tier works for this traffic level; Pro is $20/mo when you outgrow it
- **Calendly:** Free tier works for basic scheduling; Professional is $12/mo for more features
- **Email hosting (Google Workspace):** $7/user/mo for professional email
- **Optional: email capture tool (ConvertKit / Resend / MailerLite):** $0-30/mo depending on list size

**Realistic total to operate:** ~$20-70/month, depending on which optional tools you add.

---

## File Structure

```
clear-books-co/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + Tailwind
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Robots.txt
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── pricing/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── services/
│   │   ├── monthly-bookkeeping/page.tsx
│   │   ├── catch-up-bookkeeping/page.tsx
│   │   └── tax-ready-financials/page.tsx
│   └── blog/
│       ├── page.tsx            # Blog index
│       ├── how-to-catch-up-on-bookkeeping/page.tsx
│       ├── solopreneur-guide-categorizing-business-expenses/page.tsx
│       ├── quickbooks-self-employed-vs-quickbooks-online/page.tsx
│       ├── how-much-solopreneur-bookkeeping-costs/page.tsx
│       └── small-business-bookkeeping-mason-ohio/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServicePage.tsx
│   └── BlogPostLayout.tsx
├── lib/
│   └── blog-posts.ts           # Blog metadata
├── public/
│   └── founder.jpg             # Founder photo
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Need help?

The companion `.md` files delivered alongside this codebase contain the source copy for every page. If you ever need to revert copy changes or reference the original strategy, those are the canonical sources.

Good luck with the launch.
