
import front from "../../assets/browser.png"
const Skills = () => {
    return (
        <div id="skills" className="translate-y-[500px]">
            <h1 className="text-center text-7xl capitalize text-cyan-900 font-bold">my tech skills</h1>
            <div className="container mt-20">
                <h1 className="text-6xl capitalize font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent flex gap-x-5 items-center">front end <img src={front} alt="" className="w-12"/></h1>
            </div>
         
        </div>
    );
}

export default Skills;
