import React, { useState, useRef } from "react";
import { apiClient } from "../services/config";
import { Camera, Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const ScanIllnessAssistant = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [cameraStream, setCameraStream] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [photoTaken, setPhotoTaken] = useState(false);

  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setErrorMessage("");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          setCameraStream(stream);
          videoRef.current.srcObject = stream;
          setCameraActive(true);
        })
        .catch((err) => {
          setErrorMessage("Error accessing camera.");
          console.error("Error:", err);
        });
    }
  };

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");

      const dataUrl = canvasRef.current.toDataURL("image/png");
      setImage(dataUrl);
      setScanComplete(true);
      setPhotoTaken(true);
      stopCamera();
    }
  };

  const handleRetake = () => {
    setImage(null);
    setScanComplete(false);
    setPhotoTaken(false);
    setErrorMessage("");
    startCamera();
  };

  const stopCamera = () => {
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setCameraActive(false);
  };

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          setCameraStream(stream);
          videoRef.current.srcObject = stream;
          setCameraActive(true);
        })
        .catch((err) => {
          setErrorMessage("Error accessing camera.");
          console.error("Error:", err);
        });
    }
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setErrorMessage("");
  };

  const handleSubmitScan = async () => {
    if (!image) {
      setErrorMessage("Please upload or capture an image first.");
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
      navigate("/patient-dash");
    } catch (error) {
      console.error("Error submitting scan:", error);
      setErrorMessage("Something went wrong with the scan upload.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-[#f0fdf4] px-6 py-10 text-gray-800">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold text-[#1A6436]">
          Scan for Health Issues
        </h2>
        <p className="text-sm text-gray-600">
          Hold your camera to the affected area or upload a photo for analysis.
        </p>
      </div>

      <div className="fixed top-4 left-6 z-10">
        <button
          onClick={() => navigate("/patient-dash")}
          className="text-[#7ECD26] text-3xl rounded-full p-2 hover:bg-[#7ECD26] hover:text-white transition duration-300"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <div className="w-64 h-64 sm:w-48 sm:h-48 bg-white rounded-2xl shadow-inner flex items-center justify-center border border-dashed border-teal-300">
          {isScanning ? (
            <Loader2 className="animate-spin text-[#7ECD26]" size={48} />
          ) : scanComplete ? (
            <CheckCircle2 className="text-[#1A6436]" size={48} />
          ) : (
            <Camera className="text-gray-400" size={48} />
          )}
        </div>

        
        {cameraActive && !photoTaken && (
          <div className="relative">
            <video ref={videoRef} autoPlay className="w-64 h-64 rounded-lg" />
            <button
              onClick={handleCapture}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-3 bg-[#7ECD26] rounded-full text-white"
            >
              Capture
            </button>
          </div>
        )}

        {image && !cameraActive && !photoTaken && (
          <img
            src={image}
            alt="Captured"
            className="w-32 h-32 object-cover rounded-md mt-4"
          />
        )}

        {!cameraActive && !photoTaken && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-gray-600 mt-4 border-2 border-[#7ECD26] p-2 rounded-md"
            aria-label="Upload a photo for scan analysis"
          />
        )}
      </div>

      {errorMessage && (
        <div className="mt-4 text-center text-red-600 font-medium">
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="mt-8 space-y-4">
        <button
          onClick={handleScan}
          disabled={isScanning}
          className={`w-full py-3 rounded-xl font-semibold text-lg transition shadow-md ${
            isScanning
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#7ECD26] text-white hover:bg-[#1A6436]"
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
          <p className="text-[#1A6436] font-medium">
            Scan complete! Ready to submit.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Upload your scan to receive a diagnosis.
          </p>
        </div>
      )}

      {photoTaken && (
        <div className="mt-6 text-center">
          <button
            onClick={handleRetake}
            className="text-[#7ECD26] text-lg font-medium hover:underline"
          >
            Retake Scan
          </button>
        </div>
      )}
    </div>
  );
};

export default ScanIllnessAssistant;
