import SlideImg from "./body/SlideImg";
import SlideText from "./body/SlideText";

const Body = () => {
    return (
        <div className="flex justify-between flex-row-reverse items-center">
            <SlideImg />
            <SlideText />
        </div>
    );
}

export default Body;
