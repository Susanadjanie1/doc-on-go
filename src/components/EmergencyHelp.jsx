import React from "react";
import { PhoneCall, Hospital } from "lucide-react";

const EmergencyHelp = () => {
  const callAmbulance = () => {
    window.location.href = "tel:112";
  };

  const findNearbyHospitals = () => {
    window.open(
      "https://www.google.com/maps/search/nearby+hospitals/",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-[#f0fdf4] to-white text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">
        🚑 Emergency Assistance
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-sm">
        <button
          onClick={callAmbulance}
          className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-2xl text-lg shadow-md transition"
        >
          <PhoneCall size={24} />
          Call Ambulance
        </button>

        <button
          onClick={findNearbyHospitals}
          className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl text-lg shadow-md transition"
        >
          <Hospital size={24} />
          Find Nearby Hospitals
        </button>
      </div>

      <p className="mt-8 text-gray-500 text-center text-sm">
        Stay calm. Help is on the way.
      </p>
    </div>
  );
};

export default EmergencyHelp;
