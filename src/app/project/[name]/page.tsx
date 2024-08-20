"use client"
import CustomVideoPlayer from "@/components/CustomVideoPlayer"
import projects from "@/data/Data"
import { cn } from "@/lib/utils"
import { ArrowRightCircle, Github, Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa"
import { RiArrowGoBackFill } from "react-icons/ri"

const page = ({ params: { name } }: { params: { name: string } }) => {
    const project = projects.find(project => project.title.toLowerCase() == name.toLowerCase().replaceAll("%20", " "))
    const router = useRouter()
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="h-[90vh] flex flex-col justify-center items-center gap-8">
            <div>
                <RiArrowGoBackFill onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="absolute left-5 top-5 text-[#6e06f2] size-8 cursor-pointer" onClick={() => router.push("/")} />
                <span className={cn('bg-[#6c06f29a] py-2 px-3 absolute left-1 top-14 rounded-md font-Poppins capitalize text-white transition duration-300',
                    !isHover && "opacity-0"
                )}>
                    back
                </span>
            </div>
            {project &&
                <>
                    <h1 className='text-wrap capitalize font-bold font-Poppins text-3xl md:text-5xl flex items-center mx-3'>{project.title}<span className='lg:text-6xl text-4xl font-bold text-[#6e06f2]'>.</span></h1>
                    <div className="rounded-3xl md:w-[55%] w-[90%]  md:p-5 p-3 shadow-2xl lg:flex flex-col gap-5 hover:shadow-[#6e06f2]/70 duration-300 hover:scale-105 lg:space-y-0 space-y-10" key={project.id}>
                        {project.video ?
                            <CustomVideoPlayer
                                src={project.video}
                                poster={project.image}
                            /> :
                            <Image className="rounded-md h-full object-cover w-full" src={project.image} width={1000} height={1000} alt={project.image} />
                        }
                        <div className="flex justify-around items-center">
                            <Link target="_blank" className="flex flex-col items-center gap-y-3 w-fit hover:text-black duration-300 text-[#6e06f2]" href={project.github}>
                                <FaGithub className="size-8" />
                                <p className="lg:text-base font-medium text-xs w-full capitalize">code on github</p>
                            </Link>
                            {project.title !== "portfolio" && <Link target="_blank" className="flex flex-col items-center gap-y-3 w-fit" href={project.link}>
                                <Link2 className="size-8" color="#6e06f2" />
                                <p className="lg:text-base text-[#6e06f2] font-medium text-xs w-full capitalize">try it!</p>
                            </Link>
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default page