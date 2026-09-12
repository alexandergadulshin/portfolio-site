"use client";
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import BrandLogo from "../../components/common/BrandLogo";
import HeaderMenu from "@/components/layout/HeaderMenu";
import SmartLink from "@/components/common/SmartLink";
import useStickyHeader from "@/hooks/useStickyHeader";
import useGlobalContext from "@/hooks/useContext";
import { ButtonArrowIcon } from "@/svg";

// Header: text mark, inline nav from 1024px, "Book a call", and a menu
// button below 1024px that opens the overlay menu.
const PageHeader = () => {
    const { toggleSecondaryOffcanvas } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                <div className="tp-header-area tp-header-spacing header-transparent">
                    <div className="container">
                        <div className="site-header-row">
                            <div className="tp-header-logo">
                                <BrandLogo />
                            </div>
                            <div className="tp-main-menu site-header-nav">
                                <nav aria-label="Site">
                                    <HeaderMenu />
                                </nav>
                            </div>
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
                                <button onClick={toggleSecondaryOffcanvas} className="tp-menu-bar tp-header-sidebar-btn ml-10" aria-label="Open menu">
                                    <span />
                                    <span />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={toggleSecondaryOffcanvas} id="header-sticky" className={`hamburger-open-btn tp-header-sidebar-btn hamburger-sticky-menu ${isSticky ? "header-sticky" : ""}`} aria-label="Open menu">
                    <span></span>
                    <span></span>
                </button>
            </header>

            <OffCanvasPanelTwo />
        </>
    );
};

export default PageHeader;
