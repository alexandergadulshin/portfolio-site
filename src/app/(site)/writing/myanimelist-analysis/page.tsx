import PaperPage from "@/components/site/PaperPage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "A rhetorical analysis of MyAnimeList" };

export default function MalAnalysis() {
    return (
        <PaperPage
            title="A rhetorical analysis of MyAnimeList"
            lede="A database of anime reviews sounds like a strange place to study persuasion. It is one of the best. This paper reads MyAnimeList through Foss’s framework for rhetorical criticism and asks how the interface convinces a first-time visitor to become a member."
            placeholder="[Paste the full text of your MyAnimeList paper here. Keep the MLA citations in place; they show the research behind the claims.]"
        />
    );
}
