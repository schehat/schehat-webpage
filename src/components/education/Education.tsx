import { education } from "@/src/constant/Education";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../../hoc/SectionWrapper";
import { textVariant } from "../../utils/motion";
import { EducationCard } from "./EducationCard";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className="text-center uppercase text-xl tracking-widest text-[color:var(--text-mainGreen)]">
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
    </>
  );
};

export default SectionWrapper(Education, "education");
