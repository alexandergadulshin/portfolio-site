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
                <p>{`The build took 2 days from start to live and on the first scan the dashboard went through 53 creators and 3,942 of their ad videos and pulled out 592 winning products for the client to look at, 35 of them new that day, now the client opens one page instead of watching videos for hours.`}</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>{`The client follows a bunch of creators and needs to know which products are winning for them and the raw material is thousands of ad videos, way more than anyone on their team can watch, they knew which signals mattered but there was no tool that could read them.`}</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>{`A tool that goes through the creator list on a schedule and filters the products by the signals the client set, it logs everything in a spreadsheet and a web dashboard and sends a daily summary of the new finds to the clients chat.`}</p>
                <DashboardShots shots={productRadarShots} caption="The dashboard with the winning products ranked by the signals the client set" alt="Screenshot of the product research dashboard" />
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>{`The dashboard took over the research and left the people where they were, if your business has a task that eats hours and follows rules you can write down I can build the same kind of tool for it and the 2 day build is what I aim for.`}</p>
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
