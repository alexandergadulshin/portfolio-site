import MalPaper, { malStandfirst } from "@/components/site/papers/MalPaper";
import PaperPage from "@/components/site/PaperPage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "A rhetorical analysis of MyAnimeList" };

export default function MalAnalysis() {
    return (
        <PaperPage title="A rhetorical analysis of MyAnimeList" lede={malStandfirst} placeholder="">
            <MalPaper />
        </PaperPage>
    );
}
