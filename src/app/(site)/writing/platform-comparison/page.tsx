import PaperPage from "@/components/site/PaperPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Chess.com and MyAnimeList, compared" };

// The paper text has not shipped yet. Until it does, this route returns
// 404 so no placeholder is reachable. Remove the notFound() call, restore
// the entry in src/app/(site)/writing/page.tsx and src/app/sitemap.ts,
// and pass the paper as children when the text arrives.
const PAPER_READY = false;

export default function PlatformComparison() {
    if (!PAPER_READY) notFound();
    return (
        <PaperPage
            title="Chess.com and MyAnimeList, compared"
            lede="Two platforms with two different audiences answer the same question: how do you write an interface that keeps people coming back? This paper compares the strategies and pulls out the lessons that apply to any site with a job to do."
            placeholder="[Paste the full text of your comparison paper here. Keep the MLA citations in place; they show the research behind the claims.]"
        />
    );
}
