import CodeButton from "@/src/components/projects/project/CodeButton";
import ProjectDescription from "@/src/components/projects/project/ProjectDescription";
import ProjectHeader from "@/src/components/projects/project/ProjectHeader";
import TechnologyBar from "@/src/components/projects/project/TechnologyBar";
import { GeneticAlgorithmAFVRP } from "@/src/constant/Projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

const genetic_algorithm_afvrp = () => {
  return (
    <div className="w-full">
      <ProjectHeader
        imgUrl={GeneticAlgorithmAFVRP.imgUrl}
        title={GeneticAlgorithmAFVRP.title}
        technologyMain={GeneticAlgorithmAFVRP.technologyMain}
      />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <ProjectDescription description={GeneticAlgorithmAFVRP.description} />
          <Link
            href={GeneticAlgorithmAFVRP.codeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <CodeButton />
          </Link>
        </div>
        <TechnologyBar technologies={GeneticAlgorithmAFVRP.technologyAll} />
        <Link href="/#projects">
          <FaArrowCircleLeft className="scale-[2] ml-2" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="rounded-xl object-contain h-[500px]"
          src={GeneticAlgorithmAFVRP.imgUrl}
          alt="/"
        />
      </div>
    </div>
  );
};

export default genetic_algorithm_afvrp;
