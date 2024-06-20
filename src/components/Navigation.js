// src/components/Navigation.js
import React from 'react';
import { Button, Box, Container, Tabs, Tab } from '@mui/material';

const Navigation = ({ currentStep, handleNext, handleBack, handleSubmit }) => {
  const handleChange = (event, newValue) => {
    // Ensure user cannot navigate forward until step validation is complete
    if (newValue > currentStep && !validateStep()) {
      return;
    }
    if (newValue < currentStep) {
      handleBack();
    } else if (newValue > currentStep) {
      handleNext();
    }
  };

  const validateStep = () => {
    // Validation logic here based on currentStep
    // Replace with your own validation logic
    return true;
  };

  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px' }}>
      <Tabs
        value={currentStep - 1} // Adjusting index to match tabs starting from 0
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Personal Information" />
        <Tab label="Address Information" />
        <Tab label="Confirmation" />
      </Tabs>
      <Box mt={2} display="flex" justifyContent="space-between">
        {currentStep > 1 && (
          <Button variant="contained" onClick={handleBack}>Back</Button>
        )}
        {currentStep < 3 && (
          <Button variant="contained" onClick={handleNext}>Next</Button>
        )}
        {currentStep === 3 && (
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        )}
      </Box>
    </Container>
  );
};

export default Navigation;
