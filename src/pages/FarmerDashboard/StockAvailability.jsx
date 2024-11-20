import React from 'react';
import { Box, Paper } from '@mui/material';
import StockAvailability from '../pages/farmerdashboard/StockAvailability';

const StockAvailability = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <StockAvailability />
      </Paper>
    </Box>
  );
};

export default StockAvailability;

