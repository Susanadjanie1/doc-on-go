import React from "react";
import { AlertTriangle, PhoneCall, MapPin } from "lucide-react";

const Help = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-2 flex items-center gap-2">
        <AlertTriangle size={28} className="text-red-600" />
        Emergency Help
      </h2>
      <p className="text-gray-700 mb-4">
        If you're experiencing a medical emergency, please use the options below
        to get immediate help.
      </p>

      <div className="space-y-4">
        <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
            <PhoneCall size={20} /> Call Emergency Line
          </h3>
          <p className="text-gray-800 mt-1">+233 302 999 999</p>
        </div>

        <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-orange-700 flex items-center gap-2">
            <MapPin size={20} /> Find Nearby Hospital
          </h3>
          <p className="text-gray-800 mt-1">Tap here to use GPS and locate help near you.</p>
        </div>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl text-center font-semibold shadow-md transition">
          Tap to Send SOS
        </button>
      </div>
    </div>
  );
};

export default Help;
