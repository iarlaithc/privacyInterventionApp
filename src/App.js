import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import InfoPage from "./infoPage"
import SourcesPage from "./sources"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    document.title = "Digital Privacy Intervention"
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/sources" element={<SourcesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
