import PageIntro from "@/components/site/PageIntro";
import Todo from "@/components/site/Todo";
import Link from "next/link";

// A course paper: intro, the paper body, and a way back to the index.
// Paste the paper inside <article>. Each paragraph goes in its own <p>.
// Section headings go in <h2>. Block quotes go in <blockquote><p>...</p></blockquote>.
// Put the works cited in <ul className="site-works-cited"> with one <li>
// per source so the hanging indents render.
const PaperPage = ({ title, lede, placeholder, children }: { title: string; lede: string; placeholder: string; children?: React.ReactNode }) => (
    <main>
        <PageIntro label="Written for WRIT 107C at UC Santa Barbara" title={title} lede={lede} />
        <div className="tp-pd-2-overview-ptb pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <article className="site-paper">
                            {children ?? <Todo>{placeholder}</Todo>}
                        </article>
                        <p className="mt-40">
                            <Link href="/writing">Back to writing</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default PaperPage;
