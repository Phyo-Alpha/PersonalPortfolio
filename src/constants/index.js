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
  mongodb,
  git,
  figma,
  docker,
  threejs,
  python,
  django,
  Admindashboard,
  SocialMediaClone,
  real_estate,
  CinemaManagement,
  Evently,
  studio20,
  syl,
  spl,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
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

const experiences = [
  {
    title: "Front end Developer",
    company_name: "Studio20",
    icon: studio20,
    iconBg: "#383E56",
    date: `Apr 2024 – Present • 6 months`,
    points: [
      "Developed full-stack websites and application for notable company and organizations such as FAS and CKP",
      "Boosted web traffic to SYL by 11% by developing and implementing various features in SYL, which include League Fixtures and Standings Tab, Announcement Section, Academy Accreditation System (AAS) pages and Blog using WordPress PHP",
      "Implemented enterprise level financial transaction app for CKP Partner group by leveraging latest technologies in web development such as cross-platform development, server-side rendering, etc",
      "Implemented tech solutions such as Google Analytics and Ads to websites such as Syspex to help with    gathering data for customer segmentation.",
      "Designed and Created UI components and business logics in websites such as SPL, Ckpartner",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Singapore Youth Leagues (SYL)",
    description:
      "Web application that provides a platform to views the current standings, fixtures, and match results of Singapore's youth leagues. It was built using wordpress PHP. I added most of the new features to the website such as League Fixtures and Standings Tab, Announcement Section, Academy Accreditation System (AAS) pages and Blog using WordPress PHP.",
    tags: [
      {
        name: "Wordpress PHP",
        color: "pink-text-gradient",
      },
    ],
    image: syl,
    source_code_link: "https://syl.sg",
  },
  {
    name: "Singapore Premier Leagues (SPL)",
    description:
      "Web application that provides a platform to views the current standings, fixtures, and match results of Singapore's premier. I designed and created the UI components and business logics for fixtures and standings tab for the website.",
    tags: [
      {
        name: "Wordpress PHP",
        color: "pink-text-gradient",
      },
    ],
    image: spl,
    source_code_link: "https://spl.sg",
  },
  {
    name: "Cinema Management System",
    description:
      "Web application where users can book tickets to watch their favourites movies, as well as admin dashboard to manage the website and manager can manage the movies and shows.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
    ],
    image: CinemaManagement,
    source_code_link: "https://github.com/Phyo-Alpha/CinemaBookingSystem",
  },
  {
    name: "Social Media App",
    description:
      "A simple social media app that allows users to post their thoughts and share their likes, comments, and follows other users. This app is built with Appwrite, a backend as a service platform.",
    tags: [
      {
        name: "React-Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: SocialMediaClone,
    source_code_link: "https://github.com/Phyo-Alpha/Social-Media-Clone",
  },
  {
    name: "Event Organizer Application",
    description:
      "Web-based event organization and management application that allows user to create, manage and monitor the events. Based using React, TypeScript, and Tailwind CSS as well as Shadcn for UI components.",
    tags: [
      {
        name: "React-Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Next js",
        color: "pink-text-gradient",
      },
      {
        name: "MERN stack",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
    ],
    image: Evently,
    source_code_link: "https://github.com/Phyo-Alpha/Event-organize-platform",
  },
];

export { services, technologies, experiences, testimonials, projects };
