import { ProjectsCardProps } from "@/src/model/props/ProjectsCardProps";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = ({ title, img, tech, projectUrl }: ProjectsCardProps) => {
  return (
    <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 dark:shadow-none rounded-xl group hover:bg-gradient-to-r from-[color:var(--text-mainGreen)] to-[color:var(--text-secondGreen)]">
      <Image
        className="rounded-xl group-hover:opacity-10 h-80 object-fill"
        src={img}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 dark:text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
