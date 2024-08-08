import projects from "@/data/Data"
import { ArrowRightCircle, Github, Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const page = ({ params: { name } }: { params: { name: string } }) => {
    const project = projects.find(project => project.title.toLowerCase() == name.toLowerCase().replaceAll("%20", " "))
    return (
        <div className="h-[90vh] flex flex-col justify-center items-center gap-5">
            <h1 className='capitalize font-bold font-Poppins text-3xl lg:text-5xl flex items-center text-nowrap mx-3'>{project?.title}<span className='lg:text-6xl text-4xl font-bold text-[#6e06f2]'>.</span></h1>
            <div className="rounded-3xl lg:w-[30rem] w-72  p-5 shadow-2xl lg:flex flex-col gap-5 hover:shadow-[#6e06f2]/70 duration-300 hover:scale-105 lg:space-y-0 space-y-10" key={project?.id}>
                <Image className="rounded-md lg:w-[60rem] lg:h-80 object-cover w-72 h-56" src={project!.image} width={1000} height={1000} alt={project!.image} />
                <div className="flex justify-around items-center">
                    <Link target="_blank" className="flex flex-col items-center gap-y-3 w-fit hover:text-black duration-300 text-[#6e06f2]" href={project!.github}>
                        <FaGithub className="size-8" />
                        <p className="lg:text-base font-medium text-xs w-full capitalize">code on github</p>
                    </Link>
                    <Link target="_blank" className="flex flex-col items-center gap-y-3 w-fit" href={project!.link}>
                        <Link2 className="size-8" color="#6e06f2" />
                        <p className="lg:text-base text-[#6e06f2] font-medium text-xs w-full capitalize">try it!</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page