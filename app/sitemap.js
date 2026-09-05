import { site } from "../lib/site";

const routes = [
  "",
  "/work",
  "/work/syrex",
  "/work/client-websites",
  "/services",
  "/writing",
  "/writing/myanimelist-analysis",
  "/writing/platform-comparison",
  "/about",
  "/contact",
];

export default function sitemap() {
  return routes.map((path) => ({ url: `${site.url}${path}` }));
}
