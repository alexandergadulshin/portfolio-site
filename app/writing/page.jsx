import Link from "next/link";

export const metadata = { title: "Writing" };

export default function Writing() {
  return (
    <>
      <h1>Writing</h1>
      <p className="lede">
        Copy carries the sale on a small business site. These papers show the
        analysis behind the voice on this one.
      </p>
      <ul className="proof-list" style={{ marginTop: "2.5rem" }}>
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
            Two communities, two interface strategies, and what each one
            teaches about writing for an audience.
          </p>
        </li>
      </ul>
    </>
  );
}
