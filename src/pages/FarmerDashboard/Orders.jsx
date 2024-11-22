import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
  Alert,
  Collapse,
  IconButton,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const Orders = () => {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newOrder = {
      id: Date.now(),
      name,
      product,
      quantity,
      date: new Date().toLocaleDateString()
    };

    const updatedOrders = [...orders, newOrder];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    
    setShowSuccess(true);
    setName('');
    setProduct('');
    setQuantity('');
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleClearOrders = () => {
    localStorage.removeItem('orders');
    setOrders([]);
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        bgcolor: '#f5f5f5'
      }}
    >
      <Container maxWidth="sm">
        {/* Success Message */}
        <Collapse in={showSuccess}>
          <Alert 
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setShowSuccess(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ 
              mb: 2, 
              bgcolor: '#e8f5e9',
              color: '#1b5e20',
              '& .MuiAlert-icon': {
                color: '#1b5e20'
              }
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
              Order Accepted! The wholesaler will get in touch with you soon.
            </Typography>
          </Alert>
        </Collapse>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          <Typography 
            variant="h5" 
            color="#004721" 
            fontWeight="bold" 
            gutterBottom
            textAlign="center"
          >
            Place Order
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Quantity (bags)"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 3 }}
              InputProps={{
                inputProps: { 
                  min: 1,
                  max: 1000
                }
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#004721',
                '&:hover': {
                  bgcolor: '#009c4a',
                },
                py: 1.5
              }}
            >
              Place Order
            </Button>
          </Box>
        </Paper>

        {orders.length > 0 && (
          <Stack 
            direction="row" 
            spacing={1} 
            alignItems="center" 
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#004721'
              }}
            >
              Total Orders Placed: {orders.length}
            </Typography>
            <IconButton
              size="small"
              onClick={handleClearOrders}
              sx={{ 
                color: '#d32f2f',
                '&:hover': {
                  bgcolor: 'rgba(211, 47, 47, 0.04)'
                }
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Orders;