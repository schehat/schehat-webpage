import SkillsCard from "@/src/components/skills/SkillsCard";
import { skills } from "@/src/constant/Skills";

const SkillsLanguages = () => {
  return (
    <>
      <h3 className="py-4">Programming Languages</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillsCard src={skills.java.image} alt="/" title={skills.java.title} />
        <SkillsCard src={skills.cpp.image} alt="/" title={skills.cpp.title} />
        <SkillsCard
          src={skills.python.image}
          alt="/"
          title={skills.python.title}
        />
        <SkillsCard
          src={skills.javascript.image}
          alt="/"
          title={skills.javascript.title}
        />
      </div>
    </>
  );
};

export default SkillsLanguages;
