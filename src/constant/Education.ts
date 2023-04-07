import bbsme from "@/src/assets/education/bbsme.png";
import hsh from "@/src/assets/education/hsh.png";
import { Education } from "@/src/model/Education";

export const education : Education[]= [
  {
    title: "B. Sc. Angewandte Informatik",
    institution: "Hochschule Hannover",
    icon: hsh,
    iconBg: "#FFFFFF",
    date: "September 2020 - Present",
    points: [
      "GPA: 1.3",
      `Projects in software development (Java, C/C++), web development und REST-APIs
      (HTML/CSS/JS/TS, JAX-RS, NextJS, Vue) und databases (SQL, JDBC, Hibernate)`,
      "WE/Germany Scholarship",
    ]
  },
  { 
    title: "A-Level",
    institution: "BBS-ME",
    icon: bbsme,
    iconBg: "#FFFFFF",
    date: "August 2017 - June 2020",
    points: [
      "GPA: 1.8",
      "Year representative",
      "DPG A-Level Award for very good performance in physics"
    ]
  }
];