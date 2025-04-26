import { useNavigate } from "react-router";
import DocImg from "../assets/images/f-doc.png";
import { ArrowLeft } from "lucide-react";

const DoctorProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4FBF4] to-[#E8F7E8] p-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={handleBack}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <ArrowLeft className="text-[#1A6436]" size={20} />
        </button>
        <h1 className="text-2xl font-bold text-[#1A6436]">Doctor Profile</h1>
      </div>

      <div className="flex flex-col items-center space-y-2 mb-8">
        <div className="relative">
          <img
            src={DocImg}
            alt="Doctor"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h2 className="text-xl font-semibold text-[#1A6436] mt-2">
          Dr. Angela Opoku
        </h2>
        <p className="text-gray-600 text-sm">General Physician</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <div>
          <label className="block text-gray-500 text-sm mb-1">Full Name</label>
          <p className="text-gray-800 font-medium">Dr. Angela Opoku</p>
        </div>

        <div>
          <label className="block text-gray-500 text-sm mb-1">Specialty</label>
          <p className="text-gray-800 font-medium">General Physician</p>
        </div>

        <div>
          <label className="block text-gray-500 text-sm mb-1">Experience</label>
          <p className="text-gray-800 font-medium">8 years</p>
        </div>

        <div>
          <label className="block text-gray-500 text-sm mb-1">About</label>
          <p className="text-gray-700 text-sm leading-6">
            Dr. Angela Opoku is a trusted general physician with a passion for
            holistic care and patient wellness. She specializes in preventive
            medicine and personalized treatment plans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
