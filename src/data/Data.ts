import rst from "/public/assets/imgs/rst.png"
import quiz from "/public/assets/imgs/quiz.png"
import pass from "/public/assets/imgs/pass.png"
import age from "/public/assets/imgs/age.png"
import task from "/public/assets/imgs/task.png"
import port from "/public/assets/imgs/port.png"
import todo from "/public/assets/imgs/todo.png"
import todoL from "/public/assets/imgs/todoL.png"
import nature from "/public/assets/imgs/nature.png"
import technologies from "./stack"

const generateId = () => Date.now() + Math.floor(Math.random() * 1000);

const projects = [
    {
        id: generateId(),
        title: "Todo-list",
        description: "A simple and user-friendly to-do list application allowing users to add, view, and manage tasks. Features include task input validation and a clean interface.",
        link: "https://to-do-med.netlify.app/",
        image: todo.src,
        stack: technologies.filter(tech => ["html", "css", "javascript"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/MohamedKhassar/To-Do-List-App_HTML_CSS_JS",
    },
    {
        id: generateId(),
        title: "age calculator",
        description: "An interactive age calculator where users input their birth date to calculate their age in years, months, and days. The interface is straightforward and easy to use.",
        link: "https://age-med.netlify.app/",
        image: age.src,
        stack: technologies.filter(tech => ["html", "css", "javascript"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/MohamedKhassar/Age-Calculator-HTML-CSS-JS",
    },
    {
        id: generateId(),
        title: "Pass-gen",
        description: "A versatile password generator allowing users to create secure passwords by selecting desired length and character types, including uppercase, lowercase, numbers, and symbols. The design is minimalistic and efficient.",
        link: "https://pass-gen-med.netlify.app/",
        image: pass.src,
        stack: technologies.filter(tech => ["html", "css", "javascript"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/MohamedKhassar/Password-Generator-HTML_CSS_JS",
    },
    {
        id: generateId(),
        title: "Quiz-App",
        description: "An engaging quiz application designed to test developers' knowledge with randomly generated questions. The interface is clean and user-friendly, making it easy to start and navigate through quizzes.",
        link: "https://quiz-med.netlify.app/",
        image: quiz.src,
        stack: technologies.filter(tech => ["html", "css", "javascript"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/MohamedKhassar/Quiz-App-HTML_CSS_JS",
    },
    {
        id: generateId(),
        title: "Task-Pulse",
        description: "Task Pulse is a project management app designed to help users organize, track, and collaborate on tasks. It features a clean and intuitive interface suitable for both development teams and independent professionals.",
        link: "https://task-pulse-rho.vercel.app/",
        image: task.src,
        stack: technologies.filter(tech => ["next.js", "tailwind css", "typescript", "mongodb"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/MohamedKhassar/TaskPulse",
    },
    {
        id: generateId(),
        title: "RSTKHASSAR",
        description: "RSTKASSAR is a visually appealing landing page for a restaurant. It features sections for the menu,greeting and reviews. The design is elegant and user-friendly, providing a seamless experience for visitors looking to explore the restaurant's offerings.",
        link: "https://rstkhassar.netlify.app/",
        image: rst.src,
        stack: technologies.filter(tech => ["react", "tailwind css", "typescript", "framer motion"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/MohamedKhassar/RSTKhassar-ReactJs",
    },
    {
        id: generateId(),
        title: "portfolio",
        description: "Mohamed Khassar's portfolio showcases my full-stack development skills, featuring projects like RSTKHASSAR, Task Pulse, Quiz App, Pass-gen, Age Calculator, and To-do List. The site includes sections on his skills, projects, and contact information, all presented in a clean, professional design.",
        link: "https://mohamed-khassar.vercel.app/",
        image: port.src,
        stack: technologies.filter(tech => ["next.js", "tailwind css", "typescript", "framer motion"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/MohamedKhassar/Portfolio_Mohamed",
    },
    {
        id: generateId(),
        title: "todo-list full-stack",
        description: "A simple and user-friendly to-do list application to practice Postgresql using PERN(Postgresql, ExpressJs, ReactJs, NodeJs) Stack",
        image: todoL.src,
        stack: technologies.filter(tech => ["react", "tailwind css", "typescript", "postgresql", "node.js", "express"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/MohamedKhassar/Todo-PERN-Stack",
    },
    {
        id: generateId(),
        title: "E-commerce",
        description: "Developed a user-friendly e-commerce platform with a team, featuring cash on delivery, responsive design, and efficient product management. My contributions included frontend work with Next.Js and backend integration using Node.Js and Express.Js.",
        image: nature.src,
        link: "https://www.naturemane.ma/",
        stack: technologies.filter(tech => ["next.js", "tailwind css", "javascript", "mongodb", "jwt", "postman", "node.js", "express"].includes(tech!.title.toLowerCase())),
    },
]

export default projects