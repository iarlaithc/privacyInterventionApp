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
      <div className="sourcesBody">
        <h3>Terms and Conditions</h3>
        <div className="sourceLink">
          <a href="https://twitter.com/en/tos">
            <p>Twitter T&C</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://bere.al/en/terms">
            <p>BeReal T&C</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://help.instagram.com/581066165581870">
            <p>Instagram T&C</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://snap.com/en-US/terms">
            <p>Snapchat T&C</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://www.youtube.com/static?template=terms">
            <p>Youtube T&C</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://www.tiktok.com/legal/page/eea/terms-of-service/en">
            <p>TikTok T&C</p>
          </a>
        </div>
        <br></br>
        <h3>Misleading UI</h3>
        <div className="sourceLink">
          <a href="https://uxdesign.cc/i-was-on-tiktok-for-30-days-it-is-manipulative-addictive-and-harmful-to-privacy-9e25445a9122">
            <p>Tiktok Misleading UI</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://twitter.com/LuizaJarovsky/status/1621177269023809537">
            <p>Tiktok Misleading UI 2</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://www.spiegeloog.amsterdam/hooked-on-snapchat/">
            <p>Snapchat Misleading UI</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://twitter.com/aro_007/status/1091052540223995905">
            <p>Misleading UI</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://www.vox.com/recode/22351108/dark-patterns-ui-web-design-privacy">
            <p>Dark Patterns</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://www.researchgate.net/figure/Example-of-nagging-behavior-on-Instagram-where-a-modal-dialogue-provides-no-opportunity_fig1_322916969">
            <p>Instagram Misleading UI</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://twitter.com/PVBrett/status/1554437214389604353">
            <p>Instagram Misleading UI 2</p>
          </a>
        </div>
        <br></br>
        <h3>Technical & Security Analysis</h3>
        <div className="sourceLink">
          <a href="https://github.com/linkedin/qark">
            <p>QARK tool</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://github.com/notmarek/BeFake">
            <p>BeFake API</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://hot3eed.github.io/snap_part1_obfuscations.html">
            <p>Snapchat decompilation</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://www.zaproxy.org/">
            <p>ZAP analysis tool</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://github.com/sergiger/TMA_BeReal">
            <p>BeReal Analysis</p>
          </a>
        </div>
        <div className="sourceLink">
          <a href="https://github.com/davidteather/TikTok-Api">
            <p>Tiktok unoffical Api</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SourcesPage
