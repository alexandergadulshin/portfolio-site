import { ArrowIconSix } from "@/svg/ArrowIcons";
import CaseSection from "@/components/site/CaseSection";
import CtaButton from "@/components/site/CtaButton";
import SiteCta from "@/components/site/SiteCta";
import { site } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function About() {
    return (
        <main>
            <div className="about-me-area about-me-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="tp-about-subtitle-wrap mb-30">
                                <span className="tp-about-subtitle tp_fade_anim" data-delay=".3"><ArrowIconSix /> About</span>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-8 col-lg-10">
                            <div className="pp-about-content">
                                <h1 className="pp-about-title mb-30 tp_fade_anim" data-delay=".4">
                                    I&apos;m {site.name}. I study writing at UC Santa Barbara and build websites and AI tools for small businesses.
                                </h1>
                                <div className="pp-about-dec-wrap">
                                    <div className="tp_fade_anim" data-delay=".5">
                                        <p className="pp-about-dec mb-30">
                                            I started building websites for friends&apos; side businesses in high school and kept going at UCSB. The Syrex work came through a referral in my second year and turned a hobby into a practice: one tool, one measured result, and a client who wanted more.
                                        </p>
                                        <p className="pp-about-dec mb-50">
                                            The writing coursework is not a detour from the technical work. The hardest part of a small business site is deciding what each page says and what it asks the visitor to do. I train for that part in the classroom and practice the build side on real projects.
                                        </p>
                                    </div>
                                    <div className="pp-about-btn d-flex flex-wrap gap-3">
                                        <CtaButton href="/contact" label="Book a call" />
                                        <CtaButton href="/work/syrex" label="Read the Syrex case study" className="tp-btn tp-btn-grey" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CaseSection title="For recruiters">
                <p>
                    The <Link href="/work/syrex">Syrex case study</Link> is the fastest read on how I work. Email me at{" "}
                    <a href={`mailto:${site.email}`}>{site.email}</a> for a resume.
                </p>
            </CaseSection>
            <SiteCta />
        </main>
    );
}
