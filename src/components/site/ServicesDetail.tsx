const details = [
    {
        id: "web",
        title: "Website design and builds",
        intro: "Every page gets one job, either a booking or a sale, and I cut anything that distracts from it.",
        items: [
            "Design and build in Next.js, hosted on Vercel",
            "Copy written for your customers, in your voice",
            "Documentation you can follow without me",
            "A handoff session where you learn to update it yourself",
        ],
    },
    {
        id: "ai",
        title: "AI tool installation",
        intro: "AI tools help the business owners automate quotes, follow-ups, content and accounting. However, choosing and installing them requires time that most owners cannot spend. I choose and install the tools for them.",
        items: [
            "An audit of how your work flows today",
            "Setup of the tools that fit, nothing extra",
            "Training until you run them without me",
            "A written playbook your team can share",
        ],
    },
];

const ServicesDetail = () => (
    <div className="tp-pd-2-overview-ptb pt-120 pb-60">
        <div className="container">
            {details.map((d) => (
                <div className="tp-about-border pt-50 mb-40" key={d.id} id={`${d.id}-detail`}>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="tp-pd-2-overview-heading tp_fade_anim" data-delay=".3">
                                <h3 className="tp-pd-2-overview-title reveal-text">{d.title}</h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="tp-pd-2-overview-wrap">
                                <p>{d.intro}</p>
                                <h4 className="tp-pd-2-step-item-title mt-20 mb-15">What you get</h4>
                                <ul className="site-list">
                                    {d.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ServicesDetail;
