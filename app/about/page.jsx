import Link from "next/link";
import { site } from "../../lib/site";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p className="lede">
        I&rsquo;m {site.name}. I study writing at UC Santa Barbara and build
        websites and AI tools for small businesses.
      </p>
      <div className="todo">
        [Two or three sentences on your background: how you started building,
        your work at Syrex Consulting, and what you want to build next.]
      </div>
      <p>
        The writing coursework is not a detour from the technical work. The
        hardest part of a small business site is deciding what each page says
        and what it asks the visitor to do. I train for that part in the
        classroom and practice the build side on real projects.
      </p>
      <h2>For recruiters and hiring managers</h2>
      <p>
        The <Link href="/work/syrex">Syrex case study</Link> is the fastest
        read on how I work. Email me at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> for a resume.
      </p>
    </>
  );
}
