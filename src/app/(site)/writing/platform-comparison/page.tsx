import PaperPage from "@/components/site/PaperPage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Chess.com and MyAnimeList, compared" };

export default function PlatformComparison() {
    return (
        <PaperPage
            title="Chess.com and MyAnimeList, compared"
            lede="Two platforms with two different audiences answer the same question: how do you write an interface that keeps people coming back? This paper compares the strategies and pulls out the lessons that apply to any site with a job to do."
            placeholder="[Paste the full text of your comparison paper here. Keep the MLA citations in place; they show the research behind the claims.]"
        />
    );
}
