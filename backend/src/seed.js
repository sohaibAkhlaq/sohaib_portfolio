import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db.js';
import Portfolio from './models/Portfolio.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dummy data from earlier data.js, modified for Node.js object
const portfolioData = {
    profile: {
        name: "Sohaib Akhlaq",
        hero: {
            badge: "FAST NUCES ’28 • Software Engineering",
            titlePrefix: "Hi, I’m",
            titleAccent: "Sohaib Akhlaq",
            subtitleChips: ["C++", "Java", "Python", "MEAN Stack", "Core CS", "Software Quality"],
            description:
                "Software Engineering undergraduate focused on core fundamentals, clean design, and reliable delivery — building the skills needed for strong internships and entry-level roles."
        },
        quickSummary: [
            "Core CS-first approach (OOP, DSA, system thinking)",
            "MEAN stack exploration (Angular + Node/Express + MongoDB)",
            "Quality mindset (testing, tooling, clean code practices)"
        ],
        aboutParagraphs: [
            "I’m a 4th-semester Software Engineering student at FAST NUCES (Islamabad). I care about fundamentals first — writing clean, maintainable code and understanding how systems work under the hood.",
            "My primary languages are C++, Java, and Python. I regularly practice DSA and problem solving to improve speed, accuracy, and design thinking.",
            "Alongside CS, I’m building practical experience in MEAN stack development, UI/UX, and software quality workflows."
        ],
        focusPills: [
            { icon: "fa-solid fa-layer-group", label: "MEAN stack" },
            { icon: "fa-solid fa-diagram-project", label: "Data Structures & Algorithms" },
            { icon: "fa-solid fa-shield-halved", label: "Software Quality" },
            { icon: "fa-solid fa-gears", label: "System-level thinking" }
        ]
    },
    highlights: [
        {
            title: "Bug Busters — Winner",
            subtitle: "Coding competition",
            image: "assets/award-placeholder.svg",
            tag: "Achievement"
        },
        {
            title: "FAST NUCES (Islamabad)",
            subtitle: "BS Software Engineering • 2024–2028",
            image: "assets/course-placeholder.svg",
            tag: "Education"
        },
        {
            title: "DSA practice",
            subtitle: "Consistent problem solving on LeetCode",
            image: "assets/course-placeholder.svg",
            tag: "Growth",
            link: { label: "LeetCode profile", url: "https://leetcode.com/u/Sohaib_12/" }
        }
    ],
    careerFocus: [
        "Preparing for Software Engineering internships",
        "Backend & Full-Stack Development",
        "Core Computer Science roles",
        "Systems & program design",
        "Software Quality Assurance & testing"
    ],
    courses: [
        {
            title: "Add your course here",
            provider: "Coursera / Udemy / University",
            date: "YYYY",
            skills: ["Skill 1", "Skill 2", "Skill 3"],
            image: "assets/course-placeholder.svg",
            url: ""
        }
    ],
    achievements: [
        {
            title: "Bug Busters — Winner",
            subtitle: "Competition award",
            image: "assets/award-placeholder.svg",
            url: ""
        }
    ],
    education: [
        {
            degree: "BS Software Engineering",
            institution: "FAST NUCES",
            period: "Aug 2024 – May 2028",
            location: "Islamabad, Pakistan"
        },
        {
            degree: "Intermediate – Pre-Engineering",
            institution: "Fazaia Inter College (FIC)",
            period: "Aug 2022 – Jun 2024",
            location: "Rawalpindi, Pakistan"
        }
    ],
    techStack: [
        {
            title: "Programming Languages",
            icon: "fa-solid fa-code",
            items: [
                { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
                { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
                { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
                { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
                { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" }
            ]
        },
        {
            title: "MEAN Stack & Web",
            icon: "fa-solid fa-layer-group",
            items: [
                { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
                { name: "Angular", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },
                { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
                { name: "NPM", icon: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg" }
            ]
        },
        {
            title: "Quality & Testing Tools",
            icon: "fa-solid fa-shield-halved",
            items: [
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
                { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
                { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
                { name: "ESLint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" }
            ]
        },
        {
            title: "Development & Collaboration",
            icon: "fa-solid fa-screwdriver-wrench",
            items: [
                { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
                { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
                { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
                { name: "Visual Studio", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg" },
                { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" }
            ]
        }
    ],
    github: {
        username: "sohaibAkhlaq",
        profileUrl: "https://github.com/sohaibAkhlaq"
    },
    contact: {
        email: "sohaibikhlaq5@gmail.com",
        location: "Islamabad, Pakistan",
        links: {
            linkedin: "https://www.linkedin.com/in/sohaibakhlaq-fast",
            github: "https://github.com/sohaibAkhlaq",
            leetcode: "https://leetcode.com/u/Sohaib_12/",
            x: "https://x.com/Sohaib84346165"
        }
    }
};


const importData = async () => {
    try {
        await Portfolio.deleteMany();
        await Portfolio.create(portfolioData);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error with seed: ${error.message}`);
        process.exit(1);
    }
};

importData();
