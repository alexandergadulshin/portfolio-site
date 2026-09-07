import Link from "next/link";

export const metadata = { title: "Client website builds" };

export default function ClientWebsites() {
  return (
    <section id="main" className="container medium">
      <header>
        <h2>Client website builds</h2>
        <p>This case study is in progress.</p>
      </header>
      <div className="box special">
        <div className="image featured cover cover-mint">
          <span className="cover-figure">In progress</span>
          <span className="cover-label">write-up coming soon</span>
        </div>
        <p>
          The finished page will show before-and-after screenshots with load
          times, and the one action each site points at. I am collecting
          client permissions now. Until then, the Syrex case study shows how I
          work.
        </p>
        <ul className="actions special">
          <li>
            <Link href="/work/syrex" className="button primary">
              Read the Syrex case study
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
