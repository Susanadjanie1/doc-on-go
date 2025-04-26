import React, { useState } from "react";
import { PhoneCall, Hospital, ArrowLeft, AlertCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router"; 

const ambulanceData = {
  "Greater Accra": [
    { name: "National Ambulance Service", phone: "112" },
    { name: "Korle Bu Ambulance", phone: "0302674066" },
  ],
  "Ashanti": [
    { name: "KATH Ambulance", phone: "0322039021" },
    { name: "Manhyia District Hospital", phone: "0322023168" },
  ],
  "Eastern": [{ name: "Koforidua Gov’t Hospital", phone: "0342022221" }],
  "Western": [{ name: "Effia Nkwanta Hospital", phone: "0312024567" }],
  "Central": [{ name: "Cape Coast Teaching Hospital", phone: "0332132456" }],
  "Northern": [{ name: "Tamale Teaching Hospital", phone: "0372023124" }],
  "Upper East": [{ name: "Bolgatanga Regional Hospital", phone: "0382022245" }],
  "Upper West": [{ name: "Wa Regional Hospital", phone: "0392022122" }],
  "Volta": [{ name: "Ho Teaching Hospital", phone: "0362023311" }],
  "Bono": [{ name: "Sunyani Municipal Hospital", phone: "0352022234" }],
  "Bono East": [{ name: "Techiman Holy Family Hospital", phone: "0352522145" }],
  "Ahafo": [{ name: "Goaso Gov’t Hospital", phone: "0352823230" }],
  "Savannah": [{ name: "Damongo Hospital", phone: "0372922256" }],
  "North East": [{ name: "Nalerigu Baptist Medical Centre", phone: "0372623122" }],
  "Western North": [{ name: "Sefwi Wiawso Hospital", phone: "0312321144" }],
  "Oti": [{ name: "Dambai Health Centre", phone: "0362523450" }],
};

const EmergencyHelp = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const navigate = useNavigate(); 

  const showAmbulanceToast = () => {
    if (!selectedRegion) {
      toast.error("Please select your region.");
      return;
    }

    const services = ambulanceData[selectedRegion];
    if (!services || services.length === 0) {
      toast.info("No ambulance data available for this region.");
    } else {
      services.forEach(({ name, phone }) => {
        toast(
          <span>
            🚑 <strong>{name}</strong>:{" "}
            <a
              href={`tel:${phone}`}
              className="underline text-blue-600"
              onClick={(e) => e.stopPropagation()}
            >
              {phone}
            </a>
          </span>
        );
      });
    }
  };

  const findNearbyHospitals = () => {
    window.location.href = "https://www.google.com/maps/search/nearby+hospitals/";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[#F4FBF4] text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1A6436]">
  <AlertCircle size={32} className="inline mr-2" />
  Emergency Assistance
</h2>
      <div className="fixed top-4 left-6 z-10">
        <button
          onClick={() => navigate("/patient-dash")}
          className="text-[#7ECD26] text-3xl rounded-full p-2 hover:bg-[#7ECD26] hover:text-white transition duration-300"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-sm">
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7ECD26]"
        >
          <option value="">Select your region</option>
          {Object.keys(ambulanceData).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <button
          onClick={showAmbulanceToast}
          className="flex items-center justify-center gap-3 bg-[#FF8B77] hover:bg-[#e65c4f] text-white font-semibold py-4 rounded-2xl text-lg shadow-md transition"
        >
          <PhoneCall size={24} />
          Call Ambulance
        </button>

        <button
          onClick={findNearbyHospitals}
          className="flex items-center justify-center gap-3 bg-[#7ECD26] hover:bg-[#6bc31c] text-white font-semibold py-4 rounded-2xl text-lg shadow-md transition"
        >
          <Hospital size={24} />
          Find Nearby Hospitals
        </button>
      </div>

      <p className="mt-8 text-gray-500 text-center text-sm">
        Stay calm. Help is on the way.
      </p>

      <ToastContainer position="top-center" autoClose={8000} />
    </div>
  );
};

export default EmergencyHelp;
