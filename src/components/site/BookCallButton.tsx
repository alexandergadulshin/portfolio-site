import { site } from "@/config/site";
import { ButtonArrowIcon } from "@/svg";
import Link from "next/link";

// The one call to action. Every "Book a call" element renders through
// this component so the destination lives in one place: the booking link
// in src/config/site.ts, opened in a new tab. While that value is empty,
// the button leads to the contact page instead.
export const bookingHref = site.bookingUrl || "/contact";
export const contactPageBookingHref = site.bookingUrl || `mailto:${site.email}?subject=Book%20a%20call`;
export const bookingIsExternal = Boolean(site.bookingUrl);

type Props = { className?: string; plain?: boolean; onClick?: () => void; children?: React.ReactNode; href?: string };

const BookCallButton = ({ className = "tp-btn", plain = false, onClick, children, href }: Props) => {
    const target = href ?? bookingHref;
    const inner = plain ? (children ?? "Book a call") : (
        <>
            <span>
                <span className="text-1">Book a call</span>
                <span className="text-2">Book a call</span>
            </span>
            <i>
                <ButtonArrowIcon />
                <ButtonArrowIcon />
            </i>
        </>
    );
    if (bookingIsExternal) {
        return <a className={className} href={target} target="_blank" rel="noopener noreferrer" onClick={onClick}>{inner}</a>;
    }
    if (/^[a-z][a-z0-9+.-]*:/i.test(target)) return <a className={className} href={target} onClick={onClick}>{inner}</a>;
    return <Link className={className} href={target} onClick={onClick}>{inner}</Link>;
};

export default BookCallButton;
