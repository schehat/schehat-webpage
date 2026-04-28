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
    date: "March 2024 - September 2025",
    points: [
      "Developed and maintained full-stack applications in Java and Angular supporting complex data processing workflows",
      "Designed and maintained GitLab CI/CD pipelines for containerized (Docker) deployments",
      "Collaborated in agile cross-functional international team, translating business requirements into reliable software solutions"
    ]
  },
  {
    title: "Software Developer",
    companyName: "Finanz Informatik",
    icon: fi,
    iconBg: "#FFFFFF",
    date: "March 2023 - February 2024",
    points: [
      "Built and maintained full-stack applications in Java & React for Germany's public banking IT infrastructure",
      "Developed and optimized SQL queries for data processing and backend data workflows",
      "Gained practical experience with large-scale data management and backend data flows"
    ]
  },
  {
    title: "Tutor C/C++",
    companyName: "Hochschule Hannover",
    icon: hsh,
    iconBg: "#FFFFFF",
    date: "October 2022 - February 2023",
    points: [
      "Tutor in C/C++ programming, supervised lab sessions and graded examinations"
    ]
  }
];