import { ExperienceCard } from "@/src/components/experience/ExperienceCard";
import { experiences } from "@/src/constant/Experience";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div id="experience">
      <motion.div variants={textVariant(0)}>
        <p className="text-center uppercase text-xl tracking-widest text-mainGreen  dark:text-mainGreen">
          What I have done
        </p>
        <h2 className="py-4 text-center">Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience: any, index: number) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
