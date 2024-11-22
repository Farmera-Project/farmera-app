import React from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Container,
  Card,
  CardContent,
  Button,
  Divider,
  Badge,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material';
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InventoryIcon from '@mui/icons-material/Inventory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const FarmerOverview = () => {
  // Mock data for available feeds
  const availableFeeds = [
    {
      id: 1,
      name: "Premium Chick Starter",
      price: 280,
      description: "High-protein feed for chicks (0-8 weeks)",
      status: "In Stock",
      weight: "50kg"
    },
    {
      id: 2,
      name: "Layer Mash Plus",
      price: 320,
      description: "Enhanced with calcium for better egg production",
      status: "In Stock",
      weight: "50kg"
    },
    {
      id: 3,
      name: "Broiler Finisher Gold",
      price: 300,
      description: "Complete feed for meat birds (4-6 weeks)",
      status: "Low Stock",
      weight: "50kg"
    },
    {
      id: 4,
      name: "Grower Feed Supreme",
      price: 290,
      description: "Balanced nutrition for growing birds",
      status: "Out of Stock",
      weight: "50kg"
    }
  ];

  // Mock data for recent orders
  const recentOrders = [
    {
      id: "ORD001",
      items: "Premium Chick Starter x 10",
      total: 2800,
      date: "2024-02-15",
      status: "Delivered"
    },
    {
      id: "ORD002",
      items: "Layer Mash Plus x 5",
      total: 1600,
      date: "2024-02-10",
      status: "Processing"
    },
    {
      id: "ORD003",
      items: "Broiler Finisher x 8",
      total: 2400,
      date: "2024-02-05",
      status: "Pending"
    }
  ];

  // Define card colors
  const cardColors = [
    { bg: '#e8f5e9', text: '#1b5e20' }, // Deep green
    { bg: '#f1f8e9', text: '#33691e' }, // Olive green
    { bg: '#e8f6e9', text: '#2e7d32' }, // Forest green
    { bg: '#e0f2f1', text: '#004d40' }  // Teal green
  ];

  const cards = [
    { 
      title: 'Feed Consumption', 
      value: '250 bags',
      icon: InventoryIcon,
      gradient: 'linear-gradient(135deg, #1b5e20 0%, #43a047 100%)'
    },
    { 
      title: 'Next Delivery', 
      value: 'Tomorrow',
      icon: LocalShippingIcon,
      gradient: 'linear-gradient(135deg, #33691e 0%, #558b2f 100%)'
    },
    { 
      title: 'Monthly Savings', 
      value: '₵2,400',
      icon: TrendingUpIcon,
      gradient: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)'
    },
    { 
      title: 'Feed Schedule', 
      value: 'On Track',
      icon: NotificationsIcon,
      gradient: 'linear-gradient(135deg, #004d40 0%, #00897b 100%)'
    }
  ];

  return (
    <Box 
      sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        py: 6,
        mt: 4
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          px: { xs: 2, sm: 4 },
          mx: 'auto',
          width: '100%',
          maxWidth: '1400px',
        }}
      >
        {/* Header Section */}
        <Box 
          sx={{ 
            p: 3,
            mb: 4,
            mt: 2,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #004721 0%, #009c4a 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
        >
          <Box>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              sx={{ 
                mb: 1,
                fontSize: { xs: '1.5rem', sm: '2rem' }
              }}
            >
              Welcome Back, Farmer!
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{ 
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              Manage your feed orders and track deliveries
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton sx={{ color: 'white' }}>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: card.gradient,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                      <card.icon />
                    </Avatar>
                    <Box>
                      <Typography variant="h5" fontWeight="bold" color="white">
                        {card.value}
                      </Typography>
                      <Typography variant="body2" color="rgba(255,255,255,0.8)">
                        {card.title}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Main Content */}
        <Grid container spacing={3}>
          {/* Available Feeds */}
          <Grid item xs={12} lg={7}>
            <Card sx={{ height: '100%', bgcolor: '#ffffff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" color="#004721">
                    Available Feeds
                  </Typography>
                  <Button
                    component={Link}
                    to="/farmer/products"
                    variant="contained"
                    startIcon={<InventoryIcon />}
                    sx={{ bgcolor: '#004721', '&:hover': { bgcolor: '#009c4a' } }}
                  >
                    View All Products
                  </Button>
                </Box>

                <Grid container spacing={2}>
                  {availableFeeds.map((feed, index) => (
                    <Grid item xs={12} sm={6} key={feed.id}>
                      <Card 
                        variant="outlined"
                        sx={{ 
                          bgcolor: cardColors[index % cardColors.length].bg,
                          borderColor: 'transparent',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: `0 4px 12px ${cardColors[index % cardColors.length].text}25`
                          }
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography 
                              variant="subtitle1" 
                              fontWeight="bold"
                              color={cardColors[index % cardColors.length].text}
                            >
                              {feed.name}
                            </Typography>
                            <Chip 
                              label={feed.status}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(255,255,255,0.9)',
                                color: feed.status === 'In Stock' ? '#1b5e20' : 
                                      feed.status === 'Low Stock' ? '#33691e' : '#b71c1c',
                                border: `1px solid ${feed.status === 'In Stock' ? '#1b5e20' : 
                                        feed.status === 'Low Stock' ? '#33691e' : '#b71c1c'}`,
                              }}
                            />
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {feed.description}
                          </Typography>
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            pt: 1,
                            borderTop: 1,
                            borderColor: 'rgba(0, 0, 0, 0.08)'
                          }}>
                            <Box>
                              <Typography 
                                variant="subtitle1" 
                                fontWeight="bold" 
                                color={cardColors[index % cardColors.length].text}
                              >
                                ₵{feed.price}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                per {feed.weight} bag
                              </Typography>
                            </Box>
                            <Button
                              size="small"
                              variant="outlined"
                              component={Link}
                              to={`/farmer/products/${feed.id}`}
                              sx={{ 
                                borderColor: cardColors[index % cardColors.length].text,
                                color: cardColors[index % cardColors.length].text,
                                '&:hover': { 
                                  borderColor: '#009c4a',
                                  color: '#009c4a',
                                  bgcolor: 'rgba(0, 156, 74, 0.04)'
                                }
                              }}
                            >
                              View Details
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Orders */}
          <Grid item xs={12} lg={5}>
            <Card sx={{ height: '100%', bgcolor: '#ffffff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" color="#004721">
                    Recent Orders
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<TrendingUpIcon />}
                    sx={{ 
                      borderColor: '#004721', 
                      color: '#004721',
                      '&:hover': { 
                        borderColor: '#009c4a', 
                        color: '#009c4a' 
                      }
                    }}
                  >
                    View All Orders
                  </Button>
                </Box>

                <List>
                  {recentOrders.map((order, index) => (
                    <React.Fragment key={order.id}>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: '#004721' }}>
                            <LocalShippingIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="subtitle2" fontWeight="bold">
                                {order.items}
                              </Typography>
                              <Typography variant="subtitle2" color="#004721" fontWeight="bold">
                                ₵{order.total}
                              </Typography>
                            </Box>
                          }
                          secondary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                              <Typography variant="body2" color="text.secondary">
                                {order.date}
                              </Typography>
                              <Chip
                                label={order.status}
                                size="small"
                                sx={{
                                  bgcolor: order.status === 'Delivered' ? '#e8f5e9' :
                                          order.status === 'Processing' ? '#f1f8e9' : '#e0f2f1',
                                  color: order.status === 'Delivered' ? '#1b5e20' :
                                         order.status === 'Processing' ? '#33691e' : '#004d40',
                                  border: `1px solid ${order.status === 'Delivered' ? '#1b5e20' :
                                          order.status === 'Processing' ? '#33691e' : '#004d40'}`
                                }}
                              />
                            </Box>
                          }
                        />
                      </ListItem>
                      {index < recentOrders.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FarmerOverview;
