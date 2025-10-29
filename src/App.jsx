import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Home from "./Pages/Home";
import HeroSection from "./Components/HomePage/HeroSection";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HeroSection/>} />          
        </Routes>
    </Router>
  );
}

export default App;
