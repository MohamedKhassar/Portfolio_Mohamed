import PropTypes from "prop-types"
import { AiFillStar } from "react-icons/ai"
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const ReviewsCard = ({ content,
    name,
    imgSrc,
    company }) => {
    const ratings = Array(5).fill(<AiFillStar className="text-yellow-300 text-[18px]" />)
    const detectLang = (text) => {
          const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
        return arabicRegex.test(text) ? "ar" : "en";
    };
    const isArabic = detectLang(name) === "ar";
    return (
        <div
            lang={detectLang(name)}
            dir={isArabic ? "rtl" : "ltr"}
            className={`bg-slate-800 p-5 rounded-xl min-w-[220px] lg:w-[520px] w-[320px] flex flex-col lg:min-w-[320px] h-full ${isArabic ? "text-right" : "text-left"}`}>
            <div className="flex gap-1 items-center mb-3">
                {ratings.map((rating) => (
                    rating
                ))}
            </div>
            <p className="text-slate-400 text-lg mb-8">
                {content}
            </p>
            <div className="flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-full w-10 h-10">
                    <img
                        src={imgSrc}
                        alt={name}
                        className="img-cover"
                        width={30}
                        height={30}
                        draggable="false"
                    />
                </figure>
                <div>
                    <p className="text-xl">
                        {name}
                    </p>
                    <p className="text-sm text-slate-400 tracking-wider font-bold">
                        {company}
                    </p>
                </div>
            </div>
        </div>
    )
}

ReviewsCard.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default ReviewsCard