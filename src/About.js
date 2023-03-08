import { Link } from "react-router-dom"
import "./Styles.css"
import { MuiAccordion } from "./components/MuiAccordian.tsx"

function About() {
  return (
    <div class="body">
      <div class="header-nav-bar">
        <div class="back-btn">
          <Link to="../">Back</Link>
          <p></p>
        </div>
      </div>
      <MuiAccordion />
    </div>
  )
}

export default About
