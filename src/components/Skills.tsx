import Css from "../assets/skills/css.png";
import Firebase from "../assets/skills/firebase.png";
import Github from "../assets/skills/github1.png";
import Html from "../assets/skills/html.png";
import Javascript from "../assets/skills/javascript.png";
import NextJS from "../assets/skills/nextjs.png";
import ReactImg from "../assets/skills/react.png";
import Tailwind from "../assets/skills/tailwind.png";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#66bd80]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem src={Html} alt="/" title="HTML" />
          <SkillItem src={Css} alt="/" title="CSS" />
          <SkillItem src={Javascript} alt="/" title="JavaScript" />
          <SkillItem src={ReactImg} alt="/" title="React" />
          <SkillItem src={Tailwind} alt="/" title="Tailwind" />
          <SkillItem src={Firebase} alt="/" title="Firebase" />
          <SkillItem src={Github} alt="/" title="Github" />
          <SkillItem src={NextJS} alt="/" title="Next" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
