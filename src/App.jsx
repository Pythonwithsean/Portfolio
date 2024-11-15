import "./Styles/App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (often the root route) */}
        <Route path="/" element={<Home className=" overflow-hidden" />} />
      </Routes>
    </Router>
  );
}

export default App;
