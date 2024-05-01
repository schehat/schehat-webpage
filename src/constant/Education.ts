import bbsme from "@/src/assets/education/bbsme.png";
import hsh from "@/src/assets/education/hsh.png";
import luh from "@/src/assets/education/luh.png";
import { Education } from "@/src/model/Education";

export const education : Education[]= [
  {
    title: "M. Sc. Computer Science",
    institution: "Leibniz University Hannover",
    icon: luh,
    iconBg: "#FFFFFF",
    date: "April 2024 - Present",
    points: ["Focus on Data Science & Machine Learning"
    ]
  },
  {
    title: "B. Sc. Applied Computer Science",
    institution: "Applied University Hannover",
    icon: hsh,
    iconBg: "#FFFFFF",
    date: "September 2020 - February 2024",
    points: [
      "Grade: 1.4",
      "German Scholarship for talented students",
      "Member of the Computer Science Student Council",
      "Full Stack development projects with Java, Spring and Hibernate",
      "Web development with REST interface Nuxt, Vue and MongoDB",
      "Computer graphics oriented programming with C++ and QT"
    ]
  },
  { 
    title: "A-Level",
    institution: "BBS-ME",
    icon: bbsme,
    iconBg: "#FFFFFF",
    date: "August 2017 - June 2020",
    points: [
      "Grade: 1.8",
      "Class representative",
      "German Physical Society A Level Price"
    ]
  }
];