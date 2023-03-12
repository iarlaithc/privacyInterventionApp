import "./Styles.css"
import { Link } from "react-router-dom"

//logos
import snap_logo from "./media/logos/snapchat.png"
import instagram_logo from "./media/logos/instagram.png"
import tiktok_logo from "./media/logos/tiktok.png"
import twitter_logo from "./media/logos/twitter.png"
import youtube_logo from "./media/logos/youtube.png"
import bereal_logo from "./media/logos/bereal.png"

//import appdata for apps
import appData from "./appData.json"

function Home(props) {
  const appDataObj = appData

  return (
    <div className="body">
      <div className="header-nav-bar">
        <h1>*App name*</h1>
      </div>

      <div className="links-bar">
        <div className="links-grid-container">
          <div className="link-grid-item">
            <Link
              className="misleading-inline-link"
              to="/info"
              state={appDataObj.misleadingUI}
            >
              Misleading UI
            </Link>
            <Link
              className="privacy-inline-link"
              to="/info"
              state={appDataObj.privacy}
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>

      <div className="grid-body">
        <div className="icon-grid-container">
          <div className="grid-item">
            <Link to="/About" state={appDataObj.snapchat}>
              <img src={snap_logo} alt="snapchat icon" />
              <p>Snapchat</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About" state={appDataObj.instagram}>
              <img src={instagram_logo} alt="instagram icon" />
              <p>Instagram</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About" state={appDataObj.tiktok}>
              <img src={tiktok_logo} alt="TikTok icon" />
              <p>TikTok</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About" state={appDataObj.twitter}>
              <img src={twitter_logo} alt="Twitter icon" />
              <p>Twitter</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/About" state={appDataObj.youtube}>
              <img src={youtube_logo} alt="Youtube icon" />
              <p>Youtube</p>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/About" state={appDataObj.bereal}>
              <img src={bereal_logo} alt="Bereal icon" />
              <p>Bereal</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sources">
        <Link
          className="sources-inline-link"
          to="/sources"
          state={appDataObj.sources}
        >
          Sources
        </Link>
      </div>
    </div>
  )
}

export default Home
