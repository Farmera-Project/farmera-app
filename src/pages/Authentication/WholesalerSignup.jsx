import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { apiWholesalerSignup } from "../../services/auth";
import loadingGif from "../../assets/images/loading.gif";
import image9 from "../../assets/images/image9.jpg";

const WholesalerSignup = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        fullName,
        email,
        password,
        businessName,
        phoneNumber,
        address,
        role: "wholesaler",
      };

      const response = await apiWholesalerSignup(payload);
      console.log(response.data);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden mx-4 ml-36 h-[550px]">
        <div className="w-full lg:w-[60%] p-6">
          <Link 
            to="/" 
            className="text-[#004721] hover:text-[#009c4a] mb-2 inline-flex items-center gap-2 text-sm"
          >
            ← Back to Home
          </Link>

          <h2 className="text-2xl font-bold mb-4 text-center text-[#004721]">
            Wholesaler Sign Up
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">Business Name</label>
                <input
                  name="businessName"
                  type="text"
                  placeholder="Enter business name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">Business Address</label>
              <input
                name="address"
                type="text"
                placeholder="Enter address"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="w-full md:w-[200px] py-2 px-4 text-white rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#009c4a]"
                disabled={loading}
                style={{
                  backgroundColor: loading ? "#009c4a" : "#004721",
                }}
              >
                {loading ? (
                  <img src={loadingGif} alt="Loading..." className="h-5 mx-auto" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>

            <p className="text-center text-gray-600 text-sm mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-[#004721] hover:text-[#009c4a] font-medium">
                Login here
              </Link>
            </p>
          </form>
        </div>

        <div className="hidden lg:block lg:w-[40%] relative">
          <img 
            src={image9} 
            alt="Wholesaler Signup" 
            className="w-full h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-bold mb-1">Welcome to Farmera</h3>
              <p className="text-sm">Join our community of successful poultry feed wholesalers</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default WholesalerSignup;
