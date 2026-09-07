"use client";
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import BrandLogo from "../../components/common/BrandLogo";
import SmartLink from "@/components/common/SmartLink";
import useStickyHeader from "@/hooks/useStickyHeader";
import useGlobalContext from "@/hooks/useContext";
import { ButtonArrowIcon } from "@/svg";

// Header: text mark on the left, "Book a call" and the menu button on
// the right. The full menu lives in the off-canvas panel.
const PageHeader = () => {
    const { toggleSecondaryOffcanvas } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                <div className="tp-header-area tp-header-spacing header-transparent">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="tp-header-logo">
                                    <BrandLogo />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="tp-header-right d-flex justify-content-end align-items-center">
                                    <SmartLink className="tp-btn site-header-btn d-none d-md-inline-flex" href="/contact">
                                        <span>
                                            <span className="text-1">Book a call</span>
                                            <span className="text-2">Book a call</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                    <button
                                        onClick={toggleSecondaryOffcanvas}
                                        className="tp-menu-bar tp-header-sidebar-btn ml-10"
                                        aria-label="Open menu"
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={toggleSecondaryOffcanvas}
                    id="header-sticky"
                    className={`hamburger-open-btn tp-header-sidebar-btn hamburger-sticky-menu ${isSticky ? "header-sticky" : ""}`}
                    aria-label="Open menu"
                >
                    <span></span>
                    <span></span>
                </button>
            </header>

            <OffCanvasPanelTwo />
        </>
    );
};

export default PageHeader;
