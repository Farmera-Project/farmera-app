import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from '@mui/material';

// Replace with your Mapbox access token
mapboxgl.accessToken = 'your_mapbox_access_token';

const DeliveryTracking = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mapContainer.current) return; // Exit if no container

    // Initialize map only if it hasn't been initialized yet
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [28.0473, -26.2041], // Johannesburg coordinates
        zoom: 12
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl());

      // Handle map load
      map.current.on('load', () => {
        setLoading(false);
        // Add your delivery markers here
      });
    }

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Delivery Tracking
      </Typography>

      <Box sx={{ display: 'flex', gap: 3, height: '70vh' }}>
        {/* Map Container */}
        <Card sx={{ flex: 2 }}>
          <CardContent sx={{ height: '100%', p: '0 !important' }}>
            {loading && (
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                <CircularProgress />
              </Box>
            )}
            <Box
              ref={mapContainer}
              sx={{
                height: '100%',
                width: '100%',
                '& .mapboxgl-canvas': {
                  height: '100% !important',
                  width: '100% !important',
                },
              }}
            />
          </CardContent>
        </Card>

        {/* Delivery Status List */}
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Active Deliveries
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Order #12345"
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        Status: In Transit
                      </Typography>
                      <br />
                      Estimated arrival: 30 mins
                    </>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Order #12346"
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        Status: Out for Delivery
                      </Typography>
                      <br />
                      Estimated arrival: 45 mins
                    </>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DeliveryTracking;
