import { ArrowIconFive } from "@/svg/ArrowIcons";
import SmartLink from "@/components/common/SmartLink";

const services = [
    {
        title: "01. Website design and builds",
        text: "A fast site with one clear action per page. I design and build it in Next.js, then hand you the keys with documentation you can follow without me.",
    },
    {
        title: "02. AI tool installation",
        text: "I find the tools that fit your workflow and set them up. Then I train you until you run them on your own.",
    },
];

const HomeServices = () => {
    return (
        <div className="mp-blog-area pt-145 pb-100">
            <div className="container">
                <div className="row align-items-end mb-15">
                    <div className="col-lg-8">
                        <div className="mp-blog-title-wrap mb-30">
                            <h2 className="tp-section-title tp-ff-sequel-roman reveal-text">
                                Two ways to <br /> remove a bottleneck.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-lg-end mb-40">
                            <div className="tp-btn-group tp_fade_anim" data-delay=".4" data-fade-from="bottom">
                                <SmartLink className="tp-btn-circle" href="/services" aria-label="See both services">
                                    <ArrowIconFive />
                                </SmartLink>
                                <SmartLink className="tp-btn z-index-1" href="/services">See both services</SmartLink>
                                <SmartLink className="tp-btn-circle" href="/services" aria-label="See both services">
                                    <ArrowIconFive />
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service) => (
                        <div key={service.title} className="col-lg-6">
                            <div className="tp-pd-2-step-item mb-30 tp_fade_anim" data-delay=".3">
                                <h4 className="tp-pd-2-step-item-title">{service.title}</h4>
                                <span>{service.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeServices;
