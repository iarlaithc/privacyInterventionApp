import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import InfoPage from "./infoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
