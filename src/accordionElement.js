import { React, useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useSpring, animated } from "react-spring"

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false)
  let toggleHandler = (e) => {
    setIsOpen(!isOpen)
  }

  //conditional styling
  const styles = {
    //if open is true, show content
    accordionTitle: {
      color: isOpen ? "#e8f1f2" : "13293d",
    },
  }
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "40px" },
    to: { opacity: "1", maxHeight: isOpen ? "120px" : "40px" },
    config: { duration: "300" },
  })

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#13293d",
    },
    to: {
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      color: isOpen ? "#e8f1f2" : "#13293d",
    },
    config: { duration: "120" },
  })

  return (
    <animated.div className="accordion-item" style={openAnimation}>
      <div className="accordion-title" onClick={toggleHandler}>
        <div style={styles.accordionTitle}>{props.title}</div>
        <animated.i style={iconAnimation}>
          <ExpandMoreIcon />
        </animated.i>
      </div>
      <div className="accordion-content">{props.text}</div>
    </animated.div>
  )
}

export default Accordion
