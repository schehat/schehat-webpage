import { StaticImageData } from "next/image";

export type Education = {
  title: string,
  institution: string,
  icon: StaticImageData,
  iconBg: string,
  date: string,
  points: string[]
};