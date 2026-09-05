import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <h1>This page does not exist.</h1>
      <p className="lede">
        The address may have a typo, or the page moved. The home page has the
        full map of the site.
      </p>
      <div className="cta-row">
        <Link href="/" className="button button-gold">
          Go to the home page
        </Link>
        <Link href="/contact">Or book a call</Link>
      </div>
    </>
  );
}
