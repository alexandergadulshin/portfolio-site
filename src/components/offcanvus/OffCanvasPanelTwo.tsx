"use client";
import { useEffect, useState } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import BrandLogo from "@/components/common/BrandLogo";
import CtaButton from "@/components/site/CtaButton";
import StickyMainMenu from "../layout/StickyMainMenu";
import useGlobalContext from "@/hooks/useContext";
import { site } from "@/config/site";
import { CroseIconTwo } from "@/svg";

// The overlay menu, used below 1024px. Keeps the template's panel and
// animation; the contents are the four section links, the "Book a call"
// pill, and a small contact block. While open, page scroll is locked and
// the panel sits above everything else.
const OffCanvasPanelTwo = () => {
    const { isSecondaryOffcanvasOpen, toggleSecondaryOffcanvas } = useGlobalContext();
    const [menuOpenTemp, setMenuOpenTemp] = useState(false);

    const handleClose = () => {
        if (!isSecondaryOffcanvasOpen) return;
        toggleSecondaryOffcanvas();
        setMenuOpenTemp(true);
        setTimeout(() => setMenuOpenTemp(false), 2000);
    };

    useEffect(() => {
        const root = document.documentElement;
        const smoother = ScrollSmoother.get();
        if (isSecondaryOffcanvasOpen) {
            root.classList.add("site-menu-open");
            smoother?.paused(true);
        } else {
            root.classList.remove("site-menu-open");
            smoother?.paused(false);
        }
        if (!isSecondaryOffcanvasOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSecondaryOffcanvasOpen]);

    return (
        <div className={`tp-offcanvas-2-area p-relative ${isSecondaryOffcanvasOpen ? "menu-open" : ""} ${menuOpenTemp ? "menu-open-temp" : ""}`}>
            <div className="offcanvas-bg" onClick={handleClose} aria-hidden="true"></div>

            <div className="tp-offcanvas-2-wrapper offcanvas-menu" role="dialog" aria-modal="true" aria-label="Menu">
                <div className="tp-offcanvas-2-left">
                    <div className="tp-header-logo d-flex justify-content-between align-items-center mb-40">
                        <BrandLogo />
                        <button type="button" onClick={handleClose} className={`hamburger-close-btn site-menu-close ${isSecondaryOffcanvasOpen ? "active" : ""}`} aria-label="Close menu">
                            <CroseIconTwo />
                        </button>
                    </div>

                    <div className="tp-offcanvas-menu site-menu-links">
                        <nav aria-label="Site">
                            <StickyMainMenu onClose={handleClose} exclude={["/contact"]} />
                        </nav>
                    </div>

                    <div className="site-menu-cta">
                        <span onClick={handleClose}>
                            <CtaButton href="/contact" label="Book a call" className="tp-btn tp-btn-red" />
                        </span>
                    </div>

                    <div className="site-menu-contact">
                        <a href={`mailto:${site.email}`}>{site.email}</a>
                        <span>Based in {site.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasPanelTwo;
