import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

function UpdateStock() {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null,
    currentImage: "" // to store the URL of current image
  });

  useEffect(() => {
    // Fetch product data by productId from the backend to pre-fill form
    setProduct({
      name: "Sample Product",
      description: "Sample description",
      price: 10.0,
      stock: 20,
      currentImage: "sample-image-url.jpg"
    });
  }, [productId]);

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
    console.log("Product updated:", product);
    // Submit to backend for updating product
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
        Update Product Stock
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
            disabled
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
          {product.currentImage && (
            <Box sx={{ mb: 1 }}>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Current Image:
              </Typography>
              <img 
                src={product.currentImage} 
                alt="Current product" 
                style={{ 
                  maxWidth: '100px', 
                  height: 'auto',
                  borderRadius: '4px'
                }} 
              />
            </Box>
          )}
          <TextField
            fullWidth
            type="file"
            label="Update Product Image"
            name="image"
            onChange={handleImageChange}
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              mt: 1,
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
        Update Product
      </Button>
    </Box>
  );
}

export default UpdateStock;
