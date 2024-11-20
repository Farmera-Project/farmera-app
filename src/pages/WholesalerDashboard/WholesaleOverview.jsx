import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button, Fab, Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const WholesaleOverview = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 3, position: 'relative' }}>
      {/* Add Stock FAB */}
      <Tooltip title="Add New Stock" placement="left">
        <Fab 
          color="primary" 
          aria-label="add stock"
          onClick={() => navigate('/wholesaler-dashboard/add-stock')}
          sx={{ 
            position: 'absolute',
            top: 16,
            right: 16,
            bgcolor: '#009c4a',
            '&:hover': { 
              bgcolor: '#004721' 
            },
            zIndex: 1
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Typography variant="h6" color="#004721" fontWeight="bold" gutterBottom>
        Welcome Calvin!
      </Typography>

      {/* Grid for displaying summary cards */}
      <Grid container spacing={3}>
        {/* Orders Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: '#f5f5f5', height: '100%' }}>
            <CardContent>
              <Typography variant="h6" color="#004721" fontWeight="bold">
                Orders
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Pending Orders: 5
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Completed Orders: 15
              </Typography>
              <Button
                component={Link}
                to="/farmer/orders"
                variant="contained"
                sx={{ bgcolor: '#009c4a', color: 'white', '&:hover': { bgcolor: '#004721' }, mt: 2 }}
              >
                View Orders
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Stock Levels Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: '#f5f5f5', height: '100%' }}>
            <CardContent>
              <Typography variant="h6" color="#004721" fontWeight="bold">
                Stock Levels
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Available Stock: 200 Bags
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Low Stock: 20 Bags
              </Typography>
              <Button
                component={Link}
                to="/farmer/stock"
                variant="contained"
                sx={{ bgcolor: '#009c4a', color: 'white', '&:hover': { bgcolor: '#004721' }, mt: 2 }}
              >
                Manage Stock
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Payments Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: '#f5f5f5', height: '100%' }}>
            <CardContent>
              <Typography variant="h6" color="#004721" fontWeight="bold">
                Payments
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Pending Payments: 3
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Total Paid: $1200
              </Typography>
              <Button
                component={Link}
                to="/farmer/payments"
                variant="contained"
                sx={{ bgcolor: '#009c4a', color: 'white', '&:hover': { bgcolor: '#004721' }, mt: 2 }}
              >
                Manage Payments
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WholesaleOverview;
