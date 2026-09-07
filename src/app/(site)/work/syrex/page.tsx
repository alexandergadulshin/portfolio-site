import CaseSection from "@/components/site/CaseSection";
import CaseBanner from "@/components/site/CaseBanner";
import CaseIntro from "@/components/site/CaseIntro";
import CtaButton from "@/components/site/CtaButton";
import WorkCard from "@/components/site/WorkCard";
import SiteCta from "@/components/site/SiteCta";
import { workItems } from "@/data/work-data";
import { site } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Syrex case study" };

export default function SyrexCaseStudy() {
    const related = workItems.filter((item) => item.href !== "/work/syrex");
    return (
        <main>
            <CaseIntro
                title={<>A UGC video generator that produced <span className="site-figure">{site.gmv}</span> in GMV</>}
                meta={[
                    { label: "Client", value: "Syrex Consulting LLC" },
                    { label: "Year", value: "2025" },
                    { label: "Role", value: "Lead developer" },
                    { label: "Result", value: `${site.gmv} in GMV` },
                ]}
            />
            <CaseBanner src="/assets/img/site/banner-syrex.jpg" alt="UGC video generator for Syrex Consulting" />

            <CaseSection title="The result">
                <p>The generator produced <span className="site-figure">{site.gmv}</span> in gross merchandise value for client businesses.</p>
                <p>Over six months, twelve client businesses used the generator to make ads for TikTok Shop and Instagram. GMV counts the sales those ads drove, measured in each platform&apos;s own reporting.</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>Syrex Consulting runs paid social for e-commerce brands. Each client needed a steady stream of UGC-style video ads, and manual production could not keep pace with demand or budget.</p>
                <p>One ad took a creator, a script, and two days of editing. Media buyers wanted ten variations to test, not one polished cut.</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>A generator that turns a product page and a short brief into a batch of short video ads. It writes the script, reads it in a chosen voice, lays on-screen text over product shots and stock clips, and exports variations for testing.</p>
                <p>The pipeline runs on Python. A language model writes the scripts, a text-to-speech model reads them, and FFmpeg assembles each cut. Media buyers pick winners inside a simple web dashboard built in Next.js.</p>
            </CaseSection>
            <CaseSection title="My role">
                <p>I owned the build end to end, from the first prototype to the version clients used, and worked with the Syrex founder on what the ads needed to say.</p>
                <p>The decision that shaped the outcome was to generate ten variations per product instead of one finished ad. Testing the batch found winners that no single cut would have.</p>
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>The same approach scales down. One tool, installed at the right spot in your workflow, pays for itself once it removes a bottleneck. If your bottleneck is content or follow-up, I can find the spot.</p>
                <div className="d-flex flex-wrap gap-3 mt-30">
                    <CtaButton href="/contact" label="Book a call" />
                    <CtaButton href="/services" label="See what I offer" className="tp-btn tp-btn-grey" />
                </div>
            </CaseSection>

            <div className="tp-portfolio-area pt-90 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-25">
                                <h2 className="tp-portfoliom-m-title reveal-text">More work</h2>
                            </div>
                        </div>
                        {related.map((item) => (
                            <div className="col-lg-6" key={item.href}>
                                <WorkCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SiteCta />
        </main>
    );
}
