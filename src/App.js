import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import { MuiAccordion } from "./components/MuiAccordian.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
