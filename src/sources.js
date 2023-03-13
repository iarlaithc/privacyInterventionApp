import "./Styles.css"
import { Link } from "react-router-dom"

//data passthrough
import { useLocation } from "react-router-dom"

function SourcesPage(props) {
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
    </div>
  )
}

export default SourcesPage
