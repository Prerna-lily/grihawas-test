import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form'; // Correct import
import { calculateFlatCost } from '../utils/calculations';
import '../styles.css';
import './FlatDetailsForm.css';
import { useNavigate } from 'react-router-dom';
import logoOrange from './images/logo y.png';
import { FormContext } from '../FormContext';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const FlatDetailsForm = () => {
    const { updateFormData, formData: contextFormData } = useContext(FormContext);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, setValue, formState: { errors }, reset, getValues } = useForm(); // Added getValues here
    const asaCode = watch('asaCode');
    const flatType = watch('flatType');
    const powerBackup = watch('powerBackup');
    const parking = watch('parking');
    const [flatData, setFlatData] = useState(null);
    const [paymentProof, setPaymentProof] = useState(null); // Initialize to null
    const [applicationAmount, setApplicationAmount] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const gstRate = 0.01;
    const [calculatedTotalCost, setCalculatedTotalCost] = useState(0);

    useEffect(() => {
        // Initialize form with context data
        reset(contextFormData);
    }, [contextFormData, reset]);

    useEffect(() => {
        if (asaCode && flatType) {
            const calculatedData = calculateFlatCost(flatType);
            setFlatData(calculatedData);
            setValue('size', calculatedData.size)
            setValue('carpetArea', calculatedData.carpetArea)
            setValue('basicPrice', calculatedData.basicPrice)
            setValue('idc', calculatedData.idc)
            setValue('eec', calculatedData.eec)
            setValue('ffc', calculatedData.ffc)
        }
    }, [asaCode, flatType, setValue]);

    useEffect(() => {
        // Set application amount based on flatType
        if (flatType === 'T1') {
            setApplicationAmount(30000);
        } else if (flatType === 'T5') {
            setApplicationAmount(40000);
        }
    }, [flatType]);

    useEffect(() => {
        const parsedPowerBackup = Number(powerBackup) || 0;
        const parsedParking = Number(parking) || 0;

        if (flatData) {
            const totalCost = (
                (Number(flatData.basicPrice) || 0) +
                (Number(flatData.eec) || 0) +
                (Number(flatData.idc) || 0) +
                (Number(flatData.ffc) || 0) +
                parsedPowerBackup +
                parsedParking
            ) * (1 + gstRate);

            setCalculatedTotalCost(totalCost);
            setValue('totalCost', totalCost); // Update totalCost in form
        }
    }, [flatData, powerBackup, parking, setValue, gstRate]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPaymentProof(file);
    }

    useEffect(() => {
        updateFormData({ paymentProof: paymentProof })
    }, [paymentProof, updateFormData])

    const onSubmit = (data) => {
        // Include the paymentProof in the form data
        const finalData = { ...data, paymentProof: paymentProof };
        updateFormData(finalData);
        // Clear the form after submission
        reset();
        setPaymentProof(null);
        navigate('/registration/terms');
    };

    const sharedInputProps = {
        type: 'text',
        className: 'input-field',
        disabled: true
    };

    const handleBack = () => {
        navigate('/registration/applicant')
    };

    const handlePayNow = () => {
        setIsSubmitting(true);

        //const currentFormData = getValues(); // Get current form values
        //currentFormData.paymentProof = paymentProof; // Include the paymentProof

        const orderId = Math.random().toString(36).substring(7); // Generate Order ID

        // Construct the CCAvenue URL with necessary parameters.
        const ccAvenueUrl = `https://localhost/ccavenue/index.php?merchant_id=4158970&order_id=${orderId}&amount=${applicationAmount}¤cy=INR&redirect_url=${encodeURIComponent('https://localhost/registration/flat-details')}&cancel_url=${encodeURIComponent('https://localhost/ccavenue/ccAvResponseHandler.php')}&billing_name=${contextFormData.firstName}&billing_address=${contextFormData.address}&billing_city=${contextFormData.city}&billing_state=${contextFormData.state}&billing_zip=${contextFormData.pin}&billing_country=India&billing_tel=${contextFormData.phone}&billing_email=${contextFormData.email}`;

        // Redirect to CCAvenue
        window.location.href = ccAvenueUrl;
        setIsSubmitting(false);
    };

    return (
        <div className="applicantFormWithHeaderFooter">
            <div style={{ marginTop: '5px' }}>
                <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logoOrange} alt="Logo" className="logo" />
                        </Link>
                    </div>
                    <h2 style={{ marginBottom: '10px' }}>Flat Details</h2>

                    <div className="form-group">
                        <label>ASA Code:</label>
                        <input type="text" {...register('asaCode', { required: "ASA Code is required" })} className="input-field" required />
                        {errors.asaCode && <p className="error">{errors.asaCode.message}</p>}
                    </div>

                    <div className="form-group">
                        <label>Flat Type:</label>
                        <select name="flatType" {...register('flatType', { required: "Flat Type is required" })} className="input-field" required>
                            <option value="">Select Flat Type</option>
                            <option value="T1">T1(NEW)</option>
                            <option value="T5">T5</option>
                        </select>
                        {errors.flatType && <p className="error">{errors.flatType.message}</p>}
                    </div>

                    <div className="form-group">
                        <label>Size (MSSA):</label>
                        <input {...register('size')} {...sharedInputProps} />
                    </div>
                    <div className="form-group">
                        <label>Carpet Area:</label>
                        <input {...register('carpetArea')} {...sharedInputProps} />
                    </div>
                    <div className="form-group">
                        <label>Basic Sale Price:</label>
                        <input {...register('basicPrice')} {...sharedInputProps} />
                    </div>

                    <div className="form-group">
                        <label>Internal Development Charge (IDC):</label>
                        <input {...register('idc')} {...sharedInputProps} />
                    </div>
                    <div className="form-group">
                        <label>External Electrification Charge (EEC):</label>
                        <input {...register('eec')} {...sharedInputProps} />
                    </div>
                    <div className="form-group">
                        <label>Fire Fighting Charge (FFC):</label>
                        <input {...register('ffc')} {...sharedInputProps} />
                    </div>
                    <div className="form-group">
                        <label>Power Backup Charges (1 KVA) </label>
                        <input
                            type="text"
                            value="20000"
                            className="input-field"
                            disabled
                        />
                        <input
                            type="hidden"
                            {...register('powerBackup')}
                            value={20000}
                        />
                    </div>

                    <div className="form-group">
                        <label>Covered Car Parking Charges
                            <br /></label>
                        <input
                            type="text"
                            value="200000"
                            className="input-field"
                            disabled
                        />
                        <input
                            type="hidden"
                            {...register('parking')}
                            value={200000}
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            Total Flat Cost
                            Including 1% GST
                        </label>
                        <input type="text" value={calculatedTotalCost} disabled className="input-field" />
                    </div>

                    <div className="form-group">
                        <label>Application Amount Payable <br /> </label>
                        <input type="text" value={applicationAmount} disabled className="input-field" />
                    </div>
                    <button type="button" className="pay-now-button" onClick={handlePayNow} disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Pay Now"}
                    </button>

                    <div className="form-group">
                        <label className="">Disclaimer: The application amount is 100% refundable for unsuccessful
                            applicants in the Draw.</label>
                    </div>

                    <div className="form-group">
                        <label>Attach Payment Proof (10MB):</label>
                        <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} className="input-field" required />
                        {!paymentProof && <p className="error">Payment Proof is required</p>}
                    </div>

                    {/* Centered Button Container */}
                    <div className='centered-button-container'>
                        <button onClick={handleBack} className="back-button">Back</button>
                        <button type="submit" className="next-button">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FlatDetailsForm;