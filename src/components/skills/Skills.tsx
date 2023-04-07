import SkillsCard from "@/src/components/skills/SkillsCard";
import { skills } from "@/src/constant/Skills";
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
          <h3 className="py-4">Programming Languages</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillsCard
              src={skills.java.image}
              alt="/"
              title={skills.java.title}
            />
            <SkillsCard
              src={skills.cpp.image}
              alt="/"
              title={skills.cpp.title}
            />
            <SkillsCard
              src={skills.python.image}
              alt="/"
              title={skills.python.title}
            />
            <SkillsCard
              src={skills.sql.image}
              alt="/"
              title={skills.sql.title}
            />
            <SkillsCard
              src={skills.javascript.image}
              alt="/"
              title={skills.javascript.title}
            />
            <SkillsCard
              src={skills.typescript.image}
              alt="/"
              title={skills.typescript.title}
            />
          </div>
          <h3 className="py-4">Tools</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillsCard
              src={skills.git.image}
              alt="/"
              title={skills.git.title}
            />
            <SkillsCard
              src={skills.linux.image}
              alt="/"
              title={skills.linux.title}
            />
          </div>
          <h3 className="py-4">Databases</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillsCard
              src={skills.mysql.image}
              alt="/"
              title={skills.mysql.title}
            />
            <SkillsCard
              src={skills.mongodb.image}
              alt="/"
              title={skills.mongodb.title}
            />
          </div>
          <h3 className="py-4">Frontend Development</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillsCard
              src={skills.react.image}
              alt="/"
              title={skills.react.title}
            />
            <SkillsCard
              src={skills.nextjs.image}
              alt="/"
              title={skills.nextjs.title}
            />
            <SkillsCard
              src={skills.tailwind.image}
              alt="/"
              title={skills.tailwind.title}
            />
            <SkillsCard
              src={skills.firebase.image}
              alt="/"
              title={skills.firebase.title}
            />
          </div>
          <h3 className="py-4">Backend Development</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillsCard
              src={skills.nestjs.image}
              alt="/"
              title={skills.nestjs.title}
            />
            <SkillsCard
              src={skills.nodejs.image}
              alt="/"
              title={skills.nodejs.title}
            />
            <SkillsCard
              src={skills.jdbc.image}
              alt="/"
              title={skills.jdbc.title}
            />
            <SkillsCard
              src={skills.hibernate.image}
              alt="/"
              title={skills.hibernate.title}
            />
          </div>
          <h3 className="py-4">Data Science</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillsCard
              src={skills.numpy.image}
              alt="/"
              title={skills.numpy.title}
            />
            <SkillsCard
              src={skills.pandas.image}
              alt="/"
              title={skills.pandas.title}
            />
            <SkillsCard
              src={skills.matplotlib.image}
              alt="/"
              title={skills.matplotlib.title}
            />
            <SkillsCard
              src={skills.scikitLearn.image}
              alt="/"
              title={skills.scikitLearn.title}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
