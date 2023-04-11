import { EducationCard } from "@/src/components/education/EducationCard";
import { education } from "@/src/constant/Education";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div id="education">
      <motion.div variants={textVariant(0)}>
        <p className="text-center uppercase text-xl tracking-widest text-mainGreen  dark:text-mainGreen">
          What I have studied
        </p>
        <h2 className="py-4 text-center">Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education: any, index: number) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
