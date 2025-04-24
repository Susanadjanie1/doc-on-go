import React, { useState } from "react";
import { apiClient } from "../services/config";
import { Camera, Loader2, CheckCircle2 } from "lucide-react";

const ScanIllnessAssistant = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [image, setImage] = useState(null);

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);

    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmitScan = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }
    const formData = new FormData();
    formData.append("title", "Scanned Symptoms");
    formData.append("description", "Scan image submission");
    formData.append("specialty", "General Physician"); 
    formData.append("location", "Accra");
    formData.append("followUpContact", "0547255873");
    formData.append("image", image);

    try {
      const response = await apiClient.post("/api/v1/request", formData);
      console.log("Scan submitted:", response.data);
      alert("Scan submitted successfully!");
    } catch (error) {
      console.error("Error submitting scan:", error);
      alert("Something went wrong with the scan upload.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-[#f0fdf4] px-6 py-10 text-gray-800">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold">Scan for Health Issues</h2>
        <p className="text-sm text-gray-600">
          Hold your camera to the affected area or upload a photo for analysis.
        </p>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <div className="w-64 h-64 bg-white rounded-2xl shadow-inner flex items-center justify-center border border-dashed border-teal-300">
          {isScanning ? (
            <Loader2 className="animate-spin text-teal-500" size={48} />
          ) : scanComplete ? (
            <CheckCircle2 className="text-green-500" size={48} />
          ) : (
            <Camera className="text-gray-400" size={48} />
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-sm text-gray-600"
        />
      </div>

      <div className="mt-8 space-y-4">
        <button
          onClick={handleScan}
          disabled={isScanning}
          className={`w-full py-3 rounded-xl font-semibold text-lg transition shadow-md ${
            isScanning
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-teal-500 text-white hover:bg-teal-600"
          }`}
        >
          {isScanning ? "Scanning..." : "Start Scan"}
        </button>

        {scanComplete && (
          <button
            onClick={handleSubmitScan}
            className="w-full bg-[#FF8B77] text-white py-3 rounded-xl font-semibold hover:bg-[#ff6f5e] transition"
          >
            Submit Scan
          </button>
        )}
      </div>

      {scanComplete && (
        <div className="mt-6 text-center">
          <p className="text-green-600 font-medium">
            Scan complete! Ready to submit.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Upload your scan to receive a diagnosis.
          </p>
        </div>
      )}
    </div>
  );
};

export default ScanIllnessAssistant;
