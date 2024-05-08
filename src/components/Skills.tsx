"use client"
import { BrainCircuit, CodeIcon, Paintbrush } from 'lucide-react'
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import useInView from '@/hooks/useInView'
const Skills = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const isVisible = useInView(divRef);
    const languages = [
        {
            title: "HTML",
            icon: "https://img.icons8.com/color/48/000000/html-5.png",
            progress: 90
        },
        {
            title: "CSS",
            icon: "https://img.icons8.com/color/48/000000/css3.png",
            progress: 80
        },
        {
            title: "TailwindCss",
            icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
            progress: 80
        },
        {
            title: "Bootstrap",
            icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
            progress: 80
        },
        {
            title: "JavaScript",
            icon: "https://img.icons8.com/color/48/000000/javascript.png",
            progress: 70
        },
        {
            title: "TypeScript",
            icon: "https://img.icons8.com/color/48/000000/typescript.png",
            progress: 55
        },
    ]
    const frameworks = [
        {
            title: "ReactJS",
            icon: "https://img.icons8.com/color/48/000000/react-native.png",
            progress: 70
        },
        {
            title: "NextJS",
            icon: "https://img.icons8.com/color/48/000000/nextjs.png",
            progress: 50
        },
        {
            title: "NodeJS",
            icon: "https://img.icons8.com/color/48/000000/nodejs.png",
            progress: 60
        },
        {
            title: "ExpressJS",
            icon: "https://img.icons8.com/color/48/000000/express-js.png",
            progress: 80
        }
    ]

    const tools = [
        {
            title: "git",
            icon: "https://img.icons8.com/color/48/000000/git.png",
            progress: 80
        },
        {
            title: "github",
            icon: "https://img.icons8.com/color/48/000000/github.png",
            progress: 80
        },
        {
            title: "npm",
            icon: "https://img.icons8.com/color/48/000000/npm.png",
            progress: 90
        }
    ]

    return (
        <div id='skills' className='bg-[#122E43] py-20 container rounded-md w-full h-fit flex justify-center flex-col items-center gap-10' ref={divRef}>
            <h1 className='text-white dark:text-black text-4xl capitalize text-center font-medium'>my <span className='text-sky-700'>skills</span></h1>
            {isVisible &&
                <div className='text-white dark:text-sky-700 w-full grid lg:grid-cols-2 gap-5 content-center'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className='grid gap-4'>
                        <h1 className='flex lg:gap-x-4 gap-x-2 capitalize items-center text-sky-700 font-semibold lg:text-xl text-lg'>languages and styling <CodeIcon color='#0369A1' strokeWidth={3.5} /> <Paintbrush color='#0369A1' /> </h1>
                        <div className='border-2 border-sky-700 w-full p-5 rounded-md grid gap-5'>
                            {languages.map(lg => (
                                <div className='grid place-items-start gap-y-4 items-center'>
                                    <div className='flex items-center gap-x-5'>
                                        <img src={lg.icon} alt={lg.title} className='w-10 h-10 rounded-full' />
                                        <h1 className='text-lg capitalize'>{lg.title}</h1>
                                    </div>
                                    <span className='flex items-center w-full h-1 p-1 border border-sky-700 rounded-md'>
                                        <motion.div initial={{ width: 0 }} animate={{ width: `${lg.progress}%` }} transition={{ duration: 1, ease: "easeInOut" }} className='bg-sky-800 h-1 rounded-md' >

                                        </motion.div>
                                    </span>
                                    <span className='place-self-end'>
                                        {lg.progress} %
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className='space-y-2'>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className='grid content-start gap-4'>
                            <h1 className='flex gap-x-4 capitalize items-center text-sky-700 font-semibold text-xl'>frameworks <BrainCircuit color='#0369A1' strokeWidth={3.5} /> </h1>
                            <div className='border-2 border-sky-700 w-full p-5 rounded-md grid gap-1'>
                                {frameworks.map(lg => (
                                    <div className='grid place-items-start gap-y-1 items-center'>
                                        <div className='flex items-center gap-x-5'>
                                            <img src={lg.icon} alt={lg.title} className='w-10 h-10 rounded-full' />
                                            <h1 className='text-lg capitalize'>{lg.title}</h1>
                                        </div>
                                        <span className='flex items-center w-full h-1 p-1 border border-sky-700 rounded-md'>
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${lg.progress}%` }} transition={{ duration: 1, ease: "easeInOut" }} className='bg-sky-800 h-1 rounded-md' >

                                            </motion.div>
                                        </span>
                                        <span className='place-self-end'>
                                            {lg.progress} %
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className='grid content-start gap-4'>
                            <h1 className='flex gap-x-4 capitalize items-center text-sky-700 font-semibold text-xl'>tools <BrainCircuit color='#0369A1' strokeWidth={3.5} /> </h1>
                            <div className='border-2 border-sky-700 w-full p-5 rounded-md grid gap-1'>
                                {tools.map(lg => (
                                    <div className='grid place-items-start gap-y-3 items-center'>
                                        <div className='flex items-center gap-x-5'>
                                            <img src={lg.icon} alt={lg.title} className='w-10 h-10 rounded-full' />
                                            <h1 className='text-lg capitalize'>{lg.title}</h1>
                                        </div>
                                        <span className='flex items-center w-full h-1 p-1 border border-sky-700 rounded-md'>
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${lg.progress}%` }} transition={{ duration: 1, ease: "easeInOut" }} className='bg-sky-800 h-1 rounded-md' >

                                            </motion.div>
                                        </span>
                                        <span className='place-self-end'>
                                            {lg.progress} %
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Skills
