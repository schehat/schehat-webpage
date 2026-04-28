import bbsme from "@/src/assets/education/bbsme.png";
import hsh from "@/src/assets/education/hsh.png";
import luh from "@/src/assets/education/luh.png";
import science_tokyo from "@/src/assets/education/science_tokyo.png";
import { Education } from "@/src/model/Education";

export const education : Education[]= [
  {
    title: "M. Sc. Computer Science",
    institution: "Leibniz University Hannover",
    icon: luh,
    iconBg: "#FFFFFF",
    date: "April 2024 - Present",
    points: [
      	"Specialization: Data Science - ML, DL, NLP",
	      "Current Grade: 1.0",
	      "German Scholarship for talented students",
	      "Supporting international students as tutor"
    ]
  },
    {
    title: "Exchange Semester",
    institution: "Institute of Science Tokyo",
    icon: science_tokyo,  
    iconBg: "#FFFFFF",
    date: "September 2025 - February 2026",
    points: [
      "Focus on Data Science", 
      "Promos Scholarship for academic excellence"
    ]
  },
  {
    title: "B. Sc. Applied Computer Science",
    institution: "Applied University Hannover",
    icon: hsh,
    iconBg: "#FFFFFF",
    date: "September 2020 - February 2024",
    points: [
      "Final grade: 1.4",
      "3x German Scholarship for talented students",
      "Member of the Computer Science Student Council"
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