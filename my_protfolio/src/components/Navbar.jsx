import { useEffect, useState } from "react";
import {BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
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
            icon: <BsLinkedin />,
            link: "/#Home"
        },
        {
            icon: <BsGithub />,
            link: "/#AboutMe"
        },
        {
            icon: <BsWhatsapp />,
            link: "/#ContactMe"
        },
        {
            icon: <FaXTwitter />,
            link: "/#ContactMe"
        },
    ]
    const [isDark, setIsDark] = useState(false)

    const setDark = () => {
        setIsDark(!isDark)
    }


    useEffect(() => {
        if (isDark) {
            document.body.className = "bg-slate-900"
        } else {
            document.body.className = ""
        }
    }, [isDark])

    return (
        <nav className="p-5 shadow-lg flex justify-between items-center">
            <div>
                <h1 className="text-blue-900 text-2xl font-extrabold">Mohamed Khassar</h1>
            </div>
            <div className="w-[25%]">
                <ul className="flex justify-between text-blue-900 font-bold">
                    {infos.map((inf, i) =>
                        <li key={i}>{inf.name}</li>
                    )}
                </ul>
            </div>
            <div>
                <ul className="flex justify-between">
                    {link.map((l, i) =>
                        <li key={i}>{l.icon}</li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
