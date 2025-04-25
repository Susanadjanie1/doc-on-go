import React, { useState } from "react";
import {
  Home,
  Notebook,
  Lightbulb,
  User,
  Stethoscope,
  Camera,
  Pill,
  Activity,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router";

import PatientSymptomForm from "../components/PatientSymptomForm";
import ScanIllnessAssistant from "../components/ScanIllnessAssistant";
import WellnessTips from "../components/WellnessTips";
import HealthLogs from "../components/HealthLogs";
import EmergencyHelp from "../components/EmergencyHelp";

const featureCards = [
  {
    title: "Input Symptoms",
    icon: <Stethoscope size={28} />,
    color: "bg-teal-100",
    action: "symptomForm",
  },
  {
    title: "Scan with Camera",
    icon: <Camera size={28} />,
    color: "bg-amber-100",
    action: "scanAssistant",
  },
  {
    title: "Get Prescription",
    icon: <Pill size={28} />,
    color: "bg-rose-100",
    action: "prescription",
  },
  {
    title: "Health Logs",
    icon: <Activity size={28} />,
    color: "bg-sky-100",
    action: "healthLogs",
  },
  {
    title: "Wellness Tips",
    icon: <Lightbulb size={28} />,
    color: "bg-lime-100",
    action: "wellnessTips",
  },
  {
    title: "Emergency Help",
    icon: <AlertCircle size={28} />,
    color: "bg-red-100",
    action: "emergencyHelp",
  },
];

const PatientDashboard = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const navigate = useNavigate();

  const handleCardClick = (action) => {
    if (action === "prescription") {
      const savedId = localStorage.getItem("lastRequestId");
      if (savedId) {
        navigate(`/prescription/${savedId}`);
      } else {
        alert("No recent prescription found. Please submit symptoms first.");
      }
    } else if (action === "healthLogs") {
      navigate("/health-logs");
    } else if (action === "wellnessTips") {
      navigate("/wellness-tips");
    } else if (action === "emergencyHelp") {
      navigate("/emergency-help");
    } else {
      setActiveView(action);
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case "symptomForm":
        return <PatientSymptomForm />;
      case "scanAssistant":
        return <ScanIllnessAssistant />;
      case "healthLogs":
        return <HealthLogs />;
      case "wellnessTips":
        return <WellnessTips />;
      case "emergencyHelp":
        return <EmergencyHelp />;
      default:
        return (
          <>
            <div className="px-6 pt-10 pb-4">
              <h1 className="text-3xl font-bold text-[#1A6436] mb-1">Hi Adjoa Mensah 👋</h1>
              <p className="text-md text-gray-600">What would you like to do today?</p>
            </div>

            <div className="grid grid-cols-2 gap-4 px-6 pb-6">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(card.action)}
                  className={`rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${card.color} transform hover:scale-105`}
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-primary text-2xl">{card.icon}</div>
                    <p className="text-sm font-medium text-center text-[#1A6436]">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 mb-6">
              <button
                onClick={() => setActiveView("symptomForm")}
                className="w-full bg-[#1A6436] hover:bg-[#7ECD26] text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl transition"
              >
                Get Started
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#E6F5F3] to-white text-gray-800 font-sans">
      {renderContent()}

      <nav className="bg-white px-6 py-3 flex justify-around items-center rounded-t-3xl shadow-inner border-t">
        <NavItem
          label="Home"
          icon={<Home size={24} />}
          active={activeView === "dashboard"}
          onClick={() => setActiveView("dashboard")}
        />
        <NavItem
          label="Logs"
          icon={<Notebook size={24} />}
          active={activeView === "healthLogs"}
          onClick={() => setActiveView("healthLogs")}
        />
        <NavItem
          label="Tips"
          icon={<Lightbulb size={24} />}
          active={activeView === "wellnessTips"}
          onClick={() => setActiveView("wellnessTips")}
        />
        <NavItem label="Profile" icon={<User size={24} />} active={false} />
      </nav>
    </div>
  );
};

const NavItem = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center text-xs transition-all ${
      active ? "text-[#1A6436] font-semibold" : "text-gray-500"
    }`}
  >
    {icon}
    <span className="mt-1">{label}</span>
  </button>
);

export default PatientDashboard;
