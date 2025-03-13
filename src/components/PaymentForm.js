import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const [screenshot, setScreenshot] = useState(null);
    const [ccAvenueForm, setCcAvenueForm] = useState(null);
    const [paymentData, setPaymentData] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const [ccAvenueFormLoading, setCcAvenueFormLoading] = useState(false);
    const navigate = useNavigate();

    const handlePayment = async () => {
        setCcAvenueFormLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/ccavRequestHandler', {
                order_id: "order123", // Unique order ID
                amount: '100.00',  // Amount to be paid
                currency: 'INR',    // Currency
                redirect_url: 'http://localhost:3000/ccavResponseHandler',// URL to redirect after payment
                cancel_url: 'http://localhost:3000/ccavResponseHandler',  // URL to redirect if payment is cancelled
                merchant_id: "774747" //Your Merchant ID
            });

            setCcAvenueForm(response.data); // Store the CCAvenue form

            // Directly submit the form to CCAvenue after receiving it
            const form = document.createElement('form');
            form.innerHTML = response.data;
            document.body.appendChild(form);
            form.submit();
        } catch (error) {
            console.error("Error generating CCAvenue form:", error);
            alert("Error generating CCAvenue form. Please check the console for details.");
        } finally {
            setCcAvenueFormLoading(false);
        }
    };

    const handleScreenshotUpload = (event) => {
        const file = event.target.files[0];
        setScreenshot(file);
    };

    const handleSubmit = async (paymentData) => {
        setUploading(true);
        setUploadSuccess(false);
        setUploadError(null);

        if (!screenshot) {
            alert("Please upload a screenshot of the payment confirmation.");
            setUploading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('paymentData', paymentData);
            formData.append('screenshot', screenshot);

            const response = await axios.post('http://localhost:3001/upload-form', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setUploadSuccess(true);
                navigate("/submit-form");
            } else {
                throw new Error(`Upload failed with status ${response.status}`);
            }

            setUploading(false);
        } catch (error) {
            console.error("There was an error submitting the form:", error);
            setUploadError("There was an error submitting the form");
            setUploading(false);
        }
    };

    const handlePaymentData = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const paymentData = formData.get('paymentData');
        handleSubmit(paymentData);
    };

    return (
        <div>
            <h2>Payment Form</h2>
            <button onClick={handlePayment} disabled={ccAvenueFormLoading}>
                {ccAvenueFormLoading ? 'Loading CCAvenue Form...' : 'Pay with CCAvenue'}
            </button>

            <form id="payment-form" method="POST" encType="multipart/form-data" onSubmit={handlePaymentData}>
                <label htmlFor="screenshot">Upload Payment Screenshot:</label>
                <input type="file" id="screenshot" name="screenshot" accept="image/*" required onChange={handleScreenshotUpload} />
                <button type="submit" id="submit-button">Submit</button>
            </form>

            {uploadSuccess && <p>Upload successful!</p>}
            {uploadError && <p>Error: {uploadError}</p>}
            {uploading && <p>Uploading...</p>}
        </div>
    );
};

export default PaymentForm;