import CaseSection from "@/components/site/CaseSection";
import DashboardShots from "@/components/site/DashboardShots";
import { syrexShots } from "@/data/syrex-shots";
import BookCallButton from "@/components/site/BookCallButton";
import CaseBanner from "@/components/site/CaseBanner";
import CaseIntro from "@/components/site/CaseIntro";
import CtaButton from "@/components/site/CtaButton";
import MoreWork from "@/components/site/MoreWork";
import SiteCta from "@/components/site/SiteCta";
import { site } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Syrex case study",
    description: "A UGC video generator that produced $284,000 in GMV for client businesses.",
};

export default function SyrexCaseStudy() {
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
                <p>The generator produced <span className="site-figure">{site.gmv}</span> in gross merchandise value for the clients&apos; businesses.</p>
                <p>Over 6 months 12 client businesses used the generator to create ads for TikTok Shop and Instagram. GMV reflects the sales that those ads drove as they were reported by platforms.</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>Syrex Consulting runs paid social for e-commerce brands. Each client business requires a steady stream of UGC-style video ads and manual creation cannot match the demand and the budget.</p>
                <p>It takes a creator and 2 days to script and edit each ad. The media buyer requires 10 different versions of the ad to test, rather than a single well-polished cut.</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>A tool that converts a product page and a brief description into a batch of short video ads. It scripts and voices the ad, layers on-screen text over images from the product page and stock assets, and exports multiple variations of it.</p>
                <p>I wrote the pipeline myself. The language model writes each script, the voice model voices it, and then the video tool compiles it into a cut. Media buyers test and choose the winners inside a web dashboard I built for them.</p>
                <DashboardShots shots={syrexShots} caption="The dashboard where the client's team tests and chooses the winners in each batch of ads." alt="Screenshot of the posting tool setup screen" />
            </CaseSection>
            <CaseSection title="My role">
                <p>I handled the entire process from prototyping to the final delivery and discussed what the ad should say with the Syrex founder.</p>
                <p>The most crucial choice in the process was making 10 versions per product instead of a single cut. The media buyers were able to find the winners in each batch, which no single cut could show.</p>
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>The same solution is scalable downwards. One tool installed in the right place in your process will pay for itself the moment it removes the bottleneck. If the bottleneck in your business process is the content or follow-up, I can find the right place for it.</p>
                <div className="d-flex flex-wrap gap-3 mt-30">
                    <BookCallButton />
                    <CtaButton href="/services" label="See what I offer" className="tp-btn tp-btn-grey" />
                </div>
            </CaseSection>

            <MoreWork current="/work/syrex" />
            <SiteCta />
        </main>
    );
}
