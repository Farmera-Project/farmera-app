import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FarmerSidebar from './components/FarmerSidebar';
import FarmerNavbar from './components/FarmerNavbar';
import WholesalerSidebar from './components/WholesalerSidebar';
import WholesalerNavbar from './components/WholesalerNavbar';

// Pages and Components
import Home from './components/Home';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import ContactForm from './components/ContanctForm';
import FarmerSignup from './pages/Authentication/FarmerSignup';
import WholesalerSignup from './pages/Authentication/WholesalerSignup';
import LoginForm from './pages/Authentication/LoginForm';

// Farmer Dashboard Pages
import FarmerOverview from './pages/FarmerDashboard/FarmerOverview';
import Orders from './pages/FarmerDashboard/Orders';
import ProductList from './pages/FarmerDashboard/ProductList';
import Payments from './pages/FarmerDashboard/Payments';
import ProductDetails from './pages/FarmerDashboard/ProductDetails';
import FarmerProfile from './pages/FarmerDashboard/FarmerProfile';
import DeliveryPage from './pages/FarmerDashboard/DeliveryPage';
import DeliveryTracking from './pages/FarmerDashboard/DeliveryTracking';

// Wholesaler Dashboard Pages
import WholesaleOverview from './pages/WholesalerDashboard/WholesaleOverview';
import AddStock from './pages/WholesalerDashboard/AddStock';
import UpdateStock from './pages/WholesalerDashboard/UpdateStock';
import OrdersTable from './pages/WholesalerDashboard/OrdersTable';
import Profile from './pages/WholesalerDashboard/Profile';
import StockLevels from './pages/WholesalerDashboard/StockLevels';

const AppContent = () => {
  const isAuthenticated = true; // Replace with actual authentication logic
  const location = useLocation();

  // Helper Components for Conditional Rendering
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const showNavbarAndFooter = location.pathname === '/';
  const isFarmerDashboard = location.pathname.startsWith('/farmer-dashboard');
  const isWholesalerDashboard = location.pathname.startsWith('/wholesaler-dashboard');

  return (
    <>
      {/* Navbar and Footer for Public Pages */}
      {showNavbarAndFooter && <Navbar />}
      <div style={{ display: 'flex' }}>
        {/* Farmer Dashboard Layout */}
        {isFarmerDashboard && (
          <>
            <FarmerSidebar />
            <div style={{ flex: 1 }}>
              <FarmerNavbar />
              <Outlet />
            </div>
          </>
        )}

        {/* Wholesaler Dashboard Layout */}
        {isWholesalerDashboard && (
          <>
            {/* <WholesalerSidebar /> */}
            <div >
              <WholesalerNavbar />
              <Outlet />
            </div>
          </>
        )}

        {/* Main Content */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/farmer-signup" element={<FarmerSignup />} />
          <Route path="/wholesaler-signup" element={<WholesalerSignup />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Farmer Dashboard Routes */}
          <Route
            path="/farmer-dashboard"
            element={
              <ProtectedRoute>
                <Outlet />
              </ProtectedRoute>
            }
          >
            <Route index element={<FarmerOverview />} />
            <Route path="orders" element={<Orders />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="payments" element={<Payments />} />
            <Route path="product-details/:id" element={<ProductDetails />} />
            <Route path="profile" element={<FarmerProfile />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="tracking" element={<DeliveryTracking />} />
          </Route>

          {/* Wholesaler Dashboard Routes */}
          <Route
            path="/wholesaler-dashboard"
            element={
              <ProtectedRoute>
                <Outlet />
              </ProtectedRoute>
            }
          >
            <Route index element={<WholesaleOverview />} />
            <Route path="wholesale-overview" element={<WholesaleOverview/>} />
            <Route path="add-stock" element={<AddStock />} />
            <Route path="update-stock" element={<UpdateStock />} />
            <Route path="payment" element={<Payments />} />
            <Route path="orders-table" element={<OrdersTable />} />
            <Route path="profile" element={<Profile />} />
            <Route path="stock-levels" element={<StockLevels />} />
          </Route>
        </Routes>
      </div>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
