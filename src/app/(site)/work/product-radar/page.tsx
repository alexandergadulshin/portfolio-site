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
                <p>{`The build took 2 days from start to launch and on the first scan the dashboard processed 53 creators and 3,942 of their ad videos and identified 592 winning products for the client to check with 35 of them being identified for the first time that day and now the client opens one page instead of watching the videos for hours.`}</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>{`The client follows a number of creators and needs to know which products are successful for them and the data source is thousands of ad videos which is way more than anyone on their team can watch and they knew the signals they were looking for but there was no tool that would be able to filter them.`}</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>{`A tool that processes the list of the creators on a schedule and filters the products by the signals the client set and it logs all the information in a spreadsheet and a web dashboard and sends the daily report of the findings to the clients' chat.`}</p>
                <DashboardShots shots={productRadarShots} caption="The dashboard with the winning products sorted by the signals the client set" alt="Screenshot of the product research dashboard" />
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>{`The dashboard took over the research and freed up the people to do other things and if your business has a task that requires hours to complete and follows certain rules that can be written down I can build the same tool for it and the 2 day build is the target for the tool.`}</p>
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
