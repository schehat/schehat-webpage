import { Experience } from "@/src//model/Experience";
import fi from "@/src/assets/experience/fi.png";
import hacon from "@/src/assets/experience/hacon.png";
import hsh from "@/src/assets/experience/hsh.png";

export const experiences : Experience[] = [
  {
    title: "Software Developer",
    companyName: "Hacon",
    icon: hacon,
    iconBg: "#FFFFFF",
    date: "March 2024 - Present",
    points: [
      "Java",
      "Spring",
      "Hibernate",
      "JUnit tests",
    ]
  },
  {
    title: "Software Developer",
    companyName: "Finanz Informatik",
    icon: fi,
    iconBg: "#FFFFFF",
    date: "March 2023 - February 2024",
    points: [
      "Java",
      "Spring",
      "SQL",
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