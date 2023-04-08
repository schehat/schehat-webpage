import SkillsCard from "@/src/components/skills/SkillsCard";
import { skills } from "@/src/constant/Skills";

const SkillsFE = () => {
  return (
    <>
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
    </>
  );
};

export default SkillsFE;
