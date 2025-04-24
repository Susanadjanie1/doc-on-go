import React, { useState } from "react";
import { useNavigate } from "react-router";  

const PatientSymptomForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    specialty: "General Physician",
    location: "",
    followUpContact: "",
  });

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


      const payload = response.data.request || response.data.data || response.data;
      const requestId = payload._id;

      if (!requestId) {
        console.error("Request ID not found in response:", response.data);
        alert("Submission succeeded, but no ID was returned from the server.");
        return;
      }

      localStorage.setItem("lastRequestId", requestId);
      navigate(`/prescription/${requestId}`);
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      alert(
        "Something went wrong. Please check your network connection and try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#E6F5F3] flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
          Input Your Symptoms
        </h2>

       
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl"
            placeholder="Short title for your symptoms"
          />
        </div>

     
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">
            Symptom Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-2 border rounded-xl"
            placeholder="Describe your symptoms in detail"
          />
        </div>

     
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">Specialty</label>
          <select
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl"
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
          <label className="block mb-1 text-sm text-gray-600">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl"
            placeholder="e.g. Accra"
          />
        </div>

    
        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-600">
            Contact (Phone/Email)
          </label>
          <input
            type="text"
            name="followUpContact"
            value={formData.followUpContact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl"
            placeholder="e.g. 0547255873"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF8B77] text-white py-2 rounded-xl font-semibold hover:bg-[#ff6f5e] transition"
        >
          Submit Symptoms
        </button>
      </form>
    </div>
  );
};

export default PatientSymptomForm;
