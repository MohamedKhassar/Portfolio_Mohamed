import PropTypes from "prop-types"
import { MdArrowOutward } from "react-icons/md"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ProjectsImageSlider from "./ProjectsImageSlider"

const ProjectCard = ({ imgSrc, title, tags, classes, projectLink, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: .8, delay: .15 * index } }}
            viewport={{ once: true }}
            className={classes + " overflow-hidden relative rounded-3xl ring-1 ring-inset ring-slate-50/5 transition-colors group"}>
                <div className="group-hover:bg-black/60 transition-colors duration-300 absolute inset-0 w-full h-full z-10 group-hover:backdrop-blur" />
            <figure className={`img-box aspect-video rounded-lg ${imgSrc.length > 1 && "flex"}`}>
                {
                    imgSrc.length > 1 ? (
                        <>
                            <Link to={projectLink} target="_blank" className="w-full h-full">
                                <ProjectsImageSlider index={index} imgs={imgSrc} />
                            </Link>
                        </>
                    ) :
                        <Link to={projectLink} target="_blank" className="hover:underline">
                            <ProjectsImageSlider imgs={imgSrc} />
                        </Link>

                }
            </figure>
            <div className="flex items-center justify-between gap-4 absolute group-hover:bottom-0 transition-all duration-300 left-0 right-0 bottom-[-100%] p-4 z-20">
                <div>
                    <h3 className="title-1 mb-3">
                        <Link to={projectLink} target="_blank" className="hover:underline">
                            {title}
                        </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, index) => (
                            <span className="h-8 text-xs text-slate-400 bg-slate-900/50 grid items-center px-3 rounded-3xl" key={index}>{label}</span>
                        ))}

                    </div>
                </div>
                <Link to={projectLink} target="_blank" className="w-11 h-11 rounded-2xl hover:to-sky-400/70 grid place-items-center bg-gradient-to-b from-sky-400 to-sky-400/60 text-slate-950 shrink-0 cursor-pointer">
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