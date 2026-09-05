import Link from "next/link";
import { site } from "../../lib/site";

export const metadata = { title: "Work" };

export default function Work() {
  return (
    <>
      <h1>Work</h1>
      <p className="lede">
        Results first, process second. Each case study opens with the number
        that matters and then shows how the build produced it.
      </p>
      <ul className="proof-list index">
        <li>
          <h3>
            <Link href="/work/syrex">
              UGC video generator for Syrex Consulting
            </Link>
          </h3>
          <p>
            <span className="figure">{site.gmv}</span> in GMV generated for
            client businesses. The full story of the problem and how the build
            solved it.
          </p>
        </li>
        <li className="pending">
          <h3>
            <Link href="/work/client-websites">Client website builds</Link>
          </h3>
          <p>
            In progress. Before-and-after screenshots and load times are on the
            way once client permissions clear.
          </p>
        </li>
      </ul>
    </>
  );
}
