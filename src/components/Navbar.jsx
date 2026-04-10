import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useLanguage } from "../hooks/useLanguage";
const Navbar = ({ navOpen, navRef }) => {
  const { t } = useTranslation('navbar');

  const lastActiveLink = useRef()
  const activeBox = useRef()
  const navItems = [
    {
      label: 'home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'about',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'skills',
      link: '#skills',
      className: 'nav-link'
    },
    {
      label: 'certificates',
      link: '#certificates',
      className: 'nav-link'
    },
    {
      label: 'work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'contact',
      link: '#contact',
      className: "nav-link contact",
    }
  ];


  const selectActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px"
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px"
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px"
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px"
  }

  const { language } = useLanguage();

  const handelSelectActive = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target?.classList.add("active")
    lastActiveLink.current = event.target
    selectActiveBox()
  }
  useEffect(selectActiveBox, [])
  useEffect(() => {
    window.addEventListener('resize', selectActiveBox)
    return () => {
      i18n.off('languageChanged', selectActiveBox);
      document.removeEventListener('resize', selectActiveBox);
    };
  })
  useEffect(() => {
    selectActiveBox()

  }, [language]);
  return (
    <nav
      ref={navRef}
      className={`navbar ${navOpen ? "active" : ""}`}>
      {
        navItems.map(({ className, label, link, ref }, i) => (
          <a
            onClick={handelSelectActive}
            href={"/" + link}
            ref={ref}
            className={className}
            key={i}
          >
            {t(label)}
          </a>

        ))
      }
      <div className="active-box" ref={activeBox}></div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  navRef: PropTypes.object
}
export default Navbar