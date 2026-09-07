import CaseSection from "@/components/site/CaseSection";
import CaseBanner from "@/components/site/CaseBanner";
import CaseIntro from "@/components/site/CaseIntro";
import CtaButton from "@/components/site/CtaButton";
import WorkCard from "@/components/site/WorkCard";
import SiteCta from "@/components/site/SiteCta";
import Todo from "@/components/site/Todo";
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
                    { label: "Year", value: "[year]" },
                    { label: "Role", value: "[your role title]" },
                    { label: "Result", value: `${site.gmv} in GMV` },
                ]}
            />
            <CaseBanner src="/assets/img/site/banner-syrex.jpg" alt="UGC video generator for Syrex Consulting" />

            <CaseSection title="The result">
                <p>The generator produced <span className="site-figure">{site.gmv}</span> in gross merchandise value for client businesses.</p>
                <Todo>[Add one or two sentences of context for the number. Say the timeframe and how many client businesses used the tool, then note how GMV was measured.]</Todo>
            </CaseSection>
            <CaseSection title="The problem">
                <Todo>[Two or three sentences on what Syrex needed. For example: clients needed a steady stream of UGC-style video ads, and manual production could not keep pace with demand or budget.]</Todo>
            </CaseSection>
            <CaseSection title="What I built">
                <Todo>[Describe the product: what goes in, what comes out, the stack, and where AI sits in the pipeline. Name the specific models or services if you can.]</Todo>
            </CaseSection>
            <CaseSection title="My role">
                <Todo>[What you owned end to end and who you worked with. Add one decision you made that shaped the outcome.]</Todo>
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
