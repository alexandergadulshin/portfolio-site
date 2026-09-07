"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/nav";

// Replaces the template's jQuery nav panel. Below 840px the template
// hides the header and shows a hamburger bar; the panel slides in
// when body carries the navPanel-visible class.
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("navPanel-visible", open);
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e) => {
      if (!e.target.closest("#navPanel, #navButton")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <>
      <div id="navButton">
        <a
          href="#navPanel"
          className="toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={(e) => {
            e.preventDefault();
            setOpen((v) => !v);
          }}
        ></a>
      </div>
      <div id="navPanel" inert={!open}>
        <nav aria-label="Site">
          <Link className="link depth-0" href="/">
            Home
          </Link>
          {navLinks.map((link) => (
            <Link key={link.href} className="link depth-0" href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="link depth-0" href="/contact">
            Book a call
          </Link>
        </nav>
      </div>
    </>
  );
}
