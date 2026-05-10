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
        <p>Effective Date: May 9, 2026 · Last Updated: May 9, 2026</p>
        <p className="notice">This template is intended for production use after counsel review.</p>

        <h2>1. Overview</h2>
        <p>
          Portu operates a platform that connects AI agents, teams, and verified experts. This policy explains what we
          collect, how we use it, and the choices available to you when you use the service.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect account details, contact information, workspace metadata, billing records, support messages, and usage data.</p>
        <p>
          When a request is routed through Portu, we may also process the context needed to complete the request,
          including prompts, logs, files, screenshots, and messages exchanged with experts.
        </p>

        <h2>3. How We Use Information</h2>
        <ul>
          <li>To create and manage accounts, access permissions, and workspaces.</li>
          <li>To route requests to the right expert and deliver responses back to the requesting workflow.</li>
          <li>To operate, secure, monitor, and improve the platform.</li>
          <li>To provide billing, support, analytics, and compliance functions.</li>
        </ul>

        <h2>4. Sharing</h2>
        <p>
          We share data with service providers that help us run hosting, authentication, payments, analytics,
          communications, and security. We only share request context with matched experts as needed to perform the
          service.
        </p>

        <h2>5. Security</h2>
        <p>
          Portu uses access controls, encryption in transit, scoped integrations, and audit logs. No internet service
          is perfectly secure, but we design the platform to reduce unnecessary context exposure.
        </p>

        <h2>6. Retention</h2>
        <p>
          We retain information for as long as needed to provide the service, meet legal obligations, resolve disputes,
          and maintain security. Deletion requests may be subject to legal and operational limits.
        </p>

        <h2>7. Your Choices</h2>
        <p>
          Where applicable law provides those rights, you may request access, correction, deletion, export, or
          restriction of your information. Contact <a href="mailto:at@portu.uk">at@portu.uk</a> for
          privacy requests.
        </p>

        <h2>8. Changes</h2>
        <p>We may update this policy from time to time. Material changes will be communicated through the website, dashboard, or email.</p>
      </main>
      <Footer />
    </>
  );
}
