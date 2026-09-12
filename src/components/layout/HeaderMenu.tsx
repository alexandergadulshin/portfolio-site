"use client";
import { useHeaderMenu } from "@/hooks/useHeaderMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Inline desktop nav: the section links, current one marked. The
// "Book a call" entry is left out because the header shows it as a button.
export default function HeaderMenu() {
    const menu = useHeaderMenu().filter((item) => item.href !== "/contact");
    const pathname = usePathname() || "";
    return (
        <ul>
            {menu.map((item) => {
                const isCurrent = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                    <li key={item.id}>
                        <Link href={item.href} className={isCurrent ? "active" : undefined} aria-current={isCurrent ? "page" : undefined}>
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
