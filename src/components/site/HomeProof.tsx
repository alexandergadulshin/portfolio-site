import CtaButton from "./CtaButton";
import { site } from "@/config/site";
import Image from "next/image";

// The dark statement band. Evidence leads: the GMV figure opens it.
const HomeProof = () => {
    return (
        <div className="mp-about-area pt-155 pb-160 tp-section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="mp-about-content text-center">
                            <h3 className="mp-about-logo text-white tp-ff-sequel-semi-bold mb-30">Proof</h3>
                            <h4 className="mp-about-title tp-ff-sequel-semi-bold text-white mb-40">
                                At Syrex Consulting I built a UGC video generator{" "}
                                <Image width={66} height={39} className="mp-about-thumb" src="/assets/img/site/chip-red.jpg" alt="" />{" "}
                                that produced <span className="site-figure">{site.gmv}</span> in GMV for client businesses.{" "}
                                <br />
                                Your business gets{" "}
                                <Image width={66} height={39} className="mp-about-thumb" src="/assets/img/site/chip-green.jpg" alt="" />{" "}
                                the same standard of work.
                            </h4>
                            <CtaButton href="/work/syrex" label="Read the case study" className="tp-btn ca-footer-btn tp-ff-inter text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProof;
