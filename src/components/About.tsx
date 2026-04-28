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
                Computer Science student specializing in Data Science with a 1.0
                GPA and professional experience in software development.
                Experienced in building data pipelines, analyzing datasets and
                applying machine learning in Python and developing scalable
                backend systems in Java. Interested in leveraging data,
                automation and AI techniques to improve business processes and
                support data-driven solutions.
              </p>
              <p className="py-2 text-gray-600">
                Outside of my studies, I am someone who is always looking to
                grow. Whether that is physically, intellectually or through new
                experiences. I stay active through calisthenics and cycling and
                I have a genuine love for being out in nature. Travelling is
                something I am passionate about too. My exchange semester at the
                Institute of Science Tokyo was one of my most valuable
                experiences of my life. For quieter moments, I enjoy reading
                manga and playing video games.
              </p>
              <p className="py-2 text-gray-600">
                On a personal level, I tend to be proactive and communicative. I
                have always gravitated toward roles where I can take initiative
                and have impact. Whether as a class representative, a student
                council member or a tutor supporting international students. I
                care about doing work that has real impact, which is a big part
                of why I am drawn to data and the way it can drive meaningful
                decisions.
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
