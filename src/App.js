// App.js
import React, { useState, useCallback, createContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ApplicantForm from './components/ApplicantForm';
import FlatDetailsForm from './components/FlatDetailsForm';
import Summary from './components/Summary';
import HomePage from './components/HomePage';
import TermsAndConditions from './components/TermsAndConditions';
import { FormProvider } from './FormContext'; // Import FormProvider
import { sendEmail } from './utils/api';
import './styles.css';

function App() {
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (formData) => {
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Sending JSON data
                },
                body: JSON.stringify(formData), // Convert the formData to JSON string
            });

            if (!response.ok) {
                // If the response status is not in the 200-299 range, handle as an error
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();

            if (responseData.message === 'Email sent successfully') {
                alert('Form submitted and email sent successfully!');
                navigate('/'); // Navigate on success
            } else {
                alert('Form submission failed: ' + responseData.message); // Show backend error message
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form and sending email: ' + error.message); // Alert the error message
        }
    }, [navigate]); // Add navigate as a dependency

    return (
        <div className="app-container">
            {/* Wrap your routes with FormProvider */}
            <FormProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/registration/applicant" element={<ApplicantForm />} />
                    <Route path="/registration/flat-details" element={<FlatDetailsForm />} />
                    <Route path="/registration/terms" element={<TermsAndConditions />} />
                    <Route path="/registration/summary" element={<Summary onSubmit={handleSubmit} />} />
                </Routes>
            </FormProvider>
        </div>
    );
}

export default App;