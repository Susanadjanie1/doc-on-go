import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const DocSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialty: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    const signupPromise = axios.post(
      "https://docongo.onrender.com/api/v1/doctor/register",
      formData
    );

    toast.promise(signupPromise, {
      loading: "Registering...",
      success: (response) => {
        setTimeout(() => {
          navigate("/login-doctor");
        }, 1000);
        return "Registration successful!";
      },
      error: (err) => {
        setError(err?.response?.data?.message || "Something went wrong. Try again.");
        return err?.response?.data?.message || "Something went wrong.";
      },
    });

    try {
      await signupPromise;
    } catch (err) {
      // Already handled by toast
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/images/doc-1.png')`,
      }}
    >
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-xl mx-4 sm:mx-8">
        <h2 className="text-3xl font-bold text-[#1A6436] mb-1 text-center">
          Doctor Sign Up
        </h2>
        <p className="text-sm text-gray-700 mb-6 text-center">
          Create your Doctor account to join DocOnGo
        </p>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
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
               placeholder="e.g., Kwame Mensah"
            />
          </div>

          {/* Email */}
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
               placeholder="example@domain.com"
            />
          </div>

          {/* Password */}
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
                placeholder="Must be letters + numbers"
            />
             <p className="text-xs text-gray-500 mt-1">
              Must be at least 6 characters and include letters and numbers.
            </p>
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {/* Confirm Password */}
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
               placeholder="Re-type your password"
            />
            
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {/* Specialty */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1A6436] hover:bg-[#14552e] text-white font-semibold py-2.5 rounded-lg transition duration-300 flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Already have an account link */}
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

      {/* Hot Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default DocSignup;
