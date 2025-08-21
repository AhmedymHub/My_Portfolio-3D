import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  github,
  docker,
} from "../assets";

import sass from "../assets/images/sass.png";
import project2 from "../assets/images/project2.png";
import javaa from "../assets/images/javaa.png";
import cow from "../assets/images/cow.png";
import python1 from "../assets/images/python1.png";
import java from "../assets/images/java.png";
import R from "../assets/images/R.png";
import database from "../assets/images/database.png";
import three from "../assets/tech/three.png";

import teacher from "../assets/images/teacher.png";
import girl from "../assets/images/girl.png";
import boy from "../assets/images/boy.png";
import man from "../assets/images/man.png";

import freelancer from "../assets/icons/freelancer.png";
import coursera from "../assets/icons/coursera.png";
import google from "../assets/icons/google.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import gmail from "../assets/icons/gmail.png";

import Data from "../assets/images/Data.png";
import cyber from "../assets/images/cyber.png";
import schoo from "../assets/images/schoo.png";
import yolo from "../assets/images/yolo.jpg";
import mcl from "../assets/images/mcl.webp";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CyberSecurity Analyst",
    icon: creator,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const certificate = [
  {
    name: "Google Data Analytics Professional Certificate",

    image: Data,
    source_code_link:
      "https://grow.google/intl/ssa-en/google-career-certificates/",
    deploy_link: "https://coursera.org/verify/professional-cert/ZWE3XKBF45X3",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    image: cyber,
    source_code_link:
      "https://grow.google/intl/ssa-en/google-career-certificates/",
    deploy_link: "https://coursera.org/verify/professional-cert/JHEYPCYVRPVQ",
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python1,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "Database",
    icon: database,
  },
];

