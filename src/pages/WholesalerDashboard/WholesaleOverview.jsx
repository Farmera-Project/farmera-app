import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Container, 
  Avatar, 
  Button,
  IconButton,
  Tooltip,
  Divider,
  LinearProgress,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UpdateIcon from '@mui/icons-material/Update';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const WholesaleOverview = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const firstName = user.fullName ? user.fullName.split(' ')[0] : 'Wholesaler';

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 17) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
      updateGreeting();
    }, 60000);

    updateGreeting();
    return () => clearInterval(timer);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const dashboardCards = [
    {
      title: 'Total Products',
      value: '156',
      icon: <InventoryIcon sx={{ fontSize: 40 }} />,
      color: '#004721',
      textColor: 'white'
    },
    {
      title: 'Products in Stock',
      value: '123',
      icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
      color: '#009C4A',
      textColor: 'white'
    },
    {
      title: 'Low Stock Items',
      value: '8',
      icon: <WarehouseIcon sx={{ fontSize: 40 }} />,
      color: '#2E7D32',
      textColor: 'white'
    },
    {
      title: 'Pending Orders',
      value: '12',
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      color: '#1B5E20',
      textColor: 'white'
    }
  ];

  // Updated mock data for poultry feeds
  const stockAlerts = [
    { 
      product: 'Chick Starter Feed', 
      stock: 15, 
      threshold: 20,
      description: 'Essential feed for day-old chicks'
    },
    { 
      product: 'Layer Feed', 
      stock: 8, 
      threshold: 25,
      description: 'High-calcium feed for laying hens'
    },
    { 
      product: 'Broiler Finisher', 
      stock: 5, 
      threshold: 15,
      description: 'Growth-promoting feed for meat birds'
    },
    { 
      product: 'Grower Feed', 
      stock: 12, 
      threshold: 20,
      description: 'Balanced nutrition for growing birds'
    }
  ];

  const recentActivities = [
    { action: 'Added new stock', item: 'Layer Feed Premium', time: '2 hours ago' },
    { action: 'Updated price', item: 'Chick Starter Feed', time: '5 hours ago' },
    { action: 'Low stock alert', item: 'Broiler Finisher', time: '1 day ago' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Back Button */}
      <Box sx={{ mb: 2 }}>
        <Tooltip title="Go Back" placement="right">
          <IconButton
            onClick={handleGoBack}
            sx={{
              color: '#004721',
              '&:hover': {
                bgcolor: 'rgba(0, 71, 33, 0.1)',
              },
              position: 'absolute',
              left: '24px',
              top: '15px',
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Welcome Section - Moved up */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          mb: 4,
          mt: 0,
          p: 3,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          backgroundImage: 'linear-gradient(to right, #004721, #009C4A)',
          position: 'relative'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar 
            sx={{ 
              width: 70, 
              height: 70, 
              bgcolor: '#fff',
              color: '#004721',
              fontSize: '1.8rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {firstName[0]}
          </Avatar>
          <Box>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {greeting}, {firstName}!
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                mt: 0.5
              }}
            >
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Tooltip title="Notifications">
            <IconButton sx={{ color: 'white' }}>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

       {/* Quick Actions */}
       <Box 
        sx={{ 
          mb: 4,
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          onClick={() => navigate('/wholesaler-dashboard/add-stock')}
          sx={{
            bgcolor: '#004721',
            '&:hover': { bgcolor: '#009C4A' },
            px: 4,
            py: 1.5
          }}
        >
          Add New Product
        </Button>
        <Button
          variant="contained"
          startIcon={<UpdateIcon />}
          onClick={() => navigate('/wholesaler-dashboard/update-stock')}
          sx={{
            bgcolor: '#2E7D32',
            '&:hover': { bgcolor: '#1B5E20' },
            px: 4,
            py: 1.5
          }}
        >
          Update Stock
        </Button>
      </Box>


       {/* Dashboard Cards */}
       <Grid 
        container 
        spacing={3} 
        justifyContent="center"
        alignItems="stretch"
      >
        {dashboardCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                backgroundColor: card.color,
                color: card.textColor,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardContent>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2
                  }}
                >
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                  {card.icon}
                </Box>
                <Typography variant="h4" component="div">
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Stats Row */}
      <Grid container spacing={2} sx={{mt:3, mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ 
            p: 2, 
            textAlign: 'center', 
            bgcolor: '#f5f5f5',
            height: '100%'
          }}>
            <TrendingUpIcon sx={{ color: '#004721', fontSize: 30 }} />
            <Typography variant="h6">Monthly Sales</Typography>
            <Typography variant="h4" sx={{ color: '#004721' }}>+15%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ 
            p: 2, 
            textAlign: 'center', 
            bgcolor: '#f5f5f5',
            height: '100%'
          }}>
            <AttachMoneyIcon sx={{ color: '#004721', fontSize: 30 }} />
            <Typography variant="h6">Total Revenue</Typography>
            <Typography variant="h4" sx={{ color: '#004721' }}>₵25K</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Low Stock Alerts</Typography>
              <Tooltip title="Critical stock levels">
                <IconButton size="small" sx={{ color: '#004721' }}>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Box>
            {stockAlerts.map((alert, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                      {alert.product}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {alert.description}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: alert.stock < alert.threshold / 2 ? '#ff1744' : '#004721',
                      fontWeight: 'bold'
                    }}
                  >
                    {alert.stock} bags left
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(alert.stock / alert.threshold) * 100}
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    bgcolor: 'rgba(0, 71, 33, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: alert.stock < alert.threshold / 2 ? '#ff1744' : '#004721'
                    }
                  }}
                />
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>

     
     

      {/* Recent Activities Section */}
      {/* <Paper sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#004721' }}>
          Recent Activities
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {recentActivities.map((activity, index) => (
          <Box 
            key={index}
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 2,
              p: 1.5,
              bgcolor: 'white',
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'rgba(0, 71, 33, 0.05)'
              }
            }}
          >
            <Box>
              <Typography variant="body1">{activity.action}</Typography>
              <Typography variant="body2" color="text.secondary">
                {activity.item}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
              {activity.time}
            </Typography>
          </Box>
        ))}
      </Paper> */}
    </Container>
  );
};

export default WholesaleOverview;
