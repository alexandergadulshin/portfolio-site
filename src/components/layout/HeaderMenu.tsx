"use client";
import { useHeaderMenu } from "@/hooks/useHeaderMenu";
import Link from "next/link";

export default function HeaderMenu() {
    const menu = useHeaderMenu();
    return (
        <ul>
            {menu.map((item) => (
                <li key={item.id}>
                    <Link href={item.href}>{item.label}</Link>
                </li>
            ))}
        </ul>
    );
}
