import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"
import { Link } from "react-router-dom";
const Navbar = () => {
    const infos = [
        {
            name: "Home",
            link: "/#Home"
        },
        {
            name: "About Me",
            link: "/#AboutMe"
        },
        {
            name: "Contact Me",
            link: "/#ContactMe"
        },
    ]
    const link = [
        {
            icon: <BsLinkedin className="dark:text-white " size={20} />,
            link: "/#Home",
            color: "blue"
        },
        {
            icon: <BsGithub className="dark:text-white " size={20} />,
            link: "/#AboutMe",
            color: "black"
        },
        {
            icon: <BsWhatsapp className="dark:text-white " size={20} />,
            link: "/#ContactMe",
            color: "green"
        },
        {
            icon: <FaXTwitter className="dark:text-white " size={20} />,
            link: "/#ContactMe",
            color: "black"
        },
    ]
    const [isDark, setIsDark] = useState(false)

    const setDark = () => {
        setIsDark(!isDark)
    }


    useEffect(() => {
        if (isDark) {
            document.body.classList.add("bg-[#202124]")
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove('bg-[#202124]')
            document.body.classList.remove("dark")
        }
    }, [isDark])

    return (
        <nav className="p-5 px-16 shadow-lg dark:shadow-2xl flex justify-between items-center ">
            <div>
                <h1 className="dark:text-white text-blue-900 text-2xl font-extrabold">Mohamed Khassar</h1>
            </div>
            <div className="w-[20%]">
                <ul className="flex justify-evenly">
                    {infos.map((inf, i) =>
                        <Link key={i} to={inf.link}><li className="hover:bg-blue-900 hover:text-blue-100 text-blue-900 font-bold p-2 rounded-md transition-all duration-300 dark:text-[#FFFFFF]">{inf.name}</li></Link>
                    )}
                </ul>
            </div>
            <div className="flex justify-between w-[20%] items-center transition-all duration-300">
                <div className="me-20">

                    {!isDark ? <MdDarkMode size={25} className="cursor-pointer text-blue-900 dark:text-[#FFFFFF]" onClick={setDark} /> : <MdOutlineLightMode size={25} className="cursor-pointer text-white" onClick={setDark} />}

                </div>
                <ul className="flex justify-between w-full">
                    {link.map((l, i) =>
                        <li key={i}>{l.icon}</li>
                    )}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;