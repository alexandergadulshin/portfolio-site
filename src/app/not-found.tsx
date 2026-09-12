import SiteShell from "@/components/layout/SiteShell";
import SmartLink from "@/components/common/SmartLink";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
    return (
        <SiteShell>
            <main>
                <div className="tp-error-area pt-190 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tp-error-wrapper text-center">
                                    <h4 className="tp-error-title">404</h4>
                                    <div className="tp-error-content">
                                        <h4 className="tp-error-title-sm">This page does not exist.</h4>
                                        <p>The address may have a typo or the page is moved. The home page contains the map of the site.</p>
                                        <SmartLink className="tp-btn" href="/">Go to the home page</SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </SiteShell>
    );
}
