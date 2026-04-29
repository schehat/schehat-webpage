import ProjectsCard from "@/src/components/projects/ProjectsCard";
import {
  AIInEducation,
  ANPR,
  ChessScene,
  CNNImageSegmentation,
  EmotionClassificationBERT,
  FlappyBird,
  GeneticAlgorithmAFVRP,
  SeqToSeqModel,
  SingleCellEDA,
  TheWorldHardestGame,
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
              title={EmotionClassificationBERT.title}
              img={EmotionClassificationBERT.imgUrl}
              projectUrl="/projects/emotion-classification-bert"
              tech={EmotionClassificationBERT.technologyMain}
            />
            <ProjectsCard
              title={SeqToSeqModel.title}
              img={SeqToSeqModel.imgUrl}
              projectUrl="/projects/seq-to-seq-model"
              tech={SeqToSeqModel.technologyMain}
            />
            <ProjectsCard
              title={CNNImageSegmentation.title}
              img={CNNImageSegmentation.imgUrl}
              projectUrl="/projects/cnn-image-segmentation"
              tech={CNNImageSegmentation.technologyMain}
            />
            <ProjectsCard
              title={AIInEducation.title}
              img={AIInEducation.imgUrl}
              projectUrl="/projects/ai-in-education"
              tech={AIInEducation.technologyMain}
            />
            <ProjectsCard
              title={SingleCellEDA.title}
              img={SingleCellEDA.imgUrl}
              projectUrl="/projects/single-cell-eda"
              tech={SingleCellEDA.technologyMain}
            />
            <ProjectsCard
              title={GeneticAlgorithmAFVRP.title}
              img={GeneticAlgorithmAFVRP.imgUrl}
              projectUrl="/projects/genetic-algorithm-afvrp"
              tech={GeneticAlgorithmAFVRP.technologyMain}
            />
            <ProjectsCard
              title={ANPR.title}
              img={ANPR.imgUrl}
              projectUrl="/projects/anpr"
              tech={ANPR.technologyMain}
            />
            <ProjectsCard
              title={FlappyBird.title}
              img={FlappyBird.imgUrl}
              projectUrl="/projects/flappy-bird"
              tech={FlappyBird.technologyMain}
            />
            <ProjectsCard
              title={ChessScene.title}
              img={ChessScene.imgUrl}
              projectUrl="/projects/chess-scene"
              tech={ChessScene.technologyMain}
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
