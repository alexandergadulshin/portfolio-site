import { ArrowIconFive } from "@/svg/ArrowIcons";
import SmartLink from "@/components/common/SmartLink";
import { workItems } from "@/data/work-data";
import WorkCard from "./WorkCard";

const HomeWork = () => {
    return (
        <div className="mp-portfolio-area pt-145 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h2 className="tp-section-title tp-ff-sequel-roman reveal-text mb-20">Recent work</h2>
                    </div>
                    <div className="col-lg-5">
                        <p className="mt-20 mb-40">Results first, process second. Each case study opens with the number that matters and then shows how the build produced it.</p>
                    </div>
                </div>
                <div className="row pt-30">
                    {workItems.map((item) => (
                        <div className="col-lg-6" key={item.href}>
                            <WorkCard item={item} />
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center mt-30">
                    <div className="tp-btn-group tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                        <SmartLink className="tp-btn-circle" href="/work" aria-label="See all work">
                            <ArrowIconFive />
                        </SmartLink>
                        <SmartLink className="tp-btn z-index-1" href="/work">See all work</SmartLink>
                        <SmartLink className="tp-btn-circle" href="/work" aria-label="See all work">
                            <ArrowIconFive />
                        </SmartLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeWork;
