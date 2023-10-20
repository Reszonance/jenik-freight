const express = require('express');
const router = express.Router();
const ShippingForm = require('../models/ShippingFormSchema'); // Import your Mongoose model

// Define a route to handle form submissions
router.post('/submit-form', async (req, res) => {
  try {
    console.log('Handling form submission...');
    const formData = req.body;

    // Create a new ShippingForm document
    const newShippingForm = new ShippingForm(formData);

    console.log('Created new ShippingForm document:', newShippingForm);

    // Save the form data to MongoDB
    await newShippingForm.save();

    console.log('Form data saved to MongoDB.');

    // Respond with a success status
    console.log('Form submitted successfully:', newShippingForm);

    return res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error:', error);

    // Respond with an error status
    return res.status(500).json({ error: 'Form submission failed' });
  }
});

module.exports = router;
