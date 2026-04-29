import CodeButton from "@/src/components/projects/project/CodeButton";
import ProjectDescription from "@/src/components/projects/project/ProjectDescription";
import ProjectHeader from "@/src/components/projects/project/ProjectHeader";
import TechnologyBar from "@/src/components/projects/project/TechnologyBar";
import { EmotionClassificationBERT } from "@/src/constant/Projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

const emotion_classification_bert = () => {
  return (
    <div className="w-full">
      <ProjectHeader
        imgUrl={EmotionClassificationBERT.imgUrl}
        title={EmotionClassificationBERT.title}
        technologyMain={EmotionClassificationBERT.technologyMain}
      />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <ProjectDescription
            description={EmotionClassificationBERT.description}
          />
          <Link
            href={EmotionClassificationBERT.codeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <CodeButton />
          </Link>
        </div>
        <TechnologyBar technologies={EmotionClassificationBERT.technologyAll} />
        <Link href="/#projects">
          <FaArrowCircleLeft className="scale-[2] ml-2" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="rounded-xl object-contain h-[500px]"
          src={EmotionClassificationBERT.imgUrl}
          alt="/"
        />
      </div>
    </div>
  );
};

export default emotion_classification_bert;
