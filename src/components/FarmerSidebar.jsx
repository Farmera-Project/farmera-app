// src/components/FarmerSidebar.jsx
import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  IconButton,
  Divider,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
// import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';

const drawerWidth = 240;

const FarmerSidebar = ({ open, handleDrawerClose }) => {
  const menuItems = [
    { path: '/farmer-dashboard/overview', icon: <DashboardIcon />, text: 'Overview' },
    { path: '/farmer-dashboard/product-list', icon: <ListAltIcon />, text: 'Product List' },
    // { path: '/farmer-dashboard/product-details', icon: <InventoryIcon />, text: 'Product-Details' },
    { path: '/farmer-dashboard/payment', icon: <PaymentsIcon />, text: 'Payment' },
    { path: '/farmer-dashboard/orders', icon: <ShoppingCartIcon />, text: 'Orders' },
     { path: '/farmer-dashboard/profile', icon: <AccountCircleIcon />, text: 'Profile' },
    { path: '/farmer-dashboard/delivery', icon: <LocationOnIcon />, text: 'Delivery Location' },
    {
      path: '/farmer-dashboard/nearby',
      icon: <StorefrontIcon />,
      text: 'Nearby Locations'
    },
  ];

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: '#004721',
            color: 'white',
            mt: '64px',
            height: 'calc(100% - 64px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.12)',
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-end',
            p: 1
          }}>
            <IconButton 
              onClick={handleDrawerClose}
              sx={{ color: 'white', '&:hover': { color: '#009c4a' } }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                component={Link}
                to={item.path}
                sx={{
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default FarmerSidebar;
