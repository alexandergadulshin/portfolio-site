import Link from "next/link";

export const metadata = { title: "Client website builds" };

export default function ClientWebsites() {
  return (
    <>
      <h1>Client website builds</h1>
      <p className="lede">
        This case study is in progress. The finished page will show
        before-and-after screenshots, load times, and the one action each site
        points at.
      </p>
      <p className="muted">
        I am collecting client permissions now, and the write-up goes live
        soon. Until then, the Syrex case study shows how I work.
      </p>
      <div className="cta-row">
        <Link href="/work/syrex">Read the Syrex case study</Link>
        <Link href="/contact" className="cta">
          Book a call
        </Link>
      </div>
    </>
  );
}
