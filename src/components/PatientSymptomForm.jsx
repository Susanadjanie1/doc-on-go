import React, { useState } from "react";

const PatientSymptomForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    symptoms: "",
    duration: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Symptoms:", formData);
    // API goes here
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
          <label className="block mb-1 text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8B77]"
            placeholder="e.g. Ama Kwame"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8B77]"
            placeholder="e.g. 25"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">
            Main Symptoms
          </label>
          <input
            type="text"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8B77]"
            placeholder="e.g. Fever, Cough"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8B77]"
            placeholder="e.g. 3 days"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8B77]"
            placeholder="Any other symptoms or medical history?"
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
