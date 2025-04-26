import { useNavigate } from "react-router";
import DocImg from "../assets/images/f-doc.png";
import { User } from "lucide-react";

const DoctorProfileCard = () => {
  const navigate = useNavigate(); 

  const handleViewProfile = () => {
    navigate("/doctor-profile"); 
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex items-center space-x-6 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <img
        src={DocImg}
        alt="Doctor"
        className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-[#7ECD26] transform transition duration-300 hover:scale-105"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-[#1A6436]">Dr. Angela Opoku</h2>
        <p className="text-gray-600 text-sm">General Physician</p>
        <div className="flex items-center space-x-2 mt-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: "#7ECD26" }}
          ></span>
          <p className="text-green-500 text-sm">Online</p>
        </div>
        <button
          onClick={handleViewProfile} 
          className="mt-4 bg-[#1A6436] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[#14592F] transition duration-200"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
