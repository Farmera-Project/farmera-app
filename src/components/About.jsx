import React from 'react';
import image9 from '../assets/images/image9.jpg';
import image14 from '../assets/images/image14.jpg';
import image13 from '../assets/images/image13.jpg';

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          {/* Left Section (Text - About Us) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-semibold mb-4 text-[#004721] text-center">
              About Us
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Dedicated to providing high-quality poultry feed, we support local farmers in raising healthy and productive flocks. Our feed is crafted from carefully selected ingredients to ensure optimal nutrition.
            </p>
            <p className="text-lg text-gray-700">
              We are committed to sustainability and quality, helping farmers grow and thrive with the best resources available.
            </p>
          </div>
          {/* Right Section (Image - About Us) */}
          <div className="lg:w-1/2">
            <img
              src={image9}
              alt="Poultry Feed"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          {/* Left Section (Image for Mission) */}
          <div className="lg:w-1/2">
            <img
              src={image14}
              alt="Our Mission"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section (Text - Our Mission) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-semibold mb-4 text-[#004721] text-center">
              Our Mission
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Our mission is to promote sustainable poultry farming by providing nutritious, high-quality feed. We aim to empower farmers with resources to produce healthy, resilient poultry.
            </p>
            <p className="text-lg text-gray-700">
              By prioritizing natural and organic ingredients, we ensure that our feed contributes to the health and growth of your livestock.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section (Text - Why Choose Us) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-semibold mb-4 text-[#004721] text-center">
              Why Choose Us
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Our products are designed to provide balanced nutrition for your poultry, enhancing growth, immunity, and productivity. We use locally sourced ingredients to support the agricultural community.
            </p>
            <p className="text-lg text-gray-700">
              With a commitment to quality and farmer satisfaction, we’re here to help you succeed in sustainable poultry farming.
            </p>
          </div>

          {/* Right Section (Image - Why Choose Us) */}
          <div className="lg:w-1/2">
            <img
              src={image13}
              alt="Why Choose Us"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
