import { Experience } from "@/src//model/Experience";
import fi from "@/src/assets/experience/fi.png";
import hsh from "@/src/assets/experience/hsh.png";

export const experiences : Experience[] = [
  {
    title: "Software Developer",
    companyName: "Finanz Informatik",
    icon: fi,
    iconBg: "#FFFFFF",
    date: "March 2023 - Present",
    points: [
      "Programming in Java",
      "Spring Batch",
      "JUnit tests",
    ]
  },
  {
    title: "Tutor C/C++",
    companyName: "Hochschule Hannover",
    icon: hsh,
    iconBg: "#FFFFFF",
    date: "October 2022 - February 2023",
    points: [
      "Supervising assignments",
      "Teaching programming concepts",
      "Correcting exams"
    ]
  }
];