import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, Container } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddStock() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct(prevProduct => ({
          ...prevProduct,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!product.name || !product.description || !product.price || !product.stock) {
        toast.error("Please fill in all required fields", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
        return;
      }

      // Create new product object
      const newProduct = {
        ...product,
        id: Date.now(),
        price: parseFloat(product.price),
        stock: parseInt(product.stock),
        createdAt: new Date().toISOString(),
        status: 'active'
      };

      // Get existing products
      const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
      existingProducts.push(newProduct);
      localStorage.setItem('products', JSON.stringify(existingProducts));

      // Show success message
      toast.success('Product added successfully! 🎉', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      // Reset form
      setProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: null
      });

    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStoredProducts = () => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  };

  return (
    <Container 
      maxWidth="lg" 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 100px)',
        py: 4,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 600,
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom 
          align="center"
          sx={{ 
            color: '#004721',
            fontWeight: 'bold',
            mb: 3
          }}
        >
          Add New Product Stock
        </Typography>

        <Grid container spacing={3}>
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
          disabled={loading}
          sx={{
            mt: 3,
            bgcolor: '#004721',
            '&:hover': {
              bgcolor: '#009C4A',
            },
            height: '44px',
            fontSize: '1rem',
            fontWeight: 'medium',
          }}
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </Button>
      </Box>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
}

export default AddStock;