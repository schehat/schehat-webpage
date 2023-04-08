import SkillsCard from "@/src/components/skills/SkillsCard";
import { skills } from "@/src/constant/Skills";

const SkillsToolsDatabases = () => {
  return (
    <>
      <h3 className="py-4">Tools & Databases</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillsCard src={skills.git.image} alt="/" title={skills.git.title} />
        <SkillsCard
          src={skills.linux.image}
          alt="/"
          title={skills.linux.title}
        />
        <SkillsCard src={skills.sql.image} alt="/" title={skills.sql.title} />
        <SkillsCard
          src={skills.mongodb.image}
          alt="/"
          title={skills.mongodb.title}
        />
      </div>
    </>
  );
};

export default SkillsToolsDatabases;
