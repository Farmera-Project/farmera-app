import React, { useState, useEffect } from "react";
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Grid, 
  Container,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';

// Add this constant at the top of your file
const DEFAULT_IMAGES = {
  'Layer Feed': 'https://i.ibb.co/TrHxNSB/layer-feed.jpg',
  'Broiler Feed': 'https://i.ibb.co/C2Lx4mj/broiler-feed.jpg',
  'Grower Feed': 'https://i.ibb.co/YX89WNx/grower-feed.jpg',
  'Starter Feed': 'https://i.ibb.co/YyD5hhk/starter-feed.jpg',
  'Finisher Feed': 'https://i.ibb.co/0M8t3Cw/finisher-feed.jpg',
  'Concentrate': 'https://i.ibb.co/VvxBzzg/concentrate.jpg',
  'Pre-Mix': 'https://i.ibb.co/C1J6KnR/pre-mix.jpg',
  'default': 'https://i.ibb.co/M6nxQHB/default-feed.jpg'
};

function UpdateStock() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState({
    open: false,
    productId: null,
    productName: ''
  });

  // Load products when component mounts
  useEffect(() => {
    loadProducts();
  }, []);

  // Load products from localStorage
  const loadProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    const productsWithImages = storedProducts.map(product => ({
      ...product,
      image: product.image || DEFAULT_IMAGES[product.category] || DEFAULT_IMAGES.default
    }));
    setProducts(productsWithImages);
  };

  // Handle edit button click
  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  // Update handleDelete to open confirmation dialog
  const handleDeleteClick = (product) => {
    setDeleteConfirm({
      open: true,
      productId: product.id,
      productName: product.name
    });
  };

  // Handle actual deletion after confirmation
  const handleDeleteConfirm = () => {
    try {
      const updatedProducts = products.filter(p => p.id !== deleteConfirm.productId);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
      toast.success('Product deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete product');
    } finally {
      setDeleteConfirm({ open: false, productId: null, productName: '' });
    }
  };

  // Handle cancel delete
  const handleDeleteCancel = () => {
    setDeleteConfirm({ open: false, productId: null, productName: '' });
  };

  // Handle input changes for editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle update submission
  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const updatedProducts = products.map(p => 
        p.id === editingProduct.id ? {
          ...editingProduct,
          price: parseFloat(editingProduct.price),
          stock: parseInt(editingProduct.stock),
          updatedAt: new Date().toISOString()
        } : p
      );

      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
      setEditingProduct(null);
      toast.success('Product updated successfully!');
    } catch (error) {
      toast.error('Failed to update product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          color: '#004721',
          fontWeight: 'bold',
          mb: 3,
          textAlign: 'center'
        }}
      >
        Update Stock
      </Typography>

      {/* Edit Form */}
      {editingProduct && (
        <Box
          component="form"
          onSubmit={handleUpdate}
          sx={{
            mb: 4,
            p: 3,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Name"
                name="name"
                value={editingProduct.name}
                onChange={handleEditChange}
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={editingProduct.description}
                onChange={handleEditChange}
                required
                multiline
                rows={3}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price (GH₵)"
                name="price"
                type="number"
                value={editingProduct.price}
                onChange={handleEditChange}
                required
                size="small"
                InputProps={{
                  inputProps: { min: 0, step: "0.01" }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Stock Quantity"
                name="stock"
                type="number"
                value={editingProduct.stock}
                onChange={handleEditChange}
                required
                size="small"
                InputProps={{
                  inputProps: { min: 0 }
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: '#004721',
                '&:hover': { bgcolor: '#009C4A' }
              }}
            >
              {loading ? 'Updating...' : 'Update Product'}
            </Button>
            <Button
              onClick={() => setEditingProduct(null)}
              variant="outlined"
              sx={{
                color: '#004721',
                borderColor: '#004721',
                '&:hover': {
                  borderColor: '#009C4A',
                  color: '#009C4A'
                }
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}

      {/* Products List */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                  boxShadow: 6
                }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  backgroundColor: '#f5f5f5'
                }}
              >
                <Box
                  component="img"
                  src={product.image || DEFAULT_IMAGES.default}
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = DEFAULT_IMAGES.default;
                  }}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  gutterBottom
                  sx={{
                    color: '#004721',
                    fontWeight: 'bold'
                  }}
                >
                  {product.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph
                  sx={{ minHeight: '3em' }}
                >
                  {product.description}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: '#009c4a',
                    fontWeight: 'medium',
                    mb: 1
                  }}
                >
                  Price: GH₵{product.price.toFixed(2)}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{
                    color: product.stock < 10 ? '#d32f2f' : '#004721',
                    fontWeight: 'medium'
                  }}
                >
                  Stock: {product.stock} {product.stock < 10 && '(Low Stock)'}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                <IconButton 
                  onClick={() => handleEdit(product)}
                  sx={{ 
                    color: '#004721',
                    '&:hover': {
                      bgcolor: 'rgba(0, 71, 33, 0.1)'
                    }
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton 
                  onClick={() => handleDeleteClick(product)}
                  sx={{ 
                    color: '#d32f2f',
                    '&:hover': {
                      bgcolor: 'rgba(211, 47, 47, 0.1)'
                    }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {products.length === 0 && (
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            mt: 4,
            color: 'text.secondary'
          }}
        >
          No products found. Add some products first.
        </Typography>
      )}

      {/* Add Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirm.open}
        onClose={handleDeleteCancel}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '400px',
            p: 2
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          color: '#d32f2f'
        }}>
          <WarningIcon sx={{ color: '#d32f2f' }} />
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{deleteConfirm.productName}"? 
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button 
            onClick={handleDeleteCancel}
            sx={{
              color: '#004721',
              '&:hover': { bgcolor: 'rgba(0, 71, 33, 0.1)' }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDeleteConfirm}
            variant="contained"
            sx={{
              bgcolor: '#d32f2f',
              '&:hover': { bgcolor: '#b71c1c' },
              color: 'white'
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
    </Container>
  );
}

export default UpdateStock;