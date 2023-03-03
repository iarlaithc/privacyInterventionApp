import { Link } from "react-router-dom"
import "./Styles.css"

function About() {
  return (
    <div class="body">
      <div class="header-nav-bar">
        <div class="back-btn">
          <Link to="../">Back</Link>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default About
