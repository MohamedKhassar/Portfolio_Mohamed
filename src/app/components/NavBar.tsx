import { Home, MailCheck, PanelsTopLeft, UserRoundSearch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Tooltip from './Tooltip'
import DarkMode from './DarkMode'

const NavBar = () => {
    return (
        <nav className='flex justify-center w-full items-center'>
            <div className='flex shadow-md hover:shadow-lg duration-200 w-fit px-8 py-2 gap-x-10 rounded-full fixed bottom-10 shadow-sky-700  hover:shadow-sky-700 dark:text-white'>
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
            </div>
        </nav >
    )
}

export default NavBar
