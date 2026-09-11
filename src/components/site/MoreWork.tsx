import WorkCard from "@/components/site/WorkCard";
import { workItems } from "@/data/work-data";

// The other case studies, shown under a case study page.
const MoreWork = ({ current }: { current: string }) => {
    const others = workItems.filter((item) => item.href !== current);
    const col = others.length >= 3 ? "col-lg-4 col-md-6" : "col-lg-6";
    return (
        <div className="tp-portfolio-area pt-90 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-25">
                            <h2 className="tp-portfoliom-m-title reveal-text">More work</h2>
                        </div>
                    </div>
                    {others.map((item) => (
                        <div className={col} key={item.href}>
                            <WorkCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoreWork;
