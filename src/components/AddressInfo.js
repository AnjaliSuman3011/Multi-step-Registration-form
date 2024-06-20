// src/components/AddressInfo.js
import React from 'react';
import { TextField, Typography, Box, Container, Paper } from '@mui/material';

const AddressInfo = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Address Information</Typography>
        <form>
          <TextField
            label="Address Line 1"
            name="address1"
            value={formData.address1 || ''}
            onChange={handleChange}
            error={!!errors.address1}
            helperText={errors.address1}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address Line 2"
            name="address2"
            value={formData.address2 || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City"
            name="city"
            value={formData.city || ''}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
            fullWidth
            margin="normal"
          />
          <TextField
            label="State"
            name="state"
            value={formData.state || ''}
            onChange={handleChange}
            error={!!errors.state}
            helperText={errors.state}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Zip Code"
            name="zip"
            value={formData.zip || ''}
            onChange={handleChange}
            error={!!errors.zip}
            helperText={errors.zip}
            fullWidth
            margin="normal"
          />
        </form>
      </Paper>
    </Container>
  );
};

export default AddressInfo;
