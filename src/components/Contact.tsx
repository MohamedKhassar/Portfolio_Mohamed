"use client"
import { Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion"
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut"
            }} id='contact' className="lg:w-[80%] h-screen flex flex-col justify-center items-center gap-y-5 space-y-8 m-8">
            <h1 className='mt-8 text-4xl capitalize text-center font-medium'>contact <span className='text-sky-700'>us</span></h1>
            <form className="space-y-16 grid">
                <div className="grid lg:grid-cols-2 gap-x-4">
                    <div className="relative bg-inherit">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="peer bg-transparent h-10 w-96 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder="Type inside me"
                        />
                        <label
                            htmlFor="name"
                            className="capitalize peer-focus:bg-white dark:peer-focus:bg-[#020817] absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative bg-inherit">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="peer bg-transparent h-10 w-96 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder="Type inside me"
                        />
                        <label
                            htmlFor="email"
                            className="capitalize peer-focus:bg-white dark:peer-focus:bg-[#020817] absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                        >
                            Email
                        </label>
                    </div>
                </div>
                <div className="relative bg-inherit">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="peer bg-transparent h-24 w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Type inside me"
                    />
                    <label
                        htmlFor="message"
                        className="capitalize  peer-focus:bg-white dark:peer-focus:bg-[#020817] absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                    >
                        Message
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex gap-x-3 justify-center items-center">Send <Send color="white" size={20} /></button>
            </form>
        </motion.div>
    );
};

export default Contact;
