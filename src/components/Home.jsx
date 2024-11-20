import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

// Import images
import image8 from '../assets/images/image8.jpg'
import images2 from '../assets/images/images2.jpg';
import images3 from '../assets/images/images3.jpg';
import image4 from '../assets/images/image4.jpg';
import image11 from '../assets/images/image11.jpg';
import image13 from '../assets/images/image13.jpg';
import image7 from '../assets/images/image7.jpg';

const Home = () => {
  // Add error handling for images
  const images = [
    { src: image8, alt: 'Image 8' },
    { src: images2, alt: 'Images 2' },
    { src: images3, alt: 'Images 3' }
  ];

  const products = [
    { id: 1, image: image4, title: "Product 1", description: "A high-quality product for your farm needs, including seeds, tools, and more." },
    { id: 2, image: image11, title: "Product 2", description: "Reliable products for improving farm productivity with ease of use and efficiency." },
    { id: 3, image: image13, title: "Product 3", description: "Advanced tools designed to improve your farm's performance and efficiency." },
    { id: 4, image: image7, title: "Product 4", description: "Quality tools and seeds to meet your farm's specific needs for growth and development." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  // Error boundary for slider
  const renderSlider = () => {
    try {
      return (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'fallback-image-url.jpg'; // Add a fallback image
                }}
              />
            </div>
          ))}
        </Slider>
      );
    } catch (error) {
      console.error('Slider Error:', error);
      return <div>Error loading slider</div>;
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Hero Section with Slider */}
      <Box sx={{ 
        maxWidth: '1200px', 
        margin: 'auto', 
        position: 'relative',
        '& .slick-prev, & .slick-next': {
          zIndex: 1,
          '&:before': {
            color: '#004721'
          }
        }
      }}>
        {renderSlider()}
      </Box>

      {/* More Products Section */}
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4" color="#004721" fontWeight="bold" gutterBottom align="center">
          More Products
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card sx={{ 
                maxWidth: 345, 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'fallback-product-image.jpg'; // Add a fallback image
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" color="#004721" fontWeight="bold">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/product/${product.id}`}
                    size="small"
                    sx={{ 
                      color: '#009c4a',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 156, 74, 0.1)'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            sx={{ 
              bgcolor: '#009c4a', 
              color: 'white', 
              '&:hover': { 
                bgcolor: '#004721' 
              },
              padding: '8px 24px'
            }}
          >
            View All Products
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
