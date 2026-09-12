import { processSteps } from "@/data/process-data";

// The template's awards list, carrying the four project steps instead.
const HomeProcess = () => {
    return (
        <div className="mp-awards-area pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-9 col-xl-10">
                        <div className="mp-awards-title-wrap mb-60">
                            <h2 className="tp-section-title fs-72 tp-ff-sequel-roman reveal-text">
                                The owner comes to me with a bottleneck and I remove it using a website or an AI tool then pass the keys over to them.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-9 offset-lg-3">
                        <div className="mp-awards-item-wrap fix ml-75">
                            {processSteps.map((step) => (
                                <div key={step.id} className="right-item-animetion">
                                    <div className="mp-awards-item d-flex justify-content-between align-items-center gap-4">
                                        <div className="mp-awards-left mb-20">
                                            <span className="count mr-80">{step.count}</span>
                                            <span>{step.title}. {step.text}</span>
                                        </div>
                                        <div className="mp-awards-right mb-20 d-flex align-items-center">
                                            <div className="mp-awards-logo" style={{ backgroundColor: step.color }} aria-hidden="true"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProcess;
