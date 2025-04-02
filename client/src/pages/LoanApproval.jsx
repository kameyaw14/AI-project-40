import axios from 'axios';
import React, { useState } from 'react';
import { BadgeCheck, ShieldAlert, Loader2, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import  { Tooltip } from 'react-tooltip';

const LoanApproval = () => {
  const [formData, setFormData] = useState({
    person_age: '',
    person_income: '',
    person_emp_exp: '',
    loan_amnt: '',
    loan_int_rate: '',
    loan_percent_income: '',
    cb_person_cred_hist_length: '',
    credit_score: '',
    person_gender: '',
    person_home_ownership: '',
    loan_intent: '',
    previous_loan_defaults_on_file: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const payload = {
        person_age: parseFloat(formData.person_age),
        person_income: parseFloat(formData.person_income),
        person_emp_exp: parseFloat(formData.person_emp_exp),
        loan_amnt: parseFloat(formData.loan_amnt),
        loan_int_rate: parseFloat(formData.loan_int_rate),
        loan_percent_income: parseFloat(formData.loan_percent_income),
        cb_person_cred_hist_length: parseFloat(formData.cb_person_cred_hist_length),
        credit_score: parseInt(formData.credit_score, 10),
        person_gender: formData.person_gender,
        person_home_ownership: formData.person_home_ownership,
        loan_intent: formData.loan_intent,
        previous_loan_defaults_on_file: formData.previous_loan_defaults_on_file
      };

      const response = await axios.post('/api/loan/predict', payload);
      setPrediction(response.data);
      setError(null);
    } catch (err) {
      console.error('Error during prediction:', err);
      setError('Prediction failed. Please check your inputs and try again.');
      setPrediction(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Tooltip 
        effect="solid"
        place="top"
        className="!bg-black !text-xs !py-1 !px-2"
      />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 flex items-center justify-center gap-3">
            <BadgeCheck className="h-10 w-10 text-yellow-500" />
            Loan Approval Prediction
          </h1>
          <p className="text-gray-600 text-lg">
            Get instant loan eligibility assessment using our AI-powered system
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-yellow-50 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              ['person_age', 'Age', 'number', {}, 'Applicant age (18-100)'],
              ['person_income', 'Annual Income ($)', 'number', {}, 'Gross annual income before taxes'],
              ['person_emp_exp', 'Employment Experience (years)', 'number', {}, 'Years of employment history'],
              ['loan_amnt', 'Loan Amount ($)', 'number', {}, 'Requested loan amount in USD'],
              ['loan_int_rate', 'Interest Rate (%)', 'number', { step: "0.1" }, 'Annual interest rate percentage'],
              ['loan_percent_income', 'Income Percentage', 'number', { step: "0.01" }, 'Loan amount divided by annual income'],
              ['cb_person_cred_hist_length', 'Credit History (years)', 'number', {}, 'Years of credit history'],
              ['credit_score', 'Credit Score', 'number', {}, 'FICO score range (300-850)'],
            ].map(([name, label, type, extras, hint]) => (
              <div key={name} className="space-y-1">
                <div className="flex items-center gap-1">
                  <label className="block text-sm font-semibold text-black">{label}</label>
                  <Info className="h-4 w-4 text-gray-400"  data-tooltip-id="form-tooltip"
  data-tooltip-content={hint}/>
                </div>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                  {...(extras || {})}
                />
                <span className="text-sm text-gray-500">{hint}</span>
              </div>
            ))}

            {/* Dropdown Inputs */}
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <label className="block text-sm font-semibold text-black">Gender</label>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <select
                name="person_gender"
                value={formData.person_gender}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span className="text-sm text-gray-500">Applicant's gender</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <label className="block text-sm font-semibold text-black">Home Ownership</label>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <select
                name="person_home_ownership"
                value={formData.person_home_ownership}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              >
                <option value="">Select Ownership</option>
                <option value="MORTGAGE">Mortgage</option>
                <option value="OWN">Own</option>
                <option value="RENT">Rent</option>
                <option value="OTHER">Other</option>
              </select>
              <span className="text-sm text-gray-500">Current housing situation</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <label className="block text-sm font-semibold text-black">Loan Purpose</label>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <select
                name="loan_intent"
                value={formData.loan_intent}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              >
                <option value="">Select Purpose</option>
                <option value="DEBTCONSOLIDATION">Debt Consolidation</option>
                <option value="EDUCATION">Education</option>
                <option value="HOMEIMPROVEMENT">Home Improvement</option>
                <option value="MEDICAL">Medical</option>
                <option value="PERSONAL">Personal</option>
                <option value="VENTURE">Business</option>
              </select>
              <span className="text-sm text-gray-500">Intended use of loan funds</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <label className="block text-sm font-semibold text-black">Previous Defaults</label>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <select
                name="previous_loan_defaults_on_file"
                value={formData.previous_loan_defaults_on_file}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              >
                <option value="">Select History</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              <span className="text-sm text-gray-500">History of previous loan defaults</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Check Eligibility'
            )}
          </button>
        </form>

        {prediction && (
          <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              {prediction.prediction === 0 ? (
                <>
                  <BadgeCheck className="h-6 w-6 text-green-600" />
                  Loan Approved
                </>
              ) : (
                <>
                  <ShieldAlert className="h-6 w-6 text-red-600" />
                  Loan Denied
                </>
              )}
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Confidence Level:</span>
                <span className={`font-semibold ${prediction.prediction === 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {Math.round(prediction.prediction_probability * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${prediction.prediction === 0 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${Math.round(prediction.prediction_probability * 100)}%` }}
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

export default LoanApproval;