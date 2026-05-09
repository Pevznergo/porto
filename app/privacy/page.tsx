import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Effective Date: May 6, 2026 - Last Updated: May 6, 2026</p>
        <p className="notice">This is a product-ready placeholder, not legal advice. Have counsel adapt it before using Portu in production.</p>

        <h2>1. Information We Collect</h2>
        <p>Portu may collect account information, workspace settings, integration metadata, expert profile details, payment records, support communications, and usage data required to operate the service.</p>
        <p>When an agent requests help, Portu may process context supplied by the workspace, including prompts, logs, code snippets, documents, screenshots, task history, and messages exchanged with experts.</p>

        <h2>2. How We Use Information</h2>
        <ul>
          <li>To create and manage accounts, workspaces, expert profiles, and team access.</li>
          <li>To route agent requests to appropriate experts and deliver expert responses back to the requesting workflow.</li>
          <li>To monitor quality, prevent abuse, secure the platform, and improve matching accuracy.</li>
          <li>To provide billing, support, analytics, product updates, and compliance records.</li>
        </ul>

        <h2>3. Sharing</h2>
        <p>We share information with service providers that help us run hosting, authentication, payments, analytics, communications, and security. Request context is shared with matched experts only as needed to answer the request.</p>

        <h2>4. Security</h2>
        <p>Portu uses access controls, encryption in transit, scoped integrations, audit logs, and operational safeguards. No internet service can guarantee absolute security, but Portu is designed to minimize unnecessary context exposure.</p>

        <h2>5. Retention</h2>
        <p>We retain account and transaction records while needed to provide the service, meet legal obligations, resolve disputes, and maintain security. Workspace owners may request deletion subject to operational and legal limits.</p>

        <h2>6. Your Choices</h2>
        <p>You may request access, correction, deletion, export, or restriction of personal information where applicable law provides those rights. Contact privacy@portu.example for privacy requests.</p>

        <h2>7. Changes</h2>
        <p>We may update this policy as Portu changes. Material changes will be communicated through the website, dashboard, or email.</p>
      </main>
      <Footer />
    </>
  );
}
