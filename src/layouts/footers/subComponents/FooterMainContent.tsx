import BookCallButton from "@/components/site/BookCallButton";
import { getCurrentYear } from "@/utils/getCurrentYear";
import { site } from "@/config/site";
import Link from "next/link";

// Three rows: pages and email, the call to action, and a bottom bar that
// anchors the name, location, and copyright. No scroll-triggered fades.
const FooterMainContent = () => {
    return (
        <div className="container">
            <div className="row site-footer-top">
                <div className="col-xl-6 col-lg-7">
                    <div className="tp-footer-widget tp-footer-link">
                        <h5 className="tp-footer-subtitle text-white mb-20">Pages</h5>
                        <div className="tp-hero-social site-footer-pills">
                            <Link href="/work">Work</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/about">About</Link>
                            <Link href="/writing">Writing</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                    <div className="tp-footer-widget site-footer-email-widget text-lg-end">
                        <span className="tp-footer-dec text-white">Tell me about your business.</span>
                        <h4 className="tp-footer-email tp-ff-sequel-roman text-white">
                            <Link href={`mailto:${site.email}`}>{site.email}</Link>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="site-footer-cta">
                <h2 className="tp-footer-bigtext text-white tp-ff-sequel-bold-head">
                    <BookCallButton className="text-scale-anim" plain />
                </h2>
            </div>

            <div className="site-footer-bar tp-about-border">
                <span className="site-brand site-brand-footer tp-ff-sequel-semi-bold text-white">{site.name}</span>
                <span className="tp-footer-copyright">Based in {site.location}. Working with clients anywhere.</span>
                <span className="tp-footer-copyright">&copy; <span className="update-year">{getCurrentYear()}</span> {site.name}</span>
            </div>
        </div>
    );
};

export default FooterMainContent;
