import PropTypes from "prop-types"
import { MdArrowOutward } from "react-icons/md"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ProjectsImageSlider from "./ProjectsImageSlider"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { useRef } from "react"

const ProjectCard = ({ imgSrc, title, tags, classes, projectLink, index }) => {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: .8, delay: .15 * index } }}
            viewport={{ once: true }}
            className={classes + " relative p-4 rounded-2xl bg-slate-800 hover:bg-slate-700/50 active:bg-slate-700/60 ring-1 ring-inset ring-slate-50/5 transition-colors"}>
            <figure className={`img-box aspect-video rounded-lg mb-4 relative ${imgSrc.length > 1 && "flex"}`}>
                {
                    imgSrc.length > 1 ? (
                        <>
                            <button ref={prevRef} className={`swiper-button-prev-${index} slide-prev cursor-pointer h-fit absolute left-2 bg-blue-950/50 border-blue-950/50 shadow-lg shadow-blue-950/50 border backdrop-blur-xl md:p-2 p-1 rounded-full z-10 md:text-2xl text-xl place-self-center`}>
                                <BiChevronLeft className="size-6" />
                            </button>
                            <Link to={projectLink} target="_blank" className="w-full h-full">
                                <ProjectsImageSlider index={index} imgs={imgSrc} />
                            </Link>
                            <button ref={nextRef} className={`swiper-button-next-${index} h-fit slide-next absolute cursor-pointer right-2 bg-blue-950/50 border-blue-950/50 shadow-lg shadow-blue-950/50 border backdrop-blur-xl md:p-2 p-1 md:text-2xl rounded-full z-10 text-xl place-self-center`}>
                                <BiChevronRight className="size-6" />
                            </button>
                        </>
                    ) :
                        <Link to={projectLink} target="_blank" className="hover:underline">
                            <ProjectsImageSlider imgs={imgSrc} />
                        </Link>

                }
            </figure>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">
                        <Link to={projectLink} target="_blank" className="hover:underline">
                            {title}
                        </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, index) => (
                            <span className="h-8 text-sm text-slate-400 bg-slate-50/5 grid items-center px-3 rounded-lg" key={index}>{label}</span>
                        ))}

                    </div>
                </div>
                <Link to={projectLink} target="_blank" className="w-11 h-11 rounded-2xl hover:rounded-full hover:bg-sky-400/70 grid place-items-center bg-sky-400 text-slate-950 shrink-0 cursor-pointer">
                    <MdArrowOutward aria-hidden="true" className="text-[18px]" />
                </Link>
            </div>
        </motion.div>
    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string,
    index: PropTypes.number.isRequired

}

export default ProjectCard