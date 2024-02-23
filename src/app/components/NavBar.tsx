import { Home, MailCheck, PanelsTopLeft, UserRoundSearch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex justify-center w-full items-center'>
            <div className='bg-black/10 backdrop-blur-lg flex shadow-md hover:shadow-lg duration-300 w-fit px-8 py-2 gap-x-10 rounded-full fixed bottom-10 shadow-white  hover:shadow-white bd'>
                <div>
                    <Link href={"/"} data-tooltip-target="tooltip-default">
                        <Home />
                    </Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <UserRoundSearch />
                    </Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <PanelsTopLeft />
                    </Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <MailCheck />
                    </Link>
                </div>

            </div>
        </nav >
    )
}

export default NavBar
