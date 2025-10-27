import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Home from "./src/Pages/Home";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />          
        </Routes>
    </Router>
  );
}

export default App;
