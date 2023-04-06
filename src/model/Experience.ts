import { StaticImageData } from "next/image";

export type ExperienceDTO = {
    title: string,
    company_name: string,
    icon: StaticImageData,
    iconBg: string,
    date: string,
    points: string[]
};
