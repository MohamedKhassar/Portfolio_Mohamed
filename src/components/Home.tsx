"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ArrowDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Flag from 'react-world-flags'
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Mohamed_bg from "../../public/assets/imgs/Mohamed.png"

const Home = () => {
    return (
        <motion.div id='home' className="grid lg:grid-cols-2 gap-y-16 place-items-center px-8 w-full h-[90vh]"
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
            <div className='grid lg:gap-7 gap-4 place-items-start'>
                <div className='grid grid-rows-2 gap-y-3'>
                    <h1 className='dark:text-white text-2xl lg:text-4xl capitalize'>hi there 👋 ,<span className='text-sky-700 font-medium lg:font-normal'>i'm mohamed khassar</span></h1>
                    <div className='w-fit h-fit flex items-center'>
                        <h1 className='w-fit text-2xl text-blue-500 font-medium capitalize'><Typewriter typeSpeed={130} loop words={["full stack developer", "Mern stack developer"]} /></h1>
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            className={cn(
                                "inline-block rounded-sm w-1 h-6 bg-blue-500"
                            )}
                        ></motion.span>
                    </div>
                </div>
                <p className='lg:w-2/3 font-medium dark:text-gray-300 text-gray-800'>
                    Passionate MERN/Full Stack Developer adept at crafting robust and scalable web applications. With a keen eye for detail and a commitment to clean, efficient code, I specialize in creating dynamic user experiences that elevate brands and exceed expectations. Continuously exploring new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape, I bring innovation and expertise to every project I undertake.</p>
                <DropdownMenu>
                    <DropdownMenuTrigger className='hover:text-white dark:hover:text-black capitalize border-2 outline-none border-sky-700 p-3 rounded-md hover:bg-sky-700 active:bg-sky-700 duration-300 flex gap-x-3 items-center font-medium order-last'>download cv <ArrowDown className='animate-bounce' /> </DropdownMenuTrigger>
                    <DropdownMenuContent className='mt-3 w-[160px] bg-black/15 backdrop-blur-md p-2 rounded-md'>
                        <DropdownMenuItem className='flex gap-x-3 items-center hover:cursor-pointer p-3 outline-none hover:bg-sky-700 rounded-md'>Français <Flag code='fr' height="20" width="20" /></DropdownMenuItem>
                        <DropdownMenuItem className='flex gap-x-3 items-center hover:cursor-pointer p-3 outline-none hover:bg-sky-700 rounded-md'>English <Flag code='us' height="20" width="20" /></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <motion.div
                initial={{
                    translateY: 0
                }}
                animate={{
                    translateY: 12
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className='order-first lg:order-none'
            >
                <Image src={Mohamed_bg} className='w-96 rounded-full backdrop-blur-md bg-sky-700/15 shadow-lg shadow-sky-700/75' alt='Mohamed' />
            </motion.div>
        </motion.div>
    )
}

export default Home
