import { site } from "../../lib/site";

export const metadata = { title: "Book a call" };

export default function Contact() {
  return (
    <section id="main" className="container medium">
      <header>
        <h2>Book a call</h2>
        <p>
          Tell me about your business and what slows it down. I read each
          message and reply within one business day.
        </p>
      </header>

      <div className="box special">
        <span className="icon solid major fa-envelope accent2"></span>
        <h3>Email me</h3>
        <p>
          Write to <a href={`mailto:${site.email}`}>{site.email}</a> with a
          sentence or two about your business. You do not need a long pitch.
        </p>
        {site.bookingUrl ? (
          <ul className="actions special">
            <li>
              <a href={site.bookingUrl} className="button primary">
                Book a call
              </a>
            </li>
          </ul>
        ) : (
          <div className="todo">
            [Add your Calendly or booking link in lib/site.js and a booking
            button appears here.]
          </div>
        )}
        <p className="meta">
          Based in {site.location}. Working with clients anywhere.
        </p>
      </div>
    </section>
  );
}
