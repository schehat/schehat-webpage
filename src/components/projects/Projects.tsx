import ProjectsCard from "@/src/components/projects/ProjectsCard";
import {
  ANPR,
  ChessScene,
  DecisionTree,
  FlappyBird,
  ImageManipulation,
  MovieDatabase,
  SudokuWithSolver,
  TheWorldHardestGame
} from "@/src/constant/Projects";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <motion.div variants={textVariant(0)}>
          <p className="text-xl tracking-widest uppercase text-mainGreen  dark:text-mainGreen">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectsCard
              title={ANPR.title}
              img={ANPR.imgUrl}
              projectUrl="/projects/anpr"
              tech={ANPR.technologyMain}
            />
            <ProjectsCard
              title={ChessScene.title}
              img={ChessScene.imgUrl}
              projectUrl="/projects/chess-scene"
              tech={ChessScene.technologyMain}
            />
            <ProjectsCard
              title={FlappyBird.title}
              img={FlappyBird.imgUrl}
              projectUrl="/projects/flappy-bird"
              tech={FlappyBird.technologyMain}
            />
            <ProjectsCard
              title={ImageManipulation.title}
              img={ImageManipulation.imgUrl}
              projectUrl="/projects/image-manipulation"
              tech={ImageManipulation.technologyMain}
            />
            <ProjectsCard
              title={DecisionTree.title}
              img={DecisionTree.imgUrl}
              projectUrl="/projects/decision-tree"
              tech={DecisionTree.technologyMain}
            />
            <ProjectsCard
              title={MovieDatabase.title}
              img={MovieDatabase.imgUrl}
              projectUrl="/projects/movie-database"
              tech={MovieDatabase.technologyMain}
            />
            <ProjectsCard
              title={SudokuWithSolver.title}
              img={SudokuWithSolver.imgUrl}
              projectUrl="/projects/sudoku-with-solver"
              tech={SudokuWithSolver.technologyMain}
            />
            <ProjectsCard
              title={TheWorldHardestGame.title}
              img={TheWorldHardestGame.imgUrl}
              projectUrl="/projects/the-world-hardest-game"
              tech={TheWorldHardestGame.technologyMain}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
