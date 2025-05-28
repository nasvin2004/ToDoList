import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "https://todolist-backend-jdwc.onrender.com/auth/login"
        : "https://todolist-backend-jdwc.onrender.com/auth/register";

      const { data } = await axios.post(url, formData);
      localStorage.setItem("token", data.token);

      if (!isLogin) {
        toast.success("Registered successfully");
        setIsLogin(true); // Switch to login UI
      } else {
        toast.success("Login successful!");
        // Wait 1.5 seconds before navigating so user can see toast

        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const loginWith = (provider) => {
    window.open(
      `https://todolist-backend-jdwc.onrender.com/auth/${provider}`,
      "_self"
    );
  };

  return (
    <div
      className="p-6 relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-lg bg-white bg-opacity-70">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Manual Login/Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleMode} className="text-blue-600 underline">
            {isLogin ? "Register" : "Login"}
          </button>
        </p>

        {/* Social Login */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-3">or continue with</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => loginWith("google")}
              className="bg-red-500 text-white py-2 rounded"
            >
              Login with Google
            </button>
            <button
              onClick={() => loginWith("github")}
              className="bg-gray-800 text-white py-2 rounded "
            >
              Login with GitHub
            </button>
            <button
              onClick={() => loginWith("facebook")}
              className="bg-blue-600 text-white py-2 rounded"
            >
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
