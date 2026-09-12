import BookCallButton from "@/components/site/BookCallButton";
import Image from "next/image";

// Closing invitation, from the template's Digital Studio call to action.
const SiteCta = () => {
    return (
        <div className="site-cta-seat">
        <div className="ca-testimonial-spacing fix tp-section-bg">
            <div className="ca-cta-area ca-cta-spacing pt-180 pb-120 p-relative z-index-1">
                <div className="mil-scale-img ca-cta-scale" data-value-1="1.45" data-value-2="1">
                    <Image width={754} height={504} className="img-fluid ca-cta-shape" src="/assets/img/cta/shape.png" alt="" />
                </div>
                <div className="container">
                    <div className="row align-content-end">
                        <div className="col-lg-7">
                            <div className="ca-cta-title-wrap p-relative mb-40">
                                <h2 className="ca-section-title fs-100 text-white lh-1 mb-30 reveal-text">Start with<br /> a call.</h2>
                                <p className="text-white mb-40">Talk to me about your business and I&apos;ll tell you what I&apos;d build first, the call is free and after that you decide what happens next.</p>
                                <div className="tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                    <BookCallButton className="tp-btn tp-btn-red tp-ff-inter" />
                                </div>
                                <Image width={376} height={376} className="ca-cta-shape-2 d-none d-sm-inline-block" src="/assets/img/cta/shape-3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ca-cta-thumb ml-100">
                                <Image width={234} height={234} src="/assets/img/cta/shape-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SiteCta;
