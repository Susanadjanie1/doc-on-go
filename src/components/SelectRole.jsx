import { useNavigate } from "react-router";

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
    <div className="min-h-screen flex items-center justify-center bg-[#E1F4F3] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Join DocOnGo</h2>
        <p className="text-gray-600 mb-6">Are you signing up as a Doctor or a Patient?</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleRoleSelect("doctor")}
            className="w-full bg-[#1E3A8A] text-white font-semibold py-2.5 rounded-lg hover:bg-[#162b6a]"
          >
            I’m a Doctor
          </button>
          <button
            onClick={() => handleRoleSelect("patient")}
            className="w-full bg-[#F97171] text-white font-semibold py-2.5 rounded-lg hover:bg-[#f75f5f]"
          >
            I’m a Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
