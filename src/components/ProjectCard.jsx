import PropTypes from "prop-types"
import { MdArrowOutward } from "react-icons/md"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const ProjectCard = ({ imgSrc, title, tags, classes, projectLink, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: .8, delay: .15 * index } }} className={classes + " relative p-4 rounded-2xl bg-slate-800 hover:bg-slate-700/50 active:bg-slate-700/60 ring-1 ring-inset ring-slate-50/5 transition-colors"}>
            <figure className="img-box aspect-video rounded-lg mb-4">
                <img src={imgSrc} alt={title + "_Mohamed_Khassar"} loading="lazy" className="img-cover" />
            </figure>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, index) => (
                            <span className="h-8 text-sm text-slate-400 bg-slate-50/5 grid items-center px-3 rounded-lg" key={index}>{label}</span>
                        ))}

                    </div>
                </div>
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-slate-950 shrink-0">
                    <MdArrowOutward aria-hidden="true" className="text-[18px]" />
                </div>
            </div>
            <Link to={projectLink} target="_blank" className="absolute inset-0">

            </Link>
        </motion.div>
    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string,
    index:PropTypes.number.isRequired

}

export default ProjectCard