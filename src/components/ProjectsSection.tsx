"use client"
import Link from "next/link"
import { ArrowRightCircle } from "lucide-react"
import { Fade } from "react-awesome-reveal"
import Image from "next/image"
import projects from "@/data/Data"
import { useRef } from "react"

const ProjectsSection = () => {
    const refs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
    const handleHover = (index: any) => {
        const spanElement = refs.current[index];
        if (spanElement) {
            spanElement.style.opacity = "1";
        }
    };

    const handleMouseLeave = (index: any) => {
        const spanElement = refs.current[index];
        if (spanElement) {
            spanElement.style.opacity = "0";
        }
    };
    return (
        <div id="projects" className="lg:mx-20 lg:my-44 my-20 space-y-10">
            <Fade direction="left">
                <h1 className='capitalize font-bold font-Poppins text-5xl lg:text-8xl flex items-center text-nowrap mx-3'>projects<span className='lg:text-9xl text-6xl font-bold text-[#6e06f2]'>.</span></h1>
            </Fade>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-10 lg:overflow-x-visible lg:mx-16">
                <Fade>

                    {projects.map((item, i) =>
                        <div className="rounded-3xl lg:w-fit w-72 p-5 shadow-2xl lg:flex flex-col justify-between hover:shadow-[#6e06f2]/70 duration-300 hover:scale-105 lg:h-[42rem] lg:space-y-0 space-y-10" key={item.id}>
                            <Image className="rounded-md lg:w-[60rem] lg:h-80 object-cover w-72 h-56" src={item.image} width={1000} height={1000} alt={item.image} />
                            <div className="space-y-3">
                                <Link className="flex items-center gap-x-5 w-fit" href={item.link} target="_blank">
                                    <h2 className="uppercase font-extrabold font-Poppins text-xl">{item.title}</h2>
                                    <ArrowRightCircle className="border border-[#6e06f2] rounded-full text-[#6e06f2] hover:bg-[#6e06f2] duration-300 transform -rotate-45 hover:text-white" size={27} />
                                </Link>
                                <p className="lg:text-lg text-sm text-[#6F7589] w-full">{item.description}</p>
                            </div>
                            <div className="space-y-5">
                                <h1 className="text-2xl font-Poppins font-bold capitalize">stack:</h1>
                                <ul className="flex gap-5 items-center">
                                    {item.stack.map((s, index) => (
                                        <div
                                            key={index}
                                            className="relative flex flex-col justify-end items-center"
                                            onMouseEnter={() => handleHover(Number(item.id + s!.id))}
                                            onMouseLeave={() => handleMouseLeave(Number(item.id + s!.id))}
                                        >
                                            <li>{s?.icon()}</li>
                                            <span
                                                ref={(el) => {
                                                    if (el) {
                                                        refs.current[item.id + s!.id] = el;
                                                    }
                                                }}
                                                id={`title-${Number(item.id + s!.id)}`}
                                                className="absolute text-nowrap -bottom-12 rounded-md text-white font-Poppins p-2 opacity-0 duration-300 bg-[#6e06f2]"
                                            >
                                                {s!.title}
                                            </span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ).reverse()
                    }
                </Fade>
            </div >
        </div >
    )
}

export default ProjectsSection