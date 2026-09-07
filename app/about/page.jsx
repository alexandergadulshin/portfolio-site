import Link from "next/link";
import { site } from "../../lib/site";

export const metadata = { title: "About" };

export default function About() {
  return (
    <section id="main" className="container medium">
      <header>
        <h2>About</h2>
        <p>
          I&rsquo;m {site.name}. I study writing at UC Santa Barbara and build
          websites and AI tools for small businesses.
        </p>
      </header>

      <div className="box">
        <div className="todo">
          [Two or three sentences on your background. Say how you started
          building and where the Syrex work fits.]
        </div>
        <p>
          The writing coursework is not a detour from the technical work. The
          hardest part of a small business site is deciding what each page
          says and what it asks the visitor to do. I train for that part in
          the classroom and practice the build side on real projects.
        </p>
      </div>

      <div className="box special">
        <span className="icon solid major fa-file-alt accent4"></span>
        <h3>For recruiters and hiring managers</h3>
        <p>
          The <Link href="/work/syrex">Syrex case study</Link> is the fastest
          read on how I work. Email me at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> for a resume.
        </p>
      </div>
    </section>
  );
}
