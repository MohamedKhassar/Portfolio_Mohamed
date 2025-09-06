import PropTypes from "prop-types"
import { motion } from "framer-motion"
const SkillCard = ({ imgSrc,
    label,
    desc,
    classes,
    index }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: .8, delay: .1 * index } }}
            className={"flex items-center gap-3 ring-2 ring-inset  ring-slate-50/10 rounded-2xl p-3 hover:bg-slate-800 transition-colors group cursor-pointer " + classes}>
            <figure className="bg-slate-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-slate-900 transition-colors">
                <img
                    src={imgSrc}
                    width={32}
                    height={32}
                    loading="lazy"
                    alt="Mohamed_Khassar" />
            </figure>
            <div>
                <h3>
                    {label}
                </h3>
                <p className="text-slate-400 text-sm">
                    {desc}
                </p>
            </div>
        </motion.div>
    )
}
SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
    index: PropTypes.number.isRequired,
}
export default SkillCard