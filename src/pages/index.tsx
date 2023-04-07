import About from "@/src/components/About";
import Main from "@/src/components/Main";
import Projects from "@/src/components/projects/Projects";
import Skills from "@/src/components/skills/Skills";
import Head from "next/head";
import Experience from "../components/experience/Experience";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Schehat Abdel Kader</title>
        <meta name="description" content="webpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
