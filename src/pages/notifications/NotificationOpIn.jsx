import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  TextField,
  Button,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const NotificationOptIn = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    email: {
      enabled: false,
      address: ''
    },
    sms: {
      enabled: false,
      phoneNumber: ''
    }
  });

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Fetch current settings
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setSettings({
            email: {
              enabled: true,
              address: 'farmer@example.com'
            },
            sms: {
              enabled: false,
              phoneNumber: ''
            }
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        setAlert({
          open: true,
          message: 'Failed to load notification settings',
          severity: 'error'
        });
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleEmailToggle = () => {
    setSettings(prev => ({
      ...prev,
      email: {
        ...prev.email,
        enabled: !prev.email.enabled
      }
    }));
  };

  const handleSMSToggle = () => {
    setSettings(prev => ({
      ...prev,
      sms: {
        ...prev.sms,
        enabled: !prev.sms.enabled
      }
    }));
  };

  const handleEmailChange = (event) => {
    setSettings(prev => ({
      ...prev,
      email: {
        ...prev.email,
        address: event.target.value
      }
    }));
  };

  const handlePhoneChange = (event) => {
    setSettings(prev => ({
      ...prev,
      sms: {
        ...prev.sms,
        phoneNumber: event.target.value
      }
    }));
  };

  const validateSettings = () => {
    if (settings.email.enabled && !settings.email.address) {
      setAlert({
        open: true,
        message: 'Please enter an email address',
        severity: 'error'
      });
      return false;
    }

    if (settings.sms.enabled && !settings.sms.phoneNumber) {
      setAlert({
        open: true,
        message: 'Please enter a phone number',
        severity: 'error'
      });
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (!validateSettings()) return;

    setSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAlert({
        open: true,
        message: 'Notification settings saved successfully!',
        severity: 'success'
      });
    } catch (error) {
      setAlert({
        open: true,
        message: 'Failed to save notification settings',
        severity: 'error'
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Notification Settings
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            How would you like to receive notifications?
          </Typography>
          
          <FormGroup>
            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.email.enabled}
                    onChange={handleEmailToggle}
                    color="primary"
                  />
                }
                label="Email Notifications"
              />
              {settings.email.enabled && (
                <TextField
                  fullWidth
                  label="Email Address"
                  value={settings.email.address}
                  onChange={handleEmailChange}
                  type="email"
                  margin="normal"
                  size="small"
                  sx={{ ml: 3 }}
                />
              )}
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.sms.enabled}
                    onChange={handleSMSToggle}
                    color="primary"
                  />
                }
                label="SMS Notifications"
              />
              {settings.sms.enabled && (
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={settings.sms.phoneNumber}
                  onChange={handlePhoneChange}
                  type="tel"
                  margin="normal"
                  size="small"
                  sx={{ ml: 3 }}
                />
              )}
            </Box>
          </FormGroup>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            * You will receive notifications about orders, stock updates, and important announcements.
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </Button>
      </Box>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setAlert({ ...alert, open: false })} 
          severity={alert.severity}
          variant="filled"
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NotificationOptIn; 