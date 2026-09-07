// A two-column section: heading on the left, content on the right.
const CaseSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="tp-pd-2-overview-ptb pb-25">
        <div className="container">
            <div className="tp-about-border pt-50">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tp-pd-2-overview-heading tp_fade_anim" data-delay=".3">
                            <h3 className="tp-pd-2-overview-title reveal-text">{title}</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="tp-pd-2-overview-wrap">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CaseSection;
