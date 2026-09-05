import Link from "next/link";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <h1>Services</h1>
      <p className="lede">
        Two services, one goal: remove the bottleneck that costs your business
        the most time or money.
      </p>

      <section className="section">
        <h2>Website design and builds</h2>
        <p>
          Most small business sites try to say too much. I build sites that
          load fast and point each page at one action, whether that action is
          a booking or a sale.
        </p>
        <h3>What you get</h3>
        <ul className="plain">
          <li>Design and build in Next.js, hosted on Vercel</li>
          <li>Copy written for your customers, in your voice</li>
          <li>Documentation you can follow without me</li>
          <li>A handoff session where you learn to update it yourself</li>
        </ul>
      </section>

      <section className="section">
        <h2>AI tool installation</h2>
        <p>
          AI tools save owners time on quotes, follow-ups, content, and
          bookkeeping. Choosing them and wiring them in takes time most owners
          do not have. I choose the tools and set them up. Then I train you to
          run them.
        </p>
        <h3>What you get</h3>
        <ul className="plain">
          <li>An audit of how your work flows today</li>
          <li>Setup of the tools that fit, nothing extra</li>
          <li>Training until you run them without me</li>
          <li>A written playbook your team can share</li>
        </ul>
      </section>

      <section className="section">
        <h2>How a project runs</h2>
        <ol className="steps">
          <li>
            <strong>Call.</strong> We talk through your business and pick the
            first win.
          </li>
          <li>
            <strong>Plan.</strong> You get a one-page scope with a fixed price
            and a date.
          </li>
          <li>
            <strong>Build.</strong> I build and you review. We adjust until it
            fits.
          </li>
          <li>
            <strong>Handoff.</strong> You get the keys and a training session,
            so you can run it yourself.
          </li>
        </ol>
        <div className="cta-row">
          <Link href="/contact" className="cta">
            Book a call
          </Link>
          <Link href="/work/syrex">See the proof first</Link>
        </div>
      </section>
    </>
  );
}
