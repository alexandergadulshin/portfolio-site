"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../lib/site";
import { navLinks } from "../lib/nav";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header id="header" className={isHome ? "alt" : undefined}>
      <h1>
        <Link href="/">{site.name}</Link>
      </h1>
      <nav id="nav" aria-label="Site">
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={isActive(link.href) ? "active" : undefined}
            >
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="button">
              Book a call
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
