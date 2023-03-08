import { Link } from "react-router-dom"
import "./Styles.css"

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
          <Link to="../">Back</Link>
        </div>
      </div>
      <div className="appTitle">
        <p>{data["title"]}</p>
      </div>
      <div className="appInfo1">
        <p>{data["info1"]}</p>
      </div>
      <div className="appInfo1">
        <p>{data["info2"]}</p>
      </div>
      <div className="appInfo1">
        <p>{data["info3"]}</p>
      </div>
      <div className="appInfo1">
        <p>{data["info4"]}</p>
      </div>
    </div>
  )
}

export default About
