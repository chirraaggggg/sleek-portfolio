import { BiLogoPostgresql } from "react-icons/bi"
import {FaGithub, FaLinkedinIn, FaPython } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { PiFigmaLogoBold } from "react-icons/pi"
import { FaDocker, FaMediumM } from "react-icons/fa"
import { BsFiletypeSql } from "react-icons/bs"

import {
  RiBearSmileLine,
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiRedis,
  SiBehance,
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
  SiReactquery,
  SiLeetcode,
  SiPrisma,
  SiDjango,
} from "react-icons/si"
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"
import { ImLab } from "react-icons/im"

const skills = [
  { id: 1, icon: RiReactjsLine, text: "ReactJs", color: "#61DAFB" },
  { id: 2, icon: RiNextjsLine, text: "NextJs", color: "#000000" },
  { id: 3, icon: SiDjango, text: "Django", color: "#092E20" },
  { id: 4, icon: DiJavascript, text: "JavaScript", color: "#F7DF1E" },
  { id: 5, icon: TbBrandTypescript, text: "TypeScript", color: "#3178C6" },
  { id: 6, icon: RiTailwindCssFill, text: "Tailwind", color: "#06B6D4" },
  { id: 7, icon: RiBearSmileLine, text: "Zustand", color: "#614a28" },
  { id: 8, icon: SiReactquery, text: "Tanstack Query", color: "#FF4154" },
  { id: 9, icon: SiShadcnui, text: "shadcn", color: "#000000" },
  { id: 10, icon: TbBrandFramerMotion, text: "Motion", color: "#0055FF" },
  { id: 11, icon: SiGreensock, text: "GSAP", color: "#88CE02" },
  { id: 12, icon: IoLogoNodejs, text: "NodeJS", color: "#339933" },
  { id: 13, icon: SiExpress, text: "ExpressJS", color: "#68A063" },
  { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL", color: "#4169E1" },
  { id: 15, icon: SiMongodb, text: "MongoDB", color: "#47A248" },
  { id: 16, icon: SiRedis, text: "Redis", color: "#DC382D" },
  { id: 17, icon: SiPrisma, text: "Prisma", color: "#2D3748" },
  { id: 18, icon: SiPostman, text: "Postman", color: "#FF6C37" },
  { id: 19, icon: FaGitAlt, text: "Git", color: "#F05032" },
  { id: 20, icon: FaGithub, text: "GitHub", color: "#181717" },
  { id: 21, icon: FaPython, text: "Python", color: "#3776AB" },
  { id: 22, icon: RiJavaLine, text: "Java", color: "#007396" },
  { id: 23, icon: TbHexagonLetterC, text: "C", color: "#A8B9CC" },
  { id: 24, icon: TbBrandCpp, text: "C++", color: "#00599C" },
  { id: 25, icon: BsFiletypeSql, text: "SQL", color: "#336791" },
  { id: 26, icon: FaDocker, text: "Docker", color: "#2496ED" },
  { id: 27, icon: VscTerminalLinux, text: "Linux", color: "#FCC624" },
  { id: 28, icon: SiVercel, text: "Vercel", color: "#000000" },
  { id: 29, icon: PiFigmaLogoBold, text: "Figma", color: "#F24E1E" },
]
const projects = [
  {
    id: 1,
    title: "Medical Insurance Cost Prediction",
    status: true,
    content:
      "A machine learning model that predicts medical insurance costs based on various factors such as age, BMI, smoking status, and region. Built using Python, Scikit-learn, and deployed as a web application with Streamlit. The model helps in estimating healthcare expenses for better financial planning.",
    github: "https://github.com/chirraaggggg/medical-insurance-cost-prediction",
    skill: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Machine Learning"],
    url: "https://github.com/chirraaggggg/medical-insurance-cost-prediction",
    preview: ""
  },
  {
    id: 2,
    title: "NAFLD Prediction Model",
    status: true,
    content:
      "A predictive model for Non-Alcoholic Fatty Liver Disease (NAFLD) using machine learning techniques. The model analyzes various health parameters to assess the risk of NAFLD. Implemented with Python and popular data science libraries, this project demonstrates the application of ML in healthcare diagnostics.",
    github: "https://github.com/chirraaggggg/nafld-prediction",
    skill: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"],
    url: "https://github.com/chirraaggggg/nafld-prediction",
    preview: ""
  }
]

const hireText =
  "I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!"

const emailLink =
  "mailto:therinkit@gmail.com?subject=Interested%20in%20Hiring%20You"

const navLinks = [
  {
    id: 1,
    name: "Lab",
    link: "/lab",
    icon: ImLab,
  },
  {
    id: 2,
    name: "Medium",
    link: "https://medium.com/@rinkitadhana",
    icon: FaMediumM,
  },
  {
    id: 3,
    name: "Behance",
    link: "https://www.behance.net/rinkitadhana",
    icon: SiBehance,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "LeetCode",
    link: "https://leetcode.com/u/rinkitadhana",
    icon: SiLeetcode,
  },
]

export {
  projects,
  emailLink,
  skills,
  hireText,
  navLinks,
}
