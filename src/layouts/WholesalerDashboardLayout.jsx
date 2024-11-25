import React, { useState } from 'react';
import WholesaleSidebar from './components/WholesaleSidebar';
import { Box, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
// import AddStock from '../pages/WholesalerDashboard/AddStock'; // Import your components

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <WholesaleSidebar
        open={isSidebarOpen}
        handleDrawerClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          marginLeft: isSidebarOpen ? '240px' : '0px',
          transition: 'margin-left 0.3s',
          bgcolor: '#f5f5f5', // Light background color
          p: 3,
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 48px)', // Adjust for padding
          }}
        >
          {/* Render Your Routes Here */}
          <Routes>
            <Route 
              path="/wholesaler-dashboard/overview" 
              element={
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <h1>Overview</h1>
                </Box>
              } 
            />
            <Route 
              path="/wholesaler-dashboard/add-stock" 
              element={<AddStock />} 
            />
            <Route 
              path="/wholesaler-dashboard/update-stock" 
              element={
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <h1>Update Stock</h1>
                </Box>
              } 
            />
            <Route 
              path="/wholesaler-dashboard/payment" 
              element={
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <h1>Payment</h1>
                </Box>
              } 
            />
            <Route 
              path="/wholesaler-dashboard/orders-table" 
              element={
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <h1>Orders Table</h1>
                </Box>
              } 
            />
            <Route 
              path="/wholesaler-dashboard/profile" 
              element={
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <h1>Profile</h1>
                </Box>
              } 
            />
            <Route 
              path="/wholesaler-dashboard/stock-levels" 
              element={
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <h1>Stock Levels</h1>
                </Box>
              } 
            />
            <Route 
              path="/wholesaler-dashboard/stock-list" 
              element={
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <h1>Stock List</h1>
                </Box>
              } 
            />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;