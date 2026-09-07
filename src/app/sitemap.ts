import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = ["", "/work", "/work/syrex", "/work/client-websites", "/services", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((path) => ({ url: `${site.url}${path}` }));
}
