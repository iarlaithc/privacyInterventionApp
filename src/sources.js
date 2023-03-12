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
                    <Link to="../">Back</Link>
                </div>
                <div className="appTitle-Source">
                    <p>{data.title}</p>
                </div>
            </div>
            <div className="accordion">
              
            </div>
        </div>
    )
}

export default SourcesPage