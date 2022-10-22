import PropTypes from "prop-types"

function Button({ label, backgroundColor, size = "md", borderRadius, fontSize, color, display, handleClick }) {
  let scale = 1
  let displayProp
  let fontsize = fontSize
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  if (display === "visible") displayProp = "block"
  if (display === "invisible") displayProp = "none"
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "lightgray 1px solid",
    fontSize: `${fontsize}px`,
    display: `${displayProp}`,
    color: `${color}`,
    borderRadius: `${borderRadius}px`
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  display: PropTypes.oneOf(["visible", "invisible"]),
  borderRadius: PropTypes.number,
  handleClick: PropTypes.func,
}

export default Button