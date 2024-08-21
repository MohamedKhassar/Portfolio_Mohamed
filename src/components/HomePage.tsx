"use client"
import { Fade } from "react-awesome-reveal"
import moh from "/public/assets/imgs/Mohamed.jpg"
import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const HomePage = () => {
    const [isDropDown, setIsDropDown] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsDropDown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div id="home" className="flex lg:flex-row flex-col-reverse gap-y-20 items-center lg:justify-between lg:my-40 my-20 lg:mx-20 mx-8 -z-10">
            <Fade cascade>
                <div className="text-left flex flex-col lg:gap-y-8 gap-y-6">
                    <h1 className="font-Poppins font-medium lg:text-3xl text-xl capitalize">hey, I'm <span className="text-[#6e06f2] font-semibold">mohamed</span> 👋🏻</h1>
                    <h1 className="capitalize lg:text-8xl text-5xl font-extrabold font-Poppins"><span className="text-[#6e06f2]">Full-</span>Stack<br /> developer</h1>
                    <p className="lg:w-[42rem] leading-9 lg:text-xl text-xs text-[#6F7589] font-medium">Hello! I'm Mohamed, a passionate Full-stack Developer skilled in JavaScript, TypeScript, Python, NodeJS, ReactJS, and ExpressJS, with some experience in Django. My love for technology drives me to create dynamic and responsive web applications.</p>

                    <div className="lg:space-x-8 space-x-5 flex lg:justify-start text-nowrap justify-center">
                        <div ref={ref} className="relative">
                            <button onClick={() => setIsDropDown(!isDropDown)} className="outline-none shadow-2xl shadow-[#6e06f2]/8 py-3 px-5 lg:text-xl bg-[#6e06f2] text-white capitalize font-bold rounded-md flex gap-x-3 text-sm items-center justify-center z-50">my resume <ChevronDown className={cn("duration-300", isDropDown && "rotate-180")} /></button>
                            <div className={cn("absolute opacity-0 gap-x-8 lg:flex-col gap-y-4 left-0 w-full my-5 -z-30",
                                isDropDown ? "animate-dropdown flex" : "hide-dropdown flex"
                            )}>
                                {Array("en français", "in english").map((item, i) => (
                                    <Link key={i} target="_blank" rel="noopener noreferrer" href={`/assets/files/Mohamed_Khassar_CV(${item.includes("français") ? "FR" : "ENG"}).pdf`} className="flex items-center justify-between p-3 border rounded-md text-center w-full font-Poppins lg:text-xl text-sm font-semibold capitalize gap-x-5 text-[#6e06f2] border-[#6e06f2] hover:text-white link hover:bg-[#6c06f2]/80 duration-300">{item}<ArrowDown className="lg:size-max size-5" /> </Link>
                                ))}
                            </div>
                        </div>
                        <button className="text-sm outline-none shadow-2xl shadow-slate-500/80 py-3 px-5 lg:text-xl text-black bg-[#ebebeb] hover:bg-[#d8d8d8] duration-300 capitalize font-bold rounded-md" onClick={() => scrollTo(0, Number(document.getElementById("projects")?.offsetTop) - 200)}>browse projects </button>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="border-[#6e06f2]/50 border-2 rounded-full">
                        <div className="rounded-full overflow-hidden lg:m-10 m-5">
                            <Image className="lg:min-w-80 w-96 scale-150 rounded-full" src={moh.src} width={1000} height={1000} alt="" />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default HomePage