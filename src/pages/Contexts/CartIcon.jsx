import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../Contexts/CartContexts'
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  // const { getCartCount } = useCart();
  const navigate = useNavigate();

  return (
    <IconButton 
      color="inherit" 
      onClick={() => navigate('/cart')}
      sx={{ ml: 2 }}
    >
      <Badge badgeContent={0} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
