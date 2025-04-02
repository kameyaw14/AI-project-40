import { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { BadgeCheck, ChevronDown, Loader2, ShieldAlert } from 'lucide-react';

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
      const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 flex items-center justify-center gap-3">
            <ShieldAlert className="h-10 w-10 text-yellow-500" />
            Transaction Fraud Analysis
          </h1>
          <p className="text-gray-600 text-lg">
            Verify transaction legitimacy using our AI-powered detection system
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-yellow-50 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-black">Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-black">Actual Amount (Origin)</label>
              <input
                type="number"
                name="Actual_amount_orig"
                value={formData.Actual_amount_orig}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-black">Actual Amount (Dest)</label>
              <input
                type="number"
                name="Actual_amount_dest"
                value={formData.Actual_amount_dest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-black">Transaction Type</label>
              <div className="relative">
                <select
                  onChange={(e) => handleTransactionType(e.target.value)}
                  defaultValue="CASH_OUT"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 appearance-none bg-white"
                >
                  <option value="CASH_IN">CASH IN</option>
                  <option value="CASH_OUT">CASH OUT</option>
                  <option value="DEBIT">DEBIT</option>
                  <option value="PAYMENT">PAYMENT</option>
                  <option value="TRANSFER">TRANSFER</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze Transaction'
            )}
          </button>
        </form>

        {result && (
          <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              {result.prediction === 1 ? (
                <ShieldAlert className="h-6 w-6 text-red-600" />
              ) : (
                <BadgeCheck className="h-6 w-6 text-green-600" />
              )}
              {result.prediction === 1 ? 'Potential Fraud Detected' : 'Legitimate Transaction'}
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Confidence Level:</span>
                <span className={`font-semibold ${result.prediction === 1 ? 'text-red-600' : 'text-green-600'}`}>
                  {Math.round(result.prediction_probability * 100)}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${result.prediction === 1 ? 'bg-red-500' : 'bg-green-500'}`}
                  style={{ width: `${Math.round(result.prediction_probability * 100)}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
            <ShieldAlert className="h-5 w-5" />
            {error}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}


export default FraudDetecton