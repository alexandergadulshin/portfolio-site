import SmartLink from "@/components/common/SmartLink";
import { ButtonArrowIcon } from "@/svg";

// The template's animated button with the double-text hover.
const CtaButton = ({ href, label, className = "tp-btn" }: { href: string; label: string; className?: string }) => (
    <SmartLink className={className} href={href}>
        <span>
            <span className="text-1">{label}</span>
            <span className="text-2">{label}</span>
        </span>
        <i>
            <ButtonArrowIcon />
            <ButtonArrowIcon />
        </i>
    </SmartLink>
);

export default CtaButton;
