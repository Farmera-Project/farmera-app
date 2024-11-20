import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Button, 
  Box 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    onClose();
    console.log('Selected role:', role);
    if (role === 'wholesaler') {
      navigate('/wholesaler-signup');
    } else if (role === 'farmer') {
      navigate('/farmer-signup');
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
    >
      <DialogTitle sx={{ textAlign: 'center', color: '#004721' }}>
        Choose Role
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, minWidth: '250px' }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleRoleSelect('farmer')}
            sx={{
              bgcolor: '#004721',
              '&:hover': { bgcolor: '#009c4a' }
            }}
          >
            Farmer
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleRoleSelect('wholesaler')}
            sx={{
              bgcolor: '#004721',
              '&:hover': { bgcolor: '#009c4a' }
            }}
          >
            Wholesaler
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;