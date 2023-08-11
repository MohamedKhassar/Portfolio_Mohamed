// import {AiFillHtml5} from "react-icons/ai"
import { SiCss3, SiHtml5 } from "react-icons/si"

import "aos/dist/aos.css"
const Main = () => {

    return (
        <div className="absolute top-[110%] left-[10%]  right-[10%]">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-[#7050EF] text-xl">I. Frontend Expertise</h1>
                <p className="w-[37%]  font-normal text-justify">As a Junior Full Stack Developer, I bring a dynamic set of frontend skills that transform concepts into captivating user interfaces. With a keen eye for design and a commitment to user-centric development, I specialize in:</p>
                <div className="m-4 flex justify-between" data-aos="fade-up">
                    <div className="border p-5 shadow-lg rounded-md flex flex-col gap-10 w-[30%]" >
                        <h1 className="font-bold text-purple-500">1. HTML5, CSS3, and Responsive Design:</h1>
                        <span className="flex gap-x-5 justify-center items-center text-xl font-medium"><SiHtml5 size={50} /> + <SiCss3 size={50} /></span>
                        <ul className="p-5">

                            <li className="list-disc"><small className="font-bold text-justify">Proficient in structuring web content with HTML5 to ensure semantic and accessible layouts.
                            </small></li>
                            <li className="list-disc"><small className="font-bold text-justify">Expertise in CSS3 for creating visually appealing designs and seamless user experiences across devices.</small></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
