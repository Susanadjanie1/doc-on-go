import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";  
import { Download, ClipboardList, CheckCircle } from "lucide-react";
import { jsPDF } from "jspdf";
import { apiClient } from "../services/config";

const GetPrescription = () => {
  const { id: requestId } = useParams();  
  const navigate = useNavigate(); 
  const [prescriptionData, setPrescriptionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrescription = async () => {
      try {
        const response = await apiClient.get(`/request/${requestId}`);
        setPrescriptionData(response.data);
      } catch (error) {
        console.error("Failed to fetch prescription:", error);
      } finally {
        setLoading(false);
      }
    };

    if (requestId) {
      fetchPrescription();
    }
  }, [requestId]);

  const handleDownloadPDF = () => {
    if (!prescriptionData) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Your Prescription", 20, 20);

    doc.setFontSize(14);
    doc.text("Diagnosis:", 20, 40);
    doc.setFontSize(12);
    doc.text(prescriptionData.description || "No description", 20, 50);

    doc.setFontSize(14);
    doc.text("Medications:", 20, 70);
    doc.setFontSize(12);
    doc.text("- Medication 1 (Follow doctor's advice)", 20, 80);
    doc.text("- Medication 2 (Follow doctor's advice)", 20, 90);

    doc.save(`prescription_${requestId}.pdf`);
  };

  const goBackToDashboard = () => {
    navigate("/patient-dash");  
  };

  if (loading) {
    return <div className="p-6">Loading prescription...</div>;
  }

  if (!prescriptionData) {
    return <div className="p-6 text-red-500">No prescription data found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f8f7] p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Prescription</h2>

      <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <ClipboardList size={20} /> Diagnosis Summary
        </h3>
        <p className="text-sm text-gray-600">{prescriptionData.description}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <CheckCircle size={20} /> Medications
        </h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
          <li>Medication 1 – follow doctor's advice</li>
          <li>Medication 2 – follow doctor's advice</li>
        </ul>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownloadPDF}
          className="bg-[#FF8B77] hover:bg-[#ff6f5e] text-white font-medium py-3 px-6 rounded-xl flex items-center gap-2 shadow-md"
        >
          <Download size={18} /> Download Prescription
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={goBackToDashboard}  
          className="bg-[#FF8B77] hover:bg-[#ff6f5e] text-white font-medium py-3 px-6 rounded-xl flex items-center gap-2 shadow-md"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default GetPrescription;
