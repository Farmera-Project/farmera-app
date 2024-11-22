import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardMedia, 
  Grid, 
  Chip,
  Button,
  Divider,
  IconButton
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';

// Import your images
import images7 from '../../assets/images/images7.jpg';
import images13 from '../../assets/images/images13.jpg';
import images11 from '../../assets/images/images11.jpg';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/farmer-dashboard/products');
  };

  // Mock product data - in a real app, you'd fetch this based on the ID
  const products = {
    1: {
      id: 1,
      name: "Premium Layer Feed",
      price: 280.00,
      unit: "50kg bag",
      image: images7,
      description: "Specially formulated feed to improve egg production in layers.",
      status: "In Stock",
      stockAmount: 150,
      category: "Layer Feed",
      deliveryTime: "2-3 days",
      features: [
        "High calcium content for strong eggshells",
        "Balanced protein levels",
        "Essential vitamins and minerals",
        "Promotes better egg production"
      ]
    },
    2: {
      id: 2,
      name: "Broiler Starter Feed",
      price: 320.00,
      unit: "50kg bag",
      image: images11,
      description: "High-protein feed for rapid growth in broilers.",
      status: "Low Stock",
      stockAmount: 45,
      category: "Starter Feed",
      deliveryTime: "1-2 days",
      features: [
        "High protein content",
        "Enhanced with growth promoters",
        "Complete vitamin profile",
        "Supports rapid growth"
      ]
    },
    3: {
      id: 3,
      name: "Organic Chick Feed",
      price: 300.00,
      unit: "50kg bag",
      image: images13,
      description: "Nutrient-rich feed to give young chicks a strong start.",
      status: "In Stock",
      stockAmount: 200,
      category: "Chick Feed",
      deliveryTime: "2-3 days",
      features: [
        "Natural ingredients",
        "Balanced nutrition",
        "Easy to digest",
        "Promotes healthy growth"
      ]
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography>Product not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Back Button */}
        <IconButton 
          onClick={handleBack} 
          sx={{ mb: 2, color: '#004721' }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Card sx={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <Grid container>
            {/* Product Image */}
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
            </Grid>

            {/* Product Details */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ 
                  fontWeight: 'bold',
                  color: '#004721',
                  mb: 2
                }}>
                  {product.name}
                </Typography>

                <Chip 
                  label={product.status}
                  sx={{
                    mb: 3,
                    bgcolor: product.status === 'In Stock' ? '#e8f5e9' : '#fff3e0',
                    color: product.status === 'In Stock' ? '#1b5e20' : '#e65100',
                    border: `1px solid ${product.status === 'In Stock' ? '#1b5e20' : '#e65100'}`
                  }}
                />

                <Typography variant="body1" sx={{ mb: 3 }}>
                  {product.description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" sx={{ color: '#004721', fontWeight: 'bold' }}>
                    ₵{product.price.toFixed(2)}
                    <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                      /{product.unit}
                    </Typography>
                  </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Chip 
                      icon={<InventoryIcon />}
                      label={`Stock: ${product.stockAmount}`}
                      sx={{ bgcolor: '#f5f5f5' }}
                    />
                    <Chip 
                      icon={<LocalShippingIcon />}
                      label={`Delivery: ${product.deliveryTime}`}
                      sx={{ bgcolor: '#f5f5f5' }}
                    />
                  </Box>
                </Box>

                <Typography variant="h6" sx={{ mb: 2, color: '#004721' }}>
                  Key Features:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {product.features.map((feature, index) => (
                    <Typography 
                      component="li" 
                      key={index}
                      sx={{ mb: 1 }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default ProductDetails;
