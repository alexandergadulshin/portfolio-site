import CaseSection from "@/components/site/CaseSection";
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
                <p>{`Clients pay to use this bot to make their product videos. Each client connects their own accounts, runs the bot on their own credits, and gets the output without me in the loop. That is the plainest proof a tool can offer. People with a business to run choose to keep using it.`}</p>
            </CaseSection>
            <CaseSection title="The problem">
                <p>{`Product videos are the fuel of social selling, and sellers need a steady stream of them. Making one the manual way means filming it and editing it, and that costs hours per cut. The stream dries up the moment the owner gets busy, which is always.`}</p>
            </CaseSection>
            <CaseSection title="What I built">
                <p>{`A bot that lives where the client already works, in their chat. The client drops a product link. The bot reads the product page and builds a scene around the product photos. Then it animates the scene into a 5 second vertical video and delivers the file back in the same chat.`}</p>
                <p>{`I built the pipeline that makes the video and the bot that delivers it. I also built the setup flow that lets a new client connect their own accounts in minutes, so the tool is theirs from day one.`}</p>
            </CaseSection>
            <CaseSection title="What this means for your business">
                <p>{`This bot is an installed tool at full size. It removes one task, making product videos, and it hands the keys to the person who owns the task. If your business has a bottleneck shaped like this, the call is where we find the spot.`}</p>
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
