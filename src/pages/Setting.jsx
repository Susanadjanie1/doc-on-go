import { useState } from "react";
import { Camera } from "lucide-react";
import DocImg from "../assets/images/f-doc.png";
import { useNavigate } from "react-router";

const Setting = () => {
  const [profilePic, setProfilePic] = useState(DocImg);
  const [name, setName] = useState("Dr. Angela Opoku");
  const [specialty, setSpecialty] = useState("General Physician");
  const [password, setPassword] = useState("");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };
const navigate = useNavigate();

const Logout = () => {
  navigate("/")
}
  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4FBF4] to-[#E8F7E8] p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#1A6436]">Settings </h1>

      <div className="flex flex-col items-center space-y-2 mb-8">
        <div className="relative">
          <img
            src={profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <label className="absolute bottom-0 right-0 bg-[#1A6436] p-1 rounded-full cursor-pointer hover:bg-[#15552E]">
            <Camera size={20} className="text-white" />
            <input
              type="file"
              onChange={handleProfilePicChange}
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <p className="text-gray-600 text-sm">Tap icon to change picture</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7ECD26]"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Specialty</label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7ECD26]"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7ECD26]"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-[#7ECD26] text-white px-6 py-2 rounded-lg hover:bg-[#6BBF20] transition"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button onClick={Logout} className="text-[#7ECD26] hover:underline">Logout</button>
      
      </div>
    </div>
  );
};

export default Setting;
