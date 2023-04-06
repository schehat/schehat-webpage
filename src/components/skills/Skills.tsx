import SkillsCard from "@/src/components/skills/SkillsCard";
import SkillsContent from "@/src/const/Skills";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <motion.div variants={textVariant(0)}>
          <p className="text-xl tracking-widest uppercase text-[color:var(--text-mainGreen)]">
            Skills
          </p>
          <h2 className="py-4">What I Can Do</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillsCard
              src={SkillsContent.html.image}
              alt="/"
              title={SkillsContent.html.title}
            />
            <SkillsCard
              src={SkillsContent.css.image}
              alt="/"
              title={SkillsContent.css.title}
            />
            <SkillsCard
              src={SkillsContent.javascript.image}
              alt="/"
              title={SkillsContent.javascript.title}
            />
            <SkillsCard
              src={SkillsContent.react.image}
              alt="/"
              title={SkillsContent.react.title}
            />
            <SkillsCard
              src={SkillsContent.tailwind.image}
              alt="/"
              title={SkillsContent.tailwind.title}
            />
            <SkillsCard
              src={SkillsContent.firebase.image}
              alt="/"
              title={SkillsContent.firebase.title}
            />
            <SkillsCard
              src={SkillsContent.github.image}
              alt="/"
              title={SkillsContent.github.title}
            />
            <SkillsCard
              src={SkillsContent.nextjs.image}
              alt="/"
              title={SkillsContent.nextjs.title}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
