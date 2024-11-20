import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Tab,
  Tabs,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import ProfileCard from '../../pages/profile/ProfileCard'

const FarmerProfile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  // Sample farmer data - Replace with your API data
  const [farmer, setFarmer] = useState({
    id: 1,
    name: "John Doe",
    role: "Farmer",
    email: "john.doe@example.com",
    phone: "+233 55 77 216 02",
    address: "123 Farm Road, Accra",
    status: "Active",
    verified: true,
    profileImage: "", // Add profile image URL
    farmDetails: {
      farmName: "Green Acres Farm",
      farmSize: "50 hectares",
      mainCrops: ["Tomatoes", "Potatoes", "Onions"],
      certifications: ["Organic Certified", "GAP Certified"],
    },
    statistics: {
      totalOrders: 150,
      completedDeliveries: 145,
      activeListings: 12,
      averageRating: 4.8,
    },
    recentActivity: [
      {
        id: 1,
        type: "Order",
        description: "New order #123 received",
        date: "2024-03-10",
      },
      {
        id: 2,
        type: "Delivery",
        description: "Completed delivery #120",
        date: "2024-03-09",
      },
    ],
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEdit = () => {
    setEditedUser({ ...farmer });
    setEditDialogOpen(true);
  };

  const handleSave = () => {
    setFarmer(editedUser);
    setEditDialogOpen(false);
    // Add API call to update user data
  };

  const TabPanel = ({ children, value, index }) => (
    <Box hidden={value !== index} sx={{ mt: 3 }}>
      {value === index && children}
    </Box>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProfileCard user={farmer} onEdit={handleEdit} />
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ mt: 3 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root.Mui-selected': {
                  color: '#004721',
                },
              }}
            >
              <Tab label="Farm Details" />
              <Tab label="Statistics" />
              <Tab label="Recent Activity" />
            </Tabs>

            <Box sx={{ p: 3 }}>
              <TabPanel value={tabValue} index={0}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" color="#004721" gutterBottom>
                          Farm Information
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemText
                              primary="Farm Name"
                              secondary={farmer.farmDetails.farmName}
                            />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemText
                              primary="Farm Size"
                              secondary={farmer.farmDetails.farmSize}
                            />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemText
                              primary="Main Crops"
                              secondary={farmer.farmDetails.mainCrops.join(", ")}
                            />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemText
                              primary="Certifications"
                              secondary={farmer.farmDetails.certifications.join(", ")}
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Grid container spacing={3}>
                  {Object.entries(farmer.statistics).map(([key, value]) => (
                    <Grid item xs={12} sm={6} md={3} key={key}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="#004721">
                            {value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <List>
                  {farmer.recentActivity.map((activity) => (
                    <React.Fragment key={activity.id}>
                      <ListItem>
                        <ListItemText
                          primary={activity.description}
                          secondary={new Date(activity.date).toLocaleDateString()}
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </TabPanel>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Edit Profile Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              value={editedUser?.name || ''}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              value={editedUser?.email || ''}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Phone"
              value={editedUser?.phone || ''}
              onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Address"
              value={editedUser?.address || ''}
              onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })}
              multiline
              rows={2}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleSave}
            sx={{ 
              bgcolor: '#004721',
              color: 'white',
              '&:hover': { bgcolor: '#009c4a' }
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FarmerProfile; 