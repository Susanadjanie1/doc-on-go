const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E1F4F3] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-600 mb-6">
          Log in to continue with DocOnGo
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="jane@gmail.com"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97171]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97171]"
            />
          </div>

          <div className="flex justify-end text-sm text-[#1E3A8A] mb-2">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F97171] hover:bg-[#f75f5f] text-white font-semibold py-2.5 rounded-lg transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-[#1E3A8A] font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
