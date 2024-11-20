// src/pages/FarmProductsPage.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Replace with correct paths to images in your assets/images folder
import image6 from '../../assets/images/image6.jpg'
import image2 from '../../assets/images/image2.jpg';
import image4 from '../../assets/images/image4.jpg';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Premium Layer Feed",
      price: 15.99,
      unit: "bag",
      image: image6,
      description: "Specially formulated feed to improve egg production in layers.",
    },
    {
      id: 2,
      name: "Broiler Starter Feed",
      price: 18.49,
      unit: "bag",
      image: image2,
      description: "High-protein feed for rapid growth in broilers.",
    },
    {
      id: 3,
      name: "Organic Chick Feed",
      price: 20.00,
      unit: "bag",
      image: image4,
      description: "Nutrient-rich feed to give young chicks a strong start.",
    }
  ];

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: 3 }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        Poultry Feed Products
      </Typography>
      
      <Box display="flex" flexDirection="column" gap={3}>
        {products.map(product => (
          <Card key={product.id} sx={{ display: 'flex', overflow: 'hidden', boxShadow: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 160, height: 160 }}
              image={product.image}
              alt={product.name}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <div>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                  {product.description}
                </Typography>
              </div>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                  ${product.price.toFixed(2)}/{product.unit}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  to={`/product/${product.id}`}
                  sx={{ color: '#fff' }}
                >
                  View Details
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
