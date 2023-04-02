import About from "@/src/components/About";
import Main from "@/src/components/Main";
import Projects from "@/src/components/projects/Projects";
import Skills from "@/src/components/skills/Skills";
import { Inter } from "next/font/google";
import Head from "next/head";
import Contact from "../components/contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Schehat Abdel Kader</title>
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
