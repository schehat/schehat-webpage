import { imagesCommon } from "@/src/constant/Images";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

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
                I began my programming journey in 2016 learning the basics of Java in my free time. 
                Then gradually expanded my skill set by learning web development and Python to 
                experiment with AI. In 2020, I started studying for my Bachelor degree in Applied 
                Computer Science at university and dived deeper into the core concepts of 
                programming and software architecture through Java, C/C++, Unix and databases. 
                This enabled me to create software projects for assignments and personal projects. 
                At the moment I am pursuing my Master degree in Computer Science at the Leibniz 
                University Hannover with a focus in Data Science and Machine Learning.
              </p>
              <p className="py-2 text-gray-600">
                In my spare time, I enjoy calisthenics and staying fit, as well
                as playing video games, piano, watching anime and reading. Additionally, I have
                a keen interest in the fields of Machine Learning. Besides I try
                new technologies out and widen my horizon.
              </p>
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
