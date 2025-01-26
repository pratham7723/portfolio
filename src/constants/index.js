import {
    meta,
    shopify,
    starbucks,
    heritage,
    tesla,
    sicsr,
} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    zentry,
    lock,
    music,
    shirt,
    food,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const educations = [
    {
        title: "Bachelor In Computer Applications",
        college_name: "The Heritage Academy (MAKAUT)",
        icon: heritage,
        iconBg: "#EBB866",
        date: "May 2021 - June 2024",
        points: [
            "Learned the basics of computer architecture and how systems are designed to work efficiently.",
            "Discovered the power of Object-Oriented Programming and how to solve problems using Data Structures and Algorithms.",
            "Worked on practical labs for Operating Systems and programming, which helped me gain hands-on experience."
        ]
    },
    {
        title: "Masters In Computer Applications",
        college_name: "SICSR",
        icon: sicsr,
        iconBg: "#FFADB0",
        date: "June 2024 - (appearing)",
        points: [
            "Learning advanced programming concepts to build scalable and efficient software.",
            "Gaining deeper insights into system design, database management, and cloud computing.",
            "Developing practical skills through hands-on projects."
        ]
    },
    {
        title: "Meta Back-End Developer",
        college_name: "Coursera (Meta)",
        icon: meta,
        iconBg: "#C4D9FF",
        date: "Nov 2024 - (appearing)",
        points: [
            "Gain the technical skills required to become a qualified back-end developer.",
            "Learn to use programming systems including Python Syntax, Linux commands, Git, SQL, Version Control, Cloud Hosting, APIs, JSON, XML and more.",
            "Build a portfolio using your new skills and begin interview preparation including tips for what to expect when interviewing for engineering jobs.",
            "Learn in-demand programming skills and how to confidently use code to solve problems."
        ]
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: zentry,
        theme: 'btn-back-pink',
        name: 'Zentry Clone',
        description: 'Developed a clone of the popular awwwards winning website, named Zentry, using Vite+React, TailwindCSS, GSAP.',
        link: 'https://github.com/SwapnilBhattacharya05/Awwwards_Website_Clone',
    },
    {
        iconUrl: lock,
        theme: 'btn-back-green',
        name: 'Passwords Manager',
        description: 'This password manager, developed using Vite+React, allows users to securely store, edit, delete, and save passwords locally.',
        link: 'https://github.com/SwapnilBhattacharya05/password-manager',
    },
    {
        iconUrl: music,
        theme: 'btn-back-blue',
        name: 'Music App',
        description: 'Music App Created using basic HTML CSS JS. Allows to seamlessly play songs across devices. Intuitive controls for play, pause, skip, and volume adjustment.',
        link: 'https://github.com/SwapnilBhattacharya05/media-player',
    },
    {
        iconUrl: shirt,
        theme: 'btn-back-red',
        name: 'Threejs Shirt Customizer',
        description: 'A web application that allows users to customize and design their own 3D shirts using Three.js, Download the customized shirt and share it with others.',
        link: 'https://github.com/SwapnilBhattacharya05/threejs_shirt_client',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Website',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/SwapnilBhattacharya05/Real-Estate-Website',
    },
    {
        iconUrl: food,
        theme: 'btn-back-yellow',
        name: 'Food Ordering Website',
        description: 'A Food Ordering Website Created using MERN for major project, where you can order food and advertise your restaurant.',
        link: 'https://github.com/SwapnilBhattacharya05/Food-Ordering-Website',
    }
];