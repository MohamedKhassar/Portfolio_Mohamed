import { motion } from "framer-motion"
import PropTypes from "prop-types"
const AnimatedHeader = ({ children, className, delay = 0.3 }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: .3, delay } }}
      className={className}>{children}</motion.h2>
  )
}
AnimatedHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  delay: PropTypes.number.isRequired
}
export default AnimatedHeader