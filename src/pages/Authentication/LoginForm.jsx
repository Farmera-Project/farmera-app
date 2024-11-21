import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import image9 from '../../assets/images/image9.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://farmera-api.onrender.com/users/login', {
        email,
        password
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success('Login successful!');
        
        const role = response.data.user.role;
        if (role === 'farmer') {
          navigate('/farmer-dashboard');
        } else if (role === 'wholesaler') {
          navigate('/wholesaler-dashboard');
        } else {
          toast.error('Unknown user role');
        }
      } else {
        toast.error('Invalid response from server');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden mx-4 ml-44 h-[500px]">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <Link
            to="/"
            className="text-[#004721] hover:text-[#009c4a] mb-6 inline-flex items-center gap-2 text-sm"
          >
            <ArrowBackIcon fontSize="small" />
            Back to Home
          </Link>

          <h2 className="text-3xl font-bold mb-8 text-center text-[#004721]">
            Welcome Back!
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5 w-[90%] mx-auto">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[42px] text-gray-500 hover:text-[#004721] transition-colors duration-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            <div className="flex justify-end">
              <Link 
                to="/forgot-password"
                className="text-sm text-[#004721] hover:text-[#009c4a] transition-colors duration-300"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className={`w-[250px] py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center ${
                  loading ? 'bg-[#009c4a]' : 'bg-[#004721] hover:bg-[#009c4a]'
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} sx={{ color: 'white' }} />
                    <span className="ml-2">Logging in...</span>
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>

            <p className="text-center text-gray-600 text-sm mt-4">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="font-medium text-[#004721] hover:text-[#009c4a] transition-colors duration-300"
              >
                Sign up here
              </Link>
            </p>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src={image9}
            alt="Login"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-white text-center p-6">
              <h3 className="text-2xl font-bold mb-2">Welcome to Farmera</h3>
              <p className="text-base">Access your account to manage your poultry feed orders</p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default LoginForm;
