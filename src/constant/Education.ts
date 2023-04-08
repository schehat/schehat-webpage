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
      "Current GPA: 1.3",
      "Member of the Computer Science Student Council",
      "WE/Germany Scholarship",
      "Software development with Java (JavaFX, JDBC, Hibernate) and C/C++ (QT)",
      "Web development and REST-APIs with NextJS, Vue and Firebase",
      "Databases development with SQL database and MongoDB"
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