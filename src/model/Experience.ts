import { StaticImageData } from "next/image";

export type Experience = {
  title: string,
  companyName: string,
  icon: StaticImageData,
  iconBg: string,
  date: string,
  points: string[]
};