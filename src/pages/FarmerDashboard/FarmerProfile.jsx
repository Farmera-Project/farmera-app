import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFarmerProfile, updateFarmerProfile } from '../../services/farmer';
import { toast } from 'react-toastify';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Tab,
  Tabs,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Alert,
  Avatar,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const FarmerProfile = () => {
  const navigate = useNavigate(); // We are using navigate inside the component here
  const [tabValue, setTabValue] = useState(0);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [farmer, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmerProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getFarmerProfile(navigate); // Passing navigate here

        setFarmer(data);
        setEditedUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error.message);

        if (error.message === 'No authentication token found') {
          toast.error("Please login to view your profile");
          navigate('/login');
        } else {
          toast.error(error.message || "Failed to load profile");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFarmerProfile();
  }, [navigate]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEdit = () => {
    setEditedUser({ ...farmer });
    setEditDialogOpen(true);
  };

  const handleSave = async () => {
    try {
      if (!editedUser?.name || !editedUser?.email) {
        toast.error("Name and email are required fields");
        return;
      }

      const loadingToast = toast.loading("Updating profile...");

      const response = await updateFarmerProfile(editedUser);
      setFarmer(response);
      
      toast.dismiss(loadingToast);
      toast.success("Profile updated successfully!");
      setEditDialogOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message || "An error occurred while updating profile");
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!farmer) {
    return (
      <Box p={3}>
        <Alert severity="info">No profile data available</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      {/* The rest of the component */}
    </Box>
  );
};

export default FarmerProfile;
