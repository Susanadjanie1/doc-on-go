import React, { useState } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "../services/config";
import { toast } from "react-toastify";

const PatientSymptomForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    specialty: "General Physician",
    location: "",
    followUpContact: "",
  });

  const [recommendations, setRecommendations] = useState(null);
  const [isRecommendationsVisible, setIsRecommendationsVisible] =
    useState(false);
  const navigate = useNavigate();

  const specialties = [
    "General Physician",
    "Public Health",
    "Pediatrician",
    "Gynecologist",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/request", formData);
      console.log("Submission response data:", response.data);

      const payload =
        response.data.request || response.data.data || response.data;
      const requestId = payload._id;

      if (!requestId) {
        console.error("Request ID not found in response:", response.data);
        alert("Submission succeeded, but no ID was returned from the server.");
        return;
      }

      localStorage.setItem("lastRequestId", requestId);

      setRecommendations([
        {
          id: 1,
          recommendation: "Consider visiting a doctor for a thorough checkup.",
        },
        {
          id: 2,
          recommendation:
            "Try over-the-counter medications to alleviate mild symptoms.",
        },
        {
          id: 3,
          recommendation:
            "Rest and drink plenty of fluids for general wellness.",
        },
      ]);
      setIsRecommendationsVisible(true);
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      toast.error(
        "Something went wrong. Please check your network connection and try again."
      );
    }
  };

  const handleAgree = () => {
    toast.success("Recommendations confirmed. Proceeding with treatment.");
    setIsRecommendationsVisible(false);
    navigate(`/prescription/${localStorage.getItem("lastRequestId")}`);
  };

  const handleDisagree = () => {
    setIsRecommendationsVisible(false);
    toast.info("You can modify your symptoms or try again.");
  };

  return (
    <div className="min-h-screen bg-[#E6F5F3] flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-[#1A6436]">
          Input Your Symptoms
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#1A6436]">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#1A6436] rounded-xl text-[#1A6436] focus:outline-none focus:ring-2 focus:ring-[#7ECD26] focus:border-[#7ECD26]"
            placeholder="Short title for your symptoms"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#1A6436]">
            Symptom Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-2 border border-[#1A6436] rounded-xl text-[#1A6436] focus:outline-none focus:ring-2 focus:ring-[#7ECD26] focus:border-[#7ECD26]"
            placeholder="Describe your symptoms in detail"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#1A6436]">Specialty</label>
          <select
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#1A6436] rounded-xl text-[#1A6436] focus:outline-none focus:ring-2 focus:ring-[#7ECD26] focus:border-[#7ECD26]"
            required
          >
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#1A6436]">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#1A6436] rounded-xl text-[#1A6436] focus:outline-none focus:ring-2 focus:ring-[#7ECD26] focus:border-[#7ECD26]"
            placeholder="e.g. Accra"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-[#1A6436]">
            Contact (Phone/Email)
          </label>
          <input
            type="text"
            name="followUpContact"
            value={formData.followUpContact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#1A6436] rounded-xl text-[#1A6436] focus:outline-none focus:ring-2 focus:ring-[#7ECD26] focus:border-[#7ECD26]"
            placeholder="e.g. 0547255873"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1A6436] text-white py-2 rounded-xl font-semibold hover:bg-[#7ECD26] transition"
        >
          Submit Symptoms
        </button>
      </form>

      {isRecommendationsVisible && recommendations && (
        <div className="mt-6 p-4 bg-white border-2 border-[#7ECD26] rounded-xl w-full max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-[#1A6436] mb-2">
            Recommendations
          </h3>
          <ul className="list-disc pl-5 text-[#1A6436]">
            {recommendations.map((rec) => (
              <li key={rec.id}>{rec.recommendation}</li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between">
            <button
              onClick={handleAgree}
              className="bg-[#7ECD26] hover:bg-[#1A6436] text-white py-2 px-6 rounded-xl font-semibold"
            >
              Agree
            </button>
            <button
              onClick={handleDisagree}
              className="bg-[#FF4D4F] hover:bg-[#FF2A2D] text-white py-2 px-6 rounded-xl font-semibold"
            >
              Disagree
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientSymptomForm;
