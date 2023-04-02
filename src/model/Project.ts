import { StaticImageData } from "next/image";

export type Project = {
  imgUrl: StaticImageData;
  title: string;
  technologyMain: string;
  description: string;
  codeUrl: string;
  demoUrl?: string;
  technologyAll: string[];
};
