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
import GetPrescription from "./components/GetPrescription";
import HealthLogs from "./components/HealthLogs";
import WellnessTips from "./components/WellnessTips";
import EmergencyHelp from "./components/EmergencyHelp";
import PatientSymptomForm from "./components/PatientSymptomForm";
import DoctorRespond from "./components/DoctorRespond";
import MyRequests from "./components/MyRequests";
import SingleRequest from "./components/SingleRequest";
import ScanIllnessAssistant from "./components/ScanIllnessAssistant";
import DoctorProfile from "./pages/DoctorProfile";

function App() {
  return (
    <Router>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 6000,
          style: {
            background: "#F4FBF4",
            color: "#1A6436",
            borderRadius: "10px",
            padding: "12px 16px",
            fontSize: "14px",
          },
          success: {
            style: {
              background: "#D1FAD7",
              color: "#14592F",
            },
          },
          error: {
            style: {
              background: "#FFE1E1",
              color: "#D14343",
            },
          },
        }}
      />
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
        <Route path="/prescription/:id" element={<GetPrescription />} />
        <Route path="/health-logs" element={<HealthLogs />} />
        <Route path="/wellness-tips" element={<WellnessTips />} />
        <Route path="/emergency-help" element={<EmergencyHelp />} />
        <Route path="/symptom-form" element={<PatientSymptomForm />} />
        <Route path="/doctor/request" element={<MyRequests />} />
        <Route path="/doctor/respond/:id" element={<DoctorRespond />} />
        <Route path="/doctor/request/:id" element={<SingleRequest />} />
        <Route path="/scan-assist" element={<ScanIllnessAssistant />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
