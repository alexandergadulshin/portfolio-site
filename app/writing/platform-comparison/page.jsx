import Link from "next/link";

export const metadata = { title: "Chess.com and MyAnimeList, compared" };

export default function PlatformComparison() {
  return (
    <>
      <h1>Chess.com and MyAnimeList, compared</h1>
      <p className="meta">Written for WRIT 107C at UC Santa Barbara</p>
      <p className="lede">
        Two platforms with two different audiences answer the same question:
        how do you write an interface that keeps people coming back? This
        paper compares the strategies and pulls out the lessons that apply
        to any site with a job to do.
      </p>

      {/*
        Paste the paper inside this <article>. Each paragraph goes in its
        own <p>. Section headings go in <h2>. Block quotes go in
        <blockquote><p>...</p></blockquote>. Put the works cited in
        <ul className="works-cited"> with one <li> per source so the
        hanging indents render.
      */}
      <article className="paper">
        <div className="todo">
          [Paste the full text of your comparison paper here. Keep the MLA
          citations in place; they show the research behind the claims.]
        </div>
      </article>

      <p className="back">
        <Link href="/writing">Back to writing</Link>
      </p>
    </>
  );
}
