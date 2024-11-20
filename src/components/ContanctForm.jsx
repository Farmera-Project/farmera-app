import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import image2 from '../assets/images/image2.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      toast.success('Your message has been sent successfully!', {
        style: {
          background: '#009C4A',
          color: 'white'
        }
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Please fill in all fields!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-12 mb-8">
      <ToastContainer />
      <div className="flex w-full sm:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side: Image */}
        <div className="w-full sm:w-1/2 h-full" style={{ 
            backgroundImage: `url(${image2})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '80vh'
        }}>
        </div>

        {/* Right side: Contact Form */}
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center h-full">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#004721' }}>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label 
                htmlFor="name" 
                className="block text-sm font-semibold mb-2" 
                style={{ color: '#004721' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{ 
                  borderColor: '#004721',
                  focusRing: '#009C4A'
                }}
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-4">
              <label 
                htmlFor="email" 
                className="block text-sm font-semibold mb-2"
                style={{ color: '#004721' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{ 
                  borderColor: '#004721',
                  focusRing: '#009C4A'
                }}
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-4">
              <label 
                htmlFor="message" 
                className="block text-sm font-semibold mb-2"
                style={{ color: '#004721' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{ 
                  borderColor: '#004721',
                  focusRing: '#009C4A'
                }}
                rows="4"
                placeholder="Your message"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg text-white transition-all duration-300 hover:opacity-90"
                style={{ 
                  backgroundColor: '#004721',
                  hover: {
                    backgroundColor: '#009C4A'
                  }
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#009C4A'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#004721'}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
