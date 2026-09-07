import PageIntro from "@/components/site/PageIntro";
import WorkCard from "@/components/site/WorkCard";
import SiteCta from "@/components/site/SiteCta";
import { workItems } from "@/data/work-data";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Work" };

export default function Work() {
    return (
        <main>
            <PageIntro label="Selected work" title={<>Results first,<br />process second</>} lede="Each case study opens with the number that matters and then shows how the build produced it." />
            <div className="tp-portfolio-inner-ptb pb-90">
                <div className="container">
                    <div className="row gx-60">
                        {workItems.map((item) => (
                            <div className="col-lg-6" key={item.href}>
                                <WorkCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SiteCta />
        </main>
    );
}
