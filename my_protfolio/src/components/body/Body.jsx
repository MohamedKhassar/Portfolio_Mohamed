import Me from "../../assets/36.png"
import bg from "../../assets/abstract-purple-watercolor-stain-texture-background-design_1017-28783.png"
import 'aos/dist/aos.css'
import { useContext } from "react"
import { NavContext } from "../nav/Nav"
import {AiOutlineDownload} from "react-icons/ai"
// import { Link } from "react-router-dom"
import cv from "/src/assets/cv.pdf"
const Body = () => {


   
console.log(useContext(NavContext));
    return (
        <div className="" >
            <div className="flex flex-col gap-5 absolute top-[30%] left-[10%]">
                <h1 className="flex flex-col gap-5"><span className="font-bold text-3xl">Hello I am </span><span className="text-[#7050EF] font-extrabold text-4xl">Mohamed Khassar</span>
                <small className="text-gray-500 relative left-[10%]">Full-Stack Developer</small></h1>
                <p className="w-[32%]  font-medium text-justify">Welcome to my portfolio! I am a passionate and dedicated Junior Full Stack Developer with a strong desire to craft innovative and user-centric digital solutions. My journey in the world of development began with a curiosity that has now blossomed into a versatile skill set.</p>
                <div className="flex gap-x-5">
                    <button className="border p-3 text-white capitalize font-bold rounded-lg bg-[#7050EF] hover:bg-white hover:border-[#7050EF] hover:text-[#7050EF] transition-all duration-300">Contact Me</button>
                    <a href={cv} download  className="border p-3 text-[#7050EF] capitalize font-bold rounded-lg bg-white hover:bg-[#7050EF] border-[#7050EF] hover:text-white transition-all duration-300 flex gap-x-2">download cv <AiOutlineDownload size={20} /></a>
                </div>
            </div>
            <div className="">
                <img src={bg}
                    alt=""
                    className="absolute lg:top-[32%] rotate-[-16deg] right-0 top-44"/>
                <img src={Me}
                    alt=""
                    className="absolute lg:top-[18%] lg:right-[8%] right-[25%] w-80" />
            </div>
        </div>
    )
}

export default Body;
