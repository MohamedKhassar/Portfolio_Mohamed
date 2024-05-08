"use client"
import About from '@/components/About'
import Home from '@/components/Home'
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
      once: true, // whether animation should only happen once
      easing: 'ease-out', // easing function for the animation
      offset: 200 // offset (in px) from the original trigger point
    });
  }, []);
  return (
    <div className='grid grid-cols-1 place-items-center lg:gap-y-4 items-center'>
      <Home />
      <motion.hr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className='my-28 mt-64 lg:my-0 border-gray-700 dark:border-white w-[70%] rounded-md' />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default page
