import Link from "next/link";
import { site } from "../../../lib/site";

export const metadata = { title: "Syrex case study" };

export default function SyrexCaseStudy() {
  return (
    <section id="main" className="container medium">
      <header>
        <h2>A UGC video generator that produced {site.gmv} in GMV</h2>
        <p>Syrex Consulting LLC, [year], [your role title]</p>
      </header>

      <div className="box">
        <div className="image featured cover cover-coral">
          <span className="cover-figure">{site.gmv}</span>
          <span className="cover-label">
            in gross merchandise value for client businesses
          </span>
        </div>

        <h3>The result</h3>
        <div className="todo">
          [Add one or two sentences of context for the number. Say the
          timeframe and how many client businesses used the tool, then note
          how GMV was measured.]
        </div>

        <h3>The problem</h3>
        <div className="todo">
          [Two or three sentences on what Syrex needed. For example: clients
          needed a steady stream of UGC-style video ads, and manual production
          could not keep pace with demand or budget.]
        </div>

        <h3>What I built</h3>
        <div className="todo">
          [Describe the product: what goes in, what comes out, the stack, and
          where AI sits in the pipeline. Name the specific models or services
          if you can.]
        </div>

        <h3>My role</h3>
        <div className="todo">
          [What you owned end to end and who you worked with. Add one decision
          you made that shaped the outcome.]
        </div>
      </div>

      <div className="box special">
        <h3>What this means for your business</h3>
        <p>
          The same approach scales down. One tool, installed at the right spot
          in your workflow, pays for itself once it removes a bottleneck. If
          your bottleneck is content or follow-up, I can find the spot.
        </p>
        <ul className="actions special">
          <li>
            <Link href="/contact" className="button primary">
              Book a call
            </Link>
          </li>
          <li>
            <Link href="/services" className="button alt">
              See what I offer
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
