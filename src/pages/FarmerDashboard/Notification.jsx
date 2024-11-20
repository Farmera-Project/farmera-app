import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { 
  Box, 
  Button, 
  Snackbar, 
  Alert, 
  IconButton 
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

// It's better to handle socket connection errors
let socket;

try {
  socket = io('http://localhost:5000', {
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  });
} catch (error) {
  console.error('Socket connection failed:', error);
}

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('disconnected');

  useEffect(() => {
    if (!socket) return;

    // Handle connection events
    socket.on('connect', () => {
      console.log('Connected to socket server');
      setConnectionStatus('connected');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
      setConnectionStatus('disconnected');
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
      setConnectionStatus('error');
    });

    // Handle notifications
    socket.on('notification', (data) => {
      console.log('New notification:', data);
      setNotifications(prev => [...prev, data]);
      setMessage(data.message);
      setOpen(true);
    });

    // Cleanup function
    return () => {
      if (socket) {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('connect_error');
        socket.off('notification');
        socket.close();
      }
    };
  }, []); // Empty dependency array since we want this to run once

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const sendNotification = () => {
    if (socket && socket.connected) {
      socket.emit('sendNotification', { 
        message: 'Your order has been shipped!',
        timestamp: new Date().toISOString(),
        type: 'order_update'
      });
    } else {
      console.error('Socket not connected');
      setMessage('Unable to send notification: Not connected to server');
      setOpen(true);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button
        variant="contained"
        startIcon={<NotificationsIcon />}
        onClick={sendNotification}
        disabled={connectionStatus !== 'connected'}
        sx={{
          bgcolor: '#009c4a',
          '&:hover': { bgcolor: '#004721' },
          '&.Mui-disabled': {
            bgcolor: '#cccccc'
          }
        }}
      >
        Send Notification
      </Button>

      {/* Connection Status Indicator */}
      <Box sx={{ mt: 2, color: connectionStatus === 'connected' ? 'green' : 'red' }}>
        Status: {connectionStatus}
      </Box>

      {/* Notification Display */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleClose} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Notification;