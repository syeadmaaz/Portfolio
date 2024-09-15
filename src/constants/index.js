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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  nazareth_logo,
  laloo_logo,
  smit_logo,
  bsc,
  lenskart,
  edufuse,
  ecpl,
  cyber,
  iit,
  Abhinav,
  Amrit,
  Shashwat
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "internship",
    title: "Internship",
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
    title: "Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SQL Developer",
    icon: creator,
  },
];


const educations = [
  {
    institute_name: "Sikkim Manipal Institute Of Technology",
    program: "B.Tech",
    grade: "9.2 CGPA",
    icon: smit_logo,
    iconBg: "#E6DEDD",
    date: "July 2019 - July 2023",
  },
  {
    institute_name: "Laloo Mandal College",
    program: "Intermediate",
    grade: "77.4 %",
    icon: laloo_logo,
    iconBg: "#383E56",
    date: "May 2017 - April 2019",
  },
  {
    institute_name: "Nazareth Academy",
    program: "Matriculation",
    grade: "8.8 CGPA",
    icon: nazareth_logo,
    iconBg: "#E6DEDD",
    date: "Apr 2004 - April 2016",
  },
];

const experiences = [
  {
    company_name: "Boston Scientific",
    icon: bsc,
    iconBg: "#E6DEDD",
    roles: [
      {
        title: "Software Developer",
        team: "PDD",
        date: "Jan 2024 - Present",
        points: [
          "Automated data sharing via GDSN, cutting manual effort by 40% and enabling real-time updates across data pools.",
          "Integrated Rest API using .NET framework to fetch, process, and store supply chain data in DB tables.",
          "Developed the MDSAP system, enabling multi-jurisdictional audits and reducing audit cycle time.",
          "Resolve bugs in stored procedures, views and other DB logic, ensuring smooth operations and improving system reliability."
        ],
      },
      {
        title: "Software Developer",
        team: "PLM",
        date: "July 2023 - March 2024",
        points: [
          "Worked on Windchill modules during its upgrade as part of the PLM Team.",
          "Migrated over 30+ Cognos reports to Jasper Reports, boosting execution speed by 25% and cutting operational costs.",
          "Performed formal testing for Windchill 12 upgrade, resolving bugs and boosting system stability by 20%",
        ],
      },
    ],
  },
];


const internships = [
  {
    title: "Software Developer Intern",
    company_name: "Boston Scientific",
    icon: bsc,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Code Migration: Code Migration from Cognos to Jasper Reports for Windchill 12, enhancing business intelligence.",
      "Data Automation: Built Alteryx workflows for automated Oracle to Snowflake data extraction.",
      "Dashboard Design: Created Tableau dashboards for impactful data visualization."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Lenskart",
    icon: lenskart,
    iconBg: "#383E56",
    date: "Oct 2022 - March 2022",
    points: [
      "Aqualens Saathi App: Developed using React Native; enabled SEs to manage stores, track orders, and access sales insights.",
      "Aqualens B2B PDP Design: Created a React JS product detail page featuring different functionalies.",
      "The main objective was to transition from Shopify to a standalone solution."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Edufuse Pvt Ltd",
    icon: edufuse,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - May 2022",
    points: [
      "Led the TransTEG Project front-end team consisting of 6 developers.",
      "Designed a dynamic website and native app to automate work updates from construction sites.",
      "Implemented Google Maps for planning sewage pipeline construction.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "ElectroCurie Tech Pvt Ltd",
    icon: ecpl,
    iconBg: "#383E56",
    date: "Sep 2021 - Jan 2022",
    points: [
      "Collaborated with IIT Patna to develop the IIT Patna Academic Portal.",
      "Built reusable REST APIs with Node.js and Express.js, and UI components with React.js.",
      "Managed database operations with PostgreSQL and used Sequelize ORM for seamless application-database integration, improving data handling efficiency."
    ],
  },
  {
    title: "Cyber Security Intern",
    company_name: "Gurugram Police",
    icon: cyber,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - July 2021",
    points: [
      "Attended Cyber Security Summer Internship conducted by Gurugram Police.",
      "Learned about Ransomware, Email Crime, Mobile Security, Website Hacking, Bug Bounty etc.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "IIT Patna",
    icon: iit,
    iconBg: "#383E56",
    date: "Dec 2020 - July 2021",
    points: [
      "USB Drive with NTFS and FAT-16/FAT-32 file system analysis.",
      "Data Recovery Using different tools.",
    ],
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const testimonials = [
  {
    testimonial:
      "Working with Maaz was a smooth experience—efficient, practical, and always focused on delivering results.",
    name: "Abhinav Trivedi",
    designation: "SDE",
    company: "C3i Hub",
    image: Abhinav,
  },
  {
    testimonial:
      "Maaz brings a solid skill set and a collaborative spirit to the team. Great to work with on complex projects.",
    name: "Amrit Shukla",
    designation: "SDE",
    company: "NRI Fintech",
    image: Amrit,
  },
  {
    testimonial:
      "Maaz is a effective & reliable developer who consistently meets deadlines and tackles challenges head-on.",
    name: "Shashwat Shrivastav",
    designation: "SDE",
    company: "KeySight Technologoies",
    image: Shashwat,
  },
];


const Projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  educations,
  experiences,
  internships,
  testimonials,
  Projects,
};
