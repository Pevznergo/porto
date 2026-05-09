import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="brand" href="/">
          <span className="brand-mark">P</span>
          <span>Portu</span>
        </Link>
        <p>The infrastructure layer for human-agent collaboration. Built for the future of work.</p>
        <span>Backed by builders of agent-native companies</span>
      </div>
      <div>
        <h4>Company</h4>
        <Link href="mailto:support@portu.example">Support</Link>
        <Link href="mailto:hello@portu.example">Contact</Link>
        <Link href="/login">Get Started</Link>
      </div>
      <div>
        <h4>Legal</h4>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
      <p className="copyright">(c) 2026 Pevzner LLC. All rights reserved.</p>
    </footer>
  );
}
