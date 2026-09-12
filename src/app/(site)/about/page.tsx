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
                                    My name is {site.name} and I study computer science at UC Santa Barbara and I build websites and AI tools for small businesses.
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
                <p>I started building websites for friends side businesses back in high school and each build taught me the same lesson which is the code matters less then the words on the page and a site works when a stranger can land on it and do the one thing without any help.</p>
                <p>I kept building at UC Santa Barbara and in my second year I got into Syrex Consulting through a referral and built a UGC video generator there and over 6 months 12 client businesses made video ads with it for TikTok Shop and Instagram and those ads drove $284,000 in gross merchandise value and since then I&apos;ve been doing client work as a business of its own and the full story is in the <Link href="/work/syrex">Syrex case study</Link>.</p>
                <p>The writing coursework feeds the technical work and the hardest part of a small business site is working out what each page is supposed to say and what its asking the visitor to do and I learn that part in the classroom and practice the building on real projects.</p>
            </CaseSection>

            <CaseSection title="Why this site exists">
                <p>This site has one job which is to take you from your first visit to a booked call and each page points there.</p>
                <p>I built it for the person who runs the business and everything else and you dont have an IT department and an agency pitch wants an afternoon you dont have so each page answers two questions which are can I do the work you need and what does it cost to find out and the case studies answer the first one with numbers and the free call answers the second and you should walk away knowing what I&apos;d build for you and it should cost you nothing to find out.</p>
            </CaseSection>

            <CaseSection title="How I write it">
                <p>I wrote each page on this site around three rules and client sites get the same ones.</p>
                <p>Plain. The result comes first and the technology after and the chat assistant that answers customer questions at 2 a.m. is what matters to you and the model behind it doesnt so it stays off the page.</p>
                <p>Proof-first. The evidence comes before the claim and each case study starts with a figure and I cut any sentence I cant back up and you wont find the word seamless anywhere on this site.</p>
                <p>Inviting. The next step stays small and each page ends at the same booking link and the call is free and you decide what happens after.</p>
            </CaseSection>

            <CaseSection title="How I built it">
                <p>I designed and built the site in Next.js and I host it on Vercel and that choice is part of the pitch and if I&apos;m asking you to trust me with your site then mine has to hold up first so treat this page as a work sample because the load time and the words on this screen is what a build from me looks like.</p>
            </CaseSection>

            <CaseSection title="Where to go next">
                <p>If you want evidence start with the <Link href="/work/syrex">Syrex case study</Link> and if you care more about the offer the <Link href="/services">Services page</Link> has both service lines and the four steps of a project and a project runs on a one page scope with a fixed price and a fixed date so you know the cost and the finish before we start and the <Link href="/writing">Writing page</Link> has a course analysis of a site you might know.</p>
                <p><a href={bookingHref} target="_blank" rel="noopener noreferrer">Book a call</a> and tell me about your business and what holds it back.</p>
            </CaseSection>

            <CaseSection title="For recruiters">
                <p>The <Link href="/work/syrex">Syrex case study</Link> is the fastest read on how I work and the <Link href="/writing">Writing page</Link> shows how I reason on paper so email me at <a href={`mailto:${site.email}`}>{site.email}</a> for a resume.</p>
            </CaseSection>
            <SiteCta />
        </main>
    );
}
