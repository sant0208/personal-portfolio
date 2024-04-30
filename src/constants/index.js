import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    ic,
    car,
    porject2,
    python,
    java,
    sql,
    porject3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "H o m e",
    },
    {
      id: "about",
      title: "A b o u t",
    },
    {
      id: "education",
      title: "E d u c a t i o n",
    },
    {
      id : "works",
      title : "P r o j e c t s",
    },
    {
      id : "contact",
      title : "C o n t a c t",
    },
  ];

  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competitive Progammer",
      icon: mobile,
    },
    {
      title: "Problem Solving",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      title: "HTML",
      icon: html,
    },
    {
      title: "CSS",
      icon: css,
    },
    {
      title: "JavaScript",
      icon: javascript,
    },
    {
      title: "React JS",
      icon: reactjs,
    },
    {
      title: "Tailwind CSS",
      icon: tailwind,
    },
    {
      title: "MongoDB",
      icon: mongodb,
    },
    {
      title: "git",
      icon: git,
    },
    {
      title: "python",
      icon: python,
    },
    {
      title: "java",
      icon : java,
    },
    {
      title : "sql",
      icon : sql,
    },
  ];
  
  const experiences = [
    {
      title: "UG Bachelor of Engineering",
      company_name: "RMK College of Engineering and Technology",
      icon: ic,
      iconBg: "#fffff",
      date: "Augest 2021 - June 2025",
      points: [
        "(6.5+ CGPA*)"
      ],
    },
    {
      title: "12th Standard",
      company_name: "St John's Matirulation  Higher  Secondary School",
      icon: ic,
      iconBg: "#ffff",
      date: "June 2020 - April 2021",
      points: [
        "(78.3%)",
      ],
    },
    {
      title: "10th Standard",
      company_name: "St John's Matirulation  Higher  Secondary School",
      icon: ic,
      iconBg: "#ffff",
      date: "June 2018 - April 2019",
      points: [
        "(71.3%)",
      ],
    },
  ];
  
  const projects = [
    {
      name: "AI Article Summarizer",
      description:
        " A modern and user-friendly interface, offering an intuitive experience for users and Summarize any kind of article with just one click using the powerful OpenAI model.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reduxtoolkit",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/sant0208/SUMMARIZE_AI.git",
    },
    {
      name: "College Website",
      description:
        "Build an MPA website for my college as part of intra-college hackathon. Implemented smooth scrolling with locomotive.js and animations with GSAP.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: porject2,
      source_code_link: "https://github.com/sant0208/college-website.git",
    },
    {
      name: "VOICE ASSISTANT",
      description:
        "Created a voice assistance feature that can be integrated into any application. Used python-text-to-speech (pyttsx3) to access the assistant offline.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pyttsx3",
          color: "green-text-gradient",
        },
      ],
      image: porject3,
      source_code_link: "https://github.com/sant0208/Python-Voice-Assistance.git",
    },
  ];
  
  export { services, technologies, experiences,  projects };
  