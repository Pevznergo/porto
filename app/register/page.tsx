import { AuthForm } from "@/components/AuthForm";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Create account"
};

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="auth-shell">
        <section className="auth-card">
          <AuthForm mode="register" />
          <aside className="auth-visual" aria-label="Portu workspace preview">
            <div className="auth-visual-brand">
              <span className="brand-mark">P</span>
              <span>Portu</span>
            </div>
            <div className="auth-visual-art">
              <div className="auth-visual-glow" />
              <div className="auth-visual-node">
                <span>Pt</span>
              </div>
            </div>
            <div className="auth-visual-copy">
              <h2>Start with a real workspace, not a dead form</h2>
              <p>Create an account and land in a dashboard with active requests, experts, and usage.</p>
            </div>
            <div className="auth-logos" aria-hidden="true">
              <span>Agents</span>
              <span>Experts</span>
              <span>Requests</span>
              <span>SLAs</span>
              <span>Billing</span>
              <span>Audit</span>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
