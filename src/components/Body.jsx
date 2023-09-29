import { BiMouse } from "react-icons/bi";
import SlideImg from "./body/SlideImg";
import SlideText from "./body/SlideText";
const Body = () => {
    return (
        <div className="">
            <div className="flex justify-between flex-row-reverse items-center">
                <SlideImg />
                <SlideText />
            </div>
            <span className="flex items-center justify-center translate-y-96">
                <hr  className="w-[300px] border-black dark:border-white"/><BiMouse className="dark:fill-white" size={30}/><hr className="w-[300px] border-black dark:border-white"/>
            </span>
        </div>
    );
}

export default Body;
