import CodeButton from "@/src/components/projects/project/CodeButton";
import ProjectDescription from "@/src/components/projects/project/ProjectDescription";
import ProjectHeader from "@/src/components/projects/project/ProjectHeader";
import TechnologyBar from "@/src/components/projects/project/TechnologyBar";
import { DecisionTree } from "@/src/constant/Projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

const decision_tree = () => {
  return (
    <div className="w-full">
      <ProjectHeader
        imgUrl={DecisionTree.imgUrl}
        title={DecisionTree.title}
        technologyMain={DecisionTree.technologyMain}
      />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <ProjectDescription description={DecisionTree.description} />
          <Link href={DecisionTree.codeUrl} target="_blank" rel="noreferrer">
            <CodeButton />
          </Link>
        </div>
        <TechnologyBar technologies={DecisionTree.technologyAll} />
        <Link href="/#projects">
          <FaArrowCircleLeft className="scale-[2] ml-2" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="rounded-xl object-contain h-[500px]"
          src={DecisionTree.imgUrl}
          alt="/"
        />
      </div>
    </div>
  );
};

export default decision_tree;
