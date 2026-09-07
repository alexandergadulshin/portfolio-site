import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";

export type WorkItem = {
    href: string;
    title: string;
    tag: string;
    image: string;
    width: number;
    height: number;
};

// Case-study card, template's mp-portfolio markup with our own links.
const WorkCard = ({ item }: { item: WorkItem }) => (
    <div className="mp-portfolio-item mb-40">
        <SmartLink href={item.href} className="mp-portfolio-thumb mb-25">
            <Image width={item.width} height={item.height} className="img-fluid w-100" src={item.image} alt={item.title} />
        </SmartLink>
        <div className="mp-portfolio-content d-inline-block">
            <h3 className="mp-portfolio-title tp-ff-sequel-semi-bold site-work-title">
                <SmartLink href={item.href}>{item.title}</SmartLink>
            </h3>
            <span className="mp-portfolio-tag">{item.tag}</span>
        </div>
    </div>
);

export default WorkCard;
