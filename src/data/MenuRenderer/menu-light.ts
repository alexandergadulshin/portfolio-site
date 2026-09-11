import { MenuItem } from "@/types/menu-dt";

// The site's sections, in nav order. "Book a call" is the one
// call to action and keeps that exact label everywhere.
export const lightMenu: MenuItem[] = [
    { id: 1, type: "link", label: "Work", href: "/work" },
    { id: 2, type: "link", label: "Services", href: "/services" },
    { id: 3, type: "link", label: "About", href: "/about" },
    { id: 4, type: "link", label: "Writing", href: "/writing" },
    { id: 5, type: "link", label: "Book a call", href: "/contact" },
];
