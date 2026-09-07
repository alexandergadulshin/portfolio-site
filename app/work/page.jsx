import Link from "next/link";
import { site } from "../../lib/site";

export const metadata = { title: "Work" };

export default function Work() {
  return (
    <section id="main" className="container">
      <header>
        <h2>Work</h2>
        <p>
          Results first, process second. Each case study opens with the number
          that matters and then shows how the build produced it.
        </p>
      </header>
      <div className="row">
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <div className="image featured cover cover-coral">
              <span className="cover-figure">{site.gmv}</span>
              <span className="cover-label">
                in GMV generated for client businesses
              </span>
            </div>
            <h3>UGC video generator for Syrex Consulting</h3>
            <p>
              The full story of the problem and how the build solved it.
            </p>
            <ul className="actions special">
              <li>
                <Link href="/work/syrex" className="button primary">
                  Read the case study
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <div className="image featured cover cover-mint">
              <span className="cover-figure">In progress</span>
              <span className="cover-label">client website builds</span>
            </div>
            <h3>Client website builds</h3>
            <p>
              Before-and-after screenshots and load times are on the way once
              client permissions clear.
            </p>
            <ul className="actions special">
              <li>
                <Link href="/work/client-websites" className="button alt">
                  See the status
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
