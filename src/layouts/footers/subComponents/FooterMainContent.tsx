import SmartLink from "@/components/common/SmartLink";
import { getCurrentYear } from "@/utils/getCurrentYear";
import { site } from "@/config/site";
import Link from "next/link";

const FooterMainContent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xxl-3 col-xl-4 col-lg-6">
                    <div className="tp-footer-widget tp-footer-link mb-30">
                        <h5 className="tp-footer-subtitle text-white mb-25">Pages</h5>
                        <div className="tp-hero-social">
                            <Link href="/work">Work</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/about">About</Link>
                            <Link href="/writing">Writing</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 offset-xxl-3 offset-xl-2 col-lg-6">
                    <div className="tp-footer-widget ml-40 mb-30 site-footer-email-widget">
                        <span className="tp-footer-dec text-white">Tell me about your business.</span>
                        <h4 className="tp-footer-email tp-ff-sequel-roman text-white">
                            <Link href={`mailto:${site.email}`}>{site.email}</Link>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row align-items-end mt-35">
                <div className="col-lg-4">
                    <div className="tp-footer-logo mb-30">
                        <span className="site-brand site-brand-footer tp-ff-sequel-semi-bold text-white">{site.name}</span>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="tp-footer-text text-lg-end">
                        <h2 className="tp-footer-bigtext text-white tp-ff-sequel-bold-head">
                            <SmartLink href="/contact" className="text-scale-anim">Book a call</SmartLink>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="tp-footer-copyright-area tp-about-border mt-70 pt-30 pb-10">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="tp-footer-copyright-wrap mb-20">
                            <span className="tp-footer-copyright">Based in {site.location}. Working with clients anywhere.</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-footer-copyright-wrap text-lg-end mb-20">
                            <span className="tp-footer-copyright">&copy; <span className="update-year">{getCurrentYear()}</span> {site.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMainContent;
