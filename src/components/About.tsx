import AboutContent from "@/src/const/About";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex flex-col items-center py-16"
    >
      <motion.div variants={textVariant(0)}>
        <div className="max-w-[1240px] m-auto">
          <div className="text-center">
            <p className="uppercase text-xl tracking-widest text-[color:var(--text-mainGreen)]">
              About
            </p>
            <h2 className="py-4">{AboutContent.introduction}</h2>
          </div>
          <div className="md:flex md:flex-row md:items-start md:justify-between md:py-16">
            <div className="w-full md:w-1/2 px-2">
              <p className="py-2 text-gray-600">
                {AboutContent.firstParagraph}
              </p>
              <p className="py-2 text-gray-600">
                {AboutContent.secondParagraph}
              </p>
              <Link href="/#projects">
                <p className="py-2 text-gray-600 underline cursor-pointer">
                  {AboutContent.reference}
                </p>
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-[450px] flex flex-col items-center justify-center shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
              <div className="h-full w-full">
                <Image
                  src={AboutContent.image}
                  className="object-contain h-full rounded-xl"
                  alt="/"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
