import Link from "next/link";
import { site } from "../lib/site";

export default function Home() {
  return (
    <>
      <section id="banner" className="landing-banner">
        <h2>Websites and AI tools for small businesses.</h2>
        <p>
          I&rsquo;m {site.name}, a designer and builder working with
          owner-operators.{" "}
          <br />
          At Syrex Consulting I built a UGC video generator that produced{" "}
          {site.gmv} in GMV for client businesses.
        </p>
        <ul className="actions special">
          <li>
            <Link href="/contact" className="button primary">
              Book a call
            </Link>
          </li>
          <li>
            <Link href="/work/syrex" className="button">
              Read the Syrex case study
            </Link>
          </li>
        </ul>
      </section>

      <section id="main" className="container landing-main">
        <section className="box special">
          <header className="major">
            <h2>
              {site.gmv} in GMV for client businesses,{" "}
              <br />
              from one tool I built at Syrex Consulting
            </h2>
            <p>
              Your business gets the same standard of work.{" "}
              <br />
              Here is what I do and how it helps.
            </p>
          </header>
        </section>

        <section className="box special features">
          <div className="features-row">
            <section>
              <span className="icon solid major fa-laptop accent2"></span>
              <h3>Website design and builds</h3>
              <p>
                A fast site with one clear action per page. I design and build
                it in Next.js, then hand you the keys with documentation you
                can follow without me.
              </p>
            </section>
            <section>
              <span className="icon solid major fa-magic accent3"></span>
              <h3>AI tool installation</h3>
              <p>
                I find the tools that fit your workflow and set them up. Then I
                train you until you run them on your own.
              </p>
            </section>
          </div>
          <div className="features-row">
            <section>
              <span className="icon solid major fa-pencil-alt accent4"></span>
              <h3>Copy in your voice</h3>
              <p>
                Copy written for your customers, in your voice. Each page says
                one thing and asks for one action.
              </p>
            </section>
            <section>
              <span className="icon solid major fa-key accent5"></span>
              <h3>Handoff and training</h3>
              <p>
                You get the keys and a training session, so you can run the
                site and the tools yourself.
              </p>
            </section>
          </div>
        </section>

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
                The case study shows the problem and how the build solved it.
              </p>
              <ul className="actions special">
                <li>
                  <Link href="/work/syrex" className="button alt">
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

      <section id="cta">
        <h2>Start with a call</h2>
        <p>
          Tell me about your business and I will tell you what I would build
          first.{" "}
          <br />
          The call costs nothing and comes with no obligation.
        </p>
        <ul className="actions special">
          <li>
            <Link href="/contact" className="button">
              Book a call
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
