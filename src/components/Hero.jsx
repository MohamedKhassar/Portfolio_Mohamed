import { FiArrowDown, FiDownload } from "react-icons/fi";
import { ButtonPrimary, ButtonOutline } from "./Button"
import { SiFiverr } from "react-icons/si";
const Hero = () => {
    return (
        <section className="pt-28 lg:pt-36" id="home">
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div className="">
                    <div className="flex items-center gap-3">
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
                                <span className="absolute bg-emerald-400 rounded-full inset-0 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern Websites for the Future
                    </h2>
                    <div className="flex items-center gap-3 flex-wrap">
                        <ButtonPrimary label={"download cv"} icon={<FiDownload className="text-[18px]" />} href="/assets/file/Mohamed_Khassar_CV(ENG).pdf" target="_blank" classes={"capitalize group"} />
                        <ButtonPrimary href="https://www.fiverr.com/s/YRx380q" classes={"capitalize !bg-green-900 !text-white hover:!bg-green-50 hover:!text-green-900 !duration-500"} target="_blank" icon={<SiFiverr className="md:size-14 size-12" />} />
                        <ButtonOutline href="#about" label={"scroll down"} classes={"capitalize"} icon={<FiArrowDown className="animate-bounce" />} />
                    </div>
                </div>
                <div className="hidden lg:block">
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
