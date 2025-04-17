import React from "react";
import { Download, ClipboardList, CheckCircle } from "lucide-react";

const GetPrescription = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f8f7] p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Your Prescription
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <ClipboardList size={20} /> Diagnosis Summary
        </h3>
        <p className="text-sm text-gray-600">
          Based on your symptoms, it appears you're experiencing mild seasonal
          allergies. It's advised to avoid triggers like pollen and dust.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <CheckCircle size={20} /> Medications
        </h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
          <li>Cetirizine 10mg – once daily after meals</li>
          <li>Saline Nasal Spray – 2 puffs in each nostril every 8 hours</li>
          <li>Drink plenty of water and rest well</li>
        </ul>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-[#FF8B77] hover:bg-[#ff6f5e] text-white font-medium py-3 px-6 rounded-xl flex items-center gap-2 shadow-md">
          <Download size={18} /> Download Prescription
        </button>
      </div>
    </div>
  );
};

export default GetPrescription;
