import React, { useState } from "react";
import { Camera, Loader2, CheckCircle2 } from "lucide-react";

const ScanIllnessAssistant = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);

 
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-[#f0fdf4] px-6 py-10 text-gray-800">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold">Scan for Health Issues</h2>
        <p className="text-sm text-gray-600">Hold your camera to the affected area or allow the system to scan your face for common symptoms.</p>
      </div>

      <div className="mt-10 flex justify-center items-center">
        <div className="w-64 h-64 bg-white rounded-2xl shadow-inner flex items-center justify-center border border-dashed border-teal-300">
          {isScanning ? (
            <Loader2 className="animate-spin text-teal-500" size={48} />
          ) : scanComplete ? (
            <CheckCircle2 className="text-green-500" size={48} />
          ) : (
            <Camera className="text-gray-400" size={48} />
          )}
        </div>
      </div>

      <div className="mt-8">
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
      </div>

      {scanComplete && (
        <div className="mt-6 text-center">
          <p className="text-green-600 font-medium">Scan complete! Results have been generated.</p>
          <p className="text-sm text-gray-500 mt-1">You can view suggestions or consult a doctor.</p>
        </div>
      )}
    </div>
  );
};

export default ScanIllnessAssistant;
