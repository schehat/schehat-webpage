import SkillsBE from "@/src/components/skills/groups/SkillsBE";
import SkillsDataScience from "@/src/components/skills/groups/SkillsDataScience";
import SkillsFE from "@/src/components/skills/groups/SkillsFE";
import SkillsLanguages from "@/src/components/skills/groups/SkillsLanguages";
import SkillsToolsDatabases from "@/src/components/skills/groups/SkillsToolsDatabases";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <motion.div variants={textVariant(0)}>
          <p className="text-xl tracking-widest uppercase text-mainGreen  dark:text-mainGreen">
            Skills
          </p>
          <h2 className="py-4">What I Can Do</h2>
          <SkillsLanguages />
          <SkillsBE />
          <SkillsDataScience />
          <SkillsToolsDatabases />
          <SkillsFE />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
