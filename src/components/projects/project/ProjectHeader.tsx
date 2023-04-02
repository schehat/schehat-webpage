import { ProjectHeader } from "@/src/model/ProjectHeader";
import Image from "next/image";

const ProjectHeader = ({ imgUrl, title, technologyMain }: ProjectHeader) => {
  return (
    <div className="w-screen h-[20vh] relative">
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-black/70 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={imgUrl}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">{title}</h2>
        <h3>{technologyMain}</h3>
      </div>
    </div>
  );
};

export default ProjectHeader;
