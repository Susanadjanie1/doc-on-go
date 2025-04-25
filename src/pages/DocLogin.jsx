import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const DocLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://docongo.onrender.com/api/v1/doctor/login",
        formData
      );

      localStorage.setItem("token", response.data.token);
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Something went wrong."
      );
      toast.error(
        error.response ? error.response.data.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E1F4F3] px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-[#1A6436] mb-2">Doctor Login</h2>
        <p className="text-sm text-gray-600 mb-6">
          Login to your Doctor account
        </p>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26] transition-all"
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
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26] transition-all"
            />
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A6436] hover:bg-[#14552e] text-white font-semibold py-2.5 rounded-lg transition duration-300"
            disabled={loading}
          >
            {loading ? <span>Loading...</span> : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocLogin;
