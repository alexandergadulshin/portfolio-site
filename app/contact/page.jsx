import { site } from "../../lib/site";

export const metadata = { title: "Book a call" };

export default function Contact() {
  return (
    <>
      <h1>Book a call</h1>
      <p className="lede">
        Tell me about your business and what slows it down. I read each
        message and reply within one business day.
      </p>
      <p>
        Email me at <a href={`mailto:${site.email}`}>{site.email}</a> with a
        sentence or two about your business. A long pitch is not required.
      </p>
      {site.bookingUrl ? (
        <div className="cta-row">
          <a href={site.bookingUrl} className="cta">
            Book a call
          </a>
        </div>
      ) : (
        <div className="todo">
          [Add your Calendly or booking link in lib/site.js and a green
          booking button appears here.]
        </div>
      )}
      <p className="muted">
        Based in {site.location}. Working with clients anywhere.
      </p>
    </>
  );
}
