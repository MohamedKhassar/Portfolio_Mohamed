"use client"
import Image from 'next/image'
import React from 'react'
import Mohamed_bg from "../../public/assets/imgs/Mohamed.png"
import { motion } from "framer-motion";
import Link from 'next/link';

const About = () => {
    return (
        <motion.div id='about' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex justify-center flex-col items-center gap-10'>
            <h1 className='text-4xl capitalize text-center font-medium'>about <span className='text-sky-600'>me</span></h1>
            <div className='rounded-full border-double border-8 border-sky-800 w-fit'>
                <Image src={Mohamed_bg} className='rounded-full w-56 m-2' alt='Mohamed' />
            </div>
            <p className='lg:w-[50%] w-[80%] font-medium my-5'>
                Welcome to my portfolio! I'm Mohamed Khassar, a dedicated MERN/Full Stack Developer passionate about crafting exceptional web applications. With expertise in the MERN stack and a focus on user-centric design, I thrive on creating intuitive, scalable solutions that exceed expectations. Let's build something extraordinary together!
            </p>
        </motion.div>
    )
}

export default About
