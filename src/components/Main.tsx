import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";
import SocialButtons from "./SocialButtons";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="=max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <motion.div variants={textVariant(0)}>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&apos;S DO SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am{" "}
            <span className="text-mainGreen  dark:text-mainGreen">Schehat</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Computer Science Student</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am passionate about learning and technologies that allow me to
            bring ideas to reality
          </p>
          <SocialButtons />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Main, "main");
