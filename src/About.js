import { Link } from "react-router-dom"
import "./Styles.css"
import GenAccordion from "./accordionElement"

//data passthrough
import { useLocation } from "react-router-dom"

function About(props) {
  //props is KW for args passed through
  const location = useLocation()
  const data = location.state

  return (
    <div className="body">
      <div className="app-header-nav-bar">
        <div className="back-btn">
          <Link to="../">Back</Link>
        </div>
        <div className="appTitle">
          <p>{data.title}</p>
        </div>
      </div>

      <div className="accordionBox">
        <GenAccordion textArray={data.infoAccordion}></GenAccordion>
        <GenAccordion textArray={data.tutorialAccordion}></GenAccordion>
        <GenAccordion textArray={data.misUiAccordion}></GenAccordion>
        <GenAccordion textArray={data.tecSecAccordion}></GenAccordion>
        <GenAccordion textArray={data.tncAccordion}></GenAccordion>
      </div>
    </div>
  )
}

export default About
