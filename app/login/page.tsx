import { AuthForm } from "@/components/AuthForm";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Log in"
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="auth-shell">
        <section className="auth-card">
          <AuthForm mode="login" />
          <AuthVisual />
        </section>
      </main>
    </>
  );
}

function AuthVisual() {
  return (
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
        <h2>Human experts inside your agent workflow</h2>
        <p>Open the dashboard, route stuck agent tasks, and see live expert coverage.</p>
      </div>
      <div className="auth-logos" aria-hidden="true">
        <span>Claude Code</span>
        <span>OpenClaw</span>
        <span>Codex</span>
        <span>Lovable</span>
        <span>Cursor</span>
        <span>Cline</span>
      </div>
    </aside>
  );
}
