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
                <p>The generator produced <span className="site-figure">{site.gmv}</span> in gross merchandise value for client businesses.</p>
                <p>Over 6 months, 12 client businesses used the generator to make ads for TikTok Shop and Instagram. GMV counts the sales those ads drove, measured in each platform&apos;s own reporting.</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>Syrex Consulting runs paid social for e-commerce brands. Each client needed a steady stream of UGC-style video ads, and manual production could not keep pace with demand or budget.</p>
                <p>One ad took a creator, plus 2 days of scripting and editing. Media buyers wanted 10 variations to test, not one polished cut.</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>A generator that turns a product page and a short brief into a batch of short video ads. It writes the script, reads it in a chosen voice, lays on-screen text over product shots and stock clips, and exports variations for testing.</p>
                <p>The pipeline runs on Python. A language model writes the scripts and a text-to-speech model reads them. A video tool assembles each cut. Media buyers pick winners inside a web dashboard I built for them.</p>
                <DashboardShots shots={syrexShots} caption="The setup screen of the posting tool. A shared Drive folder feeds each batch into the library for review." alt="Screenshot of the posting tool setup screen" />
            </CaseSection>
            <CaseSection title="My role">
                <p>I owned the build end to end, from the first prototype to the version clients used, and worked with the Syrex founder on what the ads needed to say.</p>
                <p>The decision that shaped the outcome was to generate 10 variations per product instead of one finished ad. Media buyers found winners in each batch that no single cut would have shown.</p>
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>The same approach scales down. One tool, installed at the right spot in your workflow, pays for itself once it removes a bottleneck. If your bottleneck is content or follow-up, I can find the spot.</p>
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
