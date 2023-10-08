import "./Styles/App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (often the root route) */}
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
