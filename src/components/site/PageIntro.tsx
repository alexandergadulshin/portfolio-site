// Page opener: small label, big title, and an optional lede.
const PageIntro = ({ label, title, lede }: { label: string; title: React.ReactNode; lede?: string }) => (
    <div className="tp-breadcrumb-area about-us-spacing pb-40">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tp-tp-breadcrumb-main text-center">
                        <span className="tp-breadcrumb-subtitle fw-600 mb-10 tp_fade_anim" data-delay=".3">{label}</span>
                        <h1 className="tp-breadcrumb-title tp-ff-sequel-bold-head tp_fade_anim" data-delay=".5">{title}</h1>
                        {lede && <p className="mt-30 tp_fade_anim" data-delay=".6" style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>{lede}</p>}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PageIntro;
