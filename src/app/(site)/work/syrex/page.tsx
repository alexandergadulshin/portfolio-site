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
                <p>The generator generated <span className="site-figure">{site.gmv}</span> in gross merchandise value for the clients businesses.</p>
                <p>During 6 months 12 client businesses used the generator to produce video ads for TikTok Shop and Instagram and GMV is the sales these ads generated on these platforms.</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>Syrex Consulting handles paid social for e-commerce brands and each client requires a steady stream of UGC style video ads and producing them by hand is not able to keep up with the demand or budget.</p>
                <p>An ad requires a creator plus 2 days of scripting and editing and the media buyers require 10 different versions of it to test rather than one polished cut.</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>A tool that turns a product page and a brief into a batch of short video ads and it writes the script and voices it and puts the on-screen text over the product images and stock footage then exports the variations.</p>
                <p>I built the pipeline myself and a language model writes each script and a voice model reads it then a video model assembles it into a video cut and the media buyers test and choose the best of the batch in a web dashboard I built for them.</p>
                <DashboardShots shots={syrexShots} caption="The dashboard where the clients' team chooses the best ads out of the batch" alt="Screenshot of the posting tool setup screen" />
            </CaseSection>
            <CaseSection title="My role">
                <p>I was responsible for the entire thing from the first prototype to the one the clients used and I collaborated with the Syrex founder on the ad scripts.</p>
                <p>The most important decision was to create 10 versions per product rather than one polished cut and the media buyers were able to select the winners from each batch that wouldn&apos;t be revealed by a single cut.</p>
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>The same applies on a smaller scale and one tool placed in the right place in your process pays for itself the moment it removes the bottleneck and if the bottleneck in your process is content or follow up I can find the right place for the tool.</p>
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
