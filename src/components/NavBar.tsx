"use client"
import React, { useState } from 'react'
import { Menu, MessageSquareText, X } from "lucide-react"
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
const NavBar = () => {
    const [isHover, setIsHover] = useState(false)
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className='z-50 py-3 shadow-2xl shadow-[#6c06f2]/20 w-full sticky top-0 flex lg:justify-between justify-center lg:gap-0 gap-10 items-center px-14 font-Poppins bg-white'>
            <h1 className='capitalize font-semibold text-2xl flex items-center text-nowrap mx-3'>mohamed khassar<span className='text-5xl font-bold text-[#6e06f2]'>.</span></h1>
            <button className={cn('lg:hidden absolute right-5 z-20 w-fit',
                isOpened && "top-20"
            )} onClick={() => setIsOpened(!isOpened)}>
                {!isOpened ? <Menu size={28} stroke='#6c06f2' /> : <X size={28} stroke='white' />}
            </button>
            <motion.ul className={cn('flex lg:flex-row lg:static top-16 absolute justify-center items-center lg:bg-transparent bg-[#6c06f2]/50 backdrop-blur-md text-white lg:text-center gap-20 font-semibold lg:w-fit w-full right-0 lg:h-fit h-screen lg:text-[#6F7589] font-Poppins text-lg capitalize duration-300',
                isOpened ? "flex-col navbar-animation" : "lg:flex hidden"
            )}>
                <li className="hover:text-[#6e06f2] duration-300 cursor-pointer">home</li>
                <li className="hover:text-[#6e06f2] duration-300 cursor-pointer">projects</li>
                <li className="hover:text-[#6e06f2] duration-300 cursor-pointer">education</li>
                <li className="hover:text-[#6e06f2] duration-300 cursor-pointer">skills</li>
                <li className="lg:hidden"><button onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='bg-[#24262F] duration-1000 hover:bg-[#6e06f2] relative p-3 rounded-full flex flex-col items-center'>
                    <MessageSquareText stroke='white' size={20} />
                    <span className={cn('bg-[#6c06f29a] py-2 px-3 absolute top-12 rounded-md font-Poppins capitalize text-white transition duration-300',
                        !isHover && "opacity-0"
                    )}>contact</span>
                </button></li>
            </motion.ul>
            <button onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='bg-[#24262F] duration-1000 hover:bg-[#6e06f2] relative p-3 rounded-full lg:flex hidden flex-col items-center  border border-white'>
                <MessageSquareText stroke='white' size={20} />
                <span className={cn('bg-[#6c06f29a] py-2 px-3 absolute top-12 rounded-md font-Poppins capitalize text-white transition duration-300',
                    !isHover && "opacity-0"
                )}>contact</span>
            </button>
        </div >
    )
}

export default NavBar