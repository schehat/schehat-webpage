import { imagesCommon } from "@/src/constant/Images";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex flex-col items-center py-16"
    >
      <motion.div variants={textVariant(0)}>
        <div className="max-w-[1240px] m-auto">
          <div className="text-center">
            <p className="uppercase text-xl tracking-widest text-mainGreen  dark:text-mainGreen">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
          </div>
          <div className="md:flex md:flex-row md:items-start md:justify-between md:py-16">
            <div className="w-full md:w-1/2 px-2">
              <p className="py-2 text-gray-600">
                I began my programming journey in 2016 learning the basics of
                Java. Then gradually expanded my skillset by learning Python and
                web development tools. In 2020, while studying at university, I
                delved deeper into the core concepts of programming and systems
                through Java, C/C++, Unix, and databases. This newfound
                knowledge enabled me to create software projects for assignments
                and personal projects, and continue to improve my skills.
              </p>
              <p className="py-2 text-gray-600">
                In my spare time, I enjoy calisthenics and staying fit, as well
                as playing video games and watching anime. Additionally, I have
                a keen interest in the fields of machine learning and chess.
                Besides I try new technologies and projects out like this
                webpage.
              </p>
              <Link href="/#projects" scroll={false}>
                <p className="py-2 text-gray-600 underline cursor-pointer">
                  Check out some of my latest projects
                </p>
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-[450px] flex flex-col items-center justify-center shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
              <div className="h-full w-full">
                <Image
                  src={imagesCommon.profile}
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
