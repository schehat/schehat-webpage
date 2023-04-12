import { EducationProps } from "@/src/model/props/EducationProps";
import { useTheme } from "next-themes";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const EducationCard = ({ education }: EducationProps) => {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#fff" : "#888";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={education.icon}
            alt={education.institution}
            className="w-[80%] h-[80%] object-contain flex justify-center items-center"
          />
        </div>
      }
    >
      <div className="text-white">
        <h3 className="text-[24px] font-bold">{education.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.institution}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {education.points.map((point: string, index: number) => (
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
