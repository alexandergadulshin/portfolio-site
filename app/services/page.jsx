import Link from "next/link";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <section id="main" className="container">
      <header>
        <h2>Services</h2>
        <p>
          Two services, one goal: remove the bottleneck that costs your
          business the most time or money.
        </p>
      </header>

      <div className="row">
        <div className="col-6 col-12-narrower">
          <section className="box">
            <div className="center">
              <span className="icon solid major fa-laptop accent2"></span>
              <h3>Website design and builds</h3>
            </div>
            <p>
              Most small business sites try to say too much. I build sites
              that load fast and point each page at one action, whether that
              action is a booking or a sale.
            </p>
            <h4>What you get</h4>
            <ul className="plain">
              <li>Design and build in Next.js, hosted on Vercel</li>
              <li>Copy written for your customers, in your voice</li>
              <li>Documentation you can follow without me</li>
              <li>A handoff session where you learn to update it yourself</li>
            </ul>
          </section>
        </div>
        <div className="col-6 col-12-narrower">
          <section className="box">
            <div className="center">
              <span className="icon solid major fa-magic accent3"></span>
              <h3>AI tool installation</h3>
            </div>
            <p>
              AI tools save owners time on quotes, follow-ups, content, and
              bookkeeping. Choosing them and wiring them in takes time most
              owners do not have. I choose the tools and set them up. Then I
              train you to run them.
            </p>
            <h4>What you get</h4>
            <ul className="plain">
              <li>An audit of how your work flows today</li>
              <li>Setup of the tools that fit, nothing extra</li>
              <li>Training until you run them without me</li>
              <li>A written playbook your team can share</li>
            </ul>
          </section>
        </div>
      </div>

      <section className="box special features">
        <header className="major">
          <h2>How a project runs</h2>
          <p>Four steps, one fixed price, one date.</p>
        </header>
        <div className="features-row">
          <section>
            <span className="icon solid major fa-phone accent2"></span>
            <h3>1. Call</h3>
            <p>We talk through your business and pick the first win.</p>
          </section>
          <section>
            <span className="icon solid major fa-file-alt accent3"></span>
            <h3>2. Plan</h3>
            <p>You get a one-page scope with a fixed price and a date.</p>
          </section>
        </div>
        <div className="features-row">
          <section>
            <span className="icon solid major fa-cogs accent4"></span>
            <h3>3. Build</h3>
            <p>I build and you review. We adjust until it fits.</p>
          </section>
          <section>
            <span className="icon solid major fa-key accent5"></span>
            <h3>4. Handoff</h3>
            <p>
              You get the keys and a training session, so you can run it
              yourself.
            </p>
          </section>
        </div>
      </section>

      <section className="box special">
        <h3>Ready when you are</h3>
        <ul className="actions special">
          <li>
            <Link href="/contact" className="button primary">
              Book a call
            </Link>
          </li>
          <li>
            <Link href="/work/syrex" className="button alt">
              See the proof first
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
}
