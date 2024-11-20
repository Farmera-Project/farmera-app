import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  Grid,
  Chip,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as turf from '@turf/turf';

// Replace with your Mapbox access token
mapboxgl.accessToken = 'your_mapbox_access_token';

const DeliveryTracking = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deliveries, setDeliveries] = useState([]);

  // Sample delivery data - Replace with your API data
  const sampleDeliveries = [
    {
      id: 1,
      orderId: "ORD-001",
      status: "in_transit",
      driver: "John Doe",
      vehicle: "JHB 123 GP",
      currentLocation: [-26.2041, 28.0473],
      destination: [-26.2044, 28.0456],
      eta: "15 minutes",
      items: [
        { name: "Tomatoes", quantity: "50kg" },
        { name: "Potatoes", quantity: "100kg" },
      ],
    },
    // Add more deliveries as needed
  ];

  useEffect(() => {
    if (map.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [28.0473, -26.2041], // Johannesburg coordinates
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    // Load delivery data
    fetchDeliveryData();

    // Cleanup
    return () => map.current?.remove();
  }, []);

  const fetchDeliveryData = () => {
    // Simulate API call
    setTimeout(() => {
      setDeliveries(sampleDeliveries);
      setLoading(false);
      initializeDeliveryMarkers();
    }, 1000);
  };

  const initializeDeliveryMarkers = () => {
    sampleDeliveries.forEach(delivery => {
      // Add delivery vehicle marker
      const el = document.createElement('div');
      el.className = 'delivery-marker';
      el.style.backgroundColor = '#004721';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';

      new mapboxgl.Marker(el)
        .setLngLat(delivery.currentLocation)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <h3>Delivery ${delivery.orderId}</h3>
          <p>Driver: ${delivery.driver}</p>
          <p>ETA: ${delivery.eta}</p>
        `))
        .addTo(map.current);

      // Add destination marker
      const destEl = document.createElement('div');
      destEl.className = 'destination-marker';
      destEl.style.backgroundColor = '#009c4a';
      destEl.style.width = '20px';
      destEl.style.height = '20px';
      destEl.style.borderRadius = '50%';
      destEl.style.border = '2px solid white';

      new mapboxgl.Marker(destEl)
        .setLngLat(delivery.destination)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <h3>Destination</h3>
          <p>Order: ${delivery.orderId}</p>
        `))
        .addTo(map.current);

      // Draw route line
      getRoute(delivery.currentLocation, delivery.destination);
    });
  };

  const getRoute = async (start, end) => {
    try {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
      );
      const json = await query.json();
      const data = json.routes[0];
      const route = data.geometry.coordinates;

      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };

      if (map.current.getSource('route')) {
        map.current.getSource('route').setData(geojson);
      } else {
        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#009c4a',
            'line-width': 4,
            'line-opacity': 0.75
          }
        });
      }
    } catch (error) {
      console.error('Error getting route:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'in_transit':
        return '#009c4a';
      case 'delivered':
        return '#4caf50';
      case 'delayed':
        return '#f44336';
      default:
        return '#757575';
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress sx={{ color: '#004721' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" color="#004721" fontWeight="bold" gutterBottom>
        Delivery Tracking
      </Typography>

      <Grid container spacing={3}>
        {/* Map */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ height: '500px', position: 'relative' }}>
            <Box
              ref={mapContainer}
              sx={{ width: '100%', height: '100%' }}
            />
          </Paper>
        </Grid>

        {/* Delivery Information */}
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" color="#004721" gutterBottom>
                Active Deliveries
              </Typography>
              
              <List>
                {deliveries.map((delivery) => (
                  <React.Fragment key={delivery.id}>
                    <ListItem>
                      <ListItemIcon>
                        <LocalShippingIcon sx={{ color: '#004721' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="subtitle1">
                              Order {delivery.orderId}
                            </Typography>
                            <Chip
                              label={delivery.status.replace('_', ' ').toUpperCase()}
                              size="small"
                              sx={{
                                bgcolor: getStatusColor(delivery.status),
                                color: 'white'
                              }}
                            />
                          </Box>
                        }
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="body2">
                              Driver: {delivery.driver}
                            </Typography>
                            <Typography variant="body2">
                              Vehicle: {delivery.vehicle}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              Items:
                              {delivery.items.map((item, index) => (
                                <Typography key={index} variant="body2" component="div" sx={{ ml: 2 }}>
                                  • {item.name}: {item.quantity}
                                </Typography>
                              ))}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                              <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: '#009c4a' }} />
                              <Typography variant="body2">
                                ETA: {delivery.eta}
                              </Typography>
                            </Box>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliveryTracking;
