import Link from "next/link"
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { SiGmail } from "react-icons/si"

const Footer = () => {
    return (
        <div className="relative bottom-0 flex flex-col justify-center items-center lg:gap-10 gap-5 shadow-2xl p-5">
            <h1 className='capitalize font-semibold lg:text-4xl text-2xl flex items-center text-nowrap mx-3 font-Poppins'>mohamed khassar<span className='text-5xl font-bold text-[#6e06f2]'>.</span></h1>
            <div className="flex lg:flex-row flex-col justify-around items-center gap-6 w-full">
                <ul className="flex gap-10">
                    <li><Link target="_blank" href={"https://www.linkedin.com/in/mohamedkhassar/"}><BsLinkedin className="duration-500 text-[#6e06f2] hover:text-[#0077B5] lg:size-7 size-6" /></Link></li>
                    <li><Link target="_blank" href={"https://github.com/mohamedkhassar"}><BsGithub className="duration-500 hover:text-black text-[#6e06f2] lg:size-7 size-6" /></Link></li>
                    <li><Link target="_blank" href={"mailto:mohamedkhassar775@gmail.com"}><SiGmail className="duration-500 text-[#6e06f2] hover:text-red-700 lg:size-7 size-6 text-" /></Link></li>
                    <li><Link target="_blank" href={"https://wa.me/+212664945127"}><BsWhatsapp className="duration-500 hover:text-green-800 text-[#6e06f2] lg:size-7 size-6" /></Link></li>
                </ul>
                <p className="font-Poppins lg:text-base text-xs mx-5 text-center font-semibold">© {new Date().getFullYear()} All Rights Reserved.Made with 💜 by Mohamed Khassar</p>
            </div>
        </div>
    )
}

export default Footer