"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          <span className="hub" aria-hidden="true"></span>
          {site.name}
        </Link>
        <nav className="site-nav" aria-label="Site">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="cta"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Book a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
