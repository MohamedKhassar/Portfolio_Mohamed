"use client"
import { Fade } from "react-awesome-reveal"
import moh from "/public/assets/imgs/Mohamed.jpg"
import { ArrowDown } from "lucide-react"

const HomePage = () => {
    return (
        <div className="flex lg:flex-row flex-col-reverse lg:gap-x-[38rem] gap-y-20 items-center justify-center lg:my-40 my-20 lg:mx-20 mx-8 -z-10">
            <Fade cascade>
                <div className="text-left flex flex-col lg:gap-y-8 gap-y-6">
                    <h1 className="font-Poppins font-medium lg:text-3xl text-xl capitalize">hey, I'm <span className="text-[#6e06f2] font-semibold">mohamed</span> 👋🏻</h1>
                    <h1 className="capitalize lg:text-8xl text-5xl font-extrabold font-Poppins"><span className="text-[#6e06f2]">Full-</span>Stack<br /> developer</h1>
                    <p className="lg:w-[42rem] leading-9 lg:text-xl text-sm text-[#6F7589] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat culpa dolorem cum similique molestias quo magni asperiores placeat vel. Repellendus impedit nesciunt unde dolore deleniti in qui quia eligendi?
                    </p>
                    <div className="space-x-8 flex lf:justify-center">
                        <a download={"Mohamed_Khassar_CV(ENG).pdf"} href="/public/assets/files/Mohamed_Khassar_CV(ENG).pdf" className="outline-none shadow-2xl shadow-black/80 py-3 px-5 lg:text-xl bg-black text-white capitalize lg:font-semibold font-bold rounded-md flex gap-x-3 text-sm">my resume <ArrowDown className="animate-bounce" /> </a>
                        <button className="text-sm outline-none shadow-2xl shadow-slate-500/80 py-3 px-5 lg:text-xl text-black bg-[#ebebeb] hover:bg-[#d8d8d8] duration-300 capitalize lg:font-semibold font-bold rounded-md">browse my projects</button>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="border-[#6e06f2]/50 border-2 rounded-full">
                        <div className="rounded-full overflow-hidden m-10">
                            <img className="w-96 scale-150 rounded-full" src={moh.src} loading="lazy" alt="" />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default HomePage