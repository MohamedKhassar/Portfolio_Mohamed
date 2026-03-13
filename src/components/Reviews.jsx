import ReviewsCard from "../UI/ReviewsCard";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Reviews = () => {
  const reviews = [
    {
      content: 'مطور محترف للغاية! أنشأ موقعًا سريعًا وحديثًا بتجربة مستخدم ممتازة.',
      name: 'أحمد الخطيب',
      imgSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
      company: 'شركة التقنية الحديثة'
    },
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sophia Ramirez',
      imgSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
      company: 'PixelForge'
    },
    {
      content: 'Travail exceptionnel ! Communication claire et livraison rapide avec un résultat de grande qualité.',
      name: 'Camille Dubois',
      imgSrc: 'https://randomuser.me/api/portraits/women/68.jpg',
      company: 'WebVision'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Liam Bennett',
      imgSrc: 'https://randomuser.me/api/portraits/men/75.jpg',
      company: 'CodeCraft'
    },
    {
      content: 'عمل رائع وتنفيذ دقيق للمشروع. التواصل كان ممتازًا والنتيجة فاقت توقعاتنا.',
      name: 'ليلى منصور',
      imgSrc: 'https://randomuser.me/api/portraits/women/25.jpg',
      company: 'الحلول الرقمية'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations.',
      name: 'Noah Williams',
      imgSrc: 'https://randomuser.me/api/portraits/men/41.jpg',
      company: 'BrightWeb'
    },
    {
      content: 'Développeur très professionnel ! Le site est rapide، moderne et parfaitement optimisé.',
      name: 'Lucas Martin',
      imgSrc: 'https://randomuser.me/api/portraits/men/63.jpg',
      company: 'StudioNova'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration.',
      name: 'Ethan Caldwell',
      imgSrc: 'https://randomuser.me/api/portraits/men/22.jpg',
      company: 'NexaWave'
    },
    {
      content: 'خبرة واضحة في تطوير الويب. الموقع متجاوب وسريع ويعمل بشكل مثالي.',
      name: 'محمد العتيبي',
      imgSrc: 'https://randomuser.me/api/portraits/men/36.jpg',
      company: 'رؤية التقنية'
    },
    {
      content: 'Un développeur très talentueux. Le design et la performance du site dépassent nos attentes.',
      name: 'Antoine Lefevre',
      imgSrc: 'https://randomuser.me/api/portraits/men/18.jpg',
      company: 'DigitalFlow'
    },
    {
      content: 'Professional work! Delivered on time with a polished design and smooth user experience.',
      name: 'Ava Thompson',
      imgSrc: 'https://randomuser.me/api/portraits/women/52.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'تنفيذ مشروع ممتاز! كود عالي الجودة وتصميم متجاوب ومهارات قوية في حل المشكلات.',
      name: 'محمد العتيبي',
      imgSrc: 'https://randomuser.me/api/portraits/men/55.jpg',
      company: 'رؤية التقنية'
    }
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: .4, delay: .2 } }}
      viewport={{ once: true }}
      id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 ">
          What our customers say
        </h2>
      </div>
      <Marquee speed={50} gradient={false} className="items-stretch w-full">
        {
          reviews.map(({ content, name, imgSrc, company }, key) => (
            <div key={key} className="mx-2 lg:h-[200px] h-[260px] select-none" draggable="false">
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