// Route-keyed animation setup. Each key is a page path; each value is
// the list of template animations that page uses.
import { AboutThumbAnimation, AwardAnimation, charAnimation, heroMagneticAnimation, jumpTextAnimation, servicePanelPinAnim, textScaleHoverAnim } from "@/hooks/useGsapAnimation";

export const animationConfig: Record<string, (() => void)[]> = {
    "/": [charAnimation, heroMagneticAnimation, jumpTextAnimation, AboutThumbAnimation, AwardAnimation, textScaleHoverAnim],
    "/services": [servicePanelPinAnim, charAnimation],
    "/about": [charAnimation],
};
