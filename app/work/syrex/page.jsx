import Link from "next/link";
import { site } from "../../../lib/site";

export const metadata = { title: "Syrex case study" };

export default function SyrexCaseStudy() {
  return (
    <>
      <h1>A UGC video generator that produced {site.gmv} in GMV</h1>
      <p className="meta">Syrex Consulting LLC, [year], [your role title]</p>

      <section className="block">
        <h2>The result</h2>
        <p className="stat">
          <span className="stat-figure">{site.gmv}</span>
          <span className="stat-label">
            in gross merchandise value for client businesses
          </span>
        </p>
        <div className="todo">
          [Add one or two sentences of context for the number. Say the
          timeframe and how many client businesses used the tool, then note
          how GMV was measured.]
        </div>
      </section>

      <section className="block">
        <h2>The problem</h2>
        <div className="todo">
          [Two or three sentences on what Syrex needed. For example: clients
          needed a steady stream of UGC-style video ads, and manual production
          could not keep pace with demand or budget.]
        </div>
      </section>

      <section className="block">
        <h2>What I built</h2>
        <div className="todo">
          [Describe the product: what goes in, what comes out, the stack, and
          where AI sits in the pipeline. Name the specific models or services
          if you can.]
        </div>
      </section>

      <section className="block">
        <h2>My role</h2>
        <div className="todo">
          [What you owned end to end and who you worked with. Add one decision
          you made that shaped the outcome.]
        </div>
      </section>

      <section className="panel">
        <h2>What this means for your business</h2>
        <p>
          The same approach scales down. One tool, installed at the right spot
          in your workflow, pays for itself once it removes a bottleneck. If
          your bottleneck is content or follow-up, I can find the spot.
        </p>
        <div className="cta-row">
          <Link href="/contact" className="cta">
            Book a call
          </Link>
          <Link href="/services">See what I offer</Link>
        </div>
      </section>
    </>
  );
}
