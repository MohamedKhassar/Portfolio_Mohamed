import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {HiDownload} from "react-icons/hi"
import {AiOutlineMessage} from "react-icons/ai"
import { Link } from "react-router-dom";
import cv from "../../assets/cv.pdf"
const SlideText = () => {


    const controls = useAnimation();
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        if (!animationCompleted) {
            controls.start('animate').then(() => {
                setAnimationCompleted(true);
            });
        }
    }, [controls, animationCompleted]);

    const variants = {
        initial: { x: '0' },
        animate: { x: 0 },
    };


    return (
        <div className="">
            <motion.div
                initial="initial"
                animate={controls}
                variants={variants}
                transition={{ duration: 1 }}
                style={{

                    translate: "200px 200px"
                }}
                className="dark:text-white grid gap-y-10"
            >
                <div className="w-fit">
                    <h1 className="text-blue-800 dark:text-cyan-900 text-4xl font-extrabold">Mohamed Khassar</h1>
                    <p className="text-center dark:text-gray-500 font-semibold">Full-Stack Web Developer</p>
                </div>
                <div className="w-[400px]">
                    <p className="text-justify font-bold dark:text-gray-400">I am a competent web developer
                        excited about the Developer position
                        Web you. With a mastery of <b className="text-orange-400">HTML</b>, <b className="text-blue-600">CSS</b>, <b className="text-yellow-400">JavaScript</b>, <b className="text-[#787CB5]">PHP</b>, <b className="text-[#61DBFB] ">ReactJs</b>, <b className="text-[#3c873a]">NodeJs</b>,
                        <b className="text-[#F05340]"> Laravel</b> and much more</p>
                </div>
                <div className="flex gap-16">
                    <a href={cv} download={true}  className="flex items-center gap-4 border rounded-md p-3 bg-blue-900 text-white dark:bg-cyan-900 border-none">Download<HiDownload /></a>
                    <Link to="#contactMe"><button className="flex items-center gap-4 rounded-md p-3 hover:bg-blue-900 text-blue-800 font-semibold dark:hover:text-white hover:text-white dark:text-cyan-900 hover:dark:bg-cyan-900 border border-cyan-900 transition-all duration-300 capitalize">contact me<AiOutlineMessage size={20}/></button></Link>
                </div>
            </motion.div>
        </div>
    );
}


export default SlideText;
