import CaseSection from "@/components/site/CaseSection";
import CaseIntro from "@/components/site/CaseIntro";
import CtaButton from "@/components/site/CtaButton";
import WorkCard from "@/components/site/WorkCard";
import SiteCta from "@/components/site/SiteCta";
import { workItems } from "@/data/work-data";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Client website builds" };

export default function ClientWebsites() {
    const related = workItems.filter((item) => item.href !== "/work/client-websites");
    return (
        <main>
            <CaseIntro
                title="Client website builds"
                meta={[
                    { label: "Status", value: "In progress" },
                    { label: "Work", value: "Design and build" },
                    { label: "Stack", value: "Next.js on Vercel" },
                    { label: "Write-up", value: "Coming soon" },
                ]}
            />
            <CaseSection title="What this page will show">
                <p>Before-and-after screenshots with load times, and the one action each site points at. I am collecting client permissions now. Until then, the Syrex case study shows how I work.</p>
                <div className="d-flex flex-wrap gap-3 mt-30">
                    <CtaButton href="/work/syrex" label="Read the Syrex case study" />
                    <CtaButton href="/contact" label="Book a call" className="tp-btn tp-btn-grey" />
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
