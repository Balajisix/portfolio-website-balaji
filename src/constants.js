import expenseTrackerImg from "../src/assets/projectPics/expenseTracker.jpg";
import loginImg from "../src/assets/projectPics/login.png";
import defaultImg from "../src/assets/projectPics/ai-text-sum.png";

export const contactLinks = [
  {
    name: "LinkedIn",
    logo: require("../src/assets/icons/linkedin.svg").default,
    link: "https://www.linkedin.com/in/balaji-v-544984215/",
  },
  {
    name: "Github",
    logo: require("../src/assets/icons/github.svg").default,
    link: "https://github.com/Balajisix",
  },
/*   {
    name: "Twitter",
    logo: require("../src/assets/icons/twitter.svg").default,
    link: "https://twitter.com/VipulKumar4321",
  }, */
  /* {
    name: "Stack Overflow",
    logo: require("../src/assets/icons/stackoverflow.svg").default,
    link: "https://stackoverflow.com/users/10858298/vipul-kumar",
  }, */
  {
    name: "Leetcode",
    logo: require("../src/assets/icons/leetcode.svg").default,
    link: "https://leetcode.com/u/born___to___rule__/",
  },
  /* {
    name: "GeekForGeeks",
    logo: require("../src/assets/icons/gfg.svg").default,
    link: "https://auth.geeksforgeeks.org/user/vips_infinity",
  }, */
  /* {
    name: "Instagram",
    logo: require("../src/assets/icons/instagram.svg").default,
    link: "https://www.instagram.com/vips_infinity",
  }, */
  /* {
    name: "WhatsApp",
    logo: require("../src/assets/icons/whatsapp.svg").default,
    link: "https://api.whatsapp.com/send?phone=918765263553",
  }, */
  {
    name: "Mail",
    logo: require("../src/assets/icons/mail.svg").default,
    link: "mailto:balajivs0305@gmail.com",
  },
];

export const projects = [
  {
    title: "Login 2024",
    tech: [
      "EJS",
      "CSS",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Git/Github",
      "Express.js"
    ],
    content: [
      "Developed a website for college fest with an interactive user interface. There were totally 12 events and over 500+ participants has registred through website.",
      "Employed modern design principles and responsive layouts for seamless user interaction across devices.",
    ],
    link: "#",
    live: "https://www.psglogin.in",
    img: loginImg,
  },
  {
    title: "Expense Tracker",
    tech: ["React", "HTML", "CSS", "JavaScript", "AWS"],
    content: [
      "Crafted a simple yet effective static website using React and deployed it on AWS to track yearly expenses.",
      "Demonstrated proficiency in React development and deployment on cloud infrastructure.",
    ],
    link: "#",
    live: "#",
    img: expenseTrackerImg,
  },
  {
    title: "AI Text Summarizer App",
    tech: ["Node.js", "Express.js", "Postman", "Hugging Face Inference API", "Replit", "JavaScript", "CSS", "HTML"],
    content: [
      "Analyse and identify the text which is prompted by the user and it will summarize into a concise format",
      "Integrated Hugging face inference API model which helps to do the text summarization.",
    ],
    link: "#",
    img: defaultImg,
  },
  // {
  //   title: "Web-to-Mobile",
  //   tech: ["Node.js", "Express", "AWS"],
  //   content: [
  //     "Enable users to send messages from websites to designated mobile numbers.",
  //     "Showcased versatility in developing cross-platform communication solutions.",
  //   ],
  //   link: "https://github.com/vipulkumar4321?tab=repositories",
  //   img: defaultImg,
  // },
  // {
  //   title: "Blog",
  //   tech: ["Node.js", "Express", "JavaScript", "MongoDB", "Semantic UI", "AWS"],
  //   content: [
  //     "Designed and developed a fully customizable cross-platform blog website from scratch",
  //     "Demonstrated expertise in front-end and back-end development and deployment on cloud platforms.",
  //   ],
  //   link: "https://github.com/vipulkumar4321?tab=repositories",
  //   img: defaultImg,
  // },
  /* {
    title: "OCR Model",
    tech: ["Node.js", "Express", "AWS"],
    content: [
      "Built an OCR model using Node.js, Express, HTML, and CSS to accurately extract text from images.",
      "Ensured accessibility and ease-of-use by allowing users to effortlessly process images and retrieve extracted text directly from the browser.",
    ],
    link: "https://github.com/vipulkumar4321/OCRmodel",
    img: defaultImg,
  }, */
];

export const skills = [
  {
    name: "Languages",
    data: [
      { skill: "C Programming", logo: require("../src/assets/icons/clang.svg").default },
      {
        skill: "JavaScript",
        logo: require("../src/assets/icons/javascript.svg").default,
      },
      {
        skill: "C++",
        logo: require("../src/assets/icons/cpp.svg").default,
      },
      {
        skill: "Python",
        logo: require("../src/assets/icons/python.svg").default,
      },
    ],
  },
  {
    name: "Front-End",
    data: [
      { skill: "HTML", logo: require("../src/assets/icons/html.svg").default },
      { skill: "CSS", logo: require("../src/assets/icons/css.svg").default },
      {
        skill: "React",
        logo: require("../src/assets/icons/react.svg").default,
      },
      /* {
        skill: "Material UI",
        logo: require("../src/assets/icons/material_ui.svg").default,
      }, */
      {
        skill: "Tailwind",
        logo: require("../src/assets/icons/tailwind.svg").default,
      },
      /* {
        skill: "Bootstrap",
        logo: require("../src/assets/icons/bootstrap.svg").default,
      }, */
    ],
  },
  {
    name: "Back-End",
    data: [
      {
        skill: "Node JS",
        logo: require("../src/assets/icons/node_js.svg").default,
      },
      {
        skill: "Express",
        logo: require("../src/assets/icons/express.svg").default,
      },
      {
        skill: "Flask",
        logo: require("../src/assets/icons/flask.svg").default,
      },
    ],
  },
  {
    name: "Database",
    data: [
      {
        skill: "MySQL",
        logo: require("../src/assets/icons/mysql.svg").default,
      },
      {
        skill: "MongoDB",
        logo: require("../src/assets/icons/mongodb.svg").default,
      },
    ],
  },
  {
    name: "Tools",
    data: [
      {
        skill: "VS Code",
        logo: require("../src/assets/icons/vscode.svg").default,
      },
      /* {
        skill: "Nginx",
        logo: require("../src/assets/icons/nginx.svg").default,
      },
      {
        skill: "Gunicorn",
        logo: require("../src/assets/icons/gunicorn.svg").default,
      }, */
      {
        skill: "Git/Github",
        logo: require("../src/assets/icons/git.svg").default,
      },
    ],
  },
  /* {
    name: "Cloud",
    data: [
      { skill: "AWS", logo: require("../src/assets/icons/aws.svg").default },
      {
        skill: "Azure",
        logo: require("../src/assets/icons/azure.svg").default,
      },
    ],
  },
  {
    name: "Technologies",
    data: [
      {
        skill: "Backstage.io",
        logo: require("../src/assets/icons/backstage.svg").default,
      },
      {
        skill: "Blockchain",
        logo: require("../src/assets/icons/blockchain.svg").default,
      },
    ],
  }, */
];
