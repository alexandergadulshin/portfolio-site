import "./vendor/alpha.css";
import "./vendor/fontawesome.css";
import "./globals.css";
import Link from "next/link";
import { site } from "../lib/site";
import SiteHeader from "../components/SiteHeader";
import MobileNav from "../components/MobileNav";

const title = `${site.name}: web design and AI tools for small businesses`;
const description =
  "Freelance website design and AI tool installation for small business owner-operators.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description,
    url: "/",
  },
};

export const viewport = {
  themeColor: "#444444",
};

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <ul className="icons">
        <li>
          <a href={`mailto:${site.email}`} className="icon solid fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          &copy; {year} {site.name}
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div id="page-wrapper">
          <SiteHeader />
          {children}
          <Footer />
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
