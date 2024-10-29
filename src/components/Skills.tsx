"use client"
import technologies from "@/data/stack"
import Image from "next/image";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal"
import Collaboration from "/public/assets/imgs/partners.png"
import leadership from "/public/assets/imgs/leadership.png"
import Effective_communication from "/public/assets/imgs/effective-communication.png"
import commitment from "/public/assets/imgs/commitment.png"

const Skills = () => {
    const softSkills = [
        { image: Collaboration, title: "Collaboration" },
        { image: leadership, title: "Leadership" },
        { image: Effective_communication, title: "Effective communication" },
        { image: commitment, title: "commitment" },]
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
        <div id="skills" className="lg:mx-20 lg:my-44 my-20 space-y-10">
            <Fade direction="left">
                <h1 className='capitalize font-bold font-Poppins text-5xl lg:text-8xl flex items-center text-nowrap mx-3'>skills<span className='lg:text-9xl text-6xl font-bold text-[#6e06f2]'>.</span></h1>
            </Fade>
            <Fade cascade>
                <div className="flex lg:flex-row flex-col lg:justify-around lg:items-start lg:mx-0 mx-8 gap-20">
                    <div className="flex flex-col justify-center gap-10">
                        <h1 className='capitalize font-semibold font-Poppins text-3xl lg:text-5xl flex items-center text-nowrap'>front-end<span className='lg:text-6xl text-3xl font-semibold text-[#6e06f2]'>.</span></h1>
                        <ul className="grid grid-cols-3 gap-10 place-items-center">
                            {technologies.filter(tech => ["html", "css", "javascript", "typescript", "react", "next.js", "tailwind css", "bootstrap", "framer motion", "cmd"].includes(tech!.title.toLowerCase()))
                                .map(tech =>
                                    <div className="relative flex justify-center" key={tech?.title} onMouseEnter={() => handleHover(Number(tech!.id))}
                                        onMouseLeave={() => handleMouseLeave(Number(tech!.id))}>
                                        <li>
                                            {tech?.icon()}
                                        </li>
                                        <span
                                            ref={(el) => {
                                                if (el) {
                                                    refs.current[tech!.id] = el;
                                                }
                                            }}
                                            id={`title-${Number(tech!.id)}`}
                                            className="capitalize z-10 absolute text-nowrap -bottom-12 rounded-md text-white font-Poppins p-2 opacity-0 duration-300 bg-[#6e06f2]"
                                        >
                                            {tech!.title}
                                        </span>
                                    </div>
                                )}
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-10">
                        <h1 className='capitalize font-semibold font-Poppins text-3xl lg:text-5xl flex items-center text-nowrap'>back-end<span className='lg:text-6xl text-3xl font-semibold text-[#6e06f2]'>.</span></h1>
                        <ul className="grid grid-cols-3 gap-10 lg:ms-0 ms-5">
                            {technologies.filter(tech => ["php", "node.js", "python", "django", "docker", "express", "laravel", "mongodb", "mysql", "postgresql", "postman", "next.js", "jwt", "cmd"].includes(tech!.title.toLowerCase()))
                                .map(tech =>
                                    <div className="relative flex justify-center" key={tech?.title} onMouseEnter={() => handleHover(Number(tech!.id) + Number(Math.ceil(Math.random())))}
                                        onMouseLeave={() => handleMouseLeave(Number(tech!.id) + Number(Math.ceil(Math.random())))}>
                                        <li
                                        >
                                            {tech?.icon()}

                                        </li>
                                        <span
                                            ref={(el) => {
                                                if (el) {
                                                    refs.current[Number(tech!.id) + Number(Math.ceil(Math.random()))] = el;
                                                }
                                            }}
                                            id={`title-${Number(tech!.id) + Number(Math.ceil(Math.random()))}`}
                                            className="capitalize z-10 absolute text-nowrap -bottom-12 rounded-md text-white font-Poppins p-2 opacity-0 duration-300 bg-[#6e06f2]"
                                        >
                                            {tech!.title}
                                        </span>
                                    </div>
                                )}
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-10">
                        <h1 className='capitalize font-semibold font-Poppins text-3xl lg:text-5xl flex items-center text-nowrap'>soft skills<span className='lg:text-6xl text-3xl font-semibold text-[#6e06f2]'>.</span></h1>
                        <ul className="grid grid-cols-2 place-items-center lg:ms-0 ms-5 gap-10 lg:text-xl text-sm font-Poppins font-medium">
                            {softSkills.map((item, i) =>
                                <div className="relative flex justify-center" key={i}
                                    onMouseEnter={() => handleHover(i)}
                                    onMouseLeave={() => handleMouseLeave(i)}>
                                    <li>
                                        <Image src={item.image.src} className="w-16" alt="" height={1000} width={1000} />
                                    </li>
                                    <span
                                        ref={(el) => {
                                            if (el) {
                                                refs.current[i] = el;
                                            }
                                        }}
                                        id={`title-${i}`}
                                        className="capitalize z-10 absolute text-nowrap -bottom-12 rounded-md text-white font-Poppins p-2 opacity-0 duration-300 bg-[#6e06f2]"
                                    >
                                        {item.title}
                                    </span>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Skills