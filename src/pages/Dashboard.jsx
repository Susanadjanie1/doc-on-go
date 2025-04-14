import { useState } from "react";
import { Heart, Brain, Eye, Stethoscope } from "lucide-react";
import DocImg from "../assets/images/f-doc.png"; 

const categories = [
  { name: "Heart", icon: <Heart size={20} /> },
  { name: "Brain", icon: <Brain size={20} /> },
  { name: "Ear", icon: <Stethoscope size={20} /> },
  { name: "Eye", icon: <Eye size={20} /> },
];


const doctor = {
  name: "Dr. Angela Opoku",
  specialty: "Eye Specialist",
  price: "GHC90",
  image: DocImg,
};

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#E1F4F3] px-4 py-6 text-gray-800">
      <h1 className="text-xl font-semibold mb-4">Welcome back, Jane 👋</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search doctors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97171] focus:outline-none"
        />
      </div>

      <h2 className="text-lg font-semibold mb-2">Doctor Categories</h2>
      <div className="flex space-x-4 overflow-x-auto mb-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow rounded-xl px-4 py-3 text-sm min-w-[80px]"
          >
            <div className="text-[#1E3A8A] mb-1">{cat.icon}</div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-2">Top Doctors</h2>
      <div className="space-y-4">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow flex items-center space-x-4"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-md">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
              <p className="text-sm text-[#F97171] font-medium mt-1">
                {doctor.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
