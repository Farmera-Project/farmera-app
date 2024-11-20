import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";  
import FarmerSidebar from "../components/Sidebar"; 
import FarmerNavbar from "../components/FarmerNavbar"; 
import { Outlet } from 'react-router-dom'; 

const FarmerDashboardLayout = () => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    navigate("/", { replace: true }); // Redirect to home
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FarmerNavbar handleLogout={handleLogout} />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          p: 3,
          px: 2,
          pl: 0.5,
          mt: 8,
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          '& > *': {
            ml: 0
          }
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default FarmerDashboardLayout;