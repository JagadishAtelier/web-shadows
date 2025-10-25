import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Posts from "./pages/Posts";
// import Users from "./pages/Users";
import AdminLayout from "./layout/AdminLayout";
import "./App.css";
import { Pages } from "./pages/Pages";
import AllPageView from "./pages/NewPage/AllPageView";
import ProductsList from "./pages/ProductsList";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/LoginPage/Signup";
import { SidebarProvider } from "./components/Context/SidebarContext";
import PatientProfile from "./pages/PatientProfile/PatientProfile";
import DoctorNotes from "./pages/PatientProfile/DoctorNotes";
function App() {
  return (
    <SidebarProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Signup/>} />
          <Route
            path="/dashboard"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/patient-list"
            element={
              <AdminLayout>
                <ProductsList />
              </AdminLayout>
            }
          />
          <Route
            path="/overview/:id"
            element={
              <AdminLayout>
                <PatientProfile />
              </AdminLayout>
            }
          />
          <Route
            path="/doctor-notes"
            element={
              <AdminLayout>
                <DoctorNotes />
              </AdminLayout>
            }
          />
        </Routes>
    </Router>
    </SidebarProvider>
  );
}

export default App;
