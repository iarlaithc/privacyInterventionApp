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
        <GenAccordion
          title= "The information they have on you"text={data["info1"]}
        ></GenAccordion>

        <GenAccordion
          title= "Privacy protection tutorial"text={data["info2"]}
        ></GenAccordion>

        <GenAccordion
          title= "Misleading UI they use"text={data["info3"]}
        ></GenAccordion>

        <GenAccordion
          title= "their security test results"text={data["info4"]}
        ></GenAccordion>

        <GenAccordion
          title= "Their terms and conditions"text={data["info5"]}
        ></GenAccordion>

      </div>
    </div>
  )
}

export default About
