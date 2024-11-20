import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

function AddStock() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New product added:", product);
    // Submit to backend and clear the form after submission if necessary
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 3,
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          color: '#004721',
          fontWeight: 'bold',
          mb: 2
        }}
      >
        Add New Product Stock
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Product Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#004721',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#004721',
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            multiline
            rows={3}
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#004721',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#004721',
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Price (GH₵)"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            required
            size="small"
            InputProps={{
              inputProps: { min: 0, step: "0.01" }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#004721',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#004721',
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Stock Quantity"
            name="stock"
            type="number"
            value={product.stock}
            onChange={handleChange}
            required
            size="small"
            InputProps={{
              inputProps: { min: 0 }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#004721',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#004721',
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            type="file"
            label="Product Image"
            name="image"
            onChange={handleImageChange}
            required
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#004721',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#004721',
              },
            }}
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          bgcolor: '#004721',
          '&:hover': {
            bgcolor: '#009C4A',
          },
          height: '40px',
          fontSize: '1rem',
        }}
      >
        Add Product
      </Button>
    </Box>
  );
}

export default AddStock;
