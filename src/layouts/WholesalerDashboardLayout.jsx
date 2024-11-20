import React, { useState } from 'react';
import WholesaleSidebar from './components/WholesaleSidebar';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <WholesaleSidebar
        open={isSidebarOpen}
        handleDrawerClose={() => setIsSidebarOpen(false)}
      />
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isSidebarOpen ? '240px' : '0px',
          transition: 'margin-left 0.3s',
        }}
      >
        {/* Render Your Routes Here */}
        <Routes>
          <Route path="/wholesaler-dashboard/overview" element={<h1>Overview</h1>} />
          <Route path="/wholesaler-dashboard/add-stock" element={<h1>Add Stock</h1>} />
          <Route path="/wholesaler-dashboard/update-stock" element={<h1>Update Stock</h1>} />
          <Route path="/wholesaler-dashboard/payment" element={<h1>Payment</h1>} />
          <Route path="/wholesaler-dashboard/orders-table" element={<h1>Orders Table</h1>} />
          <Route path="/wholesaler-dashboard/profile" element={<h1>Profile</h1>} />
          <Route path="/wholesaler-dashboard/stock-levels" element={<h1>Stock Levels</h1>} />
        </Routes>
      </Box>
    </>
  );
};

export default DashboardLayout;
