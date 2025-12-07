import { CgChevronRight } from "react-icons/cg";
import { ButtonPrimary } from "../UI/Button";
import { Link } from "react-router-dom";
import AnimatedHeader from "../UI/AnimatedHeader";
import { sitemap, socials } from "../data";
import { motion } from "framer-motion";
const Footer = () => {

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <AnimatedHeader className="headline-1 mb-8 lg:max-w-[12ch] ">
              Let&apos;s work together today!
            </AnimatedHeader>
            <ButtonPrimary href="mailto:mohamedkhassar775@gmail.com" label={"start project"} classes={"capitalize w-fit "} icon={<CgChevronRight />} />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2 ">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors  hover:text-zinc-200 ">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">

              <p className="mb-2 ">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href}
                      className="block text-sm text-zinc-400 py-2 transition-colors  hover:text-zinc-200 "
                      target="_blank">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        <motion.div
        initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0,transition:{duration:.3,delay:.3}}}
        className="flex items-center justify-between pt-10 mb-8">
          <a href="/#" className="logo">
            <img src="assets/imgs/logo.svg"
              width={40}
              alt="Mohamed_Khassar_logo"
              height={40}
            />
          </a>
          <p className=" text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} <Link to={"https://github.com/mohamedkhassar"} target="_blank" className="text-zinc-200">Mohamed Khassar</Link>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer