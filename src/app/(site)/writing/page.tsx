import PageIntro from "@/components/site/PageIntro";
import SiteCta from "@/components/site/SiteCta";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Writing",
    description: "Two course analyses of how familiar sites speak to their users.",
};

const papers = [
    {
        href: "/writing/myanimelist-analysis",
        title: "A rhetorical analysis of MyAnimeList",
        text: "A fan database that retains its veterans and sheds its newcomers and I analyze MyAnimeList through Foss’s framework for rhetorical criticism.",
    },
];

export default function Writing() {
    return (
        <main>
            <PageIntro label="Writing" title="Writing" lede="On a small business site the words do the selling and this paper is the analysis behind the words on this one." />
            <div className="tp-portfolio-inner-ptb pb-90">
                <div className="container">
                    <div className="row gx-60">
                        {papers.map((paper) => (
                            <div className="col-lg-6" key={paper.href}>
                                <div className="tp-pd-2-step-item site-paper-card mb-30 tp_fade_anim" data-delay=".3">
                                    <h3 className="tp-pd-2-step-item-title">
                                        <Link href={paper.href}>{paper.title}</Link>
                                    </h3>
                                    <span>{paper.text}</span>
                                    <div className="mt-20">
                                        <Link href={paper.href} className="site-read-link">Read the paper</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SiteCta />
        </main>
    );
}
