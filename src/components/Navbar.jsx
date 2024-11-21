import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  InputBase,
  Box,
  IconButton,
  Button,
  alpha 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import SignupModal from '../pages/Authentication/SignupModal';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    try {
      // Clear all relevant data from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('products'); // if you're storing products
      
      // Update state
      setIsLoggedIn(false);
      
      // Navigate to home page
      navigate('/', { replace: true });
      
      // Optional: Reload the page to reset all states
      window.location.reload();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#004721' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              marginRight: 3,
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          >
            Farmera
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              position: 'relative',
              borderRadius: 1,
              bgcolor: alpha('#fff', 0.15),
              '&:hover': {
                bgcolor: alpha('#fff', 0.25),
              },
              width: '300px',
              display: 'flex',
              alignItems: 'center',
              marginRight: 2
            }}
          >
            <InputBase
              placeholder="Search…"
              sx={{
                color: 'white',
                padding: '8px 8px 8px 16px',
                flex: 1,
                '& ::placeholder': {
                  color: 'white',
                  opacity: 0.7
                }
              }}
            />
            <IconButton 
              onClick={() => console.log('Search clicked')}
              sx={{ 
                color: 'white',
                padding: '8px',
                '&:hover': {
                  bgcolor: alpha('#fff', 0.1)
                }
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          {isLoggedIn ? (
            <Button
              variant="outlined"
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              sx={{ 
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: '#ff1744',
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ff1744'
                }
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button 
                variant="outlined"
                onClick={handleLoginClick}
                sx={{ 
                  color: 'white',
                  borderColor: 'white',
                  marginRight: 2,
                  '&:hover': {
                    borderColor: '#009c4a',
                    bgcolor: 'rgba(255, 255, 255, 0.08)'
                  }
                }}
              >
                Login
              </Button>

              <Button 
                variant="contained"
                onClick={handleSignupClick}
                sx={{ 
                  bgcolor: '#009c4a',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#00b357'
                  }
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <SignupModal 
        open={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
