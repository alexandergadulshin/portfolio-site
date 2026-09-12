import CaseSection from "@/components/site/CaseSection";
import DashboardShots from "@/components/site/DashboardShots";
import { productRadarShots } from "@/data/product-radar-shots";
import BookCallButton from "@/components/site/BookCallButton";
import CaseBanner from "@/components/site/CaseBanner";
import CaseIntro from "@/components/site/CaseIntro";
import CtaButton from "@/components/site/CtaButton";
import MoreWork from "@/components/site/MoreWork";
import SiteCta from "@/components/site/SiteCta";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product research dashboard",
    description: "A client research dashboard built and live in 2 days.",
};

// Copy is verbatim from the handoff brief of 2026-09-11. Do not rewrite.
export default function ProductRadar() {
    return (
        <main>
            <CaseIntro
                title={`A research dashboard built and live in 2 days`}
                meta={[
                    { label: "Client", value: "An e-commerce seller" },
                    { label: "Year", value: "2026" },
                    { label: "Role", value: "Built end to end" },
                    { label: "Result", value: "Live in 2 days" },
                ]}
            />
            <CaseBanner src="/assets/img/site/banner-radar.jpg" alt="Product research dashboard" />
            <CaseSection title="The result">
                <p>{`The build took 2 days from beginning to delivery. The first scan of the dashboard returned 53 creators and 3,942 of their ad videos and filtered 592 winning products for the client to review, 35 of them new that day. Now the client opens one page rather than watching the ad videos for hours.`}</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>{`The client business follows a certain number of creators and has to understand which products perform the best in their posts. The raw material is the thousands of ad videos and no tool existed to filter them. The client knew which signals indicate success.`}</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>{`A tool that analyzes the creator list on a schedule, and then filters the products based on the signals the client defined. It logs the findings in a spreadsheet and a web dashboard, and sends a daily summary of discoveries to the client's chat.`}</p>
                <DashboardShots shots={productRadarShots} caption="The dashboard, with winning products ranked by the signals the client specified." alt="Screenshot of the product research dashboard" />
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>{`The dashboard takes over the research and leaves the people in place. If your business has an important task that takes hours and can be defined in a set of rules, I can create the same tool for you. The 2 day build is the standard I aim for.`}</p>
                <div className="d-flex flex-wrap gap-3 mt-30">
                    <BookCallButton />
                    <CtaButton href="/services" label="See what I offer" className="tp-btn tp-btn-grey" />
                </div>
            </CaseSection>
            <MoreWork current="/work/product-radar" />
            <SiteCta />
        </main>
    );
}
