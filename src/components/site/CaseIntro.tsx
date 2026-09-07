import CtaButton from "./CtaButton";

type Meta = { label: string; value: string };

// Case study opener: title, four meta facts, and the one call to action.
const CaseIntro = ({ title, meta }: { title: React.ReactNode; meta: Meta[] }) => (
    <div className="tp-pd-2-ptb tp-pd-3-style pt-175 pb-55">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tp-pd-2-top pb-45 jump-anim text-center">
                        <h1 className="tp-pd-3-title site-case-title tp-ff-sequel-bold-head tp_fade_anim" data-delay=".5">{title}</h1>
                    </div>
                </div>
                <div className="col-xl-10">
                    <div className="row">
                        {meta.map((m) => (
                            <div className="col-lg-3 col-md-6 col-sm-6" key={m.label}>
                                <div className="tp-pd-2-bottom-item mb-20">
                                    <span>{m.label}</span>
                                    <h6>{m.value}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-xl-2">
                    <div className="text-xl-end">
                        <CtaButton href="/contact" label="Book a call" className="tp-btn tp-btn-border" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CaseIntro;
