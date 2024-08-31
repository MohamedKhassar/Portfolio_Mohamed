"use client"
import CustomVideoPlayer from "@/components/CustomVideoPlayer"
import projects from "@/data/Data"
import { cn } from "@/lib/utils"
import { Link2 } from "lucide-react"
import Image from "next/image"
import { IoLockClosed } from "react-icons/io5";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { RiArrowGoBackFill } from "react-icons/ri"

const page = ({ params: { name } }: { params: { name: string } }) => {
    const project = projects.find(project => project.title.toLowerCase() == name.toLowerCase().replaceAll("%20", " "))
    const router = useRouter()
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-8">
            <div>
                <RiArrowGoBackFill onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="absolute left-5 top-5 text-[#6e06f2] size-8 cursor-pointer" onClick={() => router.back()} />
                <span className={cn('bg-[#6c06f29a] py-2 px-3 absolute left-1 top-14 rounded-md font-Poppins capitalize text-white transition duration-300',
                    !isHover && "opacity-0"
                )}>
                    back
                </span>
            </div>
            {project &&
                <>
                    <h1 className='text-wrap capitalize font-bold font-Poppins text-3xl md:text-5xl flex items-center mx-3'>{project.title}<span className='lg:text-6xl text-4xl font-bold text-[#6e06f2]'>.</span></h1>
                    <div className="rounded-3xl md:w-[55%] w-[95%] p-5 shadow-2xl flex flex-col gap-5 hover:shadow-[#6e06f2]/70 duration-300 hover:scale-105 lg:space-y-0 space-y-6 h-fit" key={project.id}>
                        <Image className="rounded-md lg:h-full object-cover lg:w-full h-80" src={project.image} width={800} height={800} alt={project.image} />
                        <div className="flex justify-around items-center">
                            {
                                project.github ?

                                    <Link target="_blank" className="flex flex-col items-center gap-y-3 w-fit hover:text-black duration-300 text-[#6e06f2]" href={project.github}>
                                        <FaGithub className="md:size-8 size-5" />
                                        <p className="lg:text-base font-medium text-xs w-full capitalize">code on github</p>
                                    </Link>
                                    :
                                    <div className="flex flex-col items-center gap-y-3 w-fit hover:text-black duration-300 text-[#6e06f2]">
                                        <FaGithub className="md:size-8 size-5" />
                                        <p className="lg:text-base font-medium text-xs w-full capitalize flex gap-3">code on github<IoLockClosed /></p>
                                    </div>
                            }
                            {project.title !== "portfolio" && project.link && <Link target="_blank" className="flex flex-col items-center gap-y-3 w-fit" href={project.link}>
                                <Link2 className="md:size-8 size-5" color="#6e06f2" />
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