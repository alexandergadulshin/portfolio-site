import Image from "next/image";

// One or two screenshots in a simple browser-frame card, stacked, with a
// shared caption. Aspect-ratio boxes are reserved so nothing shifts.
const DashboardShots = ({ shots, caption, alt }: { shots: { src: string; width: number; height: number }[]; caption: string; alt: string }) => {
    if (!shots.length) return null;
    return (
        <div className="site-shots">
            {shots.map((shot, i) => (
                <figure className="site-browser" key={shot.src}>
                    <div className="site-browser-bar" aria-hidden="true"><span></span><span></span><span></span></div>
                    <div className="site-browser-body" style={{ aspectRatio: `${shot.width} / ${shot.height}` }}>
                        <Image src={shot.src} alt={`${alt} ${i + 1}`} width={shot.width} height={shot.height} loading="lazy" sizes="(max-width: 991px) 92vw, 640px" />
                    </div>
                </figure>
            ))}
            <p className="site-strip-caption">{caption}</p>
        </div>
    );
};

export default DashboardShots;
