import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={'About'} />
          <Route path="/projects" element={'Projects'} />
        </Routes>
      </Router>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </main>
  )
}

export default App
