import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef()
  const activeBox = useRef()
  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Skills',
      link: '#skills',
      className: 'nav-link'
    },
    {
      label: 'Certificates',
      link: '#certificates',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Contact',
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


  const handelSelectActive = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target?.classList.add("active")
    lastActiveLink.current = event.target
    selectActiveBox()
  }
  useEffect(selectActiveBox, [])
  useEffect(()=>{
    window.addEventListener('resize', selectActiveBox)
    return () => {
      document.removeEventListener('resize', selectActiveBox);
  };  })

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {
        navItems.map(({ className, label, link, ref }, i) => (
          <a
            onClick={handelSelectActive}
            href={"/" + link}
            ref={ref}
            className={className}
            key={i}
          >
            {label}
          </a>

        ))
      }
      <div className="active-box" ref={activeBox}></div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}
export default Navbar