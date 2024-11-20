import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
} from '@mui/material';

const Orders = () => {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Product: ${product}, Quantity: ${quantity}`);
    setName('');
    setProduct('');
    setQuantity('');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" color="#004721" fontWeight="bold" gutterBottom>
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
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            margin="normal"
            required
            sx={{ mb: 3 }}
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
    </Container>
  );
};

export default Orders;