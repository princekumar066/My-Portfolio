// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png'
import javascriptLogo from './assets/tech_logo/javascript.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import nietLogo from './assets/clg.png.jpeg'
import NietLogo from './assets/clg.png.jpeg'

// Education Section Logo's
import csLogo from './assets/cs.png.png'
import andpLogo from './assets/andp (1).png'

// Project Section Logo's

import movieLogo from "./assets/work_logo/movie.png"
import imgLogo from "./assets/work_logo/img-bg.png"
import aiLogo from "./assets/work_logo/ai-chatbot.png"
import taskremLogo from './assets/work_logo/task_rem.png';
import webverLogo from './assets/work_logo/web_dig.png';
import mirrorLogo from "./assets/work_logo/mir.png"
import gitdecLogo from "./assets/work_logo/git.png"


export const SkillsInfo = [
   {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JS', logo: javascriptLogo }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];


  export const experiences = [
    {
      id: 0,
      img: NietLogo,
      role: "Fullstack Developer Trainee",
      company: "NIET",
      date: "08/2024 – 09/2024",
      desc: "Learned the fundamentals of web development, including HTML, CSS, and JavaScript, and built 5+ responsive webpages for frontend design. Introduced to backend development with Node.js and Express.js, developing 3+ APIs for data handling.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
      ],
    },
    {
      id: 1,
      img: nietLogo,
      role: "Data Analtics Trainee",
      company: "NIET",
      date: "02/2025 – 04/2025",
      desc: "Analyzed student performance data using Python and SQL to identify key areas for academic improvement, resulting in a 15% increase in student satisfaction scores over two semesters. Learned fundamentals of Data Analytics, including SQL lite, MongoDB, Python Libraries and built 5+ data analytics project.",
      skills: [
        "Python",
        "SQL",
        "Numpy",
        "Pandas",
        "MongoDB",
      ],
    },
  ];
  
   export const education = [
    {
      id: 0,
      img: nietLogo,
      school: "Noida Institute of Engineering and Technology, Greater Noida",
      date: "Aug 2022 - June 2026",
      grade: "7.1 CGPA",
      desc: "I am pursing my Bachelor's degree (B.tech) in Data Science from Noida Institute of Engineering and Technology, Greater Noida. During my time at NIET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at NIET has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.tech",
    },
    {
      id: 1,
      img: andpLogo,
      school: "A.N.D.P Inter College, (Amroha)",
      date: "Apr 2020 - March 2022",
      grade: "80.33%",
      desc: "I completed my class 12 education from A.N.D.P Inter College, (Amroha), under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer.",
      degree: "CBSE(XII) - PCM with Computer Application",
    },
    {
      id: 2,
      img: csLogo,
      school: "Ch. Sukhlal Singh Inter College, (Amroha)",
      date: "Apr 2018 - March 2022",
      grade: "82.33%",
      desc: "I completed my class 10 education from Ch. Sukhlal Singh Inter College, (Amroha), under the UP board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Chatbot",
      description: 
        "An advanced AI chatbot that delivers smart, human-like conversations, adapts to user needs, and provides instant assistance, making interactions seamless and personalized.",
      image: aiLogo,
      tags: ["HTML", "CSS", "JavaScript", "Next JS", "API"],
      github: "https://github.com/princekumar066/AI-Chatbot",
      webapp: "https://ai-chatbot-pied-three-68.vercel.app/",
    },
    {
      id: 1,
      title: "AI Background Remover",
      description:
        "AI Image Background Remover is a smart tool that automatically detects and removes backgrounds from images. It allows users to get transparent or custom backgrounds instantly, making image editing faster, easier, and professional-ready.",
      image: imgLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/princekumar066/Image-bg-remover",
      webapp: "https://image-bg-remover-puce.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movieLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/princekumar066/Movie_House",
      webapp: "https://movie-house-smoky.vercel.app/",
    },
    {
      id: 3,
      title: "Github Profile Detective",
      description:
       "GitHub-Profile-Detective is a tool that analyzes GitHub profiles, extracting insights like repositories, contributions, and activity patterns to help understand a user's coding style and project interests efficiently.",
      image: gitdecLogo,
      tags: ["React JS", "Node.js", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/princekumar066/Github-Profile-Detective",
      webapp: "https://github-profile-detective-ruby.vercel.app/",
    },
    {
      id: 4,
      title: " Voice Controlled Smart Mirror",
      description:
        "This project creates a Voice-Controlled Smart Mirror interface that webpage would run on a screen placed behind a two-way mirror, giving you a futuristic display that provides information and responds to your voice.",
      image: mirrorLogo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/princekumar066/-Voice-Controlled-Smart-Mirror",
      webapp: "https://voice-controlled-smart-mirror.vercel.app/",
    },
  ];