import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Grid,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';

const ProfileCard = ({ user, onEdit }) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={user.profileImage}
            sx={{ 
              width: 100, 
              height: 100, 
              mr: 2,
              border: '3px solid #004721'
            }}
          />
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h5" color="#004721" fontWeight="bold">
                {user.name}
              </Typography>
              {user.verified && (
                <VerifiedIcon sx={{ color: '#009c4a' }} />
              )}
            </Box>
            <Typography variant="body1" color="text.secondary">
              {user.role}
            </Typography>
            <Chip 
              label={user.status} 
              color={user.status === 'Active' ? 'success' : 'default'}
              size="small"
              sx={{ mt: 1 }}
            />
          </Box>
          <IconButton 
            sx={{ ml: 'auto' }}
            onClick={onEdit}
          >
            <EditIcon />
          </IconButton>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ color: '#004721', mr: 1 }} />
              <Typography variant="body2">{user.email}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ color: '#004721', mr: 1 }} />
              <Typography variant="body2">{user.phone}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ color: '#004721', mr: 1 }} />
              <Typography variant="body2">{user.address}</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
