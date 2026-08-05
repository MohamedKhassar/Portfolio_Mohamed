import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CgChevronDown } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { useLanguage } from '../hooks/useLanguage';

const LANGUAGES = [
  {
    code: "en",
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
        <rect x="1" y="4" width="30" height="24" rx="4" fill="#071b65" />
        <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff" />
        <path d="M22.25,19h-2.5l9.934,7.947c.387-.353.704-.777.929-1.257l-8.363-6.691Z" fill="#b92932" />
        <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387.353-.704.777-.929,1.257Z" fill="#b92932" />
        <path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff" />
        <rect x="13" y="4" width="6" height="24" fill="#fff" />
        <rect x="1" y="13" width="30" height="6" fill="#fff" />
        <rect x="14" y="4" width="4" height="24" fill="#b92932" />
        <rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932" />
        <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932" />
        <path d="M2.328,26.957c.414.374.904.656,1.447.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932" />
      </svg>
    ),
    label: "English",
  },
//   {
//     code: "de",
//     image: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
//         <path fill="#cc2b1d" d="M1 11H31V21H1z" />
//         <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" />
//         <path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#f8d147" />
//       </svg>
//     ),
//     label: "Deutsch",
//   },
  {
    code: "fr",
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
        <rect x="1" y="4" width="10" height="24" fill="#0055A4" />
        <rect x="11" y="4" width="10" height="24" fill="#ffffff" />
        <rect x="21" y="4" width="10" height="24" fill="#EF4135" />
        <path d="M27,4H5C2.79,4,1,5.79,1,8V24c0,2.21,1.79,4,4,4H27c2.21,0,4-1.79,4-4V8C31,5.79,29.21,4,27,4Z" fill="none" stroke="rgba(0,0,0,.15)" />
      </svg>
    ),
    label: "Français",
  },
//   {
//     code: "ar",
//     image: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
//         <rect x="1" y="4" width="30" height="24" fill="#C1272D" rx="4" />
//         <path
//           fill="none"
//           stroke="#006233"
//           strokeWidth="1.5"
//           d="M16 10.5l1.18 3.63h3.82l-3.09 2.25 1.18 3.62L16 17.75 12.91 20l1.18-3.62L11 14.13h3.82z"
//         />
//       </svg>
//     ),
//     label: "العربية",
//   },
];

const SelectLang = ({ className = "" }) => {
    const { i18n: i18nHook } = useTranslation();
    const [showLanguages, setShowLanguages] = useState(false);
    const { language, changeLanguage } = useLanguage();
    const SelectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (SelectRef.current && !SelectRef.current.contains(e.target)) {
                setShowLanguages(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <article className={`relative group bg-gradient-to-b from-slate-800 to-slate-800/40 backdrop-blur-2xl rounded-3xl cursor-pointer py-2.5 px-2 hover:to-slate-800/80 transition duration-500 lg:min-w-24 min-w-20 ${className}`}>
            {
                language && (
                    <div ref={SelectRef} className='flex gap-x-2 items-center justify-center lg:text-sm text-xs' onClick={() => setShowLanguages(pre => !pre)}>
                        {/* {LANGUAGES.find((lang) => lang.code === language)?.image} */}
                        <span className='uppercase'>{LANGUAGES.find((lang) => lang.code === language)?.image}</span>
                        <CgChevronDown className={`text-xl group-hover:rotate-180 transition-transform duration-500 ${showLanguages ? 'rotate-180' : ''}`} />
                    </div>
                )
            }
            <div className={`flex flex-col gap-1 items-center justify-start absolute group-hover:opacity-100 group-hover:visible transition-[opacity, visibility] duration-500 bg-slate-900 rounded-2xl top-full left-0 mt-1.5 opacity-0 invisible w-full py-2 px-2 ${showLanguages ? 'opacity-100 visible' : ''}`}>
                {LANGUAGES.map(({ code, image, label }) => (
                    <button onClick={() => changeLanguage(code, image, label)} key={code} className={`flex gap-x-2 px-4 py-2 justify-center w-full text-sm rounded-3xl bg-gradient-to-b from-slate-800 to-slate-800/60 hover:bg-slate-900 cursor-pointer focus:bg-slate-950 ${i18nHook.language === code ? "bg-slate-950" : ""}`}>
                        {/* <img src={image} alt={label} width={20} height={20} /> */}
                        {/* {image} */}
                        <span className='lg:text-sm text-xs'>{label}</span>
                    </button>
                ))}
            </div>
        </article >
    )
}

SelectLang.propTypes = {
    className: PropTypes.string,
}

export default SelectLang