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

import PatientSymptomForm from "../components/PatientSymptomForm";
import ScanIllnessAssistant from "../components/ScanIllnessAssistant";
import GetPrescription from "../components/GetPrescription";
import WellnessTips from "../components/WellnessTips";

const featureCards = [
  {
    title: "Input Symptoms",
    icon: <Stethoscope size={28} />,
    color: "bg-teal-100",
    action: "inputSymptoms",
  },
  {
    title: "Scan with Camera",
    icon: <Camera size={28} />,
    color: "bg-amber-100",
    action: "scanIllness",
  },
  {
    title: "Get Prescription",
    icon: <Pill size={28} />,
    color: "bg-rose-100",
    action: "getPrescription",
  },
  { title: "Health Logs", icon: <Activity size={28} />, color: "bg-sky-100" },
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
  },
];

const DoctorDashboard = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const handleCardClick = (action) => {
    switch (action) {
      case "inputSymptoms":
        setActiveView("symptomForm");
        break;
      case "scanIllness":
        setActiveView("scanAssistant");
        break;
      case "getPrescription":
        setActiveView("prescription");
        break;
      case "wellnessTips":
        setActiveView("wellnessTips");
        break;
      default:
        setActiveView("dashboard");
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case "symptomForm":
        return <PatientSymptomForm />;
      case "scanAssistant":
        return <ScanIllnessAssistant />;
      case "prescription":
        return <GetPrescription />;
      case "wellnessTips":
        return <WellnessTips />;
      default:
        return (
          <>
            <div className="px-6 pt-10 pb-4">
              <h1 className="text-3xl font-bold mb-1">Hi Adjoa Mensah</h1>
              <p className="text-md text-gray-600">
                What would you like to do today?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 px-6 pb-6">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(card.action)}
                  className={`rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer ${card.color}`}
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-primary">{card.icon}</div>
                    <p className="text-sm font-medium text-center">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 mb-6">
              <button className="w-full bg-[#FF8B77] text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-[#ff6f5e] transition">
                Get Started
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#e6f5f3] to-white text-gray-800 font-sans">
      {renderContent()}

      {/* Bottom Nav */}
      <nav className="bg-white px-6 py-3 flex justify-around items-center rounded-t-3xl shadow-inner border-t">
        <NavItem label="Home" icon={<Home size={24} />} active />
        <NavItem label="Logs" icon={<Notebook size={24} />} />
        <NavItem label="Tips" icon={<Lightbulb size={24} />} />
        <NavItem label="Profile" icon={<User size={24} />} />
      </nav>
    </div>
  );
};

const NavItem = ({ label, icon, active }) => (
  <div
    className={`flex flex-col items-center text-xs transition ${
      active ? "text-[#FF8B77] font-semibold" : "text-gray-500"
    }`}
  >
    {icon}
    <span className="mt-1">{label}</span>
  </div>
);

export default DoctorDashboard;
