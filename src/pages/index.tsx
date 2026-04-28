import About from "@/src/components/About";
import Main from "@/src/components/Main";
import Education from "@/src/components/education/Education";
import Experience from "@/src/components/experience/Experience";
import Projects from "@/src/components/projects/Projects";
import Skills from "@/src/components/skills/Skills";
import Head from "next/head";
import Contact from "../components/contact/Contact";

export default function Home() {
  const siteUrl = "https://schehat-webpage.vercel.app";
  const title = "Schehat";
  const description =
    "Schehat Abdel Kader is a computer science student specializing in data science, software development, and machine learning. Explore projects, experience, skills, and contact details.";
  const canonicalUrl = siteUrl;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Schehat Abdel Kader, Schehat, portfolio, computer science, data science, software developer, machine learning, Next.js, Python, Java"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <meta name="author" content="Schehat Abdel Kader" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Schehat Abdel Kader" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/favicon.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/favicon.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Schehat Abdel Kader",
              url: canonicalUrl,
              image: `${siteUrl}/favicon.png`,
              jobTitle: "Computer Science Student",
              description,
              sameAs: [
                "https://github.com/schehat",
                "https://www.linkedin.com/in/schehat-abdel-kader/",
              ],
            }),
          }}
        />
      </Head>
      <Main />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
