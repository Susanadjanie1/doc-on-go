import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SelectRole from "./components/SelectRole";
import DocSignup from "./pages/DocSignup";
import PatientSignup from "./pages/PatientSignup";
import DocLogin from "./pages/DocLogin";
import PatientLogin from "./pages/PatientLogin";
import Dashboard from "./pages/Dashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import { DocHome } from "./pages/DocHome";
import { PatientHome } from "./pages/PatientHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/signup-doctor" element={<DocSignup />} />
        <Route path="/signup-patient" element={<PatientSignup />} />
        <Route path="/login-doctor" element={<DocLogin />} />
        <Route path="/login-patient" element={<PatientLogin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="doc-dash" element={<DoctorDashboard />} />
        <Route path="doc-home" element={<DocHome />} />
        <Route path="patient-home" element={<PatientHome />} />
      </Routes>
    </Router>
  );
}

export default App;
