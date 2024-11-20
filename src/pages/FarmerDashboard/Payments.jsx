// src/components/PaymentForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Payments = ({ totalOrderAmount }) => {
  // Calculate 70% down payment
  const downPaymentAmount = totalOrderAmount * 0.7;

  // State for form values and validation messages
  const [amount, setAmount] = useState(downPaymentAmount.toFixed(2));
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert backend integration here (e.g., calling an API endpoint to process the payment)
    setPaymentSuccess(true);  // Mock success status for now
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 2, boxShadow: 3 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Make a Down Payment
      </Typography>
      
      <form onSubmit={handleSubmit}>
        {/* Displaying the 70% down payment amount */}
        <TextField
          label="Down Payment Amount"
          value={`$${amount}`}
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        
        {/* Payment Method (e.g., Credit Card) */}
        <TextField
          label="Payment Method"
          placeholder="Enter your payment method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          fullWidth
          margin="normal"
          required
          variant="outlined"
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          {downPaymentAmount.toFixed(2)}
        </Button>
      </form>

      {/* Success Message */}
      {paymentSuccess && (
        <Typography color="success.main" align="center" sx={{ mt: 2 }}>
          Payment successful! Thank you for your down payment.
        </Typography>
      )}
    </Box>
  );
};

export default Payments;
