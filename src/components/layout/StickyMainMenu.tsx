"use client";
import { useHeaderMenu } from "@/hooks/useHeaderMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Overlay menu list: one flat list of section links, current one marked.
const StickyMainMenu = ({ onClose, exclude = [] }: { onClose?: () => void; exclude?: string[] }) => {
    const menu = useHeaderMenu().filter((item) => !exclude.includes(item.href));
    const pathname = usePathname() || "";

    return (
        <ul>
            {menu.map((item) => {
                const isCurrent = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                    <li key={item.id} className={isCurrent ? "active" : undefined}>
                        <Link href={item.href} onClick={onClose} aria-current={isCurrent ? "page" : undefined}>
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default StickyMainMenu;
