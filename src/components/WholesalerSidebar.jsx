// src/components/WholesaleSidebar.jsx
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UpdateIcon from '@mui/icons-material/Update';
import PaymentIcon from '@mui/icons-material/Payment';
import TableChartIcon from '@mui/icons-material/TableChart';
import StorageIcon from '@mui/icons-material/Storage';
import InventoryIcon from '@mui/icons-material/Inventory';

const drawerWidth = 240;

const menuItems = [
  { path: '/wholesaler-dashboard/overview', icon: <DashboardIcon />, text: 'Overview' },
  { path: '/wholesaler-dashboard/add-stock', icon: <AddBoxIcon />, text: 'Add Stock' },
  { path: '/wholesaler-dashboard/update-stock', icon: <UpdateIcon />, text: 'Update Stock' },
  { path: '/wholesaler-dashboard/payment', icon: <PaymentIcon />, text: 'Payment' },
  { path: '/wholesaler-dashboard/orders-table', icon: <TableChartIcon />, text: 'Orders Table' },
  { path: '/wholesaler-dashboard/profile', icon: <AccountCircleIcon />, text: 'Profile' },
  { path: '/wholesaler-dashboard/stock-levels', icon: <StorageIcon />, text: 'Stock Levels' },
  { path: '/wholesaler-dashboard/stock-list', icon: <InventoryIcon />, text: 'Stock List' },
];

const WholesaleSidebar = ({ open, handleDrawerClose }) => {
  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: '#004721',
            color: 'white',
            mt: '64px', // Adjust if your header height changes
            height: 'calc(100% - 64px)',
          },
        }}
      >
        {/* Header with Close Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white', '&:hover': { color: '#009c4a' } }}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>

        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }} />

        {/* Menu Items */}
        <List>
          {menuItems.map(({ path, icon, text }, index) => (
            <ListItem
              key={index}
              component={Link}
              to={path}
              sx={{
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default WholesaleSidebar;
