import "./globals.css";
import Link from "next/link";
import { site } from "../lib/site";
import SiteNav from "../components/SiteNav";

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
  themeColor: "#191613",
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span className="footer-brand">
          <span className="hub" aria-hidden="true"></span>
          {site.name}
        </span>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
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
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="wrap">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
