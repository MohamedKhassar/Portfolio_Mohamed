import { FiArrowDown, FiDownload } from "react-icons/fi";
import { ButtonPrimary, ButtonOutline } from "./Button"
// import { SiFiverr } from "react-icons/si";
import nsayblik_logo from "/assets/imgs/nsayblik_logo.png";
import { SiFiverr } from "react-icons/si";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <section className="pt-28 lg:pt-36" id="home">
            <div
                className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: .2, duration: .3, type: "spring", stiffness: 200 } }}
                        className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/assets/imgs/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt="Mohamed_Khassar_avatar"
                                loading="lazy"
                                className="img-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 tex-zinc-400 text-sm tracking-wide">
                            <span className="relative h-2 w-2 bg-emerald-400 rounded-full">
                                <span className="absolute bg-emerald-400 rounded-full inset-0 whileInView-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: .3, duration: .3, type: "spring", stiffness: 200 } }}
                        className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern Websites for the Future
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: .4, duration: .3, type: "spring", stiffness: 200 } }}
                        className="flex items-center gap-3 flex-wrap">
                        {/* CV Button */}
                        <ButtonPrimary label={"download cv"} icon={<FiDownload className="text-[18px]" />} href="/assets/file/Resume-Frontend.pdf" target="_blank" classes={"capitalize group"} />
                        {/* NSAYBLIK Button */}
                        <ButtonPrimary target={"_blank"} href="https://nsayblik.com/Mohamed_Khassar" classes={"capitalize !bg-white text-black !font-bold hover:!bg-gray-200 !duration-200"} icon={<img src={nsayblik_logo} loading="lazy" alt="nsayblik_logo" className="md:size-20 size-16 object-contain" />} />
                        {/* Fiverr Button */}
                        <ButtonPrimary href="https://www.fiverr.com/s/jjEmy0L" classes={"capitalize !bg-green-900 !text-white hover:!bg-green-50 hover:!text-green-900 !duration-500"} target="_blank" icon={<SiFiverr className="md:size-14 size-12" />} />
                        {/* Scroll Down Button */}
                        <ButtonOutline href="#about" label={"scroll down"} classes={"capitalize"} icon={<FiArrowDown className="whileInView-bounce" />} />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { delay: .4, duration: .3 } }}
                    className="hidden lg:block">
                    <figure className="w-full ml-auto max-w-[480px] bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img
                            src="/assets/imgs/hero-banner.png"
                            alt="Mohamed_Khassar_banner"
                            loading="lazy"
                            width={656}
                            height={800}
                            className="w-full"
                        />
                    </figure>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
