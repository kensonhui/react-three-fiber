import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Attributions from "./pages/Attributions";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/react-three-fiber/" element={<Home />} />
          <Route path="/react-three-fiber/about" element={"About"} />
          <Route path="/react-three-fiber/projects" element={"Projects"} />
          <Route
            path="/react-three-fiber/attributions"
            element={<Attributions />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
