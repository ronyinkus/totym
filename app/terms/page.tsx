import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for TOTYM Bookkeeping Services LLC.",
};

/**
 * ============================================================================
 * TERMS OF SERVICE — WEBSITE USE
 * ============================================================================
 * IMPORTANT: This is a starter Terms of Service tailored to the public
 * website for a bookkeeping LLC. It is NOT legal advice. Before launch, have
 * an attorney review this — especially the limitation of liability,
 * indemnification, and governing law sections.
 *
 * The actual SERVICE relationship with each client (scope, fees, liability,
 * confidentiality, termination) lives in a separate engagement letter signed
 * by both parties — NOT on this page.
 *
 * Update the EFFECTIVE_DATE constant when this policy is published or
 * substantively changed.
 * ============================================================================
 */

const EFFECTIVE_DATE = "May 1, 2026";

export default function TermsPage() {
  return (
    <div className="container-narrow py-14 md:py-16">
      <p className="eyebrow mb-3">Legal</p>
      <h1 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mb-2">
        Terms of Service
      </h1>
      <p className="text-xs text-slate-500 mb-8">
        Effective date: {EFFECTIVE_DATE}
      </p>
      <div className="prose-custom">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
          website at totymservices.com (the &ldquo;Site&rdquo;), operated by
          TOTYM Bookkeeping Services LLC (&ldquo;TOTYM,&rdquo;
          &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By
          accessing or using the Site, you agree to these Terms. If you do
          not agree, please do not use the Site.
        </p>

        <h2>Use of the Site</h2>
        <p>
          The Site is provided for general informational purposes about our
          bookkeeping services and to allow visitors to contact us or schedule
          consultations. You agree to use the Site only for lawful purposes
          and in a way that does not infringe on the rights of others or
          interfere with anyone else&apos;s use of the Site.
        </p>

        <h2>No professional advice</h2>
        <p>
          The information on this Site, including blog posts and educational
          content, is provided for general informational purposes only and is
          not tax, accounting, legal, or financial advice. Reading the Site
          does not create a professional relationship between you and TOTYM.
          You should consult a qualified professional regarding your specific
          situation before acting on any information you read here.
        </p>

        <h2>Service engagements</h2>
        <p>
          If you choose to retain TOTYM for bookkeeping or related services,
          the terms of that engagement — including scope of work, fees,
          deliverables, confidentiality, term, and termination — will be set
          out in a separate written engagement letter signed by both parties.
          Nothing on this Site constitutes an offer of professional services,
          and no engagement is formed until a signed engagement letter is in
          place.
        </p>

        <h2>Booking a consultation</h2>
        <p>
          You may schedule a free consultation through our Site. Booking a
          consultation does not create a client relationship and does not
          obligate either party to enter into an engagement. Information you
          share during a consultation is treated confidentially in accordance
          with our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The content of the Site — including text, graphics, logos, the
          TOTYM name and brand, and the underlying code — is owned by TOTYM
          Bookkeeping Services LLC or its licensors and is protected by U.S.
          copyright and trademark law. You may view and share links to the
          Site for personal, non-commercial purposes. You may not copy,
          reproduce, republish, or otherwise exploit any content from the
          Site without our prior written permission.
        </p>

        <h2>Third-party links</h2>
        <p>
          The Site may contain links to third-party websites and services
          (such as QuickBooks, Calendly, or other resources we reference). We
          do not control these third parties and are not responsible for
          their content, policies, or practices. Following a link is at your
          own risk.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The Site is provided &ldquo;as is&rdquo; and &ldquo;as
          available,&rdquo; without warranties of any kind, express or
          implied. We do not warrant that the Site will be uninterrupted or
          error-free, that defects will be corrected, or that the Site or the
          server that makes it available are free of viruses or other harmful
          components.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, TOTYM Bookkeeping Services
          LLC and its members, employees, and contractors will not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising out of or related to your use of the Site,
          including any reliance on information contained on the Site. Our
          total liability arising from your use of the Site is limited to
          one hundred dollars ($100). Nothing in these Terms limits liability
          for matters that cannot be limited under applicable law.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless TOTYM Bookkeeping Services
          LLC and its members, employees, and contractors from any claim or
          demand, including reasonable attorneys&apos; fees, arising out of
          your breach of these Terms or your misuse of the Site.
        </p>

        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of Ohio, without
          regard to its conflict-of-laws principles. Any dispute arising from
          your use of the Site will be brought exclusively in the state or
          federal courts located in Warren County, Ohio, and you consent to
          the personal jurisdiction of those courts.
        </p>

        <h2>Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will
          revise the &ldquo;Effective date&rdquo; above. Continued use of the
          Site after changes constitutes acceptance of the updated Terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms? Email{" "}
          <a href="mailto:yinks@totymservices.com">yinks@totymservices.com</a>{" "}
          or write to us at:
        </p>
        <p>
          TOTYM Bookkeeping Services LLC
          <br />
          Mason, Ohio
        </p>
      </div>
    </div>
  );
}
