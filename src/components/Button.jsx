import PropTypes from "prop-types"
const ButtonPrimary = ({
    href,
    label,    
    target="_self",
    icon,
    classes
}) => {
  return (
    <>
    {
      href?
      <a href={href} target={target} className={"btn btn-primary "+classes}>{label} {icon}</a>
    :
    <button className={"btn btn-primary "+classes}></button>
    }
    </>
  )
}

ButtonPrimary.propTypes={
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.object,
    classes: PropTypes.string
}

const ButtonOutline = ({
    href,
    label,
    icon,
    classes
}) => {
  return (
    <>
    {
      href?
      <a href={href}  className={"btn btn-outline "+classes}>{label} {icon}</a>
    :
    <button className={"btn btn-outline "+classes}></button>
    }
    </>
  )
}

ButtonOutline.propTypes={
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.object,
    classes: PropTypes.string
}


export {
    ButtonPrimary,
    ButtonOutline
}