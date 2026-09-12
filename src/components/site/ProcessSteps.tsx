import { processSteps } from "@/data/process-data";

const ProcessSteps = () => (
    <div className="tp-pd-2-step-ptb pt-40 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tp-pd-2-step-heading pb-60 tp_fade_anim" data-delay=".3">
                        <h3 className="tp-pd-2-step-title reveal-text">A project runs in four steps with the price and the date fixed up front.</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                {processSteps.map((step) => (
                    <div className="col-lg-3 col-md-6" key={step.id}>
                        <div className="tp-pd-2-step-item mb-30">
                            <h4 className="tp-pd-2-step-item-title">{step.count}. {step.title}</h4>
                            <span>{step.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProcessSteps;
