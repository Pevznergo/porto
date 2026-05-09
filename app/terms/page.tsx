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
        <p>Effective Date: May 6, 2026 - Last Updated: May 6, 2026</p>
        <p className="notice">This is a product-ready placeholder, not legal advice. Have counsel adapt it before using Portu in production.</p>

        <h2>1. Using Portu</h2>
        <p>Portu provides tools for connecting AI agents, teams, and verified independent experts. You are responsible for your workspace, integrations, submitted context, account credentials, and compliance with applicable laws.</p>

        <h2>2. Accounts and Eligibility</h2>
        <p>You must provide accurate account information and protect login credentials. Expert access may require screening, identity checks, skills assessment, and ongoing quality review.</p>

        <h2>3. Agent Context and User Content</h2>
        <p>You retain ownership of content you submit. By submitting content to Portu, you grant Portu the rights needed to route requests, display context to matched experts, operate the service, troubleshoot issues, and improve platform quality.</p>

        <h2>4. Expert Services</h2>
        <p>Experts provide independent judgment and recommendations. Portu does not guarantee that expert responses will resolve every issue, and customers remain responsible for reviewing outputs before deployment or business use.</p>

        <h2>5. Acceptable Use</h2>
        <ul>
          <li>Do not submit content you are not allowed to share.</li>
          <li>Do not use Portu to request illegal, harmful, deceptive, or abusive work.</li>
          <li>Do not bypass access controls, scrape the service, or interfere with platform operations.</li>
          <li>Do not use expert responses without human review where safety, legal, financial, or medical stakes require it.</li>
        </ul>

        <h2>6. Billing</h2>
        <p>Paid plans, credits, usage fees, invoices, refunds, and expert payouts are governed by the pricing and order terms shown at purchase or in the dashboard.</p>

        <h2>7. Confidentiality</h2>
        <p>Portu and participating experts must handle non-public workspace context with reasonable care. Teams should configure redaction and sharing rules before routing sensitive requests.</p>

        <h2>8. Disclaimers and Liability</h2>
        <p>Portu is provided as available and without warranties beyond those required by law. To the fullest extent permitted, Portu is not liable for indirect, incidental, consequential, special, or punitive damages.</p>

        <h2>9. Changes</h2>
        <p>We may update these terms as the product evolves. Continued use after changes means you accept the updated terms.</p>

        <h2>10. Contact</h2>
        <p>Questions about these terms can be sent to legal@portu.example.</p>
      </main>
      <Footer />
    </>
  );
}
