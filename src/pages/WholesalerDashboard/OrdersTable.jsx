import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Tooltip
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';

const sampleOrders = [
  { 
    id: "ORD001", 
    productName: "Product A", 
    quantity: 10, 
    customer: "Mabel Asante",
    status: "pending",
    date: "2024-03-15",
    total: 500.00
  },
  { 
    id: "ORD002", 
    productName: "Product B", 
    quantity: 5, 
    customer: "Calvin Bekoe",
    status: "completed",
    date: "2024-11-22",
    total: 250.00
  },
];

function OrdersTable() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#009C4A';
      case 'pending':
        return '#FFA500';
      case 'cancelled':
        return '#FF0000';
      default:
        return '#004721';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          color: '#004721',
          fontWeight: 'bold',
          mb: 3
        }}
      >
        Incoming Orders
      </Typography>
      <TableContainer 
        component={Paper} 
        sx={{ 
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <Table aria-label="incoming orders">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#004721' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Order ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Product Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Total (GH₵)</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleOrders.map((order) => (
              <TableRow 
                key={order.id}
                sx={{ 
                  '&:hover': { 
                    backgroundColor: '#f5f5f5'
                  }
                }}
              >
                <TableCell sx={{ fontWeight: 'medium' }}>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.productName}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip 
                    label={order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    sx={{
                      backgroundColor: getStatusColor(order.status),
                      color: 'white',
                      fontWeight: 'bold',
                      minWidth: 90
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="View Details">
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: '#004721',
                          '&:hover': { color: '#009C4A' }
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Accept Order">
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: '#004721',
                          '&:hover': { color: '#009C4A' }
                        }}
                      >
                        <CheckCircleIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancel Order">
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: '#004721',
                          '&:hover': { color: '#FF0000' }
                        }}
                      >
                        <CancelIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default OrdersTable;
