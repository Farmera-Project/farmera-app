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
console.log(response.data)
      if (response.data && response.data.token) {
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);
        toast.success('Login successful!');
        
        // Check role and redirect accordingly
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
    <div className="min-h-screen flex items-center justify-center bg-white relative">
      <Link
        to="/"
        className="absolute top-4 left-4 flex items-center text-[#004721] hover:text-[#009C4A] transition-colors duration-300"
      >
        <ArrowBackIcon className="mr-1" />
        <span className="font-semibold">Back Home</span>
      </Link>

      <div className="flex w-full max-w-4xl h-[390px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#004721]">
            Login
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004721]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004721] pr-10"
                placeholder="Enter your password"
                required
              />
              <div
                className="absolute right-3 top-[38px] cursor-pointer text-[#004721]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link 
                to="/forgot-password"
                className="text-sm text-[#004721] hover:text-[#009C4A] transition-colors duration-300"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg text-white transition-colors duration-300 ${
                loading ? 'bg-gray-400' : 'bg-[#004721] hover:bg-[#009C4A]'
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <CircularProgress size={20} sx={{ color: 'white' }} />
                  <span className="ml-2">Logging in...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-600">Don't have an account? </span>
              <Link 
                to="/signup" 
                className="font-semibold text-[#004721] hover:text-[#009C4A] transition-colors duration-300"
              >
                Sign up here
              </Link>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src={image9}
            alt="Login"
            className="w-full h-full object-cover"
          />
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
