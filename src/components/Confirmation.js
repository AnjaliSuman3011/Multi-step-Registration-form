// src/components/Confirmation.js
import React from 'react';
import { Typography, Box, Container, Paper, List, ListItem, ListItemText } from '@mui/material';

const Confirmation = ({ formData }) => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Confirmation</Typography>
        <Box>
          <Typography variant="h6">Personal Information</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={formData.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={formData.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phone" secondary={formData.phone} />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h6">Address Information</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Address Line 1" secondary={formData.address1} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Address Line 2" secondary={formData.address2} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={formData.city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="State" secondary={formData.state} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Zip Code" secondary={formData.zip} />
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default Confirmation;
