import ReviewsCard from "../UI/ReviewsCard";
import { motion } from "framer-motion";
const Reviews = () => {
    const reviews = [
  {
    content: 'مطور محترف للغاية! أنشأ موقعًا سريعًا وحديثًا بتجربة مستخدم ممتازة.',
    name: 'أحمد الخطيب',
    imgSrc: '/images/people-1.jpg',
    company: 'شركة التقنية الحديثة'
  },
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: '/images/people-2.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Travail exceptionnel ! Communication claire et livraison rapide avec un résultat de grande qualité.',
    name: 'Camille Dubois',
    imgSrc: '/images/people-3.jpg',
    company: 'WebVision'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: '/images/people-4.jpg',
    company: 'CodeCraft'
  },
  {
    content: 'عمل رائع وتنفيذ دقيق للمشروع. التواصل كان ممتازًا والنتيجة فاقت توقعاتنا.',
    name: 'ليلى منصور',
    imgSrc: '/images/people-5.jpg',
    company: 'الحلول الرقمية'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations.',
    name: 'Noah Williams',
    imgSrc: '/images/people-6.jpg',
    company: 'BrightWeb'
  },
  {
    content: 'Développeur très professionnel ! Le site est rapide، moderne et parfaitement optimisé.',
    name: 'Lucas Martin',
    imgSrc: '/images/people-7.jpg',
    company: 'StudioNova'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration.',
    name: 'Ethan Caldwell',
    imgSrc: '/images/people-8.jpg',
    company: 'NexaWave'
  },
  {
    content: 'خبرة واضحة في تطوير الويب. الموقع متجاوب وسريع ويعمل بشكل مثالي.',
    name: 'محمد العتيبي',
    imgSrc: '/images/people-9.jpg',
    company: 'رؤية التقنية'
  },
  {
    content: 'Un développeur très talentueux. Le design et la performance du site dépassent nos attentes.',
    name: 'Antoine Lefevre',
    imgSrc: '/images/people-10.jpg',
    company: 'DigitalFlow'
  },
  {
    content: 'Professional work! Delivered on time with a polished design and smooth user experience.',
    name: 'Ava Thompson',
    imgSrc: '/images/people-11.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'تنفيذ مشروع ممتاز! كود عالي الجودة وتصميم متجاوب ومهارات قوية في حل المشكلات.',
    name: 'محمد العتيبي',
    imgSrc: '/images/people-12.jpg',
    company: 'رؤية التقنية'
  }
];
    return (
        <section id="reviews" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 ">
                    What our customers say
                </h2>
            </div>
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 15,
                    repeat: Infinity
                }} className="flex items-stretch gap-3">
                {
                    [...reviews, ...reviews].map(({ content, name, imgSrc, company }, key) => (
                        <ReviewsCard content={content}
                            name={name}
                            imgSrc={imgSrc}
                            company={company} key={key} />
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Reviews