import React from 'react';
import { Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();

  // Sample product data - replace with your actual product data
  const product = {
    id: 1,
    name: "Poultry Feed Mix",
    price: 15.99,
    unit: "bag",
    image: "/assets/images/image10.jpg", // Update image path as needed
    description: "Premium feed mix designed to boost poultry growth and health",
    details: {
      farmLocation: "Healthy Farm Supplies",
      harvestedDate: "2024-11-14",
      organic: true,
      storageInfo: "Store in a cool, dry place away from sunlight",
      nutritionInfo: "Rich in essential nutrients for poultry development"
    }
  };

  const handleOrderNow = () => {
    navigate('/farmer-dashboard/orders'); // Update with the path to your order form
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button 
        onClick={() => window.history.back()} 
        className="text-green-600 hover:text-green-700 mb-4 flex items-center"
      >
        ← Back to Products
      </button>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="w-full h-64 sm:h-80 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="text-2xl font-bold text-green-600">
                ${product.price}/{product.unit}
              </div>
            </div>

            <div className="space-y-6">
              {/* Main Description */}
              <div>
                <h2 className="text-xl font-semibold mb-2">About this Product</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Farm Details */}
              <div>
                <h2 className="text-xl font-semibold mb-2">Farm Information</h2>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="mb-2">
                    <span className="font-semibold">Farm:</span> {product.details.farmLocation}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Harvested:</span> {product.details.harvestedDate}
                  </p>
                  <p>
                    <span className="font-semibold">Farming Method:</span>{' '}
                    {product.details.organic ? 'Organic' : 'Conventional'}
                  </p>
                </div>
              </div>

              {/* Storage and Nutrition */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Storage</h2>
                  <p className="text-gray-600">{product.details.storageInfo}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Nutrition</h2>
                  <p className="text-gray-600">{product.details.nutritionInfo}</p>
                </div>
              </div>

              {/* Order Button with Redirect */}
              <div className="pt-4">
                <button 
                  onClick={handleOrderNow}
                  className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
