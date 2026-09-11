import CtaButton from "./CtaButton";
import { site } from "@/config/site";
import Image from "next/image";

const tiles = [
    { src: "/assets/img/site/tile-websites.jpg", alt: "Websites" },
    { src: "/assets/img/site/tile-ai.jpg", alt: "AI tools" },
    { src: "/assets/img/site/tile-copy.jpg", alt: "Plain copy" },
    { src: "/assets/img/site/tile-call.jpg", alt: "Book a call" },
];

// The wordmark breaks in exactly one place, between the first and last
// name, and each line is sized from the longer name so it never clips.
const [firstName, ...rest] = site.name.split(" ");
const lastName = rest.join(" ");

const HomeHero = () => {
    return (
        <div className="mp-hero-area mp-hero-spacing">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3">
                        <div className="mp-hero-awards mb-30 p-relative d-inline-block tp_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                            <Image width={155} height={156} className="rotate-infinite" src="/assets/img/site/badge.svg" alt="Book a call" unoptimized />
                        </div>
                    </div>

                    <div className="col-xl-9">
                        <div className="mp-hero-content ml-75">
                            <h1 className="mp-hero-title tp-ff-inter mb-40 tp-char-animation">
                                Websites and AI tools
                                <br />
                                for small businesses.
                            </h1>

                            <div className="mp-hero-btn d-flex flex-wrap gap-2 mb-50">
                                <div className="tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                    <CtaButton href="/contact" label="Book a call" className="tp-btn mb-10" />
                                </div>
                                <div className="tp_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
                                    <CtaButton href="/work/syrex" label="Read the Syrex case study" className="tp-btn tp-btn-grey mb-10" />
                                </div>
                            </div>

                            <div className="mp-hero-magnetic">
                                <div className="mp-hero-magnetic-image-wrap d-flex flex-wrap flex-md-nowrap gap-3">
                                    {tiles.map((tile, idx) => (
                                        <div key={tile.src} className="mp-hero-magnetic-item mb-20 tp_fade_anim" data-delay={`.${4 + idx}`} data-fade-from="bottom" data-ease="bounce">
                                            <Image width={256} height={196} src={tile.src} className="mp-hero-magnetic-image" alt={tile.alt} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="mp-hero-bigtitle-wrap text-center pt-10 tp_fade_anim" data-delay=".8" data-fade-from="bottom" data-ease="bounce">
                            <h2 className="mp-hero-bigtitle site-wordmark tp-ff-sequel-semi-bold" aria-label={site.name}>
                                <span className="site-wordmark-line">{firstName}</span>
                                <span className="site-wordmark-line">{lastName}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
