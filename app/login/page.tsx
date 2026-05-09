import Link from "next/link";
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
          <div className="auth-left">
            <div className="auth-avatar" aria-hidden="true">
              <span />
              <i />
            </div>
            <h1>Create an account</h1>
            <p className="auth-subtitle">Get started with Portu</p>

            <button className="auth-google" type="button">
              <span className="auth-google-mark">G</span>
              <span>Sign Up With Google</span>
            </button>

            <div className="auth-divider" aria-hidden="true" />

            <form className="auth-form">
              <label>
                Email Address
                <input type="email" placeholder="you@example.com" autoComplete="email" />
              </label>
              <label>
                Password
                <div className="auth-password">
                  <input type="password" placeholder="Enter your Password" autoComplete="new-password" />
                  <span aria-hidden="true">◔</span>
                </div>
              </label>
              <label>
                Confirm Password
                <div className="auth-password">
                  <input type="password" placeholder="Confirm your password" autoComplete="new-password" />
                  <span aria-hidden="true">◔</span>
                </div>
              </label>
              <button className="auth-submit" type="button">
                Create Account
              </button>
            </form>

            <p className="auth-footer">
              Already have an account? <Link href="/login">Sign In</Link>
            </p>
          </div>

          <aside className="auth-visual" aria-label="Portu illustration">
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
              <h2>Connect your AI agents with human experts</h2>
              <p>Real-time access to verified experts when your AI need human expertise. Get unstuck faster</p>
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
        </section>
      </main>
    </>
  );
}
