import Image from "next/image";

// A row of small 9:16 thumbnails with one shared caption. Aspect-ratio
// boxes are reserved so nothing shifts while the images lazy-load.
const ExampleStrip = ({ images, leadIn, caption }: { images: string[]; leadIn: string; caption: string }) => {
    if (!images.length) return null;
    return (
        <div className="site-strip">
            <p>{leadIn}</p>
            <div className="site-strip-row" role="list" style={{ "--strip-cols": images.length } as React.CSSProperties}>
                {images.map((src, i) => (
                    <div className="site-strip-frame" role="listitem" key={src}>
                        <Image src={src} alt={`Still from a generated product video ${i + 1}`} width={360} height={640} loading="lazy" sizes="(max-width: 767px) 45vw, 180px" />
                    </div>
                ))}
            </div>
            <p className="site-strip-caption">{caption}</p>
        </div>
    );
};

export default ExampleStrip;
