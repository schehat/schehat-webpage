import CodeButton from "@/src/components/projects/project/CodeButton";
import ProjectDescription from "@/src/components/projects/project/ProjectDescription";
import ProjectHeader from "@/src/components/projects/project/ProjectHeader";
import TechnologyBar from "@/src/components/projects/project/TechnologyBar";
import { MovieDatabase } from "@/src/constant/Projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

const movie_database = () => {
  return (
    <div className="w-full">
      <ProjectHeader
        imgUrl={MovieDatabase.imgUrl}
        title={MovieDatabase.title}
        technologyMain={MovieDatabase.technologyMain}
      />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <ProjectDescription description={MovieDatabase.description} />
          <Link href={MovieDatabase.codeUrl} target="_blank" rel="noreferrer">
            <CodeButton />
          </Link>
        </div>
        <TechnologyBar technologies={MovieDatabase.technologyAll} />
        <Link href="/#projects">
          <FaArrowCircleLeft className="scale-[2] ml-2" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="rounded-xl object-contain h-[500px]"
          src={MovieDatabase.imgUrl}
          alt="/"
        />
      </div>
    </div>
  );
};

export default movie_database;
