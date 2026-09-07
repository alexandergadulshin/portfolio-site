import HomeServices from "@/components/site/HomeServices";
import HomeProcess from "@/components/site/HomeProcess";
import HomeProof from "@/components/site/HomeProof";
import HomeHero from "@/components/site/HomeHero";
import HomeWork from "@/components/site/HomeWork";
import SiteCta from "@/components/site/SiteCta";

export default function Home() {
    return (
        <main>
            <HomeHero />
            <HomeProof />
            <HomeWork />
            <HomeProcess />
            <HomeServices />
            <SiteCta />
        </main>
    );
}
