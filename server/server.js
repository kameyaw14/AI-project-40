// server.js
import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle fraud prediction requests
app.post('/api/predict', async (req, res) => {
  try {
    // Destructure raw input data from the frontend
    const { amount, Actual_amount_orig, Actual_amount_dest, type } = req.body;

    // Transform the input into the required format for the Fraud Detection API
    const transformedData = {
      amount,
      Actual_amount_orig,
      Actual_amount_dest,
      type_CASH_IN: type === "CASH_IN",
      type_CASH_OUT: type === "CASH_OUT",
      type_DEBIT: type === "DEBIT",
      type_PAYMENT: type === "PAYMENT",
      type_TRANSFER: type === "TRANSFER"
    };

    // Call the Fraud Detection API
    const apiResponse = await axios.post(
      'https://fraud-detection-api-utxu.onrender.com/predict',
      transformedData,
      { headers: { 'Content-Type': 'application/json' } }
    );

    // Return the prediction result to the client
    res.json(apiResponse.data);
  } catch (error) {
    console.error('Error calling Fraud Detection API:', error);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
