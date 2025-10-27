import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Navbar from "./Components/Navbar";
import MouseTrail from "./Components/MouseTrail";
import HeroSection from "./Components/HomePage/HeroSection";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
      <MouseTrail/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />          
        </Routes>
    </Router>
  );
}

export default App;
