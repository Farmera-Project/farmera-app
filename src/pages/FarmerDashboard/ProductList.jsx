// src/pages/FarmProductsPage.jsx
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Box,
  Container,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import your images
import images7 from '../../assets/images/images7.jpg';
import images13 from '../../assets/images/images13.jpg';
import images11 from '../../assets/images/images11.jpg';

const ProductList = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Premium Layer Feed",
      image: images7,
    },
    {
      id: 2,
      name: "Broiler Starter Feed",
      image: images11,
    },
    {
      id: 3,
      name: "Organic Chick Feed",
      image: images13,
    }
  ];

  const handleViewDetails = (id) => {
    console.log('Navigating to:', `/farmer-dashboard/product-details/${id}`); // Debug log
    navigate(`/farmer-dashboard/product-details/${id}`);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 'bold', 
            color: '#004721',
            fontSize: '1.8rem',
            textAlign: 'center'
          }}>
            Our Products
          </Typography>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3} justifyContent="center">
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ 
                maxWidth: 345,
                mx: 'auto',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ 
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                  }}
                />
                <CardContent sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3
                }}>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#004721',
                      mb: 2
                    }}
                  >
                    {product.name}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    onClick={() => handleViewDetails(product.id)}
                    sx={{ 
                      bgcolor: '#004721',
                      color: 'white',
                      '&:hover': { 
                        bgcolor: '#009c4a',
                      },
                      px: 4,
                      py: 1,
                      mt: 'auto'
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductList;
