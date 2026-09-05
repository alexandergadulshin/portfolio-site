import Link from "next/link";
import { site } from "../lib/site";

export default function Home() {
  return (
    <>
      <h1>Websites and AI tools for small businesses.</h1>
      <p className="lede">
        I&rsquo;m {site.name}, a designer and builder working with
        owner-operators. At Syrex Consulting I built a UGC video generator that
        produced <strong className="figure">{site.gmv}</strong> in GMV for
        client businesses. Your business gets the same standard of work.
      </p>
      <div className="cta-row">
        <Link href="/contact" className="cta">
          Book a call
        </Link>
        <Link href="/work/syrex">Read the Syrex case study</Link>
      </div>

      <section className="section">
        <h2>What I do</h2>
        <div className="cards">
          <div className="card">
            <h3>Website design and builds</h3>
            <p>
              A fast site with one clear action per page. I design and build
              it in Next.js, then hand you the keys with documentation you can
              follow without me.
            </p>
          </div>
          <div className="card">
            <h3>AI tool installation</h3>
            <p>
              I find the tools that fit your workflow and set them up. Then I
              train you until you run them on your own.
            </p>
          </div>
        </div>
        <p>
          <Link href="/services">See both services in detail</Link>
        </p>
      </section>

      <section className="section">
        <h2>Proof</h2>
        <ul className="proof-list">
          <li>
            <h3>
              <Link href="/work/syrex">
                UGC video generator for Syrex Consulting
              </Link>
            </h3>
            <p>
              <span className="figure">{site.gmv}</span> in GMV generated for
              client businesses. The case study shows the problem and how the
              build solved it.
            </p>
          </li>
          <li className="pending">
            <h3>
              <Link href="/work/client-websites">Client website builds</Link>
            </h3>
            <p>
              Case study in progress. I am collecting screenshots and client
              permissions now, and the full write-up goes live soon.
            </p>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Writing</h2>
        <p>
          Copy carries the sale on a small business site. These papers show the
          analysis behind the voice I use here.
        </p>
        <ul className="proof-list">
          <li>
            <h3>
              <Link href="/writing/myanimelist-analysis">
                A rhetorical analysis of MyAnimeList
              </Link>
            </h3>
            <p>
              How a fan database persuades new visitors to stay, read through
              Foss&rsquo;s framework for rhetorical criticism.
            </p>
          </li>
          <li>
            <h3>
              <Link href="/writing/platform-comparison">
                Chess.com and MyAnimeList, compared
              </Link>
            </h3>
            <p>
              Two communities take different approaches to their interfaces.
              Each one teaches something about writing for an audience.
            </p>
          </li>
        </ul>
      </section>

      <section className="panel">
        <h2>Start with a call</h2>
        <p>
          Tell me about your business and I will tell you what I would build
          first. The call costs nothing and comes with no obligation.
        </p>
        <div className="cta-row">
          <Link href="/contact" className="cta">
            Book a call
          </Link>
        </div>
      </section>
    </>
  );
}
