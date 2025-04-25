import { useNavigate } from "react-router";
import backgroundImage from "../assets/images/role-select.jpg"

const SelectRole = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === "doctor") {
      navigate("/signup-doctor");
    } else if (role === "patient") {
      navigate("/signup-patient");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "rgba(244, 251, 244, 0.9)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#1A6436]">Join DocOnGo</h2>
        <p className="text-gray-700 mb-6">Are you signing up as a Doctor or a Patient?</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleRoleSelect("doctor")}
            className="w-full bg-[#1A6436] text-white font-semibold py-2.5 rounded-lg hover:bg-[#14522d]"
          >
            I’m a Doctor
          </button>
          <button
            onClick={() => handleRoleSelect("patient")}
            className="w-full bg-[#7ECD26] text-white font-semibold py-2.5 rounded-lg hover:bg-[#6bbf1f]"
          >
            I’m a Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
