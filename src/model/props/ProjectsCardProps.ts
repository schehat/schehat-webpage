import { StaticImageData } from "next/image";

export interface ProjectsCardProps {
  title: string;
  img: StaticImageData; 
  tech: string;
  projectUrl: string;
}
  