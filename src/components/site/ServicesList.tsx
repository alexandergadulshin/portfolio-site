"use client";
import { ServiceArrowIcon } from "@/svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const services = [
    { id: "web", title: "Website design and builds", image: "/assets/img/site/service-web-2.jpg" },
    { id: "ai", title: "AI tool installation", image: "/assets/img/site/service-ai-2.jpg" },
];

// The template's hover list: the image swaps as you move over the titles.
const ServicesList = () => {
    const imageRefs = useRef<HTMLDivElement[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!imageRefs.current.length) return;
        gsap.set(imageRefs.current, { opacity: 0, y: 50, scale: 1, zIndex: 1 });
        gsap.set(imageRefs.current[0], { opacity: 1, y: 0, zIndex: 2 });
    }, []);

    const handleHover = (index: number) => {
        setActiveIndex(index);
        imageRefs.current.forEach((img, i) => {
            gsap.to(img, i === index
                ? { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", zIndex: 2 }
                : { opacity: 0, y: 200, scale: 0.8, duration: 0.8, ease: "power3.out", zIndex: 1 });
        });
    };

    return (
        <div id="service" className="tp-service-area tp-panel-pin-area tp-bg-grey pt-145 pb-90">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xxl-11 col-xl-12">
                        <div className="tp-about-title-wrap mb-30">
                            <h2 className="tp-section-title reveal-text">Most small business sites try to say too much and I build sites that load fast and direct each page to one action.</h2>
                        </div>
                    </div>
                </div>
                <div className="tp-about-border mt-20 pt-40">
                    <div className="row">
                        <div className="col-lg-4 mb-40">
                            <div className="tp-service-content mr-60 mt-20">
                                <div className="tp-service-sales-wrap tp-panel-pin fix p-relative">
                                    <div className="tp-service-img-wrapper image-container">
                                        {services.map((service, index) => (
                                            <div key={service.id} className="hover-image" ref={(el) => { if (el) imageRefs.current[index] = el; }}>
                                                <Image className="thumb" src={service.image} alt={service.title} width={493} height={450} priority={index === 0} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mb-40">
                            <div className="tp-service-list-wrap ml-60">
                                {services.map((service, index) => (
                                    <div key={service.id} className={`tp-service-item service-item mb-5 ${activeIndex === index ? "active" : ""}`} onMouseEnter={() => handleHover(index)}>
                                        <h2 className="tp-service-title tp-ff-sequel-roman d-inline-block">
                                            <a href={`#${service.id}-detail`}>
                                                {service.title}
                                                <span className="tp-service-icon d-inline-block"><ServiceArrowIcon /></span>
                                            </a>
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesList;
