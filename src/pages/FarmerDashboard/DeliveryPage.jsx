import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
// import LocationPermission from '../../pages/FarmerDashboard/Delivery'

const DeliveryPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" color="#004721" fontWeight="bold" gutterBottom>
        Delivery Location Settings
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        <LocationPermission />
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" color="#004721" gutterBottom>
          Delivery Information
        </Typography>
        <Typography variant="body1">
          Please enable location services to:
          <ul>
            <li>Check if you're within our delivery range</li>
            <li>Get accurate delivery time estimates</li>
            <li>Receive real-time delivery updates</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default DeliveryPage;
