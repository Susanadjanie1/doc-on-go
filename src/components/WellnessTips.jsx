import React from "react";
import { useNavigate } from "react-router";

const tips = [
  {
    title: "Stay Hydrated",
    description:
      "Drink at least 8 cups of water daily to keep your body refreshed and energized.",
    icon: "💧",
  },
  {
    title: "Move Your Body",
    description:
      "Aim for 30 minutes of physical activity each day, like walking, stretching, or dancing.",
    icon: "🏃‍♀️",
  },
  {
    title: "Eat More Fruits",
    description:
      "Incorporate a colorful variety of fruits and vegetables into your meals.",
    icon: "🍎",
  },
  {
    title: "Get Enough Sleep",
    description:
      "Strive for 7-8 hours of restful sleep to help your body and mind recover.",
    icon: "😴",
  },
];

const WellnessTips = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-8 bg-gradient-to-b from-lime-50 to-white text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate("/patient-dash")}
          className="bg-[#FF8B77] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#ff6f5e] transition"
        >
          Back to Dashboard
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Daily Wellness Tips 🌿</h2>
      </div>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border border-lime-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{tip.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessTips;
