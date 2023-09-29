    import { motion,useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import img from "../../assets/36.png"
const SlideImg = () => {

    const controls = useAnimation();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (!animationCompleted) {
      controls.start('animate').then(() => {
        setAnimationCompleted(true);
      });
    }
  }, [controls, animationCompleted]);

  const variants = {
    initial: { x: '0' },
    animate: { x: -400 },
  };

  return (
    <div className="flex justify-end">
      <motion.div
        initial="initial"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        style={{
          width: '200px',
          height: '200px',
          translate:"200px 200px"          
        }}
        className="dark:border-cyan-900 rounded-full border-blue-900 border-8"
      >
        <img src={img} alt="" className="rounded-full border-none" />
      </motion.div>
    </div>
  );
}


export default SlideImg;
