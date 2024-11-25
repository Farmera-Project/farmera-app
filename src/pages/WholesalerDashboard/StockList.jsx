import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define initial stock data
const initialStocks = [
  {
    id: 1,
    productName: "Premium Layer Feed",
    quantity: 150,
    price: 280,
    status: "In Stock",
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  {
    id: 2,
    productName: "Broiler Starter",
    quantity: 50,
    price: 300,
    status: "Low Stock",
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  {
    id: 3,
    productName: "Grower Feed",
    quantity: 200,
    price: 260,
    status: "In Stock",
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  {
    id: 4,
    productName: "Layer Mash",
    quantity: 175,
    price: 290,
    status: "In Stock",
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  {
    id: 5,
    productName: "Chick Starter",
    quantity: 45,
    price: 320,
    status: "Low Stock",
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  {
    id: 6,
    productName: "Finisher Feed",
    quantity: 160,
    price: 275,
    status: "In Stock",
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  {
    id: 7,
    productName: "Layer Concentrate",
    quantity: 30,
    price: 350,
    status: "Low Stock",
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  {
    id: 8,
    productName: "Broiler Finisher",
    quantity: 140,
    price: 285,
    status: "In Stock",
    lastUpdated: new Date().toISOString().split('T')[0]
  }
];

const StockList = () => {
  const [stocks] = useState(initialStocks);

  return (
    <Box sx={{ 
      mt: 7,
      mb: 4,
      ml: 20,
      pt: 1
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: 3,
          ml: 4 
        }}>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            color="#004721" 
            gutterBottom
          >
             Stock List
          </Typography>
        </Box>

        <TableContainer 
          component={Paper} 
          sx={{ 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            maxHeight: '550px',
            overflow: 'auto',
            mx: 'auto',
            ml: 4,
            width: '95%',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell 
                  sx={{ 
                    fontWeight: 'bold', 
                    bgcolor: '#f5f5f5',
                    color: '#004721'
                  }}
                >
                  Product Name
                </TableCell>
                <TableCell 
                  sx={{ 
                    fontWeight: 'bold', 
                    bgcolor: '#f5f5f5',
                    color: '#004721'
                  }}
                >
                  Quantity
                </TableCell>
                <TableCell 
                  sx={{ 
                    fontWeight: 'bold', 
                    bgcolor: '#f5f5f5',
                    color: '#004721'
                  }}
                >
                  Price (₵)
                </TableCell>
                <TableCell 
                  sx={{ 
                    fontWeight: 'bold', 
                    bgcolor: '#f5f5f5',
                    color: '#004721'
                  }}
                >
                  Status
                </TableCell>
                <TableCell 
                  sx={{ 
                    fontWeight: 'bold', 
                    bgcolor: '#f5f5f5',
                    color: '#004721'
                  }}
                >
                  Last Updated
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks.map((stock) => (
                <TableRow 
                  key={stock.id} 
                  hover
                  sx={{
                    '&:nth-of-type(odd)': {
                      bgcolor: 'rgba(0, 71, 33, 0.02)'
                    }
                  }}
                >
                  <TableCell>{stock.productName}</TableCell>
                  <TableCell>{stock.quantity}</TableCell>
                  <TableCell>₵{stock.price}</TableCell>
                  <TableCell>
                    <Chip
                      label={stock.status}
                      size="small"
                      color={stock.status === "In Stock" ? "success" : "warning"}
                      sx={{ 
                        fontWeight: 'medium',
                        minWidth: '90px'
                      }}
                    />
                  </TableCell>
                  <TableCell>{stock.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default StockList; 