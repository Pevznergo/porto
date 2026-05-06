import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" href="/">
          <span className="brand-mark">P</span>
          <span>Porto</span>
        </Link>
        <p>The human expertise layer for agentic work.</p>
      </div>
      <div>
        <h4>Company</h4>
        <Link href="/demo">Contact</Link>
        <Link href="/experts">For Experts</Link>
      </div>
      <div>
        <h4>Legal</h4>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
      <p className="copyright">(c) 2026 Porto Labs. All rights reserved.</p>
    </footer>
  );
}
