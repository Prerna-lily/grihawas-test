import React, { useContext, useState } from 'react';
import '../styles.css';
import './Summary.css';
import { useNavigate } from 'react-router-dom';
import logoOrange from './images/logo y.png';
import { FormContext } from '../FormContext';
import checkicon from './images/checkicon.png';

const Summary = () => {
    const navigate = useNavigate();
    const { formData } = useContext(FormContext);
    const [showThankYou, setShowThankYou] = useState(false); // State to control modal visibility

    const handleLogoClick = () => {
        navigate('/');
    };

    const renderApplicantDetails = () => {
        const { firstName, lastName, fatherName, dob, gender, phone, email, address, state, city, pin, pan, aadhar, addSecondApplicant, secondFirstName, secondLastName, secondFatherName, secondDob, secondGender, secondPhone, secondEmail, secondAddress, secondState, secondCity, secondPin, secondPan, secondAadhar } = formData;
        return (
            <div className="summary-section">
                <h3>{addSecondApplicant ? "First Applicant Details:" : "Sole Applicant's Details:"}</h3>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Father’s Name:</strong> {fatherName}</p>
                <p><strong>D.O.B.:</strong> {dob}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Ph. no.:</strong> {phone}</p>
                <p><strong>Email ID:</strong> {email}</p>
                <p><strong>Residential Address:</strong> {address}</p>
                <p><strong>State:</strong> {state}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>PIN:</strong> {pin}</p>
                <p><strong>Pan No.:</strong> {pan}</p>
                <p><strong>Aadhar No.:</strong> {aadhar}</p>
                {addSecondApplicant && (
                    <>
                        <h3>Second Applicant Details:</h3>
                        <p><strong>First Name:</strong> {secondFirstName}</p>
                        <p><strong>Last Name:</strong> {secondLastName}</p>
                        <p><strong>Father’s Name:</strong> {secondFatherName}</p>
                        <p><strong>D.O.B.:</strong> {secondDob}</p>
                        <p><strong>Gender:</strong> {secondGender}</p>
                        <p><strong>Ph. no.:</strong> {secondPhone}</p>
                        <p><strong>Email ID:</strong> {secondEmail}</p>
                        <p><strong>Residential Address:</strong> {secondAddress}</p>
                        <p><strong>State:</strong> {secondState}</p>
                        <p><strong>City:</strong> {secondCity}</p>
                        <p><strong>PIN:</strong> {secondPin}</p>
                        {/* Use first applicant's PAN and Aadhar if addSecondApplicant is true and secondPan/secondAadhar is empty */}
                        <p><strong>Pan No.:</strong> {secondPan || pan}</p>
                        <p><strong>Aadhar No.:</strong> {secondAadhar || aadhar}</p>
                    </>
                )}
            </div>
        );
    };

    const renderFlatDetails = () => {
        const { asaCode, flatType, size, carpetArea, basicPrice, idc, eec, ffc, powerBackup, parking, totalCost } = formData;
        return (
            <div className="summary-section">
                <h3>Flat Details:</h3>
                <p><strong>ASA Code:</strong> {asaCode}</p>
                <p><strong>Flat Type:</strong> {flatType}</p>
                <p><strong>Size (MSSA):</strong> {size}</p>
                <p><strong>Carpet Area:</strong> {carpetArea}</p>
                <p><strong>Basic Sale Price:</strong> {basicPrice}</p>
                <p><strong>Internal Development Charge (IDC):</strong> {idc}</p>
                <p><strong>External Electrification Charge (EEC):</strong> {eec}</p>
                <p><strong>Fire Fighting Charge (FFC):</strong> {ffc}</p>
                <p><strong>Power Backup @Rs.20000 Per KVA:</strong> {powerBackup}</p>
                <p><strong>Covered Car Parking:</strong> {parking}</p>
                <p><strong>Total Flat Cost:</strong> {totalCost}</p>
            </div>
        );
    };

    const handleBack = () => {
        navigate('/registration/flat-details');
    };

    const handleSubmit = async () => {
        try {
            // You can directly call sendEmail with the formData
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.message === 'Email sent successfully') {
                setShowThankYou(true); // Show the thank you message
            } else {
                alert('Form submission failed. ' + data.message);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error submitting form: ' + error.message);
        }
    };

    const handleOkClick = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="summary-container">
            {/* Logo */}
            <div className="logo-container">
                <a onClick={handleLogoClick}> {/* Directly call handleLogoClick */}
                    <img src={logoOrange} alt="log" className="logo" />
                </a>
            </div>

            {/* Form Content */}
            <div className="form-container">
                <br />
                <br />
                <h2>Summary</h2>
                {renderApplicantDetails()}
                {renderFlatDetails()}
                <div className='form-group'>
                    <button onClick={handleBack} className="back-button">Back</button>
                    <button onClick={handleSubmit} className="submit-button" disabled={showThankYou}>
                        {showThankYou ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>

            {/* Thank You Message (Conditionally Rendered) */}
            {showThankYou && (
                <div className="thank-you-modal">
                    <div className="thank-you-content">
                        <img src={checkicon} alt="Success" className="thank-you-icon" />
                        <h2>THANK YOU</h2>
                        <p>Your application has been successfully submitted, and your payment is currently under verification. Any further communications will be sent to your registered contact details.</p>
                        <button className="ok-button" onClick={handleOkClick}>OK</button> {/* OK button */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Summary;