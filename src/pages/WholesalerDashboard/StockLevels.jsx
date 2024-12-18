import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const formatPrice = (price) => {
  const numPrice = Number(price);
  return isNaN(numPrice) ? 'GH₵ 0.00' : `GH₵ ${numPrice.toFixed(2)}`;
};

const StockLevels = () => {
  const [stocks, setStocks] = useState([
    { id: 1, productName: 'Premium Layer Feed', quantity: 100, unit: 'bags', price: 280.00, category: 'Layer Feed' },
    { id: 2, productName: 'Broiler Starter', quantity: 150, unit: 'bags', price: 300.00, category: 'Broiler Feed' },
    { id: 3, productName: 'Grower Feed', quantity: 80, unit: 'bags', price: 260.00, category: 'Grower Feed' },
    { id: 4, productName: 'Layer Mash', quantity: 120, unit: 'bags', price: 290.00, category: 'Layer Feed' },
    { id: 5, productName: 'Chick Starter', quantity: 90, unit: 'bags', price: 320.00, category: 'Starter Feed' },
    { id: 6, productName: 'Finisher Feed', quantity: 110, unit: 'bags', price: 275.00, category: 'Finisher Feed' },
    { id: 7, productName: 'Layer Concentrate', quantity: 70, unit: 'bags', price: 350.00, category: 'Concentrate' },
    { id: 8, productName: 'Broiler Finisher', quantity: 130, unit: 'bags', price: 285.00, category: 'Broiler Feed' },
    { id: 9, productName: 'Pre-Starter Feed', quantity: 85, unit: 'bags', price: 330.00, category: 'Starter Feed' },
    { id: 10, productName: 'Layer Pre-Mix', quantity: 60, unit: 'bags', price: 340.00, category: 'Pre-Mix' }
  ]);

  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [newStock, setNewStock] = useState({
    productName: '',
    quantity: '',
    unit: 'bags',
    price: '',
    category: ''
  });

  const [errors, setErrors] = useState({});

  const units = ['bags', 'kg', 'tons'];
  const categories = [
    'Layer Feed',
    'Broiler Feed',
    'Grower Feed',
    'Starter Feed',
    'Finisher Feed',
    'Concentrate',
    'Pre-Mix'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!newStock.productName) newErrors.productName = 'Product name is required';
    if (!newStock.quantity) newErrors.quantity = 'Quantity is required';
    if (!newStock.unit) newErrors.unit = 'Unit is required';
    if (!newStock.price) newErrors.price = 'Price is required';
    if (!newStock.category) newErrors.category = 'Category is required';
    if (newStock.price && newStock.price < 0) newErrors.price = 'Price cannot be negative';
    if (newStock.quantity && newStock.quantity < 0) newErrors.quantity = 'Quantity cannot be negative';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOpen = (item = null) => {
    if (item) {
      setEditItem(item);
      setNewStock(item);
    } else {
      setEditItem(null);
      setNewStock({
        productName: '',
        quantity: '',
        unit: 'bags',
        price: '',
        category: ''
      });
    }
    setErrors({});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
    setErrors({});
  };

  const handleSave = () => {
    if (validateForm()) {
      if (editItem) {
        setStocks(stocks.map(stock => 
          stock.id === editItem.id 
            ? { 
                ...newStock, 
                id: editItem.id,
                price: Number(newStock.price),
                quantity: Number(newStock.quantity)
              } 
            : stock
        ));
      } else {
        setStocks([...stocks, { 
          ...newStock, 
          id: stocks.length + 1,
          price: Number(newStock.price),
          quantity: Number(newStock.quantity)
        }]);
      }
      handleClose();
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setStocks(stocks.filter(stock => stock.id !== id));
    }
  };

  return (
    <Box sx={{ width: '100%', p: 3, mt: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" color="#004721" fontWeight="bold">
          Stock Levels
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
          sx={{ bgcolor: '#009c4a', '&:hover': { bgcolor: '#004721' } }}
        >
          Add New Stock
        </Button>
      </Box>

      <TableContainer 
        component={Paper} 
        sx={{ 
          mt: 2,
          maxHeight: '70vh',
          overflow: 'auto'
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell 
                sx={{ 
                  bgcolor: '#004721', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Product Name
              </TableCell>
              <TableCell 
                sx={{ 
                  bgcolor: '#004721', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Category
              </TableCell>
              <TableCell 
                sx={{ 
                  bgcolor: '#004721', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Quantity
              </TableCell>
              <TableCell 
                sx={{ 
                  bgcolor: '#004721', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Unit
              </TableCell>
              <TableCell 
                sx={{ 
                  bgcolor: '#004721', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Price (GH₵)
              </TableCell>
              <TableCell 
                sx={{ 
                  bgcolor: '#004721', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow 
                key={stock.id}
                sx={{
                  '&:nth-of-type(odd)': {
                    backgroundColor: 'rgba(0, 71, 33, 0.02)',
                  },
                }}
              >
                <TableCell>{stock.productName}</TableCell>
                <TableCell>{stock.category}</TableCell>
                <TableCell>{stock.quantity}</TableCell>
                <TableCell>{stock.unit}</TableCell>
                <TableCell>{formatPrice(stock.price)}</TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => handleOpen(stock)}
                    sx={{ color: '#009c4a' }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleDelete(stock.id)}
                    sx={{ color: '#ff0000' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#004721', color: 'white' }}>
          {editItem ? 'Edit Stock' : 'Add New Stock'}
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              label="Product Name"
              value={newStock.productName}
              onChange={(e) => setNewStock({ ...newStock, productName: e.target.value })}
              error={!!errors.productName}
              helperText={errors.productName}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={newStock.category}
              label="Category"
              onChange={(e) => setNewStock({ ...newStock, category: e.target.value })}
              error={!!errors.category}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              label="Quantity"
              type="number"
              value={newStock.quantity}
              onChange={(e) => setNewStock({ ...newStock, quantity: e.target.value })}
              error={!!errors.quantity}
              helperText={errors.quantity}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Unit</InputLabel>
            <Select
              value={newStock.unit}
              label="Unit"
              onChange={(e) => setNewStock({ ...newStock, unit: e.target.value })}
              error={!!errors.unit}
            >
              {units.map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              label="Price (GH₵)"
              type="number"
              value={newStock.price}
              onChange={(e) => setNewStock({ ...newStock, price: e.target.value })}
              error={!!errors.price}
              helperText={errors.price}
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleClose} 
            variant="outlined" 
            sx={{ color: '#ff0000', borderColor: '#ff0000' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            variant="contained"
            sx={{ bgcolor: '#009c4a', '&:hover': { bgcolor: '#004721' } }}
          >
            {editItem ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StockLevels;
