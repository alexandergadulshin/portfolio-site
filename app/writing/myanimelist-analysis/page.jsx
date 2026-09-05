import Link from "next/link";

export const metadata = { title: "A rhetorical analysis of MyAnimeList" };

export default function MalAnalysis() {
  return (
    <>
      <h1>A rhetorical analysis of MyAnimeList</h1>
      <p className="meta">Written for WRIT 107C at UC Santa Barbara</p>
      <p className="lede">
        A database of anime reviews sounds like a strange place to study
        persuasion. It is one of the best. This paper reads MyAnimeList
        through Foss&rsquo;s framework for rhetorical criticism and asks how
        the interface convinces a first-time visitor to become a member.
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
          [Paste the full text of your MyAnimeList paper here. Keep the MLA
          citations in place; they show the research behind the claims.]
        </div>
      </article>

      <p className="back">
        <Link href="/writing">Back to writing</Link>
      </p>
    </>
  );
}
