import ReviewsCard from "../UI/ReviewsCard";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Reviews = () => {
  const { t } = useTranslation("reviews")
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: .4, delay: .2 } }}
      viewport={{ once: true }}
      id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 ">
          {t("title")}
        </h2>
      </div>
      <Marquee speed={50} gradient={false} className="items-stretch w-full">
        {
          t("reviews", { returnObjects: true }).map(({ content, name, imgSrc, company }, key) => (
            <div key={key} className="mx-2 lg:h-[250px] h-[300px] select-none" draggable="false">
              <ReviewsCard content={content}
                name={name}
                imgSrc={imgSrc}
                company={company} key={key} />
            </div>
          ))
        }
      </Marquee>
    </motion.section>
  )
}

export default Reviews