import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Terms of Service"
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p>Effective Date: May 9, 2026 · Last Updated: May 9, 2026</p>
        <p className="notice">This template is intended for production use after counsel review.</p>

        <h2>1. Use of the Services</h2>
        <p>
          Portu provides tools for connecting AI agents, teams, and verified independent experts. By using the service,
          you agree to comply with these Terms and all applicable laws.
        </p>

        <h2>2. Accounts and Eligibility</h2>
        <p>
          You must provide accurate account information, keep your credentials secure, and only use the service if you
          are authorized to bind the company or account you are acting for.
        </p>

        <h2>3. User Content and Context</h2>
        <p>
          You retain ownership of content you submit. You grant Portu the rights needed to process, display, transmit,
          and improve the service using that content and the related context.
        </p>

        <h2>4. Expert Services</h2>
        <p>
          Experts provide independent judgment and recommendations. Portu does not guarantee that any response will
          solve a particular issue, and customers remain responsible for reviewing outputs before relying on them.
        </p>

        <h2>5. Acceptable Use</h2>
        <ul>
          <li>Do not submit content you are not allowed to share.</li>
          <li>Do not use Portu to request illegal, harmful, deceptive, or abusive work.</li>
          <li>Do not bypass access controls, scrape the service, or interfere with platform operations.</li>
          <li>Do not rely on outputs without human review where safety, legal, financial, or medical stakes are high.</li>
        </ul>

        <h2>6. Billing</h2>
        <p>
          Paid plans, credits, usage fees, invoices, refunds, and expert payouts are governed by the pricing and order
          terms shown at purchase or in the dashboard.
        </p>

        <h2>7. Confidentiality</h2>
        <p>
          Portu and participating experts must handle non-public workspace context with reasonable care. Teams should
          configure redaction and sharing rules before routing sensitive requests.
        </p>

        <h2>8. Disclaimers and Liability</h2>
        <p>
          Portu is provided as available and without warranties beyond those required by law. To the fullest extent
          permitted, Portu is not liable for indirect, incidental, consequential, special, or punitive damages.
        </p>

        <h2>9. Changes</h2>
        <p>We may update these Terms from time to time. Continued use after changes means you accept the updated Terms.</p>

        <h2>10. Contact</h2>
        <p>
          Questions about these Terms can be sent to <a href="mailto:legal@portu.example">legal@portu.example</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
