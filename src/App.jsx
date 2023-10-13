import "./Styles/App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (often the root route) */}
        <Route index element={<Home className=" overflow-hidden" />} />
        <Route path="/" element={<Home className=" overflow-hidden" />} />
        <Route path="/Home" element={<Home className=" overflow-hidden" />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
