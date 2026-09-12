import { WorkItem } from "@/components/site/WorkCard";

// Case studies in the order the Work page shows them.
export const workItems: WorkItem[] = [
    {
        href: "/work/syrex",
        title: "UGC video generator for Syrex Consulting",
        tag: "AI tool, case study",
        image: "/assets/img/site/card-syrex.jpg",
        width: 408,
        height: 430,
    },
    {
        href: "/work/product-radar",
        title: "Product research dashboard",
        tag: "AI tool, client build",
        image: "/assets/img/site/card-radar.jpg",
        width: 408,
        height: 430,
    },
    {
        href: "/work/video-bot",
        title: "UGC video bot",
        tag: "AI tool, my own product",
        image: "/assets/img/site/card-video-bot.jpg",
        width: 408,
        height: 430,
    },
    {
        // Sends visitors to the services page until a client build ships.
        href: "/services",
        title: "Client website builds",
        tag: "In progress",
        image: "/assets/img/site/card-clients.jpg",
        width: 408,
        height: 430,
    },
];

// The two the home page features.
export const homeWorkItems = workItems.filter((item) => ["/work/syrex", "/work/product-radar"].includes(item.href));
