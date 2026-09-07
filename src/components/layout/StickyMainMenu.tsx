"use client";
import { useHeaderMenu } from "@/hooks/useHeaderMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Off-canvas menu: one flat list of links, current section marked.
const StickyMainMenu = ({ onClose }: { onClose?: () => void }) => {
    const menu = useHeaderMenu();
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
