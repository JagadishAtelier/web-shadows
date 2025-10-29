import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Home from "@/Pages/WebHome";
import MouseTrail from "./Components/MouseTrail";
function App() {
  return (
    <Router>
      <MouseTrail/>
        <Routes>
          <Route path="/" element={<Home/>} />          
        </Routes>
    </Router>
  );
}

export default App;
