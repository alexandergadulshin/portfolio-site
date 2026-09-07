import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section id="main" className="container medium">
      <header>
        <h2>This page does not exist.</h2>
        <p>The address may have a typo, or the page moved.</p>
      </header>
      <div className="box special">
        <p>The home page has the full map of the site.</p>
        <ul className="actions special">
          <li>
            <Link href="/" className="button primary">
              Go to the home page
            </Link>
          </li>
          <li>
            <Link href="/contact" className="button alt">
              Book a call
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
