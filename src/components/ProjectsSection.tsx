"use client"
import Link from "next/link"
import { ArrowRightCircle, ChevronDown } from "lucide-react"
import { Fade } from "react-awesome-reveal"
import Image from "next/image"
import projects from "@/data/Data"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const ProjectsSection = () => {
    const router = useRouter()
    const refs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isDropDownId, setIsDropDownId] = useState<number | null>(null);

    const handleHover = (index: string) => {
        const spanElement = refs.current[index];
        if (spanElement) {
            spanElement.style.opacity = "1";
        }
    };

    const handleMouseLeave = (index: string) => {
        const spanElement = refs.current[index];
        if (spanElement) {
            spanElement.style.opacity = "0";
        }
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isDropDownId !== null && iconRefs.current[isDropDownId] && !iconRefs.current[isDropDownId]?.contains(event.target as Node)) {
                setIsDropDownId(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropDownId]);

    return (
        <div id="projects" className="lg:mx-10 lg:my-44 my-20 space-y-10">
            <Fade direction="left">
                <h1 className='capitalize font-bold font-Poppins text-5xl lg:text-8xl flex items-center text-nowrap md:mx-14 mx-5'>projects<span className='lg:text-9xl text-6xl font-bold text-[#6e06f2]'>.</span></h1>
            </Fade>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-16 gap-10 md:mx-16 md:place-items-start place-items-center">
                <Fade>
                    {projects && projects.map((item, i) =>
                        <div className="rounded-3xl lg:w-full md:w-[90%] w-80 min-h-max max-h-min col-span-1 p-5 shadow-2xl lg:flex flex-col justify-between md:shadow-black/50 shadow-[#6e06f2]/70 md:hover:shadow-[#6e06f2]/70 duration-300 md:hover:scale-105 lg:space-y-5 space-y-5" key={item.id}>
                            <Image draggable={false} className="rounded-md lg:h-64 object-cover w-full h-full object-center" src={item.image} width={1000} height={1000} alt={item.image} />
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <Link className="flex items-center gap-x-5 w-fit" href={`/project/${item.title}`}>
                                        <h2 className="uppercase font-extrabold font-Poppins lg:text-xl">{item.title}</h2>
                                        <ArrowRightCircle className="border border-[#6e06f2] rounded-full text-[#6e06f2] hover:bg-[#6e06f2] duration-300 transform -rotate-45 hover:text-white lg:size-6 size-5" />
                                    </Link>
                                    <div
                                        className={cn("lg:size-8 size-6 p-1 bg-[#6e06f2]/50  duration-300 flex justify-center items-center rounded-full cursor-pointer",
                                            isDropDownId === i && "rotate-180")}
                                        ref={(el) => { iconRefs.current[i] = el }}
                                        onClick={() => setIsDropDownId(prev => prev !== i ? i : null)}
                                    >
                                        <ChevronDown />
                                    </div>
                                </div>
                                <div className={cn("overflow-hidden h-fit")}>
                                    <p className={cn("lg:text-lg text-sm text-[#6F7589]", isDropDownId === i ? "animate-desc" : "max-h-fit h-36")}>{item.description}</p>
                                </div>
                            </div>
                            <div className="space-y-5 bg-white py-5">
                                <h1 className="md:text-2xl font-Poppins font-bold capitalize">stack:</h1>
                                <ul className="grid grid-cols-8">
                                    {item.stack.map((s, index) => (
                                        <div
                                            key={index}
                                            className="relative flex justify-center w-fit items-center"
                                            onMouseEnter={() => handleHover(`${item.id}${s!.id}`)}
                                            onMouseLeave={() => handleMouseLeave(`${item.id}${s!.id}`)}
                                        >
                                            <li>{s?.icon()}</li>
                                            <span
                                                ref={(el) => {
                                                    if (el) {
                                                        refs.current[`${item.id}${s!.id}`] = el;
                                                    }
                                                }}
                                                id={`title-${item.id}${s!.id}`}
                                                className="capitalize md:text-lg text-sm
                                                 absolute text-nowrap -bottom-12 rounded-md text-white font-Poppins md:p-2 p-1.5 opacity-0 duration-300 bg-[#6e06f2] font-semibold"
                                            >
                                                {s!.title}
                                            </span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ).reverse().slice(0, 6)}
                </Fade>
                <div className="flex justify-center items-center w-full lg:col-span-3 md:col-span-2 mt-14">

                    <button onClick={() => router.push("projects")} className="px-5 py-3  bg-[#6e06f2] text-white font-semibold md:text-lg rounded-md capitalize">see all ({projects.length})</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;
