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
  threejs,
  python,
  django,
  Admindashboard,
  SocialMediaClone,
  analysis,
  kaggle,
  social,
  dashboard,
  real_estate,
  cinema,
  CinemaManagement
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
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analysist",
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
    title: "Cinema Management Sytem",
    company_name: "Full Stack Application",
    icon: cinema,
    iconBg: "#383E56",
    date: "Apr 2023 - May 2023",
    points: [
      "Developed a cinema web application where users can book tickets to watch their favourites movies.",
      "Implemented a sepearate tabs for admin and manager to manage the website.",
      "Tech-Stack : HTML5, CSS3, Javascript, Django and SQLite"
    ],
  },
  {
    title: "Reports on Sea level rising",
    company_name: "Data Visualization",
    icon: analysis,
    iconBg: "#383E56",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Created a narrative on rising sea level to warm the dangers of flooding in coastal areas.",
      "Visualized the threat of flooding in before and aftermath pictures of countries that are most affected by it.",
      "Explore the dangers of rising sea levels by using various datasets related to sea level rise.",
      "Created Extensive Visualizations of sea level trend and its relation to greenhouse gas emissions.",
      "Link : https://phyyyopyaesome.wixsite.com/sealevelaware."
    ],
  },
  {
    title: "House Price Prediction",
    company_name: "Kaggle Project",
    icon: kaggle,
    iconBg: "#E6DEDD",
    date: "Sep 2023",
    points: [
      "Handled missing data, encoded object datatype, and scaled features for data preprocessing.",
      "Conducted in-depth analysis of house prices using Python and pandas.",
      "Used scatter plots for outlier detection and distribution charts for price trend analysis.",
      "Developed an XGBoost regression model for house price prediction.",
      "https://www.kaggle.com/code/theobsidiangaming",
    ],
  },
  {
    title: "Social Media Application",
    company_name: "Full Stack Application",
    icon: social,
    iconBg: "#383E56",
    date: "Oct 2023",
    points: [
      "Developed a social media application using React.js, TypeScript, and Tailwind CSS.",
      "Uses Appwrite, a backend service, to handle user authentication, data storage, and real-time communication.",
      "Implemented responsive design for all devices and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "Enterprise Admin Dashboard",
    company_name: "Dashboard Application",
    icon: dashboard,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed a web-based platform that allows the enterprises development team to keep track off contracts, tasks using kanban board as well as monitor the events using in-app events planner and tracker.",
      "Implemented Using Refine Framework which allows developer to easily develop B2B admin dashboard.",
      "Build using React, TypeScript, and Tailwind CSS.",
      "Integrated GraphQL for efficient data fetching and manipulation.",
    ],
  },
  {
    title: "Event Organizer Application",
    company_name: "Event Management Application",
    icon: dashboard,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed a web-based event organization and management application that allows user to create, manage and monitor the events.",
      "Based using React, TypeScript, and Tailwind CSS as well as Shadcn for UI components.",
      "Implemented using MERN stack with Next.js for server side rendering.",
      "Use Clerk for user authentication and authorization.",
    ],
  }
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
    name: "Enterprise Admin Dashboard",
    description:
      "Web-based platform that allows the enterprises development team to keep track off contracts, tasks using kanban board as well as monitor the events using in-app events planner and tracker..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Refine framework",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: Admindashboard,
    source_code_link: "https://github.com/Phyo-Alpha/Admin-Dashboard",
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
    name: "House Price Prediction Model",
    description:
      "A machine learning model that predicts house prices using XGBoost regression model. This project is part of the Kaggle open-sourced competition.",
    tags: [
      {
        name: "Numpy",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Scipy",
        color: "blue-text-gradient",
      },
      {
        name: "Seaborn",
        color: "green-text-gradient",
      },
      {
        name: "XGBoost",
        color: "pink-text-gradient",
      },
    ],
    image: real_estate,
    source_code_link: "https://www.kaggle.com/code/theobsidiangaming/house-price-predictions-with-eda",
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
    image: SocialMediaClone,
    source_code_link: "https://github.com/Phyo-Alpha/Social-Media-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
