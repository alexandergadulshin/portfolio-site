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
                <p>{`Clients pay to use this bot to make there product videos and each client connects their own accounts and runs the bot on their own credits and gets the output without me in between and the busy owners keep coming back to it.`}</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>{`Product videos are the fuel of social selling and sellers burn through them and making one by hand means a shoot and an edit and that's hours per cut and the stream dries up the second the owner gets busy which is most weeks.`}</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>{`A bot that lives where the client already works which is their chat and the client drops in a product link and the bot reads the product page and builds a scene around the product photos then animates it into a 5 second vertical video and sends the file back in the same chat.`}</p>
                <p>{`I built the pipeline that makes the video and the bot that delivers it and I also built the setup flow so a new client can connect their own accounts in a few minutes and the tool is theirs from day one.`}</p>
                <ExampleStrip images={videoBotStills} caption="The output which is stills from videos the bot made" />
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>{`This bot is the same idea as my tool installs only grown into a full product and it takes one task off the plate which is making product videos and hands the keys to whoever owns that task and if your business has a bottleneck like this one call is enough to figure out where the tool goes.`}</p>
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
