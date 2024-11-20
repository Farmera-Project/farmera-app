import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button 
} from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VerifiedIcon from '@mui/icons-material/Verified';

const services = [
    {
        title: 'Premium Poultry Feed',
        description: 'High-quality poultry feed formulated for optimal growth and health. We offer specialized feeds for layers, broilers, and chicks at wholesale prices.',
        icon: <AgricultureIcon sx={{ fontSize: 40, color: '#009C4A' }} />
      },
  {
    title: 'Delivery Services',
    description: 'Fast and reliable delivery of agricultural products to your doorstep. Track your orders in real-time.',
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#009C4A' }} />
  },
  {
    title: 'Inventory Management',
    description: 'Efficient inventory tracking and management systems to help you maintain optimal stock levels.',
    icon: <InventoryIcon sx={{ fontSize: 40, color: '#009C4A' }} />
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you with any queries or concerns.',
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#009C4A' }} />
  },
  {
    title: 'Competitive Pricing',
    description: 'Get the best value for your money with our competitive pricing and special offers.',
    icon: <MonetizationOnIcon sx={{ fontSize: 40, color: '#009C4A' }} />
  },
  {
    title: 'Quality Assurance',
    description: 'All products undergo strict quality checks to ensure you receive the best agricultural supplies.',
    icon: <VerifiedIcon sx={{ fontSize: 40, color: '#009C4A' }} />
  },
 
];

const ServicesPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              color: '#004721',
              fontWeight: 'bold',
              mb: 2 
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto' 
            }}
          >
            We provide comprehensive agricultural solutions to help your farming business grow and succeed.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3,
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    sx={{ 
                      mb: 2,
                      color: '#004721',
                      fontWeight: 'bold'
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography sx={{ mb: 2, color: '#666' }}>
                    {service.description}
                  </Typography>
                  <Button 
                    variant="outlined"
                    sx={{ 
                      mt: 2,
                      color: '#004721',
                      borderColor: '#004721',
                      '&:hover': {
                        backgroundColor: '#004721',
                        color: 'white',
                        borderColor: '#004721',
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Section */}
        <Box 
          sx={{ 
            mt: 8, 
            p: 4, 
            textAlign: 'center',
            backgroundColor: '#004721',
            borderRadius: 2,
            color: 'white'
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Ready to Get Started?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Join our platform today and experience the best agricultural services.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: '#009C4A',
              '&:hover': {
                backgroundColor: '#00b359',
              }
            }}
          >
            Contact Us Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage; 