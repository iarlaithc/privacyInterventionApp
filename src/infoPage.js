import "./Styles.css"
import { Link } from "react-router-dom"
import { MuiAccordion } from "./MuiAccordian.tsx"

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
      </div>
      <div className="appTitle">
        <p>{data.title}</p>
      </div>
      <MuiAccordion />
    </div>
  )
}
export default InfoPage
