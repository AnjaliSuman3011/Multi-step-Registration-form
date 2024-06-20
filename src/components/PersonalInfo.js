// src/components/PersonalInfo.js
import React from 'react';
import { TextField, Typography, Box, Container, Paper } from '@mui/material';

const PersonalInfo = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Personal Information</Typography>
        <form>
          <TextField
            label="Name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            fullWidth
            margin="normal"
          />
        </form>
      </Paper>
    </Container>
  );
};

export default PersonalInfo;
