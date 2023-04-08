import CodeButton from "@/src/components/projects/project/CodeButton";
import ProjectDescription from "@/src/components/projects/project/ProjectDescription";
import ProjectHeader from "@/src/components/projects/project/ProjectHeader";
import TechnologyBar from "@/src/components/projects/project/TechnologyBar";
import { SudokuWithSolver } from "@/src/constant/Projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

const sudoku_with_solver = () => {
  return (
    <div className="w-full">
      <ProjectHeader
        imgUrl={SudokuWithSolver.imgUrl}
        title={SudokuWithSolver.title}
        technologyMain={SudokuWithSolver.technologyMain}
      />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <ProjectDescription description={SudokuWithSolver.description} />
          <Link
            href={SudokuWithSolver.codeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <CodeButton />
          </Link>
        </div>
        <TechnologyBar technologies={SudokuWithSolver.technologyAll} />
        <Link href="/#projects">
          <FaArrowCircleLeft className="scale-[2]" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="rounded-xl max-w-4xl"
          src={SudokuWithSolver.imgUrl}
          alt="/"
        />
      </div>
    </div>
  );
};

export default sudoku_with_solver;
