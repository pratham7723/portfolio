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
    adobephotoshop,
    food,
    coreldraw,
    Figma,
    Canva,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: mui,
        name: "Material-UI",
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
    {
        imageUrl: adobephotoshop,
        name: "Adobe Photoshop",
        type: "Graphicdesigning",
    },
    {
        imageUrl: coreldraw,
        name: "Corel Draw",
        type: "Graphicdesigning",
    },
    {
        imageUrl: Figma,
        name: "Figma ",
        type: "UIUX",
    },
    {
        imageUrl: Canva,
        name: "Canva ",
        type: "UIUX",
    },


];

export const educations = [
    {
        title: "Bachelor In Computer Applications",
        college_name: "Marwadi University",
        icon: heritage,
        iconBg: "#EBB866",
        date: "May 2021 - June 2024",
        points: [
            "Developed a solid understanding of computer architecture, exploring how systems are engineered for optimal performance.",
            "Gained practical, hands-on experience through extensive labs in Operating Systems and programming, bridging theory with real-world application.",
            "Achieved academic excellence with a CGPA of 8.4/10, reflecting consistent dedication and a passion for learning."
        ]
    },
    {
        title: "Masters In Computer Applications",
        college_name: "Symbiosis Institute of Computer Studies and Research",
        icon: sicsr,
        iconBg: "#FFADB0",
        date: "June 2024 - (appearing)",
        points: [
            "Acquiring expertise in advanced programming principles to design scalable and high-efficiency software solutions."
,
            "Deepening understanding of system architecture, database technologies, and cloud-based platforms.",
            "Building practical experience and technical proficiency through immersive, hands-on project work."
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
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'AR Based Restaurant Management System',
        description: 'An Augmented Reality (AR)-based application designed to elevate the dining experience by allowing users to visualize menu items in 3D before placing an order. By scanning a QR code or a designated marker on the table or menu using a smartphone or tablet, users can view lifelike 3D models of dishes, complete with animation, plating details, portion sizes, and dietary labels. This immersive visual aid helps customers make informed and satisfying choices.',
        link: 'https://github.com/pratham7723/foodqr',
    },
    {
    iconUrl: pricewise, // Replace with a suitable icon reference
    theme: 'btn-back-blue',
    name: 'PDF Bulk Sender',
    description: 'An app designed for businesses to efficiently manage and send multiple PDFs. Instead of selecting files manually each time, users can simply choose a category and send all associated PDFs directly via WhatsApp in one click.',
    link: 'https://github.com/pratham7723/sharemypdf'
},
    {
        iconUrl: zentry,
        theme: 'btn-back-pink',
        name: 'Fake News Detection',
        description: 'Developed a App to Detect Fake News which detects news is fake or not with confidenece score made in Python.',
        link: 'https://github.com/pratham7723/news',
    },
    {
        iconUrl: lock,
        theme: 'btn-back-green',
        name: 'Gifting Website',
        description: 'A Gifting Website Created, where you can order gifts for your loved ones and get it delivered to their doorstep.',
        link: 'https://github.com/pratham7723/shopycloud',
    },

    
];