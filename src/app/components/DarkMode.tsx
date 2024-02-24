"use client"
import { MoonIcon, SunIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const DarkMode = () => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        document.body.classList.toggle("dark")
    }
    return (
        <div className='cursor-pointer absolute right-6 top-5'>
            {theme == "light" ? <MoonIcon size={30} onClick={toggleTheme} /> : <SunIcon stroke='white' size={30} onClick={toggleTheme} />}
        </div>
    )
}

export default DarkMode