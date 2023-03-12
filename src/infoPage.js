import "./Styles.css"
import { Link } from "react-router-dom"

//data passthrough
import { useLocation } from "react-router-dom"

function InfoPage(props) {
  const location = useLocation()
  const data = location.state
  const textArray = data.pageContent

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
      <div className="infoBody">
        {textArray.map((text, index) =>
          index % 2 === 0 ? (
            <div className="infoSubtitleCentre">
              <h4>{text}</h4>
            </div>
          ) : (
            <div className="infoParagraph">
              <p>{text}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}
export default InfoPage
