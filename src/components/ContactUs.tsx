"use client"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import axios from "axios"
import { FormEvent, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
const ContactUs = () => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        subject: "",
        content: "",
    })
    const sendMessage = async (e: FormEvent) => {
        e.preventDefault()
        if (message.name && message.email && message.subject && message.content) {
            await axios.post("/api/contact", message)
            toast.success("message sent successfully", {
                theme: "colored",
                autoClose: 1500,
                closeButton: false,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
            });
        } else {
            toast.error("please fill out all the required fields", {
                theme: "colored",
                autoClose: 1500,
                closeButton: false,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
            });
        }
    }

    return (
        <div id="contact" className="lg:mx-20 lg:my-44 my-20 space-y-10">
            <Fade direction="left">
                <h1 className='capitalize font-bold font-Poppins text-5xl lg:text-8xl flex items-center text-nowrap mx-3'>contact us<span className='lg:text-9xl text-6xl font-bold text-[#6e06f2]'>.</span></h1>
            </Fade>
            <Fade cascade>
                <form onSubmit={sendMessage} className="grid place-items-center gap-10">
                    <input className="outline-none border-2 border-[#6e06f2] rounded-md p-3 lg:w-1/2 w-[90%]" type="text" placeholder="Name*" onChange={(e) => setMessage({ ...message, name: e.target.value })} />
                    <input className="outline-none border-2 border-[#6e06f2] rounded-md p-3 lg:w-1/2 w-[90%]" type="email" placeholder="Email*" onChange={(e) => setMessage({ ...message, email: e.target.value })} />
                    <input className="outline-none border-2 border-[#6e06f2] rounded-md p-3 lg:w-1/2 w-[90%]" type="text" placeholder="Subject*" onChange={(e) => setMessage({ ...message, subject: e.target.value })} />
                    <textarea className="outline-none border-2 border-[#6e06f2] rounded-md p-3 lg:w-1/2 w-[90%]" placeholder="Message*" onChange={(e) => setMessage({ ...message, content: e.target.value })} />
                    <button className="bg-[#6e06f2] text-white px-6 py-3 rounded-md lg:w-1/2 w-[90%]" type="submit">Send</button>
                </form>
                <div className="flex lg:flex-row flex-col justify-around items-center gap-6 w-full">
                    <ul className="flex gap-10">
                        <li><Link target="_blank" href={"https://www.linkedin.com/in/mohamedkhassar/"}><BsLinkedin className="duration-500 text-[#6e06f2] hover:text-[#0077B5] lg:size-7 size-6" /></Link></li>
                        <li><Link target="_blank" href={"https://github.com/mohamedkhassar"}><BsGithub className="duration-500 hover:text-black text-[#6e06f2] lg:size-7 size-6" /></Link></li>
                        <li><Link target="_blank" href={"mailto:mohamedkhassar775@gmail.com"}><SiGmail className="duration-500 text-[#6e06f2] hover:text-red-700 lg:size-7 size-6 text-" /></Link></li>
                        <li><Link target="_blank" href={"https://wa.me/+212664945127"}><BsWhatsapp className="duration-500 hover:text-green-800 text-[#6e06f2] lg:size-7 size-6" /></Link></li>
                    </ul>
                </div>
            </Fade>
            <ToastContainer className="capitalize" />
        </div>
    )
}

export default ContactUs