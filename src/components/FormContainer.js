// src/components/FormContainer.js
import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';
import Navigation from './Navigation';
import { Container, Paper } from '@mui/material';

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } else if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) newErrors.zip = 'Zip Code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setCurrentStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      alert('Form submitted successfully!');
      localStorage.removeItem('formData');
    }
  };

  return (
    <Container maxWidth="sm" className="form-container">
      <Paper elevation={3} style={{ padding: '20px' }}>
        {currentStep === 1 && <PersonalInfo formData={formData} setFormData={setFormData} errors={errors} />}
        {currentStep === 2 && <AddressInfo formData={formData} setFormData={setFormData} errors={errors} />}
        {currentStep === 3 && <Confirmation formData={formData} />}
        <Navigation
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
        />
      </Paper>
    </Container>
  );
};

export default FormContainer;
