import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="brand" href="/">
          <span className="brand-mark">P</span>
          <span>Portu</span>
        </Link>
        <p>The infrastructure layer for human-agent collaboration.</p>
        <span>Backed by builders of agent-native companies</span>
      </div>
      <div>
        <h4>Company</h4>
        <Link href="/demo">Contact</Link>
        <Link href="/experts">Careers</Link>
      </div>
      <div>
        <h4>Legal</h4>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
      <p className="copyright">(c) 2026 Portu Labs. All rights reserved.</p>
    </footer>
  );
}
