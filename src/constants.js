// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
// import uetLogo from "../assets/edu/uni/uet.png";
// import collegeLogo from "../assets/edu/college/ggc.png";
// import schoolLogo from "../assets/edu/school/gbhs.png";
// import futureLogo from "../assets/edu/future/plan.png"; // Optional


// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img: "https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg", // placeholder image
    role: "Self-Taught Frontend Developer",
    company: "Personal Projects",
    date: "Jan 2023 – Present",
    desc: "Over the last 1.5 years, I’ve built multiple real-world web projects using modern frontend technologies. I focused on learning React.js, JavaScript, Tailwind CSS, and building responsive UI. Through building clones, dashboards, and mini-apps, I’ve strengthened my skills in component-based development, state management, and working with APIs.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Git & GitHub",
      "REST APIs",
    ],
  },
  {
    id: 1,
    img: "https://images.credly.com/images/f441bb5a-d46a-4a77-ab63-48dbe870e992/twitter_thumb_201604_Web_Developer_Freelancer_Badge_1200x1200px.png", // another placeholder
    role: "Freelance Web Developer",
    company: "Freelance / Self-initiated Projects",
    date: "Sep 2023 – Present",
    desc: "Worked on freelance-like personal projects such as portfolio websites, product landing pages, food apps, and contact forms. Designed full websites from scratch using modern CSS frameworks. I also practiced converting Figma/Dribbble designs into fully responsive websites using Tailwind CSS and React.",
    skills: [
      "Responsive Web Design",
      "React Router",
      "DOM Manipulation",
      "Form Handling",
      "Deployment (Netlify)",
    ],
  }
];


  // export const experiences = [
  //   {
  //     id: 0,
  //     img: webverseLogo,
  //     role: "Fullstack Developer",
  //     company: "Webverse Digital",
  //     date: "April 2024 - Present",
  //     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "React JS",
  //       "TypeScript",
  //       "Node JS",
  //       "Tailwind CSS",
  //       "MongoDb",
  //       "Redux",
  //       " Next Js",
  //     ],
  //   },
  //   {
  //     id: 1,
  //     img: agcLogo,
  //     role: "Fullstack Engineer",
  //     company: "Agumentik Group of Companies",
  //     date: "July 2023 - March 2024",
  //     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //     skills: [
  //       "ReactJS",
  //       "Redux",
  //       "JavaScript",
  //       "Tailwind CSS",
  //       "HTML",
  //       "CSS",
  //       "SQL",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     img: newtonschoolLogo,
  //     role: "Frontend Intern",
  //     company: "Newton School",
  //     date: "September 2021 - August 2022",
  //     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "Javascript",
  //       "Bootstrap",
  //       "Figma",
  //       "Material UI",
  //     ],
  //   },
  // ];
  export const education = [
  {
    id: 0,
    img: "https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg",
    school: "University of Engineering and Technology (UET), Lahore",
    date: "Starting in 2026 (Planned)",
    grade: "To be pursued",
    desc: "I plan to pursue a Bachelor's degree in Software Engineering from UET Lahore starting in 2026. UET is one of the top engineering institutions in Pakistan, and I aim to build a strong foundation in core software development concepts, computer systems, and modern technologies. This degree will help me enhance my skills in areas like Data Structures, Algorithms, Software Design, and Web Development. My goal is to become a skilled software engineer and contribute to innovative tech solutions.",
    degree: "Bachelor of Science - BS (Software Engineering) [Planned]",
  },
  {
    id: 1,
    img: "https://ggcwbbp.edu.pk/wp-content/uploads/2017/01/College-Logo-Graduate-SQUARE-2.jpg",
    school: "Government Graduate College, Garh Maharaja, District Jhang",
    date: "Oct 2023 – May 2025",
    grade: "In Progress",
    desc: "I am currently pursuing my intermediate education (FSc Pre-Engineering) from Government Graduate College, Garh Maharaja, under the BISE Faisalabad board. My subjects include Physics, Chemistry, and Mathematics. This stage of my academic journey is strengthening my analytical thinking and problem-solving abilities, which are crucial for my future career in software engineering.",
    degree: "FSc Pre-Engineering (12th) – In Progress",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npwDjtX7wuBkOxrQeQui62X2QXfjKnInCVS0AqCkaxj0U2gvWw43v6GmR3TsSDKnza9_LbAzwglxwL5p3LZudCCfRdnQ-xOeL3OzmThMpFUYXrR3Mzqf7_r2G5Ak8P5ASyhm1cZ4Q=s680-w680-h510-rw",
    school: "Government Boys High School, Ahmad Pur Sial, District Jhang",
    date: "Apr 2020 – March 2022",
    grade: "87.5%",
    desc: "I completed my matriculation (10th grade) from Government Boys High School, Ahmad Pur Sial, under the BISE Faisalabad board. I studied Science with Computer and developed a strong interest in computers and technology. This foundational stage played a vital role in shaping my academic interests and career path.",
    degree: "Matriculation (10th) – Science with Computer",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg",
    school: "Future Higher Education (To be Decided)",
    date: "Beyond 2030 (Planned)",
    grade: "To be pursued",
    desc: "After completing my Bachelor's in Software Engineering, I plan to pursue higher education such as a Master's degree in Computer Science or a related field from a reputed national or international university. My focus will be on advanced software engineering, artificial intelligence, or full-stack development to strengthen my expertise and contribute to impactful tech innovations.",
    degree: "Higher Education – Master's (Planned)",
  }
];


  //projects 
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      // github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      // github: "https://github.com/codingmastr/CSPrep",
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      // github: "https://github.com/codingmastr/Movie-Recommendation-App",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      // github: "https://github.com/codingmastr/cmtk-email-validator",
      // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      // github: "https://github.com/codingmastr/Task-Reminder-Tool",
      // webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      // github: "https://github.com/codingmastr/Webverse-Digital",
      // webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      // github: "https://codingmasterweb.in/",
      // webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      // github: "https://github.com/codingmastr/Image-Search-App",
      // webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      // github: "https://github.com/codingmastr/Image-Background-Remover",
      // webapp: "https://removeyourbg.netlify.app/",
    },
         {
  id: 9,
  title: "Dynamic Fix - React Router Project",
  description:
    "A multi-page React web application built using React Router DOM and styled with Tailwind CSS. This project demonstrates smooth client-side routing, responsive layout, and clean component-based architecture. It was developed with Vite and deployed on Netlify.",
  image: dynamicFixLogo, // Replace this with the actual imported logo/image
  tags: ["React JS", "React Router DOM", "Tailwind CSS", "Vite", "HTML", "JavaScript"],
  github: "https://github.com/muhammadabdullahhussain/09ReactRouterProjectAndLearning", // Replace with your actual repo URL if different
  webapp: "https://dynamic-fix.netlify.app/",
}

  ];  
