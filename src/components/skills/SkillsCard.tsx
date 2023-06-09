import { SkillsCardProps } from "@/src/model/props/SkillsCardProps";
import Image from "next/image";
const SkillsCard = ({ src, alt, title }: SkillsCardProps) => {
  return (
    <div className="dark:bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={src} width="56" height="56" alt={alt} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="dark:text-black">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
