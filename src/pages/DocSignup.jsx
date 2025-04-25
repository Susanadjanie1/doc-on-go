import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react";

const DocSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialty: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://docongo.onrender.com/api/v1/doctor/register",
        formData
      );

      if (response.data.success) {
        toast.success("Registration successful!");
        setTimeout(() => navigate("/login-doctor"), 1500);
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/images/doc-1.png')`, 
      }}
    >
      <ToastContainer />
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-xl mx-4 sm:mx-8">
        <h2 className="text-3xl font-bold text-[#1A6436] mb-1 text-center">
          Doctor Sign Up
        </h2>
        <p className="text-sm text-gray-700 mb-6 text-center">
          Create your Doctor account to join DocOnGo
        </p>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-[#1A6436]">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26] bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A6436]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26] bg-white"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-[#1A6436]">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26] bg-white"
            />
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-[#1A6436]">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26] bg-white"
            />
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A6436]">
              Specialty
            </label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26] bg-white"
            >
              <option value="">-- Select Specialty --</option>
              <option value="General Physician">General Physician</option>
              <option value="Public Health">Public Health</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Gynecologist">Gynecologist</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A6436] hover:bg-[#14552e] text-white font-semibold py-2.5 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-700 text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login-doctor"
            className="text-[#7ECD26] font-semibold hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default DocSignup;
