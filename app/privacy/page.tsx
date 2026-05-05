import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for TOTYM Bookkeeping Services LLC.",
};

/**
 * ============================================================================
 * PRIVACY POLICY
 * ============================================================================
 * IMPORTANT: This is a starter privacy policy tailored to a bookkeeping LLC.
 * It is NOT legal advice. Before launch, have an attorney review this — or
 * generate a customized version through Termly (termly.io) or iubenda
 * (iubenda.com), both of which keep the policy updated as laws change.
 *
 * Update the EFFECTIVE_DATE constant when this policy is published or
 * substantively changed.
 * ============================================================================
 */

const EFFECTIVE_DATE = "May 1, 2026";

export default function PrivacyPage() {
  return (
    <div className="container-narrow py-14 md:py-16">
      <p className="eyebrow mb-3">Legal</p>
      <h1 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mb-2">
        Privacy Policy
      </h1>
      <p className="text-xs text-slate-500 mb-8">
        Effective date: {EFFECTIVE_DATE}
      </p>
      <div className="prose-custom">
        <p>
          TOTYM Bookkeeping Services LLC (&ldquo;TOTYM,&rdquo; &ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This
          Privacy Policy explains what information we collect when you visit
          our website at totymservices.com (the &ldquo;Site&rdquo;) or engage
          us for bookkeeping or related services, how we use that information,
          and the choices you have.
        </p>

        <h2>Information we collect</h2>
        <p>
          <strong>Information you provide directly.</strong> When you contact
          us, book a consultation, or become a client, we may collect your
          name, email address, phone number, business name, and any other
          information you choose to share with us.
        </p>
        <p>
          <strong>Information from client engagements.</strong> If you become
          a client, we receive financial information necessary to perform our
          services — including bank and credit card statements, invoices,
          receipts, payroll records, and access to accounting software such
          as QuickBooks Online. We treat this information as confidential.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Like most
          websites, our Site may collect limited technical information
          automatically, such as IP address, browser type, device information,
          referring URL, and pages visited. This is used to monitor site
          performance and improve user experience.
        </p>

        <h2>How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries and schedule consultations</li>
          <li>Provide bookkeeping, tax preparation, and related services</li>
          <li>Send invoices and process payments</li>
          <li>Communicate updates, reports, and important notices</li>
          <li>
            Comply with legal, tax, and regulatory obligations (including
            recordkeeping required of tax preparers under IRC § 7216)
          </li>
          <li>Improve our Site and services</li>
        </ul>

        <h2>How we share information</h2>
        <p>
          We do not sell your personal information. We share information only
          in the following limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> we rely on to operate, such as
            scheduling tools, secure document portals, accounting software,
            payment processors, and hosting providers. Each is bound by
            confidentiality obligations consistent with this policy.
          </li>
          <li>
            <strong>With your consent</strong> — for example, when you
            authorize us to share information with your tax preparer, lender,
            or other professional.
          </li>
          <li>
            <strong>Legal compliance</strong> — when required by law,
            subpoena, court order, or to protect our rights, property, or
            safety.
          </li>
          <li>
            <strong>Business transfers</strong> — in connection with a
            merger, acquisition, or sale of assets, subject to confidentiality
            protections.
          </li>
        </ul>

        <h2>Third-party services</h2>
        <p>
          The Site and our services may use third-party tools that have their
          own privacy policies, including but not limited to:
        </p>
        <ul>
          <li>
            <strong>QuickBooks Online (Intuit)</strong> — accounting platform
            used to maintain client books
          </li>
          <li>
            <strong>Calendly</strong> — scheduling consultations
          </li>
          <li>
            <strong>Vercel</strong> — website hosting
          </li>
          <li>
            <strong>Email providers</strong> — to send and receive
            correspondence
          </li>
        </ul>
        <p>
          We encourage you to review the privacy policies of these third
          parties for details on their data practices.
        </p>

        <h2>How we protect your information</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards
          designed to protect the information we collect — including encrypted
          file transfers for sensitive documents, password-protected
          accounting software, and limited access on a need-to-know basis. No
          method of transmission or storage is 100% secure, but we work to
          maintain protections appropriate to the sensitivity of the
          information involved.
        </p>

        <h2>How long we keep information</h2>
        <p>
          We retain client records for as long as necessary to provide
          services and to comply with legal, tax, and professional
          obligations. Tax-related records are typically retained for at least
          seven years after the relevant tax year, consistent with IRS
          guidance. Inactive prospect inquiries are deleted after a
          reasonable period unless you ask us to retain them.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, or restrict the use of your personal information. If you are
          a California resident, the California Consumer Privacy Act (CCPA)
          provides additional rights regarding your personal information. To
          exercise any rights, email us at{" "}
          <a href="mailto:hello@totymservices.com">hello@totymservices.com</a>
          . We will respond within the time required by applicable law.
        </p>

        <h2>Cookies and tracking</h2>
        <p>
          Our Site uses limited cookies and similar technologies to ensure the
          Site functions properly and to understand aggregate usage. You can
          control cookies through your browser settings. Disabling cookies may
          affect site functionality but will not prevent you from contacting
          us.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          Our Site and services are not directed to children under 13, and we
          do not knowingly collect personal information from children. If you
          believe a child has provided us with personal information, please
          contact us so we can delete it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &ldquo;Effective date&rdquo; above. Material changes
          will be communicated to active clients by email.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy or how we handle your information?
          Email{" "}
          <a href="mailto:hello@totymservices.com">hello@totymservices.com</a>{" "}
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
