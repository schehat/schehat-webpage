import { ExperienceProps } from "@/src/model/props/ExperienceProps";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const ExperienceCard = ({ experience }: ExperienceProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.companyName}
            className="w-[80%] h-[80%] object-contain flex justify-center items-center"
          />
        </div>
      }
    >
      <div className="text-white">
        <h3 className="text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, index: number) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
