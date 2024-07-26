import rst from "/public/assets/imgs/rst.png"
import quiz from "/public/assets/imgs/quiz.png"
import pass from "/public/assets/imgs/pass.png"
import age from "/public/assets/imgs/age.png"
import task from "/public/assets/imgs/task.png"
import technologies from "./stack"
const generateId = () => `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;


const projects = [
    {
        id: 1,
        title: "age calculator",
        description: "RSTKHASSAR is a web application for managing and organizing your task list, with features like task creation, deadline tracking, and priority levels.",
        link: "https://age-med.netlify.app/",
        image: age.src,
        stack: technologies.filter(tech => ["html", "css", "javascript"].includes(tech.title.toLowerCase()))
    },
    {
        id: 2,
        title: "Pass-gen",
        description: "RSTKHASSAR is a web application for managing and organizing your task list, with features like task creation, deadline tracking, and priority levels.",
        link: "https://pass-gen-med.netlify.app/",
        image: pass.src,
        stack: technologies.filter(tech => ["html", "css", "javascript"].includes(tech.title.toLowerCase()))
    },
    {
        id: 3,
        title: "Quiz-App",
        description: "RSTKHASSAR is a web application for managing and organizing your task list, with features like task creation, deadline tracking, and priority levels.",
        link: "https://quiz-med.netlify.app/",
        image: quiz.src,
        stack: technologies.filter(tech => ["html", "css", "javascript"].includes(tech.title.toLowerCase()))
    },
    {
        id: 4,
        title: "RSTKHASSAR",
        description: "RSTKHASSAR is a web application for managing and organizing your task list, with features like task creation, deadline tracking, and priority levels.",
        link: "https://rstkhassar.netlify.app/",
        image: rst.src,
        stack: technologies.filter(tech => ["react", "tailwind css", "typescript", "framer motion"].includes(tech.title.toLowerCase()))
    },
    {
        id: 5,
        title: "Task-Pulse",
        description: "RSTKHASSAR is a web application for managing and organizing your task list, with features like task creation, deadline tracking, and priority levels.",
        link: "https://task-pulse-rho.vercel.app/",
        image: task.src,
        stack: technologies.filter(tech => ["next.js", "tailwind css", "typescript", "mongodb"].includes(tech.title.toLowerCase()))
    },
]

export default projects