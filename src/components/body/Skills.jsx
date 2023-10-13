
import front from "../../assets/browser.png"
import {AiFillStar} from "react-icons/ai"
import {FaReact} from "react-icons/fa"

const Skills = () => {

    const skills=[
        {
            title:"ReactJs",
            icon:<FaReact />
        }
    ]

    return (
        <div id="skills" className="translate-y-[500px]">
            <h1 className="text-center text-7xl capitalize text-cyan-900 font-bold">my tech skills</h1>
            <div className="container mt-20">
                <h1 className="text-6xl capitalize font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent flex gap-x-5 items-center">front end <img src={front} alt="" className="w-12"/></h1>
            </div>
            <AiFillStar fill="orange"/>
        </div>
    );
}

export default Skills;
