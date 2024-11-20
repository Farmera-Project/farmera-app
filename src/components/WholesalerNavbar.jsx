import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TableChartIcon from '@mui/icons-material/TableChart';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PaymentIcon from '@mui/icons-material/Payment';
import StorageIcon from '@mui/icons-material/Storage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpdateIcon from '@mui/icons-material/Update';
import DashboardIcon from '@mui/icons-material/Dashboard';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#004721',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#004721',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  backgroundColor: '#004721',
  color: 'white',
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#004721',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const menuItems = [
  { 
    path: '/wholesaler-dashboard/wholesale-overview', 
    icon: <DashboardIcon />, 
    text: 'Overview' 
  },
  { 
    path: '/wholesaler-dashboard/add-stock', 
    icon: <AddBoxIcon />, 
    text: 'Add Stock' 
  },
  { 
    path: '/wholesaler-dashboard/update-stock', 
    icon: <UpdateIcon />, 
    text: 'Update stock' 
  },
  { 
    path: '/wholesaler-dashboard/paymentform', 
    icon: <PaymentIcon />, 
    text: 'Payment Form' 
  },
  { 
    path: '/wholesaler-dashboard/orders-table', 
    icon: <TableChartIcon />, 
    text: 'Orders Table' 
  },
  { 
    path: '/wholesaler-dashboard/stock-levels', 
    icon: <StorageIcon />, 
    text: 'Stock Levels' 
  },
  { 
    path: '/wholesaler-dashboard/profile', 
    icon: <AccountCircleIcon />, 
    text: 'Profile' 
  },
];

const WholesalerNavbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              '&:hover': { color: '#009c4a' }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Wholesaler Dashboard
          </Typography>
          <Tooltip title="Logout">
            <IconButton 
              color="inherit"
              onClick={handleLogout}
              sx={{ '&:hover': { color: '#009c4a' } }}
            >
              <FaSignOutAlt />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Tooltip title={open ? "Close Sidebar" : "Open Sidebar"}>
              <IconButton 
                onClick={handleDrawerClose}
                sx={{ color: 'white', '&:hover': { color: '#009c4a' } }}
              >
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </Tooltip>
          </DrawerHeader>
          <List>
            {menuItems.map((item, index) => (
              <Tooltip 
                key={index} 
                title={item.text}
                placement="right"
                arrow
                disableHoverListener={open}
              >
                <ListItem
                  component={Link}
                  to={item.path}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    sx={{ opacity: open ? 1 : 0 }} 
                  />
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Drawer>

        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            marginTop: '64px',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WholesalerNavbar;
