import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import { Autoplay, EffectFade, Navigation, Thumbs } from 'swiper/modules';
// import { ButtonOutline } from './Button';

const ProjectsImageSlider = ({ imgs,index }) => {
  return (
    <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Thumbs, Autoplay,EffectFade,Navigation]}
      watchSlidesProgress={true}
      thumbs={true}
      effect='fade'
      navigation={
        {
          nextEl: `.swiper-button-next-${index}`,
          prevEl: `.swiper-button-prev-${index}`,
        }
      }
    // onSwiper={(swiper) => console.log(swiper)}
    >
      {imgs.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={img + "_Mohamed_Khassar"} loading="lazy" className="img-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


ProjectsImageSlider.propTypes = {
  imgs: PropTypes.array.isRequired,
  index: PropTypes.number,
}

export default ProjectsImageSlider;