const experiences = [
  {
    title: "React.js Developer and MySQL Database",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "July 2024",
    points: [
      "Worked as a freelancer in 2024, developing and maintaining the frontend and database for a plane agency. Designed an intuitive user interface, optimized database performance, and ensured seamless data flow between the application and backend. Collaborated with stakeholders to meet business requirements and improve overall system efficiency.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Restaurant Management Platform – Internship",
    icon: freelancer,
    iconBg: "#383E56",
    date: "March-May 2025",
    points: [
      "Completed a full-time internship in 2024, developing a full-stack restaurant management system using Vue.js (frontend) and Laravel (backend). Implemented features like real-time order tracking, menu management, and customer feedback with dynamic dashboards and MySQL. Ensured responsive UI, secured RESTful APIs, and integrated data visualization using Chart.js to enhance operational decision-making.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I’ve known Ahmed for years, and his dedication to software development is unmatched. He has a unique ability to solve complex problems with elegant solutions. Whether it’s building applications or securing systems, Ahmed is someone I trust completely. His passion for cybersecurity is inspiring, and he’s taught me so much about staying safe online.",
    name: "Muse Lamer",
    designation: "Software Engineer",
    company: "Istanbul Arel University",
    image: boy,
  },
  {
    testimonial:
      "As a cybersecurity Instructor and tools like Linux and SQL, Ahmed demonstrates a deep understanding of security principles and practices. He has a natural talent for identifying risks and implementing robust solutions. His ability to explain complex concepts in simple terms is a testament to his expertise. I’m confident he’ll make a significant impact in the tech industry.",
    name: "Kim",
    designation: "Instructor",
    company: "Google Career Certificate",
    image: girl,
  },
  {
    testimonial:
      "As a Networks and Network Security  Instructor, Ahmed demonstrates a deep understanding of security principles and practices.",
    name: "Chris",
    designation: "Instructor",
    company: "Google Career Certificate",
    image: man,
  },

  {
    testimonial:
      "Working with Ahmed on a few projects has been an eye-opening experience. His knowledge of both software development and cybersecurity is impressive. He has a knack for identifying vulnerabilities and fixing them before they become issues.  I’d highly recommend Ahmed to anyone looking for a skilled and reliable developer.",
    name: "Khaled",
    designation: "Electrical & Electronics Engineer",
    company: "Aydin University",
    image: boy,
  },
  {
    testimonial:
      "Ahmed is one of the most dedicated students I’ve had the pleasure of teaching. His passion for software development and cybersecurity is evident in everything he does. He consistently goes above and beyond to learn new technologies and apply them in innovative ways. I have no doubt he’ll excel in his career.",
    name: "Pinar ",
    designation: "Instructor",
    company: "Istanbul Arel University",
    image: teacher,
  },
];

const projects = [
  {
    name: "AI Podcast",
    description:
      "An AI-powered podcast platform built with Next.js, TypeScript, Convex, and the OpenAI API. It enables users to convert text into AI-generated speech with multiple voices, generate podcast thumbnails, and manage their podcasts seamlessly. The platform features robust authentication with Clerk, a scalable database with Convex, and an intuitive UI for a smooth user experience.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "convex database",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sass,
    source_code_link: "https://github.com/AhmedymHub/AI-PODCAST",
    deploy_link: "https://ai-podcast-five.vercel.app/",
  },
  {
    name: "AI Image Editor",
    description:
      "A web-based AI image editing platform developed using Next.js, MongoDB, Cloudinary, TypeScript, TailwindCSS, and Stripe. It offers advanced AI-driven transformations such as image restoration, recoloring, object removal, and background removal. The platform integrates Stripe for secure transactions, allowing users to purchase credits for premium features, while Cloudinary ensures efficient image storage and management.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/AhmedymHub/Image_AI_Editor",
    deploy_link: "https://image-ai-editor.vercel.app/",
  },
  {
    name: "School Management System",
    description:
      "A modern full-stack School Management System built with Next.js, TypeScript, Prisma, PostgreSQL, and FastAPI. It supports multiple user roles (Admin, Teacher, Student, Parent), features a calendar, Kanban board, dynamic charts, and dark/light theme toggle. Machine learning is integrated to predict student success using attendance, grades, and class performance data. The backend ML service is powered by FastAPI and scikit-learn.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "orange-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "red-text-gradient",
      },
    ],
    image: schoo,
    source_code_link:
      "https://github.com/AhmedymHub/School-Management-System_FullStack.git",
    deploy_link:
      "https://github.com/AhmedymHub/School-Management-System_FullStack.git", // Replace with actual live link if deployed
  },

  {
    name: "Project using Java and SQLite",
    description:
      "A web-based flight booking system developed using Java and SQLite. It allows users to search for flights, book tickets, and manage reservations efficiently. The system features a structured database for handling flight schedules, passenger details, and transactions, ensuring smooth booking and management.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javac",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: javaa,
    source_code_link: "https://github.com/AhmedymHub/Java_Project/tree/main",
    deploy_link: "https://github.com/AhmedymHub/Java_Project/tree/main",
  },
  {
    name: "Automatic Number Plate Recognition",
    description:
      "Developed a real-time number plate recognition system using YOLOv8 and EasyOCR during a Deep Learning and Classification Techniques course. The project combines object detection and OCR to identify and extract license plate text from vehicle images. This hands-on experience deepened my knowledge of deep learning, computer vision, and model deployment.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "yolov8",
        color: "red-text-gradient",
      },
      {
        name: "easyocr",
        color: "yellow-text-gradient",
      },
      {
        name: "deep learning",
        color: "orange-text-gradient",
      },
      {
        name: "computer vision",
        color: "green-text-gradient",
      },
    ],
    image: yolo,
    source_code_link:
      "https://github.com/AhmedymHub/Automatic-Number-Plate-Recognition-Deep-Learning-.git",
    deploy_link: "",
  },

  {
    name: "Diabetes Prediction using Machine Learning",
    description:
      "Implemented a diabetes risk prediction model using Python, Pandas, and Scikit-learn as part of a healthcare analytics series. The project involved preprocessing medical datasets, performing feature engineering, and training classification models to identify individuals at risk. Gained hands-on experience in applying machine learning to real-world healthcare data and interpreting evaluation metrics for model performance.",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "data science",
        color: "pink-text-gradient",
      },
      {
        name: "healthcare",
        color: "red-text-gradient",
      },
    ],
    image: mcl,
    source_code_link:
      "https://github.com/AhmedymHub/Diabetes-Prediction-using-machine-learniing.git",
    deploy_link: "",
  },

  {
    name: "Dairy Website",
    description:
      " A web-based platform for purchasing dairy products, meat, and other food items, built using JavaScript, HTML, and CSS. The website provides an intuitive shopping experience with product listings, a cart system, and a responsive design for seamless navigation.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cow,
    source_code_link: "https://github.com/AhmedymHub/Dairy_Website/tree/main",
    deploy_link: "https://github.com/AhmedymHub/Dairy_Website/tree/main",
  },
];

const socialImgs = [
  {
    name: "gmail",
    imgPath: gmail,
    url: "mailto:ahmedymimar@gmail.com",
  },
  {
    name: "instagram",
    imgPath: instagram,
    url: "https://www.instagram.com/ahmedym_omar?igsh=MWE5bWZoYWgyYnU4bg%3D%3D&utm_source=qr",
  },
  {
    name: "facebook",
    imgPath: facebook,
    url: "https://www.facebook.com/share/1CEfgcsVGs/?mibextid=wwXIfr",
  },
  {
    name: "coursera",
    imgPath: coursera,
    url: "https://coursera.org/verify/professional-cert/JHEYPCYVRPVQ",
  },
  {
    name: "linkedin",
    imgPath: linkedin,
    url: "https://tr.linkedin.com/in/ahmed-omar-ali-89ah622",
  },
  {
    name: "github",
    imgPath: github,
    url: "https://github.com/AhmedymHub",
  },
  {
    name: "google",
    imgPath: google,
    url: "https://grow.google/intl/ssa-en/google-career-certificates/",
  },
];

export {
  services,
  socialImgs,
  certificate,
  technologies,
  experiences,
  testimonials,
  projects,
};
