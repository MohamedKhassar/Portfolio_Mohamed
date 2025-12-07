import { motion } from "framer-motion"
import PropTypes from "prop-types"
const AnimatedPara = ({ children, className, delay = .4 }) => {
    return (
        <motion.p className={className}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: .3, delay } }}
        >{children}</motion.p>
    )
}
AnimatedPara.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    delay: PropTypes.number
}
export default AnimatedPara