import Image from "next/image";

const CaseBanner = ({ src, alt }: { src: string; alt: string }) => (
    <div className="tp-pd-2-area pb-60">
        <div className="container-fluid p-0">
            <div className="tp-pd-2-banner scale-up-img">
                <Image style={{ width: "100%", height: "auto" }} width={1905} height={950} src={src} alt={alt} data-speed=".8" className="img-cover scale-up" />
            </div>
        </div>
    </div>
);

export default CaseBanner;
