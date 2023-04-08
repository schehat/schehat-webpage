import SkillsCard from "@/src/components/skills/SkillsCard";
import { skills } from "@/src/constant/Skills";

const SkillsDataScience = () => {
  return (
    <>
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
    </>
  );
};

export default SkillsDataScience;
