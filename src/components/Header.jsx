import { FiMenu, FiX } from "react-icons/fi"
import Navbar from "./Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import SelectLang from "../UI/SelectLang"
import { useTranslation } from "react-i18next"
const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const navRef = useRef(null);
    const {t}=useTranslation("navbar")

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setNavOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: .3, delay: .2 } }}
            id="#" className="h-20 fixed top-0 left-0 w-full flex items-center bg-gradient-to-b from-slate-950 to-stone-950/0 z-40">
            <div className="flex items-center mx-auto justify-between w-full px-4 md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
                <a href={"#"} >
                    <h1>
                        <img src="assets/imgs/logo.svg" width={30} height={30} alt="Mohamed_Khassar_logo" />
                    </h1>
                </a>
                <div className="md:justify-self-center relative flex items-center gap-x-4">
                    <SelectLang className="lg:hidden" />
                    <button onClick={() => setNavOpen(pre => !pre)} className="menu-btn">
                        {
                            navOpen ?
                                <FiX className="size-5" />
                                :
                                <FiMenu className="size-5" />
                        }
                    </button>
                    <Navbar navRef={navRef} navOpen={navOpen} />
                </div>
                <div className="items-center gap-x-4 justify-end lg:flex hidden">
                <SelectLang className="" />
                <a href={"#contact"} className="btn btn-secondary md:justify-self-center capitalize text-nowrap">
                    {t("contact me")}
                </a>
                </div>
            </div>
        </motion.header>
    )
}

export default Header