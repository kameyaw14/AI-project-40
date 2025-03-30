import { useState } from 'react';
import axios from 'axios';

const FraudDetecton = () => {

    const [formData, setFormData] = useState({
        amount: '',
        Actual_amount_orig: '',
        Actual_amount_dest: '',
        // Use transaction type booleans directly since the API now expects them
        type_CASH_IN: false,
        type_CASH_OUT: true,  // default selection
        type_DEBIT: false,
        type_PAYMENT: false,
        type_TRANSFER: false,
      });


      const [result, setResult] = useState(null);
      const [error, setError] = useState(null);

        // Handle changes for both number inputs and transaction type selection
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleTransactionType = (selectedType) => {
    // Update state so that only the selected type is true
    setFormData((prev) => ({
      ...prev,
      type_CASH_IN: selectedType === 'CASH_IN',
      type_CASH_OUT: selectedType === 'CASH_OUT',
      type_DEBIT: selectedType === 'DEBIT',
      type_PAYMENT: selectedType === 'PAYMENT',
      type_TRANSFER: selectedType === 'TRANSFER',
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/predict', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setResult(response.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Prediction failed. Please try again.');
      setResult(null);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Fraud Detection</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Actual Amount Origin:</label>
          <input
            type="number"
            name="Actual_amount_orig"
            value={formData.Actual_amount_orig}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Actual Amount Destination:</label>
          <input
            type="number"
            name="Actual_amount_dest"
            value={formData.Actual_amount_dest}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Transaction Type:</label>
          <select
            name="transactionType"
            onChange={(e) => handleTransactionType(e.target.value)}
            defaultValue="CASH_OUT"
          >
            <option value="CASH_IN">CASH_IN</option>
            <option value="CASH_OUT">CASH_OUT</option>
            <option value="DEBIT">DEBIT</option>
            <option value="PAYMENT">PAYMENT</option>
            <option value="TRANSFER">TRANSFER</option>
          </select>
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Predict Fraud
        </button>
      </form>
      {result && (
        <div style={{ marginTop: '1rem' }}>
          <h2>Prediction Result</h2>
          <p>
            <strong>Prediction:</strong>{' '}
            {result.prediction === 1 ? 'Fraudulent' : 'Legitimate'}
          </p>
          <p>
            <strong>Probability:</strong> {result.prediction_probability}
          </p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}


export default FraudDetecton