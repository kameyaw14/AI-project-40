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
    // Destructure raw input data from the frontend for fraud prediction
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

// New endpoint to handle loan approval prediction requests
app.post('/api/loan/predict', async (req, res) => {
  try {
    // Destructure the raw input data for loan approval
    const {
      person_age,
      person_income,
      person_emp_exp,
      loan_amnt,
      loan_int_rate,
      loan_percent_income,
      cb_person_cred_hist_length,
      credit_score,
      person_gender,
      person_home_ownership,
      loan_intent,
      previous_loan_defaults_on_file
    } = req.body;

    // Transform the input data into the format required by the Loan Approval API
    const transformedData = {
      person_age,
      person_income,
      person_emp_exp,
      loan_amnt,
      loan_int_rate,
      loan_percent_income,
      cb_person_cred_hist_length,
      credit_score,
      // Gender flags
      person_gender_female: person_gender.toLowerCase() === 'female',
      person_gender_male: person_gender.toLowerCase() === 'male',
      // Education flags (defaults set to false; adjust as needed)
      person_education_Associate: false,
      person_education_Bachelor: false,
      person_education_Doctorate: false,
      person_education_High_School: false,
      person_education_Master: false,
      // Home ownership flags
      person_home_ownership_MORTGAGE: person_home_ownership.toUpperCase() === 'MORTGAGE',
      person_home_ownership_OTHER: person_home_ownership.toUpperCase() === 'OTHER',
      person_home_ownership_OWN: person_home_ownership.toUpperCase() === 'OWN',
      person_home_ownership_RENT: person_home_ownership.toUpperCase() === 'RENT',
      // Loan intent flags
      loan_intent_DEBTCONSOLIDATION: loan_intent.toUpperCase() === 'DEBTCONSOLIDATION',
      loan_intent_EDUCATION: loan_intent.toUpperCase() === 'EDUCATION',
      loan_intent_HOMEIMPROVEMENT: loan_intent.toUpperCase() === 'HOMEIMPROVEMENT',
      loan_intent_MEDICAL: loan_intent.toUpperCase() === 'MEDICAL',
      loan_intent_PERSONAL: loan_intent.toUpperCase() === 'PERSONAL',
      loan_intent_VENTURE: loan_intent.toUpperCase() === 'VENTURE',
      // Previous loan default flags
      previous_loan_defaults_on_file_No: previous_loan_defaults_on_file.toLowerCase() === 'no',
      previous_loan_defaults_on_file_Yes: previous_loan_defaults_on_file.toLowerCase() === 'yes'
    };

    // Call the Loan Approval API hosted on Render
    const apiResponse = await axios.post(
      'https://felix-loan-pproval-api.onrender.com/predict',
      transformedData,
      { headers: { 'Content-Type': 'application/json' } }
    );

    // Return the prediction result to the client
    res.json(apiResponse.data);
  } catch (error) {
    console.error('Error calling Loan Approval API:', error);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
