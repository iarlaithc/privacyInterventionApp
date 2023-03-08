import "./Styles.css"
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"


//logos
import snap_logo from "./media/snapchat.png"
import instagram_logo from "./media/instagram.png"
import tiktok_logo from "./media/tiktok.png"
import twitter_logo from "./media/twitter.png"
import youtube_logo from "./media/youtube.png"
import bereal_logo from "./media/bereal.png"


const items = [
  { id: 1, title: "Item 1", description: "This is the first item" },
  { id: 2, title: "Item 2", description: "This is the second item" },
  { id: 3, title: "Item 3", description: "This is the third item" },
]

function Home() {
  return (
    <div className="body">
      <div className="header-nav-bar">
        <h1>Home</h1>
      </div>

      <div className="links-bar">
        <div classNameName="links-grid-container">
          <div className="link-grid-item">
            <Link className="inline-link" to="/About">
              Algorithms
            </Link>
          </div>
          <div className="link-grid-item">
            <Link className="inline-link" to="/About">
              Misleading UI
            </Link>
          </div>
          <div className="link-grid-item">
            <Link className="inline-link" to="/About">
              Privacy
            </Link>
          </div>
        </div>
      </div>

      <div className="grid-body">
        <div className="icon-grid-container">
          <div className="grid-item">
            <Link to="/About">
              <img src={snap_logo} alt="snapchat icon" />
              <p>Snapchat</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About">
              <img src={instagram_logo} alt="instagram icon" />
              <p>TikTok</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About">
              <img src={tiktok_logo} alt="TikTok icon" />
              <p>TikTok</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About">
              <img src={twitter_logo} alt="Twitter icon" />
              <p>Twitter</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About">
              <img src={youtube_logo} alt="Youtube icon" />
              <p>Youtube</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About">
              <img src={bereal_logo} alt="Bereal icon" />
              <p>Bereal</p>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home
