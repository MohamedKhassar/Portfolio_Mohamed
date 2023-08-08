import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react";
const Nav = () => {
    const [isOpened, setO] = useState(false)

    useEffect(() => {
        // Function to update the state based on the screen width
        const handleResize = () => {
          setO(false);
        };
    
        // Initial call to set the initial state
        handleResize();
    
        // Add a resize event listener to update the state when the screen size changes
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const list = [
        {
            name: 'Home',
            link: '#',
            isClicked: false
        },
        {
            name: 'About Me',
            link: '#aboutMe', isClicked: false
        },
        { name: "Skills", link: "#skill", isClicked: false },
        { name: "Contact", link: "#contact", isClicked: false }
    ]

    return (
        <nav className="flex justify-between p-5 items-center shadow-lg">
            <h1 className="font-semibold text-lg sm:text-center text-[#7050EF]">Mohamed Khassar</h1>
            <ul className={`text-[#7050EF] lg:flex gap-10 font-semibold capitalize ${isOpened ? "absolute top-20  right-48 gap-10" : "hidden"}`}>
                {list.map((l, i) => (
                    <li className={`hover:text-[#7050EF] hover:bg-gray-200 transition-all duration-300 p-2 rounded-md ${l.isClicked ? "text-[#7050EF] bg-gray-200" : null} `} key={i} onClick={() => l.isClicked = true}><Link to={l.link}>{l.name}</Link></li>
                ))}
            </ul>
            {isOpened ? <button className="lg:hidden text-[30px] text-[#7050EF]" onClick={() => setO(!isOpened)}><AiOutlineClose /></button> : <button className="lg:hidden text-[30px] text-[#7050EF]" onClick={() => setO(!isOpened)}><BiMenu /></button>}
            <button className="lg:block hidden border p-3 text-white capitalize font-bold rounded-lg bg-[#7050EF] hover:bg-white hover:border-[#7050EF] hover:text-[#7050EF] transition-all duration-300" >contact me</button>
        </nav>
    );
}

export default Nav;
