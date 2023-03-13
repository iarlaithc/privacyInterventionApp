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
      <div className="header-nav-bar">
        <div className="back-btn">
          <Link className="backButtonClass" to="../">
            Back
          </Link>
        </div>
        <div className="appTitle">{data.title}</div>
        <div className="back-btn"></div>
      </div>
      <div className="accordionBox">
        <GenAccordion textArray={data.infoAccordion}></GenAccordion>
        <GenAccordion textArray={data.tutorialAccordion}></GenAccordion>
        <GenAccordion
          textArray={data.misUiAccordion}
          images={data.misUiImages}
        ></GenAccordion>
        <GenAccordion textArray={data.tecSecAccordion}></GenAccordion>
        <GenAccordion textArray={data.tncAccordion}></GenAccordion>
      </div>
    </div>
  )
}

export default About
