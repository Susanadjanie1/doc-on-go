import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const PatientSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    const signupPromise = axios.post(
      "https://docongo.onrender.com/api/v1/patient/register",
      formData
    );

    toast.promise(signupPromise, {
      loading: "Signing up...",
      success: (response) => {
        setTimeout(() => {
          navigate("/login-patient");
        }, 1000);
        return "Signed Up successfully!";
      },
      error: (err) => {
        setError(err?.response?.data?.message || "Something went wrong.");
        return err?.response?.data?.message || "Something went wrong.";
      },
    });

    try {
      await signupPromise;
    } catch (err) {
      // Already handled by toast.promise
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E1F4F3] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-[#1A6436] mb-2">
          Patient Sign Up
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Create your Patient account to join DocOnGo
        </p>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              // pattern="^[a-zA-Z0-9]+$"
              // title="Username should only contain letters and numbers."
              autoComplete="off"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26]"
              placeholder="e.g., John Darko"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26]"
              placeholder="example@domain.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                title="Password must be at least 6 characters and include both letters and numbers."
                autoComplete="off"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26]"
                placeholder="Must be letters + numbers"
              />
               <p className="text-xs text-gray-500 mt-1">
              Must be at least 6 characters and include letters and numbers.
            </p>
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                autoComplete="off"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26]"
                placeholder="Re-type your password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1A6436] hover:bg-[#7ECD26] text-white font-semibold py-3 rounded-lg transition duration-300 flex justify-center items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login-patient"
            className="text-[#7ECD26] font-semibold hover:underline"
          >
            Log In
          </a>
        </p>
      </div>

      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
};

export default PatientSignup;
