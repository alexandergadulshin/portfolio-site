import CtaButton from "@/components/site/CtaButton";
import { site } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Book a call" };

export default function Contact() {
    return (
        <main>
            <div className="tp-contact-me-area tp-pd-2-ptb pt-175 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="tp-contact-me-title-wrap mb-30">
                                <h1 className="tp-section-title tp-ff-sequel-semi-bold fs-72 tp_fade_anim mb-20" data-delay=".3">
                                    Book a call.
                                </h1>
                                <div className="tp-pd-2-categories tp_fade_anim" data-delay=".5">
                                    <span>Based in {site.location}</span> <span>Working with clients anywhere</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="tp-pd-2-overview-wrap tp_fade_anim" data-delay=".4">
                                <p>Tell me about your business and what slows it down. I read each message and reply within one business day.</p>
                                <p>
                                    Email me at <a href={`mailto:${site.email}`}>{site.email}</a> with a sentence or two about your business. You do not need a long pitch.
                                </p>
                                <div className="mt-30">
                                    <a href={site.bookingUrl || `mailto:${site.email}?subject=Book%20a%20call`} className="tp-btn">
                                        <span>
                                            <span className="text-1">Book a call</span>
                                            <span className="text-2">Book a call</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-20">
                                    <CtaButton href={`mailto:${site.email}`} label="Email me" className="tp-btn tp-btn-grey" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
