import About from "@/src/components/About";
import Main from "@/src/components/Main";
import Projects from "@/src/components/projects/Projects";
import Skills from "@/src/components/skills/Skills";
import AboutContent from "@/src/const/About";
import Head from "next/head";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>{AboutContent.name}</title>
        <meta name="description" content="webpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
