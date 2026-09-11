"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
    className?: string;
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
};

// Links with a scheme (mailto:, tel:, http:) pass through untouched.
// Site paths are normalized to a leading slash.
export default function SmartLink({ className, href, children, onClick }: Props) {
    const pathname = usePathname() || "";
    const isDark = pathname.startsWith("/dark");

    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) {
        return <Link className={className} href={href} onClick={onClick}>{children}</Link>;
    }

    const cleanHref = href.startsWith("/") || href.startsWith("#") ? href : `/${href}`;

    const finalHref = isDark
        ? cleanHref.startsWith("/dark")
            ? cleanHref
            : `/dark${cleanHref}`
        : cleanHref.replace(/^\/dark/, "");

    return <Link className={className} href={finalHref} onClick={onClick}>{children}</Link>;
}
