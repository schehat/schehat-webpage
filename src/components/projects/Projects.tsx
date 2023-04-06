import cryptoImg from "@/src/assets/projects/crypto.jpg";
import netflixImg from "@/src/assets/projects/netflix.jpg";
import propertyImg from "@/src/assets/projects/property.jpg";
import twitchImg from "@/src/assets/projects/twitch.jpg";
import ProjectsCard from "@/src/components/projects/ProjectsCard";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <motion.div variants={textVariant(0)}>
          <p className="text-xl tracking-widest uppercase text-[color:var(--text-mainGreen)]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectsCard
              title="Property Finder"
              img={propertyImg}
              projectUrl="/projects/property"
              tech="React JS"
            />
            <ProjectsCard
              title="Crypto App"
              img={cryptoImg}
              projectUrl="/crypto"
              tech="React JS"
            />
            <ProjectsCard
              title="Netflix App"
              img={netflixImg}
              projectUrl="/netflix"
              tech="React JS"
            />
            <ProjectsCard
              title="Twitch UI"
              img={twitchImg}
              projectUrl="/twitch"
              tech="Next JS"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
