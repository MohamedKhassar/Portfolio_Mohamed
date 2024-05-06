"use client"
import { Home, MailCheck, PanelsTopLeft, UserRoundSearch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Tooltip from './Tooltip'
import { ModeToggle } from './ModeToggle'
import { motion } from "framer-motion"
const NavBar = () => {
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
            <div className='z-50 flex items-center shadow-md hover:shadow-lg duration-200 w-fit px-8 py-2 gap-x-10 rounded-full lg:fixed lg:bottom-10 backdrop-blur-md shadow-sky-700  hover:shadow-sky-700 dark:text-white'>
                <div>
                    <Tooltip text="home">
                        <Link href={"/"} data-tooltip-target="tooltip-default">
                            <Home />
                        </Link>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip text="about me">
                        <Link href={"/about-me"}>
                            <UserRoundSearch />
                        </Link>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip text="projects">
                        <Link href={"/projects"}>
                            <PanelsTopLeft />
                        </Link>
                    </Tooltip>
                </div>
                <div>
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
