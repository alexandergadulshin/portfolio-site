import { ArrowIconSix } from "@/svg/ArrowIcons";
import CaseSection from "@/components/site/CaseSection";
import CtaButton from "@/components/site/CtaButton";
import SiteCta from "@/components/site/SiteCta";
import { site } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About",
    description: "Who I am, why this site exists, and how I write and build it.",
};

export default function About() {
    return (
        <main>
            <div className="about-me-area about-me-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="tp-about-subtitle-wrap mb-30">
                                <span className="tp-about-subtitle tp_fade_anim" data-delay=".3"><ArrowIconSix /> About</span>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-8 col-lg-10">
                            <div className="pp-about-content">
                                <h1 className="pp-about-title mb-40 tp_fade_anim" data-delay=".4">
                                    I&apos;m {site.name}. I study computer science at UC Santa Barbara and build websites and AI tools for small businesses.
                                </h1>
                                <div className="pp-about-btn d-flex flex-wrap gap-3">
                                    <CtaButton href="/contact" label="Book a call" />
                                    <CtaButton href="/work/syrex" label="Read the Syrex case study" className="tp-btn tp-btn-grey" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseSection title="How I got here">
                <p>I started building websites for friends&apos; side businesses in high school. Every build taught me the same lesson. A site does not win because of the code. It wins when a stranger can land on it and act without help.</p>
                <p>I kept building at UC Santa Barbara. In my second year, a referral brought me to Syrex Consulting, where I built a UGC video generator. Over six months, twelve client businesses used it to make video ads for TikTok Shop and Instagram. Those ads drove $284,000 in gross merchandise value. The project turned a hobby into a practice. The full story is on the <Link href="/work/syrex">Syrex case study</Link> page.</p>
                <p>The writing coursework is not a detour from the technical work. The hardest part of a small business site is deciding what each page says and what it asks you to do. I train for that part in the classroom and practice the build side on real projects.</p>
            </CaseSection>

            <CaseSection title="Why this site exists">
                <p>This site has one job. It takes you from your first visit to a booked call. Every page points there.</p>
                <p>I built it for the person who runs the business and everything else. You do not have an IT department. You do not have an afternoon to spend decoding an agency pitch. So each page answers two questions. Can I do the work you need, and what does it cost to find out? The case studies answer the first with numbers. The free call answers the second. You should leave with a clear idea of what I would build for you, and you should spend nothing to get it.</p>
            </CaseSection>

            <CaseSection title="How I write it">
                <p>I wrote every page on this site against three rules, and client sites get the same rules.</p>
                <p>Plain: the result comes before the technology. A chat assistant that answers customer questions at 2 a.m. matters to you. The model behind it does not, so it stays off the page.</p>
                <p>Proof-first: the evidence comes before the claim. Each case study opens with a figure, and I cut any sentence I cannot back up. You will not find the word seamless anywhere on this site.</p>
                <p>Inviting: the next step stays small. Each page ends at the same booking link. The call is free, and you decide what happens after it.</p>
            </CaseSection>

            <CaseSection title="How I built it">
                <p>I designed and built the site in Next.js and host it on Vercel. That choice is part of the pitch. If I ask you to trust me with your site, mine has to hold up first. Treat this page as a work sample. The load time and the words on this screen show what a build from me looks like.</p>
            </CaseSection>

            <CaseSection title="Where to go next">
                <p>If you want evidence first, read the <Link href="/work/syrex">Syrex case study</Link>. If you want the offer, the <Link href="/services">Services page</Link> lists both service lines and the four steps of a project. Every project runs on a one-page scope with a fixed price and a fixed date. If you want to see how I reason on paper, the <Link href="/writing">Writing page</Link> holds two course analyses of sites you may know.</p>
                <p>When you are ready, <Link href="/contact">book a call</Link>. Tell me about your business and what slows it down. I will tell you what I would build first. The call costs nothing and comes with no obligation.</p>
            </CaseSection>

            <CaseSection title="For recruiters">
                <p>
                    The <Link href="/work/syrex">Syrex case study</Link> is the fastest read on how I work. The <Link href="/writing">Writing page</Link> shows how I reason on paper. Email me at{" "}
                    <a href={`mailto:${site.email}`}>{site.email}</a> for a resume.
                </p>
            </CaseSection>
            <SiteCta />
        </main>
    );
}
