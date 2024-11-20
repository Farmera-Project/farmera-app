import React, { useState } from 'react';
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
import SignupModal from '../pages/Authentication/SignupModal';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSearch = () => {
    console.log('Search clicked');
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
              onClick={handleSearch}
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
