import Css from "@/src/assets/skills/css.png";
import Firebase from "@/src/assets/skills/firebase.png";
import Github from "@/src/assets/skills/github1.png";
import Html from "@/src/assets/skills/html.png";
import Javascript from "@/src/assets/skills/javascript.png";
import NextJS from "@/src/assets/skills/nextjs.png";
import ReactImg from "@/src/assets/skills/react.png";
import Tailwind from "@/src/assets/skills/tailwind.png";
import SkillsItem from "@/src/components/SkillsItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[color:var(--text-mainGreen)]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem src={Html} alt="/" title="HTML" />
          <SkillsItem src={Css} alt="/" title="CSS" />
          <SkillsItem src={Javascript} alt="/" title="JavaScript" />
          <SkillsItem src={ReactImg} alt="/" title="React" />
          <SkillsItem src={Tailwind} alt="/" title="Tailwind" />
          <SkillsItem src={Firebase} alt="/" title="Firebase" />
          <SkillsItem src={Github} alt="/" title="Github" />
          <SkillsItem src={NextJS} alt="/" title="Next" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
