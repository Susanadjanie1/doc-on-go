import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SelectRole from "./components/SelectRole";
import DocSignup from "./pages/DocSignup";
import PatientSignup from "./pages/PatientSignup";
import DocLogin from "./pages/DocLogin";
import PatientLogin from "./pages/PatientLogin";
import Dashboard from "./pages/Dashboard";
import PatientDashboard from "./pages/PatientDashboard";
import { DocHome } from "./pages/DocHome";
import { PatientHome } from "./pages/PatientHome";
import { Toaster } from "react-hot-toast";
import Setting from "./pages/Setting";

function App() {
  return (
    
    <Router>
      
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/signup-doctor" element={<DocSignup />} />
        <Route path="/signup-patient" element={<PatientSignup />} />
        <Route path="/login-doctor" element={<DocLogin />} />
        <Route path="/login-patient" element={<PatientLogin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="patient-dash" element={<PatientDashboard />} />
        <Route path="doc-home" element={<DocHome />} />
        <Route path="patient-home" element={<PatientHome />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
