import Link from "next/link";
import { navItems } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Porto home">
        <span className="brand-mark">P</span>
        <span>Porto</span>
      </Link>
      <input className="nav-check" id="nav-check" type="checkbox" aria-label="Toggle navigation" />
      <label className="nav-toggle" htmlFor="nav-check">
        Menu
      </label>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.slice(0, 3).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link href="/login">Log in</Link>
        <Link className="button button-small" href="/start">
          Get Started
        </Link>
      </div>
    </header>
  );
}
