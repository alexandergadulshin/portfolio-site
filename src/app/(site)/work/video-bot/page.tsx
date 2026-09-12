import CaseSection from "@/components/site/CaseSection";
import ExampleStrip from "@/components/site/ExampleStrip";
import { videoBotStills } from "@/data/video-bot-stills";
import BookCallButton from "@/components/site/BookCallButton";
import CaseBanner from "@/components/site/CaseBanner";
import CaseIntro from "@/components/site/CaseIntro";
import CtaButton from "@/components/site/CtaButton";
import MoreWork from "@/components/site/MoreWork";
import SiteCta from "@/components/site/SiteCta";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UGC video bot",
    description: "A bot that turns a product link into a ready product video.",
};

// Copy is verbatim from the handoff brief of 2026-09-11. Do not rewrite.
export default function VideoBot() {
    return (
        <main>
            <CaseIntro
                title={`A bot that turns a product link into a ready product video`}
                meta={[
                    { label: "Client", value: "My own product" },
                    { label: "Year", value: "2026" },
                    { label: "Role", value: "Built and run by me" },
                    { label: "Result", value: "Live, with paying clients" },
                ]}
            />
            <CaseBanner src="/assets/img/site/banner-video-bot.jpg" alt="UGC video bot" />
            <CaseSection title="The result">
                <p>{`The clients pay for using this bot to create product videos. Each client connects their own accounts and runs the bot on their credits and receives the output without me in between. The busy owners keep returning to it.`}</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>{`Product videos are the fuel of social selling. The sellers burn through it and creating one by hand involves a shoot and an edit and costs several hours for each cut. The stream of videos dries up the moment the owner gets busy, and this is most of the weeks.`}</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>{`A bot that resides where the client works, in their chat. The client inputs a product link and the bot fetches the product page and builds a scene around the product images. Then it animates the scene and creates a 5 second vertical video and delivers the file back in the same chat.`}</p>
                <p>{`I created the pipeline that generates the video and the bot that delivers the video and I also built the setup flow that enables the client to connect their accounts in a matter of minutes and own the tool.`}</p>
                <ExampleStrip images={videoBotStills} caption="The output. Stills from videos that the bot generated." />
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>{`This bot is the same concept as my tool installations, scaled upwards into the product. It eliminates one task from the client's process, generating product videos, and passes the keys over to the one who handles it in the business. If your business has the same bottleneck, one call will be enough to pinpoint where it should go.`}</p>
                <div className="d-flex flex-wrap gap-3 mt-30">
                    <BookCallButton />
                    <CtaButton href="/services" label="See what I offer" className="tp-btn tp-btn-grey" />
                </div>
            </CaseSection>
            <MoreWork current="/work/video-bot" />
            <SiteCta />
        </main>
    );
}
