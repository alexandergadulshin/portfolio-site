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
                <p>The generator produced <span className="site-figure">{site.gmv}</span> in gross merchandise value for the clients businesses.</p>
                <p>Over 6 months 12 client businesses used the generator to make ads for TikTok Shop and Instagram and GMV is the sales those ads drove as the platforms reported them.</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>Syrex Consulting runs paid social for e-commerce brands and each client needs a steady stream of UGC style video ads and making them by hand cant keep up with the demand or the budget.</p>
                <p>One ad takes a creator plus 2 days of scripting and editing and the media buyers want 10 different versions to test not one polished cut.</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>A tool that turns a product page and a short brief into a batch of short video ads, it writes the script and voices it and puts on screen text over the product images and stock clips then exports a bunch of variations.</p>
                <p>I wrote the pipeline myself, a language model writes each script and a voice model reads it then a video tool puts the cut together and the media buyers test and pick the winners in a web dashboard I built for them.</p>
                <DashboardShots shots={syrexShots} caption="The dashboard where the clients team tests and picks the winners from each batch of ads" alt="Screenshot of the posting tool setup screen" />
            </CaseSection>
            <CaseSection title="My role">
                <p>I handled the whole thing from the first prototype to the version the clients used and I worked with the Syrex founder on what the ads needed to say.</p>
                <p>The choice that mattered most was making 10 versions per product instead of one finished cut, the media buyers found winners in each batch that no single cut would of shown.</p>
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>The same thing works smaller too, one tool put in the right spot in your process pays for itself the moment it removes the bottleneck and if your bottleneck is content or follow up I can find the spot.</p>
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
