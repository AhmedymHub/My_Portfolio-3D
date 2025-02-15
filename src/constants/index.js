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
    git,
    docker,
    meta,
    threejs,
  } from "../assets";

  import  sass from "../assets/images/sass.png";
  import  project2 from "../assets/images/project2.png";
  import  javaa from "../assets/images/javaa.png";
  import  cow from "../assets/images/cow.png";
  import  python1 from "../assets/images/python1.png";
  import  java from "../assets/images/java.png";
  import  R from "../assets/images/R.png";
  import  database from "../assets/images/database.png";

  import  teacher from "../assets/icons/teacher.png";
  import  girl from "../assets/icons/girl.png";
  import  boy from "../assets/icons/boy.png";
  import man from "../assets/icons/man.png"

  import freelancer from "../assets/icons/freelancer.png"
  




  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
    {
      title: "Content Creator",
      icon: creator,
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
      icon: threejs,
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
  ];
  
  const testimonials = [
    {
      testimonial:
      "I’ve known Ahmed for years, and his dedication to software development is unmatched. He has a unique ability to solve complex problems with elegant solutions. Whether it’s building applications or securing systems, Ahmed is someone I trust completely. His passion for cybersecurity is inspiring, and he’s taught me so much about staying safe online.",
      name: "Muse Dame",
      designation: "Software Engineer",
      company: "Istanbul Arel University",
      image: boy,
    },
    {
      testimonial:
      "As a cybersecurity Instructor, Ahmed demonstrates a deep understanding of security principles and practices. He has a natural talent for identifying risks and implementing robust solutions. His ability to explain complex concepts in simple terms is a testament to his expertise. I’m confident he’ll make a significant impact in the tech industry.",
      name: "Kim",
      designation: "Instructor",
      company: "Google Career Certificate",
      image: girl,
    },
    {
      testimonial:
      "Working with Ahmed on a few projects has been an eye-opening experience. His knowledge of both software development and cybersecurity is impressive. He has a knack for identifying vulnerabilities and fixing them before they become issues.  I’d highly recommend Ahmed to anyone looking for a skilled and reliable developer.",  
      name: "Khaled",
      designation: "MBA Student",
      company: "Aydin University",
      image: man,
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
    },
  ];

  
  export { services, technologies, experiences, testimonials, projects };