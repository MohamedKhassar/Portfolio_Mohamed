import React from 'react';
import "./nav.css"
import {AiFillHome }  from "react-icons/ai";
import {GiSkills}  from "react-icons/gi";
import {BiSolidUser}  from "react-icons/bi";
import {BsFillChatDotsFill}  from "react-icons/bs";
import {MdMiscellaneousServices}  from "react-icons/md";
const Nav = () => {
    return (
        <nav>
            <a href="#"><AiFillHome /></a>
            <a href="#about"><BiSolidUser /></a>
            <a href="#experience"><GiSkills /></a>
            <a href="#services"><MdMiscellaneousServices /></a>
            <a href="#contact"><BsFillChatDotsFill /></a>
        </nav>
    );
}

export default Nav;
