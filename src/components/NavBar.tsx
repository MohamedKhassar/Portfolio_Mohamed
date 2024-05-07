"use client"
import { Home, MailCheck, PanelsTopLeft, UserRoundSearch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Tooltip from './ui/Tooltip'
import { ModeToggle } from './ui/ModeToggle'
import { motion } from "framer-motion"
const NavBar = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <motion.nav className='m-3 flex justify-center w-full items-center'
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut"
            }}
        >
            <div className='z-50 flex flex-col items-center shadow-md hover:shadow-lg duration-200 w-fit lg:py-8 p-5 lg:px-2 px-1 lg:gap-y-10 gap-y-5 rounded-full fixed bottom-56 lg:right-10 right-5 backdrop-blur-md shadow-sky-700  hover:shadow-sky-700 dark:text-white'>
                <div className='cursor-pointer'>
                    <Tooltip text="home">
                        <Home onClick={() => scrollToSection("home")} />
                    </Tooltip>
                </div>
                <div className='cursor-pointer'>
                    <Tooltip text="about me">
                        <UserRoundSearch onClick={() => scrollToSection("about")} />
                    </Tooltip>
                </div>
                <div className='cursor-pointer'>
                    <Tooltip text="projects">
                        <Link href={"/projects"}>
                            <PanelsTopLeft />
                        </Link>
                    </Tooltip>
                </div>
                <div className='cursor-pointer'>
                    <Tooltip text="contact us">
                        <Link href={"/contact-us"}>
                            <MailCheck />
                        </Link>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip text="Mode">
                        <ModeToggle />
                    </Tooltip>
                </div>
            </div>
        </motion.nav>
    )
}

export default NavBar
