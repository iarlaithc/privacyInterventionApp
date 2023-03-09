import "./Styles.css"
import { Link } from "react-router-dom"
import Accordion from "./accordionElement"

//data passthrough
import { useLocation } from "react-router-dom"

function InfoPage(props) {
  const location = useLocation()
  const data = location.state

  return (
    <div className="body">
      <div className="header-nav-bar">
        <div className="back-btn">
          <Link to="../">Back</Link>
        </div>
        <div className="appTitle">
          <p>{data.title}</p>
        </div>
      </div>
      <div className="accordion">
        <Accordion title={data.content[1]} text={data.content[0]}>
          <p>hi</p>
        </Accordion>
        <Accordion title={data.content[1]} text={data.content[0]}>
          <p>hi</p>
        </Accordion>
        <Accordion title={data.content[1]} text={data.content[0]}>
          <p>hi</p>
        </Accordion>
      </div>
    </div>
  )
}
export default InfoPage
