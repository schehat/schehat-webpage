import SkillsCard from "@/src/components/skills/SkillsCard";
import { skills } from "@/src/constant/Skills";

const SkillsBE = () => {
  return (
    <>
      <h3 className="py-4">Backend Development</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillsCard
          src={skills.nestjs.image}
          alt="/"
          title={skills.nestjs.title}
        />
        <SkillsCard
          src={skills.express.image}
          alt="/"
          title={skills.express.title}
        />
        <SkillsCard src={skills.jdbc.image} alt="/" title={skills.jdbc.title} />
        <SkillsCard
          src={skills.hibernate.image}
          alt="/"
          title={skills.hibernate.title}
        />
      </div>
    </>
  );
};

export default SkillsBE;
