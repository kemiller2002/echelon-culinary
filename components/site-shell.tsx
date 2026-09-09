import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type NavKey =
  | 'home'
  | 'consulting'
  | 'clarity'
  | 'research'
  | 'speaking'
  | 'about'
  | 'contact';

const navItems: Array<{ href: string; label: string; key: NavKey }> = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/consulting', label: 'Consulting', key: 'consulting' },
  { href: '/clarity', label: 'Clarity', key: 'clarity' },
  { href: '/research', label: 'Research', key: 'research' },
  { href: '/speaking', label: 'Speaking', key: 'speaking' },
  { href: '/about', label: 'About', key: 'about' },
];

export function SiteHeader({ current }: { current?: NavKey }) {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Echelon Foundry Culinary home"
        >
          <span className="brand-mark" aria-hidden="true">
            EF
          </span>
          <span className="brand-name">
            <strong>Echelon / Foundry</strong>
            <span>Culinary practice</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              aria-current={current === item.key ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-cta"
            href="/contact"
            aria-current={current === 'contact' ? 'page' : undefined}
          >
            Let&apos;s talk
          </Link>
        </nav>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.key}
                aria-current={current === item.key ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              aria-current={current === 'contact' ? 'page' : undefined}
            >
              Let&apos;s talk
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <p className="footer-brand">Echelon / Foundry</p>
          <p>Foodservice operations, decision-making, and technology.</p>
        </div>
        <div className="footer-contact">
          <Link href="/contact">
            Discuss a foodservice problem
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </Link>
          <a href="mailto:kevin@echelonfoundry.com">kevin@echelonfoundry.com</a>
        </div>
      </div>
      <div className="page-shell footer-meta">
        <span>© 2026 Echelon Foundry</span>
        <span>Indianapolis, Indiana</span>
        <a href="https://echelonfoundry.com">Parent practice ↗</a>
      </div>
    </footer>
  );
}
