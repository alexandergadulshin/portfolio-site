import SmartLink from "@/components/common/SmartLink";
import { site } from "@/config/site";

// A text mark instead of the template's logo images, so the name in
// src/config/site.ts shows everywhere. The size props exist because the
// template's off-canvas panel still passes them; they are not used.
type BrandLogoProps = {
    logo1Width?: number;
    logo2Width?: number;
    logo1Height?: number;
    logo2Height?: number;
};

const BrandLogo = (_props: BrandLogoProps) => {
    return (
        <SmartLink href="/" className="site-brand tp-ff-sequel-semi-bold">
            {site.name}
        </SmartLink>
    );
};

export default BrandLogo;
