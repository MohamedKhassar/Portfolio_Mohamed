import { useActionData } from "react-router-dom"
import Me from "../../assets/36.png"
import bg from "../../assets/abstract-purple-watercolor-stain-texture-background-design_1017-28783.png"
import 'aos/dist/aos.css'

const Body = () => {


    return (
        <div className="" >
            <div className="flex flex-col gap-12 absolute top-[30%] left-[10%]">
                <h1 className="flex flex-col gap-5"><span className="font-bold text-3xl">Hello I am </span><span className="text-[#7050EF] font-extrabold text-4xl">Mohamed Khassar</span>
                <small className="text-gray-500 relative left-[10%]">Full-Stack Developer</small></h1>
                <p className="w-[32%]  font-medium text-justify">Welcome to my portfolio! I'm a passionate and dedicated Junior Full Stack Developer with a strong desire to craft innovative and user-centric digital solutions. My journey in the world of development began with a curiosity that has now blossomed into a versatile skill set.</p>
            </div>
            <div className="">
                <img src={bg}
                    alt=""
                    className="absolute lg:top-[36%] rotate-[-16deg] right-0 top-44"/>
                <img src={Me}
                    alt=""
                    className="absolute lg:top-[18%] lg:right-[13%] right-[25%] w-80" />
            </div>
        </div>
    )
}

export default Body;
