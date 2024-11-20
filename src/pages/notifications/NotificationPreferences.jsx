import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  Divider,
  TextField,
  Button,
  Alert,
  Snackbar,
  Grid,
  IconButton,
  Tooltip,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';
import SaveIcon from '@mui/icons-material/Save';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({
    email: {
      enabled: true,
      address: '',
      notifications: {
        newOrders: true,
        orderUpdates: true,
        stockAlerts: true,
        payments: true,
        promotions: false,
      },
    },
    sms: {
      enabled: false,
      phoneNumber: '',
      notifications: {
        newOrders: true,
        orderUpdates: true,
        stockAlerts: false,
        payments: true,
        promotions: false,
      },
    },
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user's notification preferences
    // Replace with actual API call
    const fetchPreferences = async () => {
      try {
        // const response = await api.get('/notification-preferences');
        // setPreferences(response.data);
      } catch (error) {
        console.error('Error fetching preferences:', error);
      }
    };

    fetchPreferences();
  }, []);

  const handleToggleChannel = (channel) => {
    setPreferences((prev) => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        enabled: !prev[channel].enabled,
      },
    }));
    setIsEditing(true);
  };

  const handleToggleNotification = (channel, notification) => {
    setPreferences((prev) => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        notifications: {
          ...prev[channel].notifications,
          [notification]: !prev[channel].notifications[notification],
        },
      },
    }));
    setIsEditing(true);
  };

  const handleContactUpdate = (channel, value) => {
    setPreferences((prev) => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [channel === 'email' ? 'address' : 'phoneNumber']: value,
      },
    }));
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      // Replace with actual API call
      // await api.post('/notification-preferences', preferences);
      
      setSnackbar({
        open: true,
        message: 'Notification preferences saved successfully!',
        severity: 'success',
      });
      setIsEditing(false);
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error saving preferences. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, color: '#004721' }}>
        Notification Preferences
      </Typography>

      {/* Email Preferences */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EmailIcon sx={{ mr: 1, color: '#004721' }} />
            <Typography variant="h6" sx={{ color: '#004721' }}>Email Notifications</Typography>
            <Switch
              checked={preferences.email.enabled}
              onChange={() => handleToggleChannel('email')}
              sx={{
                ml: 'auto',
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#004721',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#009C4A',
                },
              }}
            />
          </Box>
          
          <TextField
            fullWidth
            label="Email Address"
            value={preferences.email.address}
            onChange={(e) => handleContactUpdate('email', e.target.value)}
            disabled={!preferences.email.enabled}
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#004721',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#004721',
              },
            }}
          />

          <Divider sx={{ my: 2 }} />

          <FormGroup>
            {Object.entries(preferences.email.notifications).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Switch
                    checked={value}
                    onChange={() => handleToggleNotification('email', key)}
                    disabled={!preferences.email.enabled}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#004721',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#009C4A',
                      },
                    }}
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                    <Tooltip title={`Receive email notifications for ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}>
                      <IconButton size="small" sx={{ color: '#004721' }}>
                        <HelpOutlineIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                }
              />
            ))}
          </FormGroup>
        </CardContent>
      </Card>

      {/* SMS Preferences */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SmsIcon sx={{ mr: 1, color: '#004721' }} />
            <Typography variant="h6" sx={{ color: '#004721' }}>SMS Notifications</Typography>
            <Switch
              checked={preferences.sms.enabled}
              onChange={() => handleToggleChannel('sms')}
              sx={{
                ml: 'auto',
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#004721',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#009C4A',
                },
              }}
            />
          </Box>

          <TextField
            fullWidth
            label="Phone Number"
            value={preferences.sms.phoneNumber}
            onChange={(e) => handleContactUpdate('sms', e.target.value)}
            disabled={!preferences.sms.enabled}
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#004721',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#004721',
              },
            }}
          />

          <Divider sx={{ my: 2 }} />

          <FormGroup>
            {Object.entries(preferences.sms.notifications).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Switch
                    checked={value}
                    onChange={() => handleToggleNotification('sms', key)}
                    disabled={!preferences.sms.enabled}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#004721',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#009C4A',
                      },
                    }}
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                    <Tooltip title={`Receive SMS notifications for ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}>
                      <IconButton size="small" sx={{ color: '#004721' }}>
                        <HelpOutlineIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                }
              />
            ))}
          </FormGroup>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!isEditing}
          startIcon={<SaveIcon />}
          sx={{
            backgroundColor: '#004721',
            '&:hover': {
              backgroundColor: '#009C4A',
            },
            '&:disabled': {
              backgroundColor: '#cccccc',
            },
          }}
        >
          Save Preferences
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{
            '&.MuiAlert-standardSuccess': {
              backgroundColor: '#009C4A',
              color: 'white',
            },
            '&.MuiAlert-standardError': {
              backgroundColor: '#d32f2f',
              color: 'white',
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NotificationPreferences; 