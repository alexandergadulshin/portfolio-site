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
                                    My name is {site.name}. I study computer science at UC Santa Barbara and build websites and AI tools for small businesses.
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
                <p>I began building websites for friends&apos; side businesses in high school. Each project taught me the same lesson, the code does not matter as much as the words on the page and a site works when a stranger lands there and performs one action.</p>
                <p>I kept building at UC Santa Barbara. In my second year I joined Syrex Consulting through a referral and created a UGC video generator there. Over 6 months 12 client businesses created video ads with the generator for TikTok Shop and Instagram and these ads generated $284,000 in gross merchandise value. Ever since I have been handling client projects as a separate business. The full story is in the <Link href="/work/syrex">Syrex case study</Link>.</p>
                <p>The writing coursework feeds the technical work. The most difficult thing about a small business site is figuring out what each page is supposed to say and what action it asks of the visitor. I learn this craft in the classroom and practice building on actual projects.</p>
            </CaseSection>

            <CaseSection title="Why this site exists">
                <p>The site has only one purpose, to take you from the first visit to a booked call and each page points to it.</p>
                <p>I have built it for the owner of the business and everything else. You do not have an IT department and an agency offer requires an afternoon you do not have. Each page answers two questions, can I do the work you need and what will it cost to find out? The case studies answer the first with figures and the free call answers the second. You should leave with an understanding of what I&apos;d build for you and it should cost you nothing to get it.</p>
            </CaseSection>

            <CaseSection title="How I write it">
                <p>I wrote each page on this site based on three rules and client sites follow the same ones.</p>
                <p>Plain. The result comes first, the technology goes after. The chat assistant that answers customer questions at 2 a.m. matters to you while the model behind it does not.</p>
                <p>Proof-first. The evidence goes before the claim. Each case study starts with a figure and I remove any sentence I am unable to back up. There is not a single &apos;seamless&apos; on this site.</p>
                <p>Inviting. The next step remains small. Each page leads to the same booking link and the call is free.</p>
            </CaseSection>

            <CaseSection title="How I built it">
                <p>I designed and built the site in Next.js and host it on Vercel. This choice forms part of the pitch, when I ask you to trust me with your site mine has to stand up first. Consider this page a work sample, the loading speed and the text on the screen is what a build of mine will look like.</p>
            </CaseSection>

            <CaseSection title="Where to go next">
                <p>If you seek evidence, start with the <Link href="/work/syrex">Syrex case study</Link>. If you care more about the offer, then the <Link href="/services">Services page</Link> has both of my service lines and the project process with four steps. A project runs through a one-page scope with a fixed price and a fixed date, so you know the cost and the finish before we begin. The <Link href="/writing">Writing page</Link> offers the course analysis of a site you may know.</p>
                <p><a href={bookingHref} target="_blank" rel="noopener noreferrer">Book a call</a> and tell me about your business and what holds it back.</p>
            </CaseSection>

            <CaseSection title="For recruiters">
                <p>The <Link href="/work/syrex">Syrex case study</Link> tells the fastest story of how I work and the <Link href="/writing">Writing page</Link> shows how I reason. Email me at <a href={`mailto:${site.email}`}>{site.email}</a> for a resume.</p>
            </CaseSection>
            <SiteCta />
        </main>
    );
}
