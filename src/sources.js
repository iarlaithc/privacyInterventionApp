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
                <div className="appTitle">
                    <p>{data.title}</p>
                </div>
            </div>
            <div className="accordion">
                <GenAccordion
                    title={data.content[0]}
                    text={data.content[1]}
                ></GenAccordion>

                <GenAccordion
                    title={data.content[2]}
                    text={data.content[3]}
                ></GenAccordion>
            </div>
        </div>
    )
}

export default SourcesPage