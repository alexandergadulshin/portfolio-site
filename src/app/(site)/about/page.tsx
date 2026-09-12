import { ArrowIconSix } from "@/svg/ArrowIcons";
import BookCallButton, { bookingHref } from "@/components/site/BookCallButton";
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
                                    <BookCallButton />
                                    <CtaButton href="/work/syrex" label="Read the Syrex case study" className="tp-btn tp-btn-grey" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseSection title="How I got here">
                <p>I started building websites for friends&apos; side businesses in high school. Each build taught me the same lesson: the code mattered less than the words on the page, and a site succeeds when a stranger can land on it and act without help.</p>
                <p>I kept building at UC Santa Barbara. In my second year, Syrex Consulting took me on through a referral, and I built a UGC video generator there. Over 6 months, 12 client businesses made video ads with it for TikTok Shop and Instagram. Those ads drove $284,000 in gross merchandise value. I have run it as a business since. The full story is on the <Link href="/work/syrex">Syrex case study</Link> page.</p>
                <p>The writing coursework feeds the technical work. The hardest part of a small business site is deciding what each page says and what it asks you to do. I train for that part in the classroom and practice the build side on real projects.</p>
            </CaseSection>

            <CaseSection title="Why this site exists">
                <p>This site has one job. It takes you from your first visit to a booked call, and each page points there.</p>
                <p>I built it for the person who runs the business and everything else. You have no IT department, and an agency pitch asks for an afternoon you do not have. Each page answers two questions: can I do the work you need, and what does it cost to find out? The case studies answer the first with numbers, and the free call answers the second. You should leave with a clear idea of what I would build for you, and it should cost you nothing to get it.</p>
            </CaseSection>

            <CaseSection title="How I write it">
                <p>I wrote every page on this site against three rules, and client sites get the same rules.</p>
                <p>Plain: the result comes before the technology. A chat assistant that answers customer questions at 2 a.m. matters to you. The model behind it does not, so it stays off the page.</p>
                <p>Proof-first: the evidence comes before the claim. Each case study opens with a figure, and I cut any sentence I cannot back up. You will not find the word seamless anywhere on this site.</p>
                <p>Inviting: the next step stays small. Each page ends at the same booking link. The call is free, and you decide what happens after it.</p>
            </CaseSection>

            <CaseSection title="How I built it">
                <p>I designed and built the site in Next.js and host it on Vercel, and that choice is part of the pitch. If I ask you to trust me with your site, mine has to hold up first. Treat this page as a work sample: the load time and the words on this screen are what a build from me looks like.</p>
            </CaseSection>

            <CaseSection title="Where to go next">
                <p>Start with the <Link href="/work/syrex">Syrex case study</Link> if you want evidence of results. If the offer matters more, the <Link href="/services">Services page</Link> lists both service lines and the four steps of a project. A project runs on a one-page scope with a fixed price and a fixed date, so you know the cost and the finish before we start. The <Link href="/writing">Writing page</Link> holds a course analysis of a site you may know.</p>
                <p><a href={bookingHref} target="_blank" rel="noopener noreferrer">Book a call</a> when you are ready. Tell me about your business and what slows it down.</p>
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
