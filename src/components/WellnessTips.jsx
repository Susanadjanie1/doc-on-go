import React from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react"; 

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
  {
    title: "Practice Mindfulness",
    description:
      "Meditate or take a few moments to breathe deeply and clear your mind each day.",
    icon: "🧘‍♀️",
  },
  {
    title: "Take Breaks",
    description:
      "Avoid burnout by taking regular breaks during work to stretch and refocus.",
    icon: "⏸️",
  },
  {
    title: "Limit Screen Time",
    description:
      "Try to reduce screen time and take breaks from digital devices for better mental health.",
    icon: "📱",
  },
  {
    title: "Strengthen Your Immune System",
    description:
      "Include immune-boosting foods like garlic, ginger, and citrus fruits in your diet.",
    icon: "🦠",
  },
];

const WellnessTips = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-8 bg-gradient-to-b from-[#F4FBF4] to-white text-gray-800">
      
      <div className="fixed top-4 left-6 z-10">
        <button
          onClick={() => navigate("/patient-dash")}
          className="text-[#7ECD26] text-3xl rounded-full p-2 hover:bg-[#7ECD26] hover:text-white transition duration-300"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="text-center mt-16 mb-6">
        <h2 className="text-2xl font-bold text-[#1A6436]">Daily Wellness Tips 🌿</h2>
      </div>

      <div className="space-y-6 mb-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-[#E0F5E1] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{tip.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A6436] mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

  
      <div className="bg-[#7ECD26] p-6 rounded-xl shadow-lg text-white mt-8">
        <h3 className="text-2xl font-semibold text-center mb-4">General Health Recommendations</h3>
        <ul className="space-y-3">
          <li className="text-sm">
            🌱 Maintain a balanced diet with lean proteins, healthy fats, and complex carbs for sustained energy.
          </li>
          
          <li className="text-sm">
            💪 Focus on mental health by practicing mindfulness or journaling for a positive mindset.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WellnessTips;
