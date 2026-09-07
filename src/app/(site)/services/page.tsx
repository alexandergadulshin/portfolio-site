import ServicesDetail from "@/components/site/ServicesDetail";
import ServicesList from "@/components/site/ServicesList";
import ProcessSteps from "@/components/site/ProcessSteps";
import { ScrollLink } from "@/components/common/ScrollLink";
import { ArrowBottomIconTwo } from "@/svg/ArrowIcons";
import SiteCta from "@/components/site/SiteCta";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
    return (
        <main>
            <div className="inner-service-banner-area about-us-spacing pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-10">
                            <div className="inner-service-banner-title-wrap tp_fade_anim" data-delay=".3">
                                <h1 className="about-us-title tp-ff-sequel-medium">Two services, one goal: remove the bottleneck that costs your business the most time or money.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-service-banner-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10">
                                <ScrollLink target="#service">
                                    scroll to explore
                                    <span><ArrowBottomIconTwo /></span>
                                </ScrollLink>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10 text-sm-end">
                                <span className="tp-ff-sequel-semi-bold text-uppercase">Fixed price, fixed date</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServicesList />
            <ServicesDetail />
            <ProcessSteps />
            <SiteCta />
        </main>
    );
}
