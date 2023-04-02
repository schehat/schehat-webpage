import propertyImg from "@/src/assets/projects/property.jpg";
import CodeButton from "@/src/components/projects/project/CodeButton";
import ProjectDescription from "@/src/components/projects/project/ProjectDescription";
import ProjectHeader from "@/src/components/projects/project/ProjectHeader";
import TechnologyBar from "@/src/components/projects/project/TechnologyBar";
import Property from "@/src/const/projects/property";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

const property = () => {
  return (
    <div className="w-full">
      <ProjectHeader
        imgUrl={Property.imgUrl}
        title={Property.title}
        technologyMain={Property.technologyMain}
      />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <ProjectDescription description={Property.description} />
          <Link href={Property.codeUrl} target="_blank" rel="noreferrer">
            <CodeButton />
          </Link>
        </div>
        <TechnologyBar technologies={Property.technologyAll} />
        <Link href="/#projects">
          <FaArrowCircleLeft className="scale-[2]" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image className="rounded-xl max-w-4xl" src={propertyImg} alt="/" />
      </div>
    </div>
  );
};

export default property;
