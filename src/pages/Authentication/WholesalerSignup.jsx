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
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="flex w-full max-w-3xl h-[410px] bg-white rounded-lg shadow-lg overflow-hidden mx-4">
        <div className="w-full lg:w-[60%] p-4">
          <Link 
            to="/" 
            className="text-[#004721] hover:text-[#009c4a] mb-2 inline-block text-sm"
          >
            ← Back to Home
          </Link>

          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: "#004721" }}>
            Wholesaler Sign Up
          </h2>
          
          <form onSubmit={handleSubmit} className="w-[90%] mx-auto">
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-1 text-sm">Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="*************"
                  className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Business Name</label>
                <input
                  name="businessName"
                  type="text"
                  placeholder="Business Name"
                  className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 font-bold mb-1 text-sm">Address</label>
              <input
                name="address"
                type="text"
                placeholder="Address"
                className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-white rounded-lg"
              disabled={loading}
              style={{
                backgroundColor: loading ? "#009c4a" : "#004721",
              }}
            >
              {loading ? (
                <img src={loadingGif} alt="Loading..." className="h-6 mx-auto" />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>

        <div className="hidden lg:block lg:w-[40%]">
          <img 
            src={image9} 
            alt="Wholesaler Signup" 
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default WholesalerSignup;
