import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Posts from "./pages/Posts";
// import Users from "./pages/Users";
import AdminLayout from "./layout/AdminLayout";
import "./App.css";
import { Pages } from "./pages/Pages";
import AllPageView from "./pages/NewPage/AllPageView";
import ProductsList from "./pages/ProductsList";
function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patient-list" element={<ProductsList />} />
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
